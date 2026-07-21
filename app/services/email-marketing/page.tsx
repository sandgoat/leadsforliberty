import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Email Marketing: Reminders, Rebooking, and Win-Back That Fill Days",
  description:
    "Done-for-you email that confirms appointments, cuts no-shows, prompts rebooking, and wins back lapsed customers, so your calendar stays full from the customers you already have.",
};

export default function EmailMarketingPage() {
  return (
    <ServicePageLayout
      label="Email Marketing"
      headline="Reminders, Rebooking, and Win-Back That Keep the Calendar Full"
      subhead="Your past customers are the easiest appointments you will ever book. We use email to confirm bookings, cut no-shows, prompt the next visit, and win back the ones who drifted, so your calendar stays full without chasing new demand."
      whatThisIs="This is email built around your calendar, not a generic newsletter. It confirms and reminds people about booked appointments, nudges them to rebook when they are due, and runs win-back campaigns to customers who have not been in for a while. It works hand in hand with the booking system: every email points back to a calendar that captures the reply and books the time. We write, design, and send all of it for you."
      whatYouGet={[
        "Appointment confirmations and reminders that reduce no-shows",
        "Rebooking nudges timed to when each customer is due for their next visit",
        "Win-back campaigns to re-engage customers who have not booked in a while",
        "Every email links to online booking so replies turn into appointments",
        "Welcome sequence for every new lead or customer that enters your list",
        "List hygiene and segmentation by service, visit history, and customer stage",
        "Mobile-optimized templates branded to your business, sent for you",
        "Monthly report on opens, clicks, and appointments booked",
      ]}
      whyItMatters={[
        "Most businesses lose a meaningful share of their customers every year not to bad service but to silence, they simply forget to come back. A well-timed reminder or rebooking email brings them in again. For a business whose customers are due back on a regular cycle, a single nudge at the right moment can fill a slow week without spending a cent on getting found.",
        "Reminders also protect the bookings you already have. An appointment that no-shows is lost revenue and a hole in your day. Automatic confirmations and reminders, all linked back to your calendar, keep those slots honored and make it easy for customers to reschedule rather than vanish.",
        "Because every email points to a calendar that captures the reply and books the time, your past customer list becomes a renewable source of appointments. It is the cheapest demand you have, and we put it to work filling your days month after month, without you having to think about it.",
      ]}
      stat="Every reminder and rebooking nudge points straight to your calendar to fill it"
      faqs={[
        {
          q: "What platform do you use to send emails?",
          a: "We work within the same system that runs your inbox and calendar so confirmations, reminders, and rebooking all stay connected. If you have an existing platform, we can work with it.",
        },
        {
          q: "Do I need a big list to get started?",
          a: "No. Your past and current customers are exactly who this targets, and they are your easiest rebookings. Even a couple hundred local customers can keep slow days full.",
        },
        {
          q: "Who writes the emails?",
          a: "We do. Our team writes everything in your brand voice. You can review and approve before sending, or give us the green light to send for you.",
        },
        {
          q: "How does this connect to booking?",
          a: "Every email links to your online booking, and replies land in the same unified inbox that captures and books your other channels. A reminder or win-back email turns into an appointment on your calendar, not just an open rate.",
        },
        {
          q: "How do you avoid landing in spam?",
          a: "We follow deliverability best practices: proper authentication (SPF, DKIM, DMARC), list hygiene, gradual warm-up for new sending domains, and engagement-based segmentation.",
        },
      ]}
    />
  );
}
