import { ArrowRight, Car, Headphones, ShieldCheck } from "lucide-react";
import type { RentalConfig } from "@/types/rental";

export default function RentalHero({ config }: { config: RentalConfig }) {
  /*
   * H1:
   * "Rent a Car, Your Way"
   *
   * We automatically highlight the last phrase.
   */
  const titleParts = config.seo.h1.split(",");

  const titleFirst = titleParts[0]?.trim() ?? config.seo.h1;
  const titleSecond = titleParts.slice(1).join(",").trim();

  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#07141a]

        /* Navbar ~72px mobile */
        h-[calc(80svh)]

        /* Navbar ~80px desktop */
        lg:h-[calc(100svh)]
      "
    >
      {/* =========================================================
          RESPONSIVE HERO IMAGE
      ========================================================== */}

      <picture className="absolute inset-0 block h-full w-full">
        {/* Mobile image */}
        <source media="(max-width: 767px)" srcSet={config.heroMobileImage} />

        {/* Desktop / tablet image */}
        {/* biome-ignore lint/performance/noImgElement: rental hero poster */}
        <img
          src={config.heroImage}
          alt={config.heroImageAlt}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover

            object-[70%_center]

            sm:object-[70%_center]

            lg:object-[70%_center]
          "
        />
      </picture>

      {/* =========================================================
          DESKTOP OVERLAY
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          hidden
          bg-gradient-to-r
          from-black/90
          via-black/55
          to-black/10

          lg:block
        "
      />

      {/* =========================================================
          MOBILE OVERLAY
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-gradient-to-b
          from-black/55
          via-black/20
          to-[#06151b]/95

          lg:hidden
        "
      />

      {/* =========================================================
          DESKTOP EXTRA BOTTOM FADE
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0

          hidden
          h-48

          bg-gradient-to-t
          from-[#07141a]
          via-[#07141a]/45
          to-transparent

          lg:block
        "
      />

      {/* =========================================================
          CONTENT WRAPPER
      ========================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          flex
          h-full
          w-full
          max-w-7xl
          flex-col

          px-5
          pb-5
          pt-6

          sm:px-6
          sm:pb-6
          sm:pt-7

          lg:px-8
          lg:pb-6
          lg:pt-7
        "
      >
        {/* =======================================================
            BREADCRUMB
        ======================================================== */}

        <nav
          aria-label="Breadcrumb"
          className="
            flex
            items-center
            justify-center
            gap-2

            text-xs
            font-medium
            text-white/75

            sm:text-sm

            lg:justify-start
          "
        >
          <a
            href="/"
            className="
              transition-colors
              hover:text-white
            "
          >
            Home
          </a>

          <span className="text-white/35">›</span>

          <span className="text-white">{config.labelShort}</span>
        </nav>

        {/* =======================================================
            MAIN CONTENT
        ======================================================== */}

        <div
          className="
            flex
            flex-1
            items-center
            justify-center

            lg:justify-start
          "
        >
          <div
            className="
              w-full
              max-w-xl

              text-center

              sm:max-w-2xl

              lg:max-w-[650px]
              lg:text-left
            "
          >
            {/* =================================================
                BADGE
            ================================================== */}

            <div
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-teal-300/20

                bg-[#06383d]/70

                px-4
                py-2

                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]

                text-teal-200

                shadow-lg
                shadow-black/20

                backdrop-blur-md

                sm:px-5
                sm:py-2.5
                sm:text-xs
              "
            >
              <span
                className="
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center

                  rounded-full
                  bg-teal-400/10
                "
              >
                <Car
                  className="
                    h-3.5
                    w-3.5
                    text-teal-300
                  "
                />
              </span>

              <span>{config.seo.badge}</span>
            </div>

            {/* =================================================
                H1
            ================================================== */}

            <h1
              className="
                mx-auto
                mt-5

                max-w-[620px]

                text-[40px]
                font-extrabold
                leading-[1.03]
                tracking-[-0.035em]

                text-white

                sm:mt-6
                sm:text-[48px]

                lg:mx-0
                lg:mt-6
                lg:text-[56px]
                lg:leading-[1.04]

                xl:text-[60px]
              "
            >
              <span className="text-white">{titleFirst}</span>

              {titleSecond && (
                <>
                  <span className="text-white">,</span>{" "}
                  <span className="text-teal-400">{titleSecond}</span>
                </>
              )}
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <p
              className="
                mx-auto
                mt-5

                max-w-[550px]

                text-[14px]
                leading-6

                text-slate-200

                sm:mt-5
                sm:text-base
                sm:leading-7

                lg:mx-0
                lg:text-[17px]
              "
            >
              {config.seo.heroSubtitle}
            </p>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <div
              className="
                mt-6

                flex
                flex-wrap
                items-center
                justify-center
                gap-3

                sm:mt-7

                lg:justify-start
              "
            >
              {/* Explore */}
              <a
                href="#popular-vehicles"
                className="
                  inline-flex
                  min-h-[46px]

                  items-center
                  justify-center
                  gap-2

                  rounded-xl

                  bg-teal-600

                  px-6
                  py-3

                  text-sm
                  font-bold
                  text-white

                  shadow-lg
                  shadow-teal-950/30

                  transition-all
                  duration-200

                  hover:-translate-y-0.5
                  hover:bg-teal-500

                  active:translate-y-0
                "
              >
                Explore {config.labelShort}
                <span aria-hidden="true" className="text-lg leading-none">
                  →
                </span>
              </a>

              {/* Contact */}
              <a
                href="/contact"
                className="
                  inline-flex
                  min-h-[46px]

                  items-center
                  justify-center
                  gap-2

                  rounded-xl

                  border
                  border-white/30

                  bg-white/10

                  px-6
                  py-3

                  text-sm
                  font-bold
                  text-white

                  backdrop-blur-md

                  transition-all

                  hover:border-white/40
                  hover:bg-white/20
                "
              >
                Contact Us
                <ArrowRight
                  className="
                    h-4
                    w-4
                  "
                />
              </a>
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM SIGNATURE TRUST BAR

            IMPORTANT:
            absolute bottom = always at hero bottom
            no extra gap
        ======================================================== */}

        <div
          className="
            absolute

            bottom-5
            left-1/2

            w-[calc(100%-40px)]
            max-w-[720px]

            -translate-x-1/2

            rounded-2xl

            border
            border-white/10

            bg-black/30

            px-2
            py-2.5

            shadow-2xl
            shadow-black/20

            backdrop-blur-md

            sm:bottom-6
            sm:w-[calc(100%-48px)]
            sm:px-3
            sm:py-3

            lg:left-8
            lg:w-auto
            lg:max-w-[690px]
            lg:translate-x-0
            lg:rounded-xl
          "
        >
          <div
            className="
              grid
              grid-cols-3

              divide-x
              divide-white/10
            "
          >
            {/* =================================================
                BEST PRICE
            ================================================== */}

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-1

                px-1

                text-center

                sm:flex-row
                sm:gap-3
                sm:px-4
                sm:text-left
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-teal-300/20

                  bg-teal-950/80

                  sm:h-10
                  sm:w-10
                "
              >
                <ShieldCheck
                  className="
                    h-4
                    w-4
                    text-teal-300

                    sm:h-5
                    sm:w-5
                  "
                />
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    text-white

                    sm:text-sm
                  "
                >
                  Best Price
                </p>

                <p
                  className="
                    hidden
                    text-[10px]
                    text-slate-300

                    sm:block
                  "
                >
                  No hidden charges
                </p>
              </div>
            </div>

            {/* =================================================
                WELL MAINTAINED
            ================================================== */}

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-1

                px-1

                text-center

                sm:flex-row
                sm:gap-3
                sm:px-4
                sm:text-left
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-teal-300/20

                  bg-teal-950/80

                  sm:h-10
                  sm:w-10
                "
              >
                <Car
                  className="
                    h-4
                    w-4
                    text-teal-300

                    sm:h-5
                    sm:w-5
                  "
                />
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    text-white

                    sm:text-sm
                  "
                >
                  Well Maintained
                </p>

                <p
                  className="
                    hidden
                    text-[10px]
                    text-slate-300

                    sm:block
                  "
                >
                  Clean &amp; reliable
                </p>
              </div>
            </div>

            {/* =================================================
                24/7 SUPPORT
            ================================================== */}

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-1

                px-1

                text-center

                sm:flex-row
                sm:gap-3
                sm:px-4
                sm:text-left
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-teal-300/20

                  bg-teal-950/80

                  sm:h-10
                  sm:w-10
                "
              >
                <Headphones
                  className="
                    h-4
                    w-4
                    text-teal-300

                    sm:h-5
                    sm:w-5
                  "
                />
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    text-white

                    sm:text-sm
                  "
                >
                  24/7 Support
                </p>

                <p
                  className="
                    hidden
                    text-[10px]
                    text-slate-300

                    sm:block
                  "
                >
                  We&apos;re here for you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
