import type { CityData } from "@/types/city";
import Link from "next/link";

export default function CTA({ city }: { city: CityData }) {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{city.cta.title}</h2>
        <p className="mt-4 text-white/80 text-lg">{city.cta.description}</p>
        <Link
          href={city.cta.buttonLink || `/${city.slug}`}
          className="mt-8 inline-block px-8 py-4 bg-white text-orange-500 font-bold rounded-xl hover:shadow-lg transition"
        >
          {city.cta.buttonText}
        </Link>
      </div>
    </section>
  );
}
