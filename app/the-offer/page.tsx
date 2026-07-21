'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  CheckCircle,
  Shield,
  CalendarBlank,
  Tag,
  Target,
  Gift,
  ArrowRight,
  Check,
} from '@phosphor-icons/react';

/* ── Types ───────────────────────────────────────────────────────────────── */
interface IncludedItem {
  name: string;
  desc: string;
}

interface RiskItem {
  icon: React.ReactNode;
  title: string;
  body: string;
}

interface BonusCard {
  name: string;
  desc: string;
}

interface Objection {
  q: string;
  a: string;
}

/* ── Data ────────────────────────────────────────────────────────────────── */
const includedItems: IncludedItem[] = [
  {
    name: 'Full done-for-you setup',
    desc: '$2,500 value. We build and connect everything for you, live in days.',
  },
  {
    name: 'Missed-call text-back',
    desc: 'Every missed call gets an instant text, so the customer never goes to a competitor.',
  },
  {
    name: 'Unified inbox for every channel',
    desc: 'Calls, texts, emails, web forms, and Instagram and Facebook DMs in one place.',
  },
  {
    name: 'Online booking page',
    desc: 'Customers self-schedule in a few taps, no phone tag required.',
  },
  {
    name: 'Two-way Google Calendar sync',
    desc: 'Every booking lands on your calendar and your real availability stays accurate.',
  },
  {
    name: 'AI front desk',
    desc: 'Answers questions and books appointments around the clock, even after hours.',
  },
  {
    name: 'Automated reminders',
    desc: 'Text and email reminders that cut no-shows and keep the calendar full.',
  },
  {
    name: 'Review requests and win-back campaigns',
    desc: 'Auto-request reviews after each visit and re-engage past customers who went quiet.',
  },
  {
    name: 'Dedicated account strategist',
    desc: 'One point of contact who knows your business inside and out.',
  },
];

const riskItems: RiskItem[] = [
  {
    icon: <Shield size={28} weight="fill" />,
    title: 'First month free',
    body: 'We front the cost. You see results before paying.',
  },
  {
    icon: <CalendarBlank size={28} weight="fill" />,
    title: 'Cancel anytime',
    body: '30 days written notice. No penalties, no hard feelings.',
  },
  {
    icon: <Tag size={28} weight="fill" />,
    title: 'No setup fees',
    body: 'The $2,500 setup? Included. Always.',
  },
  {
    icon: <Target size={28} weight="fill" />,
    title: 'Capture guarantee',
    body: 'Every inquiry captured, or your next month is on us.',
  },
];

const bonusCards: BonusCard[] = [
  {
    name: 'Founders pricing locked in',
    desc: '$1,000/mo rate, locked for life. No increases as we grow.',
  },
  {
    name: 'Free missed-revenue teardown',
    desc: 'We map where inquiries leak out of your business and hand you the full report.',
  },
  {
    name: 'Free booking system demo',
    desc: '30-minute call to map your current inquiry flow and show the system live.',
  },
  {
    name: 'Refer a client',
    desc: 'Your fee is waived for any month a referred client is active.',
  },
];

