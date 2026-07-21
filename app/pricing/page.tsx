'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Check,
  Plus,
  Minus,
  ArrowRight,
} from '@phosphor-icons/react';

/* ── Types ───────────────────────────────────────────────────────────────── */
interface Tier {
  name: string;
  price: string;
  period: string;
  popular: boolean;
  guarantee: string;
  cta: string;
  ctaHref: string;
  features: string[];
}

interface FAQ {
  q: string;
  a: string;
}

/* ── Data ────────────────────────────────────────────────────────────────── */
const tiers: Tier[] = [
  {
    name: 'Foundation',
    price: '$1,000',
    period: '/ month',
    popular: true,
    guarantee: 'every inquiry captured',
    cta: 'Claim your free month',
    ctaHref: '/the-offer',
    features: [
      'Missed-call text-back (live in days)',
      'Unified inbox for every channel: calls, texts, emails, web forms, DMs',
      'Online booking page customers can self-schedule on',
      'Two-way Google Calendar sync',
      'Automated appointment reminders',
      'Review requests after every appointment',
      'Done-for-you setup and onboarding',
      'Dedicated account strategist',
    ],
  },
  {
    name: 'Freedom',
    price: '$2,500',
    period: '/ month',
    popular: false,
    guarantee: 'every inquiry captured',
    cta: 'Get started',
    ctaHref: '/the-offer',
    features: [
      'Everything in Foundation, plus:',
      'AI front desk that answers and books around the clock',
      'Instagram and Facebook DMs captured into your inbox',
      'Automated win-back campaigns for past customers',
      'SMS and email follow-up sequences until they book',
      'No-show and reschedule automations',
      'Monthly strategy call',
      'Priority support',
    ],
  },
  {
    name: 'Legacy',
    price: '$5,000+',
    period: '/ month',
    popular: false,
    guarantee: 'every inquiry captured',
    cta: 'Talk to us',
    ctaHref: '/the-offer',
    features: [
      'Everything in Freedom, plus:',
      'Multi-location and multi-calendar booking',
      'Custom booking flows and intake questions',
      'Priority AI front desk tuning and call scripting',
      'Advanced reporting on captured inquiries and booked appointments',
      'Dedicated implementation team',
      'Bi-weekly strategy calls',
      'Direct line to founder',
    ],
  },
];

const faqs: FAQ[] = [
  {
    q: 'What\'s included in the first free month?',
    a: 'Everything. Your first month includes full onboarding, your unified inbox connected to every channel, missed-call text-back, an online booking page, two-way calendar sync, and automated reminders. We build the entire system and run it, so no inquiry slips through while you do the work you are booked for.',
  },
  {
    q: 'Do I need a contract?',
    a: 'No contracts, ever. We believe if we are doing our job, you will want to stay. Cancel anytime with 30 days notice. Simple as that.',
  },
  {
    q: 'What if an inquiry slips through?',
    a: 'Our promise is simple: every inquiry captured, or your next month is on us. If a call, text, email, form, or DM ever falls through the cracks, we make it right.',
  },
  {
    q: 'How quickly can I see results?',
    a: 'We are live in days, not weeks. The moment your system is on, every missed call gets an instant text back and every inquiry lands in one inbox, so you start booking appointments you used to lose right away.',
  },
  {
    q: 'Does this replace my phone and existing tools?',
    a: 'No. It sits on top of what you already use. We capture the calls, texts, emails, web forms, and Instagram and Facebook DMs you already get, and turn each one into a booked appointment on your existing Google Calendar.',
  },
  {
    q: 'Can I upgrade or downgrade my plan?',
    a: 'Absolutely. Plans can change at the start of any billing cycle. There is no penalty for moving up or down, we want you on the plan that is actually right for your business.',
  },
  {
    q: 'How do I cancel?',
    a: 'Send an email or call us. 30 days notice and you are done. No cancellation fees, no guilt trips.',
  },
  {
    q: 'What if I need something not on this list?',
    a: 'We do custom setups. Book a free demo and we will scope exactly how to capture and convert the inquiries your business gets. No bloated packages, no paying for things you will never use.',
  },
];

