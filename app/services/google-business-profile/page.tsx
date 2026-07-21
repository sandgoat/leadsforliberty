import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Google Business Profile: Let Customers Book You From Google",
  description:
    "Google Business Profile optimization with booking enabled, so searchers schedule straight from Google and calls and messages land in one inbox that answers and books.",
};

export default function GoogleBusinessProfilePage() {
  return (
    <ServicePageLayout
      label="Google Business Profile"
      headline="Let Customers Book You Straight From Google"
      subhead="When someone finds you on Google, they should be able to book on the spot, not play phone tag. We turn your profile into a booking front door and route every call and message into one inbox that answers and schedules."
      whatThisIs="Google Business Profile (GBP) is the listing that appears in Google Maps and the local results. We optimize it so people who find you can book an appointment right there, and we wire the calls, messages, and review requests into the same unified inbox that captures and books every other channel. Every inquiry from Google becomes a tracked conversation headed for your calendar."
      whatYouGet={[
        "Booking enabled on your profile so searchers schedule straight from Google",
        "Calls and messages from your profile routed into one unified inbox",
        "Missed-call text-back on your profile number so no caller is lost",
        "Full profile optimization: categories, services, hours, photos, description",
        "Weekly GBP posts that keep your profile active and point to booking",
        "Automated review requests after each booked job to build prominence",
        "Q&A seeding and monitoring so searchers get answers that lead to a booking",
        "Service area and attribute updates as your business evolves",
      ]}
      whyItMatters={[
        "When someone searches for a service near them, the local map results are the first thing they see, with trust signals built right in. Showing up matters, but capturing the click matters more. If a searcher cannot book in a couple of taps, or calls and gets voicemail, that ready-to-buy inquiry goes to the next listing.",
        "We close that gap. Booking on your profile lets motivated searchers schedule themselves. For the ones who call or message instead, missed-call text-back and the unified inbox make sure the conversation continues and ends on your calendar. A busy owner mid-appointment does not lose the booking just because both hands are full.",
        "The businesses that win local search are not just visible, they are reachable. An active profile with steady reviews keeps you prominent, and a profile that books turns that visibility into appointments instead of missed calls.",
      ]}
      stat="Every inquiry from Google captured, or your next month is on us"
      faqs={[
        {
          q: "Do I need a physical storefront to have a GBP?",
          a: "No. Service-area businesses such as groomers, contractors, cleaners, and mobile services can set up a GBP without a public address. We handle the configuration correctly so you show up in the right areas.",
        },
        {
          q: "How does booking from Google actually work?",
          a: "We enable scheduling on your profile and sync it to your calendar with two-way Google Calendar sync, so a searcher picks an open slot and it is booked, no phone tag. Booked times stay accurate everywhere.",
        },
        {
          q: "What happens when someone calls the profile instead of booking?",
          a: "Calls route into your unified inbox, and any missed call triggers an automatic text back within seconds so the caller knows you saw them. The conversation continues until the appointment is on your calendar.",
        },
        {
          q: "What if I have negative reviews?",
          a: "We cannot delete legitimate reviews, but we respond professionally, keep positive reviews flowing with automatic requests after each booked job, and address issues privately before they go public.",
        },
        {
          q: "Do you post on my behalf?",
          a: "Yes. We write and post weekly GBP updates for you, promotions, tips, photos, and news that point people toward booking. You can approve posts if you like, or let us run it.",
        },
      ]}
    />
  );
}
