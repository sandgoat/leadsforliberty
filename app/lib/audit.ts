/**
 * Capture audit engine (server-only).
 *
 * Fetches a prospect's homepage, extracts their contact info and the signals
 * that determine how well they capture and book inbound demand, scores it,
 * and estimates the monthly booking opportunity they are leaving on the table.
 *
 * Real, no-key checks: site fetch, contact extraction, on-page capture signals.
 * Env-gated enrichment: Google Business Profile (GOOGLE_PLACES_API_KEY).
 */

import { lookup } from 'node:dns/promises';
import { isIP } from 'node:net';

export type FindingStatus = 'good' | 'warn' | 'bad';

export type Finding = {
  key: string;
  label: string;
  status: FindingStatus;
  detail: string;
  /** Estimated monthly $ left on the table when this is a gap. */
  impact: number;
  /** Gated findings only show in the full (post-email) report. */
  gated: boolean;
};

export type Social = { type: string; url: string };

export type AuditResult = {
  ok: boolean;
  error?: string;
  url: string;
  finalUrl: string;
  business: {
    name?: string;
    emails: string[];
    phones: string[];
    socials: Social[];
  };
  signals: {
    https: boolean;
    mobile: boolean;
    clickToCall: boolean;
    onlineBooking: boolean;
    chat: boolean;
    contactForm: boolean;
  };
  gbp: { found: boolean; rating?: number; reviews?: number; name?: string } | null;
  score: number;
  findings: Finding[];
  estimateMonthly: number;
  estimateAssumptions: string[];
};

const FETCH_TIMEOUT_MS = 9000;
const MAX_HTML = 600_000;
const MAX_REDIRECTS = 4;

export function normalizeUrl(input: string): string | null {
  let raw = (input || '').trim();
  if (!raw) return null;
  if (!/^https?:\/\//i.test(raw)) raw = 'https://' + raw;
  try {
    const u = new URL(raw);
    if (!u.hostname.includes('.')) return null;
    return u.toString();
  } catch {
    return null;
  }
}

/** SSRF guard: block loopback, private, link-local, CGNAT, multicast, and cloud-metadata IPs. */
function isBlockedIp(ip: string): boolean {
  const v = ip.toLowerCase();
  if (v.includes(':')) {
    if (v === '::1' || v === '::') return true;
    if (/^fe[89ab]/.test(v)) return true; // fe80::/10 link-local
    if (v.startsWith('fc') || v.startsWith('fd')) return true; // fc00::/7 unique-local
    const mapped = v.match(/(?:::ffff:)(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/);
    if (mapped) return isBlockedIp(mapped[1]);
    return false;
  }
  const p = v.split('.').map((n) => parseInt(n, 10));
  if (p.length !== 4 || p.some((n) => Number.isNaN(n) || n < 0 || n > 255)) return true;
  const [a, b] = p;
  if (a === 0 || a === 10 || a === 127) return true;
  if (a === 169 && b === 254) return true; // link-local + 169.254.169.254 metadata
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 100 && b >= 64 && b <= 127) return true; // CGNAT
  if (a >= 224) return true; // multicast / reserved
  return false;
}

/** Reject internal hostnames or any host that resolves to a non-public IP. */
async function assertPublicHost(hostname: string): Promise<void> {
  const host = hostname.toLowerCase().replace(/\.$/, '');
  if (isIP(host)) {
    if (isBlockedIp(host)) throw new Error('blocked-address');
    return;
  }
  if (host === 'localhost' || host.endsWith('.localhost') || host.endsWith('.local') || host.endsWith('.internal')) {
    throw new Error('blocked-address');
  }
  let addrs: { address: string }[];
  try {
    addrs = await lookup(host, { all: true });
  } catch {
    throw new Error('dns-failed');
  }
  if (!addrs.length) throw new Error('dns-empty');
  for (const a of addrs) {
    if (isBlockedIp(a.address)) throw new Error('blocked-address');
  }
}

/**
 * SSRF-safe fetch: validates protocol + DNS-resolved IP before every hop and
 * follows redirects manually, so a redirect to an internal address is also caught.
 */
async function fetchHtml(url: string): Promise<{ html: string; finalUrl: string; https: boolean }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    let current = url;
    for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
      const u = new URL(current);
      if (u.protocol !== 'http:' && u.protocol !== 'https:') throw new Error('bad-protocol');
      await assertPublicHost(u.hostname);

      const res = await fetch(current, {
        signal: controller.signal,
        redirect: 'manual',
        headers: {
          'User-Agent':
            'Mozilla/5.0 (compatible; LeadsForLibertyAudit/1.0; +https://www.leadsforliberty.com)',
          Accept: 'text/html,application/xhtml+xml',
        },
      });

      if (res.status >= 300 && res.status < 400) {
        const loc = res.headers.get('location');
        if (!loc) throw new Error('redirect-no-location');
        current = new URL(loc, current).toString();
        continue;
      }

      const buf = await res.text();
      return { html: buf.slice(0, MAX_HTML), finalUrl: current, https: current.startsWith('https://') };
    }
    throw new Error('too-many-redirects');
  } finally {
    clearTimeout(timer);
  }
}

