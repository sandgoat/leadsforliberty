import type { Metadata } from "next";
import IndustryPageLayout from "@/app/components/IndustryPageLayout";

export const metadata: Metadata = {
  title: "Capture & Book Every Real Estate Inquiry",
  description:
    "Capture every call, text, and message from buyers and sellers, and turn each one into a booked showing or consultation on your calendar, automatically.",
};

export default function RealEstatePage() {
  return (
    <IndustryPageLayout
      industry="Real Estate"
      heroHeadline="Capture Every Buyer and Seller Inquiry, and Book It on Your Calendar"
      heroSubhead="Respond to every call, text, and message in seconds, and turn it into a booked showing."
      painPoints={[
        "A buyer texts about a listing and books with whoever replies first, not 20 minutes later",
        "Showing requests and inquiries scatter across calls, texts, emails, and DMs",
        "You're in a showing when a hot lead comes in, and by the time you call back they're gone",
        "Your calendar has gaps that should be filled with consultations and showings",
      ]}
      recommendedServices={[
        {
          name: "Missed-Call Text-Back",
          href: "/services/missed-call-text-back",
          desc: "Every missed call gets an instant text reply, so a buyer or seller never reaches voicemail and moves on to another agent.",
        },
        {
          name: "Unified Inbox",
          href: "/services/ai-lead-management",
          desc: "Calls, texts, emails, and Instagram or Facebook DMs all land in one inbox, so no inquiry ever slips by.",
        },
        {
          name: "Online Booking",
          href: "/services/websites",
          desc: "Let buyers and sellers book a showing or consultation themselves, with two-way Google Calendar sync so you're never double booked.",
        },
        {
          name: "AI Front Desk",
          href: "/services/ai-lead-management",
          desc: "Speed-to-lead is everything. Our AI replies within seconds, 24/7, and moves every inquiry toward a booked appointment.",
        },
        {
          name: "Win-Back Campaigns",
          href: "/services/email-marketing",
          desc: "Automatically re-engage past inquiries and your database so old leads turn into new booked appointments.",
        },
      ]}
      stat="In real estate, the agent who responds first usually wins. Capture every inquiry instantly and that agent is you."
      faqs={[
        {
          q: "Can you capture both buyer and seller inquiries?",
          a: "Yes. Whether someone calls about a listing, texts for a valuation, or messages you on social, every inquiry is captured in one inbox, answered instantly, and booked as a showing or consultation on your calendar.",
        },
        {
          q: "How does this help with speed-to-lead?",
          a: "When a new inquiry comes in, the system replies in seconds, day or night, even when you're in a showing. The buyer or seller gets an immediate response and can book a time right then, so you're not losing them to the next agent.",
        },
        {
          q: "Do you work with individual agents or brokerages?",
          a: "Both. Individual agents get a done-for-you capture-and-booking system. Brokerages can use it to capture and route inquiries to their agents. Reach out and we'll fit it to your setup.",
        },
        {
          q: "What's the offer, and what if it doesn't work for me?",
          a: "Your first month is free, with done-for-you setup, no setup fees, and no contracts, cancel anytime with 30 days notice. Our promise: every inquiry captured, or your next month is on us.",
        },
      ]}
    />
  );
}
