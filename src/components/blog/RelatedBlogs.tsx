import Link from "next/link";
import { getRelatedBlogPosts } from "@/data/blog";
import { formatDate } from "@/lib/blog/format";
import { urls } from "@/lib/urls";
import type { BlogPost } from "@/types/blog";
import BlogSectionHeading from "./BlogSectionHeading";
import CategoryBadge from "./CategoryBadge";

interface RelatedBlogsProps {
  post: BlogPost;
}

export default function RelatedBlogs({ post }: RelatedBlogsProps) {
  const related = getRelatedBlogPosts(post);

  return (
    <section className="bg-[#FCF7F2] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <BlogSectionHeading title="You May Also Like" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((relatedPost) => (
            <Link
              key={relatedPost.id}
              href={urls.blogPost(relatedPost.slug)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative h-48 overflow-hidden">
                {/* biome-ignore lint/performance/noImgElement: demo content images */}
                <img
                  src={relatedPost.featuredImage}
                  alt={relatedPost.featuredImageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <CategoryBadge category={relatedPost.category} />
                <h3 className="mt-3 text-lg font-bold leading-snug text-[#29566A] transition-colors group-hover:text-teal-700">
                  {relatedPost.title}
                </h3>
                <div className="mt-4 flex items-center gap-4 border-t border-gray-100 pt-4 text-xs text-gray-400">
                  <span>{formatDate(relatedPost.publishedAt)}</span>
                  <span>·</span>
                  <span>{relatedPost.readTimeMinutes} min read</span>
                </div>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 transition-colors group-hover:text-teal-900">
                  Read More
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
