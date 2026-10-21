import type { Metadata } from "next";
import IndustryPageLayout from "@/app/components/IndustryPageLayout";

export const metadata: Metadata = {
  title: "Auto Shops & Detailers: Book Every Call",
  description:
    "Capture every call, text, and message your auto detailing, body shop, or mobile mechanic business already gets, and turn each one into a booked appointment.",
};

export default function AutoServicesPage() {
  return (
    <IndustryPageLayout
      industry="Auto Services"
      heroHeadline="Capture Every Call and Message, and Book It on Your Calendar"
      heroSubhead="Keep your bay full by turning every call and text into a booked appointment, automatically."
      painPoints={[
        "You're under a hood when the phone rings, and that customer calls the next shop",
        "Texts and DMs about quotes pile up until the customer has booked somewhere else",
        "Inquiries come in by call, text, and social with no single place to catch them",
        "Slow weeks hit because your calendar has open slots that should be booked",
      ]}
      recommendedServices={[
        {
          name: "Missed-Call Text-Back",
          href: "/services/missed-call-text-back",
          desc: "Every missed call gets an instant text back, so a customer never hits voicemail and drives to your competitor.",
        },
        {
          name: "Unified Inbox",
          href: "/services/ai-lead-management",
          desc: "Calls, texts, emails, and Instagram or Facebook DMs all land in one inbox, so no quote request ever slips by.",
        },
        {
          name: "Online Booking",
          href: "/services/websites",
          desc: "Let car owners book a detail, repair, or estimate themselves, with two-way Google Calendar sync so your bay stays full.",
        },
        {
          name: "Win-Back Campaigns",
          href: "/services/email-marketing",
          desc: "Automatically bring back customers who haven't visited in a while and turn them into booked appointments.",
        },
        {
          name: "AI Front Desk",
          href: "/services/ai-lead-management",
          desc: "Our AI answers questions, follows up instantly, and books appointments 24/7, even when you're elbow deep in a job.",
        },
      ]}
      stat="When a customer needs work done, they call the shop that picks up. Capture every call and text and that shop is yours."
      faqs={[
        {
          q: "Does this work for mobile detailers and mobile mechanics with no shop?",
          a: "Yes. Whether you run a bay or work out of a van, the system captures every call, text, and message you get and lets customers book a time on your calendar. Mobile detailers and mobile mechanics are a great fit.",
        },
        {
          q: "I'm always working on cars and can't answer the phone. How does this help?",
          a: "When you can't pick up, the system texts the caller back instantly, catches every message in one inbox, and lets customers book themselves online. You stop losing work just because your hands are busy.",
        },
        {
          q: "Can you help me fill slow weeks?",
          a: "Yes. Win-back campaigns automatically re-engage past customers who haven't visited in a while, and online booking makes it easy for new ones to grab an open slot, so your calendar fills in even during slower stretches.",
        },
        {
          q: "Do you work with fleet accounts and commercial clients?",
          a: "Yes. Inquiries from fleet managers and local businesses get captured in the same inbox and booked on your calendar, so high-value commercial work doesn't slip through while you're busy.",
        },
        {
          q: "What's the offer, and what if it doesn't work?",
          a: "Your first month is free, with done-for-you setup, no setup fees, and no contracts, cancel anytime with 30 days notice. Our promise: every inquiry captured, or your next month is on us.",
        },
      ]}
    />
  );
}
