import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import BlogDownloadWidget from "@/components/blog/BlogDownloadWidget";
import BlogHero from "@/components/blog/BlogHero";
import BlogPostLayout from "@/components/blog/BlogPostLayout";
import RelatedBlogs from "@/components/blog/RelatedBlogs";
import RentalCTA from "@/components/blog/RentalCTA";
import { blogPosts, getBlogPost, getFeaturedBlogPost } from "@/data/blog";
import { buildBlogPostJsonLd } from "@/lib/blogJsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/metadata";
import { urls } from "@/lib/urls";

interface Props {
  params: Promise<{ slug: string[] }>;
}

/**
 * Resolve any `/blog/<x>` URL that isn't an exact post slug to the closest
 * valid post from posts.json. Deleted pages never 404 and never land on a
 * state/city page — they always redirect to a real blog post.
 */
function resolveBlogRedirect(slug: string[]): string | null {
  const search = slug.join("-").toLowerCase();
  const normalized = search.replace(/[^a-z0-9]+/g, " ").trim();
  const tokens = normalized.split(" ").filter(Boolean);

  // 1) Exact post slug.
  const exactPost = slug.length === 1 ? getBlogPost(slug[0]) : undefined;
  if (exactPost) return urls.blogPost(exactPost.slug);

  // 2) Keyword / token match against post slugs and primary keywords.
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

  if (post) return urls.blogPost(post.slug);

  // 3) Fallback: any remaining unknown URL lands on a valid post.
  const fallback = getFeaturedBlogPost() ?? blogPosts[0];
  if (fallback) return urls.blogPost(fallback.slug);

  return null;
}

function postMetadata(post: ReturnType<typeof getBlogPost>): Metadata {
  if (!post) return {};
  const postUrl = `${SITE_URL}${urls.blogPost(post.slug)}`;
  const metaTitle = post.seo?.metaTitle ?? `${post.title} | ${SITE_NAME}`;
  const metaDescription = post.seo?.metaDescription ?? post.excerpt;
  return {
    title: metaTitle,
    description: metaDescription,
    keywords: post.seo
      ? [
          post.seo.primaryKeyword,
          ...post.seo.secondaryKeywords,
          ...post.seo.longTailKeywords,
          ...post.seo.tags,
        ]
      : undefined,
    alternates: { canonical: postUrl },
    openGraph: {
      type: "article",
      url: postUrl,
      title: metaTitle,
      description: post.seo?.socialDescription ?? metaDescription,
      images: [{ url: post.featuredImage, alt: post.featuredImageAlt }],
      publishedTime: post.publishedAt,
      authors: [post.authorName],
      tags: post.seo?.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: post.seo?.socialDescription ?? metaDescription,
      images: [post.featuredImage],
    },
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const [stateSlug] = slug;

  if (!stateSlug) return {};

  // Exact post → its own metadata.
  const post = getBlogPost(stateSlug);
  if (post) return postMetadata(post);

  // Deleted / unknown URL → metadata of the post it redirects to.
  const redirectTo = resolveBlogRedirect(slug);
  if (redirectTo) {
    const resolvedPost = getBlogPost(redirectTo.replace("/blog/", ""));
    if (resolvedPost) return postMetadata(resolvedPost);
  }

  return {};
}

export default async function BlogDynamicPage({ params }: Props) {
  const { slug } = await params;
  const [stateSlug] = slug;

  // ---------- Article ----------
  if (!stateSlug) notFound();
  const post = getBlogPost(stateSlug);
  if (post) {
    const postJsonLd = buildBlogPostJsonLd(post);
    return (
      <>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: server-rendered JSON-LD
          dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd) }}
        />
        <BlogHero post={post} />
        <BlogPostLayout post={post} />

        <RelatedBlogs post={post} />
        <RentalCTA
          title="Planning a Himachal Trip?"
          text="Find cars, bikes and scooters for your journey with Swarikaro."
        />
        <BlogDownloadWidget />
      </>
    );
  }

  // ---------- Redirect: deleted or unknown URL → a valid post ----------
  const redirectTo = resolveBlogRedirect(slug);
  if (redirectTo) redirect(redirectTo);
  notFound();
}
