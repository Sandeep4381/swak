import type { CityData } from "@/types/city";
import Link from "next/link";

export default function PopularLocations({ city }: { city: CityData }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#29566A] mb-10">Popular Locations in {city.name}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {city.locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/${city.slug}/${loc.slug}`}
              className="p-6 rounded-xl border border-gray-100 hover:shadow-md hover:border-orange-200 transition"
            >
              <h3 className="text-lg font-semibold text-[#29566A]">{loc.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{loc.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
