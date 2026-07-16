import CoreServices from "@/components/CoreServices";
import Hero from "@/components/Hero";
import HowSwarikaroWorks from "@/components/HowSwarikaroWorks";
import OurPresence from "@/components/OurPresence";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  OG_IMAGE_URL,
} from "@/lib/metadata";
import {
  buildBreadcrumbSchema,
  buildServiceSchema,
  JsonLd,
} from "@/components/seo/structured-data";
import WhySwarikaro from "@/components/WhySwarikaro";

export const metadata = {
 title: {
  default: `${SITE_NAME} | Apna Safar Apne Log`,
  template: `%s | ${SITE_NAME}`,
},

description: SITE_DESCRIPTION,

metadataBase: new URL(SITE_URL),

alternates: {
  canonical: SITE_URL,
},
  openGraph: {
    title: {
      default: `${SITE_NAME} | Apna Safar Apne Log`,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Swarikaro",
    images: [
      {
        url: OG_IMAGE_URL,
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
    title: {
      default: `${SITE_NAME} | Apna Safar Apne Log`,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
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

export default function Home() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: SITE_URL },
  ]);

  const serviceSchema = buildServiceSchema({
    name: "Vehicle Rental Services",
    description:
      "Car, Bike and Scooter rentals across India.",
    url: SITE_URL,
    areaServed: "India",
  });

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema,
          serviceSchema,
        ]}
      />

      <Hero />
      <WhySwarikaro />
      <CoreServices />
      <HowSwarikaroWorks />
      <OurPresence />
    </>
  );
}