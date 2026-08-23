import { formatDate } from "@/lib/blog/format";
import type { BlogPost } from "@/types/blog";
import ExplorePlacesButton from "./ExplorePlacesButton";
import SaveGuideButton from "./SaveGuideButton";

export default function BlogHero({ post }: { post: BlogPost }) {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <div
        className="
          relative
          h-[620px]
          w-full

          sm:h-[640px]

          md:h-[660px]

          lg:h-[70vh]
          lg:min-h-[600px]
          lg:max-h-[760px]
        "
      >
        {/* =====================================================
            HERO IMAGE
        ====================================================== */}
        <picture className="absolute inset-0 block h-full w-full">
          {/* Mobile image */}
          <source
            media="(max-width: 767px)"
            srcSet={post.featuredImageMob || post.featuredImage}
          />

          {/* Desktop image */}
          {/* biome-ignore lint/performance/noImgElement: hero featured image */}
          <img
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover

              object-[70%_center]

              md:object-[72%_center]

              lg:object-[74%_center]
            "
          />
        </picture>

        {/* =====================================================
            WHITE LEFT READABILITY GRADIENT
        ====================================================== */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-white
            via-white/95
            via-[47%]
            to-white/10

            md:via-[50%]

            lg:via-[52%]
            lg:to-transparent
          "
        />

        {/* =====================================================
            MOBILE EXTRA WHITE FADE
        ====================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-b
            from-white/10
            via-transparent
            to-white/90

            md:to-white/70

            lg:to-white/30
          "
        />

        {/* =====================================================
            BOTTOM FADE
        ====================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-36
            bg-gradient-to-t
            from-white/90
            via-white/35
            to-transparent

            md:h-40

            lg:h-36
            lg:from-white/50
          "
        />

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <div
          className="
            relative
            z-10
            mx-auto
            h-full
            max-w-[1440px]

            px-5
            pt-24

            sm:px-8
            sm:pt-28

            md:px-10
            md:pt-28

            lg:px-12
            lg:pt-28

            xl:px-16
          "
        >
          <div
            className="
              w-full
              max-w-[720px]

              lg:max-w-[710px]

              xl:max-w-[730px]
            "
          >
            {/* =================================================
                CATEGORY
            ================================================== */}
            <div
              className="
                mb-4
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-orange-400/50
                bg-white/90
                px-4
                py-1.5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#29566A]
                shadow-sm
                backdrop-blur-md

                sm:mb-5
                sm:px-4
                sm:text-[11px]
              "
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
              </svg>

              <span>TRAVEL GUIDE</span>
            </div>

            {/* =================================================
                TITLE — HANDWRITTEN / SKETCH STYLE
            ================================================== */}
            <h1
              className="
                max-w-[700px]

                font-[family-name:var(--font-handwriting)]

                text-[29px]
                font-semibold
                italic
                leading-[1.12]
                tracking-[-0.015em]
                text-[#29566A]

                sm:text-[34px]

                md:text-[39px]

                lg:text-[45px]
                lg:leading-[1.1]

                xl:text-[48px]
              "
              style={{
                fontFamily:
                  '"Segoe Print", "Bradley Hand", "Comic Sans MS", cursive',
              }}
            >
              {post.title}
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}
            {post.excerpt && (
              <p
                className="
                  mt-4
                  max-w-[650px]

                  text-[16px]
                  leading-6
                  text-[#29566A]/90

                  sm:mt-5
                  sm:text-[16px]
                  sm:leading-6

                  md:text-[17px]
                  md:leading-7

                  lg:mt-5
                  lg:text-[18px]
                  lg:leading-7
                "
              >
                {post.excerpt}
              </p>
            )}

            {/* =================================================
                BUTTONS
            ================================================== */}
            <div
              className="
                mt-7
                flex
                flex-col
                gap-2.5

                sm:mt-6
                sm:flex-row
                sm:gap-3

                lg:mt-7
              "
            >
              {/* Explore */}
              <ExplorePlacesButton
                firstSectionId={post.sections[0]?.id}
              />

              {/* Save */}
              <SaveGuideButton postTitle={post.title} />
            </div>
          </div>
        </div>

        {/* =====================================================
            META
            Desktop: bottom-right
            Mobile: bottom area, above hero edge
        ====================================================== */}
        <div
          className="
            absolute
            bottom-5
            left-5
            right-5
            z-30

            flex
            items-center
            justify-center

            rounded-xl
            border
            border-[#29566A]/10
            bg-white/90
            px-3
            py-2.5

            text-[9px]
            text-[#29566A]/85

            shadow-lg
            backdrop-blur-md

            sm:left-auto
            sm:right-8
            sm:w-fit
            sm:px-4
            sm:text-[10px]

            md:right-10

            lg:bottom-8
            lg:right-12
            lg:gap-4
            lg:px-5
            lg:py-3
            lg:text-sm

            xl:right-16
          "
        >
          {/* =================================================
              DATE
          ================================================== */}
          <div className="flex items-center gap-1.5 whitespace-nowrap lg:gap-2">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className="lg:h-[18px] lg:w-[18px]"
            >
              <rect
                width="18"
                height="18"
                x="3"
                y="4"
                rx="2"
              />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y2="10" />
            </svg>

            <span>{formatDate(post.publishedAt)}</span>
          </div>

          <span className="mx-2 text-[#29566A]/25 lg:mx-0">
            |
          </span>

          {/* =================================================
              READ TIME
          ================================================== */}
          <div className="flex items-center gap-1.5 whitespace-nowrap lg:gap-2">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className="lg:h-[18px] lg:w-[18px]"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>

            <span>{post.readTimeMinutes} min read</span>
          </div>

          <span className="mx-2 text-[#29566A]/25 lg:mx-0">
            |
          </span>

          {/* =================================================
              AUTHOR
          ================================================== */}
          <div className="flex items-center gap-1.5 whitespace-nowrap lg:gap-2">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className="lg:h-[18px] lg:w-[18px]"
            >
              <circle cx="12" cy="8" r="3" />
              <path d="M5 21a7 7 0 0 1 14 0" />
            </svg>

            <span className="font-semibold text-[#29566A]">
              {post.authorName}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}