import type { Metadata } from "next";
import IndustryPageLayout from "@/app/components/IndustryPageLayout";

export const metadata: Metadata = {
  title: "Lead Capture for Contractors and Remodelers",
  description:
    "Capture every call, text, and message your contracting or remodeling business already gets, and turn each one into a booked appointment on your calendar.",
};

export default function ContractorsPage() {
  return (
    <IndustryPageLayout
      industry="Contractors"
      heroHeadline="Capture Every Contractor Inquiry, and Book the Estimate on Your Calendar"
      heroSubhead="Stop letting inquiries slip. Turn every call and text into a booked estimate."
      painPoints={[
        "You're on a job site, the phone rings, and the caller hires whoever picks up first",
        "Estimate requests sit in your inbox until the prospect has moved on",
        "Inquiries scatter across phone, email, and Facebook with no single place to catch them",
        "Your schedule has gaps that should already be filled with booked walkthroughs",
      ]}
      recommendedServices={[
        {
          name: "Missed-Call Text-Back",
          href: "/services/missed-call-text-back",
          desc: "Every missed call gets an instant text back, so a buyer on a job site never reaches a dead end while you're on a ladder.",
        },
        {
          name: "Unified Inbox",
          href: "/services/ai-lead-management",
          desc: "Calls, texts, emails, and social messages all land in one inbox, so no estimate request ever slips through the cracks.",
        },
        {
          name: "Online Booking",
          href: "/services/websites",
          desc: "Let homeowners book a walkthrough or estimate themselves, with two-way Google Calendar sync so you never double book.",
        },
        {
          name: "Automated Reminders",
          href: "/services/sms-marketing",
          desc: "Automatic text and email reminders cut no-shows so the walkthroughs you book actually happen.",
        },
        {
          name: "AI Front Desk",
          href: "/services/ai-lead-management",
          desc: "Our AI answers questions and follows up instantly so every inquiry keeps moving toward a booked appointment.",
        },
      ]}
      stat="The contractor who answers first usually wins the job. Capture and respond to every inquiry and you're the one who shows up first."
      faqs={[
        {
          q: "Does this work for general contractors and specialty trades?",
          a: "Yes. General contractors, remodelers, framers, concrete contractors, tile setters, flooring installers, custom home builders, and more. We capture the calls, texts, and messages you already get and book them on your calendar, whatever your trade.",
        },
        {
          q: "I'm too busy on job sites to answer everything. How does this help?",
          a: "That's exactly the point. When you can't pick up, the system texts the caller back instantly, catches messages from every channel in one inbox, and lets people book a walkthrough themselves. You stop losing work just because your hands are full.",
        },
        {
          q: "How long does setup take and how much of my time does it need?",
          a: "Setup is done-for-you and you're live in days. After you approve the basics, it runs itself. Most clients spend just a few minutes a week reviewing what got booked.",
        },
        {
          q: "What's the catch, and what if it doesn't work?",
          a: "No catch. Your first month is free, there are no setup fees, and no contracts, cancel anytime with 30 days notice. Our promise: every inquiry captured, or your next month is on us.",
        },
        {
          q: "Can I let homeowners book a walkthrough online?",
          a: "Yes. Online booking syncs two ways with your Google Calendar, so homeowners pick a real open slot and it lands on your schedule automatically, with reminders to keep no-shows down.",
        },
      ]}
    />
  );
}
