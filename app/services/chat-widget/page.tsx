import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Website Chat Widget: Visitors Into Texts",
  description:
    "An SMS-based chat widget for your site. A visitor leaves their name, number, and question, you get a text, and you reply from anywhere, with every conversation tied to your calendar.",
};

export default function ChatWidgetPage() {
  return (
    <ServicePageLayout
      label="Website Chat Widget"
      headline="A Chat Widget That Texts You the Lead"
      subhead="Most live chat only works if someone is sitting at the screen. Ours does not. A visitor types their name, number, and question, you get a text, and you reply from your phone wherever you are, with the whole conversation landing in your unified inbox and tied to your calendar."
      whatThisIs="This is a chat widget that lives on your website but runs on text. When a visitor opens it, they leave their name, phone number, and question, and that instantly becomes a text message to you. From there it is a normal back-and-forth conversation by SMS, so you can answer from your phone whether you are on a job, with a customer, or closed for the night. The visitor does not have to wait on your page, and you do not have to babysit a chat window. Every conversation flows into the same unified inbox as your calls and forms, plugs into your automations, and connects to your calendar so the chat can end in a booked appointment. It also works before your A2P 10DLC registration is approved, so you can start capturing leads on day one."
      whatYouGet={[
        "An SMS-based chat widget installed on your website",
        "Visitor name, number, and question captured the moment they reach out",
        "An instant text to you so no inquiry waits for someone at a screen",
        "Two-way texting you can answer from your phone anywhere",
        "Every conversation routed into your one unified inbox",
        "Auto-replies and follow-up automations so leads never go cold",
        "Customizable to match your brand colors and look",
        "A booking link in the conversation so chats turn into appointments",
      ]}
      whyItMatters={[
        "Traditional live chat punishes you for being busy. If no one is watching the widget, the visitor types into the void and leaves. By turning chat into a text the moment a visitor reaches out, you capture the lead even when you are on a ladder, mid-appointment, or closed, because the conversation moves to your phone where you actually are.",
        "It is easy and sticky, which is why it gets used every day. Visitors are comfortable typing a quick question, and you are comfortable answering a text, so conversations that would never have started as a phone call happen instead. That is found money: people who were just browsing become real, contactable leads.",
        "Because every chat lands in your unified inbox and connects to your calendar, the conversation has somewhere to go. Automations send an instant reply so the visitor knows you got it, and a booking link lets them schedule on the spot. And since it does not depend on A2P 10DLC approval, you can have it capturing leads while your business texting registration is still in review.",
      ]}
      stat="Every website visitor who reaches out captured and answered, or your next month is on us"
      faqs={[
        {
          q: "How is this different from regular live chat?",
          a: "Live chat requires someone watching the widget in real time, or visitors get no reply. Ours converts the inquiry into a text to your phone, so you can answer from anywhere and the lead is captured even when you are away from the screen.",
        },
        {
          q: "Does it work before my number is A2P 10DLC approved?",
          a: "Yes. The chat widget can start capturing visitor inquiries right away, so you are gathering leads while your business texting registration is still being reviewed.",
        },
        {
          q: "Can it match my website's design?",
          a: "Yes. We customize the widget to your brand colors and styling so it looks like a natural part of your site rather than a bolt-on.",
        },
        {
          q: "What happens after a visitor sends a message?",
          a: "You get a text, the conversation opens in your unified inbox, an automated reply lets the visitor know you received it, and a booking link makes it easy for them to schedule. You can take it from your phone wherever you are.",
        },
        {
          q: "Will I be buried in spam?",
          a: "Because every inquiry includes a name and phone number and flows through your inbox and automations, real leads stand out and follow-up is handled. You stay in control of who you reply to.",
        },
      ]}
    />
  );
}
