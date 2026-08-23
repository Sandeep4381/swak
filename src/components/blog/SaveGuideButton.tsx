"use client";

import { Download } from "lucide-react";

/**
 * "Save Guide" — opens the browser's print dialog so the user can save the
 * full post (text + images) as a PDF. Print styles in globals.css hide the
 * navbar/footer/hero and render only the article content.
 */
export default function SaveGuideButton({ postTitle }: { postTitle: string }) {
  const handleSave = () => {
    // Set a title for the printed document (used as the PDF filename).
    document.title = `${postTitle} | Swarikaro`;
    window.print();
  };

  return (
    <button
      type="button"
      onClick={handleSave}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-secondary/20 bg-white/90 px-6 text-sm font-semibold text-secondary backdrop-blur-sm transition hover:bg-white hover:border-orange-400 hover:text-orange-600 sm:w-auto"
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M6 3h12a2 2 0 0 1 2 2v16l-8-4-8 4V5a2 2 0 0 1 2-2Z" />
      </svg>
      Save Guide
      <Download size={15} aria-hidden />
    </button>
  );
}
