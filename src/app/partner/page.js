import {
  buildBreadcrumbSchema,
  buildServiceSchema,
  JsonLd,
} from "@/components/seo/structured-data";
import { Benefits } from "@/components/whySwariKaro/Benefits";
import { PartnerFaq } from "@/components/whySwariKaro/faq_partner";
import { PartnerInterestForm } from "@/components/whySwariKaro/form_partner";
import { Hero } from "@/components/whySwariKaro/Hero_part";
import { HowItWorks } from "@/components/whySwariKaro/HowWorks";
import { WhyPartner } from "@/components/whySwariKaro/WhyPartner";

export const metadata = {
  title: "Become a Partner | Swarikaro",
  description:
    "Partner with Swarikaro and earn by listing your vehicle. Join our growing network of trusted mobility partners across India.",
  keywords: [
    "Swarikaro Partner",
    "Vehicle Partner",
    "Car Rental Partner",
    "Taxi Partner",
    "Fleet Partner",
    "Vehicle Owner",
    "Earn with Car",
    "Become a Partner",
  ],
  openGraph: {
    title: "Become a Partner | Swarikaro",
    description:
      "Turn your vehicle into an earning opportunity. Join Swarikaro's trusted partner network.",
    url: "https://swarikaro.com/partner",
    siteName: "Swarikaro",
    images: [
      {
        url: "/og-image.png", // Place this image in /public
        width: 1200,
        height: 630,
        alt: "Become a Partner - Swarikaro",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Partner | Swarikaro",
    description:
      "List your vehicle on Swarikaro and start earning with trusted rentals.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://swarikaro.com/partner",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function App() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: "https://swarikaro.com" },
    { name: "Partner", item: "https://swarikaro.com/partner" },
  ]);
  const serviceSchema = buildServiceSchema({
    name: "Swarikaro Partner Program",
    description:
      "List your vehicle on Swarikaro, manage bookings and grow your vehicle business with trusted mobility customers.",
    url: "https://swarikaro.com/partner",
    areaServed: "India",
  });

  return (
    <>
      <JsonLd data={[breadcrumbSchema, serviceSchema]} />
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Hero />
        <PartnerInterestForm />
        <WhyPartner />
        <HowItWorks />
        <Benefits />
        <PartnerFaq />
      </div>
    </>
  );
}
