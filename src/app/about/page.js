import {
  buildBreadcrumbSchema,
  JsonLd,
} from "@/components/seo/structured-data";
import AboutContent from "./AboutContent";
import {
  SITE_NAME,
  SITE_URL,

  OG_IMAGE_URL,
} from "@/lib/metadata";
export const metadata = {
  title: "About Us | Swarikaro - Smart Vehicle Rental Platform",
  description:
    "Learn about Swarikaro, India's growing vehicle rental platform connecting vehicle owners, rental shops, and travelers. Discover our story, mission, vision, and how we're building a smarter mobility network.",
metadataBase: new URL(SITE_URL),
  keywords: [
    "About Swarikaro",
    "Vehicle Rental Platform",
    "Car Rental",
    "Bike Rental",
    "Scooty Rental",
    "Self Drive Rental",
    "Car Rental India",
    "Bike Rental India",
    "Vehicle Owners",
    "Rental Shops",
    "Mobility Platform",
    "Travel",
    "Hourly Rental",
    "Daily Rental",
    "Smart Mobility",
    "Swarikaro",
  ],

  openGraph: {
    title: "About Swarikaro | Smart Vehicle Rental Platform",
    description:
      "Discover the story behind Swarikaro and how we're helping families, vehicle owners, rental shops, and travelers connect through a trusted mobility platform.",
    url: `${SITE_URL}/about`,
    siteName: "Swarikaro",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "About Swarikaro",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Swarikaro",
    description:
      "Learn more about Swarikaro's journey, mission, and vision for building India's trusted vehicle rental network.",
    images: [OG_IMAGE_URL],
  },

  alternates: {
    canonical: `${SITE_URL}/about`,
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

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: SITE_URL },
    { name: "About", item: `${SITE_URL}/about` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <AboutContent />
    </>
  );
}
