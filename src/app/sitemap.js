import { blogPosts } from "@/data/blog";
import { urls } from "@/lib/urls";

const routes = [
  "",
  "/about",
  "/contact",
  "/faq",
  "/swarikaro-partner",
  "/privacy-policy",
  "/terms-and-condition",
  "/car-rental",
  "/bike-rental",
  "/scooter-rental",
];

export default function sitemap() {
  const lastModified = new Date().toISOString();

  const staticRoutes = routes.map((route) => ({
    url: `https://swarikaro.com${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `https://swarikaro.com${urls.blogPost(post.slug)}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
