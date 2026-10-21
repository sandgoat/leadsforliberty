import type { Metadata } from "next";
import ServicePageLayout from "@/app/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Reputation Management: Reviews on Autopilot",
  description:
    "Automatic review requests after each booked job, plus monitoring and responses, so a steady stream of 5-star reviews turns more inquiries into booked appointments.",
};

export default function ReputationManagementPage() {
  return (
    <ServicePageLayout
      label="Reputation Management"
      headline="Reviews on Autopilot, So More Inquiries Become Bookings"
      subhead="People check reviews before they ever reach out. A strong, current reputation means more of the inquiries you already get turn into booked appointments. We build that reputation automatically off the back of every job you complete."
      whatThisIs="Reputation management is the system that turns each completed appointment into a fresh review, then puts that social proof to work converting new inquiries into bookings. Review requests fire automatically after every booked job through the same unified inbox that runs your messaging, and we monitor and respond across platforms so your reputation keeps working around the clock."
      whatYouGet={[
        "Automatic review requests by text and email after every booked job",
        "Requests triggered from the same system that captures and books your appointments",
        "Review monitoring across Google, Facebook, and industry directories",
        "Done-for-you responses to keep every review answered",
        "Private feedback path so unhappy customers reach you before going public",
        "Review widget for your website that reinforces trust at the moment of booking",
        "Monthly report showing new reviews, ratings, and trends",
        "Win-back and review campaigns to your existing customer database",
      ]}
      whyItMatters={[
        "Most consumers read reviews before choosing a local service business, so your reputation does its selling before a prospect ever sends a message. A current, highly rated profile means more of those readers actually reach out, and more of that traffic ends up booked rather than browsing.",
        "The catch is that happy customers rarely leave a review on their own, while unhappy ones are highly motivated. Without a system, the balance skews negative. Because our requests fire automatically right after each booked job, when satisfaction is highest, you build a steady stream of positive reviews without lifting a finger. A job wraps up, the request goes out, the review lands.",
        "The private feedback path matters too. An unhappy customer who clicks the request reaches you first, giving you a chance to make it right before it becomes a public one-star. That keeps your rating high, which keeps more inquiries flowing into the inbox that captures and books them.",
      ]}
      stat="A steady stream of reviews after every booking, or your next month is on us"
      faqs={[
        {
          q: "Can you remove negative reviews?",
          a: "Legitimate reviews cannot be deleted, not by us, not by Google. What we can do is respond professionally, keep positive reviews flowing after every booked job, and reach unhappy customers privately before they go public.",
        },
        {
          q: "How do you get customers to actually leave reviews?",
          a: "Timing and ease are everything. The request goes out automatically within a day of the appointment, when satisfaction is highest, and takes the customer to the review form in two taps. That earns far more reviews than asking by hand.",
        },
        {
          q: "Which review platforms do you manage?",
          a: "We prioritize Google Business Profile since it has the most impact on whether people find and trust you. We also monitor Facebook and any industry-specific directories relevant to your business.",
        },
        {
          q: "Do you respond to all reviews?",
          a: "Yes, we draft and post responses to reviews, positive and negative. Responding builds trust with future customers who are deciding whether to book.",
        },
        {
          q: "How many reviews should I aim for?",
          a: "There is no ceiling, more strong reviews always help. Practically, reaching 50 or more reviews with a 4.5-plus average is the point where most customers trust you enough to book without hesitation.",
        },
      ]}
    />
  );
}
