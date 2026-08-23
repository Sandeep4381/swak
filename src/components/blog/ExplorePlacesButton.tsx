"use client";

import { ArrowRight } from "lucide-react";

/**
 * "Explore Places" — smooth-scrolls to the first article section on the page.
 * Falls back to the article wrapper if no section id is found.
 */
export default function ExplorePlacesButton({
  firstSectionId,
}: {
  firstSectionId?: string;
}) {
  const handleClick = () => {
    const target = document.getElementById(
      firstSectionId ?? "article-content",
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        inline-flex
        h-11
        w-full
        items-center
        justify-center
        gap-2
        rounded-lg
        bg-[#29566A]
        px-5
        text-[13px]
        font-semibold
        text-white
        shadow-md
        transition

        hover:bg-[#214958]

        sm:h-11
        sm:w-auto
        sm:px-6

        lg:h-12
        lg:text-sm
      "
    >
      Explore Places
      <ArrowRight size={16} aria-hidden />
    </button>
  );
}
