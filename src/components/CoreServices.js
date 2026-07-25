"use client";
import {
  BriefcaseBusiness,
  CalendarCheck,
  CalendarDays,
  Car,
  Gift,
  Headphones,
  IndianRupee,
  MapPin,
  Plane,
  Repeat2,
  ShieldCheck,
  Sparkles,
  ThumbsUp,
  UserRoundCheck,
  UsersRound,

} from "lucide-react";
import { cn } from "@/lib/utils";





const rentalFeatures = [
  { icon: CalendarCheck, text: "Hourly Rentals" },
  { icon: MapPin, text: "Daily Rentals" },
  { icon: CalendarDays, text: "Weekly Rentals" },
   { icon: CalendarDays, text: "Monthly Rentals" },
  { icon: Car, text: "Family Trips" },
  { icon: UsersRound, text: "Business Travel" },
  { icon: ShieldCheck, text: "Tourism" },
    { icon: ShieldCheck, text: "Weekend Getaways" },
      { icon: ShieldCheck, text: "Long Distance Travel" },
];
const reservationFeatures = [
  { icon: UserRoundCheck, text: "Driver Included" },
  { icon: BriefcaseBusiness, text: "Corporate & Business Travel" },
  { icon: Repeat2, text: "One-Way & Round-Trip" },
  { icon: CalendarDays, text: "Flexible Booking Durations" },
  { icon: Plane, text: "Outstation & Airport Transfers" },
  { icon: Car, text: "Car, Bus & More" },
  { icon: UsersRound, text: "Weddings, Events & Functions" },
];

const trustItems = [
  { icon: ShieldCheck, title: "Safe & Reliable", copy: "Verified vehicle rental partners and trusted local businesses." },
  { icon: IndianRupee, title: "Best Price Guarantee", copy: "Transparent pricing with no hidden charges." },
  { icon: Headphones, title: "Customer Support", copy: "Dedicated support whenever you need assistance." },
  { icon: ThumbsUp, title: "Growing Community", copy: "Helping travellers discover reliable rental vehicles across India." },
];

function FeatureChip({ icon: Icon, text }) {
  return (
    <div
      className={cn(
        "group",
        "flex items-center gap-3",
        "rounded-2xl",
        "border border-transparent",
        "bg-white",
        "px-4 py-3",
        "shadow-soft",
        "transition-all duration-200",
        "hover:border-orange-300",
      )}
    >
      <span
        className={cn(
          "flex h-7 w-7 shrink-0",
          "items-center justify-center",
          "rounded-full",
          "bg-[#fff3e8]",
          "text-[#f97316]",
          "transition-all duration-200",
          "group-hover:bg-[#f97316]",
          "group-hover:text-white",
        )}
      >
        <Icon className="h-4 w-4" strokeWidth={2} />
      </span>

        <p
                className="text-xs sm:text-sm leading-relaxed text-slate-600"
                
              >
        {text}
      </p>
    </div>
  );
}

export default function CoreServices() {
  return (
  <section className="relative overflow-hidden pt-18 pb-10 lg:pt-12 lg:pb-8">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--foreground)]/5 blur-3xl" />

      <div className="relative  hero-wrapper mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center ">
           <div className="flex items-center justify-center gap-4 text-base font-extrabold text-orange-500">
            <span className="h-px w-16  bg-orange-500" />
         OUR CORE SERVICES
            <span className="h-px w-16 bg-orange-500" />
          </div>
         <h2 className="mt-3 text-4xl sm:text-5xl lg:text-3xl font-black leading-tight text-[#29566A] mb-4">
            Travel Your Way <span className="text-orange-500">with Swarikaro.</span>
          </h2>
             <p
            className="text-lg leading-8 text-slate-600 sm:text-lg  mx-auto"   
