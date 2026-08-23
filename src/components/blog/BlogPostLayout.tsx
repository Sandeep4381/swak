import type { BlogPost } from "@/types/blog";
import BlogArticle from "./BlogArticle";
import BlogSidebar from "./BlogSidebar";

/**
 * Blog post layout — wraps the article + sidebar in the home-page
 * background (`hero-bg`) with decorative blobs. Used below the hero.
 */
export default function BlogPostLayout({ post }: { post: BlogPost }) {
  return (
    <div className="hero-bg relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--foreground)]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-10">
          <main id="article-content" className="min-w-0 scroll-mt-28">
            <BlogArticle post={post} featured />
          </main>
          <div className="mt-10 lg:mt-0">
            <BlogSidebar post={post} />
          </div>
        </div>
      </div>
    </div>
  );
}
