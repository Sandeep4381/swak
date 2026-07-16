import {
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  JsonLd,
} from "@/components/seo/structured-data";
import TermsContent from "./TermsContent";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  OG_IMAGE_URL,
} from "@/lib/metadata";
export const metadata = {
  title: "Terms & Conditions | Swarikaro",
  description:
    "Read the Terms & Conditions of Swarikaro. Learn about website usage, user responsibilities, eligibility, intellectual property, privacy, limitations of liability, and other legal information.",
metadataBase: new URL(SITE_URL),
  keywords: [
    "Swarikaro Terms",
    "Terms and Conditions",
    "Vehicle Rental Terms",
    "Website Terms",
    "Swarikaro Policy",
    "Legal",
    "Rental Platform",
    "User Agreement",
  ],

  openGraph: {
    title: "Terms & Conditions | Swarikaro",
    description:
      "Review the official Terms & Conditions for using the Swarikaro website and services.",
    url: "https://www.swarikaro.com/terms-and-condition",
    siteName: "Swarikaro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Swarikaro Terms & Conditions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Swarikaro",
    description: "Read the official Terms & Conditions of Swarikaro.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://swarikaro.com/terms-and-condition",
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

export default function TermsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: "https://swarikaro.com" },
    {
      name: "Terms & Conditions",
      item: "https://swarikaro.com/terms-and-condition",
    },
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
      <TermsContent />
    </>
  );
}
