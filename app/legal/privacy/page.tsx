import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for LeadsforLiberty.com. Learn how we collect, use, and protect your personal information.",
};

const lastUpdated = "June 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Draft Banner */}
        <div
          role="alert"
          className="rounded-lg px-5 py-4 mb-8 flex items-start gap-3"
          style={{ background: "#fef2f2", border: "1px solid #fca5a5" }}
        >
          <span className="text-xl shrink-0" aria-hidden="true">⚠️</span>
          <div>
            <p
              className="text-sm font-bold mb-0.5"
              style={{ color: "#991b1b", fontFamily: "var(--font-sans)" }}
            >
              DRAFT — Review with attorney before publishing
            </p>
            <p
              className="text-sm"
              style={{ color: "#7f1d1d", fontFamily: "var(--font-sans)" }}
            >
              This document has not been reviewed by legal counsel. Do not publish without review
              by a licensed attorney familiar with US, California (CCPA), and EU (GDPR) privacy law.
            </p>
          </div>
        </div>

        {/* Title */}
        <h1
          className="mb-2"
          style={{
            color: "var(--liberty-blue)",
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          }}
        >
          Privacy Policy
        </h1>
        <p
          className="text-sm mb-10"
          style={{ color: "#6b7280", fontFamily: "var(--font-sans)" }}
        >
          Last updated: {lastUpdated} &nbsp;·&nbsp; Effective Date: [DATE]
        </p>

        {/* Content */}
        <div
          className="prose max-w-none"
          style={{ fontFamily: "var(--font-sans)", color: "var(--iron)" }}
        >

          <p>
            <strong>LeadsforLiberty.com</strong> (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a marketing services
            company based in Liberty Hill, Texas. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            1. Information We Collect
          </h2>

          <h3 style={{ color: "var(--iron)", fontFamily: "var(--font-sans)" }}>
            a. Information You Provide Directly
          </h3>
          <ul>
            <li><strong>Contact information:</strong> First name, last name, email address, phone number</li>
            <li><strong>Business information:</strong> Business name, business type, city/location, website URL</li>
            <li><strong>Communication content:</strong> Messages sent through our contact form, emails, or chat widget</li>
            <li><strong>Billing information:</strong> Payment details processed through Stripe (we do not store full card numbers)</li>
          </ul>

          <h3 style={{ color: "var(--iron)", fontFamily: "var(--font-sans)" }}>
            b. Information Collected Automatically
          </h3>
          <ul>
            <li><strong>Usage data:</strong> Pages visited, time on pages, referring URLs, browser type, OS, IP address</li>
            <li><strong>Device information:</strong> Device type, screen resolution, language settings</li>
            <li><strong>Cookie and tracking data:</strong> See Section 6 (Cookies)</li>
          </ul>

          <h3 style={{ color: "var(--iron)", fontFamily: "var(--font-sans)" }}>
            c. Information from Third Parties
          </h3>
          <ul>
            <li>Information from Google (via Google Analytics or Google Sign-In)</li>
            <li>Information from Meta if you interact with our Facebook Lead Ads or Meta Pixel</li>
            <li>Publicly available business information used to provide our services</li>
          </ul>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            2. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and deliver our marketing services</li>
            <li>Respond to inquiries and communicate with clients</li>
            <li>Process payments</li>
            <li>Send marketing emails and SMS messages (with consent)</li>
            <li>Analyze website performance and improve user experience</li>
            <li>Comply with legal obligations</li>
            <li>Protect against fraud and abuse</li>
          </ul>
          <p>
            We do <strong>not</strong> sell your personal information to third parties.
          </p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            3. Third-Party Service Providers
          </h2>
          <p>We work with the following third-party service providers who process data on our behalf:</p>

          <div
            className="rounded-lg p-5 my-5 space-y-4"
            style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}
          >
            {[
              {
                name: "GoHighLevel (GHL)",
                purpose: "CRM, email marketing, SMS, pipeline management, calendar booking",
                data: "Name, email, phone, business name, lead status",
                url: "https://www.gohighlevel.com/privacy-policy",
              },
              {
                name: "Google Analytics / Google LLC",
                purpose: "Website analytics and performance measurement",
                data: "Anonymized usage data, IP address (anonymized), behavioral data",
                url: "https://policies.google.com/privacy",
              },
              {
                name: "Meta Platforms (Facebook Pixel)",
                purpose: "Conversion tracking for Facebook/Instagram advertising",
                data: "Hashed email, phone, IP address, browser events",
                url: "https://www.facebook.com/privacy/explanation",
              },
              {
                name: "Stripe, Inc.",
                purpose: "Payment processing",
                data: "Billing name, email, payment card data (tokenized)",
                url: "https://stripe.com/privacy",
              },
            ].map((provider) => (
              <div
                key={provider.name}
                className="pb-4"
                style={{ borderBottom: "1px solid #e5e7eb" }}
              >
                <p className="font-semibold mb-1" style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-sans)" }}>
                  {provider.name}
                </p>
                <p className="text-sm m-0" style={{ fontFamily: "var(--font-sans)", color: "var(--iron)" }}>
                  <span className="font-medium">Purpose:</span> {provider.purpose}
                </p>
                <p className="text-sm m-0" style={{ fontFamily: "var(--font-sans)", color: "var(--iron)" }}>
                  <span className="font-medium">Data shared:</span> {provider.data}
                </p>
                <a
                  href={provider.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                  style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-sans)" }}
                >
                  Privacy policy →
                </a>
              </div>
            ))}
          </div>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            4. Data Retention
          </h2>
          <ul>
            <li><strong>Active client records:</strong> Duration of relationship plus 3 years</li>
            <li><strong>Lead and inquiry records:</strong> 2 years from last contact</li>
            <li><strong>Payment records:</strong> 7 years (IRS/tax requirements)</li>
            <li><strong>Website analytics:</strong> 26 months (Google Analytics default)</li>
            <li><strong>Marketing consent records:</strong> Duration of consent plus 3 years</li>
          </ul>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            5. Data Security
          </h2>
          <p>
            We implement commercially reasonable administrative, technical, and physical safeguards
            including TLS/HTTPS encryption, access controls, and regular security assessments of
            our service providers. No method of transmission over the Internet is 100% secure.
          </p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            6. Cookies
          </h2>
          <p>We use essential cookies (required for functionality), analytics cookies (Google Analytics), and marketing cookies (Meta Pixel). You can manage cookies through your browser settings. Note that disabling certain cookies may affect website functionality.</p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            7. Your Privacy Rights
          </h2>

          <h3 style={{ color: "var(--iron)", fontFamily: "var(--font-sans)" }}>
            California Residents — CCPA/CPRA Rights
          </h3>
          <p>If you are a California resident, you have the right to:</p>
          <ul>
            <li><strong>Know</strong> what personal information we collect and how it is used</li>
            <li><strong>Delete</strong> your personal information (subject to exceptions)</li>
            <li><strong>Correct</strong> inaccurate personal information</li>
            <li><strong>Opt-out</strong> of sale or sharing of personal information</li>
            <li><strong>Non-discrimination</strong> for exercising these rights</li>
          </ul>
          <p>
            To submit a CCPA request, email{" "}
            <a href="mailto:hello@leadsforliberty.com">hello@leadsforliberty.com</a> or
            call <a href="tel:+15593496165">(559) 349-6165</a>. We will respond within 45 days.
          </p>

          <h3 style={{ color: "var(--iron)", fontFamily: "var(--font-sans)" }}>
            EU/EEA/UK Residents — GDPR Rights
          </h3>
          <p>If you are located in the EU, EEA, or UK, you have the right to access, rectify, erase, restrict, and port your data, and to object to processing. Contact us at the address below. We will respond within 30 days. You also have the right to lodge a complaint with your local supervisory authority.</p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            8. Children&apos;s Privacy
          </h2>
          <p>
            Our services are not directed to individuals under 18. We do not knowingly collect
            personal information from children. If you believe we have inadvertently collected
            such information, please contact us immediately.
          </p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            9. Changes to This Policy
          </h2>
          <p>
            We may update this policy from time to time. We will notify you of material changes
            by posting an updated policy with a new &ldquo;Last Updated&rdquo; date and, for active clients,
            by email notification.
          </p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            10. Contact Us
          </h2>
          <address
            className="not-italic"
            style={{ fontFamily: "var(--font-sans)", color: "var(--iron)" }}
          >
            <strong>LeadsforLiberty.com</strong>
            <br />
            Attn: Privacy Compliance
            <br />
            Liberty Hill, TX 78642
            <br />
            <a href="mailto:hello@leadsforliberty.com">hello@leadsforliberty.com</a>
            <br />
            <a href="tel:+15593496165">(559) 349-6165</a>
          </address>
        </div>

        {/* Back to contact */}
        <div
          className="mt-12 pt-8 flex items-center justify-between"
          style={{ borderTop: "1px solid #e5e7eb" }}
        >
          <p
            className="text-sm"
            style={{ color: "#9ca3af", fontFamily: "var(--font-sans)" }}
          >
            Questions? We&apos;re happy to help.
          </p>
          <Link
            href="/contact"
            className="btn-secondary btn-sm"
            style={{ fontSize: "0.875rem" }}
          >
            Contact Us →
          </Link>
        </div>

      </div>
    </div>
  );
}
