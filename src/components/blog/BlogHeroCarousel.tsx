"use client";

import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import {
  blogCities,
  blogPosts,
  getBlogCategory,
  getBlogCity,
  getBlogPost,
} from "@/data/blog";

export interface HeroSlide {
  image: string;
  mobileImage?: string;
  alt: string;
  badge: string;
  title: string;
  subtitle: string;
}

interface BlogHeroCarouselProps {
  slides: HeroSlide[];
}

/* ============================================================
   SEARCH NORMALIZE
============================================================ */

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/* ============================================================
   POST SEARCH SCORE
============================================================ */

function scorePost(
  post: (typeof blogPosts)[number],
  query: string,
): number {
  const q = normalize(query);

  if (!q) return 0;

  const title = normalize(post.title);
  const slug = normalize(post.slug);
  const excerpt = normalize(post.excerpt);

  const primary = normalize(post.seo?.primaryKeyword ?? "");

  const secondary = (
    post.seo?.secondaryKeywords ?? []
  ).map(normalize);

  const longTail = (
    post.seo?.longTailKeywords ?? []
  ).map(normalize);

  const tags = (
    post.seo?.tags ?? []
  ).map(normalize);

  const city = normalize(
    post.citySlug
      ? (getBlogCity(post.citySlug)?.name ?? "")
      : "",
  );

  let score = 0;

  if (slug === q) score += 100;
  if (title === q) score += 90;
  if (primary === q) score += 80;

  const qTokens = q.split(" ");

  for (const token of qTokens) {
    if (token.length < 2) continue;

    if (slug.includes(token)) score += 12;
    if (title.includes(token)) score += 10;
    if (primary.includes(token)) score += 8;

    if (
      secondary.some((keyword) =>
        keyword.includes(token),
      )
    ) {
      score += 6;
    }

    if (
      longTail.some((keyword) =>
        keyword.includes(token),
      )
    ) {
      score += 5;
    }

    if (
      tags.some((tag) =>
        tag.includes(token),
      )
    ) {
      score += 4;
    }

    if (excerpt.includes(token)) score += 2;
    if (city.includes(token)) score += 3;
  }

  return score;
}

/* ============================================================
   FIND CITY
============================================================ */

function findCity(query: string) {
  const q = normalize(query);

  if (!q) return undefined;

  return blogCities
    .map((city) => {
      const name = normalize(city.name);
      const slug = normalize(city.slug);
      const desc = normalize(city.description);

      let score = 0;

      if (slug === q || name === q) {
        score += 100;
      }

      for (const token of q.split(" ")) {
        if (token.length < 2) continue;

        if (slug.includes(token)) score += 10;
        if (name.includes(token)) score += 8;
        if (desc.includes(token)) score += 2;
      }

      return {
        city,
        score,
      };
    })
    .sort((a, b) => b.score - a.score)[0];
}

/* ============================================================
   COMPONENT
============================================================ */

