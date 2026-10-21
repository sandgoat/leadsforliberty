import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "LeadsforLiberty.com is committed to WCAG 2.1 AA accessibility. Learn about our efforts to ensure an inclusive experience for all visitors.",
};

const lastUpdated = "June 1, 2026";

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Title */}
        <h1
          className="mb-2"
          style={{
            color: "var(--liberty-blue)",
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          }}
        >
          Accessibility Statement
        </h1>
        <p
          className="text-sm mb-10"
          style={{ color: "#6b7280", fontFamily: "var(--font-sans)" }}
        >
          Last updated: {lastUpdated}
        </p>

        {/* Content */}
        <div
          className="prose max-w-none"
          style={{ fontFamily: "var(--font-sans)", color: "var(--iron)" }}
        >

          <p>
            <strong>LeadsforLiberty.com</strong> is committed to ensuring digital
            accessibility for people with disabilities. We continuously work to improve
            the user experience for everyone and apply relevant accessibility standards
            to our website.
          </p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            Our Commitment
          </h2>
          <p>
            We aim to conform to the{" "}
            <strong>Web Content Accessibility Guidelines (WCAG) 2.1, Level AA</strong>{" "}
            as published by the World Wide Web Consortium (W3C). These guidelines
            explain how to make web content more accessible to people with disabilities,
            including users who are blind or have low vision, deaf or hard of hearing,
            have cognitive or learning disabilities, or use assistive technologies such
            as screen readers or keyboard navigation.
          </p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            Measures We Take
          </h2>
          <p>To support accessibility, LeadsforLiberty.com takes the following measures:</p>
          <ul>
            <li>
              <strong>Semantic HTML:</strong> We use meaningful HTML5 elements and a
              logical heading hierarchy (H1 → H2 → H3) so assistive technologies can
              accurately interpret page structure.
            </li>
            <li>
              <strong>Keyboard navigation:</strong> All interactive elements — links,
              buttons, forms — are fully operable via keyboard alone, with visible focus
              indicators on every control.
            </li>
            <li>
              <strong>Alternative text:</strong> All meaningful images include descriptive
              alt text. Purely decorative images use empty <code>alt=""</code> attributes
              so screen readers skip them appropriately.
            </li>
            <li>
              <strong>Color contrast:</strong> All text meets WCAG AA minimum contrast
              ratios — 4.5:1 for normal text, 3:1 for large text and UI components.
            </li>
            <li>
              <strong>Screen reader testing:</strong> Pages are tested with NVDA, JAWS,
              and VoiceOver during development and before major releases.
            </li>
            <li>
              <strong>Responsive design:</strong> The site is fully functional at any
              viewport width, including on mobile devices and at browser zoom levels up
              to 200%.
            </li>
            <li>
              <strong>ARIA attributes:</strong> We apply ARIA roles, labels, and live
              regions where native HTML semantics are insufficient.
            </li>
            <li>
              <strong>Form labels:</strong> Every form input has a programmatically
              associated label or ARIA label.
            </li>
            <li>
              <strong>Skip navigation:</strong> A &ldquo;Skip to main content&rdquo; link
              is available at the top of each page for keyboard and screen reader users.
            </li>
            <li>
              <strong>Reduced motion:</strong> Animations respect the{" "}
              <code>prefers-reduced-motion</code> media query.
            </li>
          </ul>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            Technical Approach
          </h2>
          <p>This website relies on the following technologies for accessibility conformance:</p>
          <ul>
            <li>HTML5 (semantic markup)</li>
            <li>CSS3 (high-contrast color ratios, responsive layout)</li>
            <li>JavaScript — Next.js / React with server-side rendering</li>
            <li>WAI-ARIA (Accessible Rich Internet Applications) attributes</li>
          </ul>
          <p>We support access via modern browsers (Chrome, Firefox, Safari, Edge) and popular screen readers (NVDA, JAWS, VoiceOver, TalkBack).</p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            Known Limitations
          </h2>
          <p>
            <strong>None identified at this time.</strong> We conduct accessibility
            reviews during development and address issues before publishing. As new
            content and features are added, we continue to evaluate conformance.
          </p>
          <p>
            Some content is served via third-party platforms (GoHighLevel booking
            calendar, Google Maps embeds). We do not control the accessibility of
            third-party iframes and encourage you to also report issues directly to
            the relevant provider.
          </p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            Report an Accessibility Issue
          </h2>
          <p>
            We welcome feedback on the accessibility of our website. If you experience
            barriers or have difficulty accessing any content, please reach out:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hello@leadsforliberty.com"
                style={{ color: "var(--liberty-blue)" }}
              >
                hello@leadsforliberty.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+15593496165" style={{ color: "var(--liberty-blue)" }}>
                (559) 349-6165
              </a>
            </li>
            <li>
              <strong>Mail:</strong> LeadsforLiberty.com, Liberty Hill, TX 78642
            </li>
          </ul>
          <p>
            Please include the URL of the page where you encountered the issue, a
            description of the problem, and (if applicable) the browser and assistive
            technology you were using.
          </p>
          <p>
            We aim to respond to all accessibility inquiries within{" "}
            <strong>2 business days</strong> and to address reported issues within 30
            business days where technically feasible.
          </p>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            Formal Complaints
          </h2>
          <p>
            If you are not satisfied with our response, you have the right to contact
            the relevant regulatory body:
          </p>
          <ul>
            <li>
              <strong>United States:</strong> U.S. Department of Justice, Civil Rights
              Division —{" "}
              <a
                href="https://www.ada.gov"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--liberty-blue)" }}
              >
                www.ada.gov
              </a>
            </li>
            <li>
              <strong>EU/EEA:</strong> Your national accessibility enforcement authority
            </li>
          </ul>

          <hr style={{ borderColor: "#e5e7eb", margin: "2rem 0" }} />

          <h2 style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}>
            Continuous Improvement
          </h2>
          <p>
            Accessibility is an ongoing commitment. We review this statement and our
            site&apos;s conformance with each major update, test new features with keyboard
            navigation and screen readers before deployment, and treat user feedback
            as a primary source of issue identification.
          </p>
          <p>
            <em>Last reviewed by the LeadsforLiberty.com team: June 2026.</em>
          </p>

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
            Questions or accessibility concerns? We&apos;d love to hear from you.
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
