import {
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  JsonLd,
} from "@/components/seo/structured-data";
import PrivacyPolicy from "./privacy-policy";
import {
  SITE_NAME,
  SITE_URL,
  OG_IMAGE_URL,
} from "@/lib/metadata";
export const metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description:
    "Read the Swarikaro Website Privacy Policy to learn how we collect, use, protect, retain, and share information submitted through our website, contact forms, and partner inquiry forms.",
  metadataBase: new URL(SITE_URL),
    keywords: [
    "Swarikaro Privacy Policy",
    "Privacy Policy",
    "Website Privacy Policy",
    "Swarikaro Data Protection",
    "Partner Inquiry Privacy",
    "Vehicle Rental Privacy",
    "Mobility Platform Privacy",
  ],
  openGraph: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description:
      "Learn how ${SITE_NAME} protects personal information collected through the website.",
    url: `${SITE_URL}/privacy-policy`,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Privacy Policy`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Swarikaro",
    description:
      "Read the ${SITE_NAME} Website Privacy Policy for website and partner inquiry data practices.",
    images: [OG_IMAGE_URL],
  },
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
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

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: `${SITE_URL}` },
    { name: "Privacy Policy", item: `${SITE_URL}/privacy-policy` },
  ]);
const organizationSchema = buildOrganizationSchema();
  return (
    <>
     <JsonLd
  data={[
    breadcrumbSchema,
    organizationSchema,
  ]}
/>
      <PrivacyPolicy />
    </>
  );
}
