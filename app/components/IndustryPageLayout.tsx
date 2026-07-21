import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";

export interface RecommendedService {
  name: string;
  href: string;
  desc: string;
}

export interface IndustryFAQ {
  q: string;
  a: string;
}

export interface IndustryPageProps {
  industry: string;
  heroHeadline: string;
  heroSubhead: string;
  painPoints: string[];
  recommendedServices: RecommendedService[];
  stat: string;
  faqs: IndustryFAQ[];
}

const PAIN_EMOJIS = ["⚠️", "📉", "🔍", "💸", "📞"];

export default function IndustryPageLayout({
  industry,
  heroHeadline,
  heroSubhead,
  painPoints,
  recommendedServices,
  stat,
  faqs,
}: IndustryPageProps) {
  return (
    <div className="bg-parchment min-h-screen font-sans">
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-liberty-blue text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-eagle-gold font-semibold tracking-widest text-sm uppercase mb-3">
              {industry}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 leading-tight">
              {heroHeadline}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">{heroSubhead}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <Link href="/the-offer" className="btn-primary" style={{ padding: "1rem 2.25rem", fontSize: "1rem" }}>
              Claim your free month
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 2. Pain Points ──────────────────────────────────────────────── */}
      <section className="bg-parchment py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-liberty-blue text-center mb-10">
              Sound familiar?
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, i) => (
              <Reveal key={i} delay={(i % 3) * 0.1}>
                <div className="lift bg-white rounded-2xl p-6 shadow-sm border border-parchment-400 flex gap-4 items-start h-full">
                  <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">
                    {PAIN_EMOJIS[i % PAIN_EMOJIS.length]}
                  </span>
                  <p className="text-iron text-sm leading-relaxed">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Recommended Bundle ───────────────────────────────────────── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-liberty-blue text-center mb-3">
              Your recommended service bundle
            </h2>
            <p className="text-center text-iron text-base mb-10 max-w-2xl mx-auto">
              Based on what works for {industry} businesses, here&apos;s what we
              recommend to move the needle fastest.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedServices.map((svc, i) => (
              <Reveal key={i} delay={(i % 3) * 0.1}>
                <Link
                  href={svc.href}
                  className="lift group block bg-parchment rounded-2xl p-6 border border-parchment-400 h-full transition-colors hover:border-liberty-blue"
                >
                  <h3 className="font-serif font-bold text-liberty-blue text-base mb-2 group-hover:underline">
                    {svc.name}
                  </h3>
                  <p className="text-iron text-sm leading-relaxed">{svc.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs text-independence-red font-semibold">
                    Learn more
                    <ArrowRight size={13} weight="bold" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Industry Stat Banner ─────────────────────────────────────── */}
      <section className="bg-eagle-gold text-iron py-14 px-4">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-serif font-bold text-2xl md:text-3xl leading-snug">{stat}</p>
          </div>
        </Reveal>
      </section>

      {/* ── 5. Founding Client Offer ────────────────────────────────────── */}
      <section className="bg-independence-red text-white py-16 px-4">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 opacity-80">
              Limited founding client spot
            </p>
            <h2 className="font-serif text-3xl font-bold mb-4">
              Be one of our first {industry} clients
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
              Your first month is free, with done-for-you setup and no contract.
              We capture every call, text, and message so nothing slips, and we
              want to earn your trust first.
            </p>
            <Link
              href="/the-offer"
              className="inline-flex items-center gap-2 bg-white text-independence-red font-bold py-4 px-10 rounded-lg text-base lift"
              style={{ textDecoration: "none" }}
            >
              Claim your free setup
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── 6. FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-parchment py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-3xl font-bold text-liberty-blue mb-8 text-center">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-parchment-400 shadow-sm group"
              >
                <summary className="cursor-pointer list-none flex justify-between items-center px-6 py-5 font-semibold text-iron select-none hover:text-liberty-blue transition-colors">
                  <span>{faq.q}</span>
                  <span className="ml-4 shrink-0 text-lg text-eagle-gold group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Bottom CTA ───────────────────────────────────────────────── */}
      <section className="bg-liberty-blue text-white py-20 px-4 text-center has-glow">
        <Reveal>
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Ready to book every {industry} inquiry?
            </h2>
            <p className="text-blue-200 mb-8">
              We&apos;ll show you exactly which calls, texts, and messages are
              slipping through, and how we turn each one into a booked appointment.
            </p>
            <Link
              href="/the-offer"
              className="btn-primary"
              style={{ padding: "1rem 2.25rem", fontSize: "1rem" }}
            >
              Claim your free month
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
