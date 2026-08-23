import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RentalCityContent from "@/components/rental/RentalCityContent";
import RentalLocationContent from "@/components/rental/RentalLocationContent";
import RentalServiceContent from "@/components/rental/RentalServiceContent";
import { getRentalConfig, RENTAL_CONFIGS } from "@/data/rentals";
import { SITE_URL } from "@/lib/metadata";
import { getRentalCity } from "@/lib/rentals/himachal";
import type { RentalService, RentalType } from "@/types/rental";

interface Props {
  params: Promise<{ "rental-type": string; sub: string[] }>;
}

/** Rendered on demand — nested rental paths map to city / service / location. */
export function generateStaticParams() {
  return [];
}

/** Normalise a segment for matching (case-insensitive). */
function norm(segment: string): string {
  return segment.toLowerCase();
}

function titleCase(segment: string): string {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function describePath(
  type: RentalType,
  sub: string[],
): {
  service?: RentalService;
  city: string;
  location?: string;
} {
  const config = getRentalConfig(type);
  const serviceSlugs = new Set(config.services.map((s) => s.slug));
  const segments = sub.map(norm);

  const serviceSegment = segments.find((s) => serviceSlugs.has(s));
  const service = serviceSegment
    ? config.services.find((item) => item.slug === serviceSegment)
    : undefined;

  const nonService = segments.filter((s) => s !== "service");
  const city = nonService[0];
  const location = nonService[1];

  return { service, city, location };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { "rental-type": type, sub } = await params;

  if (!(type in RENTAL_CONFIGS) || sub.length === 0) return {};

  const rentalType = type as RentalType;
  const config = getRentalConfig(rentalType);
  const { service, city, location } = describePath(rentalType, sub);
  if (!city) return {};

  const cityData = getRentalCity(city);
  const cityName = cityData?.name ?? titleCase(city);
  const path = `/${type}/${sub.join("/")}`;
  const url = `${SITE_URL}${path}`;

  if (service && location) {
    const locationName = titleCase(location);
    return {
      title: `${service.name} ${config.label} in ${locationName}, ${cityName} | Swarikaro`,
      description: `${service.name} ${config.label.toLowerCase()} in ${locationName}, ${cityName} with Swarikaro.`,
      metadataBase: new URL(SITE_URL),
      alternates: { canonical: url },
      openGraph: {
        title: `${service.name} ${config.label} in ${locationName}, ${cityName} | Swarikaro`,
        description: `${service.name} ${config.label.toLowerCase()} in ${locationName}, ${cityName}.`,
        url,
        siteName: "Swarikaro",
        locale: "en_IN",
        type: "website",
      },
    };
  }

  if (service) {
    return {
      title: `${service.name} ${config.label} in ${cityName} | Swarikaro`,
      description:
        service.longDescription ??
        `${service.name} ${config.label.toLowerCase()} in ${cityName} with Swarikaro.`,
      metadataBase: new URL(SITE_URL),
      alternates: { canonical: url },
      openGraph: {
        title: `${service.name} ${config.label} in ${cityName} | Swarikaro`,
        description:
          service.longDescription ??
          `${service.name} ${config.label.toLowerCase()} in ${cityName}.`,
        url,
        siteName: "Swarikaro",
        locale: "en_IN",
        type: "website",
      },
    };
  }

  if (location) {
    const locationName = titleCase(location);
    return {
      title: `${config.label} in ${locationName}, ${cityName} | Swarikaro`,
      description: `Pick up ${config.label.toLowerCase()} in ${locationName}, ${cityName} with Swarikaro.`,
      metadataBase: new URL(SITE_URL),
      alternates: { canonical: url },
      openGraph: {
        title: `${config.label} in ${locationName}, ${cityName} | Swarikaro`,
        description: `Pick up ${config.label.toLowerCase()} in ${locationName}, ${cityName}.`,
        url,
        siteName: "Swarikaro",
        locale: "en_IN",
        type: "website",
      },
    };
  }

  return {
    title: `${config.label} in ${cityName} | Swarikaro`,
    description: `Book ${config.label.toLowerCase()} in ${cityName} with Swarikaro. Choose your vehicle and service.`,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: `${config.label} in ${cityName} | Swarikaro`,
      description: `Book ${config.label.toLowerCase()} in ${cityName} with Swarikaro.`,
      url,
      siteName: "Swarikaro",
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function RentalSubRoutePage({ params }: Props) {
  const { "rental-type": type, sub } = await params;

  if (!(type in RENTAL_CONFIGS) || sub.length === 0) notFound();

  const rentalType = type as RentalType;
  const { service, city, location } = describePath(rentalType, sub);
  if (!city) notFound();

  // Service page (optionally scoped to a location).
  if (service) {
    return (
      <RentalServiceContent
        type={rentalType}
        service={service}
        city={city}
        location={location}
      />
    );
  }

  // Location page (city + location).
  if (location) {
    return (
      <RentalLocationContent
        type={rentalType}
        city={city}
        location={location}
      />
    );
  }

  // City page.
  return <RentalCityContent type={rentalType} city={city} />;
}