>
          Swarikaro offers flexible vehicle rental solutions for individuals, families, tourists, professionals, and businesses. Discover trusted vehicles from verified partners and enjoy a seamless booking experience.

          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_1.15fr]">
          {/* Rental */}
          <article className="group relative isolate overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-border/60 transition-all hover:-translate-y-1 hover:shadow-premium">
            <div className="relative h-44 lg:h-48 overflow-hidden">
              <img
                   src="https://ik.imagekit.io/swarikaro4/Swarikar_website/core/rental.webp?updatedAt=1785008440948"
                alt="Rental vehicle service"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/1 to-transparent" />
              <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
                <CalendarDays className="h-3 w-3" /> Self-Drive
              </span>
            </div>

            <div className="relative p-5 sm:p-6">
              <span className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-premium ring-4 ring-white">
                <CalendarDays className="h-6 w-6" strokeWidth={2.2} />
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[var(--brand)]">Rental Vehicle</h3>
              <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">
                Plan today for the journeys of tomorrow.
              </h4>
              <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">
               Book bikes, scooters, cars, vans, buses, and more directly from trusted rental partners.

              </p>
                <div className="my-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/70">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
                <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">Suitable For</h4>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2.5">
                {rentalFeatures.map((f) => (
                  <FeatureChip key={f.text} {...f} />
                ))}
              </div>
            </div>
          </article>

          {/* Reservation */}
          {/* <article className="group relative isolate overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-border/60 transition-all hover:-translate-y-1 hover:shadow-premium">
            <div className="relative h-44 lg:h-48 overflow-hidden">
              <img
  src="/core/reservation.jpg"
  alt="Reservation vehicle service with driver"
  loading="lazy"
 className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-110"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/1 to-transparent" />
              <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
                <UserRoundCheck className="h-3 w-3" /> With Driver
              </span>
            </div>

            <div className="relative p-5 sm:p-6">
              <span className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground text-white shadow-premium ring-4 ring-white">
                <UserRoundCheck className="h-6 w-6" strokeWidth={2.2} />
              </span>

              <h3 className="mt-4 text-2xl font-bold text-foreground">Reservation Vehicle</h3>
              <p className="mt-1.5 text-sm font-semibold text-foreground">
                A professional driver for every important journey.
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                Ideal for one-way rides, round trips, outstation travel, weddings, family
                events, airport transfers and corporate travel.
              </p>

              <div className="my-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/70">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
                Suitable For
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {reservationFeatures.map((f) => (
                  <FeatureChip key={f.text} {...f} />
                ))}
              </div>
            </div>
          </article> */}

          {/* More Services */}
          <article className="group relative isolate overflow-hidden rounded-3xl shadow-card ring-1 ring-border/60 transition-all hover:-translate-y-1 hover:shadow-premium">
            <img
             src="https://ik.imagekit.io/swarikaro4/Swarikar_website/core/more.webp?updatedAt=1785008441118"
              alt="More services coming soon"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/60 to-foreground/95" />

            <div className="relative flex h-full min-h-[440px] flex-col justify-end p-6">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-premium">
                <Gift className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">More Services</h3>
              <p className="mt-1 text-2xl font-bold text-[var(--brand)]">Coming Soon</p>
              <p className="mt-3 text-[13.5px] leading-relaxed text-white/80">
               We're continuously expanding Swarikaro with new mobility services to make travel simpler, smarter, and more accessible across India.

              </p>
              <button className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md ring-1 ring-white/30 transition-all hover:bg-white hover:text-foreground">
                Stay Tuned <Sparkles className="h-3.5 w-3.5" />
              </button>
            </div>
          </article>
        </div>

        {/* Trust bar */}
        <div className="mt-10 grid gap-6 rounded-3xl border border-border/70 bg-white/80 px-6 py-7 shadow-card backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4 ">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-center gap-4 ${
                  i > 0 ? "lg:border-l lg:border-border lg:pl-6" : ""
                }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-[var(--brand)]">
                  <Icon className="h-4 w-4" strokeWidth={2.2} />
                </span>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">{item.title}</h4>
                   <p
                className="text-xs sm:text-sm leading-relaxed text-slate-600"
                
              >
                    {item.copy}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
