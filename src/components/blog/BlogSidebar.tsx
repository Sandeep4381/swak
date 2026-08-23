import Link from "next/link";
import { getPopularBlogPosts } from "@/data/blog";
import { formatDate } from "@/lib/blog/format";
import { urls } from "@/lib/urls";
import type { BlogPost } from "@/types/blog";
import CategoryBadge from "./CategoryBadge";
import TableOfContents from "./TableOfContents";

interface BlogSidebarProps {
  post: BlogPost;
}

export default function BlogSidebar({ post }: BlogSidebarProps) {
  const popularPosts = getPopularBlogPosts(post, 3).slice(0, 3);

  return (
    <aside className="space-y-6 lg:sticky lg:top-28">
      <TableOfContents post={post} />

      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft">
        <h3 className="mb-4 text-lg font-bold text-[#29566A]">Popular Blogs</h3>

        {popularPosts.length > 0 ? (
          <div className="space-y-4">
            {popularPosts.map((item) => (
              <Link
                key={item.id}
                href={urls.blogPost(item.slug)}
                className="group flex gap-4"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                  {/* biome-ignore lint/performance/noImgElement: demo content images */}
                  <img
                    src={item.featuredImage}
                    alt={item.featuredImageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="line-clamp-2 text-sm font-semibold text-[#29566A] transition-colors group-hover:text-teal-700">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-gray-400">
                    {formatDate(item.publishedAt)} · {item.readTimeMinutes} min
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400">
            Popular blogs will appear here.
          </p>
        )}
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft">
        <h3 className="mb-4 text-lg font-bold text-[#29566A]">
          Related Locations
        </h3>
        <div className="flex flex-wrap gap-2">
          {post.relatedArticles && post.relatedArticles.length > 0 ? (
            post.relatedArticles.map((location) => (
              <span
                key={location}
                className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-[#29566A]"
              >
                {location}
              </span>
            ))
          ) : (
            <p className="text-sm text-gray-400">
              Related locations will appear here.
            </p>
          )}
          {post.citySlug && (
            <Link
              href={urls.blogCity(post.stateSlug, post.citySlug)}
              className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-[#29566A] transition-colors hover:border-teal-600/40 hover:text-teal-700"
            >
              {post.citySlug.charAt(0).toUpperCase() + post.citySlug.slice(1)}
            </Link>
          )}
          {post.stateSlug && (
            <Link
              href={urls.blogState(post.stateSlug)}
              className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-[#29566A] transition-colors hover:border-teal-600/40 hover:text-teal-700"
            >
              {post.stateSlug.charAt(0).toUpperCase() + post.stateSlug.slice(1)}
            </Link>
          )}
          <span className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-[#29566A]">
            <CategoryBadge category={post.category} />
          </span>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-r from-teal-700 to-teal-900 p-6 text-center">
        <h3 className="text-xl font-bold text-white">Plan Your Trip</h3>
        <p className="mt-2 text-sm text-teal-100/90">
          Find cars, bikes and scooters for your journey.
        </p>
        <Link
          href="/bike-rental"
          className="mt-4 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-teal-800 transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          Explore Rentals
        </Link>
      </div>
    </aside>
  );
}
