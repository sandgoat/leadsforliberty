import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServicePageProps {
  label: string;
  headline: string;
  subhead: string;
  whatThisIs: string;
  whatYouGet: string[];
  whyItMatters: string[];
  stat: string;
  faqs: ServiceFAQ[];
}

export default function ServicePageLayout({
  label,
  headline,
  subhead,
  whatThisIs,
  whatYouGet,
  whyItMatters,
  stat,
  faqs,
}: ServicePageProps) {
  return (
    <div className="bg-parchment min-h-screen font-sans">
      {/* Hero */}
      <section className="bg-liberty-blue text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-eagle-gold font-semibold tracking-widest text-sm uppercase mb-3">
              {label}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 leading-tight">
              {headline}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">{subhead}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <Link href="/the-offer" className="btn-primary" style={{ padding: "1rem 2.25rem", fontSize: "1rem" }}>
              Claim your free month
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Stat Banner */}
      <section className="bg-eagle-gold text-iron py-6 px-4">
        <Reveal>
          <p className="max-w-3xl mx-auto text-center font-semibold text-base">
            {stat}
          </p>
        </Reveal>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {/* What This Is */}
        <Reveal>
          <section>
            <h2 className="font-serif text-3xl font-bold text-liberty-blue mb-4">
              What this is
            </h2>
            <p className="text-iron leading-relaxed text-base max-w-3xl">{whatThisIs}</p>
          </section>
        </Reveal>

        {/* What You Get */}
        <Reveal>
          <section className="lift bg-white rounded-2xl p-8 shadow-sm border border-parchment-400">
            <h2 className="font-serif text-3xl font-bold text-liberty-blue mb-6">
              What you get
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whatYouGet.map((item, i) => (
                <li key={i} className="flex gap-3 items-start text-sm text-iron">
                  <span
                    className="inline-flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 999,
                      background: "var(--color-crimson)",
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {/* Why It Matters */}
        <Reveal>
          <section>
            <h2 className="font-serif text-3xl font-bold text-liberty-blue mb-4">
              Why it matters
            </h2>
            <div className="space-y-4 max-w-3xl">
              {whyItMatters.map((para, i) => (
                <p key={i} className="text-iron leading-relaxed text-base">
                  {para}
                </p>
              ))}
            </div>
          </section>
        </Reveal>

        {/* FAQ */}
        <Reveal>
          <section>
            <h2 className="font-serif text-3xl font-bold text-liberty-blue mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="lift bg-white rounded-xl p-6 shadow-sm border border-parchment-400"
                >
                  <h3 className="font-semibold text-iron mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </div>

      {/* Bottom CTA */}
      <section className="bg-liberty-blue text-white py-20 px-4 text-center has-glow">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to put this to work for your business?
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Book a free walkthrough. We&apos;ll show you exactly how we capture every
            inquiry you already get and turn it into a booked appointment.
          </p>
          <Link
            href="/the-offer"
            className="inline-flex items-center gap-2 bg-eagle-gold text-iron font-bold py-4 px-10 rounded-lg text-lg lift"
            style={{ textDecoration: "none" }}
          >
            Get your free walkthrough
            <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
