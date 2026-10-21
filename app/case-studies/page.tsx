import type { Metadata } from "next";
import type { ElementType } from "react";
import Link from "next/link";
import {
  Wrench,
  Scissors,
  Car,
  MapPin,
  Warning,
  Hourglass,
  Trophy,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Case Studies: Inquiries Captured and Booked",
  description:
    "See how appointment-based service businesses use LeadsforLiberty.com to capture every call, text, and message and turn it into a booked appointment. Honest, founding-client projections.",
};

const caseStudies: {
  id: number;
  industry: string;
  location: string;
  icon: ElementType;
  status: string;
  projections: { label: string; value: string }[];
  services: string[];
  challenge: string;
  outcome: string;
}[] = [
  {
    id: 1,
    industry: "Home Services Company",
    location: "Liberty Hill, TX",
    icon: Wrench,
    status: "Founding client slot: projected outcomes",
    projections: [
      { label: "Projected inquiries captured/month", value: "60+" },
      { label: "Projected booking rate", value: "42%" },
      { label: "Avg appointment value", value: "$95" },
    ],
    services: ["Missed-Call Text-Back", "Unified Inbox", "Online Booking"],
    challenge:
      "Techs are on the job all day, so calls go to voicemail and form fills sit for hours. Ready-to-book homeowners move on to the next company on the list.",
    outcome:
      "With missed-call text-back replying instantly, a unified inbox catching every message and text, and online booking with calendar sync, a company like this captures the inquiries it was already getting and turns them into booked jobs.",
  },
  {
    id: 2,
    industry: "Med Spa & Salon",
    location: "Georgetown, TX",
    icon: Scissors,
    status: "Founding client slot: projected outcomes",
    projections: [
      { label: "Projected inquiries captured/month", value: "50+" },
      { label: "No-shows", value: "Cut with automated reminders" },
    ],
    services: ["Unified Inbox", "Online Booking", "Automated Reminders"],
    challenge:
      "A fully booked provider can't answer the phone or reply to DMs mid-appointment, and last-minute no-shows leave expensive gaps in the schedule.",
    outcome:
      "A unified inbox plus online booking captures every request the moment it comes in, and automated reminders keep the schedule full. A med spa of this type books more of the demand it already has.",
  },
  {
    id: 3,
    industry: "Auto Detailing Shop",
    location: "Leander, TX",
    icon: Car,
    status: "Founding client slot: projected outcomes",
    projections: [
      { label: "Projected inquiries captured/month", value: "40+" },
      { label: "Avg appointment value", value: "$180" },
    ],
    services: ["AI Front Desk", "Online Booking", "Win-Back Campaigns"],
    challenge:
      "Heads-down in the bay all day with no front desk, so calls and form fills pile up unanswered and past customers are never followed up with.",
    outcome:
      "An AI front desk answers and books around the clock, online booking syncs to the real calendar, and win-back campaigns re-engage past customers. A shop like this captures and books appointments it used to lose.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="cs-hero-heading"
        style={{ background: "var(--liberty-blue)" }}
        className="py-20 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="mx-auto max-w-3xl">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--eagle-gold)", fontFamily: "var(--font-sans)" }}
          >
            Proof of Work
          </p>
          <h1
            id="cs-hero-heading"
            className="text-white mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Every Inquiry Captured. Every Appointment Booked.
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-sans)" }}
          >
            Every case study starts with the same goal: capture the calls, texts, and messages
            a business already gets and turn each one into a booked appointment. Here&apos;s what
            that looks like for businesses like yours.
          </p>
        </div>
      </section>

      {/* ── Disclaimer Banner ─────────────────────────────────────────────── */}
      <div
        role="note"
        aria-label="Important disclosure about projected outcomes"
        style={{ background: "var(--eagle-gold)" }}
        className="px-4 py-4"
      >
        <div className="mx-auto max-w-5xl flex items-start gap-3">
          <Warning size={24} weight="fill" className="shrink-0" style={{ color: "var(--iron)" }} aria-hidden="true" />
          <div style={{ fontFamily: "var(--font-sans)" }}>
            <strong className="text-sm font-bold uppercase tracking-wide" style={{ color: "var(--iron)" }}>
              Important, Please Read:
            </strong>{" "}
            <span className="text-sm" style={{ color: "var(--iron)" }}>
              We&apos;re currently onboarding our founding clients. Case studies will be updated
              with real results as they become available. The projected outcomes below are based on
              typical results for businesses of this type and market size. Individual results will
              vary. We do not guarantee specific revenue outcomes.
            </span>
          </div>
        </div>
      </div>

      {/* ── Case Study Cards ──────────────────────────────────────────────── */}
      <section
        aria-labelledby="cs-grid-heading"
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--parchment)" }}
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="cs-grid-heading" className="section-heading centered mb-12">
            Founding Client Projections
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => {
              const Icon = study.icon;
              return (
              <article
                key={study.id}
                className="card bg-white flex flex-col"
                aria-label={`Case study: ${study.industry} in ${study.location}`}
              >
                {/* Card header */}
                <div
                  className="px-6 py-5 rounded-t-lg"
                  style={{ background: "var(--liberty-blue)" }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon size={30} weight="duotone" className="text-white" aria-hidden="true" />
                    <div>
                      <h3
                        className="font-bold text-white text-lg leading-tight"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {study.industry}
                      </h3>
                      <p
                        className="text-sm inline-flex items-center gap-1"
                        style={{ color: "var(--eagle-gold)", fontFamily: "var(--font-sans)" }}
                      >
                        <MapPin size={14} weight="fill" aria-hidden="true" /> {study.location}
                      </p>
                    </div>
                  </div>
                  {/* Status badge */}
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mt-1"
                    style={{
                      background: "rgba(201,162,39,0.2)",
                      color: "var(--eagle-gold)",
                      fontFamily: "var(--font-sans)",
                      border: "1px solid rgba(201,162,39,0.4)",
                    }}
                  >
                    <Hourglass size={12} weight="fill" aria-hidden="true" /> {study.status}
                  </div>
                </div>

                {/* Projections */}
                <div
                  className="px-6 py-4 border-b"
                  style={{ borderColor: "#e5e7eb", background: "#f9fafb" }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{ color: "#6b7280", fontFamily: "var(--font-sans)" }}
                  >
                    Projected Outcomes
                  </p>
                  <ul className="space-y-2">
                    {study.projections.map((p) => (
                      <li key={p.label} className="flex items-baseline justify-between gap-2">
                        <span
                          className="text-sm"
                          style={{ color: "var(--iron)", fontFamily: "var(--font-sans)" }}
                        >
                          {p.label}
                        </span>
                        <span
                          className="text-sm font-bold shrink-0"
                          style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-sans)" }}
                        >
                          {p.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Body */}
                <div className="px-6 py-5 flex-1 flex flex-col">
                  <div className="mb-4">
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "#6b7280", fontFamily: "var(--font-sans)" }}
                    >
                      The Challenge
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--iron)", fontFamily: "var(--font-sans)" }}
                    >
                      {study.challenge}
                    </p>
                  </div>
                  <div className="mb-4">
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "#6b7280", fontFamily: "var(--font-sans)" }}
                    >
                      The Approach
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--iron)", fontFamily: "var(--font-sans)" }}
                    >
                      {study.outcome}
                    </p>
                  </div>

                  {/* Services */}
                  <div className="mt-auto pt-4" style={{ borderTop: "1px solid #f3f4f6" }}>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "#6b7280", fontFamily: "var(--font-sans)" }}
                    >
                      Services Used
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((svc) => (
                        <span
                          key={svc}
                          className="px-2.5 py-1 text-xs font-medium rounded-full"
                          style={{
                            background: "var(--liberty-blue-50, #eef1f8)",
                            color: "var(--liberty-blue)",
                            fontFamily: "var(--font-sans)",
                          }}
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA: Be Our Next Case Study */}
      <section
        aria-labelledby="cs-cta-heading"
        className="py-20 px-4 sm:px-6 lg:px-8 text-center"
        style={{ background: "var(--liberty-blue)" }}
      >
        <div className="mx-auto max-w-2xl">
          <Trophy size={40} weight="duotone" className="mb-4 block mx-auto text-white" aria-hidden="true" />
          <h2
            id="cs-cta-heading"
            className="text-white mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Want to Be Our Next Case Study?
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-sans)" }}
          >
            We&apos;re actively onboarding founding clients. Founding clients get the first
            month free, done-for-you setup, and featured placement in our case study library
            once we capture and book their first appointments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/the-offer" className="btn-primary btn-lg">
              Claim a Founding Client Slot →
            </Link>
            <Link
              href="/pricing"
              className="btn-secondary btn-inverted btn-lg"
            >
              View Pricing
            </Link>
          </div>
          <p
            className="text-sm mt-6"
            style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-sans)" }}
          >
            First month free. No long-term contracts. Cancel anytime.
          </p>
        </div>
      </section>
    </>
  );
}
