const routes = [
  "",
  "/about",
  "/contact",
  "/faq",
  "/partner",
  "/privacy-policy",
  "/terms-and-condition",
];

export default function sitemap() {
  const lastModified = new Date().toISOString();

  return routes.map((route) => ({
    url: `https://swarikaro.com${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