const EMAIL_RE = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi;
const JUNK_EMAIL = /(example\.|sentry|wixpress|\.png|\.jpg|\.gif|\.webp|@2x|domain\.com|email\.com|yourcompany)/i;

/** Decode the common HTML entities so names render as text, not "&amp;". */
function decodeEntities(s: string): string {
  return s
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&apos;|&#0*39;|&#x0*27;/gi, "'")
    .replace(/&nbsp;/gi, ' ')
    .replace(/&#x([0-9a-f]+);/gi, (m, h) => {
      const n = parseInt(h, 16);
      return n > 0 && n <= 0x10ffff ? String.fromCodePoint(n) : m;
    })
    .replace(/&#(\d+);/g, (m, d) => {
      const n = parseInt(d, 10);
      return n > 0 && n <= 0x10ffff ? String.fromCodePoint(n) : m;
    })
    .replace(/&amp;/gi, '&')
    .trim();
}

/** Obvious placeholder / fictional numbers (the 555 exchange, repeated digits, etc.). */
function isFakePhone(s: string): boolean {
  const d = s.replace(/\D/g, '');
  if (d.length < 7) return true;
  const core = d.length >= 11 && d.startsWith('1') ? d.slice(1, 11) : d.length >= 10 ? d.slice(-10) : d.slice(-7);
  if (/^(\d)\1+$/.test(core)) return true; // all identical digits
  if (/5{7}/.test(d)) return true; // 555-5555 family
  const exchange = core.length === 10 ? core.slice(3, 6) : core.slice(0, 3);
  if (exchange === '555') return true; // fictional 555 exchange
  if (core.endsWith('1234567') || core === '1234567890') return true;
  return false;
}

function extractEmails(html: string): string[] {
  const out = new Set<string>();
  const matches = html.match(EMAIL_RE) || [];
  for (const m of matches) {
    const e = m.toLowerCase();
    if (!JUNK_EMAIL.test(e)) out.add(e);
    if (out.size >= 5) break;
  }
  return [...out];
}

