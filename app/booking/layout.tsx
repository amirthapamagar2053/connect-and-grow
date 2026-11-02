import type { Metadata } from "next";

// app/booking/page.tsx is a Client Component (it mounts the Cal.com embed),
// and Client Components can't export `metadata` — so the booking page's
// metadata lives in this layout instead.
export const metadata: Metadata = {
  title: "Book a Counselling Session",
  description:
    "Choose your counsellor and book a counselling session online. Pick a time that suits you and confirm your appointment in a few steps.",
  alternates: { canonical: "/booking/" },
  openGraph: {
    title: "Book a Counselling Session | Connect & Grow",
    description:
      "Choose your counsellor and book a counselling session online at a time that suits you.",
    url: "/booking/",
  },
};

export default function BookingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
