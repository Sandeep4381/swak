"use client";

import { ArrowRight, Fuel, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { VEHICLE_CATALOGUE } from "@/data/rentals";
import RentalSectionHeading from "./RentalSectionHeading";

export default function RentalVehicleCatalogue() {
  const [activeFilter, setActiveFilter] = useState("All");

  const typeFilters = [
    "All",
    ...Array.from(new Set(VEHICLE_CATALOGUE.map((vehicle) => vehicle.type))),
  ];

  const vehicles =
    activeFilter === "All"
      ? VEHICLE_CATALOGUE
      : VEHICLE_CATALOGUE.filter((vehicle) => vehicle.type === activeFilter);

  return (
    <section className="bg-[#FCF7F2] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RentalSectionHeading
          eyebrow="CHOOSE YOUR"
          title="Choose Your Vehicle"
          subtitle="Find the right ride for every journey — from comfortable cars to adventure-ready bikes and easy city scooties."
        />

        {/* Vehicle type selector tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 overflow-x-auto pb-2">
          {typeFilters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`inline-flex shrink-0 items-center rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                  isActive
                    ? "bg-teal-700 text-white shadow-card"
                    : "border border-gray-200 bg-white text-[#29566A] shadow-soft hover:border-teal-600/40 hover:text-teal-700"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Vehicle cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                {/* biome-ignore lint/performance/noImgElement: catalogue vehicle image */}
                <img
                  src={vehicle.image}
                  alt={vehicle.imageAlt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-teal-700 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  {vehicle.type}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold text-[#29566A]">
                  {vehicle.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {vehicle.description}
                </p>

                {/* Spec icons */}
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  {vehicle.specs.map((spec) => (
                    <span key={spec} className="inline-flex items-center gap-1">
                      <Users className="h-3.5 w-3.5 text-teal-600" />
                      {spec}
                    </span>
                  ))}
                  <span className="inline-flex items-center gap-1">
                    <Fuel className="h-3.5 w-3.5 text-teal-600" />
                    {vehicle.transmission}
                  </span>
                </div>

                <Link
                  href={vehicle.href}
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-teal-700 transition-colors group-hover:text-teal-900"
                >
                  Explore Vehicle
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/car-rental"
            className="inline-flex items-center gap-2 rounded-full bg-[#f97316] px-8 py-3.5 text-sm font-bold text-white shadow-[0_6px_28px_rgba(238,164,110,0.4)] transition-all hover:scale-105 hover:bg-[#ea580c] active:scale-95"
          >
            Explore All Vehicles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
