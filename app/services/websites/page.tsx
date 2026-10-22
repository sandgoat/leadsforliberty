import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Websites That Capture and Book Visitors",
  description:
    "Fast, mobile-first websites with online booking, live chat, and forms wired into one inbox, so every visitor inquiry becomes a booked appointment.",
};

export default function WebsitesPage() {
  return (
    <ServicePageLayout
      label="Websites & Landing Pages"
      headline="A Website That Captures and Books, Not Just Looks Good"
      subhead="Most local business websites look fine but let inquiries slip away. We build sites that capture every visitor message and turn it into a booked appointment on your calendar, automatically."
      whatThisIs="We design and build mobile-first websites and landing pages for busy appointment-based service businesses. Every page is built around one goal: capturing the inquiry and getting it booked. Online booking, forms, and chat all feed one unified inbox that answers and schedules, so nothing gets missed while you are with a customer. We handle design, development, hosting, and ongoing optimization."
      whatYouGet={[
        "Online booking built into the page so visitors schedule in a couple of taps",
        "Two-way Google Calendar sync so booked slots are always accurate",
        "Lead capture forms that feed one unified inbox with instant notifications",
        "Live chat plus AI front desk that answers and books after hours",
        "Mobile-first responsive design (most local traffic is on a phone)",
        "Fast load times for Google-grade performance",
        "Conversion-focused layout: trust signals, social proof, clear booking CTA",
        "Monthly hosting, SSL, and maintenance included",
      ]}
      whyItMatters={[
        "Your website is where most inquiries start, whether the visitor fills a form, opens chat, or clicks to call. If those messages land nowhere, you are paying for traffic and losing the booking. A site that captures and books turns that same traffic into a fuller calendar.",
        "We have audited dozens of local business websites and found the same pattern: slow load times, buried contact info, no easy way to actually book. We fix all of it. Our sites load fast, build trust instantly, and make it dead simple for a visitor to land on your calendar without a phone tag loop.",
        "The payoff is a system, not a brochure. Picture any owner with their hands full mid-job, a contractor on a ladder or a stylist mid-cut: a visitor books online, the slot syncs to the calendar, and a confirmation goes out, all without a single interruption. Every other channel you run becomes more valuable when it points at a site that books.",
      ]}
      stat="Every inquiry captured, or your next month is on us"
      faqs={[
        {
          q: "Do I own the website?",
          a: "Yes, 100%. We build it, you own it. If you ever leave, you take the site with you. No hostage-taking.",
        },
        {
          q: "How long does it take to build?",
          a: "Most sites are live within days of kickoff, with full builds typically done in 2 to 3 weeks. We gather your content, build, revise, and launch fast.",
        },
        {
          q: "What if I already have a website?",
          a: "We can add booking and capture to your existing site or build a targeted landing page alongside it. We will audit your current site and recommend the best path forward.",
        },
        {
          q: "Is hosting included?",
          a: "Yes. Monthly hosting, SSL certificate, and basic maintenance are included in your plan at no extra charge.",
        },
        {
          q: "Can you write the copy for me?",
          a: "Absolutely. Done-for-you setup includes copywriting for all core pages. We will interview you, then craft messaging that sounds like you and gets visitors to book.",
        },
      ]}
    />
  );
}
