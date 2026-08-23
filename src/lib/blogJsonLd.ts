import type { BlogPost } from "@/types/blog";
import { SITE_NAME, SITE_URL } from "@/lib/metadata";

/** Generates BlogPosting + FAQPage JSON-LD for a blog post. */
export function buildBlogPostJsonLd(post: BlogPost) {
  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const publisher = {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
  };

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Person", name: post.authorName },
    publisher,
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    url: postUrl,
    keywords: post.seo
      ? [post.seo.primaryKeyword, ...post.seo.secondaryKeywords].join(", ")
      : undefined,
  };

  const faq =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: { "@type": "Answer", text: q.answer },
          })),
        }
      : null;

  return [blogPosting, faq].filter(Boolean);
}
