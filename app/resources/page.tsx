import type { Metadata } from "next";
import { BookOpen, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Resources: Capture and Booking Guides",
  description:
    "Free guides and how-tos for appointment-based businesses that want to capture every call, text, and message and turn it into a booked appointment.",
};

/* ── Blog post data (sourced from content/blog/ frontmatter) ────────────── */
const posts = [
  {
    slug: "liberty-hill-small-business-winning-customers-2026",
    title: "How Busy Service Businesses Are Booking More Appointments in 2026",
    description:
      "The demand is already there. Here is exactly what appointment-based businesses are doing right now to capture every inquiry and keep their calendars full.",
    publishedAt: "2026-06-01",
    category: "Capture & Booking",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "real-reason-facebook-ads-not-working-fix",
    title: "The Real Reason Your Instagram and Facebook DMs Aren't Turning Into Bookings",
    description:
      "Most owners think they need more messages. The problem is what happens after. Here are the 5 reasons DMs go cold and exactly how to convert each one into an appointment.",
    publishedAt: "2026-06-01",
    category: "Capture & Booking",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "missed-calls-costing-50000-year-how-to-fix",
    title: "Why Missed Calls Are Costing You $50,000+ a Year (And How to Stop the Bleeding)",
    description:
      "Every missed call is a missed paycheck. Learn the math on what missed calls actually cost your service business, and the missed-call text-back system that books them anyway.",
    publishedAt: "2026-06-01",
    category: "Capture & Booking",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "google-business-profile-2026-12-things-local-business",
    title: "Online Booking in 2026: The 12 Things Every Service Business Must Set Up",
    description:
      "When a customer is ready to book, every extra step loses them. Here are the 12 things to set up in 2026 so inquiries turn into appointments on your calendar automatically.",
    publishedAt: "2026-06-01",
    category: "Online Booking",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "why-agencies-fail-small-businesses",
    title: "Why Most Marketing Agencies Fail Service Businesses (And What to Look For Instead)",
    description:
      "Been burned by an agency that promised leads and delivered chaos? Here are the 6 reasons it happened and why a capture-and-booking system beats more raw leads every time.",
    publishedAt: "2026-06-01",
    category: "Capture & Booking",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "how-to-calculate-roi-of-lead-generation",
    title: "How to Calculate What Every Captured Inquiry Is Worth (With a Free Calculator)",
    description:
      "Before you spend a dollar, know what one booked appointment is worth. Walk through the exact math on captured inquiries with real examples from home services, salons, clinics, and more.",
    publishedAt: "2026-06-01",
    category: "Capture & Booking",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "small-business-marketing-guide-liberty-hill",
    title: "The Service Business Owner's Guide to a Full Calendar Without Losing Your Mind",
    description:
      "You started your business because you are great at your trade, not chasing messages. Here is the shortest path to a full calendar without doing the follow-up yourself.",
    publishedAt: "2026-06-01",
    category: "Strategy",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "what-is-gohighlevel-small-business",
    title: "The Unified Inbox: How One System Captures Every Call, Text, Email, and DM",
    description:
      "Stop checking six apps. A unified inbox pulls every inquiry into one place, automates the follow-up, and books appointments straight to your calendar.",
    publishedAt: "2026-06-01",
    category: "Tools & Tech",
    readTime: "9 min read",
    featured: false,
  },
];

const featuredPost = posts[0];
const gridPosts = posts.slice(1);

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Capture & Booking": { bg: "#eef1f8", text: "#0a2a66" },
  "Online Booking":    { bg: "#fef9ee", text: "#a88620" },
  "Strategy":          { bg: "#fceef1", text: "#aa0e27" },
  "Tools & Tech":      { bg: "#f0fdf4", text: "#166534" },
};

