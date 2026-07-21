'use client';

import { useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';

export default function FAQItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${idx}`;

  return (
    <div className="border-b border-warm-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="font-body w-full flex items-center justify-between py-5 text-left gap-4 bg-transparent border-0 cursor-pointer font-semibold text-navy text-base"
      >
        <span>{q}</span>
        {open ? (
          <Minus size={18} color="#B91C1C" weight="bold" aria-hidden="true" />
        ) : (
          <Plus size={18} color="#B91C1C" weight="bold" aria-hidden="true" />
        )}
      </button>
      <div className="faq-panel" data-open={open} id={panelId}>
        <div>
          <p className="font-body text-warm-gray pb-5 max-w-[65ch]" style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}
