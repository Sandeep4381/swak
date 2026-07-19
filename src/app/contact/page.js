import ContactForm from "@/components/contact/ContactForm";
import {
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  JsonLd,
} from "@/components/seo/structured-data";
import {
  SITE_NAME,
  SITE_URL,
  OG_IMAGE_URL,
} from "@/lib/metadata";


export const metadata = {
 title: "Contact Us | Swarikaro",
  description:
    "Get in touch with Swarikaro for support, partnerships, business enquiries, and mobility solutions across India.",
  metadataBase: new URL(SITE_URL),
    alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
   title: `Contact Us | ${SITE_NAME}`,
    description:
      "Get in touch with Swarikaro for support, partnerships, business enquiries, and mobility solutions across India.",
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Contact Swarikaro",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
   title: `Contact Us | ${SITE_NAME}`,
    description:
      "Get in touch with Swarikaro for support, partnerships, business enquiries, and mobility solutions across India.",
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

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: SITE_URL },
    { name: "Contact", item: `${SITE_URL}/contact` },
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
      <main
        id="contact"
        className="relative overflow-hidden  py-20"
      >
        {/* Background Effects */}
         <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--foreground)]/5 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-5 text-4xl font-bold text-[#29566A] lg:text-5xl">
  Contact <span className="text-orange-500">Swarikaro</span>
</h1>

<p className="mt-4 text-xl font-semibold text-slate-600">
  We're Here To Help You
</p>

            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-orange-500" />

            <p className="mt-3 text-lg leading-8 text-slate-600">
              Have questions about Swarikaro, our services, or partnership
              opportunities? We'd love to hear from you. Reach out to our team
              and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Content */}
          <div className="mt-16 flex justify-center">
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}
