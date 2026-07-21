import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Custom Contact Forms: Capture the Right Details and Route Them Instantly",
  description:
    "Custom-built forms that capture exactly the fields you need, alert you and your staff by text or email, auto-reply to the customer, and flow into your calendar and pipeline.",
};

export default function ContactFormsPage() {
  return (
    <ServicePageLayout
      label="Custom Contact Forms"
      headline="Forms Built to Capture and Route Every Inquiry"
      subhead="A generic contact form collects a name and a shrug. We build forms around exactly the details your business needs, then route each submission to you and your staff instantly, send the customer an automatic reply, and push the lead straight into your calendar and pipeline."
      whatThisIs="This is custom form building for the way your business actually intakes work. We design forms that capture exactly the fields you need, whether that is service type, address, vehicle, preferred time, or anything specific to your trade, and nothing you do not. You can embed them on your website or share them by direct link or QR code, so they work on a flyer, a business card, or a sign as easily as on a page. The moment a form is submitted, it routes to you and the right staff by text or email, fires an automatic reply to the customer so they know you got it, and drops the lead into your calendar and pipeline where it can become a booked appointment. Forms with proper opt-in and opt-out language also double as a compliance building block for texting customers down the line."
      whatYouGet={[
        "Custom forms built around the exact fields your business needs",
        "Embed on your website or share by direct link or QR code",
        "Instant routing of submissions to you and the right staff by text or email",
        "An automatic reply to the customer so they know you received it",
        "Every submission flowing into your calendar and pipeline",
        "Opt-in and opt-out language built in to support compliant texting",
        "Clean, on-brand form design that matches your site",
        "Done-for-you setup with no form builders to wrestle",
      ]}
      whyItMatters={[
        "A form is only as good as the information it gathers and what happens next. When you capture the right details up front, you and your team can respond fast and prepared instead of trading messages to figure out what the customer even needs. The right fields turn a vague inquiry into a job you can quote or book.",
        "Speed is what wins the lead. The moment someone submits, the inquiry is texted or emailed to the right person and the customer gets an instant auto-reply, so no submission sits unseen in a generic inbox. Sharing the same form by link or QR code means you can capture leads from a yard sign, a flyer, or a counter card, not just your website.",
        "Because submissions flow into your calendar and pipeline, the form is the front door to a booking, not a dead end. And when your forms include proper opt-in and opt-out language, they also satisfy a requirement for compliant customer texting, so the lead you capture today helps unlock the conversations you want to have tomorrow.",
      ]}
      stat="Every form submission captured, routed, and answered, or your next month is on us"
      faqs={[
        {
          q: "Can the form capture fields specific to my business?",
          a: "Yes. We build the form around exactly what you need to intake a job, such as service type, address, vehicle, timeframe, or anything else, and we leave out the fields that just add friction.",
        },
        {
          q: "Where can I use the form?",
          a: "Embed it on your website or share it as a direct link or QR code. The same form works on a page, a flyer, a business card, a sign, or a social profile.",
        },
        {
          q: "What happens the instant someone submits?",
          a: "The submission is routed to you and the right staff by text or email, the customer gets an automatic reply confirming you received it, and the lead drops into your calendar and pipeline.",
        },
        {
          q: "How do forms relate to texting customers?",
          a: "Forms that include proper opt-in and opt-out language are part of what carriers require for compliant business texting. A well-built form both captures the lead and helps establish the consent you need to text them.",
        },
        {
          q: "Do I have to build or maintain the forms?",
          a: "No. We design, build, and connect everything for you, and we adjust the fields and routing whenever your needs change.",
        },
      ]}
    />
  );
}
