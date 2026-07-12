import CoreServices from "@/components/CoreServices";
import Hero from "@/components/Hero";
import HowSwarikaroWorks from "@/components/HowSwarikaroWorks";
import OurPresence from "@/components/OurPresence";

import {
  buildBreadcrumbSchema,
  JsonLd,
} from "@/components/seo/structured-data";
import WhySwarikaro from "@/components/WhySwarikaro";

export const metadata = {
  title: "Swarikaro | Apna Safar Apne Log",
  description: "Rent Cars, Bikes & Scooters with Swarikaro.",
  alternates: {
    canonical: "https://swarikaro.com",
  },
  openGraph: {
    title: "Swarikaro | Apna Safar Apne Log",
    description: "Rent Cars, Bikes & Scooters with Swarikaro.",
    url: "https://swarikaro.com",
    siteName: "Swarikaro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Swarikaro",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swarikaro | Apna Safar Apne Log",
    description: "Rent Cars, Bikes & Scooters with Swarikaro.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: "https://swarikaro.com" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Hero />
      <WhySwarikaro />
      <CoreServices />
      <HowSwarikaroWorks />
      <OurPresence />
      
    </>
  );
}
