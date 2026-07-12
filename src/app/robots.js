export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://swarikaro.com/sitemap.xml",
    host: "https://swarikaro.com",
  };
}
