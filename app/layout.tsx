import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  COUNSELLORS,
  OG_IMAGE,
  SITE_COUNTRY,
  SITE_LOCALITY,
  SITE_NAME,
  SITE_REGION,
  SITE_URL,
} from "@/lib/site";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

// Material Symbols, self-hosted and subset to only the 17 icons this site
// actually renders (app/fonts/…-subset.woff2, 29KB — the full family is
// several megabytes). It used to be a <link> to fonts.googleapis.com in
// <head>, which blocked first render on two round trips to a third party.
//
// Regenerating after adding an icon: fetch
// https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=<comma-separated,sorted>
// and download the woff2 it points at. An icon missing from the subset renders
// as its literal name ("location_on"), so the list must cover every icon,
// including the ones passed through `icon:` fields rather than written inline.
//
// `display: "block"` rather than the usual "swap": with an icon font, swap
// shows that literal ligature text while the font loads.
const materialSymbols = localFont({
  src: "./fonts/material-symbols-outlined-subset.woff2",
  variable: "--font-material-symbols",
  weight: "100 700",
  style: "normal",
  display: "block",
});

export const metadata: Metadata = {
  // metadataBase lets Next resolve canonical and Open Graph URLs to absolute
  // ones; without it, social previews and canonicals are emitted relative and
  // search engines can't tell which host is authoritative.
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Connect & Grow | Counselling & Therapy in Sydney, NSW",
    // Pages set a short `title` and inherit this suffix, so each page gets a
    // distinct <title> instead of all eight sharing one.
    template: "%s | Connect & Grow",
  },
  description:
    "Professional counselling and therapy in Sydney, NSW. Experienced counsellors supporting anxiety, depression, grief, trauma and relationship difficulties. In-person or telehealth Australia-wide. Book online.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: "Connect & Grow | Counselling & Therapy in Sydney, NSW",
    description:
      "Professional counselling and therapy in Sydney, NSW. Book a session with an experienced counsellor, in person or by telehealth.",
    images: [OG_IMAGE],
  },
  // Pages don't declare `twitter`, so they all inherit this — which is why the
  // card only needs defining once, unlike `openGraph` above. Without the card
  // type, X and several other scrapers fall back to a small thumbnail instead
  // of the full-width preview.
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
  robots: { index: true, follow: true },
  // Emits <meta name="google-site-verification"> into every page's <head>, which
  // is what Search Console's meta-tag verification looks for. Keep it in place
  // after verifying: Search Console re-checks periodically and removing it
  // un-verifies the property.
  verification: {
    google: "icbd4wTpGsZXnln-AO8Fxj6s42nroWhhIi1BA1Hb9C4",
  },
};

// LocalBusiness structured data. For a local practice this is what lets Google
// associate the site with a service, a location and an area served — the main
// route to appearing for "counsellor near me" style searches.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  name: SITE_NAME,
  description:
    "Counselling and therapy services supporting anxiety, depression, grief, trauma and relationship difficulties.",
  url: SITE_URL,
  image: `${SITE_URL}/logo.webp`,
  telephone: COUNSELLORS[0].phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE_LOCALITY,
    addressRegion: SITE_REGION,
    addressCountry: SITE_COUNTRY,
  },
  // Two entries on purpose: Sydney is where in-person sessions happen and the
  // locality worth ranking for, while telehealth genuinely reaches the rest of
  // the country. Listing only the country was why neither could rank.
  areaServed: [
    { "@type": "City", name: SITE_LOCALITY },
    { "@type": "Country", name: "Australia" },
  ],
  availableService: [
    "Individual Counselling",
    "Couples Counselling",
    "Grief and Loss Counselling",
    "Trauma-Informed Therapy",
    "Telehealth Counselling",
  ],
  employee: COUNSELLORS.map((c) => ({
    "@type": "Person",
    name: c.name,
    jobTitle: c.title,
    telephone: c.phone,
    email: c.email,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${manrope.variable} ${materialSymbols.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-background text-on-background selection:bg-secondary-container selection:text-on-secondary-container">
        <Navigation />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
