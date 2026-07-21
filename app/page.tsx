import Link from 'next/link';
import type { ElementType } from 'react';
import {
  Check,
  Phone,
  PhoneIncoming,
  ChatCircle,
  CalendarX,
  CalendarCheck,
  CheckCircle,
  ShieldCheck,
  Globe,
  Robot,
  Star,
  InstagramLogo,
  BellRinging,
  MapPin,
  MapTrifold,
  ArrowsClockwise,
  ChatText,
  ChatCircleDots,
  Wrench,
  HardHat,
  House,
  Tooth,
  Briefcase,
  Car,
  ArrowRight,
} from '@phosphor-icons/react/dist/ssr';

import MotionSection from './components/MotionSection';
import FAQItem from './components/FAQItem';
import CountUp from './components/CountUp';
import Reveal from './components/Reveal';
import CalendarDemo from './components/CalendarDemo';
import AuditInput from './components/AuditInput';

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  Icon: ElementType;
};
const stats: Stat[] = [
  { value: 50, prefix: '$', suffix: 'K+', label: 'lost to missed calls every year', Icon: Phone },
  { value: 80, suffix: '%', label: 'of missed calls win back a booking', Icon: PhoneIncoming },
  { value: 24, suffix: '/7', label: 'every call, text, and DM captured', Icon: ChatCircle },
];

/** Phrases for the trust marquee */
const marqueePhrases = [
  'Every call captured',
  'Booked, not missed',
  'First month free',
  'No contracts',
  'Live in days',
  'Syncs with your calendar',
  'Built for service businesses',
];

type Problem = { Icon: ElementType; title: string; body: string };
const problems: Problem[] = [
  {
    Icon: Phone,
    title: 'Calls go to voicemail',
    body: 'Your hands are full mid-job, so the phone just keeps ringing out.',
  },
  {
    Icon: ChatCircle,
    title: 'Texts and DMs pile up',
    body: 'Messages from every app stack up faster than you can answer them.',
  },
  {
    Icon: CalendarX,
    title: 'Bookings slip away',
    body: 'A missed message is a customer booking with the competitor down the street.',
  },
];

type Offer = { name: string; descriptor: string };
const offerItems: Offer[] = [
  { name: 'Missed-call text-back', descriptor: 'every missed call gets an instant text and booking link.' },
  { name: 'Compliant business texting', descriptor: 'fully A2P 10DLC registered, so your texts actually reach the inbox.' },
  { name: 'Website chat widget', descriptor: 'visitors start a text conversation right from your site.' },
  { name: 'One unified inbox', descriptor: 'calls, texts, email, and DMs in a single place.' },
  { name: 'Custom contact forms', descriptor: 'built to capture exactly what you need, wired to your calendar.' },
  { name: 'Online booking', descriptor: 'clients book open slots themselves, day or night.' },
  { name: 'Two-way calendar sync', descriptor: 'syncs with Google Calendar, no double-booking.' },
  { name: 'Automated reminders', descriptor: 'cut no-shows with text and email reminders.' },
  { name: 'AI front desk', descriptor: 'a conversation AI that answers and books inquiries while you work.' },
  { name: 'Voice AI agent', descriptor: 'answers the phone, handles FAQs, and books appointments 24/7.' },
  { name: 'Review requests', descriptor: 'five-star reviews on autopilot after each appointment.' },
  { name: 'Win-back campaigns', descriptor: 'wake up past clients and fill quiet days.' },
  { name: 'One app to run it all', descriptor: 'calls, texts, calendar, and pipeline in a single mobile app.' },
  { name: 'Done-for-you setup', descriptor: 'we build it and run it. A real person, not a ticket.' },
];

type Guarantee = { title: string; sub: string };
const guaranteeItems: Guarantee[] = [
  { title: 'First month free', sub: 'We set up the whole system before you pay a cent.' },
  { title: 'Cancel anytime', sub: '30 days notice. No penalties, ever.' },
  { title: 'No setup fees', sub: 'The full build and setup is included, always.' },
  { title: 'Every inquiry captured', sub: 'Or your next month is on us.' },
];

