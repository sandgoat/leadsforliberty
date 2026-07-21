import type { Metadata } from "next";
import IndustryPageLayout from "@/app/components/IndustryPageLayout";

export const metadata: Metadata = {
  title: "Capture Every Inquiry and Book It | Attorneys, CPAs & Advisors",
  description:
    "Capture every call, text, and message attorneys, CPAs, financial advisors, and insurance agents already get, and turn each one into a booked consultation.",
};

export default function ProfessionalServicesPage() {
  return (
    <IndustryPageLayout
      industry="Professional Services"
      heroHeadline="Capture Every Client Inquiry, and Book It on Your Calendar"
      heroSubhead="Turn every call, text, and message into a booked consultation, automatically."
      painPoints={[
        "A prospective client calls while you're with someone else, and hires the firm that called back first",
        "Inquiries arrive by phone, email, and web form with no single place to catch them",
        "You're billing or in meetings all day, and follow-up slips until the lead has gone cold",
        "Your calendar has open consultation slots that should already be booked",
      ]}
      recommendedServices={[
        {
          name: "AI Front Desk",
          href: "/services/ai-lead-management",
          desc: "Answer prospective client questions and book consultations 24/7, even when you're in court, with a client, or out of office.",
        },
        {
          name: "Missed-Call Text-Back",
          href: "/services/missed-call-text-back",
          desc: "Every missed call gets an instant, professional text reply, so a prospect never hits voicemail and calls another firm.",
        },
        {
          name: "Unified Inbox",
          href: "/services/ai-lead-management",
          desc: "Calls, texts, emails, and web form submissions all land in one inbox, so no inquiry is ever overlooked.",
        },
        {
          name: "Online Booking",
          href: "/services/websites",
          desc: "Let prospective clients book a consultation themselves, with two-way Google Calendar sync so you're never double booked.",
        },
        {
          name: "Automated Reminders",
          href: "/services/sms-marketing",
          desc: "Automatic reminders cut no-shows so the consultations you book actually happen.",
        },
      ]}
      stat="When a prospect reaches out, the first firm to respond usually wins the engagement. Capture every inquiry and that firm is yours."
      faqs={[
        {
          q: "How do you handle ethical and compliance rules for attorneys?",
          a: "Our capture and booking messages are professional and straightforward, with no guarantees of outcomes and no misleading claims. You review and approve the wording before anything goes live, and we adjust to fit State Bar of Texas advertising guidelines.",
        },
        {
          q: "Does this work for CPAs and financial advisors with compliance requirements?",
          a: "Yes. We provide all messaging for your review and compliance sign-off before it's used, and we work within your regulatory framework. The system simply makes sure every inquiry you already get is captured and booked, not missed.",
        },
        {
          q: "I'm billing or in meetings all day. How does this help?",
          a: "That's exactly when inquiries get lost. When you can't pick up, the system replies instantly, catches messages from every channel in one inbox, and lets prospects book a consultation themselves, so nothing slips while you're focused on client work.",
        },
        {
          q: "How long does setup take?",
          a: "Setup is done-for-you and you're live in days. After you approve the messaging, it runs itself, and most clients spend just a few minutes a week reviewing what got booked.",
        },
        {
          q: "What's the offer, and what if it doesn't work?",
          a: "Your first month is free, with no setup fees and no contracts, cancel anytime with 30 days notice. Our promise: every inquiry captured, or your next month is on us.",
        },
      ]}
    />
  );
}
