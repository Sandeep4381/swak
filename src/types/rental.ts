import type { LucideIcon } from "lucide-react";

/** Rental service type, matching the URL segment. */
export type RentalType = "car-rental" | "bike-rental" | "scooter-rental";

/** A vehicle in the cross-category "Choose Your Vehicle" catalogue. */
export interface CatalogueVehicle {
  name: string;
  category: "Car" | "Bike" | "Scooty";
  /** Category sub-label, e.g. "MUV", "SUV", "350cc". */
  type: string;
  image: string;
  imageAlt: string;
  description: string;
  specs: string[];
  transmission: string;
  href: string;
}

export interface RentalService {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  /** Longer rich description shown on the service detail page. */
  longDescription?: string;
  /** How it works steps (service detail page). */
  steps?: string[];
  /** Additional highlights for the service detail page. */
  highlights?: string[];
  /** Documents required for this service. */
  documents?: string[];
  /** SEO intro paragraph for the service detail page. */
  intro?: string;
  /** Extra SEO paragraphs for the service detail page. */
  seoContent?: string[];
  /** Comparison rows vs another service ("Self Drive vs Chauffeur"). */
  compare?: {
    vs: string;
    rows: { self: string; other: string }[];
    otherHref: string;
  };
}

export interface RentalVehicle {
  name: string;
  category: string;
  image: string;
  imageAlt: string;
  seats?: string;
  luggage?: string;
  mileage?: string;
  transmission?: string;
  badge?: string;
}

export interface RentalWhyItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface RentalFaq {
  question: string;
  answer: string;
}

export interface RentalSeo {
  title: string;
  description: string;
  keywords: string[];
  /** H1 used in the hero. */
  h1: string;
  /** Optional accent phrase within the H1, rendered highlighted. */
  h1Accent?: string;
  /** Hero tagline / badge. */
  badge: string;
  heroSubtitle: string;
}

export interface RentalConfig {
  type: RentalType;
  label: string;
  labelShort: string;
  singular: string;
  /** Hero image (CDN). */
  heroImage: string;
  heroImageAlt: string;
  heroMobileImage?: string;
  /** Mobile hero image (used by the cinematic hero). */
  heroMob?: string;
  seo: RentalSeo;
  stats: { value: string; label: string }[];
  services: RentalService[];
  popularVehicles: RentalVehicle[];
  whyChoose: RentalWhyItem[];
  popularDestinations: { city: string; state: string }[];
  faqs: RentalFaq[];
  availableIn: string[];
}