type Step = { label: string; body: string };
const steps: Step[] = [
  {
    label: 'Connect',
    body: 'We connect your phone, texts, email, website, and social into one place. Live in days, not months.',
  },
  {
    label: 'Capture',
    body: 'Every call, message, and form is answered instantly and turned into a booking, even when your hands are full.',
  },
  {
    label: 'Book',
    body: 'Appointments land on your calendar automatically and reminders go out. You just do the work.',
  },
];

type Service = {
  area: string;
  slug: string;
  name: string;
  desc: string;
  Icon: ElementType;
};
const services: Service[] = [
  {
    area: 'a',
    slug: 'missed-call-text-back',
    name: 'Missed-Call Text-Back',
    Icon: PhoneIncoming,
    desc: 'Every missed call gets an instant text with a booking link. Most businesses win back the majority of the calls they used to lose while their hands were full, and it pays for the whole system by itself.',
  },
  { area: 'b', slug: 'ai-lead-management', name: 'AI Front Desk', Icon: Robot, desc: 'Answers and books inquiries 24/7.' },
  { area: 'c', slug: 'google-business-profile', name: 'Book From Google', Icon: CalendarCheck, desc: 'Clients book straight from your Google profile.' },
  {
    area: 'd',
    slug: 'websites',
    name: 'Booking-Ready Website',
    Icon: Globe,
    desc: 'A fast, mobile-first site built to capture inquiries and let clients book in a tap. Every visit becomes a chance to fill an open slot, synced straight to your calendar.',
  },
  { area: 'e', slug: 'reputation-management', name: 'Review Requests', Icon: Star, desc: 'Five-star reviews on autopilot.' },
  { area: 'f', slug: 'facebook-ads', name: 'Instagram & Facebook DMs', Icon: InstagramLogo, desc: 'Turn DMs and comments into bookings.' },
  { area: 'g', slug: 'email-marketing', name: 'Reminders & Rebooking', Icon: BellRinging, desc: 'Cut no-shows and win back past clients.' },
  {
    area: 'h',
    slug: 'local-seo',
    name: 'Get Found Locally',
    Icon: MapTrifold,
    desc: 'Show up when nearby customers search for what you do, so more of the right inquiries reach an inbox that actually answers them and books them in.',
  },
  { area: 'i', slug: 'google-ads', name: 'Two-Way Calendar Sync', Icon: ArrowsClockwise, desc: 'Syncs with Google Calendar. No double-booking.' },
  { area: 'j', slug: 'business-texting', name: 'Compliant Business Texting', Icon: ChatText, desc: 'Fully A2P 10DLC registered, so your texts actually reach the inbox instead of getting flagged as spam.' },
  { area: 'k', slug: 'chat-widget', name: 'Website Chat Widget', Icon: ChatCircleDots, desc: 'Visitors start a real text conversation right from your site, day or night.' },
];

const BENTO_TEMPLATE = `
  "a a b"
  "c d d"
  "e f g"
  "h h i"
  "j j k"
`;
const WIDE_AREAS = new Set(['a', 'd', 'h', 'j']);

type Industry = { name: string; Icon: ElementType; slug: string };
const industries: Industry[] = [
  { name: 'Home Services', Icon: Wrench, slug: 'home-services' },
  { name: 'Contractors', Icon: HardHat, slug: 'contractors' },
  { name: 'Real Estate', Icon: House, slug: 'real-estate' },
  { name: 'Dental & Medical', Icon: Tooth, slug: 'dental-medical' },
  { name: 'Professional Services', Icon: Briefcase, slug: 'professional-services' },
  { name: 'Auto Services', Icon: Car, slug: 'auto-services' },
];

