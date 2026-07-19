"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  CalendarCheck,
  Car,
  Headphones,
  LifeBuoy,
  MapPin,
  Navigation,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

const STATS = [
  { icon: TrendingUp, value: "10+", label: " Operational Cities " },
  { icon: Users, value: "50+", label: "Verified Local Partners" },
  { icon: Car, value: "200+", label: "Vehicles Connected" },
  { icon: Headphones, value: "24x7", label: "Customer Assistance" },
];

const ACTIVE_CITIES = [
  {
    name: "Delhi",
    latitude: 28.6139,
    longitude: 77.2090,
  },
  {
    name: "Jaipur",
    latitude: 26.9124,
    longitude: 75.7873,
  },
  {
    name: "Patna",
    latitude: 25.5941,
    longitude: 85.1376,
  },
  {
    name: "Bhubaneswar",
    latitude: 20.2961,
    longitude: 85.8245,
  },
  {
    name: "Darjeeling",
    latitude: 27.0410,
    longitude: 88.2663,
  },
];

const EXPANDING_CITIES = [
  {
    name: "Manali",
    latitude: 32.2396,
    longitude: 77.1887,
  },
  {
    name: "Rishikesh",
    latitude: 30.0869,
    longitude: 78.2676,
  },
  {
    name: "Haridwar",
    latitude: 29.9457,
    longitude: 78.1642,
  },
  {
    name: "Kochi",
    latitude: 9.9312,
    longitude: 76.2673,
  },
];

const FEATURES = [
  {
    icon: Shield,
    title: "Trusted Local Partners",
    desc: "Every listed vehicle partner is verified and background-checked for safety.",
  },
  {
    icon: CalendarCheck,
    title: "Expanding Every Month",
    desc: "We're continuously adding new cities and travel routes every month.",
  },
  {
    icon: Navigation,
    title: "Easy Vehicle Discovery",
    desc: "Find the right vehicle quickly with a simple and smooth experience.",
  },
  {
    icon: LifeBuoy,
    title: "Reliable Support",
    desc: "Helping travelers before, during, and after every journey.",
  },
];