function CategoryBadge({ category }: { category: string }) {
  const colors = categoryColors[category] ?? { bg: "#f3f4f6", text: "#374151" };
  return (
    <span
      className="inline-block px-2.5 py-1 text-xs font-semibold rounded-full"
      style={{
        background: colors.bg,
        color: colors.text,
        fontFamily: "var(--font-sans)",
      }}
    >
      {category}
    </span>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ newsletter?: string }>;
}) {
  const newsletterStatus = (await searchParams).newsletter;
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="resources-hero-heading"
        className="py-16 px-4 sm:px-6 lg:px-8 text-center"
        style={{ background: "var(--parchment)", borderBottom: "1px solid var(--parchment-300, #f0e9d3)" }}
      >
        <div className="mx-auto max-w-3xl">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--eagle-gold)", fontFamily: "var(--font-sans)" }}
          >
            Free Resources
          </p>
          <h1
            id="resources-hero-heading"
            style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}
            className="mb-5"
          >
            The Capture and Booking Resource Library
          </h1>
          <p
            className="text-lg"
            style={{ color: "var(--iron)", fontFamily: "var(--font-sans)", maxWidth: "56ch", margin: "0 auto" }}
          >
            Straight-talk guides on capturing every inquiry and booking more appointments,
            written for busy service business owners who are too busy for fluff.
          </p>
        </div>
      </section>

      {/* ── Featured Post ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="featured-post-heading"
        className="py-12 px-4 sm:px-6 lg:px-8"
        style={{ background: "#ffffff" }}
      >
        <div className="mx-auto max-w-6xl">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: "var(--eagle-gold)", fontFamily: "var(--font-sans)" }}
          >
            Featured Article
          </p>
          <article
            aria-label={`Featured: ${featuredPost.title}`}
            className="rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5"
            style={{
              border: "1px solid rgba(10,42,102,0.12)",
              boxShadow: "var(--shadow-hover)",
            }}
          >
            {/* Featured color block */}
            <div
              className="lg:col-span-2 flex items-center justify-center px-10 py-16 min-h-[220px]"
              style={{ background: "var(--liberty-blue)" }}
              aria-hidden="true"
            >
              <div className="text-center">
                <BookOpen size={72} weight="duotone" className="block mb-4 mx-auto" style={{ color: "var(--eagle-gold)" }} aria-hidden="true" />
                <p
                  className="text-sm font-semibold uppercase tracking-widest"
                  style={{ color: "var(--eagle-gold)", fontFamily: "var(--font-sans)" }}
                >
                  Must Read
                </p>
              </div>
            </div>
            {/* Featured content */}
            <div className="lg:col-span-3 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <CategoryBadge category={featuredPost.category} />
                <span
                  className="text-sm"
                  style={{ color: "#9ca3af", fontFamily: "var(--font-sans)" }}
                >
                  {formatDate(featuredPost.publishedAt)} · {featuredPost.readTime}
                </span>
              </div>
              <h2
                id="featured-post-heading"
                className="mb-3"
                style={{
                  color: "var(--liberty-blue)",
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
                  lineHeight: 1.2,
                }}
              >
                {featuredPost.title}
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "var(--iron)", fontFamily: "var(--font-sans)", maxWidth: "56ch" }}
              >
                {featuredPost.description}
              </p>
              <div>
                {/* Article pages are not published yet; no link until /resources/[slug] exists (was a 404). */}
                <span
                  className="text-sm font-semibold uppercase tracking-widest"
                  style={{ color: "var(--eagle-gold)", fontFamily: "var(--font-sans)" }}
                >
                  Coming Soon
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── Post Grid ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="post-grid-heading"
        className="py-12 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--parchment)" }}
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="post-grid-heading"
            className="section-heading mb-10"
          >
            All Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridPosts.map((post) => (
              <article
                key={post.slug}
                className="card bg-white flex flex-col"
                aria-label={post.title}
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <CategoryBadge category={post.category} />
                    <span
                      className="text-xs"
                      style={{ color: "#9ca3af", fontFamily: "var(--font-sans)" }}
                    >
                      {post.readTime}
                    </span>
                  </div>
                  <h3
                    className="mb-3 text-base font-bold leading-snug"
                    style={{ color: "var(--liberty-blue)", fontFamily: "var(--font-serif)" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5 flex-1"
                    style={{ color: "var(--iron)", fontFamily: "var(--font-sans)" }}
                  >
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between gap-2 mt-auto">
                    <span
                      className="text-xs"
                      style={{ color: "#9ca3af", fontFamily: "var(--font-sans)" }}
                    >
                      {formatDate(post.publishedAt)}
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "#9ca3af", fontFamily: "var(--font-sans)" }}
                    >
                      Coming Soon
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter Signup ─────────────────────────────────────────────── */}
      <section
        id="newsletter"
        aria-labelledby="newsletter-heading"
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--liberty-blue)" }}
      >
        <div className="mx-auto max-w-xl text-center">
          <EnvelopeSimple size={40} weight="duotone" className="block mb-4 mx-auto text-white" aria-hidden="true" />
          <h2
            id="newsletter-heading"
            className="text-white mb-3"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Get Our Weekly Capture and Booking Tips
          </h2>
          <p
            className="mb-8"
            style={{ color: "rgba(255,255,255,0.78)", fontFamily: "var(--font-sans)" }}
          >
            One email a week. Real tactics for capturing inquiries and booking more
            appointments. No fluff, no spam. Unsubscribe anytime.
          </p>
          {newsletterStatus === "subscribed" && (
            <p
              role="status"
              className="mb-6 rounded-md px-4 py-3 text-sm font-semibold"
              style={{
                background: "rgba(255,255,255,0.14)",
                color: "#ffffff",
                fontFamily: "var(--font-sans)",
              }}
            >
              You&apos;re in. Look for your first capture-and-booking tip this week.
            </p>
          )}
          {(newsletterStatus === "invalid" || newsletterStatus === "error") && (
            <p
              role="alert"
              className="mb-6 rounded-md px-4 py-3 text-sm font-semibold"
              style={{
                background: "rgba(185,28,28,0.35)",
                color: "#ffffff",
                fontFamily: "var(--font-sans)",
              }}
            >
              {newsletterStatus === "invalid"
                ? "Please enter a valid email address and try again."
                : "Something went wrong on our end. Please try again in a minute."}
            </p>
          )}
          <form
            method="POST"
            action="/api/newsletter"
            className="flex flex-col sm:flex-row gap-3"
            aria-label="Newsletter signup form"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Your email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              required
              placeholder="you@yourbusiness.com"
              className="flex-1 px-4 py-3 rounded-md text-base border-0 outline-none"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "#ffffff",
                fontFamily: "var(--font-sans)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
              aria-required="true"
            />
            <button
              type="submit"
              className="btn-primary"
              style={{ whiteSpace: "nowrap" }}
            >
              Subscribe →
            </button>
          </form>
          <p
            className="text-xs mt-4"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-sans)" }}
          >
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  );
}
