import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "AI Front Desk: Answers Every Inquiry and Books the Appointment",
  description:
    "An AI front desk that answers calls, texts, emails, forms, and DMs in one inbox, then books the appointment on your calendar, 24/7, so no inquiry ever goes unanswered.",
};

export default function AiLeadManagementPage() {
  return (
    <ServicePageLayout
      label="AI Front Desk"
      headline="An AI Front Desk That Answers and Books, 24/7"
      subhead="Inquiries get lost because nobody can answer fast enough while serving customers. Your AI front desk answers every call, text, email, form, and DM the moment it lands, then books the appointment on your calendar, around the clock."
      whatThisIs="The AI front desk is the system that captures every inquiry a business already gets and turns each one into a booked appointment. All of your channels feed one unified inbox, where AI responds in seconds, answers common questions, and offers open times from your calendar. We build and manage the entire setup for you, so the front desk never sleeps and never puts a caller on hold."
      whatYouGet={[
        "One unified inbox for calls, texts, emails, website forms, and Instagram or Facebook DMs",
        "AI front desk that answers in seconds and books straight onto your calendar",
        "Missed-call text-back so every unanswered call turns into a conversation",
        "Two-way Google Calendar sync so booked times are always accurate",
        "Automated reminders that cut no-shows and keep the calendar full",
        "Review requests after each booked job and win-back campaigns for lapsed customers",
        "AI trained on your services, hours, and pricing FAQs, with handoff to you when needed",
        "Simple dashboard showing every inquiry, conversation, and booked appointment",
      ]}
      whyItMatters={[
        "Most businesses take hours to respond to a new inquiry, and an inquiry that waits is usually an inquiry lost. The first business to answer and offer a time tends to win the booking. If you are mid-appointment with both hands full, that speed is impossible to deliver on your own.",
        "The AI front desk solves this completely. The moment someone calls, texts, emails, fills a form, or sends a DM, the system responds, answers the obvious questions, and offers open slots from your calendar. By the time you look up, the appointment is often already booked. You can stay focused on the customer in front of you while a new client gets scheduled automatically.",
        "The effect compounds. Faster answers mean more bookings from the same inquiries, fuller days mean more revenue without spending more on getting found, and reminders plus win-back keep the calendar full week after week. You capture demand you were already paying to attract, instead of letting it ring out to voicemail.",
      ]}
      stat="Every inquiry answered and booked, or your next month is on us"
      faqs={[
        {
          q: "What does the AI front desk actually do?",
          a: "It watches every channel, calls, texts, emails, forms, and DMs, and responds within seconds. It answers common questions, offers open times from your calendar, and books the appointment, handing off to you when a conversation needs a human.",
        },
        {
          q: "Do I need any technical knowledge to use it?",
          a: "No. We configure everything and give you a simple dashboard for your inbox, conversations, and booked appointments. If something needs to change, you call us, not a tech support line.",
        },
        {
          q: "Which channels does it connect?",
          a: "Phone calls and missed calls, SMS, email, your website forms and chat, Google Business Profile, and Instagram or Facebook DMs, all into one inbox. We handle every integration during setup.",
        },
        {
          q: "How does the AI know what to say?",
          a: "We train it on your business, services, pricing FAQs, hours, and location, so it answers accurately and books real appointments. Anything it cannot handle escalates to you automatically.",
        },
        {
          q: "Is this included?",
          a: "The unified inbox, missed-call text-back, and online booking are core to every plan. The full AI front desk that answers and books across all channels is the heart of the system, set up done-for-you and live in days.",
        },
      ]}
    />
  );
}