export default function BlogHeroCarousel({
  slides,
}: BlogHeroCarouselProps) {
  const safeSlides = slides ?? [];

  const [current, setCurrent] = useState(0);
  const [search, setSearch] = useState("");

  const router = useRouter();

  const timerRef =
    useRef<ReturnType<typeof setInterval> | null>(null);

  /* ==========================================================
     SLIDE
  ========================================================== */

  const goTo = useCallback(
    (index: number) => {
      if (!safeSlides.length) return;

      setCurrent(
        ((index % safeSlides.length) +
          safeSlides.length) %
          safeSlides.length,
      );
    },
    [safeSlides.length],
  );

  /* ==========================================================
     AUTOPLAY
  ========================================================== */

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    if (safeSlides.length <= 1) return;

    timerRef.current = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % safeSlides.length,
      );
    }, 5500);
  }, [safeSlides.length]);

  useEffect(() => {
    if (!safeSlides.length) return;

    startAutoPlay();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [
    safeSlides.length,
    startAutoPlay,
  ]);

  if (!safeSlides.length) {
    return null;
  }

  const activeSlide =
    safeSlides[
      Math.min(
        current,
        safeSlides.length - 1,
      )
    ];

  /* ==========================================================
     SEARCH
  ========================================================== */

  const runSearch = () => {
    const q = search.trim();

    if (!q) {
      router.push("/blog");
      return;
    }

    /* Exact post */

    const slugMatch = getBlogPost(
      normalize(q).replace(/\s+/g, "-"),
    );

    if (slugMatch) {
      router.push(
        `/blog/${slugMatch.slug}`,
      );
      return;
    }

    /* Category */

    const category = getBlogCategory(
      normalize(q).replace(/\s+/g, "-"),
    );

    if (category) {
      router.push(
        `/blog?category=${category.slug}`,
      );
      return;
    }

    /* Best matching post */

    const rankedPosts = [...blogPosts]
      .map((post) => ({
        post,
        score: scorePost(post, q),
      }))
      .sort(
        (a, b) => b.score - a.score,
      );

    const bestPost = rankedPosts[0];

    if (
      bestPost &&
      bestPost.score >= 8
    ) {
      router.push(
        `/blog/${bestPost.post.slug}`,
      );
      return;
    }

    /* City */

    const bestCity = findCity(q);

    if (
      bestCity &&
      bestCity.score >= 8
    ) {
      router.push(
        `/blog/${bestCity.city.stateSlug}/${bestCity.city.slug}`,
      );
      return;
    }

    /* Fallback */

    router.push(
      `/blog?search=${encodeURIComponent(q)}`,
    );
  };

  /* ==========================================================
     FEATURES
  ========================================================== */

  const features = [
    {
      icon: "⌖",
      title: "Destinations",
      subtitle: "Explore places",
    },
    {
      icon: "▣",
      title: "Travel Guides",
      subtitle: "In-depth guides",
    },
    {
      icon: "◉",
      title: "Travel Stories",
      subtitle: "Real experiences",
    },
    {
      icon: "♧",
      title: "Travel Tips",
      subtitle: "Expert advice",
    },
  ];

  /* ==========================================================
     JSX
  ========================================================== */

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: hover pauses hero autoplay
    <section
      className="
        relative
        h-[70vh]
        min-h-[480px]
        w-full
        overflow-hidden
        bg-[#f7f6f2]

        sm:min-h-[500px]

        md:h-[70vh]
        md:min-h-[540px]

        lg:min-h-[500px]
      "
      onMouseEnter={() => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      }}
      onMouseLeave={startAutoPlay}
    >
      {/* ======================================================
          BACKGROUND SLIDES
      ======================================================= */}

      {safeSlides.map((slide, index) => (
        <div
          key={slide.image}
          className={`
            absolute
            inset-0
            transition-opacity
            duration-1000
            ${
              index === current
                ? "opacity-100"
                : "opacity-0"
            }
          `}
          aria-hidden={
            index !== current
          }
        >
          <picture>
            {slide.mobileImage && (
              <source
                media="(max-width: 767px)"
                srcSet={slide.mobileImage}
              />
            )}

            {/* biome-ignore lint/performance/noImgElement: hero image */}
            <img
              src={slide.image}
              alt={slide.alt}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-[8000ms]
                ease-out
              "
            />
          </picture>
        </div>
      ))}

      {/* ======================================================
          READABILITY OVERLAY
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-white/55
          via-white/20
          to-transparent

          md:from-white/45
          md:via-white/15
        "
      />

      {/* ======================================================
          MOBILE TOP SHADE
      ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-28
          bg-gradient-to-b
          from-black/20
          to-transparent
          md:hidden
        "
      />

      {/* ======================================================
          MAIN CONTENT
      ======================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          h-full
          w-full
          max-w-7xl
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
        "
      >
        <div
          className="
            flex
            h-full
            flex-col

            pt-[95px]

            sm:pt-[100px]

            md:pt-[85px]

            lg:pt-[90px]
          "
        >
          <div
            className="
              w-full
              md:max-w-[580px]
              lg:max-w-[620px]
            "
          >
            {/* ==================================================
                BADGE
            =================================================== */}

            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-orange-400/50
                bg-white/85
                px-6
                py-1.5
                text-[11px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#29566A]
                shadow-sm
                backdrop-blur-md

                sm:px-3.5
                sm:text-[12px]
              "
            >
              <span
                className="
                  mr-1.5
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-orange-500
                "
              />

              {activeSlide.badge}
            </span>

            {/* ==================================================
                H1
            =================================================== */}

            <h1
              className="
                mt-6
                max-w-[500px]
                text-[40px]
                font-bold
                leading-[1.05]
                tracking-[-0.02em]
                text-[#29566A]
                drop-shadow-[0_2px_10px_rgba(255,255,255,0.7)]

                sm:mt-4
                sm:text-[38px]

                md:mt-4
                md:text-[40px]

                lg:text-[42px]
              "
            >
              Stories that inspire
              <br />
              your next journey
            </h1>

            {/* ==================================================
                DESCRIPTION
            =================================================== */}

            <p
              className="
                mt-3
                max-w-[440px]
                text-[20px]
                leading-[1.45]
                text-white
                drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]

                sm:text-base
                sm:leading-7

                md:text-[17px]
              "
            >
              {activeSlide.subtitle}
            </p>

            {/* ==================================================
                SEARCH
            =================================================== */}

            <div
              className="
                mt-[clamp(3.8rem,12vh,5.5rem)]
                flex
                h-[40px]
                w-full
                max-w-[430px]
                overflow-hidden
                rounded-full
                border
                border-white/50
                bg-white
                shadow-[0_8px_24px_rgba(0,0,0,0.18)]

                sm:mt-3
                sm:h-[42px]
              "
            >
              <div
                className="
                  flex
                  min-w-0
                  flex-1
                  items-center
                "
              >
                <Search
                  className="
                    ml-4
                    h-4
                    w-4
                    shrink-0
                    text-[#29566A]
                  "
                />

                <input
                  type="text"
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter"
                    ) {
                      runSearch();
                    }
                  }}
                  placeholder="Search destinations, blogs, topics..."
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    px-2
                    text-[11px]
                    text-slate-800
                    outline-none
                    placeholder:text-slate-400

                    sm:text-xs
                  "
                />
              </div>

              <button
                type="button"
                onClick={runSearch}
                className="
                  flex
                  h-full
                  shrink-0
                  items-center
                  gap-1
                  bg-[#29566A]
                  px-3
                  text-[10px]
                  font-bold
                  text-white
                  transition-colors
                  hover:bg-[#214958]

                  sm:px-4
                  sm:text-xs
                "
              >
                Explore

                <span className="text-sm">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          FEATURES
      ======================================================= */}

      <div
        className="
          absolute
          bottom-[70px]
          left-1/2
          z-20
          w-[calc(100%-24px)]
          max-w-[720px]
          -translate-x-1/2

          sm:bottom-[45px]

          md:bottom-[50px]
        "
      >
        <div
          className="
            grid
            h-full
            grid-cols-2
            gap-2

            sm:gap-2.5

            md:grid-cols-4
          "
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                flex
                h-full
                flex-row
                items-center
                justify-start
                gap-2
                rounded-xl
                border
                border-white/60
                bg-white/85
                px-2.5
                py-2
                shadow-[0_6px_18px_rgba(15,38,52,0.1)]
                backdrop-blur-md

                md:gap-2.5
                md:px-3
                md:py-2.5
              "
            >
              {/* ICON */}

              <div
                className="
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-orange-500/90
                  text-xs
                  text-white
                  shadow-[0_4px_12px_rgba(249,115,22,0.3)]

                  sm:h-7
                  sm:w-7

                  md:h-8
                  md:w-8
                  md:text-sm
                "
              >
                {feature.icon}
              </div>

              {/* TEXT */}

              <div className="min-w-0 text-left">
                <p
                  className="
                    whitespace-nowrap
                    text-[11px]
                    font-bold
                    text-[#29566A]

                    sm:text-xs

                    md:text-[13px]
                  "
                >
                  {feature.title}
                </p>

                <p
                  className="
                    whitespace-nowrap
                    text-[9px]
                    text-[#29566A]/65

                    sm:text-[10px]

                    md:text-[11px]
                  "
                >
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================
          SIGNATURE
      ======================================================= */}

      <div
        className="
          absolute
          bottom-[14px]
          right-3
          z-30
          max-w-[100px]
          rotate-[-5deg]
          text-right

          md:bottom-4
          md:right-6
        "
      >
        <p
          className="
            font-serif
            text-[16px]
            font-medium
            italic
            leading-tight
            text-[#29566A]

            md:text-[16px]
          "
        >
          Your adventure
          <br />
          trip awaits!
        </p>

        <div
          className="
            ml-auto
            mt-0.5
            h-px
            w-12
            rounded-full
            bg-orange-500
          "
        />
      </div>

      {/* ======================================================
          ARROWS
      ======================================================= */}

      {safeSlides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goTo(current - 1)}
            className="
              absolute
              left-3
              top-1/2
              z-30
              hidden
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-black/20
              text-white
              backdrop-blur-md
              transition
              hover:bg-black/40
              md:flex
            "
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goTo(current + 1)}
            className="
              absolute
              right-3
              top-1/2
              z-30
              hidden
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-black/20
              text-white
              backdrop-blur-md
              transition
              hover:bg-black/40
              md:flex
            "
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}
    </section>
  );
}