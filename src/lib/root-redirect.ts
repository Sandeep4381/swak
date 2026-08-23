import { redirect } from "next/navigation";
import { blogPosts, getBlogPost, getFeaturedBlogPost } from "@/data/blog";
import { urls } from "@/lib/urls";

/**
 * Alternate / misspelled rental slugs that should resolve to the canonical
 * rental page and not fall through to blog matching or a 404.
 */
const RENTAL_ALIASES: Record<string, string> = {
  "car-rent": "/car-rental",
  "car-renter": "/car-rental",
  "car-rentail": "/car-rental",
  "car-rental": "/car-rental",
  "car-hire": "/car-rental",
  "car-hire-rental": "/car-rental",
  "car-rentals": "/car-rental",
  "bike-rent": "/bike-rental",
  "bike-renter": "/bike-rental",
  "bike-rentail": "/bike-rental",
  "bike-rental": "/bike-rental",
  "bike-hire": "/bike-rental",
  "bike-rentals": "/bike-rental",
  "scooter-rent": "/scooter-rental",
  "scooter-renter": "/scooter-rental",
  "scooter-rentail": "/scooter-rental",
  "scooter-rental": "/scooter-rental",
  "scooty-rental": "/scooter-rental",
  "scooty-rent": "/scooter-rental",
  "scooter-rentals": "/scooter-rental",
};

/**
 * If the slug is a rental alias, redirect to the canonical rental page and
 * return true. Otherwise return false so blog keyword matching can continue.
 */
export function redirectRentalAlias(slug: string[]): boolean {
  if (slug.length === 1 && RENTAL_ALIASES[slug[0]]) {
    redirect(RENTAL_ALIASES[slug[0]]);
    return true;
  }
  return false;
}

/**
 * Root-level keyword fallback for the catch-all page: matches blog posts
 * by slug or keyword and redirects to the closest related blog post.
 * Deleted pages never land on a state/city page — they always redirect
 * to a valid post from posts.json.
 */
export function redirectRootKeyword(slug: string[]): boolean {
  const search = slug.join("-").toLowerCase();
  const normalized = search.replace(/[^a-z0-9]+/g, " ").trim();
  const tokens = normalized.split(" ").filter(Boolean);

  // Exact post slug.
  const bySlug = slug.length === 1 ? getBlogPost(slug[0]) : undefined;
  if (bySlug) {
    redirect(urls.blogPost(bySlug.slug));
    return true;
  }

  // Keyword / token match against post slugs and primary keywords.
  const post =
    blogPosts.find(
      (item) =>
        item.slug.replace(/[^a-z0-9]+/g, " ") === normalized ||
        tokens.every((token) => item.slug.includes(token)),
    ) ??
    blogPosts.find((item) =>
      item.seo?.primaryKeyword
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .includes(normalized),
    ) ??
    blogPosts.find((item) => {
      const postTokens = item.slug
        .replace(/[^a-z0-9]+/g, " ")
        .split(" ")
        .filter(Boolean);
      return tokens.some((token) => postTokens.includes(token));
    });

  if (post) {
    redirect(urls.blogPost(post.slug));
    return true;
  }

  // Fallback: any unknown URL lands on a valid post.
  const fallback = getFeaturedBlogPost() ?? blogPosts[0];
  if (fallback) {
    redirect(urls.blogPost(fallback.slug));
    return true;
  }

  return false;
}
