import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CalendarCheck, ChatCircleDots, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import VoiceDemoWidget from '../components/VoiceDemoWidget';

export const metadata: Metadata = {
  title: 'Talk to the AI Receptionist — Live Demo | LeadsforLiberty.com',
  description:
    'Call our AI receptionist right from your browser. Ask it anything a customer would, watch it book the appointment, then imagine it answering your phones 24/7.',
  alternates: {
    canonical: 'https://www.leadsforliberty.com/demo',
  },
};

const steps = [
  {
    Icon: Phone,
    title: 'Start the call',
    body: 'You are calling "Hill Country Home Services," a demo business. Talk to it exactly like a customer would: ask about hours, pricing, or say your AC just died.',
  },
  {
    Icon: CalendarCheck,
    title: 'Watch it book',
    body: 'Tell it you want an appointment. It qualifies you, finds a time, and confirms the booking, the same way it would fill your calendar while you work.',
  },
  {
    Icon: ChatCircleDots,
    title: 'Want this for your business?',
    body: 'This answers every call, 24/7, and never puts anyone on hold. We set it up for you: first month free, no contracts.',
  },
];

export default function DemoPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="demo-hero-heading"
        className="bg-navy py-20 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="mx-auto max-w-2xl">
          <p
            className="font-body text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#C2942A' }}
          >
            Live Demo · 60 Seconds · No Signup
          </p>
          <h1
            id="demo-hero-heading"
            className="font-display font-bold text-white mb-5"
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: 1.08 }}
          >
            Talk to the AI receptionist that never misses a call.
          </h1>
          <p
            className="font-body text-lg"
            style={{ color: 'rgba(250,248,245,0.82)' }}
          >
            You&apos;re about to call a demo business. Talk to it like a customer would,
            then watch it book the appointment on its own.
          </p>
        </div>
      </section>

      {/* ── The voice widget ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="demo-widget-heading"
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: '#ffffff' }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="demo-widget-heading"
            className="font-display text-2xl font-bold text-navy mb-3"
          >
            Press the button and say hello.
          </h2>
          <p className="font-body text-base text-warm-gray mb-8">
            Uses your browser&apos;s microphone. Try: &ldquo;My AC is out, can someone
            come take a look this week?&rdquo;
          </p>
          <VoiceDemoWidget />
        </div>
      </section>

      {/* ── How the demo works ───────────────────────────────────────────── */}
      <section
        aria-labelledby="demo-steps-heading"
        className="bg-linen py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <h2 id="demo-steps-heading" className="sr-only">
            How the demo works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(({ Icon, title, body }, i) => (
              <div key={title}>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="inline-flex items-center justify-center rounded-full"
                    style={{ width: 44, height: 44, background: '#0D1F3C' }}
                  >
                    <Icon size={22} color="#C2942A" weight="regular" aria-hidden="true" />
                  </span>
                  <span
                    className="font-body text-xs font-semibold uppercase text-crimson"
                    style={{ letterSpacing: '0.1em' }}
                  >
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-2">{title}</h3>
                <p className="font-body text-sm leading-relaxed text-warm-gray">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="demo-cta-heading"
        className="bg-navy py-16 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="mx-auto max-w-2xl">
          <h2
            id="demo-cta-heading"
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.15 }}
          >
            Put this on your phones.
          </h2>
          <p
            className="font-body text-base mb-8"
            style={{ color: 'rgba(250,248,245,0.78)' }}
          >
            We build it around your business: your services, your hours, your calendar.
            First month free, no contracts, setup done for you.
          </p>
          <Link
            href="/book"
            className="btn-primary"
            style={{ padding: '1rem 2rem', fontSize: '1rem' }}
          >
            Book your free walkthrough
            <ArrowRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
