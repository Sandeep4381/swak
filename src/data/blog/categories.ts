import type { BlogCategory, BlogCategoryId } from "@/types/blog";
import categoriesJson from "./categories.json";

export const blogCategories: BlogCategory[] = categoriesJson as BlogCategory[];

export function getBlogCategory(slug: string): BlogCategory | undefined {
  return blogCategories.find((category) => category.slug === slug);
}

export function getBlogCategoryById(
  id: BlogCategoryId,
): BlogCategory | undefined {
  return blogCategories.find((category) => category.id === id);
}
