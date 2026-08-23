export type BlogCategoryId =
  | "travel-guides"
  | "destinations"
  | "things-to-do"
  | "adventure"
  | "travel-tips"
  | "attractions"
  | "road-trips"
  | "food-culture";

export interface BlogDestination {
  slug: string;
  name: string;
  /** Optional in JSON — resolved automatically from images.json when absent. */
  image?: string;
  /** Display category, e.g. "Hill Station", "Adventure". */
  category?: string;
}

export interface BlogDestinationsData {
  statePostSlugs: Record<string, string>;
  destinationPostSlugs: Record<string, string>;
  destinations: BlogDestination[];
}

export interface BlogCategory {
  id: BlogCategoryId;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface BlogState {
  id: string;
  name: string;
  slug: string;
  description: string;
  hero: {
    title: string;
    subtitle: string;
    /** Optional — resolved from images.json (state hero) when absent. */
    image?: string;
    badge: string;
  };
  intro: {
    title: string;
    text: string;
  };
  popularCities: string[];
}

export interface BlogCity {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Optional — resolved from images.json (city images) when absent. */
  image?: string;
  blogCount: number;
  stateSlug: string;
  popularTopics: BlogCategoryId[];
  locations: {
    slug: string;
    name: string;
    /** Optional — resolved from images.json (city images) when absent. */
    image?: string;
    description: string;
  }[];
}

export interface BlogSection {
  id: string;
  heading: string;
  blocks: {
    type: "paragraph" | "heading3" | "list" | "quote" | "image";
    text?: string;
    items?: string[];
    src?: string;
    alt?: string;
  }[];
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  /** Mobile-optimized hero image (falls back to featuredImage). */
  featuredImageMob?: string;
  featuredImageAlt: string;
  category: BlogCategoryId;
  stateSlug: string;
  citySlug?: string;
  locationSlug?: string;
  isFeatured?: boolean;
  isGuide?: boolean;
  publishedAt: string;
  readTimeMinutes: number;
  authorName: string;
  tableOfContents: string[];
  sections: BlogSection[];
  faqs: BlogFaq[];
  /** SEO metadata (title ≤60 chars, description ≤160 chars, keywords, etc.) */
  seo?: {
    metaTitle: string;
    metaDescription: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
    longTailKeywords: string[];
    tags: string[];
    socialDescription: string;
    featuredImagePrompt: string;
    sectionImagePrompts?: Record<string, string>;
  };
  /** Internal links to related posts/pages on this site */
  internalLinks?: { label: string; href: string }[];
  /** External authoritative link suggestions */
  externalLinks?: { label: string; href: string }[];
  /** Slugs of curated "popular" posts to feature, in display order. */
  popular?: string[];
  /** Slugs of curated related articles to feature, in display order. */
  relatedArticles?: string[];
}
