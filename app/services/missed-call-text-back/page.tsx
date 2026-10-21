import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Missed-Call Text-Back That Gets You Booked",
  description:
    "Every unanswered call gets an automatic text in seconds that keeps the conversation alive and leads to a booked appointment on your calendar. Set up done-for-you, live in days.",
};

export default function MissedCallTextBackPage() {
  return (
    <ServicePageLayout
      label="Missed-Call Text-Back"
      headline="Turn Every Missed Call Into a Booked Appointment"
      subhead="You can't answer every call with your hands full. So the moment one goes unanswered, an automatic text fires, keeps the caller engaged, and guides them to book a time on your calendar instead of calling someone else."
      whatThisIs="Missed-call text-back is the system that catches the inquiries you would otherwise lose to voicemail and turns them into bookings. The instant a call goes unanswered, the caller gets a personalized text that acknowledges them and offers to schedule. The reply lands in your one unified inbox, where the conversation continues, with AI or your team, until the appointment is on your calendar."
      whatYouGet={[
        "Automatic text sent within seconds of every missed call",
        "Personalized message that invites the caller to book a time, not just call back",
        "Replies handled in your one unified inbox alongside every other channel",
        "Online booking link in the text so callers schedule themselves",
        "Two-way Google Calendar sync so offered times are always open",
        "Missed-call alerts routed to your phone or email",
        "Monthly report showing calls recovered and appointments booked",
        "Done-for-you setup, live in days",
      ]}
      whyItMatters={[
        "A large share of calls to small businesses go unanswered, and most callers will not leave a voicemail, they will simply call the next name on the list. A text that arrives in seconds closes that gap. The caller knows you saw them, and instead of starting over elsewhere, they pick a time and book.",
        "Appointment-based service businesses cannot stop mid-job to answer every call. A tech on a ladder, a stylist mid-cut, a clinic front desk slammed at lunch, all of them lose inquiries they never even hear about. Missed-call text-back acts as your front desk for those moments, capturing the caller and moving them toward a booking automatically.",
        "The payoff is recovered revenue you can see. Every recovered call that turns into a booked appointment is income you would have lost to voicemail. Capture even a portion of your missed calls and the system pays for itself, then keeps filling the calendar month after month.",
      ]}
      stat="Every missed call captured and turned toward a booking, or your next month is on us"
      faqs={[
        {
          q: "Does this work with any phone system?",
          a: "Yes. It works with your existing business number, whether that is a cell phone, VoIP, or a dedicated line. We configure the forwarding and integration during onboarding.",
        },
        {
          q: "What does the text message say?",
          a: "We write a message tailored to your business and tone, something like: 'Hi, this is [Your Business Name], sorry we missed you, we are with a customer. Want to grab a time? Here is our calendar.' It sounds human and points straight to booking.",
        },
        {
          q: "How quickly can this be set up?",
          a: "It goes live in days. It is one of the fastest parts of the system to deploy because it needs very little configuration on your end.",
        },
        {
          q: "What if someone replies to the text?",
          a: "Replies come into your one unified inbox, where the AI front desk or your team continues the conversation and books the appointment. Automated follow-ups can kick in if no one responds right away.",
        },
        {
          q: "Is this included in the base program?",
          a: "Yes. Missed-call text-back is a core part of every plan, from your first free month onward. It is one of the first things we set up.",
        },
      ]}
    />
  );
}
