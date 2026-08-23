import Link from "next/link";
import { formatDate } from "@/lib/blog/format";
import { urls } from "@/lib/urls";
import type { BlogPost } from "@/types/blog";
import CategoryBadge from "./CategoryBadge";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link
        href={urls.blogPost(post.slug)}
        className="group grid overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft transition-shadow hover:shadow-card lg:grid-cols-2"
      >
        <div className="relative h-64 overflow-hidden lg:h-full">
          {/* biome-ignore lint/performance/noImgElement: demo content images */}
          <img
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center p-8 lg:p-10">
          <CategoryBadge category={post.category} />
          <h2 className="mt-4 text-2xl font-bold text-[#29566A] lg:text-3xl">
            {post.title}
          </h2>
          <p className="mt-3 text-gray-500">{post.excerpt}</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
            <span>{formatDate(post.publishedAt)}</span>
            <span>·</span>
            <span>{post.readTimeMinutes} min read</span>
          </div>
          <span className="mt-6 inline-flex items-center gap-2 font-semibold text-teal-700 transition-colors group-hover:text-teal-900">
            Read Guide
            <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
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
        <CategoryBadge category={post.category} />
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
  );
}
