import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing: Done-for-You Booking Plans",
  description:
    "Simple monthly pricing for done-for-you call, text, and message capture and booking. Compare the Foundation, Freedom, and Legacy plans.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
