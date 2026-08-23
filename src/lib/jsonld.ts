import type { CityData } from "@/types/city";
import { SITE_NAME, SITE_URL } from "@/lib/metadata";

const company = {
  name: SITE_NAME,
  url: SITE_URL,
  email: "support@swarikaro.com",
  phone: "+91-0000000000",
};

export function buildCityJsonLd(city: CityData) {
  const baseUrl = company.url;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: baseUrl,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: company.email,
        telephone: company.phone,
        areaServed: "IN",
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${city.name} Vehicle Rentals - ${company.name}`,
    url: `${baseUrl}/${city.slug}`,
    description: city.seo.description,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: `${city.name}`, item: `${baseUrl}/${city.slug}` },
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRental"],
    name: `${company.name} - ${city.name}`,
    url: `${baseUrl}/${city.slug}`,
    description: city.seo.description,
    areaServed: { "@type": "City", name: city.name },
    priceRange: "INR",
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Vehicle Rental Services in ${city.name}`,
    description: city.seo.description,
    url: `${baseUrl}/${city.slug}`,
    provider: { "@type": "Organization", name: company.name, url: baseUrl },
    areaServed: { "@type": "City", name: city.name },
  };

  const faq = city.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: city.faqs.map((q) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: { "@type": "Answer", text: q.answer },
        })),
      }
    : null;

  return [organization, website, breadcrumb, localBusiness, service, faq].filter(Boolean);
}
