import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  MapTrifold,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Lead Capture & Booking in Liberty Hill, TX",
  description:
    "Built in Liberty Hill, TX: we capture every call, missed call, text, email, form, and DM your business gets and book it on your calendar. First month free.",
  keywords: [
    "lead capture system",
    "missed call text back",
    "online booking system",
    "appointment booking automation",
    "Liberty Hill TX small business",
  ],
};

const services = [
  { name: "Google Business Profile Management", href: "/services/google-business-profile" },
  { name: "Local SEO", href: "/services/local-seo" },
  { name: "Google Ads & Local Service Ads", href: "/services/google-ads" },
  { name: "Facebook & Instagram Ads", href: "/services/facebook-ads" },
  { name: "Reputation Management", href: "/services/reputation-management" },
  { name: "Missed-Call Text-Back", href: "/services/missed-call-text-back" },
  { name: "AI Lead Management", href: "/services/ai-lead-management" },
  { name: "Email Marketing", href: "/services/email-marketing" },
  { name: "Conversion-Optimized Websites", href: "/services/websites" },
  { name: "Press Release Backlinks", href: "/services/press-releases" },
];

const industries = [
  { name: "Home Services", href: "/industries/home-services" },
  { name: "Contractors & Remodelers", href: "/industries/contractors" },
  { name: "Real Estate", href: "/industries/real-estate" },
  { name: "Dental & Medical", href: "/industries/dental-medical" },
  { name: "Professional Services", href: "/industries/professional-services" },
  { name: "Auto Services", href: "/industries/auto-services" },
];

export default function LibertyHillPage() {
  return (
    <div className="bg-parchment min-h-screen font-sans">
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-liberty-blue text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-eagle-gold font-semibold tracking-widest text-sm uppercase mb-3">
            Proudly Built in Liberty Hill, TX 78642
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Built in Liberty Hill. Booking Appointments Everywhere.
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            We&apos;re a hometown team with a simple promise: capture every
            inquiry your business already gets and turn it into a booked
            appointment, automatically. We started here, and we serve
            appointment-based businesses anywhere.
          </p>
          <Link
            href="/the-offer"
            className="inline-block bg-independence-red text-white font-bold py-4 px-10 rounded-lg text-base hover:opacity-90 transition-opacity"
          >
            See the Offer →
          </Link>
        </div>
      </section>

      {/* ── 2. Why Liberty Hill ─────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-liberty-blue mb-8 text-center">
            Where We Come From
          </h2>
          <div className="space-y-6 text-iron leading-relaxed text-base">
            <p>
              Liberty Hill is one of the fastest-growing cities in Texas. Located
              in Williamson County, one of the fastest-growing counties in the
              U.S., it has seen over 300% population growth since 2010. What was
              once a quiet Hill Country community is now a thriving city, and
              watching local businesses scramble to keep up with the demand is
              exactly why we built what we built.
            </p>
            <p>
              We saw the same story over and over: a business gets plenty of
              calls, texts, and form fills, then loses half of them to a missed
              call, a slow reply, or an inbox nobody checks. The inquiries were
              already there. The follow-up wasn&apos;t. So we built a system that
              captures every one of them and books them on the calendar
              automatically.
            </p>
            <p>
              That hometown standard travels well. We&apos;re proud to be from
              Liberty Hill, and we serve appointment-based businesses anywhere:
              dog groomers, salons, clinics, contractors, and more. Wherever you
              are, the promise is the same. Every inquiry captured, every
              appointment booked.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Services We Offer Locally ────────────────────────────────── */}
      <section className="bg-parchment py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-liberty-blue mb-3 text-center">
            Everything That Powers Your Capture-and-Booking System
          </h2>
          <p className="text-center text-iron mb-10 max-w-xl mx-auto">
            Every capability you need to capture inquiries and book appointments,
            done for you and fully managed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-parchment-400 shadow-sm hover:border-liberty-blue hover:shadow-md transition-all group"
              >
                <Check size={18} weight="bold" className="text-eagle-gold shrink-0" aria-hidden="true" />
                <span className="text-iron text-sm font-medium group-hover:text-liberty-blue transition-colors">
                  {svc.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Local Commitment ─────────────────────────────────────────── */}
      <section className="bg-liberty-blue text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Hometown Standards. Done-for-You Setup.
          </h2>
          <p className="text-blue-200 text-lg leading-relaxed mb-6">
            Big agencies sell you a package, hand you off to a junior account
            manager in a different city, and invoice you monthly regardless of
            results. That&apos;s not how we operate. We set up your entire
            capture-and-booking system for you, connect your phone, texts, email,
            forms, and DMs, and have you live in days.
          </p>
          <p className="text-blue-200 text-lg leading-relaxed">
            We answer our phones, we keep it plainspoken, and we treat your
            calendar like it&apos;s our own. The standard we set in Liberty Hill
            is the standard every business we work with gets. That&apos;s the
            LeadsforLiberty difference.
          </p>
        </div>
      </section>

      {/* ── 5. Map Section ──────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-liberty-blue mb-6">
            Find Us in Liberty Hill
          </h2>
          <div
            id="liberty-hill-map"
            className="w-full h-64 rounded-2xl border-2 border-parchment-400 bg-parchment flex flex-col items-center justify-center gap-3 shadow-inner"
            aria-label="Map placeholder, Liberty Hill, TX 78642"
          >
            <MapTrifold size={40} weight="duotone" className="text-liberty-blue" aria-hidden="true" />
            <p className="font-semibold text-liberty-blue text-lg">
              Liberty Hill, TX 78642
            </p>
            <p className="text-sm text-iron opacity-60">
              Google Map embed coming soon
            </p>
            <a
              href="https://maps.google.com/?q=Liberty+Hill+TX+78642"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-independence-red font-semibold hover:underline"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. Industries We Serve Locally ──────────────────────────────── */}
      <section className="bg-parchment py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-liberty-blue mb-3 text-center">
            Industries We Serve
          </h2>
          <p className="text-center text-iron mb-10 max-w-xl mx-auto">
            Whatever your trade or profession, we have a proven playbook to
            capture your inquiries and book them on your calendar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {industries.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className="block bg-white rounded-xl px-5 py-5 border border-parchment-400 shadow-sm hover:border-liberty-blue hover:shadow-md transition-all text-center group"
              >
                <span className="font-semibold text-iron group-hover:text-liberty-blue transition-colors">
                  {ind.name}
                </span>
                <span className="block mt-1 text-xs text-independence-red font-semibold">
                  See your playbook →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-independence-red text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Ready to stop losing inquiries?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            See the offer. No pressure, no contracts, first month free. Just a
            clear picture of how many appointments you could be booking from the
            demand you already have.
          </p>
          <Link
            href="/the-offer"
            className="inline-block bg-white text-independence-red font-bold py-4 px-10 rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            See the Offer →
          </Link>
        </div>
      </section>
    </div>
  );
}
