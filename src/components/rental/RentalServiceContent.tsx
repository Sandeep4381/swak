import {
  ArrowRight,
  Car,
  Check,
  ChevronRight,
  FileText,
  MapPin,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";
import { getRentalConfig } from "@/data/rentals";
import {
  getCityPlaces,
  getCityRoutes,
  getRentalCity,
} from "@/lib/rentals/himachal";
import type { RentalService, RentalType } from "@/types/rental";
import RentalSectionHeading from "./RentalSectionHeading";
import RentalVehicleCatalogue from "./RentalVehicleCatalogue";

interface RentalServiceContentProps {
  type: RentalType;
  service: RentalService;
  city?: string;
  /** Optional location slug for service-in-location pages. */
  location?: string;
}

/* ============================================================
   SERVICE FAQ — generic per-service questions
============================================================ */

function serviceFaqs(serviceName: string, cityName: string, singular: string) {
  return [
    {
      question: `Can I rent a ${serviceName.toLowerCase()} ${singular} in ${cityName}?`,
      answer: `Yes. ${serviceName} ${singular} rental is available in ${cityName} from verified Swarikaro partners, subject to availability and partner policies.`,
    },
    {
      question: `What documents are required for ${serviceName.toLowerCase()} ${singular} rental?`,
      answer: `A valid driving licence, a government-issued photo ID and a refundable security deposit as per the rental partner's policy.`,
    },
    {
      question: `Can I take a ${serviceName.toLowerCase()} rental ${singular} outside ${cityName}?`,
      answer: `Yes, outstation travel is supported in most cases. Check with your rental partner about per-kilometre charges and any state permit requirements.`,
    },
    {
      question: `Can I rent a ${singular} for one day in ${cityName}?`,
      answer: `Yes. Daily rentals starting from 24 hours are available, with hourly plans in select locations.`,
    },
    {
      question: `Which type of ${singular} is best for a ${cityName} trip?`,
      answer: `An SUV or MUV is comfortable for hilly routes and group travel, while a hatchback or sedan suits couples and small families.`,
    },
    {
      question: `Is a security deposit required for ${serviceName.toLowerCase()} rental?`,
      answer: `A refundable security deposit is usually required and is returned after the vehicle is handed back in good condition.`,
    },
    {
      question: `Can I drive to Solang Valley or nearby destinations in a rental ${singular}?`,
      answer: `Yes. Solang Valley, Vashisht, Naggar and other nearby destinations are drivable from ${cityName} — check seasonal road conditions before you go.`,
    },
    {
      question: `What happens if the rental ${singular} has a problem during my trip?`,
      answer: `Swarikaro partners provide roadside assistance. Contact the support number in your booking for help with towing or repairs.`,
    },
  ];
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function RentalServiceContent({
  type,
  service,
  city,
  location,
}: RentalServiceContentProps) {
  const config = getRentalConfig(type);
  const cityData = city ? getRentalCity(city) : undefined;
  const cityName =
    cityData?.name ?? (city ? city.replace(/-/g, " ") : undefined);
  const citySlug = city ?? "";
  const locationName = location ? location.replace(/-/g, " ") : undefined;
  const singular = config.singular;
  const serviceName = service.name;

  const places = cityName ? getCityPlaces(citySlug) : [];
  const routes = cityName ? getCityRoutes(citySlug) : [];
  const faqs = serviceFaqs(serviceName, cityName ?? "your city", singular);

  const relatedCategories = [
    {
      label: `${config.label} in ${cityName ?? "the City"}`,
      text: "Explore all services",
      href: `/${type}${city ? `/${city}` : ""}`,
      Icon: Car,
    },
    {
      label: "Bike Rental",
      text: "Perfect for mountain road trips",
      href: `/bike-rental${city ? `/${city}` : ""}`,
      Icon: Route,
    },
    {
      label: "Scooty Rental",
      text: "Easy local mobility",
      href: `/scooter-rental${city ? `/${city}` : ""}`,
      Icon: Users,
    },
  ];

  return (
    <>
      {/* ==========================================================
          1. HERO
      =========================================================== */}
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
            {cityName && (
              <>
                <ChevronRight className="h-3.5 w-3.5" />
                <Link
                  href={`/${type}/${citySlug}`}
                  className="transition-colors hover:text-teal-700"
                >
                  {cityName}
                </Link>
              </>
            )}
            {locationName && (
              <>
                <ChevronRight className="h-3.5 w-3.5" />
                <Link
                  href={`/${type}/${citySlug}/${location}`}
                  className="transition-colors hover:text-teal-700"
                >
                  {locationName}
                </Link>
              </>
            )}
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-semibold text-[#29566A]">{serviceName}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr]">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#ea580c] shadow-sm backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f97316]" />
                {serviceName.toUpperCase()} {config.label.toUpperCase()}
                {cityName ? ` IN ${cityName.toUpperCase()}` : ""}
              </span>

              <h1 className="mt-5 text-4xl font-black leading-tight text-[#29566A] sm:text-5xl">
                {serviceName} {config.label}
                {cityName && (
                  <span className="mt-2 block text-2xl text-slate-500 sm:text-3xl">
                    {locationName ? `${locationName}, ` : ""}
                    {cityName}
                  </span>
                )}
              </h1>

              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                {service.longDescription ?? service.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#choose-your-car"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#f97316] px-7 py-3.5 text-sm font-bold text-white shadow-[0_6px_28px_rgba(238,164,110,0.4)] transition-all hover:scale-105 hover:bg-[#ea580c] active:scale-95"
                >
                  Explore {serviceName} Cars
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#29566A] bg-white px-7 py-3.5 text-sm font-bold text-[#29566A] shadow-sm transition-all hover:scale-105 active:scale-95"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Highlights card */}
            <div className="rounded-3xl border border-orange-100 bg-white/80 p-7 shadow-card backdrop-blur-sm">
              {locationName && (
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-teal-600/10 px-3 py-1 text-xs font-bold text-teal-700">
                  <MapPin className="h-3.5 w-3.5" />
                  {locationName}, {cityName}
                </div>
              )}
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600/10 text-teal-700">
                <service.icon className="h-7 w-7" />
              </span>
              <h2 className="mt-5 text-xl font-bold text-[#29566A]">
                Why {serviceName}?
              </h2>
              <ul className="mt-4 space-y-3">
                {(service.highlights ?? service.features).map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm text-gray-600"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          2. SEO INTRO
      =========================================================== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#29566A] md:text-4xl">
            {serviceName} {config.label}
            {cityName ? ` in ${cityName}` : ""}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-slate-600 sm:text-lg">
            <p>
              {service.intro ?? service.longDescription ?? service.description}
            </p>
            {(service.seoContent ?? []).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          3. CHOOSE YOUR CAR
      =========================================================== */}
      <section id="choose-your-car" className="scroll-mt-24 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RentalSectionHeading
            eyebrow="CHOOSE YOUR"
            title={`Choose a ${serviceName} ${config.singular[0].toUpperCase() + config.singular.slice(1)} for Your ${cityName ?? "Trip"}`}
            subtitle={`Popular vehicles for ${serviceName.toLowerCase()} rental${cityName ? ` in ${cityName}` : ""}.`}
          />
          <RentalVehicleCatalogue />
        </div>
      </section>

      {/* ==========================================================
          4. WHY THIS SERVICE
      =========================================================== */}
      <section className="bg-[#FCF7F2] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RentalSectionHeading
            eyebrow="WHY CHOOSE"
            title={`Why Choose ${serviceName} ${config.label}?`}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(service.highlights ?? service.features)
              .slice(0, 6)
              .map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600/10 text-teal-700">
                    <ShieldCheck className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-bold text-[#29566A]">{highlight}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Reliable {serviceName.toLowerCase()}{" "}
                    {config.label.toLowerCase()} experience with Swarikaro.
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          5. PLACES TO EXPLORE
      =========================================================== */}
      {places.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RentalSectionHeading
              eyebrow="EXPLORE"
              title={`Explore ${cityName} at Your Own Pace`}
              subtitle="Popular spots you can drive to with your rental car."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {places.map((place) => (
                <div
                  key={place.slug}
                  className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-[#29566A]">{place.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {place.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==========================================================
          6. POPULAR ROUTES
      =========================================================== */}
      {routes.length > 0 && (
        <section className="bg-[#FCF7F2] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RentalSectionHeading
              eyebrow="ROAD TRIPS"
              title={`Popular ${serviceName} Routes from ${cityName}`}
              subtitle="Route accessibility may vary depending on weather, road conditions and local restrictions."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {routes.map((route) => (
                <div
                  key={`${route.from}-${route.to}`}
                  className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-600/10 text-teal-700">
                    <Route className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-bold text-[#29566A]">
                      {route.from} → {route.to}
                    </h3>
                    <p className="mt-0.5 text-xs text-gray-500">
                      {route.duration}
                      {route.distanceKm > 0 && ` · ${route.distanceKm} km`}
                    </p>
                    {route.note && (
                      <p className="mt-0.5 text-xs text-orange-600">
                        {route.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==========================================================
          7. HOW IT WORKS
      =========================================================== */}
      {(service.steps ?? []).length > 0 && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RentalSectionHeading
              eyebrow="HOW IT WORKS"
              title={`How to Rent a ${serviceName} ${config.singular[0].toUpperCase() + config.singular.slice(1)} in ${cityName ?? "Your City"}`}
              subtitle="Simple steps to get you on the road."
            />
            <div className="grid gap-5 md:grid-cols-4">
              {(service.steps ?? []).map((step, index) => (
                <div
                  key={step}
                  className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-soft"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f97316] text-lg font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-bold text-[#29566A]">{step}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {serviceName} rental step {index + 1}.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==========================================================
          8. DOCUMENTS REQUIRED
      =========================================================== */}
      {(service.documents ?? []).length > 0 && (
        <section className="bg-[#FCF7F2] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RentalSectionHeading
              eyebrow="WHAT YOU NEED"
              title="Documents Required for Rental"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {(service.documents ?? []).map((doc) => (
                <div
                  key={doc}
                  className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-soft"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-600/10 text-teal-700">
                    <FileText className="h-5 w-5" />
                  </span>
                  <p className="pt-1 text-sm font-semibold text-[#29566A]">
                    {doc}
                  </p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-gray-500">
              Requirements, deposits and eligibility conditions may vary by
              rental partner and vehicle.
            </p>
          </div>
        </section>
      )}

      {/* ==========================================================
          9. SELF DRIVE vs OTHER
      =========================================================== */}
      {service.compare && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <RentalSectionHeading
              eyebrow="COMPARE"
              title={`${serviceName} or ${service.compare.vs}?`}
            />
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft">
              <div className="grid grid-cols-2 gap-px bg-gray-100">
                <div className="bg-teal-700 p-5 text-center">
                  <p className="text-lg font-black text-white">{serviceName}</p>
                </div>
                <div className="bg-white p-5 text-center">
                  <p className="text-lg font-black text-[#29566A]">
                    {service.compare.vs}
                  </p>
                </div>
              </div>
              {service.compare.rows.map((row) => (
                <div
                  key={row.self}
                  className="grid grid-cols-2 gap-px border-t border-gray-100 bg-gray-100"
                >
                  <div className="bg-white p-4 text-sm text-slate-600">
                    {row.self}
                  </div>
                  <div className="bg-[#FCF7F2] p-4 text-sm text-slate-600">
                    {row.other}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href={`/${type}${city ? `/${city}` : ""}${service.compare.otherHref}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#29566A] bg-white px-7 py-3 text-sm font-bold text-[#29566A] transition-all hover:scale-105 active:scale-95"
              >
                Explore {service.compare.vs} Cars
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ==========================================================
          10. LOCAL SEO CONTENT
      =========================================================== */}
      <section className="bg-[#FCF7F2] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <RentalSectionHeading
            align="left"
            eyebrow="TRAVEL"
            title={`Driving Around ${cityName ?? "with a Rental Car"}`}
          />
          <div className="space-y-4 text-base leading-7 text-slate-600">
            <p>
              {cityName
                ? `${cityName} rewards flexible travel.`
                : "Renting a car rewards flexible travel."}{" "}
              With a {serviceName.toLowerCase()} rental, you can plan your own
              sightseeing, stop for mountain views and move between local
              attractions on your own schedule — from the main bazaar to quieter
              villages and nearby valleys.
            </p>
            <p>
              Families and groups usually prefer an SUV or MUV for space and
              comfort on hilly roads, while couples and solo travellers often
              choose compact cars that are easy to park. A{" "}
              {serviceName.toLowerCase()} {config.singular} keeps your itinerary
              open, so you can go as slow or as far as the day allows — within
              your rental partner's terms.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================================
          11. PARTNERS (data-driven, no fake names)
      =========================================================== */}
      {/* Real partner data not wired yet — section is intentionally omitted
          rather than showing invented shop names. */}

      {/* ==========================================================
          12. FAQ
      =========================================================== */}
      <section
        className="py-16 md:py-20"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <RentalSectionHeading
            eyebrow="FAQ"
            title={`${serviceName} ${config.label}${cityName ? ` in ${cityName}` : ""} — FAQs`}
          />
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-100 bg-white shadow-soft transition-all open:border-teal-600/30 open:shadow-card"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 font-semibold text-[#29566A] transition-colors hover:text-teal-700 [&::-webkit-details-marker]:hidden">
                  <span itemProp="name" className="text-sm md:text-base">
                    {faq.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition-all group-open:rotate-180 group-open:bg-orange-500 group-open:text-white">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </summary>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  className="border-t border-gray-100 px-5 py-4 text-sm leading-relaxed text-gray-600 md:text-base"
                >
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          13. RELATED PAGES
      =========================================================== */}
      <section className="bg-[#FCF7F2] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RentalSectionHeading
            eyebrow="EXPLORE MORE"
            title="Explore More Rental Options"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {relatedCategories.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-600/10 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                  <item.Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-bold text-[#29566A]">{item.label}</h3>
                  <p className="text-sm text-gray-500">{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          14. FINAL CTA
      =========================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-700 to-teal-900 py-16 md:py-20">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-black text-white md:text-4xl">
            Ready to Explore {cityName ?? "Your Way"} Your Way?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-teal-100/90">
            Choose a {serviceName.toLowerCase()} {singular} and make your trip
            flexible, comfortable and memorable.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#choose-your-car"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-teal-800 shadow-premium transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore {serviceName} Cars
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
