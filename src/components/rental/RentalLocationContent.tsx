import { ArrowRight, ChevronRight, MapPin, Route } from "lucide-react";
import Link from "next/link";
import { getRentalConfig } from "@/data/rentals";
import { getRentalCity } from "@/lib/rentals/himachal";
import type { RentalType } from "@/types/rental";
import RentalSectionHeading from "./RentalSectionHeading";

interface RentalLocationContentProps {
  type: RentalType;
  /** City slug, e.g. "manali". */
  city: string;
  /** Location slug, e.g. "mall-road". */
  location: string;
}

export default function RentalLocationContent({
  type,
  city,
  location,
}: RentalLocationContentProps) {
  const config = getRentalConfig(type);
  const cityData = getRentalCity(city);
  const cityName = cityData?.name ?? city.replace(/-/g, " ");

  const locationData = cityData?.locations.find((l) => l.slug === location);
  const locationName = locationData?.name ?? location.replace(/-/g, " ");
  const locations = cityData?.locations ?? [];
  const heroImage = locationData ? undefined : cityData?.image;

  return (
    <>
      {/* Location hero */}
      <section className="hero-bg relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--brand)]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--foreground)]/5 blur-3xl" />

        <div className="relative hero-wrapper mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="transition-colors hover:text-teal-700">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href={`/${type}`}
              className="transition-colors hover:text-teal-700"
            >
              {config.label}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href={`/${type}/${city}`}
              className="transition-colors hover:text-teal-700"
            >
              {cityName}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="flex items-center gap-1 font-semibold text-[#29566A]">
              <MapPin className="h-3.5 w-3.5 text-[#f97316]" />
              {locationName}
            </span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr]">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#ea580c] shadow-sm backdrop-blur-sm">
                <Route className="h-3.5 w-3.5" />
                {cityName} · {locationName}
              </span>

              <h1 className="mt-5 text-4xl font-black leading-tight text-[#29566A] sm:text-5xl">
                {locationName}{" "}
                <span className="text-[#FF6B00]">{config.label}</span>
              </h1>

              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                {locationData?.description ??
                  `${config.label.toLowerCase()} in ${locationName}, ${cityName}. Pick up your ${config.singular} right here and explore the area with total freedom.`}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#f97316] px-7 py-3.5 text-sm font-bold text-white shadow-[0_6px_28px_rgba(238,164,110,0.4)] transition-all hover:scale-105 hover:bg-[#ea580c] active:scale-95"
                >
                  Book {config.singular} in {locationName}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href={`/${type}/${city}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#29566A] bg-white px-7 py-3.5 text-sm font-bold text-[#29566A] shadow-sm transition-all hover:scale-105 active:scale-95"
                >
                  All of {cityName}
                </Link>
              </div>
            </div>

            {/* Location stats / poster */}
            <div className="grid gap-3">
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-orange-100 bg-white/80 p-5 text-center shadow-soft">
                  <p className="text-2xl font-black text-[#29566A]">
                    {locations.length}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    Pickups
                  </p>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-white/80 p-5 text-center shadow-soft">
                  <p className="text-2xl font-black text-[#29566A]">
                    {config.services.length}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    Services
                  </p>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-white/80 p-5 text-center shadow-soft">
                  <p className="text-2xl font-black text-[#29566A]">24x7</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    Support
                  </p>
                </div>
              </div>
              {heroImage && (
                // biome-ignore lint/performance/noImgElement: city poster image
                <img
                  src={heroImage}
                  alt={cityName}
                  className="hidden w-full rounded-2xl border border-orange-100 object-cover shadow-premium lg:block"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services at this location */}
      <section className="bg-[#FCF7F2] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RentalSectionHeading
            eyebrow="CHOOSE YOUR SERVICE"
            title={`${config.label} in ${locationName}`}
            subtitle={`All services ready at ${locationName}, ${cityName}.`}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {config.services.map((service) => (
              <Link
                key={service.slug}
                href={`/${type}/${city}/${location}/${service.slug}`}
                className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600/10 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                  <service.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-[#29566A]">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {service.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-teal-700 transition-colors group-hover:text-teal-900">
                  {service.name} in {locationName}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other pickup locations in the city */}
      {locations.length > 1 && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RentalSectionHeading
              eyebrow="MORE PICKUPS"
              title={`Other locations in ${cityName}`}
              subtitle="Pick up your vehicle from any of these spots."
            />
            <div className="flex flex-wrap gap-3">
              {locations
                .filter((l) => l.slug !== location)
                .map((l) => (
                  <Link
                    key={l.slug}
                    href={`/${type}/${city}/${l.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#29566A] shadow-soft transition-all hover:-translate-y-0.5 hover:border-teal-600/40 hover:shadow-card"
                  >
                    <MapPin className="h-4 w-4 text-teal-600" />
                    {l.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
