import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  JsonLd,
} from "@/components/seo/structured-data";
import FAQContent from "./FAQContent";
import {
  SITE_NAME,
  SITE_URL,
  OG_IMAGE_URL,
} from "@/lib/metadata";
import { FAQS } from "@/lib/faqs";
export const metadata = {
  title: "FAQ | Swarikaro - Frequently Asked Questions",
  description:
    "Find answers to the most frequently asked questions about Swarikaro vehicle rentals, bookings, payments, vehicle owners, rental shops and customer support.",
  metadataBase: new URL(SITE_URL),
  keywords: [
    "Swarikaro FAQ",
    "Vehicle Rental FAQ",
    "Car Rental",
    "Bike Rental",
    "Scooty Rental",
    "Rental Support",
    "Vehicle Booking",
    "Self Drive",
    "Rental Shop",
  ],

  alternates: {
    canonical: `${SITE_URL}/faq`,
  },

  openGraph: {
    title: `Frequently Asked Questions | ${SITE_NAME}`,
    description:
      "Everything you need to know about renting and listing vehicles on Swarikaro.",
    url: `${SITE_URL}/faq`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: OG_IMAGE_URL, // Place this image in /public
        width: 1200,
        height: 630,
        alt: "Swarikaro FAQ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Frequently Asked Questions | ${SITE_NAME}`,
    description: "Answers to common questions about Swarikaro rentals.",
    images: [OG_IMAGE_URL],
  },
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
},
};

export default function FAQPage() {
const faqSchema = buildFaqSchema(
  FAQS.map(({ question, answer }) => ({
    question,
    answer,
  }))
);
  const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", item: SITE_URL },
    { name: "FAQ", item: `${SITE_URL}/faq` },
  ]);

  return (
    <>
      <JsonLd data={[breadcrumbSchema, faqSchema]} />

      <FAQContent />
    </>
  );
}
