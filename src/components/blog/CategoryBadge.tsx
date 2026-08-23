import { getBlogCategoryById } from "@/data/blog";
import type { BlogCategoryId } from "@/types/blog";

interface CategoryBadgeProps {
  category: BlogCategoryId;
  className?: string;
}

export default function CategoryBadge({
  category,
  className = "",
}: CategoryBadgeProps) {
  const categoryData = getBlogCategoryById(category);
  return (
    <span
      className={`inline-flex items-center rounded-full bg-teal-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700 ${className}`}
    >
      {categoryData?.name ?? category}
    </span>
  );
}
