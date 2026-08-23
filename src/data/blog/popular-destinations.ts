import popularDestinationsJson from "./popular-destinations.json";

interface PopularDestinationsData {
  cities: string[];
}

const popularDestinationsData =
  popularDestinationsJson as PopularDestinationsData;

/** City slugs for the "Popular Destinations" section, ordered as listed in data. */
export function getPopularDestinationSlugs(): string[] {
  return popularDestinationsData.cities ?? [];
}
