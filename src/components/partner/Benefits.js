"use client";

import {
  BriefcaseBusiness,
  CalendarClock,
  Car,
  ChartNoAxesCombined,
  Clock3,
  Headphones,
  IndianRupee,
  Store,
  UsersRound,
} from "lucide-react";
import { motion } from "motion/react";

const businessTypes = [
  {
    icon: Car,
    title: "Individual Vehicle Owners",
    description:
      "Earn additional income by renting your bikes, scooters, or cars whenever they're available.",
  },
  {
    icon: Store,
    title: "Rental Shops",
    description:
      "Digitize your rental operations, manage bookings efficiently, and reach more local customers.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Fleet Operators",
    description:
      "Manage multiple vehicles, improve fleet utilization, and streamline operations from one platform.",
  },
  {
    icon: UsersRound,
    title: "Local Mobility Providers",
    description:
      "Expand your customer base and grow your business with Swarikaro's location first rental marketplace.",
  },
];

const benefits = [
  {
    icon: ChartNoAxesCombined,
    title: "Complete Business Control",
    description:
      "Manage vehicle listings, pricing, bookings, and availability anytime.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Schedule",
    description:
      "Accept bookings based on your business hours and vehicle availability.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Earnings",
    description:
      "Track bookings, payments, commissions, and settlements directly from the Partner App.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Receive assistance with onboarding, account management, and customer bookings whenever needed.",
  },
];

export function Benefits() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-18">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--foreground)]/5 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
<div className="flex items-center justify-center gap-2 text-base font-extrabold text-orange-500">
            <span className="h-px w-16  bg-orange-500" />
          PARTNER OPPORTUNTIES
            <span className="h-px w-16 bg-orange-500" />
          </div>
          <h2 className="text-3xl mt-2 font-bold leading-tight text-secondary sm:text-4xl lg:text-5xl">
           Built for Every Vehicle{" "}
            <span className="text-primary">Rental Business</span>
          </h2>
           <h4 className="mt-3 text-lg leading-8 text-slate-600">
           Who Can Become a Swarikaro Partner?


           </h4>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {businessTypes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-xl border border-border bg-white p-5 shadow-soft transition-shadow hover:shadow-xl"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                <item.icon className="h-4 w-4" />
              </div>
              <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">{item.title}</h4>
              <p
                className="text-xs sm:text-sm leading-relaxed text-slate-600"
                
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold leading-tight text-secondary sm:text-4xl lg:text-5xl">
            Benefits <span className="text-primary">You'll Love</span>
          </h2>
           <h4 className="mt-3 text-lg leading-8 text-slate-600">
          Everything You Need to Grow



           </h4>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex gap-4 rounded-xl border border-border bg-white p-5 shadow-soft sm:p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-white">
                <benefit.icon className="h-4 w-4" />
              </div>
              <div>
               <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">
                  {benefit.title}
                </h4>
                <p
                className="text-xs sm:text-sm leading-relaxed text-slate-600"
                
              >
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
