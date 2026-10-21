import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Local SEO: More of the Right Inquiries",
  description:
    "Local SEO that brings more of the right local inquiries to one inbox that answers and books them, so the visibility you build turns into appointments on your calendar.",
};

export default function LocalSeoPage() {
  return (
    <ServicePageLayout
      label="Local SEO"
      headline="More of the Right Inquiries, Landing Where They Get Booked"
      subhead="Being found is only worth it if the inquiry gets answered. Local SEO brings more of the right people in your area to your door, and we make sure every call, message, and form they send lands in one inbox that answers and books."
      whatThisIs="Local SEO makes your business visible in organic Google results, the map, local listings, and regular search, when people nearby look for what you offer. We pair that visibility with the system that captures and books, so the extra inquiries SEO creates do not ring out to voicemail. Found, then answered, then booked. We handle the technical work, content, and listings, starting with a full audit."
      whatYouGet={[
        "More of the right local inquiries reaching one inbox that answers and books",
        "Google Business Profile optimization with booking enabled, integrated with SEO",
        "Name, address, and phone consistency cleaned up across directories",
        "Citation building on industry-specific and high-authority local directories",
        "Location landing pages with booking for each service area you serve",
        "Hyperlocal content that signals relevance to nearby communities",
        "Schema markup (LocalBusiness, Service, FAQ) for rich search results",
        "Monthly report tracking rankings and the inquiries they bring in",
      ]}
      whyItMatters={[
        "Nearly half of all Google searches have local intent, people looking for something nearby right now. Local SEO decides whether you show up for those searches. But visibility is only the first half. The inquiry it produces still has to be answered fast and booked, or the ranking just sends a ready customer to whoever picks up. We connect both halves.",
        "Consistent listings and citations are the foundation. When your name, address, and phone are listed the same way everywhere, Google trusts your relevance and ranks you higher, which means more calls and messages. Those then flow into the unified inbox where missed-call text-back and the AI front desk make sure none of them slip away while you are with a customer.",
        "Location pages are among the highest-leverage tactics, and we build each one to book. Instead of a single homepage trying to rank for every nearby town, dedicated pages capture hyperlocal searches and put a booking option right in front of the searcher. Rankings climb over the following months, and the traffic they earn turns into appointments rather than missed opportunities.",
      ]}
      stat="More right-fit inquiries, captured and booked, or your next month is on us"
      faqs={[
        {
          q: "How long does local SEO take to work?",
          a: "Most clients see measurable ranking improvements within 60 to 90 days of cleanup and initial citation building. Competitive markets may take 4 to 6 months. SEO is a long game, and the inquiries it brings flow straight into your booking system from day one.",
        },
        {
          q: "How does SEO connect to booking?",
          a: "The visibility we build sends more calls, messages, and form fills your way, and all of them land in one unified inbox that answers and books. Better rankings turn into more appointments, not just more traffic.",
        },
        {
          q: "Do you need access to my website?",
          a: "Yes. We need access to implement schema markup, create location pages, and optimize content. We can work in your existing site or the one we build for you.",
        },
        {
          q: "What's the difference between local SEO and regular SEO?",
          a: "Regular SEO targets broad national audiences. Local SEO focuses on location-based searches, the map, near-me queries, and city-specific terms in your market, where appointment-based businesses win customers.",
        },
        {
          q: "Can you help with multiple locations?",
          a: "Yes. We handle multi-location setups with separate profiles, unique location pages, and distinct citations for each, all feeding the same booking system.",
        },
      ]}
    />
  );
}
