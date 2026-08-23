import type { BlogPost, BlogSection } from "@/types/blog";
import {
  resolvePostHeroMobImage,
  resolvePostImage,
  resolvePostImageAlt,
  resolveSectionImage,
} from "./images";
import postsJson from "./posts.json";

/**
 * Load posts with dynamic image resolution: `featuredImage` and section
 * image `src` can be simple keys (e.g. "manali", "shimla-hero") which are
 * resolved to real CDN URLs via the ImageKit naming convention:
 *   - Post hero:       `{stateSlug}/{key}-hero.webp`
 *   - Post hero (mob): `{stateSlug}/{key}-hero-mob.webp`
 *   - Section image:   `{stateSlug}/{key}.webp`
 */
/**
 * Normalize a raw section (JSON) into the standard `blocks` shape used by
 * BlogArticle. Posts authored with custom fields (`paragraphs`, `bullets`,
 * `image`, `table`, `routes`, `days`, `tips`, ...) are converted into
 * `paragraph` / `list` / `image` blocks so every post renders consistently.
 */
type SectionBlock = BlogSection["blocks"][number];

function normalizeSectionBlocks(section: {
  blocks?: SectionBlock[];
  paragraphs?: string[];
  bullets?: string[];
  image?: { fileName?: string; alt?: string } | string;
  places?: string[];
  tips?: string[];
  packingList?: string[];
  activities?: string[];
  guidelines?: string[];
  transportOptions?: string[] | { name?: string; details?: string }[];
  highlight?: string;
  table?: { headers?: string[]; rows?: string[][] };
  routes?: { name?: string; route?: string }[];
  route?: string;
  days?: { day?: string; route?: string; description?: string }[];
  [key: string]: unknown;
}, stateSlug: string): SectionBlock[] {
  // Standard posts already carry `blocks`.
  if (Array.isArray(section.blocks)) {
    return section.blocks.map((block) => {
      if (block.type === "image") {
        return {
          ...block,
          src: resolveSectionImage(block.src, stateSlug),
          alt: block.alt || resolvePostImageAlt(block.src),
        };
      }
      return block;
    });
  }

  const blocks: SectionBlock[] = [];

  // Image object { fileName, alt } → image block.
  if (section.image) {
    const fileName =
      typeof section.image === "string" ? section.image : section.image.fileName;
    if (fileName) {
      blocks.push({
        type: "image",
        src: resolveSectionImage(fileName, stateSlug),
        alt:
          (typeof section.image !== "string" && section.image.alt) ||
          String(section.heading ?? "") || "",
      });
    }
  }

  // Paragraphs → paragraph blocks.
  for (const text of section.paragraphs ?? []) {
    if (text) blocks.push({ type: "paragraph", text });
  }

  // Bullet lists.
  for (const items of [
    section.bullets,
    section.places,
    section.tips,
    section.packingList,
    section.activities,
    section.guidelines,
  ]) {
    if (Array.isArray(items) && items.length > 0) {
      blocks.push({ type: "list", items: [...items] });
    }
  }

  // Transport options (strings or objects).
  if (Array.isArray(section.transportOptions)) {
    const items = section.transportOptions.map((option) =>
      typeof option === "string" ? option : option?.name || option?.details || "",
    ).filter(Boolean);
    if (items.length > 0) blocks.push({ type: "list", items });
  }

  // Season table → paragraphs describing each row.
  if (section.table?.headers && section.table.rows) {
    for (const row of section.table.rows) {
      if (row && row.length > 0) {
        blocks.push({ type: "paragraph", text: row.join(" — ") });
      }
    }
  }

  // Reach routes → paragraphs.
  if (Array.isArray(section.routes)) {
    for (const r of section.routes) {
      if (r?.name) blocks.push({ type: "paragraph", text: `${r.name}: ${r.route ?? ""}` });
      else if (r?.route) blocks.push({ type: "paragraph", text: r.route });
    }
  }
  if (section.route) blocks.push({ type: "paragraph", text: section.route });

  // Itinerary days → paragraphs.
  if (Array.isArray(section.days)) {
    for (const d of section.days) {
      const text = [d?.day, d?.route, d?.description].filter(Boolean).join(" — ");
      if (text) blocks.push({ type: "paragraph", text });
    }
  }

  // Highlight → quote block.
  if (section.highlight) {
    blocks.push({ type: "quote", text: section.highlight });
  }

  return blocks;
}

