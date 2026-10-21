import type { Metadata } from "next";
import Link from "next/link";
import { CalendarBlank, Phone, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import GhlCalendar from "@/app/components/GhlCalendar";

export const metadata: Metadata = {
  title: "Book Your Free 30-Minute Walkthrough",
  description:
    "Book a free 30-minute walkthrough. We'll show you how to capture every call, text, email, and DM your business already gets and turn each into a booked appointment, automatically. First month free.",
};

// Live GoHighLevel booking calendar (white-label embed from Share > Embed).
const GHL_CALENDAR = {
  src: "https://links.leadsforliberty.com/widget/booking/KDTqWkMpAXsFvBedURDX",
  embedId: "KDTqWkMpAXsFvBedURDX_1782750690350",
  scriptSrc: "https://links.leadsforliberty.com/js/form_embed.js",
};

export default function BookPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="book-hero-heading"
        style={{ background: "var(--liberty-blue)" }}
        className="py-20 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="mx-auto max-w-2xl">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--eagle-gold)", fontFamily: "var(--font-sans)" }}
          >
            First Month Free · No Contracts · No Obligation
          </p>
          <h1
            id="book-hero-heading"
            className="text-white mb-5"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Book Your Free 30-Minute Walkthrough
          </h1>
          <p
            className="text-lg"
            style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-sans)" }}
          >
            In 30 minutes we&apos;ll show you exactly how every call, missed call, text, email, and DM
            your business already gets can be captured and booked onto your calendar, automatically,
            so nothing slips through the cracks.
          </p>
        </div>
      </section>

      {/* ── What to Expect ────────────────────────────────────────────────── */}
      <section
        aria-labelledby="expect-heading"
        className="py-14 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--parchment)" }}
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="expect-heading"
            className="section-heading centered mb-10"
          >
            What Happens on the Call
          </h2>
          <ol className="space-y-5" aria-label="What to expect during your walkthrough">
            {[
              {
                number: "01",
                heading: "We map where inquiries reach you today",
                body: "We look at every way customers already reach out: phone calls, missed calls, texts, emails, website forms, and Instagram and Facebook DMs. Most businesses are losing more of these than they realize.",
              },
              {
                number: "02",
                heading: "We show you the capture-and-booking system",
                body: "We walk you through exactly how each inquiry gets captured the moment it comes in, followed up automatically, and turned into a booked appointment on your calendar without you lifting a finger.",
              },
              {
                number: "03",
                heading: "You see how fast it goes live, with your first month free",
                body: "We handle the setup for you and have you live in days. No setup fees, no contracts, cancel anytime with 30 days notice. Every inquiry captured, or your next month is on us. If we're a good fit, great. If not, you still leave knowing exactly where you're losing business.",
              },
            ].map((step) => (
              <li
                key={step.number}
                className="flex gap-5 items-start"
              >
                <div
                  className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    background: "var(--liberty-blue)",
                    color: "var(--eagle-gold)",
                    fontFamily: "var(--font-sans)",
                  }}
                  aria-hidden="true"
                >
                  {step.number}
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1 text-base"
                    style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-sans)" }}
                  >
                    {step.heading}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--iron)", fontFamily: "var(--font-sans)" }}
                  >
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Calendar Booking Widget ───────────────────────────────────────── */}
      <section
        aria-labelledby="calendar-heading"
        className="py-14 px-4 sm:px-6 lg:px-8"
        style={{ background: "#ffffff" }}
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="calendar-heading"
            className="section-heading centered mb-8"
          >
            Pick a Time That Works for You
          </h2>

          {/*
            GHL CALENDAR EMBED:
            Replace the div below with your GoHighLevel calendar embed code.
            Example:
            <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/YOUR_CALENDAR_ID"
              style={{ width: '100%', border: 'none', overflow: 'hidden' }}
              scrolling="no"
              id="YOUR_CALENDAR_ID"
            />
            <script>
              window.addEventListener("message", function(event) {
                if (event.data && event.data.action === "booking-widget-resize") {
                  document.getElementById("YOUR_CALENDAR_ID").style.height = event.data.height + "px";
                }
              }, false);
            </script>
          */}

          {GHL_CALENDAR.src ? (
            <GhlCalendar
              src={GHL_CALENDAR.src}
              embedId={GHL_CALENDAR.embedId}
              scriptSrc={GHL_CALENDAR.scriptSrc}
              title="Book your free walkthrough"
            />
          ) : (
            <div
              id="booking-widget"
              className="rounded-xl flex items-center justify-center min-h-[480px] text-center px-6"
              style={{
                border: "2px dashed rgba(10,42,102,0.20)",
                background: "var(--parchment-50, #fefdfb)",
              }}
              aria-label="Booking calendar"
            >
              <div>
                <CalendarBlank
                  size={44}
                  weight="regular"
                  aria-hidden="true"
                  style={{ color: "var(--liberty-blue)", display: "block", margin: "0 auto 1rem" }}
                />
                <p
                  className="text-base font-medium mb-2"
                  style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-sans)" }}
                >
                  Calendar coming soon
                </p>
                <p
                  className="text-sm"
                  style={{ color: "#6b7280", fontFamily: "var(--font-sans)" }}
                >
                  In the meantime,{" "}
                  <a
                    href="tel:+15593496165"
                    className="font-semibold underline"
                    style={{ color: "var(--liberty-blue)" }}
                  >
                    call us at (559) 349-6165
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:hello@leadsforliberty.com"
                    className="font-semibold underline"
                    style={{ color: "var(--liberty-blue)" }}
                  >
                    hello@leadsforliberty.com
                  </a>.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Prefer Phone or Email ─────────────────────────────────────────── */}
      <section
        aria-labelledby="contact-alt-heading"
        className="py-12 px-4 sm:px-6 lg:px-8 text-center"
        style={{ background: "var(--parchment)", borderTop: "1px solid var(--parchment-300, #f0e9d3)" }}
      >
        <div className="mx-auto max-w-xl">
          <h2
            id="contact-alt-heading"
            className="mb-6"
            style={{
              color: "var(--liberty-blue)",
              fontFamily: "var(--font-serif)",
              fontSize: "1.5rem",
            }}
          >
            Prefer to Call or Email?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+15593496165"
              className="flex items-center gap-3 text-lg font-semibold"
              style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-sans)", textDecoration: "none" }}
              aria-label="Call us at (559) 349-6165"
            >
              <Phone size={22} weight="regular" aria-hidden="true" />
              (559) 349-6165
            </a>
            <span
              className="hidden sm:block text-xl"
              style={{ color: "#d1d5db" }}
              aria-hidden="true"
            >
              ·
            </span>
            <a
              href="mailto:hello@leadsforliberty.com"
              className="flex items-center gap-3 text-lg font-semibold"
              style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-sans)", textDecoration: "none" }}
              aria-label="Email us at hello@leadsforliberty.com"
            >
              <EnvelopeSimple size={22} weight="regular" aria-hidden="true" />
              hello@leadsforliberty.com
            </a>
          </div>
          <p
            className="text-sm mt-6"
            style={{ color: "#9ca3af", fontFamily: "var(--font-sans)" }}
          >
            Mon to Fri 8am to 6pm CT · We typically respond within 2 hours during business hours
          </p>
          <div className="mt-8">
            <Link href="/the-offer" className="btn-secondary">
              Or Claim Your First Month Free →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
