"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  blogDestinations,
  blogStates,
  getBlogCity,
  getBlogPost,
  getBlogsByState,
  getDestinationPostSlug,
  getStatePostSlug,
} from "@/data/blog";

import { formatDate } from "@/lib/blog/format";
import { urls } from "@/lib/urls";

import BlogSectionHeading from "./BlogSectionHeading";
import CategoryBadge from "./CategoryBadge";

/* ============================================================
   MOBILE HERO IMAGE
   Automatically converts:

   himachal-pradesh-hero.webp
   ↓
   himachal-pradesh-hero-mob.webp

   This avoids requiring heroMob inside BlogState.
============================================================ */

function getMobileHeroImage(src: string): string {
  if (!src) return src;

  return src.replace(
    /-hero(\.(?:webp|png|jpg|jpeg))$/i,
    "-hero-mob$1",
  );
}

export default function TopBlogsByState() {
  const postsRowRef = useRef<HTMLDivElement | null>(null);
  const destinationsRowRef = useRef<HTMLDivElement | null>(null);

  const [paused, setPaused] = useState(false);

  /* ============================================================
     AUTO SCROLL BLOG POSTS
  ============================================================ */

  useEffect(() => {
    const row = postsRowRef.current;

    if (!row) return;

    let raf = 0;
    let last = 0;

    const tick = (time: number) => {
      raf = requestAnimationFrame(tick);

      if (paused) {
        last = time;
        return;
      }

      if (time - last < 4000) return;

      last = time;

      const canScroll = row.scrollWidth > row.clientWidth;

      if (!canScroll) return;

      const card =
        row.querySelector<HTMLElement>("[data-card]");

      const step = card
        ? card.offsetWidth + 12
        : row.clientWidth;

      if (
        row.scrollLeft + row.clientWidth >=
        row.scrollWidth - 4
      ) {
        row.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        row.scrollBy({
          left: step,
          behavior: "smooth",
        });
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [paused]);

  useEffect(() => {
    const row = destinationsRowRef.current;
    if (!row) return;

    const interval = window.setInterval(() => {
      const isAtEnd = row.scrollLeft + row.clientWidth >= row.scrollWidth - 4;

      row.scrollTo({
        left: isAtEnd ? 0 : row.scrollLeft + 260,
        behavior: "smooth",
      });
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const scrollDestinations = (direction: "left" | "right") => {
    destinationsRowRef.current?.scrollBy({
      left: direction === "right" ? 260 : -260,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-white py-10 sm:py-12 md:py-16">
      {/* ==========================================================
          MARQUEE
      =========================================================== */}

      <style>{`
        @keyframes top-blogs-marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .top-blogs-marquee-track {
          animation: top-blogs-marquee 56s linear infinite;
        }

        .top-blogs-marquee-track:hover {
          animation-play-state: paused;
        }

        @media (max-width: 767px) {
          .top-blogs-marquee-track {
            animation-duration: 44s;
          }
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-6">
        {/* ========================================================
            SECTION HEADING
        ========================================================= */}

        <BlogSectionHeading
          title="Explore India Through Travel Blogs"
          subtitle="Discover inspiring travel guides, hidden gems and stories from every corner of India."
        />

        <div className="space-y-6">
          {/* ========================================================
              STATES
          ========================================================= */}

          {blogStates.map((state) => {
            const allStatePosts = getBlogsByState(state.slug);
            const statePosts = state.popularCities
              .map((citySlug) =>
                allStatePosts.find((post) => post.citySlug === citySlug),
              )
              .flatMap((post) => (post ? [post] : []));

            /* ======================================================
               STATE PILLAR
            ======================================================= */

            const pillarPostSlug =
              getStatePostSlug(state.slug);

            const pillarPost = pillarPostSlug
              ? getBlogPost(pillarPostSlug)
              : undefined;

            const stateHref = pillarPost
              ? urls.blogPost(pillarPost.slug)
              : urls.blogState(state.slug);

            /* ======================================================
               MOBILE HERO
            ======================================================= */

            const mobileHeroImage =
              getMobileHeroImage(
                state.hero.image,
              );

            /* ======================================================
               DESTINATION LINKS
            ======================================================= */

            const destinationLinks =
              blogDestinations.map((place) => {
                const postSlug =
                  getDestinationPostSlug(
                    place.slug,
                  );

                const post = postSlug
                  ? getBlogPost(postSlug)
                  : undefined;

                const city =
                  getBlogCity(place.slug);

                const href = post
                  ? urls.blogPost(post.slug)
                  : city
                    ? urls.blogCity(
                        city.stateSlug,
                        city.slug,
                      )
                    : urls.blogState(
                        state.slug,
                      );

                return {
                  slug: place.slug,
                  hasPost: Boolean(post),
                  node: (
                    <Link
                      key={place.slug}
                      href={href}
                      className="
                        group
                        relative
                        aspect-[10/7]
                        w-40
                        shrink-0
                        overflow-hidden
                        rounded-xl

                        sm:w-44

                        md:w-48
                      "
                    >
                      {/* Destination image */}

                      {/* biome-ignore lint/performance/noImgElement: destination image */}
                      <img
                        src={place.image}
                        alt={place.name}
                        loading="lazy"
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover

                          transition-transform
                          duration-500

                          group-hover:scale-110
                        "
                      />

                      {/* Overlay */}

                      <div
                        className="
                          absolute
                          inset-0

                          bg-gradient-to-t
                          from-slate-950/85
                          via-slate-900/20
                          to-transparent
                        "
                      />

                      {/* Destination content */}

                      <div
                        className="
                          absolute
                          inset-x-0
                          bottom-0
                          p-2
                          sm:p-2.5
                        "
                      >
                        <h4
                          className="
                            text-xs
                            font-bold
                            text-white
                          "
                        >
                          {place.name}
                        </h4>

                        <p
                          className="
                            mt-0.5
                            text-[10px]
                            text-teal-200
                          "
                        >
                          {post
                            ? "Read Guide"
                            : city
                              ? `${city.blogCount} Blogs`
                              : "Explore"}
                        </p>
                      </div>
                    </Link>
                  ),
                };
              });

            /* Only show destinations that already have a posted blog. */
            const postedDestinationLinks = destinationLinks.filter(
              (link) => link.hasPost,
            );

            return (
              <div
                key={state.slug}
                className="
                  grid
                  overflow-hidden

                  rounded-2xl

                  border
                  border-gray-100

                  bg-white

                  shadow-soft

                  lg:grid-cols-5
                "
              >
                {/* ==================================================
                    LEFT STATE HERO
                =================================================== */}

                <div
                  className="
                    relative
                    w-full
                    overflow-hidden

                    aspect-[4/3]

                    sm:aspect-[3/2]

                    lg:col-span-2
                    lg:aspect-auto
                    lg:min-h-[520px]
                  "
                >
                  {/* =================================================
                      RESPONSIVE IMAGE

                      Desktop:
                      state.hero.image

                      Mobile:
                      automatically changes:

                      xxx-hero.webp
                      →
                      xxx-hero-mob.webp
                  ================================================== */}

                  <picture
                    className="
                      absolute
                      inset-0
                      block
                      h-full
                      w-full
                    "
                  >
                    {/* Mobile */}

                    <source
                      media="(max-width: 767px)"
                      srcSet={mobileHeroImage}
                    />

                    {/* Desktop */}

                    <img
                      src={state.hero.image}
                      alt={state.name}
                      className="
                        absolute
                        inset-0

                        h-full
                        w-full

                        object-cover
                        object-center

                        transition-transform
                        duration-700

                        lg:hover:scale-[1.02]
                      "
                    />
                  </picture>

                  {/* =================================================
                      DARK OVERLAY
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0

                      bg-gradient-to-t

                      from-slate-950/90
                      via-slate-900/30
                      to-transparent
                    "
                  />

                  {/* =================================================
                      MOBILE EXTRA FADE
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0

                      h-32

                      bg-gradient-to-t
                      from-slate-950/50
                      to-transparent

                      md:hidden
                    "
                  />

                  {/* =================================================
                      HERO CONTENT
                  ================================================== */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0

                      p-4

                      sm:p-5

                      md:p-6

                      lg:p-7
                    "
                  >
                    {/* Badge */}

                    <span
                      className="
                        inline-flex

                        rounded-full

                        bg-teal-500/20

                        px-2.5
                        py-1

                        text-[9px]
                        font-bold

                        uppercase
                        tracking-[0.12em]

                        text-teal-100

                        backdrop-blur-sm

                        sm:px-3
                        sm:text-[10px]

                        md:text-xs
                      "
                    >
                      {state.hero.badge}
                    </span>

                    {/* Title */}

                    <h3
                      className="
                        mt-2

                        text-xl
                        font-bold
                        leading-tight

                        text-white

                        sm:text-2xl

                        md:text-3xl
                      "
                    >
                      {state.name}
                    </h3>

                    {/* Description */}

                    <p
                      className="
                        mt-1

                        max-w-xl

                        line-clamp-2

                        text-xs
                        leading-5

                        text-slate-200

                        sm:text-sm

                        md:text-base
                      "
                    >
                      {state.description}
                    </p>

                    {/* CTA */}

                    <Link
                      href={stateHref}
                      className="
                        mt-3

                        inline-flex
                        items-center
                        gap-1.5

                        rounded-full

                        bg-white

                        px-3.5
                        py-2

                        text-xs
                        font-semibold

                        text-[#29566A]

                        transition-all

                        hover:-translate-y-0.5
                        hover:shadow-md

                        sm:px-4
                        sm:py-2.5
                        sm:text-sm
                      "
                    >
                      Explore {state.name}

                      <span aria-hidden>
                        →
                      </span>
                    </Link>
                  </div>
                </div>

                {/* ==================================================
                    RIGHT CONTENT
                =================================================== */}

                <div
                  className="
                    flex
                    min-w-0
                    flex-col

                    p-3

                    sm:p-4

                    md:p-5

                    lg:col-span-3
                    lg:p-6
                  "
                >
                  {/* =================================================
                      BLOG POSTS
                  ================================================== */}

                  {/* biome-ignore lint/a11y/noStaticElementInteractions: hover pauses carousel */}
                  <div
                    ref={postsRowRef}
                    onMouseEnter={() =>
                      setPaused(true)
                    }
                    onMouseLeave={() =>
                      setPaused(false)
                    }
                    className="
                      scrollbar-none

                      -mx-3
                      flex

                      snap-x
                      snap-mandatory

                      gap-3

                      overflow-x-auto

                      px-3
                      pb-2

                      sm:mx-0
                      sm:grid
                      sm:snap-none
                      sm:grid-cols-2
                      sm:overflow-visible
                      sm:px-0
                      sm:pb-0

                      md:gap-4

                      xl:grid-cols-3
                    "
                  >
                    {statePosts.map((post) => (
                      <Link
                        key={post.id}
                        data-card=""
                        href={urls.blogPost(
                          post.slug,
                        )}
                        className="
                          group

                          flex

                          w-[82%]
                          shrink-0

                          snap-start

                          flex-col

                          overflow-hidden

                          rounded-xl

                          border
                          border-gray-100

                          bg-white

                          shadow-soft

                          transition-all

                          hover:-translate-y-0.5
                          hover:shadow-card

                          sm:w-auto
                          sm:shrink
                          sm:snap-none
                        "
                      >
                        {/* Blog image */}

                        <div
                          className="
                            relative
                            aspect-[16/9]
                            overflow-hidden
                            bg-slate-100
                          "
                        >
                          {/* biome-ignore lint/performance/noImgElement: blog image */}
                          <img
                            src={
                              post.featuredImage
                            }
                            alt={
                              post.featuredImageAlt
                            }
                            loading="lazy"
                            className="
                              absolute
                              inset-0

                              h-full
                              w-full

                              object-cover

                              transition-transform
                              duration-500

                              group-hover:scale-105
                            "
                          />
                        </div>

                        {/* Blog content */}

                        <div
                          className="
                            flex
                            flex-1
                            flex-col

                            p-3
                          "
                        >
                          {post.citySlug && (
                            <p className="text-xs font-semibold text-teal-700">
                              {getBlogCity(post.citySlug)?.name}
                            </p>
                          )}

                          <CategoryBadge
                            category={
                              post.category
                            }
                          />

                          <h4
                            className="
                              mt-2

                              line-clamp-2

                              text-sm
                              font-bold
                              leading-snug

                              text-[#29566A]

                              transition-colors

                              group-hover:text-teal-700
                            "
                          >
                            {post.title}
                          </h4>

                          <div
                            className="
                              mt-auto

                              flex
                              items-center
                              gap-2

                              pt-2

                              text-xs
                              text-gray-400
                            "
                          >
                            <span>
                              {formatDate(
                                post.publishedAt,
                              )}
                            </span>

                            <span>
                              ·
                            </span>

                            <span>
                              {post.readTimeMinutes} min
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* =================================================
                      DESTINATION MARQUEE
                  ================================================== */}

                  {postedDestinationLinks.length > 0 && (
                    <div
                      className="
                        mt-4

                        border-t
                        border-gray-100

                        pt-4

                        sm:mt-5
                        sm:pt-5
                      "
                    >
                      <div className="mb-3 flex justify-end gap-2">
                        <button
                          type="button"
                          aria-label="Scroll destinations left"
                          onClick={() => scrollDestinations("left")}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[#29566A] transition-colors hover:border-teal-600 hover:bg-teal-50 hover:text-teal-700"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          aria-label="Scroll destinations right"
                          onClick={() => scrollDestinations("right")}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-[#29566A] transition-colors hover:border-teal-600 hover:bg-teal-50 hover:text-teal-700"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                      <div
                        ref={destinationsRowRef}
                        className="scrollbar-none overflow-x-auto scroll-smooth"
                      >
                        <div
                          className="
                            flex
                            w-max
                            gap-3
                          "
                        >
                          {/* First set */}

                          {postedDestinationLinks.map(
                            (link) => (
                              <div
                                key={`${link.slug}-a`}
                                className="flex"
                              >
                                {link.node}
                              </div>
                            ),
                          )}

                          {postedDestinationLinks.map(
                            (link) => (
                              <div
                                key={`${link.slug}-b`}
                                className="flex"
                              >
                                {link.node}
                              </div>
                            ),
                          )}

                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
