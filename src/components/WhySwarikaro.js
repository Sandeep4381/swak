"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  CalendarDays,
  Car,
  MapPin,
  Navigation,
  Radar,
  Route,
} from "lucide-react";

const benefits = [
  {
    title: "Smart Radius Search.",
    copy: "Find bikes, scooters, cars, vans, buses, and other rental vehicles within your preferred search radius.",
    icon: MapPin,
  },
  {
    title: "Plan Ahead.",
    copy: "Reserve vehicles in advance for holidays, business trips, family travel, or weekend getaways.",
    icon: CalendarDays,
  },
  {
    title: "More Vehicle Choices.",
    copy: "Access a growing network of verified local vehicle rental partners offering flexible travel options.",
    icon: Car,
  },
  {
    title: "Better Travel Experience.",
    copy: "A modern vehicle rental app designed for convenience, flexibility, transparency, and trust.",
    icon: Route,
  },
];



export default function WhySwarikaro() {
  return (
    <section
      className={cn(
    "relative", "overflow-hidden", "hero-wrapper", "!py-16", "lg:!py-18",
  )}
    >

      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-200/20 blur-[120px]" />



      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Top Layout */}

        <div className="grid gap-10 lg:grid-cols-[42%_58%] xl:grid-cols-[43%_60%] items-center">


          <div className="hidden lg:flex relative justify-center lg:justify-start">

            {/* Top Left */}

            <div className="absolute left-0 top-8 z-20 hidden xl:block rounded-2xl border border-orange-100 bg-white/95 px-5 py-4 shadow-2xl">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <MapPin size={18} />
                </div>

                <div>
                  <h4 className="font-bold text-[#29566A]">
                    Your Location
                  </h4>

                  <p className="mt-1 text-sm leading-4 text-slate-600">
                    Search any area
                    <br />
                    within your radius
                  </p>
                </div>
              </div>
            </div>

            {/* Top Right */}

            <div className="absolute right-4 top-28 z-20 hidden xl:block rounded-2xl border border-orange-100 bg-white/95 px-5 py-4 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <Navigation size={18} />
                </div>

                <div>
                  <h4 className="font-bold text-[#29566A]">
                    Radius
                  </h4>

                  <p className="font-semibold text-slate-600">
                    25 KM
                  </p>

                  <div className="mt-2 h-1.5 w-24 rounded-full bg-orange-100">
                    <div className="h-full w-3/4 rounded-full bg-orange-500" />
                  </div>

                </div>

              </div>
            </div>

            {/* Bottom Left */}

            <div className="absolute bottom-10 left-2 z-20 hidden xl:block rounded-2xl border border-orange-100 bg-white/95 px-5 py-4 shadow-2xl">
              <div className="flex items-start gap-2">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <Car size={18} />
                </div>

                <div>
                  <h4 className="font-bold text-[#29566A]">
                    More Vehicles
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    More choices around
                    <br />
                    your location
                  </p>
                </div>

              </div>
            </div>

            {/* Main Image */}

            <Image
              src="https://ik.imagekit.io/swarikaro4/Swarikar_website/home/why.webp?updatedAt=1785009827846"
              alt="Swarikaro | About Swarikaro vehicle rental platform"
              width={720}
              height={720}
              priority
              className={cn(
      "w-full",
      "max-w-[420px]",
      "xl:max-w-[560px]",
      "2xl:max-w-[650px]",
      "object-contain",
    )}
            />

          </div>

          {/* RIGHT CONTENT */}

          <div
            className={cn(
    "w-full",
    "self-start",
    "mt-0",
    "lg:mt-2",
    "flex",
    "flex-col",
    "items-center",
    "text-center",
    "lg:items-start",
    "lg:text-left",
  )}
          >
 <div className="flex items-center justify-center gap-4 text-base font-extrabold text-orange-500">
            <span className="h-px w-16  bg-orange-500" />
         WHY SWARIKARO ?
            <span className="h-px w-16 bg-orange-500" />
          </div>
          

            <h2 className="mt-2 text-4xl sm:text-5xl lg:text-3xl font-black leading-tight text-[#29566A]">
              Built Around Your Location,
              <span className="block text-orange-500">
                Not Just Cities.
              </span>
            </h2>





            <p className="mt-3 text-lg leading-8 text-slate-600">
             Unlike traditional vehicle rental platforms that only let you search by city, Swarikaro helps you discover rental vehicles around the exact location that matters to you whether it's your destination, hotel, workplace, railway station, airport, or home.
            </p>

            <div
              className={cn(
    "mt-8",
    "grid",
    "grid-cols-2",
    "sm:grid-cols-4",
    "gap-6",
    "sm:gap-0",
  )}
            >

              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`
    flex flex-col items-center text-center
    px-4 py-2
    
    flex-1
    ${index !== 0 ? "lg:border-l lg:border-orange-100" : ""}
  `}
                  >
                    {/* Icon */}

                    <div className="mb-5 flex h-10 w-10 lg:h-10 lg:w-10 items-center justify-center rounded-full border border-orange-100 bg-orange-50/40">
                      <Icon
                        size={16}
                        className="text-orange-500 lg:h-6 lg:w-6"
                      />
                    </div>

                    {/* Title */}
<h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">
                      {item.title}
                    </h4>

                    {/* Description */}

                    <p
                className="text-xs sm:text-sm leading-relaxed text-slate-600"
                
              >
                      {item.copy}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>


        </div>




        {/* Stats */}

        <div className=" border-t border-orange-100 pt-8">

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

            <div className="text-center">
              <h4 className="text-2xl font-black text-slate-600">
                Location First
              </h4>

              <p className="mt-2 text-sm font-medium text-slate-600">
                Vehicle Discovery
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-2xl font-black text-slate-600">
                Flexible
              </h4>

              <p className="mt-2 text-sm font-medium text-slate-600">
                Search Radius
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-2xl font-black text-slate-600">
                Advance
              </h4>

              <p className="mt-2 text-sm font-medium text-slate-600">
                Journey Planning
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-2xl font-black text-slate-600">
                Trusted
              </h4>

              <p className="mt-2 text-sm font-medium text-slate-600">
                Mobility Partners
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}