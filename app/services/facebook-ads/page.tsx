import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Facebook & Instagram Ads That Get Booked",
  description:
    "Managed Facebook and Instagram ads that send the right inquiries to one inbox that answers and books them, so ad interest turns into appointments.",
};

export default function FacebookAdsPage() {
  return (
    <ServicePageLayout
      label="Facebook & Instagram Ads"
      headline="Ads That Feed a System That Actually Books"
      subhead="Most local businesses waste money on social ads because the interest they create has nowhere to land. We run real campaigns that bring more of the right inquiries to one inbox that answers and books them, so ad spend turns into appointments."
      whatThisIs="We build and manage Facebook and Instagram campaigns for appointment-based service businesses, then connect them to the system that captures and books. Every form fill, click, and DM from your ads flows into one unified inbox where the AI front desk responds in seconds and offers a time on your calendar. The ads bring the right inquiries, the system makes sure none of them are lost."
      whatYouGet={[
        "Campaigns built to drive real inquiries from people likely to book",
        "Every lead routed into one unified inbox that answers and books",
        "Instant follow-up so ad inquiries get a reply in seconds, not hours",
        "Instagram and Facebook DMs captured in the same inbox as everything else",
        "Audience research and targeting (demographics, interests, behaviors, lookalikes)",
        "Retargeting layer to recapture people who clicked but did not book",
        "Ad creative refresh and A/B testing on headlines, creative, and offers",
        "Monthly report tying ad spend to inquiries captured and appointments booked",
      ]}
      whyItMatters={[
        "Social ads can reach exactly the right people in your area, but reach is only half the job. The other half is what happens after the click. If an interested person fills a form or sends a DM and nobody answers fast, the inquiry you paid for evaporates. The system on the other side is what turns spend into bookings.",
        "That is why we connect every campaign to the capture-and-booking engine. The moment a lead comes in from an ad, it lands in your unified inbox and gets an instant reply that offers a time on your calendar. A busy owner does not have to stop mid-job to chase a DM, the appointment is booked before the lead cools off.",
        "Run this way, ads become a dependable source of booked appointments instead of a pile of unread messages. You can dial spend up when your calendar has room and down when it is full, confident that every inquiry the ads create actually gets answered and booked.",
      ]}
      stat="Every ad inquiry captured and booked, or your next month is on us"
      faqs={[
        {
          q: "Do you need access to my Facebook account?",
          a: "We work through Facebook Business Manager. You own the account and ad spend, we get partner access to build and manage campaigns. You see everything, always.",
        },
        {
          q: "What happens to the leads my ads bring in?",
          a: "They flow straight into your one unified inbox, where the AI front desk replies in seconds and offers times from your calendar. Instead of sitting unanswered, ad inquiries become booked appointments.",
        },
        {
          q: "Do you create the ad images and video?",
          a: "Yes, our team handles ad creative including static images and copy. Video creative is available as an add-on.",
        },
        {
          q: "How fast can campaigns launch?",
          a: "First campaigns are typically live within 5 to 7 business days of onboarding. We do not rush setup, getting the audience and tracking right at the start saves money later.",
        },
        {
          q: "What if my industry has Facebook ad restrictions?",
          a: "Some industries such as financial, housing, and healthcare have restricted targeting. We know the compliance requirements and set up campaigns accordingly.",
        },
      ]}
    />
  );
}
