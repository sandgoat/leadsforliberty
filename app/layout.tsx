import type { Metadata, Viewport } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import SiteNav from "./components/SiteNav";
import Link from "next/link";
import Script from "next/script";

/* ── Google Fonts via next/font ─────────────────────────────────────────── */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const GA4_ID = "G-22LDEBCFVC";

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.leadsforliberty.com"),
  title: {
    template: "%s | LeadsforLiberty.com",
    default: "Capture Every Call. Book Every Slot. | LeadsforLiberty.com",
  },
  description:
    "We capture the calls, texts, emails, and DMs your business already gets and book them into your calendar. Done-for-you booking systems. First month free.",
  keywords: [
    "appointment booking software for service businesses",
    "missed call text back",
    "lead capture and booking system",
    "online booking for service businesses",
    "automated appointment scheduling",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.leadsforliberty.com",
    siteName: "LeadsforLiberty.com",
    title: "Capture Every Call. Book Every Slot. | LeadsforLiberty.com",
    description:
      "We capture the calls, texts, emails, and DMs you already get and book them into your calendar. Done-for-you booking systems for busy service businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capture Every Call. Book Every Slot. | LeadsforLiberty.com",
    description:
      "We capture the calls, texts, and messages you already get and book them into your calendar. Built for busy service businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.leadsforliberty.com",
  },
  verification: {
    google: "6ipDDDnhsySPKmkxVZS7kMVcHCegzmhAbdrLXCVH_dk",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D1F3C",
  width: "device-width",
  initialScale: 1,
};

/* ── Structured data ─────────────────────────────────────────────────────── */
const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Leads for Liberty",
  url: "https://www.leadsforliberty.com",
  telephone: "+1-559-349-6165",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Liberty Hill",
    addressRegion: "TX",
    postalCode: "78642",
    addressCountry: "US",
  },
  areaServed: ["Liberty Hill, TX", "Austin, TX", "Texas Hill Country"],
  priceRange: "$$",
};

/* ── Footer data ─────────────────────────────────────────────────────────── */
const footerColumns = [
  {
    heading: "Services",
    links: [
      { label: "Business Texting",    href: "/services/business-texting" },
      { label: "Website Chat Widget", href: "/services/chat-widget" },
      { label: "AI Lead Management",  href: "/services/ai-lead-management" },
      { label: "Websites",            href: "/services/websites" },
      { label: "Reputation Mgmt",     href: "/services/reputation-management" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Home Services",          href: "/industries/home-services" },
      { label: "Contractors",            href: "/industries/contractors" },
      { label: "Real Estate",            href: "/industries/real-estate" },
      { label: "Dental & Medical",       href: "/industries/dental-medical" },
      { label: "Professional Services",  href: "/industries/professional-services" },
      { label: "Auto Services",          href: "/industries/auto-services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us",            href: "/about" },
      { label: "Liberty Hill",        href: "/liberty-hill" },
      { label: "Case Studies",        href: "/case-studies" },
      { label: "Resources",           href: "/resources" },
      { label: "Contact",             href: "/contact" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "(559) 349-6165",            href: "tel:+15593496165" },
      { label: "hello@leadsforliberty.com", href: "mailto:hello@leadsforliberty.com" },
      { label: "Liberty Hill, TX 78642",    href: "https://maps.google.com/?q=Liberty+Hill+TX", external: true },
      { label: "Get a Free Quote",          href: "/the-offer" },
    ],
  },
];

/* ── Root Layout ─────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-linen text-navy">

        {/* ── Skip-to-content (a11y) ─────────────────────────────────────── */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded"
          style={{ background: "#0D1F3C", color: "#FAF8F5" }}
        >
          Skip to content
        </a>

        {/* ── Sticky stack: announcement bar + nav ───────────────────────── */}
        <div className="sticky top-0 z-50">
          <div
            className="w-full text-center text-xs font-medium py-2 px-4"
            style={{
              background: "#0D1F3C",
              color: "#ffffff",
              fontFamily: "var(--font-outfit), sans-serif",
            }}
            role="region"
            aria-label="Promotional offer"
          >
            Stop missing bookings. First month free, no contracts.{" "}
            <Link
              href="/the-offer"
              className="font-semibold ml-2 transition-colors duration-150"
              style={{ color: "#FAF8F5", textDecoration: "underline" }}
              aria-label="Claim your free month offer"
            >
              Claim it
            </Link>
          </div>

          {/* ── Navigation ───────────────────────────────────────────────── */}
          <SiteNav />
        </div>

        {/* ── Page Content ───────────────────────────────────────────────── */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* ── Footer ─────────────────────────────────────────────────────── */}
        <footer
          aria-label="Site footer"
          style={{
            background: "#0D1F3C",
            color: "#FAF8F5",
            fontFamily: "var(--font-outfit), sans-serif",
          }}
        >
          {/* Main footer grid */}
          <div className="page-container py-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">

              {/* Brand column */}
              <div className="md:col-span-3 lg:col-span-2">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2.5 mb-4 group"
                  aria-label="Leads for Liberty — Home"
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display: "block",
                      width: "150px",
                      height: "75px",
                      maxWidth: "60vw",
                      backgroundColor: "#FAF8F5",
                      WebkitMaskImage: "url(/logo.png)",
                      maskImage: "url(/logo.png)",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "left center",
                      maskPosition: "left center",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                    }}
                  />
                </Link>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "rgba(250,248,245,0.78)", maxWidth: "28ch" }}
                >
                  We capture the calls, texts, and messages you already get and book them into your calendar. Built for busy service businesses.
                </p>
              </div>

              {/* Link columns */}
              {footerColumns.map((col) => (
                <div key={col.heading} className="lg:col-span-1">
                  <h3
                    className="text-xs font-semibold uppercase tracking-widest mb-4"
                    style={{ color: "#FAF8F5", letterSpacing: "0.08em" }}
                  >
                    {col.heading}
                  </h3>
                  <ul className="space-y-2.5" style={{ listStyle: "none" }}>
                    {col.links.map((link) => (
                      <li key={link.label}>
                        {"external" in link && link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm transition-colors duration-150 hover:text-white"
                            style={{ color: "rgba(250,248,245,0.78)", textDecoration: "none" }}
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-sm transition-colors duration-150 hover:text-white"
                            style={{ color: "rgba(250,248,245,0.78)", textDecoration: "none" }}
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Footer bottom bar */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}>
            <div
              className="page-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
              style={{ color: "rgba(250,248,245,0.7)" }}
            >
              <p style={{ fontStyle: "italic" }}>Made for busy service businesses</p>
              <p>
                &copy; {new Date().getFullYear()} LeadsforLiberty.com &middot; All rights reserved.
              </p>
              <nav className="flex items-center gap-5" aria-label="Legal navigation">
                {[
                  { label: "Privacy",       href: "/legal/privacy" },
                  { label: "Terms",         href: "/legal/terms" },
                  { label: "Accessibility", href: "/legal/accessibility" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:underline transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(250,248,245,0.7)", textDecoration: "none" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </footer>

        {/* ── GHL SMS chat widget (site-wide; number is A2P 10DLC approved) ── */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a469fc1eacf7e67b98e6758"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />

        {/* ── Google Analytics 4 ─────────────────────────────────────────── */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","${GA4_ID}");`}
        </Script>
      </body>
    </html>
  );
}
