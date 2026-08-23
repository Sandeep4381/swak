import Link from "next/link";
import {
  ArrowUpRight,
  Bike,
  Car,
  Check,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const rentalButtons = [
  {
    label: "Car Rental",
    href: "/car-rental",
    icon: Car,
    description: "Comfortable rides for families & long journeys",
  },
  {
    label: "Bike Rental",
    href: "/bike-rental",
    icon: Bike,
    description: "Freedom to explore every road your way",
  },
  {
    label: "Scooter Rental",
    href: "/scooter-rental",
    icon: Bike,
    description: "Easy and convenient rides around the city",
  },
];

interface RentalCTAProps {
  title: string;
  text: string;
}

export default function RentalCTA({
  title,
  text,
}: RentalCTAProps) {
  return (
    <section className="relative overflow-hidden bg-[#29566A]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[-140px] h-[360px] w-[360px] rounded-full bg-white/[0.04] blur-3xl" />

        <div className="absolute bottom-[-180px] right-[-100px] h-[420px] w-[420px] rounded-full bg-orange-400/[0.07] blur-3xl" />

        {/* Decorative dots */}
        <div className="absolute right-[8%] top-[18%] grid grid-cols-5 gap-4 opacity-[0.12]">
          {Array.from({ length: 25 }).map((_, index) => (
            <span
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-white"
            />
          ))}
        </div>

        {/* Decorative route */}
        <svg
          className="absolute bottom-0 left-0 h-[220px] w-full opacity-[0.08]"
          viewBox="0 0 1400 220"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-20 180 C220 40 340 210 570 100 C800 -10 920 170 1150 80 C1260 35 1330 45 1420 15"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="7 10"
          />
        </svg>
      </div>

      {/* Main */}
      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-20">

          {/* LEFT */}
          <div>
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:text-xs">
              <Sparkles className="h-3.5 w-3.5 text-orange-300" />
              Travel made easier
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-[36px] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[56px]">
              {title}
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
              {text}
            </p>

            {/* Trust */}
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                  <Check className="h-3.5 w-3.5 text-orange-300" />
                </span>
                Trusted rentals
              </div>

              <div className="flex items-center gap-2 text-sm text-white/80">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                  <MapPin className="h-3.5 w-3.5 text-orange-300" />
                </span>
                Multiple destinations
              </div>
            </div>

            {/* Small promise */}
            <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-6">
              <ShieldCheck className="h-5 w-5 text-orange-300" />

              <div>
                <p className="text-xs font-semibold text-white">
                  Travel with confidence
                </p>

                <p className="mt-0.5 text-[11px] text-white/50">
                  Choose a ride that fits your journey.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* Panel */}
            <div className="overflow-hidden rounded-[28px] border border-white/15 bg-[#214D60]/80 p-3 shadow-[0_25px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-4">

              {/* Panel Header */}
              <div className="flex items-center justify-between px-3 pb-3 pt-2 sm:px-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-orange-300">
                    Explore rentals
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                    Choose your ride
                  </h3>
                </div>

                <div className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] sm:flex">
                  <MapPin className="h-4 w-4 text-white/70" />
                </div>
              </div>

              {/* Rental rows */}
              <div className="space-y-2">
                {rentalButtons.map((button, index) => {
                  const Icon = button.icon;

                  return (
                    <Link
                      key={button.href}
                      href={button.href}
                      className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.06] p-4 transition-all duration-300 hover:border-orange-300/30 hover:bg-white/[0.11] sm:p-5"
                    >
                      {/* Number */}
                      <span className="hidden text-[10px] font-bold text-white/25 sm:block">
                        0{index + 1}
                      </span>

                      {/* Icon */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#29566A] shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold text-white sm:text-base">
                          {button.label}
                        </h4>

                        <p className="mt-1 text-[11px] leading-4 text-white/50 sm:text-xs">
                          {button.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/60 transition-all duration-300 group-hover:border-orange-300/30 group-hover:bg-orange-400 group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-0" />
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Bottom */}
              
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-full bg-orange-400/10 blur-2xl" />
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-orange-500 via-orange-400 to-transparent" />
    </section>
  );
}