import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  JsonLd,
} from "@/components/seo/structured-data";
import FAQContent from "./FAQContent";

export const metadata = {
  title: "FAQ | Swarikaro - Frequently Asked Questions",
  description:
    "Find answers to the most frequently asked questions about Swarikaro vehicle rentals, bookings, payments, vehicle owners, rental shops and customer support.",

  keywords: [
    "Swarikaro FAQ",
    "Vehicle Rental FAQ",
    "Car Rental",
    "Bike Rental",
    "Scooty Rental",
    "Rental Support",
    "Vehicle Booking",
    "Self Drive",
    "Rental Shop",
  ],

  alternates: {
    canonical: "https://swarikaro.com/faq",
  },

  openGraph: {
    title: "Frequently Asked Questions | Swarikaro",
    description:
      "Everything you need to know about renting and listing vehicles on Swarikaro.",
    url: "https://www.swarikaro.com/faq",
    siteName: "Swarikaro",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Swarikaro FAQ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Swarikaro",
    description: "Answers to common questions about Swarikaro rentals.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQPage() {
  const faqSchema = buildFaqSchema([
    {
      question: "What is Swarikaro?",
      answer:
        "Swarikaro is a vehicle rental platform that connects vehicle owners, rental shops and customers for hourly and daily rentals.",
    },
    {
      question: "How can I rent a vehicle?",
      answer:
        "Browse available vehicles, select your preferred vehicle, upload required documents and confirm your booking.",
    },
    {
      question: "Can I rent a vehicle without a driver?",
      answer:
        "Yes, depending on the owner's preferences and vehicle availability.",
    },
    {
      question: "What documents are required?",
      answer:
        "A valid Driving License, Aadhaar Card and any other verification requested by the owner.",
    },
    {
      question: "How can I list my vehicle?",
      answer:
        "Create an owner account, submit vehicle details and complete verification to start earning.",
    },
    {
      question: "How will I receive payments?",
      answer:
        "Payments are securely transferred to your registered bank account after booking completion.",
    },
    {
      question: "How do rental shops manage bookings?",
      answer:
        "Rental shops receive a dashboard to manage vehicles, bookings and customers easily.",
    },
    {
      question: "Is insurance provided?",
      answer: "Insurance depends on the listed vehicle and owner policy.",
    },
    {
      question: "How can I contact customer support?",
      answer: "Reach us via phone, email or the Contact Us page.",
    },
  ]);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: "https://swarikaro.com" },
    { name: "FAQ", item: "https://swarikaro.com/faq" },
  ]);

  return (
    <>
      <JsonLd data={[breadcrumbSchema, faqSchema]} />

      <FAQContent />
    </>
  );
}
