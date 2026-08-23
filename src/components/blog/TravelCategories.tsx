import {
  Camera,
  Car,
  Compass,
  Lightbulb,
  Map as MapIcon,
  Mountain,
  Utensils,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { blogCategories } from "@/data/blog";
import { urls } from "@/lib/urls";

const iconMap = {
  Map: MapIcon,
  Mountain,
  Compass,
  Zap,
  Lightbulb,
  Camera,
  Car,
  Utensils,
} as const;

export default function TravelCategories() {
  return (
    <section className="bg-[#FCF7F2] py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-[#29566A] md:text-3xl">
            Explore by Category
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Find guides, tips and stories for every kind of traveller.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {blogCategories.map((category) => {
            const Icon =
              iconMap[category.icon as keyof typeof iconMap] ?? MapIcon;
            return (
              <Link
                key={category.id}
                href={`${urls.blogHome()}?category=${category.slug}`}
                className="group flex flex-col items-center gap-2 rounded-xl border border-gray-100 bg-white p-3 text-center shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-600/10 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-[#29566A]">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
