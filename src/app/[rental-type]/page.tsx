import type { Metadata } from "next";
import { notFound } from "next/navigation";

import RentalAvailability from "@/components/rental/RentalAvailability";
import RentalFaqs from "@/components/rental/RentalFaqs";
import RentalHero from "@/components/rental/RentalHero";
import RentalPopularDestinations from "@/components/rental/RentalPopularDestinations";
import RentalPopularVehicles from "@/components/rental/RentalPopularVehicles";
import RentalServices from "@/components/rental/RentalServices";
import RentalVehicleCatalogue from "@/components/rental/RentalVehicleCatalogue";
import RentalWhyChoose from "@/components/rental/RentalWhyChoose";

import { getRentalConfig, RENTAL_CONFIGS } from "@/data/rentals";
import { SITE_URL } from "@/lib/metadata";
import { buildRentalSchemas } from "@/lib/rentals/jsonld";
import { redirectRentalAlias, redirectRootKeyword } from "@/lib/root-redirect";
import { JsonLd } from "@/lib/seo";
import type { RentalType } from "@/types/rental";

interface Props {
  params: Promise<{ "rental-type": string }>;
}

export function generateStaticParams() {
  return Object.keys(RENTAL_CONFIGS).map((type) => ({
    "rental-type": type,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { "rental-type": type } = await params;

  if (!(type in RENTAL_CONFIGS)) return {};

  const config = RENTAL_CONFIGS[type as RentalType];
  const url = `${SITE_URL}/${config.type}`;

  return {
    title: config.seo.title,
    description: config.seo.description,
    metadataBase: new URL(SITE_URL),
    keywords: config.seo.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: config.seo.title,
      description: config.seo.description,
      url,
      siteName: "Swarikaro",
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function RentalTypePage({ params }: Props) {
  const { "rental-type": type } = await params;

  // Valid rental type? Render the rental page.
  if (type in RENTAL_CONFIGS) {
    const config = getRentalConfig(type as RentalType);

    return (
      <>
        <JsonLd data={buildRentalSchemas(config)} />

        <RentalHero config={config} />
        <RentalVehicleCatalogue />
        <RentalServices config={config} />
        <RentalPopularVehicles config={config} />
        <RentalWhyChoose config={config} />
        <RentalPopularDestinations config={config} />
        <RentalFaqs config={config} />
        <RentalAvailability config={config} />
      </>
    );
  }

  // Otherwise fall back to rental-alias and blog keyword redirects so
  // `/car-renter` -> `/car-rental` and `/manali` -> blog still work.
  if (redirectRentalAlias([type])) {
    return null;
  }

  if (redirectRootKeyword([type])) {
    return null;
  }

  notFound();
}