export const blogPosts: BlogPost[] = (postsJson as unknown as BlogPost[]).map(
  (post) => {
    const featuredImage = resolvePostImage(
      post.featuredImage,
      post.stateSlug,
    );
    // Mobile hero: `{stateSlug}/{key}-hero-mob.webp`.
    const featuredImageMob = resolvePostHeroMobImage(
      post.stateSlug,
      post.citySlug,
      post.featuredImage,
      featuredImage,
    );
    return {
      ...post,
      featuredImage,
      featuredImageMob,
      featuredImageAlt:
        post.featuredImageAlt || resolvePostImageAlt(post.featuredImage),
      sections: post.sections.map((section) => ({
        ...section,
        blocks: normalizeSectionBlocks(
          section as never,
          post.stateSlug,
        ),
      })),
    };
  },
);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedBlogPost(): BlogPost | undefined {
  return blogPosts.find((post) => post.isFeatured) ?? blogPosts[0];
}

/**
 * Resolve a post's curated `popular` slugs to full posts, skipping the current
 * post and any slugs that don't exist yet. Falls back to related posts when
 * no popular slugs are configured.
 */
export function getPopularBlogPosts(
  post: BlogPost,
  fallbackCount = 4,
): BlogPost[] {
  if (post.popular && post.popular.length > 0) {
    return post.popular
      .map((slug) => getBlogPost(slug))
      .filter((item): item is BlogPost => item !== undefined)
      .filter((item) => item.id !== post.id);
  }
  return getRelatedBlogPosts(post, fallbackCount);
}

/**
 * Resolve a post's curated `relatedArticles` slugs to full posts, skipping the
 * current post and any slugs that don't exist yet. Falls back to related posts
 * when none are configured.
 */
export function getRelatedArticles(
  post: BlogPost,
  fallbackCount = 3,
): BlogPost[] {
  if (post.relatedArticles && post.relatedArticles.length > 0) {
    return post.relatedArticles
      .map((slug) => getBlogPost(slug))
      .filter((item): item is BlogPost => item !== undefined)
      .filter((item) => item.id !== post.id);
  }
  return getRelatedBlogPosts(post, fallbackCount);
}

export function getRelatedBlogPosts(post: BlogPost, count = 3): BlogPost[] {
  return blogPosts
    .filter((candidate) => candidate.id !== post.id)
    .sort((a, b) => {
      const aScore =
        (a.citySlug === post.citySlug ? 2 : 0) +
        (a.category === post.category ? 1 : 0) +
        (a.stateSlug === post.stateSlug ? 1 : 0);
      const bScore =
        (b.citySlug === post.citySlug ? 2 : 0) +
        (b.category === post.category ? 1 : 0) +
        (b.stateSlug === post.stateSlug ? 1 : 0);
      return bScore - aScore;
    })
    .slice(0, count);
}

export function getBlogsByCity(citySlug: string): BlogPost[] {
  return blogPosts.filter((post) => post.citySlug === citySlug);
}

export function getBlogsByState(stateSlug: string): BlogPost[] {
  return blogPosts.filter((post) => post.stateSlug === stateSlug);
}

export function getBlogsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === categorySlug);
}

export function getBlogsByLocation(
  citySlug: string,
  locationSlug: string,
): BlogPost[] {
  return blogPosts.filter(
    (post) => post.citySlug === citySlug && post.locationSlug === locationSlug,
  );
}
