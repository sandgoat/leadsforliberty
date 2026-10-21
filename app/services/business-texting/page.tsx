import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Business Texting: A2P 10DLC Registered",
  description:
    "Get your business number A2P 10DLC registered so you can legally text customers and your messages reach the inbox, with two-way conversations wired to your calendar.",
};

export default function BusinessTextingPage() {
  return (
    <ServicePageLayout
      label="Business Texting"
      headline="Compliant Texting That Reaches the Inbox"
      subhead="Texting customers is only worth doing if the messages get delivered and you stay on the right side of the carriers. We get your business number A2P 10DLC registered, then run real two-way conversations from that number straight into your unified inbox and onto your calendar."
      whatThisIs="This is the compliant foundation for every text your business sends. We register your brand and campaign for A2P 10DLC, the carrier-mandated system for business texting in the US, so your number is approved to send and your messages are not silently filtered out. Once approved, you can text customers two ways from your existing business number, and every conversation lands in the same unified inbox that runs your calls, web forms, and chat. Replies do not just get read, they turn into booked appointments. Think of this as the plumbing: SMS Marketing handles the campaigns and reminders, while Business Texting makes sure the pipe is registered, trusted, and delivering."
      whatYouGet={[
        "A2P 10DLC brand and campaign registration handled end to end",
        "Your existing business number enabled for compliant two-way texting",
        "Deliverability setup so messages reach customers instead of being filtered",
        "Privacy policy, terms, and opt-in plus opt-out language prepared for approval",
        "Every conversation routed into your one unified inbox",
        "Texting wired to your calendar so replies become booked appointments",
        "Carrier compliance maintained as rules and throughput limits change",
        "Done-for-you onboarding with no technical work on your end",
      ]}
      whyItMatters={[
        "Carriers now block or heavily filter business texts sent from numbers that are not properly registered. An unregistered number can look fine on your end while your customers never receive a word, and repeat violations can get your number shut off entirely. Registration is no longer optional, it is the price of admission for texting customers at all.",
        "Getting approved is fussy: carriers want a registered brand, a campaign description, a privacy policy, terms, and clear opt-in and opt-out language before they trust your number. We assemble all of it and shepherd the registration through, so you clear approval the first time instead of bouncing through rejections for weeks.",
        "Once your number is trusted, texting becomes the fastest way to talk to customers, because a text is read in minutes. Two-way conversations from your real business number land in your unified inbox, and because that inbox is tied to your calendar, a quick back and forth ends with a booked appointment rather than a missed lead.",
      ]}
      stat="Your number registered and your texts delivered, or your next month is on us"
      faqs={[
        {
          q: "How is this different from SMS Marketing?",
          a: "SMS Marketing is the campaigns: confirmations, reminders, rebooking nudges, and win-back texts. Business Texting is the foundation underneath them. It registers your number for A2P 10DLC, sets up deliverability, and enables compliant two-way conversations. You need this approved before the campaigns can reliably send.",
        },
        {
          q: "What is A2P 10DLC and do I really need it?",
          a: "A2P 10DLC is the carrier registration system for business texting from standard ten-digit numbers in the US. Without it, carriers filter or block your messages and can terminate the number. If you want to text customers and have it actually arrive, you need it.",
        },
        {
          q: "Can I use my current business number?",
          a: "Yes. We enable your existing business number for two-way texting once registration is approved, so customers see the same number they already know.",
        },
        {
          q: "Do I have to write the privacy policy and opt-in language myself?",
          a: "No. We prepare the privacy policy, terms, and the opt-in and opt-out language carriers require for approval. It is part of the done-for-you setup.",
        },
        {
          q: "How long does registration take?",
          a: "Carrier review timelines vary, typically from a few days to a couple of weeks. We handle the submission and follow-ups, and in the meantime you can start capturing conversations through the website chat widget while approval completes.",
        },
      ]}
    />
  );
}
