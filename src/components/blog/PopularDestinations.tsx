"use client";

import Link from "next/link";
import {
  getBlogCity,
  getCityImages,
  getPopularDestinationSlugs,
} from "@/data/blog";
import { urls } from "@/lib/urls";

export default function PopularDestinations() {
  const cities = getPopularDestinationSlugs();

  const cityCards = cities
    .map((slug) => getBlogCity(slug))
    .filter((city) => city !== undefined)
    .map((city) => {
      const images = getCityImages(city.stateSlug, city.slug);
      const image = images[0] ?? city.image;

      return (
        <Link
          key={city.slug}
          href={urls.city(city.slug)}
          className="group relative aspect-[4/5] w-64 shrink-0 overflow-hidden rounded-2xl md:w-52 lg:w-56"
        >
          {/* biome-ignore lint/performance/noImgElement: demo content images */}
          <img
            src={image}
            alt={city.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="text-xl font-bold text-white">{city.name}</h3>
            <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-teal-300 transition-colors group-hover:text-white">
              Explore Guides
              <span aria-hidden>→</span>
            </span>
          </div>
        </Link>
      );
    });

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#29566A] md:text-4xl">
            Popular Destinations
          </h2>
        </div>

        <style>{`
          @keyframes popular-destinations-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .popular-destinations-track {
            animation: popular-destinations-marquee 30s linear infinite;
          }
          .popular-destinations-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Auto-scrolling marquee on every device */}
        <div className="scrollbar-none overflow-hidden">
          <div className="popular-destinations-track flex w-max gap-4">
            {[...cityCards, ...cityCards].map((card, index) => (
              <div key={card.key ?? `city-${index}`} className="flex">
                {card}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
