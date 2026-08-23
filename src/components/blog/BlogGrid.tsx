import Link from "next/link";
import { formatDate } from "@/lib/blog/format";
import { urls } from "@/lib/urls";
import type { BlogPost } from "@/types/blog";
import BlogSectionHeading from "./BlogSectionHeading";
import CategoryBadge from "./CategoryBadge";

interface BlogGridProps {
  heading: string;
  subtitle?: string;
  posts: BlogPost[];
  showCategory?: boolean;
}

export default function BlogGrid({
  heading,
  subtitle,
  posts,
  showCategory = true,
}: BlogGridProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <BlogSectionHeading title={heading} subtitle={subtitle} />
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No blogs found yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={urls.blogPost(post.slug)}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative h-52 overflow-hidden">
                  {/* biome-ignore lint/performance/noImgElement: demo content images */}
                  <img
                    src={post.featuredImage}
                    alt={post.featuredImageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  {showCategory && <CategoryBadge category={post.category} />}
                  <h3 className="mt-3 text-lg font-bold leading-snug text-[#29566A] transition-colors group-hover:text-teal-700">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm text-gray-500">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 border-t border-gray-100 pt-4 text-xs text-gray-400">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>·</span>
                    <span>{post.readTimeMinutes} min read</span>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 transition-colors group-hover:text-teal-900">
                    Read More
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