/* ── Fade-in wrapper ─────────────────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

/* ── FAQ Item ────────────────────────────────────────────────────────────── */
function FAQItem({ q, a }: FAQ) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #E4DDD5' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 px-1 text-left gap-4"
        aria-expanded={open}
        style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
      >
        <span
          className="font-body font-semibold text-base"
          style={{ color: '#0D1F3C', fontFamily: 'var(--font-outfit), sans-serif' }}
        >
          {q}
        </span>
        <span
          className="shrink-0 flex items-center justify-center w-7 h-7"
          style={{
            color: open ? '#B91C1C' : '#0D1F3C',
            borderRadius: 6,
            flexShrink: 0,
          }}
        >
          {open ? <Minus size={16} weight="bold" /> : <Plus size={16} weight="bold" />}
        </span>
      </button>
      <div className="faq-panel px-1" data-open={open}>
        <div>
          <p
            className="font-body text-sm leading-relaxed pb-5"
            style={{ color: '#6B6560', fontFamily: 'var(--font-outfit), sans-serif', maxWidth: '65ch' }}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function PricingPage() {
  const [foundation, freedom, legacy] = tiers;

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{ background: '#FAF8F5' }}
        className="py-20 md:py-28"
        aria-label="Pricing hero"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p
              className="font-body text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#B91C1C', fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              Pricing
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1
              className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6"
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                color: '#0D1F3C',
              }}
            >
              Simple pricing.
              <br />
              Every inquiry booked.
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p
              className="font-body text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: '#6B6560', fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              Every plan captures every inquiry you already get and turns it into a booked appointment. Free first month. Cancel anytime.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div
              style={{
                background: '#F3F0EB',
                borderLeft: '4px solid #B91C1C',
                borderRadius: 6,
                padding: '0.875rem 1.25rem',
                maxWidth: '42rem',
              }}
            >
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: '#6B6560', fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                No setup fees and no contracts. We do the entire setup for you
                and you are live in days, not weeks.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PRICING TIERS
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{ background: '#FAF8F5' }}
        className="pb-20 md:pb-28"
        aria-label="Pricing plans"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Foundation -- featured, full-width */}
          <FadeIn>
            <div
              style={{
                background: '#F3F0EB',
                borderRadius: 6,
                borderTop: '3px solid #0D1F3C',
                border: '1px solid #E4DDD5',
                borderTopColor: '#0D1F3C',
                borderTopWidth: 3,
                padding: '2rem',
              }}
            >
              {/* Badge row */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-body font-bold text-xs text-white px-2 py-0.5"
                  style={{
                    background: '#B91C1C',
                    borderRadius: 3,
                    fontFamily: 'var(--font-outfit), sans-serif',
                  }}
                >
                  Most popular
                </span>
              </div>

              <div className="md:grid md:grid-cols-3 md:gap-10">
                {/* Left: price + CTA */}
                <div className="mb-8 md:mb-0">
                  <h2
                    className="font-display text-2xl font-bold mb-1"
                    style={{
                      fontFamily: 'var(--font-playfair), Georgia, serif',
                      color: '#0D1F3C',
                    }}
                  >
                    {foundation.name}
                  </h2>

                  <div className="flex items-end gap-1 mt-3 mb-2">
                    <span
                      className="font-display text-5xl font-bold"
                      style={{
                        fontFamily: 'var(--font-playfair), Georgia, serif',
                        color: '#0D1F3C',
                      }}
                    >
                      {foundation.price}
                    </span>
                    <span
                      className="font-body text-sm mb-2"
                      style={{ color: '#6B6560', fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {foundation.period}
                    </span>
                  </div>

                  <span
                    className="font-body inline-block text-xs font-semibold px-2 py-0.5 mb-6"
                    style={{
                      background: '#0D1F3C',
                      color: '#FAF8F5',
                      borderRadius: 3,
                      fontFamily: 'var(--font-outfit), sans-serif',
                    }}
                  >
                    First month free
                  </span>

                  <div className="flex flex-col gap-3">
                    <Link href={foundation.ctaHref} className="btn-primary" style={{ justifyContent: 'center' }}>
                      {foundation.cta}
                    </Link>

                    <span
                      className="font-body text-xs font-semibold text-center py-2 px-3 rounded"
                      style={{
                        color: '#B91C1C',
                        background: 'rgba(185,28,28,0.08)',
                        borderRadius: 6,
                        fontFamily: 'var(--font-outfit), sans-serif',
                      }}
                    >
                      {foundation.guarantee}, or your next month is on us
                    </span>
                  </div>
                </div>

                {/* Right: feature list */}
                <div className="md:col-span-2">
                  <p
                    className="font-body text-xs font-semibold uppercase tracking-widest mb-4"
                    style={{ color: '#6B6560', fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    What is included
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {foundation.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check
                          size={16}
                          weight="bold"
                          style={{ color: '#B91C1C', flexShrink: 0, marginTop: 2 }}
                        />
                        <span
                          className="font-body text-sm leading-snug"
                          style={{ color: '#0D1F3C', fontFamily: 'var(--font-outfit), sans-serif' }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Freedom + Legacy -- side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:ml-8">
            {[freedom, legacy].map((tier, i) => (
              <FadeIn key={tier.name} delay={i * 0.08}>
                <div
                  style={{
                    background: '#F3F0EB',
                    borderRadius: 6,
                    border: '1px solid #E4DDD5',
                    padding: '1.75rem',
                  }}
                >
                  <h2
                    className="font-display text-xl font-bold mb-3"
                    style={{
                      fontFamily: 'var(--font-playfair), Georgia, serif',
                      color: '#0D1F3C',
                    }}
                  >
                    {tier.name}
                  </h2>

                  <div className="flex items-end gap-1 mb-1">
                    <span
                      className="font-display text-3xl font-bold"
                      style={{
                        fontFamily: 'var(--font-playfair), Georgia, serif',
                        color: '#0D1F3C',
                      }}
                    >
                      {tier.price}
                    </span>
                    <span
                      className="font-body text-sm mb-1"
                      style={{ color: '#6B6560', fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {tier.period}
                    </span>
                  </div>

                  <span
                    className="font-body inline-block text-xs font-semibold px-2 py-0.5 mb-5"
                    style={{
                      background: '#0D1F3C',
                      color: '#FAF8F5',
                      borderRadius: 3,
                      fontFamily: 'var(--font-outfit), sans-serif',
                    }}
                  >
                    First month free
                  </span>

                  <ul className="space-y-2.5 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check
                          size={14}
                          weight="bold"
                          style={{ color: '#B91C1C', flexShrink: 0, marginTop: 2 }}
                        />
                        <span
                          className="font-body text-sm leading-snug"
                          style={{ color: '#0D1F3C', fontFamily: 'var(--font-outfit), sans-serif' }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="font-body text-xs font-semibold py-1.5 px-3 mb-5 text-center"
                    style={{
                      color: '#B91C1C',
                      background: 'rgba(185,28,28,0.08)',
                      borderRadius: 6,
                      fontFamily: 'var(--font-outfit), sans-serif',
                    }}
                  >
                    {tier.guarantee}, or your next month is on us
                  </div>

                  <Link
                    href={tier.ctaHref}
                    className="inline-flex items-center gap-2 font-body font-semibold text-sm"
                    style={{
                      color: '#0D1F3C',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-outfit), sans-serif',
                    }}
                  >
                    {tier.cta}
                    <ArrowRight size={14} weight="bold" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{ background: '#F3F0EB' }}
        className="py-20 md:py-28"
        aria-label="Frequently asked questions"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <h2
              className="font-display text-3xl md:text-4xl font-bold"
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                color: '#0D1F3C',
              }}
            >
              Questions answered.
            </h2>
          </FadeIn>

          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{ background: '#0D1F3C' }}
        className="py-20 md:py-28"
        aria-label="Bottom CTA"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2
              className="font-display text-3xl md:text-4xl font-bold mb-5"
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                color: '#FAF8F5',
              }}
            >
              Not sure which plan fits?
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-8 max-w-xl"
              style={{
                color: 'rgba(250,248,245,0.7)',
                fontFamily: 'var(--font-outfit), sans-serif',
              }}
            >
              Book a free demo and we will recommend the right fit. No
              obligation, no pitch, just honest advice about how to capture and
              book every inquiry your business already gets.
            </p>

            <Link
              href="/the-offer"
              className="font-body inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 transition-colors duration-150"
              style={{
                background: '#FAF8F5',
                color: '#0D1F3C',
                borderRadius: 6,
                textDecoration: 'none',
                fontFamily: 'var(--font-outfit), sans-serif',
              }}
            >
              Book a free call
              <ArrowRight size={16} weight="bold" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
