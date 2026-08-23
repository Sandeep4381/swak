export function JsonLd({ data }) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={`${schema?.["@type"] ?? "schema"}-${schema?.name ?? schema?.url ?? ""}`}
          type="application/ld+json"
          suppressHydrationWarning
        >
          {JSON.stringify(schema)}
        </script>
      ))}
    </>
  );
}

export function getCanonicalUrl(pathname) {
  return `https://swarikaro.com${pathname}`;
}

export function buildOpenGraphImage(pathname = "/og-image.png") {
  return `https://swarikaro.com${pathname}`;
}