type FAQ = { q: string; a: string };
const faqs: FAQ[] = [
  {
    q: 'What is included in the first free month?',
    a: 'Everything. We set up your entire capture-and-booking system: missed-call text-back, a unified inbox for calls, texts, email, and DMs, online booking, two-way calendar sync, automated reminders, and review requests. We build it and run it. You just take the appointments.',
  },
  {
    q: 'Do I need a contract?',
    a: 'No contracts, ever. We believe if we do our job, you will want to stay. Cancel anytime with 30 days notice. No penalties.',
  },
  {
    q: 'Does it sync with my calendar?',
    a: 'Yes. Everything syncs two-way with Google Calendar, so new bookings appear instantly and you never get double-booked.',
  },
  {
    q: 'How quickly can I get set up?',
    a: 'Most shops are live within a few days. We do the setup for you: connect your number, inbox, website, and social, then switch on booking and reminders.',
  },
  {
    q: 'I already get plenty of calls. How does this help?',
    a: 'That is exactly who this is for. You are not short on demand, you are losing it. We capture the calls, texts, and messages you already get and turn them into booked appointments instead of missed ones.',
  },
  {
    q: 'Will it work with the tools I already use?',
    a: 'Yes. We connect your existing phone number, email, website, and social accounts. Clients keep reaching you the same way. The difference is that nothing slips through.',
  },
  {
    q: 'What kind of businesses do you work with?',
    a: 'Any busy, appointment-based service business: home services, contractors, salons and barbers, dental and medical, clinics, auto services, professional services, and more. If customers reach you by phone, text, email, or DM and you book appointments, this works.',
  },
  {
    q: 'What does it cost?',
    a: 'Your first month is free. After that you are on a simple monthly plan with no contract and no setup fee. We will walk you through the pricing on your call.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: HERO — Editorial split with live missed-call demo */}
      <MotionSection aria-label="Hero" style={{ background: 'var(--color-linen)' }}>
        <div
          className="page-container hero-grid"
          style={{ paddingTop: '2.25rem', paddingBottom: '3.5rem' }}
        >
          {/* Left: the message */}
          <div>
            {/* Eyebrow */}
            <p
              className="font-body font-semibold uppercase"
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                color: 'var(--color-crimson)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '0.75rem',
              }}
            >
              <MapPin size={14} weight="fill" aria-hidden="true" />
              Liberty Hill, TX
            </p>

            {/* H1 */}
            <h1
              className="font-display font-bold"
              style={{
                fontSize: 'clamp(2.25rem, 3.2vw + 0.5rem, 3.25rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--color-navy)',
                marginBottom: '1rem',
              }}
            >
              Your calendar should be booked.{' '}
              <span className="block" style={{ color: 'var(--color-crimson)' }}>
                We make sure it is.
              </span>
            </h1>

            {/* Body */}
            <p
              className="font-body"
              style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.125rem)',
                lineHeight: 1.6,
                color: 'var(--color-warm-gray)',
                maxWidth: '42ch',
                marginBottom: '1.25rem',
              }}
            >
              Every call, text, email, and DM your shop gets, captured and booked into
              your calendar automatically. Stop losing appointments while your hands are
              full.
            </p>

            {/* Capture-audit entry (replaces the old CTA buttons) */}
            <div style={{ marginBottom: '1.25rem' }}>
              <AuditInput />
            </div>

            {/* Trust signals */}
            <ul
              role="list"
              className="font-body flex flex-wrap gap-x-6 gap-y-2 list-none p-0 m-0"
              style={{ fontSize: '0.8125rem', color: 'var(--color-warm-gray)' }}
            >
              {['First month free', 'No contracts', 'Setup done for you'].map((label) => (
                <li key={label} className="flex items-center gap-1.5">
                  <Check size={14} weight="bold" color="#B91C1C" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: live calendar-booking demo */}
          <div className="flex justify-center lg:justify-end">
            <CalendarDemo />
          </div>
        </div>
      </MotionSection>

      {/* ── Cinematic stats proof strip (replaces inline stat panel) ── */}
      <div
        aria-label="Proof statistics"
        style={{
          background: 'var(--color-navy)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div className="page-container">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {stats.map(({ value, prefix, suffix, label, Icon }, i) => (
              <Reveal
                key={label}
                delay={i * 0.12}
                className={`flex flex-col gap-2 px-6 py-8 sm:px-12 sm:py-9 ${i < 2 ? 'border-b sm:border-b-0 sm:border-r' : ''}`}
                style={{ borderColor: 'rgba(255,255,255,0.10)' }}
              >
                <Icon size={16} weight="fill" color="#B91C1C" aria-hidden="true" />
                <p
                  className="font-display font-bold text-white"
                  style={{ fontSize: 'clamp(2.25rem, 3.4vw, 3rem)', lineHeight: 1 }}
                >
                  <CountUp value={value} prefix={prefix} suffix={suffix} />
                </p>
                <p
                  className="font-body"
                  style={{ fontSize: '0.75rem', lineHeight: 1.45, color: 'rgba(250,248,245,0.60)' }}
                >
                  {label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── Trust marquee ───────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          background: 'var(--color-crimson)',
          padding: '0.9rem 0',
          overflow: 'hidden',
        }}
      >
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div className="marquee__track" key={dup}>
              {marqueePhrases.map((phrase) => (
                <span className="marquee__item" key={phrase + dup}>
                  <span className="marquee__dot" style={{ color: 'rgba(255,255,255,0.55)' }}>✦</span>
                  <span style={{ color: '#ffffff' }}>{phrase}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: PROBLEM BAR */}
      <MotionSection aria-label="Common problems" className="bg-stone section-sm">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {problems.map(({ Icon, title, body }, i) => (
              <ProblemColumn key={title} Icon={Icon} title={title} body={body} index={i} />
            ))}
          </div>
        </div>
      </MotionSection>

      {/* SECTION 3: THE OFFER */}
      <MotionSection
        id="how-it-works"
        aria-label="The offer"
        className="bg-linen section-lg scroll-mt-24"
      >
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: checklist */}
            <div>
              <h2
                className="font-display text-4xl font-bold mb-8 text-navy"
                style={{ lineHeight: 1.1 }}
              >
                Get your first month free.
              </h2>
              <div className="flex flex-col gap-y-3">
                {offerItems.map(({ name, descriptor }) => (
                  <div key={name} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      weight="fill"
                      color="#B91C1C"
                      style={{ flexShrink: 0, marginTop: '4px' }}
                      aria-hidden="true"
                    />
                    <p className="font-body text-base leading-relaxed text-warm-gray">
                      <strong className="font-semibold text-navy">{name}</strong> {descriptor}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: guarantee card */}
            <div className="lift p-8 lg:p-10 bg-navy rounded-[10px]">
              <h3
                className="font-display text-2xl font-bold mb-6 text-white"
                style={{ lineHeight: 1.15 }}
              >
                Our guarantee.
              </h3>
              <div>
                {guaranteeItems.map(({ title, sub }, i) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 py-4"
                    style={
                      i < guaranteeItems.length - 1
                        ? { borderBottom: '1px solid rgba(255,255,255,0.12)' }
                        : undefined
                    }
                  >
                    <ShieldCheck
                      size={24}
                      weight="fill"
                      color="#B91C1C"
                      style={{ flexShrink: 0, marginTop: '2px' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-body text-base font-semibold text-linen">{title}</p>
                      <p
                        className="font-body text-sm mt-1"
                        style={{ color: 'rgba(250,248,245,0.7)' }}
                      >
                        {sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/the-offer"
                className="mt-8 w-full inline-flex items-center justify-center bg-white text-navy font-body font-semibold rounded-[6px] hover:bg-linen transition-colors"
                style={{
                  padding: '0.875rem 1.75rem',
                  fontSize: '1rem',
                  textDecoration: 'none',
                }}
              >
                Claim your free month
              </Link>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* SECTION 4: HOW IT WORKS */}
      <MotionSection aria-label="How it works" className="bg-stone section">
        <div className="page-container">
          <h2
            className="font-display text-4xl font-bold mb-16 text-navy"
            style={{ lineHeight: 1.1 }}
          >
            How it works.
          </h2>
          <div className="timeline grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-12">
            <span className="timeline__line" aria-hidden="true" />
            {steps.map(({ label, body }, i) => (
              <Reveal key={label} delay={i * 0.14}>
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                  }}
                >
                  <span className="timeline__dot" aria-hidden="true" />
                  <span className="timeline__num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <p
                  className="font-body text-xs font-semibold uppercase text-crimson mt-5 mb-2"
                  style={{ letterSpacing: '0.1em' }}
                >
                  Step {String(i + 1).padStart(2, '0')}
                </p>
                <h3
                  className="font-display text-2xl font-bold mb-3 text-navy"
                  style={{ lineHeight: 1.15 }}
                >
                  {label}
                </h3>
                <p className="font-body text-base leading-relaxed text-warm-gray">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* SECTION 5: SERVICES */}
      <MotionSection aria-label="Services" className="bg-linen section">
        <div className="page-container">
          <h2
            className="font-display text-4xl font-bold mb-4 text-navy"
            style={{ lineHeight: 1.1 }}
          >
            One system to capture and book.
          </h2>
          <p className="font-body text-base mb-12 max-w-prose text-warm-gray">
            Every way a client can reach you, captured and turned into a booked
            appointment. Less chasing new leads, more filling your calendar.
          </p>

          {/* Mobile: 2 columns */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {services.map((s) => (
              <ServiceCard key={s.name} service={s} />
            ))}
          </div>

          {/* Desktop: asymmetric bento via named grid areas */}
          <div
            className="hidden md:grid gap-4"
            style={{
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gridTemplateAreas: BENTO_TEMPLATE,
            }}
          >
            {services.map((s) => (
              <ServiceCard key={s.name} service={s} gridArea={s.area} />
            ))}
          </div>
        </div>
      </MotionSection>

      {/* SECTION 6: INDUSTRIES */}
      <MotionSection aria-label="Industries we serve" className="bg-stone section-sm">
        <div className="page-container">
          <h2
            className="font-display text-4xl font-bold mb-12 text-navy"
            style={{ lineHeight: 1.1 }}
          >
            Built for service businesses.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map(({ name, Icon, slug }) => (
              <Link
                key={slug}
                href={`/industries/${slug}`}
                className="industry-tile group flex flex-col items-center text-center gap-3 p-6 rounded-[10px] transition-colors duration-200"
                style={{ textDecoration: 'none' }}
                aria-label={name}
              >
                <span
                  className="industry-icon transition-colors duration-200 text-navy inline-flex"
                >
                  <Icon size={32} color="currentColor" weight="regular" aria-hidden="true" />
                </span>
                <span className="industry-label font-body text-sm font-semibold transition-colors duration-200 text-navy">
                  {name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* SECTION 7: TESTIMONIALS */}
      <MotionSection aria-label="Client testimonials" className="bg-linen section-sm">
        <div className="page-container">
          <h2
            className="font-display text-4xl font-bold mb-4 text-navy"
            style={{ lineHeight: 1.1 }}
          >
            What clients say.
          </h2>
          <p className="font-body text-base mb-12 max-w-prose text-warm-gray">
            We are onboarding our first founding clients now. Real results will
            be published here as they come in.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="lift p-6 flex flex-col bg-stone rounded-[10px]"
                style={{ border: '2px dashed #E4DDD5' }}
              >
                <p
                  className="font-body text-xs font-semibold mb-4 text-crimson"
                  style={{ letterSpacing: '0.06em' }}
                >
                  FOUNDING CLIENT SPOT OPEN
                </p>
                <div className="flex items-center gap-1 mb-4" aria-label="Five stars">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} size={16} weight="fill" color="#B91C1C" aria-hidden="true" />
                  ))}
                </div>
                <p className="font-body text-base italic leading-relaxed mb-6 flex-1 text-warm-gray">
                  Testimonial coming soon. If you run a service business and you are tired of
                  missed calls and empty slots, this spot has your name on it.
                </p>
                <div className="pt-4 border-t border-warm-border">
                  <p className="font-body text-sm font-semibold text-navy">
                    Founding Client
                  </p>
                  <p className="font-body text-xs mt-1 text-warm-gray">Founding client</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* SECTION 8: FAQ */}
      <MotionSection aria-label="Frequently asked questions" className="bg-stone section-sm">
        <div className="page-container">
          <h2
            className="font-display text-4xl font-bold mb-12 text-navy"
            style={{ lineHeight: 1.1 }}
          >
            Common questions.
          </h2>
          <div className="max-w-3xl border-t border-warm-border">
            {faqs.map((item, idx) => (
              <FAQItem key={item.q} q={item.q} a={item.a} idx={idx} />
            ))}
          </div>
        </div>
      </MotionSection>

      {/* SECTION 9: FINAL CTA */}
      <MotionSection aria-label="Final call to action" className="bg-navy section-lg has-glow">
        <div className="page-container text-center">
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-4 text-white"
            style={{ lineHeight: 1.1 }}
          >
            Ready to fill your calendar?
          </h2>
          <p
            className="font-body text-lg mb-10"
            style={{ color: 'rgba(250,248,245,0.78)' }}
          >
            First month free. No contracts. Every inquiry captured.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-linen text-navy font-body font-semibold rounded-[6px] hover:bg-white transition-colors"
              style={{
                padding: '1rem 2rem',
                fontSize: '1rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Book your free audit
            </Link>
            <a
              href="tel:+15593496165"
              className="inline-flex items-center justify-center bg-transparent text-linen font-body font-semibold rounded-[6px] transition-colors hover:bg-[rgba(250,248,245,0.08)] hover:border-linen"
              style={{
                padding: '1rem 2rem',
                fontSize: '1rem',
                border: '2px solid rgba(250,248,245,0.4)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Call (559) 349-6165
            </a>
          </div>
        </div>
      </MotionSection>
    </>
  );
}

/* ── Helpers ──────────────────────────────────────────────────────────────── */

function ProblemColumn({
  Icon,
  title,
  body,
  index,
}: {
  Icon: ElementType;
  title: string;
  body: string;
  index: number;
}) {
  const isFirst = index === 0;
  return (
    <div
      className="problem-col"
      style={{
        borderTop: isFirst ? undefined : '1px solid #E4DDD5',
      }}
    >
      <div className="md-col-inner">
        <Icon size={32} color="#0D1F3C" weight="regular" aria-hidden="true" />
        <p
          className="font-body text-lg font-semibold mt-4 text-navy"
          style={{ lineHeight: 1.3 }}
        >
          {title}
        </p>
        <p className="font-body text-sm mt-2 leading-relaxed text-warm-gray">{body}</p>
      </div>
    </div>
  );
}

function ServiceCard({ service, gridArea }: { service: Service; gridArea?: string }) {
  const { name, desc, Icon, slug, area } = service;
  const isWide = gridArea !== undefined && WIDE_AREAS.has(area);
  return (
    <Link
      href={`/services/${slug}`}
      className={`service-card ${isWide ? 'service-card--wide' : ''}`}
      style={gridArea ? { gridArea } : undefined}
      aria-label={name}
    >
      <div className="sc-head">
        <span className="sc-icon">
          <Icon size={28} color="currentColor" weight="regular" aria-hidden="true" />
        </span>
        <p className="font-body text-base font-semibold text-navy">{name}</p>
      </div>
      <div className="sc-body">
        <p className="font-body text-sm leading-relaxed text-warm-gray">{desc}</p>
        <span className="sc-arrow" aria-hidden="true">
          Learn more
          <ArrowRight size={14} weight="bold" />
        </span>
      </div>
    </Link>
  );
}
