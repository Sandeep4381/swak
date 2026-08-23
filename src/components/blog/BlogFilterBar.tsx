"use client";

import { SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { blogCategories } from "@/data/blog";
import { urls } from "@/lib/urls";

const filterChips = [
  { name: "All", href: urls.blogHome() },
  ...blogCategories.map((category) => ({
    name: category.name,
    href: `${urls.blogHome()}?category=${category.slug}`,
  })),
];

interface BlogFilterBarProps {
  active?: string | null;
}

export default function BlogFilterBar({ active = null }: BlogFilterBarProps) {
  const [showFilters, setShowFilters] = useState(false);

  const isActiveChip = (chip: { name: string; href: string }) => {
    if (active) {
      return chip.href.includes(`category=${active}`);
    }
    return chip.name === "All";
  };

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="flex items-center gap-3">
        <div className="scrollbar-none flex flex-1 gap-2 overflow-x-auto pb-1">
          {filterChips.map((chip) => (
            <Link
              key={chip.name}
              href={chip.href}
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                isActiveChip(chip)
                  ? "border-teal-700 bg-teal-700 text-white shadow-sm"
                  : "border-gray-200 bg-white text-[#29566A] hover:border-teal-600/40 hover:text-teal-700"
              }`}
            >
              {chip.name}
            </Link>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setShowFilters((prev) => !prev)}
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-[#29566A] transition-colors hover:border-teal-600/40 hover:text-teal-700 lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </button>
      </div>

      {showFilters && (
        <div className="mt-3 flex flex-wrap gap-2 rounded-2xl border border-gray-100 bg-white p-4 shadow-soft lg:hidden">
          {filterChips.map((chip) => (
            <Link
              key={chip.name}
              href={chip.href}
              className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                isActiveChip(chip)
                  ? "bg-teal-700 text-white"
                  : "bg-gray-100 text-[#29566A] hover:bg-teal-50"
              }`}
            >
              {chip.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
