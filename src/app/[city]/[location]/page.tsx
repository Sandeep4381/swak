import { cities } from "@/data/cities";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd, buildBreadcrumbSchema } from "@/components/seo/structured-data";
import { company } from "@/data/shared/company";

interface Props {
  params: Promise<{ city: string; location: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, location: locSlug } = await params;
  const city = cities[citySlug as keyof typeof cities];
  if (!city) return {};
  const location = city.locations.find((l) => l.slug === locSlug);
  if (!location) return {};

  return {
    title: `${location.name} - ${city.name} Vehicle Rentals | Swarikaro`,
    description: location.description,
    alternates: { canonical: `https://swarikaro.com/${citySlug}/${locSlug}` },
    openGraph: {
      title: `${location.name} - ${city.name} Vehicle Rentals | Swarikaro`,
      description: location.description,
      url: `https://swarikaro.com/${citySlug}/${locSlug}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { city: citySlug, location: locSlug } = await params;
  const city = cities[citySlug as keyof typeof cities];
  if (!city) notFound();
  const location = city.locations.find((l) => l.slug === locSlug);
  if (!location) notFound();

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", item: company.url },
    { name: city.name, item: `${company.url}/${city.slug}` },
    { name: location.name, item: `${company.url}/${city.slug}/${location.slug}` },
  ]);

  return (
    <>
      <JsonLd data={[breadcrumb]} />
      <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">
        <a href={`/${city.slug}`} className="hover:text-orange-500">{city.name}</a>
        <span className="mx-2">/</span>
        <span className="text-[#29566A] font-medium">{location.name}</span>
      </div>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#29566A]">
            Vehicle Rentals near {location.name}
          </h1>
          <p className="mt-6 text-lg text-gray-600">{location.description}</p>
        </div>
      </section>
    </>
  );
}
