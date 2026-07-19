"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  "Early platform access",
   "Priority product updates",
  "Higher visibility in search results",
  "Dedicated onboarding support",
  "Reduced introductory commission",
 
  "Opportunity to influence future features",
];

export function Earlyprogram() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-18">
      <div className="pointer-events-none absolute -top-28 left-0 h-80 w-80 rounded-full bg-[var(--brand)]/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-[var(--foreground)]/6 blur-3xl" />
 <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid  items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
           <div className="flex items-center justify-center lg:justify-start gap-2 text-base font-extrabold text-orange-500">
  <span className="h-px w-16 bg-orange-500" />
  Early Partner Program
  <span className="h-px w-16 bg-orange-500" />
</div>

<h2 className="mt-3 text-center lg:text-left text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
  Become an Early{" "}
  <span className="text-orange-500 whitespace-nowrap">
    Swarikaro Partner
  </span>
</h2>
            

            <p className="mt-3 text-lg leading-8 text-slate-600">
              Join us during our early growth phase and unlock benefits designed
              to give first movers a real advantage.
            </p>

             <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-4 font-bold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
      >
              Claim early partner benefits
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {benefits.map((benefit, index) => (
            <motion.div
  key={benefit}
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.45, delay: index * 0.07 }}
  whileHover={{ y: -4 }}
  className="flex items-center gap-4 rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
>
  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200">
    <CheckCircle2 className="h-4 w-4" />
  </div>

  <p className="text-base font-medium leading-7 text-slate-700">
    {benefit}
  </p>
</motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
