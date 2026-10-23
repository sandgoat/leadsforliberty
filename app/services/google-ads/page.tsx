import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Google Ads & Local Services Ads Management",
  description:
    "Google Search Ads and Local Service Ads that send high-intent searchers to one inbox that answers and books, so every call and click turns into a booked appointment.",
};

export default function GoogleAdsPage() {
  return (
    <ServicePageLayout
      label="Google Ads & Local Service Ads"
      headline="High-Intent Clicks, Routed Straight to Your Calendar"
      subhead="Google puts you in front of people searching for exactly what you offer, right now. We make sure those calls and clicks land in one inbox that answers and books, so high intent turns into appointments instead of missed calls."
      whatThisIs="Google Ads places your business at the top of results for the exact searches your ideal customers run, and Local Service Ads add a Google-verified badge while charging only per lead. We manage both, and we connect every call, message, and form to the system that captures and books. The ads bring high-intent inquiries, the unified inbox and AI front desk make sure each one gets answered and scheduled."
      whatYouGet={[
        "Local Service Ads setup including Google verification and badge acquisition",
        "Search campaigns with tightly themed ad groups and high-converting copy",
        "Every call and click routed into one inbox that answers and books",
        "Missed-call text-back on ad calls so no high-intent caller is lost",
        "Online booking offered in follow-up so searchers schedule themselves",
        "Keyword research targeting high-intent local queries, with negative keywords to protect budget",
        "Conversion tracking for calls, form fills, chat, and booked appointments",
        "Monthly report tying spend to inquiries captured and appointments booked",
      ]}
      whyItMatters={[
        "When someone searches for an emergency plumber or the best HVAC company near them, they are not browsing, they are buying. Google Search and Local Service Ads put you in front of that intent at the exact moment of need. No other channel matches it, which is precisely why losing one of those leads to voicemail hurts so much.",
        "That is the gap we close. Local Service Ads even charge only when someone contacts you, so every dollar buys an actual inquiry, and our job is to make sure that inquiry gets answered. The moment a searcher calls or clicks, the system replies, and missed-call text-back catches anyone you could not pick up, then guides them to book a time.",
        "Run this way, paid search becomes a reliable source of booked appointments rather than a stack of missed calls. The difference between a well-run account and a poorly run one is large, but the bigger difference is whether the inquiries it produces actually land on your calendar. We make sure they do.",
      ]}
      stat="Every high-intent click and call captured and booked, or your next month is on us"
      faqs={[
        {
          q: "What's the difference between Google Ads and Local Service Ads?",
          a: "Standard Google Ads are pay-per-click and appear at the top of search results. Local Service Ads appear above those, carry the Google-verified badge, and are pay-per-lead, you only pay when someone calls or messages you. Either way, those contacts flow into your booking system.",
        },
        {
          q: "What happens when an ad sends me a call or lead?",
          a: "It lands in your one unified inbox. If you cannot answer, missed-call text-back fires within seconds and the AI front desk offers times from your calendar, so the high-intent lead gets booked instead of lost.",
        },
        {
          q: "How long does Google verification take for LSAs?",
          a: "The Google Screened or Guaranteed process typically takes 2 to 4 weeks and requires background checks, license verification, and insurance confirmation. We guide you through every step.",
        },
        {
          q: "Can I run Google Ads and LSAs at the same time?",
          a: "Yes, and we recommend it. They occupy different positions on the results page and capture different searchers. Both feed the same inbox that answers and books.",
        },
        {
          q: "Do you manage the ad spend directly?",
          a: "Ad spend flows through your own Google account, we never touch your billing. You have full visibility and control over every dollar spent.",
        },
      ]}
    />
  );
}
