import {
  ArrowRight,
  Car,
  ChevronRight,
  Clock,
  MapPin,
  Route,
  Users,
} from "lucide-react";
import Link from "next/link";
import { getRentalConfig } from "@/data/rentals";
import {
  getCityItineraries,
  getCityPlaces,
  getCityRoutes,
  getRentalCity,
} from "@/lib/rentals/himachal";
import type { RentalType } from "@/types/rental";
import RentalSectionHeading from "./RentalSectionHeading";
import RentalVehicleCatalogue from "./RentalVehicleCatalogue";

interface RentalCityContentProps {
  type: RentalType;
  /** City slug, e.g. "manali". */
  city: string;
}

/* ============================================================
   FAQ DATA — generic, useful, non-fake
============================================================ */

function cityFaqs(configLabel: string, cityName: string, singular: string) {
  return [
    {
      question: `What types of cars are available for rent in ${cityName}?`,
      answer: `You can find hatchbacks, sedans, SUVs, MUVs and premium cars from verified partners in ${cityName}, depending on availability.`,
    },
    {
      question: `Can I rent a self-drive ${singular} in ${cityName}?`,
      answer: `Yes. Self-drive ${configLabel.toLowerCase()} is available in ${cityName} with a valid driving licence and a refundable security deposit.`,
    },
    {
      question: `Do you provide chauffeur-driven ${configLabel.toLowerCase()} in ${cityName}?`,
      answer: `Yes. Chauffeur-driven cars are ideal for mountain routes and local sightseeing — a verified driver handles the journey.`,
    },
    {
      question: `Can I rent a ${singular} for ${cityName} sightseeing?`,
      answer: `Absolutely. Many travellers book a ${singular} for local sightseeing across ${cityName} and the Kullu Valley.`,
    },
    {
      question: `Can I take a rental ${singular} from ${cityName} to another city?`,
      answer: `Outstation trips are supported with transparent per-kilometre pricing. Travel time and access can vary with weather and road conditions.`,
    },
    {
      question: `What documents are required to rent a ${singular} in ${cityName}?`,
      answer: `A valid driving licence, a government-issued photo ID and a refundable security deposit as per the partner's policy.`,
    },
    {
      question: `Can I rent a ${singular} for one day in ${cityName}?`,
      answer: `Yes. Daily rentals starting from 24 hours are available, with hourly plans in select locations.`,
    },
    {
      question: `Can I travel to Solang Valley or other nearby destinations by rental ${singular}?`,
      answer: `Yes. Solang Valley, Vashisht, Naggar and other nearby destinations are drivable from ${cityName} — check seasonal road conditions before you go.`,
    },
  ];
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function RentalCityContent({
  type,
  city,
}: RentalCityContentProps) {
  const config = getRentalConfig(type);
  const cityData = getRentalCity(city);
  const cityName = cityData?.name ?? city.replace(/-/g, " ");
  const citySlug = cityData?.slug ?? city;
  const locations = cityData?.locations ?? [];
  const heroImage = cityData?.image;
  const singular = config.singular;
  const label = config.label;

  const places = getCityPlaces(citySlug);
  const routes = getCityRoutes(citySlug);
  const itineraries = getCityItineraries(citySlug);
  const faqs = cityFaqs(label, cityName, singular);

  const relatedCategories = [
    {
      label: "Car Rental",
      text: "Comfortable for families & groups",
      href: "/car-rental",
      slug: "car-rental",
      Icon: Car,
    },
    {
      label: "Bike Rental",
      text: "Perfect for mountain road trips",
      href: "/bike-rental",
      slug: "bike-rental",
      Icon: Route,
    },
    {
      label: "Scooty Rental",
      text: "Easy local mobility",
      href: "/scooter-rental",
      slug: "scooter-rental",
      Icon: Users,
    },
  ];

  const guides = [
    {
      label: "Complete Manali Travel Guide",
      href: "/blog/manali-travel-guide",
    },
    {
      label: "Best Places to Visit in Manali",
      href: "/blog/manali-travel-guide",
    },
    {
      label: "Solang Valley Travel Guide",
      href: "/blog/solang-valley-travel-guide",
    },
    {
      label: "Rohtang Pass Travel Guide",
      href: "/blog/rohtang-pass-travel-guide",
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
              {label}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="flex items-center gap-1 font-semibold text-[#29566A]">
              <MapPin className="h-3.5 w-3.5 text-[#f97316]" />
              {cityName}
            </span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr]">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#ea580c] shadow-sm backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f97316]" />
                {label.toUpperCase()} IN {cityName.toUpperCase()}
              </span>

              <h1 className="mt-5 text-4xl font-black leading-tight text-[#29566A] sm:text-5xl">
                {label} in {cityName}
              </h1>

              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                Explore {cityName} your way with reliable self-drive,
                chauffeur-driven and outstation{" "}
                {config.labelShort.toLowerCase()}.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#choose-your-car"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#f97316] px-7 py-3.5 text-sm font-bold text-white shadow-[0_6px_28px_rgba(238,164,110,0.4)] transition-all hover:scale-105 hover:bg-[#ea580c] active:scale-95"
                >
                  Explore Cars
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

            {heroImage && (
              <div className="relative hidden lg:block">
                <div className="absolute inset-x-8 top-6 h-[80%] rounded-full bg-orange-100/40 blur-3xl" />
                {/* biome-ignore lint/performance/noImgElement: city poster image */}
                <img
                  src={heroImage}
                  alt={cityName}
                  className="relative w-full max-w-md rounded-3xl border border-orange-100 object-cover shadow-premium lg:ml-auto"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==========================================================
          2. SEO INTRO
      =========================================================== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#29566A] md:text-4xl">
            {label} in {cityName}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-slate-600 sm:text-lg">
            <p>
              Looking for a reliable {label.toLowerCase()} in {cityName}?
              Swarikaro helps travellers discover cars for local sightseeing,
              family trips, weekend getaways and outstation journeys around{" "}
              {cityName}. Choose from different car types and rental services
              based on your travel needs.
            </p>
            <p>
              From{" "}
              {locations
                .slice(0, 3)
                .map((l) => l.name)
                .join(", ")}{" "}
              to nearby attractions, many places are spread across the valley.
              Having access to a car can make sightseeing more flexible —
              especially for families, groups and travellers planning day trips.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================================
          3. POPULAR PARTNERS
          Data-driven: rendered only when real partner data exists.
          (Placeholder-friendly — no fake shop names.)
      =========================================================== */}
      <RentalCityPartners type={type} city={cityName} />

      {/* ==========================================================
          4. CHOOSE YOUR CAR
      =========================================================== */}
      <section id="choose-your-car" className="scroll-mt-24 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RentalSectionHeading
            eyebrow="CHOOSE YOUR"
            title={`Choose Your Car for ${cityName}`}
            subtitle={`Popular cars available for ${config.label.toLowerCase()} in ${cityName}.`}
          />
          <RentalVehicleCatalogue />
        </div>
      </section>

      {/* ==========================================================
          5. CHOOSE YOUR SERVICE
      =========================================================== */}
      <section className="bg-[#FCF7F2] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RentalSectionHeading
            eyebrow="CHOOSE YOUR SERVICE"
            title={`Choose Your ${label} Service in ${cityName}`}
            subtitle={`All services available in ${cityName}.`}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {config.services.map((service) => (
              <Link
                key={service.slug}
                href={`/${type}/${city}/${service.slug}`}
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
                  {service.name} in {cityName}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          6. WHY CHOOSE
      =========================================================== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RentalSectionHeading
            eyebrow="WHY CHOOSE"
            title={`Why Choose Swarikaro for ${label} in ${cityName}?`}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {config.whyChoose.slice(0, 6).map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600/10 text-teal-700">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-bold text-[#29566A]">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-7 text-slate-600">
            Whether you&apos;re planning local sightseeing, a family holiday or
            a longer road trip, choosing the right vehicle can make your journey
            more comfortable and flexible.
          </p>
        </div>
      </section>

      {/* ==========================================================
          7. PLACES TO VISIT
      =========================================================== */}
      {places.length > 0 && (
        <section className="bg-[#FCF7F2] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RentalSectionHeading
              eyebrow="EXPLORE"
              title={`Places to Visit in ${cityName} by Car`}
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
          8. SEO CONTENT
      =========================================================== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <RentalSectionHeading
            align="left"
            eyebrow="TRAVEL"
            title={`Explore ${cityName} with a Rental Car`}
          />
          <div className="space-y-4 text-base leading-7 text-slate-600">
            <p>
              {cityName} rewards slow travel. Whether you&apos;re driving to
              Solang Valley for adventure, Vashisht for its hot springs, or
              Naggar for heritage views, a rental car gives you the freedom to
              stop wherever the mountains call. Self-drive works best for
              confident drivers on familiar routes, while a chauffeur helps on
              narrow mountain roads and long outstation trips.
            </p>
            <p>
              For families and groups, an SUV or MUV keeps everyone comfortable.
              Couples and solo travellers often prefer compact cars for easy
              parking around Mall Road and Old Manali. Outstation rentals from
              {cityName} open up day trips to nearby valleys and towns — just
              check seasonal road conditions and local restrictions before you
              head out.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================================
          9. POPULAR ROUTES
      =========================================================== */}
      {routes.length > 0 && (
        <section className="bg-[#FCF7F2] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RentalSectionHeading
              eyebrow="ROAD TRIPS"
              title={`Popular Road Trips from ${cityName}`}
              subtitle="Approximate distances and drive times. Road access can vary with weather and conditions."
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
                    <p className="mt-0.5 flex items-center gap-1.5 text-xs text-gray-500">
                      <Clock className="h-3.5 w-3.5 text-teal-600" />
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
          10. TRIP IDEAS
      =========================================================== */}
      {itineraries.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RentalSectionHeading
              eyebrow="PLAN YOUR TRIP"
              title={`Plan Your ${cityName} Trip`}
              subtitle="Sample itineraries to make the most of your rental car."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {itineraries.map((itinerary) => (
                <div
                  key={itinerary.days}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft"
                >
                  <h3 className="text-xl font-bold text-[#29566A]">
                    {itinerary.title}
                  </h3>
                  <div className="mt-4 space-y-3">
                    {itinerary.plan.map((day) => (
                      <div
                        key={day.day}
                        className="rounded-xl bg-[#FCF7F2] p-4"
                      >
                        <p className="text-sm font-bold text-orange-600">
                          Day {day.day} · {day.title}
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                          {day.stops.join(" → ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==========================================================
          11. TRAVEL GUIDES
      =========================================================== */}
      <section className="bg-[#FCF7F2] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RentalSectionHeading
            eyebrow="GUIDES"
            title={`${cityName} Travel Guides`}
            subtitle="Plan your trip with our travel guides."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <h3 className="font-bold text-[#29566A] transition-colors group-hover:text-teal-700">
                  {guide.label}
                </h3>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-teal-700">
                  Read Guide <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          12. RELATED RENTAL CATEGORIES
      =========================================================== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RentalSectionHeading
            eyebrow="MORE WAYS"
            title={`More Ways to Explore ${cityName}`}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {relatedCategories.map((item) => (
              <Link
                key={item.slug}
                href={`${item.href}/${city}`}
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
          14. FAQ
      =========================================================== */}
      <section
        className="bg-[#FCF7F2] py-16 md:py-20"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <RentalSectionHeading
            eyebrow="FAQ"
            title={`Frequently Asked Questions`}
            subtitle={`${label} in ${cityName} — everything you need to know.`}
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
          16. AVAILABLE LOCATIONS
      =========================================================== */}
      {locations.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <RentalSectionHeading
              eyebrow="AVAILABLE AT"
              title={`${label} Available Across ${cityName}`}
              subtitle="Pick up your vehicle from any of these locations."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/${type}/${city}/${location.slug}`}
                  className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-bold text-[#29566A]">
                      {location.name}
                    </h3>
                    <p className="mt-0.5 line-clamp-1 text-xs text-gray-500">
                      {location.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==========================================================
          15. FINAL CTA
      =========================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-700 to-teal-900 py-16 md:py-20">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-black text-white md:text-4xl">
            Ready to Explore {cityName}?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-teal-100/90">
            Choose a {singular} that fits your journey and discover {cityName},
            the Kullu Valley and nearby destinations with Swarikaro.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#choose-your-car"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-teal-800 shadow-premium transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore Cars
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

/* ============================================================
   POPULAR PARTNERS — data-driven, no fake shop names.
   Renders a message when partner data is not wired yet.
============================================================ */

function RentalCityPartners({
  type,
  city,
}: {
  type: RentalType;
  city: string;
}) {
  const config = getRentalConfig(type);

  // Real partner/shop data is not available yet — show a helpful
  // placeholder instead of inventing shop names.
  const partners: unknown[] = [];

  if (partners.length === 0) return null;

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RentalSectionHeading
          eyebrow="VERIFIED PARTNERS"
          title={`Popular ${config.label} Partners in ${city}`}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* partner cards render from real data */}
        </div>
      </div>
    </section>
  );
}