const objections: Objection[] = [
  {
    q: 'Been burned before',
    a: 'You own everything: your number, your calendar, your customer data. We never lock you in. No black boxes, ever.',
  },
  {
    q: 'Sounds too good',
    a: 'We are betting on the long-term relationship. A happy founding client is worth far more to us than a one-time fee.',
  },
  {
    q: 'I might want to cancel',
    a: 'Good. That means we have to earn your business every single month. 30 days notice and you are done.',
  },
  {
    q: 'I need to see results first',
    a: 'That is exactly what the free month is for. We build, launch, and run it. You watch the inquiries turn into booked appointments.',
  },
  {
    q: 'My business is different',
    a: 'If you book appointments and customers reach you by phone, text, email, or DM, this works. Dog groomers, salons, clinics, trades, and more all run on the same system.',
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
      initial={reduced ? false : { y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function TheOfferPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{ background: '#FAF8F5' }}
        className="py-20 md:py-28"
        aria-label="Offer hero"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p
              className="font-body text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#B91C1C' }}
            >
              The Founding Client Offer
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                color: '#0D1F3C',
              }}
            >
              Get your first
              <br />
              month free.
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p
              className="font-body text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
              style={{ color: '#6B6560', fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              We build your entire lead-capture and booking system, run it for
              30 days, and charge nothing. Every inquiry captured and turned into
              a booked appointment. No contracts. Cancel anytime.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Link href="#booking-calendar" className="btn-primary" style={{ fontSize: '1rem' }}>
              Book your free demo
            </Link>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
              {['First month free', 'No setup fees', 'Cancel anytime'].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-sm font-medium font-body"
                  style={{ color: '#0D1F3C', fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  <CheckCircle size={16} weight="fill" style={{ color: '#B91C1C', flexShrink: 0 }} />
                  {label}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WHAT YOU GET
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{ background: '#F3F0EB' }}
        className="py-20 md:py-28"
        aria-label="What you get"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-16">
            {/* Left headline */}
            <FadeIn className="lg:col-span-2 mb-10 lg:mb-0">
              <h2
                className="font-display text-3xl md:text-4xl font-bold leading-tight"
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  color: '#0D1F3C',
                }}
              >
                Everything included,
                <br />
                day one.
              </h2>
              <p
                className="font-body mt-4 text-base leading-relaxed"
                style={{ color: '#6B6560', fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                This is not a trial. It is the full capture-and-booking system,
                built and running from the moment we shake hands.
              </p>
            </FadeIn>

            {/* Right checklist */}
            <div className="lg:col-span-3 space-y-4">
              {includedItems.map((item, i) => (
                <FadeIn key={item.name} delay={i * 0.04}>
                  <div
                    className="flex items-start gap-3 py-3 border-b"
                    style={{ borderColor: '#E4DDD5' }}
                  >
                    <CheckCircle
                      size={20}
                      weight="fill"
                      style={{ color: '#B91C1C', flexShrink: 0, marginTop: 2 }}
                    />
                    <div>
                      <span
                        className="font-body font-semibold text-sm"
                        style={{ color: '#0D1F3C', fontFamily: 'var(--font-outfit), sans-serif' }}
                      >
                        {item.name}
                      </span>
                      <span
                        className="font-body text-sm ml-1.5"
                        style={{ color: '#6B6560', fontFamily: 'var(--font-outfit), sans-serif' }}
                      >
                        {item.desc}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          RISK REVERSAL
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{ background: '#0D1F3C' }}
        className="py-20 md:py-28"
        aria-label="Risk reversal"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-14 text-left">
            <h2
              className="font-display text-3xl md:text-4xl font-bold"
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                color: '#FAF8F5',
              }}
            >
              We carry the risk.
              <br />
              You keep the bookings.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {riskItems.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.06}>
                <div className="flex flex-col gap-3">
                  <span style={{ color: '#B91C1C' }}>{item.icon}</span>
                  <h3
                    className="font-body font-bold text-base"
                    style={{ color: '#FAF8F5', fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{
                      color: 'rgba(250,248,245,0.65)',
                      fontFamily: 'var(--font-outfit), sans-serif',
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FOUNDING CLIENT BONUSES
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{ background: '#FAF8F5' }}
        className="py-20 md:py-28"
        aria-label="Founding client bonuses"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <p
              className="font-body text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#B91C1C', fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              First 10 clients only
            </p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold"
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                color: '#0D1F3C',
              }}
            >
              Bonuses for our first 10
              <br />
              founding clients.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {bonusCards.map((card, i) => (
              <FadeIn key={card.name} delay={i * 0.06}>
                <div
                  style={{
                    background: '#F3F0EB',
                    borderRadius: 6,
                    padding: '1.5rem',
                    border: '1px solid #E4DDD5',
                  }}
                >
                  <Gift
                    size={22}
                    weight="fill"
                    style={{ color: '#B91C1C', marginBottom: '0.75rem' }}
                  />
                  <h3
                    className="font-body font-bold text-base mb-1"
                    style={{ color: '#0D1F3C', fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    {card.name}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: '#6B6560', fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    {card.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          OBJECTION KILLER
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{ background: '#F3F0EB' }}
        className="py-20 md:py-28"
        aria-label="Why this works"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <h2
              className="font-display text-3xl md:text-4xl font-bold"
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                color: '#0D1F3C',
              }}
            >
              Why this works.
            </h2>
          </FadeIn>

          <div className="space-y-0 divide-y" style={{ borderColor: '#E4DDD5' }}>
            {objections.map((obj, i) => (
              <FadeIn key={obj.q} delay={i * 0.05}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
                  <div className="flex items-start gap-3">
                    <ArrowRight
                      size={18}
                      weight="bold"
                      style={{ color: '#B91C1C', flexShrink: 0, marginTop: 2 }}
                    />
                    <span
                      className="font-body font-semibold text-base"
                      style={{ color: '#0D1F3C', fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {obj.q}
                    </span>
                  </div>
                  <p
                    className="font-body text-base leading-relaxed"
                    style={{ color: '#6B6560', fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    {obj.a}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          BOOKING CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="booking-calendar"
        style={{ background: '#0D1F3C' }}
        className="py-20 md:py-28"
        aria-label="Book a Lead Audit"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-8">
            <h2
              className="font-display text-3xl md:text-4xl font-bold mb-4"
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                color: '#FAF8F5',
              }}
            >
              Book your free 30-minute
              <br />
              demo.
            </h2>
            <p
              className="font-body text-base leading-relaxed max-w-2xl"
              style={{
                color: 'rgba(250,248,245,0.7)',
                fontFamily: 'var(--font-outfit), sans-serif',
              }}
            >
              Pick a time. We map where inquiries are slipping through today,
              show you the system live, and walk you through the plan. Whether
              you work with us or not, you leave with clarity.
            </p>
          </FadeIn>

          {/* Calendar embed placeholder */}
          <FadeIn delay={0.1}>
            <div
              id="booking-calendar-embed"
              className="w-full flex items-center justify-center min-h-96 mb-6"
              style={{
                background: '#FAF8F5',
                borderRadius: 6,
                padding: '2rem',
              }}
            >
              <p
                className="font-body text-center text-sm"
                style={{ color: '#6B6560', fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                Calendar loading... If it does not appear, call (559) 349-6165
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Link href="/book" className="btn-primary">
              Book via phone
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
