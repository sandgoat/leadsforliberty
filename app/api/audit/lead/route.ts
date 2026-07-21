export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type LeadBody = {
  email?: string;
  businessName?: string;
  website?: string;
  phone?: string;
  score?: number;
  estimateMonthly?: number;
  /** True when the site could not be scanned automatically and needs a hand audit. */
  manual?: boolean;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Creates the audit lead in GoHighLevel.
 * Requires GHL_API_KEY (Private Integration token) and GHL_LOCATION_ID.
 * If those are not set, the submission is logged and the flow still succeeds,
 * so the audit experience works in development before the CRM is wired.
 */
async function createGhlContact(body: LeadBody): Promise<{ ok: boolean; reason?: string }> {
  const token = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) {
    console.warn('[audit/lead] GHL env not set, lead not pushed to CRM:', {
      email: body.email,
      website: body.website,
      score: body.score,
      estimateMonthly: body.estimateMonthly,
    });
    return { ok: true, reason: 'crm-not-configured' };
  }

  const scoreBucket =
    typeof body.score === 'number' ? (body.score < 50 ? 'low' : body.score < 75 ? 'medium' : 'high') : 'unknown';

  const tags = ['website-audit', `capture-score-${scoreBucket}`];
  if (body.manual) tags.push('manual-audit');

  const res = await fetch('https://services.leadconnectorhq.com/contacts/', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Version: '2021-07-28',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      locationId,
      email: body.email,
      name: body.businessName || undefined,
      phone: body.phone || undefined,
      website: body.website || undefined,
      source: body.manual ? 'Manual Capture Audit Request' : 'Website Capture Audit',
      tags,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    console.error('[audit/lead] GHL error', res.status, text);
    return { ok: false, reason: `crm-error-${res.status}` };
  }
  return { ok: true };
}

export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  if (!body.email || !EMAIL_RE.test(body.email)) {
    return Response.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });
  }

  try {
    const result = await createGhlContact(body);
    // Even if the CRM push fails, do not block the user from their report.
    return Response.json({ ok: true, crm: result.reason ?? 'created' });
  } catch {
    return Response.json({ ok: true, crm: 'error' });
  }
}
