import type { Metadata } from "next";
import IndustryPageLayout from "@/app/components/IndustryPageLayout";

export const metadata: Metadata = {
  title: "Capture Every Patient Inquiry and Book It | Dental & Medical",
  description:
    "Capture every call, text, and message your practice already gets, and turn each one into a booked appointment on your calendar, automatically.",
};

export default function DentalMedicalPage() {
  return (
    <IndustryPageLayout
      industry="Dental & Medical"
      heroHeadline="Capture Every Patient Inquiry, and Book It on Your Calendar"
      heroSubhead="Turn every call, text, and message into a booked appointment, automatically."
      painPoints={[
        "Calls go to voicemail at lunch and after hours, and new patients book with the practice that answered",
        "Your schedule has open slots that should already be filled",
        "Patient messages come in by phone, email, and social with no single place to catch them",
        "No-shows leave gaps because reminders aren't going out automatically",
      ]}
      recommendedServices={[
        {
          name: "AI Front Desk",
          href: "/services/ai-lead-management",
          desc: "Answer new patient questions and book appointments 24/7, even when your front desk is at lunch or gone for the day.",
        },
        {
          name: "Missed-Call Text-Back",
          href: "/services/missed-call-text-back",
          desc: "Every missed call gets an instant text reply, so a prospective patient never reaches voicemail and calls the next practice.",
        },
        {
          name: "Online Booking",
          href: "/services/websites",
          desc: "Let patients book the right slot themselves, with two-way Google Calendar sync so your schedule stays accurate.",
        },
        {
          name: "Automated Reminders",
          href: "/services/sms-marketing",
          desc: "Automatic text and email reminders cut no-shows so your booked appointments actually show up.",
        },
        {
          name: "Win-Back Campaigns",
          href: "/services/email-marketing",
          desc: "Automatically reactivate lapsed patients and turn them back into booked appointments on your calendar.",
        },
      ]}
      stat="Many patient calls go unanswered during the busiest hours. Every missed call is an appointment that goes to another practice."
      faqs={[
        {
          q: "Do you work with all medical and dental specialties?",
          a: "Yes. General dentists, orthodontists, oral surgeons, primary care physicians, urgent care clinics, chiropractors, physical therapists, dermatologists, and more. We capture the inquiries you already get and book them on your calendar.",
        },
        {
          q: "Is this approach HIPAA-conscious?",
          a: "We design everything with HIPAA considerations in mind and configure our inbox and booking flows to stay within compliance boundaries. We never collect or process protected health information improperly. For specific legal guidance, consult your compliance officer.",
        },
        {
          q: "Does this connect to our scheduling software?",
          a: "Yes. We connect online booking and reminders to your existing scheduling tools and sync two ways with Google Calendar, so patients book directly and your schedule stays accurate without extra phone tag.",
        },
        {
          q: "We already have a full schedule. Why would we need this?",
          a: "Patients move, change insurance, or simply lapse, and missed calls quietly cost you new ones. Capturing every inquiry and reactivating past patients keeps your schedule full and protects you from the slow weeks.",
        },
        {
          q: "What's the offer, and what if it doesn't work?",
          a: "Your first month is free, with done-for-you setup, no setup fees, and no contracts, cancel anytime with 30 days notice. Our promise: every inquiry captured, or your next month is on us.",
        },
      ]}
    />
  );
}
