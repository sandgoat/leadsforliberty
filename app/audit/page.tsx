'use client';

import { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Globe,
  ArrowRight,
  CheckCircle,
  XCircle,
  Warning,
  Lock,
  EnvelopeSimple,
  Phone,
  ShareNetwork,
  TrendUp,
  CircleNotch,
} from '@phosphor-icons/react';
import type { AuditResult, Finding } from '@/app/lib/audit';

function scoreColor(score: number) {
  if (score < 50) return '#B91C1C';
  if (score < 75) return '#C2942A';
  return '#0B8043';
}

function StatusIcon({ status }: { status: Finding['status'] }) {
  if (status === 'good') return <CheckCircle size={20} weight="fill" color="#0B8043" aria-hidden="true" />;
  if (status === 'warn') return <Warning size={20} weight="fill" color="#C2942A" aria-hidden="true" />;
  return <XCircle size={20} weight="fill" color="#B91C1C" aria-hidden="true" />;
}

function FindingRow({ f }: { f: Finding }) {
  return (
    <div className="flex items-start gap-3" style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--color-warm-border)' }}>
      <span style={{ marginTop: '1px' }}>
        <StatusIcon status={f.status} />
      </span>
      <div>
        <p className="font-body font-semibold text-navy" style={{ fontSize: '0.9375rem' }}>{f.label}</p>
        <p className="font-body text-warm-gray" style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>{f.detail}</p>
      </div>
    </div>
  );
}

function AuditClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const site = sp.get('site') || '';

  const [input, setInput] = useState(site);
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>(site ? 'loading' : 'idle');
  const [data, setData] = useState<AuditResult | null>(null);
  const [err, setErr] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [emailErr, setEmailErr] = useState('');
  const [manualSent, setManualSent] = useState(false);

  const ranFor = useRef<string>('');

  const analyze = useCallback(async (url: string) => {
    setStatus('loading');
    setErr('');
    setUnlocked(false);
    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const json = (await res.json()) as AuditResult;
      if (!json.ok) {
        setErr(json.error || 'We could not analyze that site.');
        setStatus('error');
        return;
      }
      setData(json);
      setStatus('done');
    } catch {
      setErr('Something went wrong. Please try again.');
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    setInput(site);
    if (site && ranFor.current !== site) {
      ranFor.current = site;
      analyze(site);
    }
    if (!site) setStatus('idle');
  }, [site, analyze]);

  const submitSite = (e: React.FormEvent) => {
    e.preventDefault();
    const v = input.trim();
    if (!v) return;
    router.push(`/audit?site=${encodeURIComponent(v)}`);
  };

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailErr('Please enter a valid email.');
      return;
    }
    setEmailErr('');
    setSending(true);
    try {
      await fetch('/api/audit/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          businessName: data.business.name,
          website: data.finalUrl,
          phone: data.business.phones[0],
          score: data.score,
          estimateMonthly: data.estimateMonthly,
        }),
      });
    } catch {
      // The report still unlocks even if the CRM call fails.
    } finally {
      setSending(false);
      setUnlocked(true);
    }
  };

  const submitManual = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailErr('Please enter a valid email.');
      return;
    }
    setEmailErr('');
    setSending(true);
    try {
      await fetch('/api/audit/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website: input || site, manual: true }),
      });
    } catch {
      // Still confirm to the user; the request is captured on our side.
    } finally {
      setSending(false);
      setManualSent(true);
    }
  };

  const ungated = data?.findings.filter((f) => !f.gated) ?? [];
  const gated = data?.findings.filter((f) => f.gated) ?? [];

  return (
    <div className="page-container" style={{ paddingTop: '3rem', paddingBottom: '5rem', maxWidth: '56rem' }}>
      {/* Site input */}
      <p className="font-body font-semibold uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: 'var(--color-crimson)', marginBottom: '1rem' }}>
        Free capture audit
      </p>
      <form onSubmit={submitSite} style={{ display: 'flex', gap: '8px', maxWidth: '560px', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        <div style={{ flex: '1 1 240px', display: 'flex', alignItems: 'center', gap: '8px', background: '#fff', border: '1.5px solid var(--color-navy)', borderRadius: '6px', padding: '0.75rem 0.875rem' }}>
          <Globe size={18} color="#6B6560" aria-hidden="true" />
          <input
            type="text"
            inputMode="url"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="yourbusiness.com"
            aria-label="Your website address"
            className="font-body"
            style={{ flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent', fontSize: '1rem', color: 'var(--color-navy)' }}
          />
        </div>
        <button type="submit" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
          Analyze
          <ArrowRight size={16} weight="bold" aria-hidden="true" />
        </button>
      </form>

      {status === 'idle' && (
        <p className="font-body text-warm-gray">Enter your website above to see where you are leaking bookings.</p>
      )}

      {status === 'loading' && (
        <div className="flex items-center gap-3" style={{ color: 'var(--color-navy)' }}>
          <span style={{ display: 'inline-flex', animation: 'spin 1s linear infinite' }}>
            <CircleNotch size={22} weight="bold" aria-hidden="true" />
          </span>
          <span className="font-body">Reading {input || 'your site'}, checking booking, contact, and reviews...</span>
          <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
        </div>
      )}

      {status === 'error' && (
        <div style={{ background: 'var(--color-navy)', borderRadius: '12px', padding: '1.75rem', maxWidth: '620px' }}>
          {!manualSent ? (
            <>
              <p className="font-display font-bold text-white" style={{ fontSize: '1.375rem', marginBottom: '0.5rem' }}>
                We will audit this one by hand.
              </p>
              <p className="font-body" style={{ color: 'rgba(250,248,245,0.78)', fontSize: '0.9375rem', marginBottom: '1.25rem', maxWidth: '54ch' }}>
                Some sites block automated tools, so we could not scan {input || 'your site'} instantly. Leave your email and a specialist will audit it by hand and send your full report within one business day.
              </p>
              <form onSubmit={submitManual} style={{ display: 'flex', gap: '8px', maxWidth: '480px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 220px', display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '6px', padding: '0.75rem 0.875rem' }}>
                  <EnvelopeSimple size={18} color="rgba(250,248,245,0.6)" aria-hidden="true" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@yourbusiness.com"
                    aria-label="Your email"
                    className="font-body"
                    style={{ flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent', fontSize: '1rem', color: '#fff' }}
                  />
                </div>
                <button type="submit" className="btn-primary" disabled={sending} style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', opacity: sending ? 0.7 : 1 }}>
                  {sending ? 'Sending...' : 'Get my manual audit'}
                </button>
              </form>
              {emailErr && <p className="font-body" style={{ color: '#FCA5A5', fontSize: '0.8125rem', marginTop: '0.5rem' }}>{emailErr}</p>}
              <p className="font-body" style={{ color: 'rgba(250,248,245,0.45)', fontSize: '0.75rem', marginTop: '0.75rem' }}>
                First month free if you want us to fix it for you. No spam.
              </p>
            </>
          ) : (
            <>
              <p className="font-display font-bold text-white" style={{ fontSize: '1.375rem', marginBottom: '0.5rem' }}>
                You are on the list.
              </p>
              <p className="font-body" style={{ color: 'rgba(250,248,245,0.78)', fontSize: '0.9375rem' }}>
                A specialist will review {input || 'your site'} by hand and email your full report within one business day.
              </p>
            </>
          )}
        </div>
      )}

      {status === 'done' && data && (
        <div>
          {/* Score + estimate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ marginBottom: '2.5rem' }}>
            <div>
              <p className="font-body text-warm-gray" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                Capture score for {data.business.name || new URL(data.finalUrl).hostname}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold" style={{ fontSize: '3.5rem', lineHeight: 1, color: scoreColor(data.score) }}>{data.score}</span>
                <span className="font-body text-warm-gray" style={{ fontSize: '1.125rem' }}>/ 100</span>
              </div>
              <div style={{ height: '10px', background: 'var(--color-warm-border)', borderRadius: '999px', overflow: 'hidden', marginTop: '0.75rem', maxWidth: '320px' }}>
                <div style={{ width: `${data.score}%`, height: '100%', background: scoreColor(data.score) }} />
              </div>
            </div>
            <div className="lift" style={{ background: 'var(--color-navy)', borderRadius: '10px', padding: '1.5rem' }}>
              <p className="font-body" style={{ fontSize: '0.8125rem', color: 'rgba(250,248,245,0.65)' }}>Estimated missed bookings</p>
              <p className="font-display font-bold inline-flex items-center gap-2" style={{ fontSize: '2.25rem', color: '#fff', marginTop: '0.25rem' }}>
                <TrendUp size={22} weight="bold" color="#B91C1C" aria-hidden="true" />
                ${data.estimateMonthly.toLocaleString('en-US')}
                <span style={{ fontSize: '1rem', color: 'rgba(250,248,245,0.7)', fontWeight: 400 }}>/mo</span>
              </p>
            </div>
          </div>

          {/* What we found: contact info */}
          <h2 className="font-display font-bold text-navy" style={{ fontSize: '1.5rem', marginBottom: '0.875rem' }}>What we found</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" style={{ marginBottom: '2.5rem' }}>
            <ContactCard icon={<EnvelopeSimple size={18} color="#0D1F3C" aria-hidden="true" />} label="Email" items={data.business.emails} empty="None found on the page" />
            <ContactCard icon={<Phone size={18} color="#0D1F3C" aria-hidden="true" />} label="Phone" items={data.business.phones} empty="Not available" />
            <ContactCard icon={<ShareNetwork size={18} color="#0D1F3C" aria-hidden="true" />} label="Social" items={data.business.socials.map((s) => s.type)} empty="No profiles linked" />
          </div>

          {/* Findings (free) */}
          <h2 className="font-display font-bold text-navy" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Where you are leaking bookings</h2>
          <div style={{ borderTop: '1px solid var(--color-warm-border)', marginBottom: gated.length && !unlocked ? '1.5rem' : '2.5rem' }}>
            {ungated.map((f) => <FindingRow key={f.key} f={f} />)}
            {unlocked && gated.map((f) => <FindingRow key={f.key} f={f} />)}
          </div>

          {/* Email gate */}
          {!unlocked && (
            <div style={{ background: 'var(--color-navy)', borderRadius: '12px', padding: '1.75rem' }}>
              <p className="font-display font-bold text-white inline-flex items-center gap-2" style={{ fontSize: '1.25rem' }}>
                <Lock size={18} weight="fill" color="#FCA5A5" aria-hidden="true" />
                {gated.length} more fixes in your full report
              </p>
              <p className="font-body" style={{ color: 'rgba(250,248,245,0.75)', fontSize: '0.9375rem', margin: '0.5rem 0 1.25rem', maxWidth: '52ch' }}>
                Get the complete breakdown, your recoverable revenue, and exactly what to fix first. In your inbox in 60 seconds.
              </p>
              <form onSubmit={submitEmail} style={{ display: 'flex', gap: '8px', maxWidth: '480px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 220px', display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '6px', padding: '0.75rem 0.875rem' }}>
                  <EnvelopeSimple size={18} color="rgba(250,248,245,0.6)" aria-hidden="true" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@yourbusiness.com"
                    aria-label="Your email"
                    className="font-body"
                    style={{ flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent', fontSize: '1rem', color: '#fff' }}
                  />
                </div>
                <button type="submit" className="btn-primary" disabled={sending} style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', opacity: sending ? 0.7 : 1 }}>
                  {sending ? 'Sending...' : 'Email me the report'}
                </button>
              </form>
              {emailErr && <p className="font-body" style={{ color: '#FCA5A5', fontSize: '0.8125rem', marginTop: '0.5rem' }}>{emailErr}</p>}
              <p className="font-body" style={{ color: 'rgba(250,248,245,0.45)', fontSize: '0.75rem', marginTop: '0.75rem' }}>
                First month free if you want us to fix it for you. No spam.
              </p>
            </div>
          )}

          {/* Unlocked CTA */}
          {unlocked && (
            <div style={{ background: 'var(--color-navy)', borderRadius: '12px', padding: '1.75rem', textAlign: 'center' }}>
              <p className="font-display font-bold text-white" style={{ fontSize: '1.375rem', marginBottom: '0.5rem' }}>
                Your full report is on its way.
              </p>
              <p className="font-body" style={{ color: 'rgba(250,248,245,0.75)', fontSize: '0.9375rem', marginBottom: '1.25rem' }}>
                Want us to capture every one of these for you? Your first month is free.
              </p>
              <Link href="/book" className="btn-primary" style={{ padding: '0.875rem 2rem' }}>
                Book your free walkthrough
                <ArrowRight size={16} weight="bold" aria-hidden="true" />
              </Link>
            </div>
          )}

          <p className="font-body text-warm-gray" style={{ fontSize: '0.75rem', marginTop: '1.5rem', lineHeight: 1.6 }}>
            {data.estimateAssumptions.join(' ')}
          </p>
        </div>
      )}
    </div>
  );
}

function ContactCard({ icon, label, items, empty }: { icon: React.ReactNode; label: string; items: string[]; empty: string }) {
  return (
    <div style={{ background: 'var(--color-stone)', borderRadius: '10px', padding: '1rem' }}>
      <div className="flex items-center gap-2" style={{ marginBottom: '0.5rem' }}>
        {icon}
        <span className="font-body font-semibold text-navy" style={{ fontSize: '0.8125rem' }}>{label}</span>
      </div>
      {items.length ? (
        <ul className="font-body" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {items.slice(0, 3).map((it) => (
            <li key={it} className="text-navy" style={{ fontSize: '0.8125rem', wordBreak: 'break-word' }}>{it}</li>
          ))}
        </ul>
      ) : (
        <p className="font-body text-warm-gray" style={{ fontSize: '0.8125rem' }}>{empty}</p>
      )}
    </div>
  );
}

export default function AuditPage() {
  return (
    <Suspense fallback={<div className="page-container" style={{ padding: '4rem 1.5rem' }}>Loading...</div>}>
      <AuditClient />
    </Suspense>
  );
}
