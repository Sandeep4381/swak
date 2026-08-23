import type { BlogCity } from "@/types/blog";
import { blogPosts } from "./posts";
import { getCityHeroImage } from "./images";

/**
 * Blog cities — derived entirely from posts.json.
 * Every unique `citySlug` found in the posts becomes a BlogCity.
 * Images resolve via the ImageKit naming convention (`{slug}-hero.webp`).
 */

function titleCase(slug: string): string {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function cityFromPosts(citySlug: string, stateSlug: string): BlogCity {
  const posts = blogPosts.filter(
    (post) => post.citySlug === citySlug && post.stateSlug === stateSlug,
  );
  const sample = posts[0];

  // Locations = unique locationSlugs from the city's posts.
  const locations = [
    ...new Set(
      posts
        .map((post) => post.locationSlug)
        .filter((slug): slug is string => Boolean(slug)),
    ),
  ].map((slug) => ({
    slug,
    name: titleCase(slug),
    description: sample?.excerpt ?? "",
    image: getCityHeroImage(stateSlug, slug),
  }));

  return {
    slug: citySlug,
    name: titleCase(citySlug),
    tagline: sample?.excerpt ?? "",
    description: sample?.excerpt ?? "",
    image: getCityHeroImage(stateSlug, citySlug),
    blogCount: posts.length,
    stateSlug,
    popularTopics: [],
    locations,
  };
}

export const blogCities: BlogCity[] = (() => {
  const seen = new Set<string>();
  const cities: BlogCity[] = [];
  for (const post of blogPosts) {
    if (!post.citySlug) continue;
    const key = `${post.stateSlug}:${post.citySlug}`;
    if (seen.has(key)) continue;
    seen.add(key);
    cities.push(cityFromPosts(post.citySlug, post.stateSlug));
  }
  return cities;
})();

export function getBlogCity(slug: string): BlogCity | undefined {
  return blogCities.find((city) => city.slug === slug);
}

export function getBlogCitiesByState(stateSlug: string): BlogCity[] {
  return blogCities.filter((city) => city.stateSlug === stateSlug);
}

/** A location is simply a post's locationSlug (used by blog cards). */
export function getBlogLocation(
  citySlug: string,
  locationSlug: string,
): { slug: string; name: string; description: string } | undefined {
  const post = blogPosts.find(
    (item) => item.citySlug === citySlug && item.locationSlug === locationSlug,
  );
  if (!post || !post.locationSlug) return undefined;
  return {
    slug: post.locationSlug,
    name: titleCase(post.locationSlug),
    description: post.excerpt,
  };
}
