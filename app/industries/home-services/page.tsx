import type { Metadata } from "next";
import IndustryPageLayout from "@/app/components/IndustryPageLayout";

export const metadata: Metadata = {
  title: "Home Service Marketing That Books Calls",
  description:
    "Capture every call, missed call, text, and message your home service business already gets, and turn each one into a booked appointment, automatically.",
};

export default function HomeServicesPage() {
  return (
    <IndustryPageLayout
      industry="Home Services"
      heroHeadline="Capture Every Home Service Call, and Book the Job on Your Calendar"
      heroSubhead="Every call, missed call, and text turned into a booked job, automatically."
      painPoints={[
        "Calls go to voicemail while you're on the job, and those customers call the next company",
        "Texts and DMs pile up unanswered until the prospect has already booked elsewhere",
        "Your calendar has open slots that should already be filled",
        "Inquiries come in across phone, email, and social, with no single place to catch them all",
      ]}
      recommendedServices={[
        {
          name: "Missed-Call Text-Back",
          href: "/services/missed-call-text-back",
          desc: "Automatically text every missed caller within seconds so the conversation keeps going while you're on the job.",
        },
        {
          name: "Unified Inbox",
          href: "/services/ai-lead-management",
          desc: "Every call, text, email, and Instagram or Facebook DM lands in one place, so nothing gets missed.",
        },
        {
          name: "Online Booking",
          href: "/services/websites",
          desc: "Let homeowners book the right slot themselves, with two-way Google Calendar sync so you never double book.",
        },
        {
          name: "Reputation Management",
          href: "/services/reputation-management",
          desc: "Automated review requests after every job build the 5-star reputation that makes the next customer choose you.",
        },
        {
          name: "AI Front Desk",
          href: "/services/ai-lead-management",
          desc: "Our AI answers questions, follows up instantly, and moves every inquiry toward a booked appointment, 24/7.",
        },
      ]}
      stat="The average home service business misses a big share of its calls. Every missed call is a job that goes to a competitor."
      faqs={[
        {
          q: "What industries count as home services?",
          a: "HVAC, plumbing, electrical, roofing, landscaping, pest control, cleaning, painting, handyman services, pool care, window washing, and more. If you work on or around people's homes and book appointments, we capture and book your inquiries.",
        },
        {
          q: "How fast can I get set up?",
          a: "Setup is done-for-you and you're live in days, not weeks. Missed-Call Text-Back often recaptures a customer in the first week. Your first month is free so you can see real bookings before you pay anything.",
        },
        {
          q: "Does this work for HVAC and plumbing?",
          a: "Yes. HVAC and plumbing are some of our strongest fits. Demand spikes mean a flood of calls and texts you can't always answer in the moment, and our system catches every one, replies instantly, and books it on your calendar.",
        },
        {
          q: "What if you don't capture every inquiry?",
          a: "We're confident in the system, so here's our promise: every inquiry captured, or your next month is on us. No contracts, cancel anytime with 30 days notice, and no setup fees.",
        },
      ]}
    />
  );
}
