import { SITE_NAME, SITE_URL } from "@/lib/metadata";
import type { RentalConfig } from "@/types/rental";

export function buildRentalSchemas(config: RentalConfig) {
  const url = `${SITE_URL}/${config.type}`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: config.label,
        item: url,
      },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${config.label} in India`,
    description: config.seo.description,
    url,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "India",
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faqItem) => ({
      "@type": "Question",
      name: faqItem.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqItem.answer,
      },
    })),
  };

  return [breadcrumb, service, faq];
}
