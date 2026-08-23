"use client";

import { useState } from "react";
import { urls } from "@/lib/urls";
import type { BlogPost } from "@/types/blog";

interface TableOfContentsProps {
  post: BlogPost;
}

export default function TableOfContents({ post }: TableOfContentsProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className="hidden rounded-2xl border border-teal-600/10 bg-teal-50/60 p-6 lg:block">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-lg font-bold text-[#29566A]">
          Table of Contents
        </span>
        <span
          className={`text-teal-700 transition-transform ${open ? "" : "rotate-180"}`}
          aria-hidden
        >
          ▾
        </span>
      </button>
      {open && (
        <ol className="mt-4 max-h-[45vh] space-y-2.5 overflow-y-auto overscroll-contain pr-2">
          {post.tableOfContents.map((item, index) => (
            <li key={item}>
              <a
                href={`${urls.blogPost(post.slug)}#${post.sections[index]?.id ?? `section-${index}`}`}
                className="group flex items-start gap-3 text-sm text-gray-600 transition-colors hover:text-teal-700"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-teal-700 shadow-sm">
                  {index + 1}
                </span>
                <span className="font-medium group-hover:underline">
                  {item}
                </span>
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