function extractPhones(html: string): string[] {
  const out = new Set<string>();
  // Prefer explicit tel: links, then loose US patterns. Drop obvious fakes.
  const tel = html.match(/tel:\+?[0-9().\-\s]{7,}/gi) || [];
  for (const t of tel) {
    const v = t.replace(/^tel:/i, '').trim();
    if (!isFakePhone(v)) out.add(v);
  }
  if (out.size === 0) {
    const loose = html.match(/(\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/g) || [];
    for (const p of loose) {
      const v = p.trim();
      if (isFakePhone(v)) continue;
      out.add(v);
      if (out.size >= 3) break;
    }
  }
  return [...out].slice(0, 3);
}

const SOCIAL_HOSTS: { type: string; re: RegExp }[] = [
  { type: 'Facebook', re: /https?:\/\/(?:www\.)?facebook\.com\/[A-Za-z0-9._%\-/]+/i },
  { type: 'Instagram', re: /https?:\/\/(?:www\.)?instagram\.com\/[A-Za-z0-9._%\-/]+/i },
  { type: 'YouTube', re: /https?:\/\/(?:www\.)?youtube\.com\/[A-Za-z0-9._%\-/@]+/i },
  { type: 'TikTok', re: /https?:\/\/(?:www\.)?tiktok\.com\/@[A-Za-z0-9._%\-/]+/i },
  { type: 'LinkedIn', re: /https?:\/\/(?:www\.)?linkedin\.com\/[A-Za-z0-9._%\-/]+/i },
  { type: 'Yelp', re: /https?:\/\/(?:www\.)?yelp\.com\/biz\/[A-Za-z0-9._%\-/]+/i },
  { type: 'X', re: /https?:\/\/(?:www\.)?(?:twitter|x)\.com\/[A-Za-z0-9._%\-/]+/i },
];

function extractSocials(html: string): Social[] {
  const out: Social[] = [];
  for (const { type, re } of SOCIAL_HOSTS) {
    const m = html.match(re);
    if (m) out.push({ type, url: m[0] });
  }
  return out;
}

function extractTitle(html: string): string | undefined {
  const m = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (!m) return undefined;
  const cleaned = m[1].replace(/\s*[|\-–—].*$/, '').trim() || m[1].trim();
  return decodeEntities(cleaned);
}

const BOOKING_RE =
  /(calendly\.com|acuityscheduling|squareup\.com\/appointments|book(?:ing)?\s*now|book\s*online|schedule\s*(?:now|online|appointment)|vagaro|booksy|gingrapp|setmore|appointments?\b|\/book\b|book-now|request\s*appointment)/i;
const CHAT_RE =
  /(tawk\.to|intercom|drift\.com|crisp\.chat|livechat|tidio|gohighlevel|leadconnector|widget.*chat|fb-customerchat|messenger)/i;
const FORM_RE = /<form[\s>]/i;

function detectSignals(html: string, https: boolean) {
  return {
    https,
    mobile: /<meta[^>]+name=["']viewport["']/i.test(html),
    clickToCall: /tel:\+?[0-9]/i.test(html),
    onlineBooking: BOOKING_RE.test(html),
    chat: CHAT_RE.test(html),
    contactForm: FORM_RE.test(html),
  };
}

/** Google Business Profile lookup. No-op unless GOOGLE_PLACES_API_KEY is set. */
async function lookupGbp(name: string | undefined, finalUrl: string) {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key || !name) return null;
  try {
    const host = new URL(finalUrl).hostname.replace(/^www\./, '');
    const q = encodeURIComponent(`${name} ${host}`);
    const searchUrl =
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${q}&key=${key}`;
    const sr = await fetch(searchUrl);
    const sj = (await sr.json()) as {
      results?: { place_id: string; rating?: number; user_ratings_total?: number; name?: string }[];
    };
    const top = sj.results?.[0];
    if (!top) return { found: false };
    return {
      found: true,
      rating: top.rating,
      reviews: top.user_ratings_total,
      name: top.name,
    };
  } catch {
    return null;
  }
}

export async function runAudit(inputUrl: string): Promise<AuditResult> {
  const url = normalizeUrl(inputUrl);
  const base: AuditResult = {
    ok: false,
    url: inputUrl,
    finalUrl: url || inputUrl,
    business: { emails: [], phones: [], socials: [] },
    signals: { https: false, mobile: false, clickToCall: false, onlineBooking: false, chat: false, contactForm: false },
    gbp: null,
    score: 0,
    findings: [],
    estimateMonthly: 0,
    estimateAssumptions: [],
  };

  if (!url) {
    return { ...base, error: 'That does not look like a valid website address.' };
  }

  let html = '';
  let finalUrl = url;
  let https = url.startsWith('https://');
  try {
    const r = await fetchHtml(url);
    html = r.html;
    finalUrl = r.finalUrl;
    https = r.https;
  } catch {
    return { ...base, finalUrl: url, error: 'We could not reach that site. Check the address and try again.' };
  }

  const name = extractTitle(html);
  const emails = extractEmails(html);
  const phones = extractPhones(html);
  const socials = extractSocials(html);
  const signals = detectSignals(html, https);
  const gbp = await lookupGbp(name, finalUrl);

  // ---- Scoring rubric (weights sum to 90, GBP adds the final 10) ----
  const weights = {
    onlineBooking: 25,
    clickToCall: 15,
    contact: 10, // email or contact form present
    chat: 10,
    mobile: 10,
    https: 10,
    socials: 10,
  };
  let raw = 0;
  let max = 90;
  if (signals.onlineBooking) raw += weights.onlineBooking;
  if (signals.clickToCall) raw += weights.clickToCall;
  if (emails.length > 0 || signals.contactForm) raw += weights.contact;
  if (signals.chat) raw += weights.chat;
  if (signals.mobile) raw += weights.mobile;
  if (signals.https) raw += weights.https;
  if (socials.length >= 2) raw += weights.socials;

  if (gbp && gbp.found) {
    max += 10;
    const strong = (gbp.rating ?? 0) >= 4.5 && (gbp.reviews ?? 0) >= 25;
    if (strong) raw += 10;
    else if ((gbp.reviews ?? 0) >= 10) raw += 5;
  }
  const score = Math.max(5, Math.round((raw / max) * 100));

  // ---- Findings + opportunity estimate ----
  const findings: Finding[] = [];
  const add = (
    key: string,
    label: string,
    ok: boolean,
    goodDetail: string,
    badDetail: string,
    impact: number,
    gated = false,
    warn = false,
  ) => {
    findings.push({
      key,
      label,
      status: ok ? 'good' : warn ? 'warn' : 'bad',
      detail: ok ? goodDetail : badDetail,
      impact: ok ? 0 : impact,
      gated,
    });
  };

  add('booking', 'Online booking', signals.onlineBooking,
    'Clients can book themselves into open slots.',
    'No way to book online, so inquiries depend on you replying in time.', 1500);
  add('text-back', 'Missed-call capture', signals.chat || signals.onlineBooking,
    'You have an after-hours / overflow capture path.',
    'A missed call has nowhere to go, it just rings out.', 1200);
  add('click-to-call', 'Click-to-call', signals.clickToCall,
    'Mobile visitors can call you in one tap.',
    'No tap-to-call link, so mobile visitors have to copy your number.', 600);
  add('contact', 'Visible contact info', emails.length > 0 || signals.contactForm,
    'Your contact details are easy to find.',
    'We could not find an easy way for a customer to reach you.', 400);
  // Gated (full-report) findings:
  add('chat', 'After-hours capture', signals.chat,
    'A chat or widget captures visitors when you are closed.',
    'After-hours visitors leave with no way to start a conversation.', 700, true);
  add('reviews', 'Google reviews',
    !!(gbp && gbp.found && (gbp.reviews ?? 0) >= 25 && (gbp.rating ?? 0) >= 4.5),
    gbp && gbp.found ? `${gbp.reviews} reviews at ${gbp.rating} stars.` : 'Strong review presence.',
    gbp && gbp.found
      ? `Only ${gbp.reviews ?? 0} reviews at ${gbp.rating ?? '?'} stars, below what wins the click.`
      : 'We could not verify a strong Google review presence.',
    800, true, !!(gbp && gbp.found));
  add('mobile', 'Mobile-ready site', signals.mobile,
    'Your site is built for phones.',
    'No mobile viewport, the site likely renders poorly on phones.', 500, true);
  add('reactivation', 'Past-client reactivation', false,
    'You re-book past clients automatically.',
    'No automatic win-back, past clients are not being re-booked.', 600, true);

  const estimateMonthly = findings.reduce((s, f) => s + f.impact, 0);
  const estimateAssumptions = [
    'Based on typical inbound volume for a local appointment-based business.',
    'Assumes an average booking value and the share of inquiries usually lost without a capture system.',
    'Your real number depends on your call volume, pricing, and current close rate. We confirm it on your call.',
  ];

  return {
    ok: true,
    url: inputUrl,
    finalUrl,
    business: { name, emails, phones, socials },
    signals,
    gbp,
    score,
    findings,
    estimateMonthly,
    estimateAssumptions,
  };
}
