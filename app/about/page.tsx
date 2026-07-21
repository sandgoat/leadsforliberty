import type { Metadata } from "next";
import type { ElementType } from "react";
import Link from "next/link";
import {
  Handshake,
  ChartLineUp,
  House,
  Gear,
  UserCircle,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "About LeadsforLiberty | Capture Every Inquiry, Book Every Appointment",
  description:
    "LeadsforLiberty is a founder-led, mission-driven team that captures every call, text, email, form, and DM your business already gets and turns each one into a booked appointment. No contracts, no setup fees.",
};

const values: { icon: ElementType; title: string; desc: string }[] = [
  {
    icon: Handshake,
    title: "Plainspoken Honesty",
    desc: "We tell you what's working, what isn't, and why. No jargon, no spin. You deserve to understand exactly what you're paying for and exactly which inquiries we turned into booked appointments.",
  },
  {
    icon: ChartLineUp,
    title: "Outcome Accountability",
    desc: "We don't hide behind vanity metrics. Every account is measured against the thing that matters most: inquiries captured and appointments booked on your calendar.",
  },
  {
    icon: House,
    title: "Local Roots, Built for Anyone",
    desc: "We're based in Liberty Hill, and we serve appointment-based businesses anywhere. Small town grit, enterprise-grade systems for capturing and converting the demand you already have.",
  },
  {
    icon: Gear,
    title: "Done-for-You, Not Done-to-You",
    desc: "You run your business, we run the capture-and-booking system. Full stop. No homework, no setup fees, no busywork. We set everything up for you and you're live in days.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-parchment min-h-screen font-sans">
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-liberty-blue text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-eagle-gold font-semibold tracking-widest text-sm uppercase mb-3">
            About Us
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Built in Liberty Hill. Built to Capture Every Inquiry.
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We exist to make sure busy service businesses never lose another
            customer to a missed call, an ignored text, or a form nobody
            answered. We capture every inquiry you already get and turn it into a
            booked appointment, automatically.
          </p>
        </div>
      </section>

      {/* ── 2. Founder + About the Company ─────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            {/* Founder placeholder card */}
            <div className="rounded-2xl border-2 border-dashed border-parchment-400 bg-parchment p-8 flex flex-col items-center text-center gap-4">
              <div className="w-28 h-28 rounded-full bg-parchment-400 border-2 border-dashed border-parchment-600 flex items-center justify-center">
                <UserCircle size={56} weight="duotone" className="text-iron opacity-60" aria-hidden="true" />
              </div>
              <p className="text-iron text-sm italic opacity-70">
                [Founder photo and bio to be added with founder approval]
              </p>
              <span className="text-xs text-independence-red font-semibold tracking-wider uppercase">
                Placeholder, Pending Founder Approval
              </span>
            </div>

            {/* About the Company */}
            <div className="space-y-5">
              <h2 className="font-serif text-3xl font-bold text-liberty-blue">
                About LeadsforLiberty
              </h2>
              <p className="text-iron leading-relaxed">
                LeadsforLiberty was founded on a simple realization: most
                appointment-based businesses already get plenty of interest.
                They lose it. A call rings out, a text sits unanswered, a form
                submission gets buried, and a ready-to-book customer quietly
                moves on to the next name on the list.
              </p>
              <p className="text-iron leading-relaxed">
                We built LeadsforLiberty to close that gap. We capture every
                inquiry a business gets, by phone, missed call, text, email,
                website form, or Instagram and Facebook DM, and turn each one
                into a booked appointment on the calendar, automatically.
                Transparent, accountable, founder-led, and done for you.
              </p>
              <p className="text-iron leading-relaxed">
                Built in Liberty Hill. Mission-driven. Founder-led. We treat
                every business we work with the way we'd want our own treated:
                no inquiry left behind.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["Liberty Hill Based", "No Contracts", "First Month Free", "Done-for-You Setup"].map((badge) => (
                  <span
                    key={badge}
                    className="inline-block bg-liberty-blue text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Values ───────────────────────────────────────────────────── */}
      <section className="bg-parchment py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-liberty-blue text-center mb-3">
            What We Stand For
          </h2>
          <p className="text-center text-iron mb-10 max-w-xl mx-auto">
            These aren&apos;t corporate values posted on a wall. They&apos;re how we
            actually run your capture-and-booking system, every day.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-sm border border-parchment-400 flex gap-5 items-start"
              >
                <Icon size={32} weight="duotone" className="shrink-0 mt-0.5 text-liberty-blue" aria-hidden="true" />
                <div>
                  <h3 className="font-serif font-bold text-liberty-blue text-lg mb-2">
                    {val.title}
                  </h3>
                  <p className="text-iron text-sm leading-relaxed">{val.desc}</p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Our Approach ─────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-liberty-blue text-center mb-3">
            Our 3-Phase Approach
          </h2>
          <p className="text-center text-iron mb-12 max-w-xl mx-auto">
            Every account follows the same proven framework. No guesswork, no
            winging it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                phase: "01",
                name: "Capture",
                desc: "We connect every channel your customers already use: phone calls, missed calls, texts, emails, website forms, and Instagram and Facebook DMs. From day one, every inquiry lands in one unified inbox instead of slipping through the cracks.",
                color: "bg-liberty-blue",
              },
              {
                phase: "02",
                name: "Convert",
                desc: "Missed-call text-back, your AI front desk, and automated follow-up respond instantly and guide each inquiry to your online booking, with two-way Google Calendar sync so the appointment lands on your real calendar. Done-for-you setup, live in days.",
                color: "bg-independence-red",
              },
              {
                phase: "03",
                name: "Retain",
                desc: "Automated reminders cut no-shows, review requests build your reputation, and win-back campaigns re-engage past customers. Every month you get a plain-English report showing inquiries captured and appointments booked.",
                color: "bg-eagle-gold",
              },
            ].map((step) => (
              <div
                key={step.phase}
                className="rounded-2xl border border-parchment-400 shadow-sm overflow-hidden"
              >
                <div
                  className={`${step.color} text-white px-6 py-5 flex items-center gap-4`}
                >
                  <span className="font-serif font-bold text-3xl opacity-60">
                    {step.phase}
                  </span>
                  <h3 className="font-serif font-bold text-xl">{step.name}</h3>
                </div>
                <div className="bg-white px-6 py-5">
                  <p className="text-iron text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-iron text-sm italic opacity-70">
              Capture → Convert → Retain. Every inquiry captured, or your next
              month is on us.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. CTA to /book ─────────────────────────────────────────────── */}
      <section className="bg-liberty-blue text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Let&apos;s talk about your business.
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            No sales pitch, no hard close. Just an honest conversation about how
            many inquiries you&apos;re missing and how we&apos;ll turn them into
            booked appointments. First month free.
          </p>
          <Link
            href="/book"
            className="inline-block bg-independence-red text-white font-bold py-4 px-10 rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Book a Free Consultation →
          </Link>
        </div>
      </section>
    </div>
  );
}
