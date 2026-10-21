import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for LeadsforLiberty.com. Read our service agreement, payment terms, lead guarantee parameters, and governing law.",
};

const lastUpdated = "June 2026";

export default function TermsOfServicePage() {
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
              by a licensed Texas attorney. Governing law: State of Texas.
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
          Terms of Service
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
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of <strong>LeadsforLiberty.com</strong> and the
            services we provide. By accessing our website or engaging our services, you agree to
            these Terms in full.
          </p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            1. Services Provided
          </h2>
          <p>
            LeadsforLiberty.com provides local digital marketing services including Google Business
            Profile management, Local SEO, paid advertising (Google Ads, Facebook/Meta Ads), website
            design, missed-call text-back automation, reputation management, email/SMS marketing,
            press releases, and AI lead nurture. Specific services are set forth in a written
            Service Agreement or Statement of Work (&ldquo;SOW&rdquo;) executed between the parties.
          </p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            2. Payment Terms
          </h2>

          <h3 style={{ color: "var(--iron)", fontFamily: "var(--font-sans)" }}>
            Monthly Subscription
          </h3>
          <p>
            Services are billed month-to-month in advance on the same day each month. Fees are as
            listed on our Pricing page or specified in your SOW.
          </p>

          <h3 style={{ color: "var(--iron)", fontFamily: "var(--font-sans)" }}>
            First Month Free
          </h3>
          <p>
            Qualifying new clients receive their <strong>first month of service at no charge</strong>. The free month:
          </p>
          <ul>
            <li>Applies to the first calendar month of active service only</li>
            <li>Does not include third-party ad spend (billed separately and in advance)</li>
            <li>Requires onboarding completion within 14 days of signup</li>
            <li>Is a one-time offer per business entity</li>
          </ul>

          <h3 style={{ color: "var(--iron)", fontFamily: "var(--font-sans)" }}>
            Ad Spend
          </h3>
          <p>
            Third-party ad spend is separate from our management fees. Clients are responsible for
            their own ad accounts and spend. We do not mark up ad spend unless explicitly disclosed.
          </p>

          <h3 style={{ color: "var(--iron)", fontFamily: "var(--font-sans)" }}>
            Late Payments
          </h3>
          <p>
            Past-due accounts accrue interest at 1.5% per month (18% per annum) or the maximum
            rate permitted by Texas law, whichever is less. Services may be suspended if payment
            is more than 10 days overdue.
          </p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            3. Cancellation
          </h2>
          <p>
            You may cancel at any time by providing written notice at least <strong>14 days before your next
            billing date</strong>. Cancellation takes effect at the end of the current paid billing period.
            No refunds are issued for partial months.
          </p>
          <p>
            We may terminate service immediately for breach, non-payment, or violations of our
            Acceptable Use Policy. In the event we terminate without cause, we will refund prepaid
            fees for the unused portion of the current billing month.
          </p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            4. Lead Guarantee
          </h2>

          <div
            className="rounded-lg p-5 my-5"
            style={{ background: "#fef9ee", border: "1px solid #fde68a" }}
          >
            <p
              className="font-semibold text-sm m-0"
              style={{ color: "#92400e", fontFamily: "var(--font-sans)" }}
            >
              ⚠️ Important: No Revenue Guarantee
            </p>
            <p
              className="text-sm mt-2 mb-0"
              style={{ color: "#78350f", fontFamily: "var(--font-sans)" }}
            >
              We do not guarantee any specific revenue outcomes, close rates, customer acquisition
              costs, or return on ad spend. Lead-to-revenue conversion depends on your sales
              process, pricing, and service quality — all outside our control.
            </p>
          </div>

          <p>
            Certain plans include a <strong>lead volume guarantee</strong> (e.g., 30 verified leads per 90 days).
            If the threshold is not met, the client receives one additional free month of service.
          </p>
          <p>
            A &ldquo;lead&rdquo; means a unique individual who contacted the client through a tracked channel we
            manage and provided valid contact information. Duplicates, spam, wrong numbers, and
            out-of-geography contacts do not count.
          </p>
          <p>The guarantee applies only if the client has:</p>
          <ul>
            <li>Completed onboarding within 14 days</li>
            <li>Provided full access to required accounts</li>
            <li>Reviewed and approved all materials within 5 business days</li>
            <li>No outstanding invoices at the time the guarantee is claimed</li>
          </ul>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            5. Acceptable Use
          </h2>
          <p>By engaging our services, you agree your business will not:</p>
          <ul>
            <li>Engage in unlawful activity or market illegal products/services</li>
            <li>Make false, misleading, or deceptive claims in advertising</li>
            <li>Violate intellectual property rights of any third party</li>
            <li>Send unsolicited messages in violation of CAN-SPAM, TCPA, or applicable state law</li>
            <li>Engage in deceptive review practices in violation of FTC guidelines</li>
            <li>Discriminate in advertising in violation of applicable civil rights law</li>
          </ul>
          <p>
            We may immediately terminate service for violations of this policy at our sole discretion.
          </p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            6. Intellectual Property
          </h2>
          <p>
            You retain ownership of your Client Content (logos, trademarks, photos, etc.) and grant
            us a limited license to use it solely for providing services.
          </p>
          <p>
            Upon full payment of all fees, we assign to you all right, title, and interest in
            deliverables specifically created for you (website, ad copy, custom graphics), except
            pre-existing templates/tools and GoHighLevel platform configurations.
          </p>
          <p>
            We reserve the right to include your business in our portfolio and case studies
            (with your approval). You may withdraw this consent at any time.
          </p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            7. Disclaimer of Warranties
          </h2>
          <p>
            EXCEPT AS EXPRESSLY STATED IN THESE TERMS, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
            IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE,
            OR WILL ACHIEVE ANY PARTICULAR BUSINESS OUTCOME.
          </p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            8. Limitation of Liability
          </h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR TOTAL LIABILITY SHALL NOT EXCEED
            THE TOTAL FEES PAID BY YOU IN THE THREE (3) MONTHS PRECEDING THE CLAIM. IN NO EVENT
            SHALL WE BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES, INCLUDING LOST PROFITS OR LOST REVENUE.
          </p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            9. Governing Law &amp; Dispute Resolution
          </h2>
          <p>
            These Terms are governed by the laws of the <strong>State of Texas</strong>. Any disputes shall be
            resolved in the state or federal courts located in <strong>Williamson County, Texas</strong>.
          </p>
          <p>
            Before filing any legal action, both parties agree to attempt good-faith resolution
            for at least <strong>30 days</strong>. If direct negotiation fails, disputes shall be submitted to
            binding arbitration under AAA Commercial Arbitration Rules in Austin, Texas.
          </p>
          <p>
            <strong>Class action waiver:</strong> Disputes will be resolved only on an individual basis.
          </p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            10. Modifications
          </h2>
          <p>
            We reserve the right to modify these Terms at any time. We will provide at least
            14 days&apos; advance notice of material changes to active clients via email. Your
            continued use of our services after the effective date constitutes acceptance.
          </p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            11. Contact
          </h2>
          <address
            className="not-italic"
            style={{ fontFamily: "var(--font-sans)", color: "var(--iron)" }}
          >
            <strong>LeadsforLiberty.com</strong>
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
