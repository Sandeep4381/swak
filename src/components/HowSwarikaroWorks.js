"use client";
import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import Image from "next/image";
const mapIllustration = "https://ik.imagekit.io/swarikaro4/Swarikar_website/howSwarikaro/image-3.png?updatedAt=1785008498857";

<Image
  src={mapIllustration}
  alt="Self Drive Vehicle Rental"
  width={500}
  height={800}
/>

const steps = [
  {
    num: "01",
    title: "Choose Your Service.",
    desc: "Select Rental Vehicle or Reservation Vehicle based on your travel needs.",
    emoji: "🎯",
  },
  {
    num: "02",
    title: "Pick Your Location.",
    desc: "Search around your destination, stay location, or any place that matters to you.",
    emoji: "📍",
  },
  {
    num: "03",
    title: "Set Your Search Radius.",
    desc: "Define the area you want to explore for available vehicles.",
    emoji: "🔵",
  },
  {
    num: "04",
    title: "Discover nearby rental vehicles.",
    desc: "Browse trusted options from local partners around your selected area.",
    emoji: "🚗",
  },
  {
    num: "05",
    title: "Book instantly or reserve for later.",
    desc: "Book for immediate travel or schedule your journey in advance.",
    emoji: "📅",
  },
  {
    num: "06",
    title: "Enjoy Your Journey.",
    desc: "Travel with confidence using a mobility platform designed around people, places, and convenience.",
    emoji: "✈️",
  },
  {
    num: "07",
    title: "Rate your experience and earn rewards.",
    desc: "Review your trip and vehicle, help fellow travellers make better choices, and receive rewards.",
    emoji: "⭐",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
const [visible, setVisible] = useState(
  new Array(steps.length).fill(false)
);

const sectionRef = useRef(null);

  /* cascade steps into view on mount */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          steps.forEach((_, i) => {
            setTimeout(() => {
              setVisible(prev => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 120);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* auto-advance active step */
  useEffect(() => {
    const id = setInterval(() => setActiveStep(p => (p + 1) % steps.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-14 lg:py-12 overflow-hidden"
      style={{ background: "bg-[#fbf7f0]" }}
    >
       <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-200/20 blur-[120px]" />

      <div className="relative  hero-wrapper max-w-7xl mx-auto px-6 lg:px-8">

        {/* section label */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 text-base font-extrabold text-orange-500">
            <span className="h-px w-16 bg-orange-500" />
            HOW SWARIKARO WORKS
            <span className="h-px w-16 bg-orange-500" />
          </div>
         <h2 className="mt-3 text-4xl sm:text-5xl lg:text-3xl font-black leading-tight text-[#29566A] mb-4">
           Find and Book Rental Vehicles in Just a 
{" "}
           <span className="text-orange-500">Few Steps.
            </span>
          </h2>
          <p className="mt-3 text-lg leading-8 text-slate-600">
            Swarikaro makes discovering nearby rental vehicles simple using location based search and trusted mobility partners.
          </p>
        </div>

        {/* two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — illustration */}
          <div className="flex items-center justify-center lg:sticky lg:top-24 self-start">
  <div
    className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl h-[400px] lg:h-[440px] xl:h-[520px]"
  >
              {/* glow */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)",
                  filter: "blur(32px)",
                }}
              />
             <ImageWithFallback
  src={mapIllustration}
  alt="Swarikaro Booking Process Illustration"
  className="relative w-full h-full object-contain rounded-3xl"
  style={{
    filter: "drop-shadow(0 20px 48px rgba(249,115,22,0.18))",
  }}
/>

              {/* Active step overlay card */}
              <div
                className="absolute bottom-4 left-4 right-4 rounded-2xl px-4 py-3 transition-all duration-500"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(249,115,22,0.2)",
                  boxShadow: "0 8px 32px rgba(249,115,22,0.12)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                    style={{ background: "rgba(249,115,22,0.1)" }}
                  >
                    {steps[activeStep].emoji}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className="text-xs font-black"
                        style={{ color: "#f97316", fontFamily: "'Bricolage Grotesque', sans-serif" }}
                      >
                        {steps[activeStep].num}
                      </span>
                      <span
                        className="text-xs font-bold"
                        style={{ color: "#1a1008", fontFamily: "'Bricolage Grotesque', sans-serif" }}
                      >
                        {steps[activeStep].title}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "#7a5c45" }}>
                      {steps[activeStep].desc}
                    </p>
                  </div>
                </div>
                {/* step progress dots */}
                <div className="flex gap-1.5 mt-3 justify-center">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className="transition-all duration-300 rounded-full"
                      style={{
                        width: i === activeStep ? "20px" : "6px",
                        height: "6px",
                        background: i === activeStep ? "#f97316" : "rgba(249,115,22,0.2)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — steps list */}
   <div className="flex flex-col gap-3">
  {steps.map((step, i) => (
    <button
      key={step.num}
      onClick={() => setActiveStep(i)}
      className="w-full rounded-2xl px-5 py-4 text-left transition-all duration-300"
      style={{
        opacity: visible[i] ? 1 : 0,
        transform: visible[i] ? "translateX(0)" : "translateX(24px)",
        transition: `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`,

        background:
          activeStep === i
            ? "linear-gradient(135deg, rgba(41,86,106,0.10) 0%, rgba(41,86,106,0.03) 55%, rgba(255,255,255,1) 100%)"
            : "#ffffff",

        border: `1.5px solid ${
          activeStep === i
            ? "rgba(41,86,106,0.35)"
            : "rgba(41,86,106,0.15)"
        }`,

        boxShadow:
          activeStep === i
            ? "0 10px 30px rgba(41,86,106,0.10)"
            : "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <div className="flex items-start gap-4">
        {/* Step Number */}
        <div
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-slate-600 text-sm transition-all duration-300"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            background:
              activeStep === i
                ? "#29566A"
                : "rgba(41,86,106,0.08)",
            color: activeStep === i ? "#fff" : "#29566A",
          }}
        >
          {step.num}
        </div>

        <div>
         <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              color: activeStep === i ? "#29566A" : "text-slate-600",
            }}
          >
            {step.title}
          </h4>

           <p
                className="text-xs sm:text-sm leading-relaxed text-slate-600"
                
            style={{
              color: activeStep === i ? "#4F6D7A" : "text-slate-600",
            }}
          >
            {step.desc}
          </p>
        </div>
      </div>
    </button>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}
