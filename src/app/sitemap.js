import { cities } from "@/data/cities";

export default function sitemap() {
  const lastModified = new Date().toISOString();
  const baseUrl = "https://swarikaro.com";

  const staticRoutes = [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/swarikaro-partner`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/terms-and-condition`, lastModified, changeFrequency: "monthly", priority: 0.5 },
  ];

  const cityRoutes = Object.values(cities).flatMap((city) => {
    const cityEntry = {
      url: `${baseUrl}/${city.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    };

    const locationEntries = city.locations.map((loc) => ({
      url: `${baseUrl}/${city.slug}/${loc.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    return [cityEntry, ...locationEntries];
  });

  return [...staticRoutes, ...cityRoutes];
}
