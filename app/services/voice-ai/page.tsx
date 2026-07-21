import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Voice AI Agent: Answer Every Call 24/7 and Book the Appointment",
  description:
    "An AI voice agent that answers your phone around the clock, handles FAQs, books, reschedules, and cancels appointments, and sends payment links, so no call goes unanswered.",
};

export default function VoiceAiPage() {
  return (
    <ServicePageLayout
      label="Voice AI Agent"
      headline="An AI That Answers the Phone 24/7"
      subhead="Every unanswered call is a customer who may never call back. A Voice AI agent picks up around the clock, answers the common questions, books, reschedules, and cancels appointments on your calendar, and sends payment links, so the phone keeps earning even when no one is free to grab it."
      whatThisIs="This is an AI voice agent that answers your business phone, day or night. It speaks naturally with callers, handles your frequently asked questions, and takes action: it books new appointments, reschedules or cancels existing ones on your calendar, and sends payment links when it is time to collect. It works alongside the AI Front Desk, which handles conversations over text and chat, so whether a customer reaches you by phone or by message, an answer is waiting. You stay in control: you can preview exactly how the voice agent sounds and behaves before it ever takes a live call, and if you would rather keep things text-only, you can simply leave it off. It is a tool you turn on when it fits, not something forced on every caller."
      whatYouGet={[
        "An AI voice agent that answers your phone 24 hours a day",
        "Natural conversation that handles your common caller questions",
        "Appointment booking directly onto your calendar",
        "Rescheduling and cancellations handled on the call",
        "Payment links sent to callers when it is time to collect",
        "Coverage for after hours, overflow, and missed calls",
        "A preview so you hear and approve it before it goes live",
        "The option to stay text-only if you prefer that instead",
      ]}
      whyItMatters={[
        "For an appointment-based business, the phone is still where a lot of money comes in, and a call that rings out is often gone for good. People calling a service business want help now, and if you do not pick up they call the next name on the list. A voice agent that answers every time, including after hours and during your busiest stretches, stops that leak.",
        "Answering is only half of it. A real receptionist does not just take a message, they book the appointment, move the one that needs moving, and collect when it is time. The Voice AI agent does the same: it puts the appointment on your calendar, handles reschedules and cancellations, and sends a payment link, so the call ends as a finished transaction rather than a callback you owe.",
        "We also believe you should never feel boxed in by automation. You can preview the voice agent and decide exactly how it represents you before a single customer hears it, and pairing it with the AI Front Desk means phone and text are covered together. If voice is not right for your business, keep it text-only. The point is to answer every customer the way that fits you, not to replace the human touch you trade on.",
      ]}
      stat="Every call answered and turned into a booking, or your next month is on us"
      faqs={[
        {
          q: "Will callers know they are talking to an AI?",
          a: "The agent speaks naturally and is designed to help, not to trick anyone. You decide how it introduces itself, and you preview the whole experience before it goes live so it represents your business the way you want.",
        },
        {
          q: "What can the voice agent actually do on a call?",
          a: "It answers your frequently asked questions, books new appointments on your calendar, reschedules and cancels existing ones, and sends payment links when it is time to collect.",
        },
        {
          q: "How is this different from the AI Front Desk?",
          a: "The AI Front Desk handles conversations over text and chat. The Voice AI agent handles the phone. Together they cover both channels, so a customer gets a fast answer whether they call or message.",
        },
        {
          q: "What if I do not want an AI answering my phone?",
          a: "That is completely fine. You can preview the voice agent and choose not to use it, keeping your setup text-only. Voice is an option you turn on when it fits, not a requirement.",
        },
        {
          q: "Does it only work after hours?",
          a: "No. It can answer around the clock, but it is just as useful during the day for overflow and missed calls, so a busy moment never costs you a customer.",
        },
      ]}
    />
  );
}
