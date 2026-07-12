import {
  buildBreadcrumbSchema,
  JsonLd,
} from "@/components/seo/structured-data";
import PrivacyPolicy from "./privacy-policy";

export const metadata = {
  title: "Privacy Policy | Swarikaro",
  description:
    "Read the Swarikaro Website Privacy Policy to learn how we collect, use, protect, retain, and share information submitted through our website, contact forms, and partner inquiry forms.",
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
    title: "Privacy Policy | Swarikaro",
    description:
      "Learn how Swarikaro protects personal information collected through the website.",
    url: "https://www.swarikaro.com/privacy-policy",
    siteName: "Swarikaro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Swarikaro Privacy Policy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Swarikaro",
    description:
      "Read the Swarikaro Website Privacy Policy for website and partner inquiry data practices.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://swarikaro.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: "https://swarikaro.com" },
    { name: "Privacy Policy", item: "https://swarikaro.com/privacy-policy" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PrivacyPolicy />
    </>
  );
}
