import { Gauge, Luggage, Users } from "lucide-react";
import Link from "next/link";
import type { RentalConfig } from "@/types/rental";
import RentalSectionHeading from "./RentalSectionHeading";

export default function RentalPopularVehicles({
  config,
}: {
  config: RentalConfig;
}) {
  return (
    <section id="popular-vehicles" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RentalSectionHeading
          eyebrow="TOP PICKS"
          title={`Top / Popular ${config.labelShort}`}
          subtitle={`The most booked ${config.singular}s on Swarikaro this month.`}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {config.popularVehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                {/* biome-ignore lint/performance/noImgElement: rental vehicle image */}
                <img
                  src={vehicle.image}
                  alt={vehicle.imageAlt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  {vehicle.category}
                </span>
                {vehicle.badge && (
                  <span className="absolute right-3 top-3 rounded-full bg-teal-700 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    {vehicle.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold text-[#29566A]">
                  {vehicle.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-gray-500">
                  {vehicle.seats && (
                    <span className="inline-flex items-center gap-1">
                      <Users className="h-3.5 w-3.5 text-teal-600" />
                      {vehicle.seats}
                    </span>
                  )}
                  {vehicle.luggage && (
                    <span className="inline-flex items-center gap-1">
                      <Luggage className="h-3.5 w-3.5 text-teal-600" />
                      {vehicle.luggage}
                    </span>
                  )}
                  {vehicle.mileage && (
                    <span className="inline-flex items-center gap-1">
                      <Gauge className="h-3.5 w-3.5 text-teal-600" />
                      {vehicle.mileage}
                    </span>
                  )}
                </div>

                <div className="mt-auto flex items-end justify-between border-t border-gray-100 pt-4">
                  {vehicle.transmission && (
                    <span className="text-xs font-medium text-gray-500">
                      {vehicle.transmission}
                    </span>
                  )}
                  <Link
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-teal-700 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-teal-800"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
