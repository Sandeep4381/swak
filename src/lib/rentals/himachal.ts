import { blogCities, getBlogCity, getStateTopLocations } from "@/data/blog";

export interface RentalCity {
  slug: string;
  name: string;
  description: string;
  tagline: string;
  image: string;
  state: string;
  locations: { slug: string; name: string; description: string }[];
}

export interface CityPlace {
  slug: string;
  name: string;
  description: string;
  image?: string;
}

export interface CityRoute {
  from: string;
  to: string;
  distanceKm: number;
  /** Approx drive time, e.g. "45 min". */
  duration: string;
  note?: string;
}

export interface CityItineraryDay {
  day: number;
  title: string;
  stops: string[];
}

export interface CityItinerary {
  days: number;
  title: string;
  plan: CityItineraryDay[];
}

/** Extend `RentalType` city lookup with real Himachal blog data. */
const HIMACHAL_STATE = "himachal-pradesh";

/**
 * Build a rental-focused city record from the existing Himachal blog data,
 * so the rental sub-routes reuse real content and images already in the repo.
 */
export function getRentalCity(slug: string): RentalCity | undefined {
  const city = getBlogCity(slug);
  if (!city || city.stateSlug !== HIMACHAL_STATE) return undefined;

  return {
    slug: city.slug,
    name: city.name,
    description: city.description,
    tagline: city.tagline,
    image: city.image ?? "",
    state: "Himachal Pradesh",
    locations: city.locations.map((location) => ({
      slug: location.slug,
      name: location.name,
      description: location.description,
    })),
  };
}

/** All Himachal cities available for rentals, in the blog data order. */
export function getRentalCities(): RentalCity[] {
  return blogCities
    .filter((city) => city.stateSlug === HIMACHAL_STATE)
    .map((city) => getRentalCity(city.slug))
    .filter((city): city is RentalCity => city !== undefined);
}

/** Top Himachal cities for the "Popular Destinations" / pickup listings. */
export function getRentalTopCities(count = 6): RentalCity[] {
  const popular = getStateTopLocations(HIMACHAL_STATE, count).map(
    (item) => item.name,
  );
  const cities = getRentalCities();
  const ordered: RentalCity[] = [];

  for (const name of popular) {
    const match = cities.find((c) => c.name === name);
    if (match) ordered.push(match);
  }
  for (const city of cities) {
    if (!ordered.includes(city)) ordered.push(city);
  }

  return ordered.slice(0, count);
}

/* ============================================================
   CITY PLACES — "Places to Visit by Car"
   Uses real blog locations where available, extended with the
   iconic spots travellers drive to around each city.
============================================================ */

const CITY_PLACES: Record<string, CityPlace[]> = {
  manali: [
    {
      slug: "hadimba-temple",
      name: "Hadimba Devi Temple",
      description: "Ancient temple surrounded by cedar forests.",
      image: `${process.env.IMAGE_URL?.replace(/\/+$/, "") ?? "https://ik.imagekit.io/swarikaro4/Swarikar_website/Blogs"}/himachal-pradesh/manali.jpg`,
    },
    {
      slug: "old-manali",
      name: "Old Manali",
      description:
        "Cafés, shops, walking routes and a relaxed mountain atmosphere.",
    },
    {
      slug: "mall-road",
      name: "Mall Road",
      description: "Shopping, cafés and the central area for visitors.",
    },
    {
      slug: "vashisht",
      name: "Vashisht",
      description: "Village experience, temple and hot springs.",
    },
    {
      slug: "solang-valley",
      name: "Solang Valley",
      description: "Mountain scenery and seasonal adventure activities.",
    },
    {
      slug: "naggar",
      name: "Naggar",
      description: "Castle, village scenery and nearby attractions.",
    },
  ],
};

const CITY_ROUTES: Record<string, CityRoute[]> = {
  manali: [
    { from: "Manali", to: "Solang Valley", distanceKm: 14, duration: "45 min" },
    { from: "Manali", to: "Naggar", distanceKm: 21, duration: "45 min" },
    {
      from: "Manali",
      to: "Sissu",
      distanceKm: 55,
      duration: "1.5 hrs",
      note: "Via Atal Tunnel",
    },
    { from: "Manali", to: "Atal Tunnel", distanceKm: 33, duration: "1 hr" },
    { from: "Manali", to: "Vashisht", distanceKm: 4, duration: "15 min" },
    { from: "Manali", to: "Kullu", distanceKm: 40, duration: "1 hr 15 min" },
  ],
};

const CITY_ITINERARIES: Record<string, CityItinerary[]> = {
  manali: [
    {
      days: 2,
      title: "2 Days in Manali",
      plan: [
        {
          day: 1,
          title: "Local Manali",
          stops: ["Hadimba Temple", "Old Manali", "Mall Road"],
        },
        {
          day: 2,
          title: "Solang Valley",
          stops: ["Solang Valley", "Nehru Kund", "Vashisht"],
        },
      ],
    },
    {
      days: 3,
      title: "3 Days in Manali",
      plan: [
        {
          day: 1,
          title: "Local Manali",
          stops: ["Hadimba Temple", "Old Manali", "Mall Road"],
        },
        {
          day: 2,
          title: "Adventure Day",
          stops: ["Solang Valley", "Vashisht"],
        },
        { day: 3, title: "Heritage Day", stops: ["Naggar", "Naggar Castle"] },
      ],
    },
    {
      days: 5,
      title: "5 Days in Manali",
      plan: [
        {
          day: 1,
          title: "Local Manali",
          stops: ["Hadimba Temple", "Old Manali", "Mall Road"],
        },
        {
          day: 2,
          title: "Culture + Nature",
          stops: ["Vashisht", "Nehru Kund", "Jogini Falls"],
        },
        {
          day: 3,
          title: "Solang Valley",
          stops: ["Solang Valley", "Skiing / Paragliding"],
        },
        {
          day: 4,
          title: "Atal Tunnel + Sissu",
          stops: ["Atal Tunnel", "Sissu", "Lahaul Valley"],
        },
        {
          day: 5,
          title: "Naggar",
          stops: ["Naggar", "Naggar Castle", "Trip back"],
        },
      ],
    },
  ],
};

/** Places to visit by car for a city (falls back to its blog locations). */
export function getCityPlaces(citySlug: string): CityPlace[] {
  const curated = CITY_PLACES[citySlug];
  if (curated) return curated;

  const city = getRentalCity(citySlug);
  return (city?.locations ?? []).map((l) => ({
    slug: l.slug,
    name: l.name,
    description: l.description,
  }));
}

/** Popular road-trip routes from a city (falls back to its locations). */
export function getCityRoutes(citySlug: string): CityRoute[] {
  const curated = CITY_ROUTES[citySlug];
  if (curated) return curated;

  const city = getRentalCity(citySlug);
  return (city?.locations ?? []).map((l) => ({
    from: city?.name ?? citySlug,
    to: l.name,
    distanceKm: 0,
    duration: "varies",
  }));
}

/** 2/3/5-day trip ideas for a city. */
export function getCityItineraries(citySlug: string): CityItinerary[] {
  return CITY_ITINERARIES[citySlug] ?? [];
}