function CityPin({ city, active, delay = 0 }) {
  const [show, setShow] = useState(false);
  const color = active ? "var(--primary)" : "var(--secondary)";

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${city.left}%`,
        top: `${city.top}%`,
        transform: "translate(-50%, -50%)",
        zIndex: 10,
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onTouchStart={() => setShow(true)}
      onTouchEnd={() => setTimeout(() => setShow(false), 1200)}
    >
      {active && (
        <motion.span
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 34,
            height: 34,
            top: "50%",
            left: "50%",
            translate: "-50% -50%",
            background: color,
            opacity: 0.35,
          }}
          animate={{ scale: [1, 2.35, 1], opacity: [0.35, 0, 0.35] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeOut",
            delay: delay * 0.5,
          }}
        />
      )}

      <motion.button
        className="absolute left-1/2 bottom-0 flex h-8 w-8 -translate-x-1/2 translate-y-[2px] items-center justify-center rounded-full border-2 border-white shadow-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
        style={{
          background: active
            ? "linear-gradient(135deg, var(--primary), var(--primary-dark))"
            : "linear-gradient(135deg, var(--secondary), #173849)",
          boxShadow: active
            ? "0 0 0 5px rgba(249,115,22,0.16), 0 12px 22px rgba(41,86,106,0.18)"
            : "0 0 0 4px rgba(41,86,106,0.12), 0 10px 18px rgba(41,86,106,0.14)",
        }}
        whileHover={{ y: -4, scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        aria-label={city.name}
      />
      <span
        className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 pointer-events-none"
        style={{ background: active ? "white" : "rgba(255,255,255,0.88)" }}
      />
      <span
        className="absolute left-1/2 top-full h-2.5 w-px -translate-x-1/2 rounded-full pointer-events-none"
        style={{
          background: color,
          boxShadow: "0 2px 4px rgba(41,86,106,0.2)",
        }}
      />

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-full left-1/2 mb-9 pointer-events-none"
            style={{ transform: "translateX(-50%)" }}
          >
            <span
              className="whitespace-nowrap text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-lg"
              style={{
                background: active ? "var(--primary)" : "var(--secondary)",
                color: "white",
              }}
            >
              {city.name}
            </span>
            <span
              className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderTop: `5px solid ${
                  active ? "var(--primary)" : "var(--secondary)"
                }`,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function OurPresence() {
  return (
    <section className="relative py-18 lg:py-16 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--foreground)]/5 blur-3xl" />

      <div className="container mx-auto hero-wrapper px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 lg:mb-20"
        >
         <div className="flex items-center justify-center gap-4 text-base font-extrabold text-orange-500">
            <span className="h-px w-16  bg-orange-500" />
          GROWING ACROSS INDIA

            <span className="h-px w-16 bg-orange-500" />
          </div>
         <h2 className="mt-3 text-4xl sm:text-5xl lg:text-3xl font-black leading-tight text-[#29566A] mb-4">
           India's Growing Vehicle 
 <span style={{ color: "var(--primary)" }}> Rental Network</span>
          </h2>
          <p
            className="text-lg leading-8 text-slate-600 sm:text-lg  mx-auto"   
>
           Swarikaro is building one of India's fastest-growing location-based vehicle rental platforms by connecting travellers with verified rental businesses and vehicle owners.
         <br />  
Our mission is to make vehicle rentals simple, transparent, and available wherever your journey begins.

          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start mb-8 lg:mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
           

            <div className="relative w-full" style={{ paddingBottom: "105%" }}>
              <Image
                src="/map_real.webp"
                alt="Self Drive Vehicle Rental"
                fill
                className="absolute inset-0 object-contain select-none"
               
               
              />

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 55% 50% at 48% 48%, rgba(249,115,22,0.10) 0%, transparent 70%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 80% 85% at 50% 50%, black 40%, transparent 90%)",
                  maskImage:
                    "radial-gradient(ellipse 80% 85% at 50% 50%, black 40%, transparent 90%)",
                }}
              />

              
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-2"
            >
              <span
                className="flex items-center gap-2 text-sm"
                style={{ color: "var(--secondary)" }}
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: "var(--primary)" }}
                />
                Currently Available
              </span>
              <span
                className="flex items-center gap-2 text-sm"
                style={{ color: "var(--secondary)", opacity: 0.6 }}
              >
                <span
                  className="w-3 h-3 rounded-full border-2"
                  style={{ borderColor: "var(--secondary)" }}
                />
                Expanding Soon
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl p-6 sm:p-8"
              style={{
                background:
                  "linear-gradient(135deg, var(--secondary) 0%, #173849 100%)",
                color: "white",
                boxShadow: "0 24px 50px -28px rgba(41,86,106,0.65)",
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full pointer-events-none"
                style={{
                  background: "rgba(249,115,22,0.18)",
                  filter: "blur(2px)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 h-px w-full pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(249,115,22,0.7), transparent)",
                }}
              />
              <div
                className="relative inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                style={{
                  background: "rgba(249,115,22,0.20)",
                  color: "var(--primary)",
                }}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                Growing Every Month
              </div>
              <h3 className="relative text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-white">
                Building India's Trusted
                <br />
                Mobility Network
              </h3>
              <p
                className="relative text-sm sm:text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                Every new city strengthens our commitment to making travel
                easier across India. From major destinations to emerging hubs,
                verified vehicle partners are growing.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl p-4 sm:p-5 border flex flex-col gap-2 transition-colors duration-300"
                  style={{
                    borderColor: "rgba(41,86,106,0.12)",
                    background: "white",
                    boxShadow: "0 14px 30px -24px rgba(41,86,106,0.5)",
                  }}
                >
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(249,115,22,0.10)" }}
                  >
                    <s.icon
                      className="w-5 h-5"
                      style={{ color: "var(--primary)" }}
                    />
                  </span>
                  <p
                    className="text-2xl sm:text-3xl font-bold text-slate-600 "
                    
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-xs sm:text-sm font-medium leading-snug text-slate-600"
                  >
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "var(--primary)" }}
                >
                  Currently Available
                </p>
                <div className="flex flex-wrap gap-2">
                 {ACTIVE_CITIES.map((c) => (
  <Link
    key={c.name}
    href={`https://en.wikipedia.org/wiki/${encodeURIComponent(c.name)}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer"
      style={{
        background: "rgba(249,115,22,0.10)",
        color: "var(--secondary)",
        border: "1px solid rgba(249,115,22,0.25)",
      }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <MapPin
        className="w-3 h-3"
        style={{ color: "var(--primary)" }}
      />
      {c.name}
    </motion.span>
  </Link>
))}
                </div>
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase text-slate-600 tracking-widest mb-2"
                  
                >
                  Expanding Soon
                </p>
                <div className="flex flex-wrap gap-2">
                  {EXPANDING_CITIES.map((c) => (
                     <Link
    key={c.name}
    href={`https://en.wikipedia.org/wiki/${encodeURIComponent(c.name)}`}
    target="_blank"
    rel="noopener noreferrer"
  >
                    <motion.span
                      key={c.name}
                      className="inline-flex items-center gap-1.5 px-3 text-slate-600 py-1.5 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(41,86,106,0.06)",
                        
                        opacity: 0.7,
                        border: "1px solid rgba(41,86,106,0.15)",
                      }}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MapPin className="w-3 h-3" />
                      {c.name}
                    </motion.span>
                     </Link>
                  ))}
                   
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.015 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-2xl p-5 sm:p-6 border transition-colors duration-300"
              style={{
                borderColor: "rgba(41,86,106,0.10)",
                background: "white",
                boxShadow: "0 10px 28px -22px rgba(41,86,106,0.5)",
              }}
            >
              <span
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(249,115,22,0.10)" }}
              >
                <f.icon
                  className="w-5 h-5"
                  style={{ color: "var(--primary)" }}
                />
              </span>
              <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">
                {f.title}
              </h4>
              <p
                className="text-xs sm:text-sm leading-relaxed text-slate-600"
                
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
