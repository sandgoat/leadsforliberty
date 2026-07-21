'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, ArrowRight } from '@phosphor-icons/react';

/**
 * Hero capture-audit entry point. Replaces the old CTA buttons: the prospect
 * pastes their site and is routed to /audit, which runs the analysis.
 */
export default function AuditInput() {
  const router = useRouter();
  const [value, setValue] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = value.trim();
    if (!v) return;
    router.push(`/audit?site=${encodeURIComponent(v)}`);
  };

  return (
    <div>
      <form onSubmit={submit} style={{ display: 'flex', gap: '8px', maxWidth: '520px', flexWrap: 'wrap' }}>
        <div
          style={{
            flex: '1 1 240px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#ffffff',
            border: '1.5px solid var(--color-navy)',
            borderRadius: '6px',
            padding: '0.75rem 0.875rem',
          }}
        >
          <Globe size={18} color="#6B6560" aria-hidden="true" />
          <input
            type="text"
            inputMode="url"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="yourbusiness.com"
            aria-label="Your website address"
            className="font-body"
            style={{
              flex: 1,
              minWidth: 0,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: '1rem',
              color: 'var(--color-navy)',
            }}
          />
        </div>
        <button type="submit" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
          Analyze
          <ArrowRight size={16} weight="bold" aria-hidden="true" />
        </button>
      </form>
      <p
        className="font-body"
        style={{ fontSize: '0.75rem', letterSpacing: '0.04em', color: 'var(--color-warm-gray)', marginTop: '0.75rem' }}
      >
        About 60 seconds. No signup. See your capture score free.
      </p>
    </div>
  );
}
