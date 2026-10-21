import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Press Releases That Build Trust",
  description:
    "Press coverage and 'as seen on' credibility that make more of the people who find you reach out, and an inbox that captures and books every inquiry they send.",
};

export default function PressReleasesPage() {
  return (
    <ServicePageLayout
      label="Press Releases"
      headline="Build Trust That Turns More Inquiries Into Bookings"
      subhead="Press releases are not just for big companies. For appointment-based businesses, consistent coverage builds credibility and visibility that make more of the people who find you reach out, and your booking system captures and books every inquiry they send."
      whatThisIs="A press release service writes professional news announcements about your business, new services, community involvement, awards, milestones, and distributes them across a network of news syndicates and local outlets. The result is 'as seen on' trust and broader visibility that bring more inquiries your way, all flowing into the same unified inbox that answers and books. Credibility brings them in, the system makes sure they book."
      whatYouGet={[
        "Monthly press release written by a professional copywriter in AP Style",
        "Distribution to a wide network of news syndicates and regional outlets",
        "'As seen on' press logos for your website that lift trust at the moment of booking",
        "Coverage that brings more inquiries to one inbox that captures and books",
        "High-authority backlinks that help the right people find you",
        "Brand visibility growth as your name appears across the web",
        "Local outlet targeting for community awareness in your service area",
        "Monthly coverage report with all placements",
      ]}
      whyItMatters={[
        "Trust is what turns a stranger into someone willing to reach out. When a potential customer sees your name on recognizable news outlets, their confidence rises before they ever send a message. That credibility means more of the people who come across you actually call, text, or fill out a form, the very inquiries your booking system is built to capture.",
        "Coverage also helps the right people find you in the first place. Links from trusted news domains strengthen your search visibility over time, so you appear for more local searches. More visibility plus more trust means more inquiries arriving at the unified inbox where missed-call text-back and the AI front desk make sure each one gets answered and booked.",
        "The two effects reinforce each other. 'As seen on' logos on your site reduce hesitation right at the point where a visitor decides whether to book, while the steady drip of coverage keeps new inquiries coming. Press builds the confidence, the system converts that confidence into appointments on your calendar.",
      ]}
      stat="More trusting inquiries, captured and booked, or your next month is on us"
      faqs={[
        {
          q: "What do you write press releases about?",
          a: "New services, hiring announcements, community sponsorships, awards, milestones, seasonal promotions, local partnerships, anything newsworthy. We guide you on angles that get picked up.",
        },
        {
          q: "How does this help me get more bookings?",
          a: "Coverage and 'as seen on' trust make more of the people who find you reach out, and every call, message, and form they send lands in one inbox that answers and books. Credibility brings them in, the system books them.",
        },
        {
          q: "Do the news sites actually publish the release?",
          a: "Yes. Our distribution network places your release across a wide range of syndication sites, and some releases get picked up by additional regional outlets beyond that.",
        },
        {
          q: "Can I use the press logos on my website?",
          a: "Absolutely. We provide an 'As Seen On' logo kit for your homepage and landing pages. That social proof reduces hesitation right when a visitor is deciding whether to book.",
        },
        {
          q: "How long do the benefits last?",
          a: "Backlinks from news sites are typically permanent, and the trust the coverage builds keeps working for you. The visibility and credibility accumulate over time as more placements add up.",
        },
      ]}
    />
  );
}
