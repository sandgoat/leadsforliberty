import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "SMS Marketing: Confirmations and Reminders That Keep Bookings",
  description:
    "Fully managed, compliant SMS that confirms appointments, cuts no-shows, prompts rebooking, and wins back lapsed customers, all linked to a calendar that captures replies and books.",
};

export default function SmsMarketingPage() {
  return (
    <ServicePageLayout
      label="SMS Marketing"
      headline="Texts That Confirm, Remind, and Rebook"
      subhead="A text is read in minutes, which makes it the perfect way to protect and fill your calendar. We use SMS to confirm appointments, cut no-shows, prompt the next visit, and win back lapsed customers, with every text wired to a calendar that captures the reply and books."
      whatThisIs="This is SMS built around your bookings. It confirms and reminds customers about appointments, nudges them to rebook when they are due, and re-engages the ones who drifted away. Two-way texts land in the same unified inbox that runs every other channel, so a reply does not just get read, it turns into a booked time. We build and manage the whole compliant program for you."
      whatYouGet={[
        "Appointment confirmation and reminder sequences that reduce no-shows",
        "Rebooking nudges timed to when each customer is due for the next visit",
        "Win-back texts to re-engage customers who have not booked in a while",
        "Two-way SMS that lands in your one unified inbox and books the time",
        "Booking links in every text so customers schedule themselves in a tap",
        "10DLC registration and compliance handled for you",
        "List segmentation by service type, visit history, or customer stage",
        "Performance tracking: delivery, replies, and appointments booked",
      ]}
      whyItMatters={[
        "Texts are opened within minutes and nearly always read, which is exactly what time-sensitive bookings need. A confirmation the day before keeps a slot honored, and a quick reminder gives customers an easy way to reschedule rather than simply not show. For appointment-based businesses, that alone protects real revenue every week.",
        "SMS also brings people back. A rebooking nudge sent when a customer is due, or a win-back text to someone who has not visited in a while, fills slow days from the customers you already have. You can text last season's clients and watch the week book up, no new demand required.",
        "Because every text is two-way and tied to your calendar, the reply does the work. Instead of a customer texting back and waiting, the message lands in your unified inbox where the AI front desk or your team books the time on the spot. We also handle 10DLC registration and compliance, so you get all of this without the legal headache.",
      ]}
      stat="Every text reply captured and turned into a booking, or your next month is on us"
      faqs={[
        {
          q: "What is 10DLC and why does it matter?",
          a: "10DLC is the carrier-mandated registration system for business SMS in the US. Unregistered senders face message filtering and account termination. We register your number correctly from the start.",
        },
        {
          q: "Can I text my existing customer list?",
          a: "Only contacts who have given opt-in consent. We audit your existing list for compliance and set up opt-in capture for future customers, who are also your easiest rebookings.",
        },
        {
          q: "Is SMS only for promotions?",
          a: "Not at all. The highest-performing texts are confirmations, reminders, rebooking nudges, and review requests, the operational messages that protect and fill your calendar.",
        },
        {
          q: "How do the texts turn into appointments?",
          a: "Every text includes a booking link, and any reply lands in your one unified inbox where the AI front desk or your team books the time. The conversation ends on your calendar, not in a thread.",
        },
        {
          q: "How many texts can I send per month?",
          a: "Volume depends on your plan and 10DLC throughput approval. Most appointment-based businesses are well within standard limits. We give you exact numbers during onboarding.",
        },
      ]}
    />
  );
}
