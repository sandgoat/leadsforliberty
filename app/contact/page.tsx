import type { Metadata } from "next";
import { MapTrifold } from "@phosphor-icons/react/dist/ssr";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to LeadsforLiberty.com about turning every call, text, email, and DM you already get into booked appointments. First month free, no contracts.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="contact-hero-heading"
        style={{ background: "var(--liberty-blue)" }}
        className="py-20 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="mx-auto max-w-2xl">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--eagle-gold)", fontFamily: "var(--font-sans)" }}
          >
            First Month Free · No Contracts
          </p>
          <h1
            id="contact-hero-heading"
            className="text-white mb-5"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Let&apos;s Get Every Inquiry Booked.
          </h1>
          <p
            className="text-lg"
            style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-sans)" }}
          >
            Tell us about your business and we&apos;ll show you how to capture every call, missed call,
            text, email, and DM you already get, then turn each one into a booked appointment on your
            calendar. Automatically.
          </p>
        </div>
      </section>

      {/* ── Contact Section ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="contact-section-heading"
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--parchment)" }}
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="contact-section-heading" className="sr-only">
            Contact form and information
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* ── Contact Form ─────────────────────────────────────────── */}
            <div className="lg:col-span-3">
              <h3
                className="mb-6 text-xl font-bold"
                style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}
              >
                Send Us a Message
              </h3>
              <ContactForm />
            </div>

            {/* ── Contact Info Card ─────────────────────────────────────── */}
            <aside
              className="lg:col-span-2"
              aria-label="Contact information"
            >
              <div
                className="rounded-xl p-7 sticky top-24"
                style={{
                  background: "var(--liberty-blue)",
                  color: "#ffffff",
                }}
              >
                <h3
                  className="font-bold text-xl mb-6 text-white"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Contact Information
                </h3>
                <ul className="space-y-5" aria-label="Contact details">
                  <li className="flex items-start gap-4">
                    <span
                      className="text-2xl shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      📞
                    </span>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-1"
                        style={{ color: "var(--eagle-gold)", fontFamily: "var(--font-sans)" }}
                      >
                        Phone
                      </p>
                      <a
                        href="tel:+15593496165"
                        className="text-base font-semibold text-white"
                        style={{ fontFamily: "var(--font-sans)", textDecoration: "none" }}
                      >
                        (559) 349-6165
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span
                      className="text-2xl shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      ✉️
                    </span>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-1"
                        style={{ color: "var(--eagle-gold)", fontFamily: "var(--font-sans)" }}
                      >
                        Email
                      </p>
                      <a
                        href="mailto:hello@leadsforliberty.com"
                        className="text-base font-semibold text-white break-all"
                        style={{ fontFamily: "var(--font-sans)", textDecoration: "none" }}
                      >
                        hello@leadsforliberty.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span
                      className="text-2xl shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      📍
                    </span>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-1"
                        style={{ color: "var(--eagle-gold)", fontFamily: "var(--font-sans)" }}
                      >
                        Location
                      </p>
                      <address
                        className="text-base not-italic"
                        style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-sans)" }}
                      >
                        Liberty Hill, TX 78642
                        <br />
                        <span className="text-sm" style={{ color: "rgba(255,255,255,0.60)" }}>
                          Working with service businesses everywhere
                        </span>
                      </address>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span
                      className="text-2xl shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      🕐
                    </span>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-1"
                        style={{ color: "var(--eagle-gold)", fontFamily: "var(--font-sans)" }}
                      >
                        Business Hours
                      </p>
                      <dl style={{ fontFamily: "var(--font-sans)" }}>
                        <div className="flex justify-between gap-4">
                          <dt className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                            Mon to Fri
                          </dt>
                          <dd className="text-sm font-semibold text-white">8:00 am to 6:00 pm CT</dd>
                        </div>
                        <div className="flex justify-between gap-4 mt-1">
                          <dt className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                            Sat to Sun
                          </dt>
                          <dd className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                            By appointment
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </li>
                </ul>

                <div
                  className="mt-8 pt-6"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <p
                    className="text-sm font-semibold text-white mb-1"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Need it faster?
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-sans)" }}
                  >
                    Skip the form and{" "}
                    <a
                      href="/book"
                      className="font-semibold underline"
                      style={{ color: "var(--eagle-gold)" }}
                    >
                      book a free 30-minute walkthrough
                    </a>{" "}
                    directly on our calendar.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Map Placeholder ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="map-heading"
        className="px-4 sm:px-6 lg:px-8 pb-16"
        style={{ background: "var(--parchment)" }}
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="map-heading"
            className="sr-only"
          >
            Map showing Liberty Hill, TX
          </h2>
          {/*
            MAP EMBED:
            Replace this div with a Google Maps embed iframe:
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!...YOUR_EMBED_CODE..."
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LeadsforLiberty.com — Liberty Hill, TX"
            />
          */}
          <div
            className="rounded-xl flex items-center justify-center min-h-[280px]"
            style={{
              background: "#e5e7eb",
              border: "2px dashed rgba(10,42,102,0.18)",
            }}
            role="img"
            aria-label="Map placeholder, Liberty Hill, TX. Replace with Google Maps embed."
          >
            <div className="text-center px-6">
              <MapTrifold size={44} weight="regular" aria-hidden="true" style={{ color: "#9ca3af", display: "block", margin: "0 auto 0.75rem" }} />
              <p
                className="text-sm font-medium"
                style={{ color: "#6b7280", fontFamily: "var(--font-sans)" }}
              >
                Map embed, Liberty Hill, TX 78642
              </p>
              <a
                href="https://maps.google.com/?q=Liberty+Hill+TX+78642"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs mt-2 inline-block"
                style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-sans)" }}
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*
        GHL CHAT WIDGET:
        Paste your GoHighLevel chat widget script just before the closing </body> tag
        in app/layout.tsx, or inject it here via a Client Component useEffect if needed.

        Example GHL chat widget embed:
        <script>
          window.GHL_CHAT_WIDGET = {
            widgetId: "YOUR_GHL_WIDGET_ID",
          };
        </script>
        <script src="https://widgets.leadconnectorhq.com/loader.js" data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" defer></script>
      */}
    </>
  );
}
