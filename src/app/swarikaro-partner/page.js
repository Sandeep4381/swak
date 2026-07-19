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
import { Earlyprogram } from "@/components/partner/Earlyprogram";
import { PartnerFaq } from "@/components/partner/faq_partner";
import { PartnerInterestForm } from "@/components/partner/form_partner";
import { Hero } from "@/components/partner/Hero_part";
import {WhyBusinessChoseSwarikaro} from "@/components/partner/why_business_chose_swarikaro";
import { HowItWorks } from "@/components/partner/HowWorks";
import { WhyPartner } from "@/components/partner/WhyPartner";

export const metadata = {
  title: "Become a Swarikaro Partner | Grow Your Vehicle Rental Business",
  description:
    "Become a Swarikaro Partner and grow your vehicle rental business. List bikes, scooters, cars, and fleets, manage bookings, track earnings, and connect with customers through the Swarikaro Partner App.",
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
    title: "Become a Swarikaro Partner | Grow Your Vehicle Rental Business",
    description:
      "Become a Swarikaro Partner and grow your vehicle rental business. List bikes, scooters, cars, and fleets, manage bookings, track earnings, and connect with customers through the Swarikaro Partner App.",
    url: `${SITE_URL}/swarikaro-partner`,
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
    title: "Become a Swarikaro Partner | Grow Your Vehicle Rental Business",
    description:
      "Become a Swarikaro Partner and grow your vehicle rental business. List bikes, scooters, cars, and fleets, manage bookings, track earnings, and connect with customers through the Swarikaro Partner App.",
  images: [OG_IMAGE_URL],
  },
  alternates: {
     canonical: `${SITE_URL}/swarikaro-partner`,
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
  { name: "Partner", item: `${SITE_URL}/swarikaro-partner` },
]);
  const serviceSchema = buildServiceSchema({
    name: "Become a Swarikaro Partner | Grow Your Vehicle Rental Business",
    description:
      "Become a Swarikaro Partner and grow your vehicle rental business. List bikes, scooters, cars, and fleets, manage bookings, track earnings, and connect with customers through the Swarikaro Partner App.",
    url: `${SITE_URL}/swarikaro-partner`,
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
       
        <WhyPartner />
        <Earlyprogram/>
         <PartnerInterestForm modal={false} />
        <HowItWorks />
        <Benefits />
        <WhyBusinessChoseSwarikaro/>
        <PartnerFaq />
      </div>
    </>
  );
}
