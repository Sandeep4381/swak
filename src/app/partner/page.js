import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  JsonLd,
} from "@/components/seo/structured-data";
import {
  SITE_NAME,
  SITE_URL,
  OG_IMAGE_URL,
} from "@/lib/metadata";
import { Benefits } from "@/components/partner/Benefits";
import { PartnerFaq } from "@/components/partner/faq_partner";
import { PartnerInterestForm } from "@/components/partner/form_partner";
import { Hero } from "@/components/partner/Hero_part";
import { HowItWorks } from "@/components/partner/HowWorks";
import { WhyPartner } from "@/components/partner/WhyPartner";

export const metadata = {
  title: "Become a Partner | Swarikaro",
  description:
    "Partner with Swarikaro and earn by listing your vehicle. Join our growing network of trusted mobility partners across India.",
  metadataBase: new URL(SITE_URL),
    keywords: [
  "Swarikaro Partner",
  "Become a Partner",
  "Vehicle Rental Partner",
  "Car Rental Partner",
  "Bike Rental Partner",
  "Scooter Rental Partner",
  "Fleet Partner",
  "Travel Partner",
  "Earn with Your Vehicle",
  "Vehicle Owner",
],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `Become a Partner | ${SITE_NAME}`,
    description:
      "Turn your vehicle into an earning opportunity. Join Swarikaro's trusted partner network.",
    url: `${SITE_URL}/partner`,
siteName: SITE_NAME,

    images: [
      {
        url: OG_IMAGE_URL, // Place this image in /public
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
    title: `Become a Partner | ${SITE_NAME}`,
    description:
      "List your vehicle on Swarikaro and start earning with trusted rentals.",
  images: [OG_IMAGE_URL],
  },
  alternates: {
     canonical: `${SITE_URL}/partner`,
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

export default function App() {
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", item: SITE_URL },
  { name: "Partner", item: `${SITE_URL}/partner` },
]);
  const serviceSchema = buildServiceSchema({
    name: "Swarikaro Partner Program",
    description:
      "List your vehicle on Swarikaro, manage bookings and grow your vehicle business with trusted mobility customers.",
    url: `${SITE_URL}/partner`,
    areaServed: "India",
  });
  const faqSchema = buildFaqSchema([
    {
    question: "Who can become a Swarikaro Partner?",
    answer:
      "Vehicle owners, rental shops, fleet operators and eligible mobility service providers can join, subject to verification.",
  },
  {
    question: "Can I list multiple vehicles?",
    answer:
      "Yes. You can add and manage multiple vehicles from your Partner account.",
  },
  {
    question: "When do I receive payments?",
    answer:
      "Payments are settled according to Swarikaro's payout schedule after successful booking completion.",
  },
  {
    question: "Do I need a physical shop?",
    answer:
      "No. Individual vehicle owners as well as registered rental businesses can become partners, subject to eligibility and verification.",
  },
  {
    question: "Is document verification mandatory?",
    answer:
      "Yes. Business and vehicle verification helps maintain a trusted and secure platform for everyone.",
  },
  ]);

  return (
    <>
     <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Hero />
        <PartnerInterestForm modal={false} />
        <WhyPartner />
        <HowItWorks />
        <Benefits />
        <PartnerFaq />
      </div>
    </>
  );
}
