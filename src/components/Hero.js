"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, ChevronRight, Menu, X, ArrowRight, Navigation, Clock, Users, Car, Download } from "lucide-react";
import ComingSoonButton from "./ui/comingsoon";

/* ─── City images that cycle inside the phone ─── */
const phoneImages = [
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=1100&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=1100&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=1100&fit=crop&auto=format",
];

const stats = [
  { value: "50+", label: "Cities" },
  { value: "1.2L+", label: "Vehicles" },
  { value: "4.8★", label: "Rating" },
  { value: "2M+", label: "Riders" },
];

const features = [
  { icon: Navigation, label: "Radius Search", short: "Radius", desc: "Find vehicles within your chosen radius", color: "#f97316" },
  { icon: Clock, label: "Advance Booking", short: "Advance", desc: "Plan ahead, book up to 7 days early", color: "#ea580c" },
  { icon: Users, label: "Growing Across India", short: "India", desc: "Expanding to 50+ cities nationwide", color: "#c2410c" },
];

const vehicleDots = [
  { top: "20%", left: "18%", emoji: "🚗" },
  { top: "28%", left: "68%", emoji: "🚗" },
  { top: "52%", left: "74%", emoji: "🛵" },
  { top: "60%", left: "16%", emoji: "🚗" },
  { top: "42%", left: "40%", emoji: "🚐" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [phoneImg, setPhoneImg] = useState(0);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  /* cycle phone bg + feature tab together */
  useEffect(() => {
    const id = setInterval(() => {
      setActiveFeature(p => (p + 1) % features.length);
      setPhoneImg(p => (p + 1) % phoneImages.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Animated hero background ── */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none hero-bg">
        {/* blob 1 — orange */}
        <div className="blob blob-1" />
        {/* blob 2 — red-orange */}
        <div className="blob blob-2" />
        {/* blob 3 — amber */}
        <div className="blob blob-3" />
        {/* dot grid */}
        <div className="dot-grid" />
      </div>



      {/* ── Hero ── */}
    <section
  className="
    relative
    hero-wrapper
    overflow-hidden
    !pt-16
    !pb-6
    lg:!pt-20
    lg:!pb-8
  "
>
       <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--foreground)]/5 blur-3xl" />
        <div
          className="
    hero-wrapper
    max-w-[1700px]
    mx-auto
    px-[5vw]
    grid
    lg:grid-cols-[3fr_2fr]
   
    gap-8
    lg:gap-8
    items-start
    lg:items-center
  "
        >
          {/* Left */}
          <div
            className="
    flex
    flex-col
    justify-center
    items-center
    text-center

    lg:items-start
    lg:text-left



  "
          >




            {/* Headline */}
            <h1
              className="
    font-bold
    leading-[1.09]
  
    text-[#29566A]
    mt-16
    
     text-[clamp(2rem,4vw,5.2rem)]
  "
            >
              Find the Right Vehicle,
              <br />

              <span className="text-[#FF6B00]">
                Exactly Where
              </span>

              <br />

              <span className="text-[#FF6B00]">
                You Need It.
              </span>
            </h1>

            <p className="text-base  mt-2 leading-relaxed mb-8 max-w-md" style={{ color: "#7a5c45" }}>
              Search around your preferred location, plan ahead and discover trusted mobility solutions for every journey.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 w-full">
              <ComingSoonButton
                ariaLabel="Download app"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95"
                style={{ background: "#f97316", color: "#fff", boxShadow: "0 6px 28px rgba(238, 164, 110, 0.4)" }}
              >
                <Download className="w-4 h-4" />
                Download App
              </ComingSoonButton>
             <Link href="partner" aria-label="Swarikaro partner" className="flex items-center">

                <button className="flex items-center justify-center gap-2 h-12 w-[195px] px-6 rounded-xl font-bold text-sm bg-white text-[#29566A] border border-[#29566A] shadow-sm transition-all hover:scale-105 active:scale-95">

                  <Users className="w-4 h-4" />

                  Become a Partner

                </button>

              </Link>

            </div>

            {/* Feature chips */}
            {/* Feature chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10">
              {features.map((f, i) => (
                <button
                  key={f.short}
                  onClick={() => setActiveFeature(i)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap"
                  style={{
                    background:
                      activeFeature === i
                        ? "rgba(249,115,22,0.08)"
                        : "rgba(249,115,22,0.08)",
                    color: activeFeature === i ? "#ea580c" : "#ea580c",
                    border: `1.5px solid ${activeFeature === i
                      ? "rgba(249,115,22,0.2)"
                      : "rgba(249,115,22,0.2)"
                      }`,
                  }}
                >
                  <f.icon className="w-3 h-3 flex-shrink-0" />
                  <span className="whitespace-nowrap">
                    {f.short === "India" ? "Growing Across India" : f.label}
                  </span>
                </button>
              ))}
            </div>


          </div>

          {/* Right — Phone mockup */}
          <div className="flex items-center  justify-center lg:justify-end">
            <div className="relative" style={{ perspective: "1200px" }}>

              {/* glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  borderRadius: "3rem",
                  background: "radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)",
                  filter: "blur(32px)",
                  transform: "scale(0.9) translateY(5%)",
                }}
              />

              {/* Phone chassis */}
              <div
                style={{
                  width: "290px",
                  borderRadius: "42px",
                  background: "#f8f4f0",
                  padding: "11px",
                  boxShadow: "0 0 0 1.5px rgba(0,0,0,0.12), 0 0 0 3px #fff, 0 32px 80px rgba(237, 200, 173, 0.2), 0 16px 48px rgba(0,0,0,0.12)",
                  transform: "rotateY(-5deg) rotateX(1.5deg)",
                  transformStyle: "preserve-3d",
                  position: "relative",
                }}
              >
                {/* Physical buttons */}
                {[
                  { top: "78px", right: "-4px", w: "3px", h: "36px" },
                  { top: "70px", left: "-4px", w: "3px", h: "24px" },
                  { top: "102px", left: "-4px", w: "3px", h: "24px" },
                ].map((b, i) => (
                  <div
                    key={i}
                    className="absolute rounded-sm"
                    style={{ top: b.top, right: b.right, left: b.left, width: b.w, height: b.h, background: "#ddd0c8" }}
                  />
                ))}

                {/* Screen */}
                <div
                  className="relative overflow-hidden"
                  style={{ borderRadius: "32px", background: "#fff8f2", aspectRatio: "9/18" }}
                >
                  {/* Dynamic island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
                    <div
                      className="rounded-full"
                      style={{ width: "88px", height: "25px", background: "#1a1008", boxShadow: "0 0 0 1px rgba(0,0,0,0.2)" }}
                    />
                  </div>

                  {/* Cycling city bg images */}
                  {phoneImages.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt="City"
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                      style={{ opacity: phoneImg === i ? 0.45 : 0 }}
                    />
                  ))}

                  {/* Warm overlay on top of city */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,248,242,0.25) 0%, rgba(255,248,242,0.1) 40%, rgba(255,240,225,0.6) 75%, rgba(255,240,225,0.98) 100%)",
                    }}
                  />

                  {/* Search bar at top */}
                  <div className="absolute top-10 left-3 right-3 z-10">
                    <div
                      className="rounded-xl px-3 py-2 text-xs font-medium flex items-center gap-2"
                      style={{ background: "rgba(255,255,255,0.88)", color: "#7a5c45", backdropFilter: "blur(8px)", border: "1px solid rgba(249,115,22,0.15)" }}
                    >
                      <MapPin className="w-3 h-3 flex-shrink-0" style={{ color: "#f97316" }} />
                      <span>Where do you want to go?</span>
                    </div>

                  </div>

                  {/* Radius rings */}
                  <div className="absolute inset-0 flex items-center justify-center" style={{ top: "14%", bottom: "34%" }}>
                    {/* outer dashed */}
                    <div
                      className="absolute rounded-full"
                      style={{ width: "80%", aspectRatio: "1", border: "1.5px dashed rgba(249,115,22,0.3)" }}
                    />
                    {/* mid */}
                    <div
                      className="absolute rounded-full"
                      style={{ width: "54%", aspectRatio: "1", border: "1.5px solid rgba(249,115,22,0.5)" }}
                    />
                    {/* inner */}
                    <div
                      className="absolute rounded-full"
                      style={{
                        width: "28%",
                        aspectRatio: "1",
                        border: "1.5px solid rgba(249,115,22,0.7)",
                        background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)",
                      }}
                    />
                    {/* center pin */}
                    <div
                      className="absolute rounded-full flex items-center justify-center z-10"
                      style={{
                        width: "22px",
                        height: "22px",
                        background: "#f97316",
                        boxShadow: "0 0 0 5px rgba(249,115,22,0.2), 0 4px 12px rgba(249,115,22,0.45)",
                      }}
                    >
                      <MapPin className="text-white" style={{ width: "11px", height: "11px" }} />
                    </div>

                    {vehicleDots.map((d, i) => (
                      <span
                        key={i}
                        className="absolute select-none"
                        style={{ top: d.top, left: d.left, fontSize: "15px", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.25))" }}
                      >
                        {d.emoji}
                      </span>
                    ))}
                  </div>

                  {/* Badge — top: Cab nearby */}
                  <div
                    className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full z-10"
                    style={{
                      top: "29%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(249,115,22,0.9)",
                      backdropFilter: "blur(8px)",
                      boxShadow: "0 4px 16px rgba(249,115,22,0.4)",
                    }}
                  >
                    <span style={{ fontSize: "11px" }}>🚗</span>
                    <span className="text-white font-bold whitespace-nowrap" style={{ fontSize: "10px" }}>
                      Cab nearby · 2 min
                    </span>
                  </div>

                  {/* Badge — right: Bike */}
                  <div
                    className="absolute flex items-center gap-1.5 px-2.5 py-1.5 rounded-full z-10"
                    style={{
                      top: "54%",
                      right: "5%",
                      background: "rgba(255,255,255,0.9)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(249,115,22,0.2)",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                    }}
                  >
                    <span style={{ fontSize: "11px" }}>🛵</span>
                    <span className="font-bold whitespace-nowrap" style={{ fontSize: "10px", color: "#ea580c" }}>
                      Bike · ₹45/hr
                    </span>
                  </div>

                  {/* Bottom panel */}
                  <div
                    className="absolute bottom-0 left-0 right-0 z-10"
                    style={{ padding: "10px 10px 14px" }}
                  >
                    {/* Choose vehicle label */}
                    <p className="text-xs font-bold mb-2" style={{ color: "#1a1008", fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                      Choose Vehicle
                    </p>

                    {/* Vehicle type pills */}
                    <div className="flex gap-2 mb-3 overflow-x-auto pb-0.5" style={{ scrollbarWidth: "none" }}>
                      {["🚗 Cab", "🛵 Bike", "🚐 Van", "🚌 Bus"].map((v, i) => (
                        <div
                          key={v}
                          className="flex-shrink-0 rounded-xl px-2.5 py-1.5 flex items-center gap-1 text-xs font-semibold"
                          style={{
                            background: i === 0 ? "#f97316" : "rgba(255,255,255,0.85)",
                            color: i === 0 ? "#fff" : "#7a5c45",
                            border: i === 0 ? "none" : "1px solid rgba(249,115,22,0.2)",
                            fontSize: "9px",
                          }}
                        >
                          {v}
                        </div>
                      ))}
                    </div>

                    {/* Feature tabs */}
                    <div className="flex gap-1.5 mb-2">
                      {features.map((f, i) => (
                        <button
                          key={f.short}
                          onClick={() => setActiveFeature(i)}
                          className="flex items-center gap-1 rounded-full font-semibold transition-all flex-shrink-0"
                          style={{
                            padding: "4px 9px",
                            fontSize: "9px",
                            background: activeFeature === i ? "#f97316" : "rgba(255,255,255,0.75)",
                            color: activeFeature === i ? "#fff" : "#ea580c",
                            border: `1px solid ${activeFeature === i ? "#f97316" : "rgba(249,115,22,0.2)"}`,
                          }}
                        >
                          <f.icon style={{ width: "8px", height: "8px" }} />
                          {f.short}
                        </button>
                      ))}
                    </div>

                    {/* Card row */}
                    <div
                      className="flex items-center gap-2 rounded-2xl"
                      style={{
                        background: "rgba(255,255,255,0.92)",
                        border: "1px solid rgba(249,115,22,0.15)",
                        padding: "7px 10px",
                        backdropFilter: "blur(16px)",
                        boxShadow: "0 2px 16px rgba(249,115,22,0.08)",
                      }}
                    >
                      <div
                        className="rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ width: "32px", height: "32px", background: "rgba(249,115,22,0.1)" }}
                      >
                        {(() => { const Icon = features[activeFeature].icon; return <Icon style={{ width: "14px", height: "14px", color: "#f97316" }} />; })()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold truncate" style={{ fontSize: "10px", color: "#1a1008", fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                          {activeFeature === 2 ? "Van · Advance booked" : features[activeFeature].label}
                        </p>
                        <p className="truncate" style={{ fontSize: "8.5px", color: "#7a5c45" }}>
                          {features[activeFeature].desc}
                        </p>
                      </div>
                      <ChevronRight style={{ width: "12px", height: "12px", color: "#f97316" }} />
                    </div>

                    {/* Home bar */}
                    <div className="flex justify-center mt-3">
                      <div className="rounded-full" style={{ width: "90px", height: "4px", background: "rgba(0,0,0,0.15)" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <style>{`
        .hero-bg {
          background:
            radial-gradient(circle at 12% 18%, rgba(249,115,22,.13), transparent 34%),
            radial-gradient(circle at 88% 14%, rgba(220,38,38,.08), transparent 32%),
            radial-gradient(circle at 80% 85%, rgba(251,146,60,.11), transparent 28%),
            linear-gradient(180deg, #fffdfb 0%, #fff8f2 50%, #fcf0e8 100%);
        }
        .dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(249,115,22,.07) 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: .4;
          pointer-events: none;
        }

        /* blob base */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          will-change: transform, opacity;
          mix-blend-mode: multiply;
          pointer-events: none;
        }

        /* blob 1 — large orange, top-left */
        .blob-1 {
          width: 600px; height: 600px;
          top: -160px; left: -120px;
          background: radial-gradient(circle, rgba(249,115,22,.28) 0%, rgba(220,38,38,.14) 55%, transparent 80%);
          animation: drift1 9s ease-in-out infinite;
        }

        /* blob 2 — red, top-right */
        .blob-2 {
          width: 500px; height: 500px;
          top: -80px; right: -100px;
          background: radial-gradient(circle, rgba(220,38,38,.18) 0%, rgba(249,115,22,.10) 50%, transparent 80%);
          animation: drift2 11s ease-in-out infinite;
        }

        /* blob 3 — amber, bottom-right */
        .blob-3 {
          width: 480px; height: 480px;
          bottom: -120px; right: 5%;
          background: radial-gradient(circle, rgba(251,146,60,.22) 0%, rgba(249,115,22,.12) 50%, transparent 80%);
          animation: drift3 13s ease-in-out infinite;
        }

        @keyframes drift1 {
          0%   { transform: translate(0px,  0px)  scale(1); }
          33%  { transform: translate(60px, 40px) scale(1.08); }
          66%  { transform: translate(20px, 70px) scale(0.95); }
          100% { transform: translate(0px,  0px)  scale(1); }
        }
        @keyframes drift2 {
          0%   { transform: translate(0px,   0px)  scale(1); }
          33%  { transform: translate(-50px, 50px) scale(1.06); }
          66%  { transform: translate(-20px,-30px) scale(0.97); }
          100% { transform: translate(0px,   0px)  scale(1); }
        }
        @keyframes drift3 {
          0%   { transform: translate(0px,   0px)  scale(1); }
          33%  { transform: translate(-40px,-50px) scale(1.1); }
          66%  { transform: translate(30px, -20px) scale(0.93); }
          100% { transform: translate(0px,   0px)  scale(1); }
        }

        ::-webkit-scrollbar { width: 0; background: transparent; }
      `}</style>
    </div>
  );
}