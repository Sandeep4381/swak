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
  title: "About Swarikaro | India's Smart Vehicle Rental Platform",
  description:
    "Learn about Swarikaro, India's smart vehicle rental platform connecting travellers, vehicle owners and rental businesses. Discover our mission, story and vision for making mobility simple, trusted and accessible.",
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
    title: "About Swarikaro | India's Smart Vehicle Rental Platform",
    description:
      "Learn about Swarikaro, India's smart vehicle rental platform connecting travellers, vehicle owners and rental businesses. Discover our mission, story and vision for making mobility simple, trusted and accessible.",
    url: `${SITE_URL}/about`,
    siteName: "Swarikaro",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Swarikaro - India's Smart Vehicle Rental Platform",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Swarikaro | India's Smart Vehicle Rental Platform",
    description:
      "Learn about Swarikaro, India's smart vehicle rental platform connecting travellers, vehicle owners and rental businesses. Discover our mission, story and vision for making mobility simple, trusted and accessible.",
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
