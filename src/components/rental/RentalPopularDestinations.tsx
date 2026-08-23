import { MapPin } from "lucide-react";
import Link from "next/link";
import { urls } from "@/lib/urls";
import type { RentalConfig } from "@/types/rental";
import RentalSectionHeading from "./RentalSectionHeading";

const CITY_SLUGS: Record<string, string> = {
  Rishikesh: "rishikesh",
  Manali: "manali",
  Shimla: "shimla",
  Dehradun: "dehradun",
  Haridwar: "haridwar",
  Mussoorie: "mussoorie",
  Dharamshala: "dharamshala",
  Nainital: "nainital",
};

export default function RentalPopularDestinations({
  config,
}: {
  config: RentalConfig;
}) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RentalSectionHeading
          eyebrow="POPULAR"
          title="Popular Destinations"
          subtitle={`Where travellers rent ${config.singular}s with Swarikaro.`}
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {config.popularDestinations.map((destination) => {
            const slug =
              CITY_SLUGS[destination.city] ?? destination.city.toLowerCase();
            return (
              <Link
                key={destination.city}
                href={urls.rentalCity(config.type, slug)}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-soft transition-all hover:-translate-y-1 hover:border-teal-600/30 hover:shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-bold text-[#29566A] transition-colors group-hover:text-teal-700">
                    {config.label} in {destination.city}
                  </h3>
                  <p className="mt-1 text-xs text-gray-400">
                    {destination.state}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
