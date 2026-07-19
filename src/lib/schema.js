import {
  LOGO_URL,
  OG_IMAGE_URL,
  SITE_NAME,
  SITE_URL,
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
} from "./metadata";

const SOCIAL_URLS = [
  "https://www.facebook.com/swarikaro?rdid=WIECxs7eK2tgUxg5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Ddw5v6teS%2F#",
  "https://www.instagram.com/swarikaro?igsh=OGFwdHMwb2V4bmlm",
  "https://www.linkedin.com/company/swarikaro/",
  "https://www.youtube.com/@swarikaro",
];

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    sameAs: SOCIAL_URLS,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SUPPORT_EMAIL,
        telephone: SUPPORT_PHONE,
        availableLanguage: ["en", "hi"],
        areaServed: "IN",
      },
    ],
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRental"],
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    image: OG_IMAGE_URL,
    email: SUPPORT_EMAIL,
    telephone: SUPPORT_PHONE,
    priceRange: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Electronic City, Sector 62",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: " Swarikaro is India's location-first vehicle rental platform. Discover bikes, scooters, cars, buses and more from trusted local partners with smart radius search, advance booking and flexible rental options.",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function buildMobileApplicationSchema({
  name,
  description,
  applicationCategory,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name,
    operatingSystem: "Android, iOS",
    applicationCategory,
    description,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function buildFaqSchema(questions) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((question) => ({
      "@type": "Question",
      name: question.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: question.answer,
      },
    })),
  };
}

export function buildServiceSchema({
  name,
  description,
  url,
  areaServed = "India",
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed,
  };
}

export function buildArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  image,
  authorName = SITE_NAME,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    image,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
  };
}

export function buildPersonSchema({ name, url, image, jobTitle, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url,
    image,
    jobTitle,
    description,
  };
}
