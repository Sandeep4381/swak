"use client";
import { motion } from "motion/react";
import { ChevronRight, Star } from "lucide-react";
import ComingSoonButton from "../ui/comingsoon";



// Matches the dark-blue sky in both images so the image bleeds invisibly into the bg
const BG = "#0d2233";

export function Hero() {
  return (
   <section
  className="relative hero-wrapper min-h-screen overflow-hidden"

      style={{ background: BG }}
    >
      {/* ── DESKTOP: landscape image dissolves in from the right ── */}
      <div
        className="absolute inset-0 z-0 hidden lg:block"
        style={{ background: BG }}
      >
        <img
          src="https://ik.imagekit.io/swarikaro4/Swarikar_website/partner/bg-l.webp?updatedAt=1785011177935"
          alt="Become a Swarikaro Partner"
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-auto max-w-none"
          style={{
            /* show only right ~60% of the viewport */
            width: "70%",
            objectFit: "cover",
            objectPosition: "left center",
            /* CSS mask: left edge fades to transparent so it bleeds into bg */
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.3) 18%, rgba(0,0,0,0.7) 35%, black 60%)",
            maskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.3) 18%, rgba(0,0,0,0.7) 35%, black 60%)",
          }}
        />
        {/* Extra top/bottom fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,34,51,0.6)  transparent 5%, transparent 1%, rgba(13,34,51,0.3) 20%)",
          }}
        />
        {/* Bottom into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* ── MOBILE / TABLET: portrait image full-bg ── */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <img
          src="https://ik.imagekit.io/swarikaro4/Swarikar_website/partner/bg-m.webp?updatedAt=1785011177966"
          alt="Become a Swarikaro Partner "
          aria-hidden="true"
          className="w-full h-full"
          style={{ objectFit: "cover", objectPosition: "center center" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,34,51,0.82) 0%, rgba(13,34,51,0.55) 50%, rgba(13,34,51,0.85) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* ── Ambient orange glow where image meets bg ── */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 rounded-full blur-3xl pointer-events-none z-0 hidden lg:block"
        style={{
          right: "28%",
          width: 340,
          height: 340,
          background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.35, 1], opacity: [0.4, 0.85, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 pt-14 lg:pt-16 pb-20">
      <div className="hero-content flex flex-col items-center text-center lg:items-start lg:text-left lg:max-w-[62%] xl:max-w-[58%] mx-auto lg:mx-0">

          {/* Badge */}
          

          {/* Headline */}
         <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.32 }}
   className="max-w-[720px] text-4xl sm:text-5xl lg:text-5xl xl:text-5xl font-bold mt-10 leading-[1.08] tracking-tight text-white mb-6"
>
  Turn Your Vehicle Into{" "}
  <span
    className="relative inline-block"
    style={{ color: "var(--primary)" }}
  >
    Opportunity.
    <motion.span
      className="absolute left-0 -bottom-2 h-[4px] rounded-full"
      style={{ background: "var(--primary)" }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.8, delay: 1.1 }}
    />
  </span>
</motion.h1>

          {/* Sub-copy */}
         <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.48 }}
  className="text-base sm:text-lg lg:text-xl leading-relaxed mb-3 max-w-xl"
  style={{ color: "rgba(255,255,255,0.72)" }}
>
  Whether you own a single bike, manage a rental shop, or operate a fleet of
  vehicles, <span className="font-semibold text-white">Swarikaro Partner</span>{" "}
  helps you connect with customers looking for trusted vehicle rental and
  reservation services.
  </motion.p>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.48 }}
  className="text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
  style={{ color: "rgba(255,255,255,0.72)" }}
>

  List your bikes, scooters, cars, vans, buses, and other vehicles, manage
  bookings, track earnings, and grow your business through one easy to use
  Partner App.



  Join Swarikaro and become part of India's growing vehicle rental network.
</motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 mb-10"
          >
            {[
              { value: "50+", label: "Active Partners" },
              { value: "10+", label: "Cities" },
             
            ].map((stat, i) => (
              <div key={stat.label} className="text-center lg:text-left relative">
                {i > 0 && (
                  <div
                    className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-px h-8 hidden sm:block"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  />
                )}
                <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-xs sm:text-sm mt-1 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.76 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
          >
            
           <motion.div
  whileHover={{ y: -3 }}
  whileTap={{ scale: 0.97 }}
  className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
>
  <ComingSoonButton
    ariaLabel="Download partner app"
    variant="partner"
    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 px-8 py-4 text-base font-semibold transition-all duration-200 sm:w-auto"
    style={{
      borderColor: "rgba(255,255,255,0.28)",
      color: "white",
      background: "rgba(255,255,255,0.06)",
    }}
  >
    Download Partner App
  </ComingSoonButton>

  <button
    type="button"
    aria-label="See how it works"
    onClick={() => {
      const target = document.getElementById("how-it-works");
      target?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }}
    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 px-8 py-4 text-base font-semibold transition-all duration-200 sm:w-auto"
    style={{
      borderColor: "rgba(255,255,255,0.92)",
      color: "var(--secondary)",
      background: "rgba(255,255,255,0.98)",
    }}
  >
    See how it works
  </button>
</motion.div>
          
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-px h-10 rounded-full origin-top"
          style={{ background: "rgba(47, 79, 92, 0.65)" }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
