import type { BlogState } from "@/types/blog";
import { getBlogCity } from "./cities";
import { getDestinationPostSlug } from "./destinations";
import { getStateHeroImage } from "./images";
import statesJson from "./states.json";

export const blogStates: BlogState[] = (statesJson as BlogState[]).map(
  (state) => ({
    ...state,
    hero: {
      ...state.hero,
      // Resolve the hero image dynamically via the ImageKit naming convention.
      image: getStateHeroImage(state.slug),
    },
  }),
);

export function getBlogState(slug: string): BlogState | undefined {
  return blogStates.find((state) => state.slug === slug);
}

/**
 * Resolves the top N locations for a state from its `popularCities` list.
 * Each entry links to the destination post when one exists, otherwise the city page.
 */
export function getStateTopLocations(stateSlug: string, count = 3) {
  const state = getBlogState(stateSlug);
  if (!state) return [];

  return state.popularCities
    .map((citySlug) => {
      const city = getBlogCity(citySlug);
      if (!city) return null;

      const postSlug = getDestinationPostSlug(city.slug);
      return {
        name: city.name,
        image: city.image ?? "",
        href: postSlug
          ? `/blog/${postSlug}`
          : `/blog/${city.stateSlug}/${city.slug}`,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .slice(0, count);
}
