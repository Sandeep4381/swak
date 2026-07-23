"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin } from "lucide-react";

export const activeCities = [
  { name: "Delhi", slug: "delhi" },
  { name: "Jaipur", slug: "jaipur" },
  { name: "Mumbai", slug: "mumbai" },
  { name: "Bengaluru", slug: "bengaluru" },
  { name: "Pune", slug: "pune" },
  { name: "Patna", slug: "patna" },
  { name: "Bhubaneswar", slug: "bhubaneswar" },
  { name: "Darjeeling", slug: "darjeeling" },
];

export const expandingCities = [
  { name: "Manali", slug: "manali" },
  { name: "Rishikesh", slug: "rishikesh" },
  { name: "Haridwar", slug: "haridwar" },
  { name: "Kochi", slug: "kochi" },
];

export default function AllCities() {
  const pathname = usePathname();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#29566A] mb-4">Our Locations</h2>
        <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
          Find self drive vehicles in cities across India. Book by the hour or day from trusted local partners.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {activeCities.map((c) => {
            const isActive = pathname === `/${c.slug}`;
            return (
              <Link key={c.slug} href={`/${c.slug}`}>
                <span
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-white text-[#29566A] border border-gray-200 hover:border-orange-200 hover:shadow-sm"
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  {c.name}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">Expanding Soon</p>
          <div className="flex flex-wrap justify-center gap-3">
            {expandingCities.map((c) => (
              <Link key={c.slug} href={`/${c.slug}`}>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-white/60 text-gray-400 border border-dashed border-gray-300 hover:border-orange-300 hover:text-orange-400 transition-all duration-200">
                  <MapPin className="w-3.5 h-3.5" />
                  {c.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
