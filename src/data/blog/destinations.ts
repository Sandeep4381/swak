import type { BlogDestination } from "@/types/blog";
import { blogPosts } from "./posts";
import { getCityHeroImage } from "./images";

/**
 * Blog destinations — derived from posts.json.
 * A destination is any post that carries a `locationSlug` or `citySlug`,
 * and the post slug is its canonical guide URL.
 */

function titleCase(slug: string): string {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

/** Map a city/location slug to the post that covers it, if any. */
export function getDestinationPostSlug(slug: string): string | undefined {
  return blogPosts.find(
    (post) => post.citySlug === slug || post.locationSlug === slug,
  )?.slug;
}

/** Map a state slug to the state pillar post, if any. */
export function getStatePostSlug(stateSlug: string): string | undefined {
  return blogPosts.find(
    (post) => post.stateSlug === stateSlug && post.isGuide,
  )?.slug;
}

export const blogDestinations: BlogDestination[] = (() => {
  const seen = new Set<string>();
  const destinations: BlogDestination[] = [];
  for (const post of blogPosts) {
    const slug = post.locationSlug ?? post.citySlug;
    if (!slug || seen.has(slug)) continue;
    seen.add(slug);
    destinations.push({
      slug,
      name: titleCase(slug),
      image: getCityHeroImage(post.stateSlug, slug),
      category: post.category,
    });
  }
  return destinations;
})();
