"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  "Smart location based customer discovery",
  "Easy vehicle listing",
  "Multiple vehicle management",
  "Transparent commission structure",
  "Secure partner verification",
  "Digital booking management",
  "Business insights & earnings tracking",
  "Dedicated partner support",
  "Growing customer network across India",
];

export function WhyBusinessChoseSwarikaro() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-18">
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-200/20 blur-[120px]" />

       <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex items-center justify-center gap-4 text-base font-extrabold text-orange-500">
            <span className="h-px w-16 bg-orange-500" />
           
             WHY BUSINESS CHOOSE US
           
            <span className="h-px w-16 bg-orange-500" />
          </div>

          <h2 className="mt-6 text-3xl font-bold leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
            Why choose Swarikaro{" "}
            <span className="text-orange-500">Partner?</span>
          </h2>

          <p className="mt-3 text-lg leading-8 text-slate-600">
            A partner first platform built to make discovery, booking, and
            business management feel easier from day one.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="flex items-start gap-4 rounded-[24px] border border-[#d9e4e1] bg-white px-6 py-6 shadow-soft transition-all duration-300 hover:border-orange-200 hover:shadow-xl"
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[var(--secondary)] text-[var(--secondary)]">
                <CheckCircle2 className="h-4 w-4" />
              </div>
               <p className="text-sm leading-7 text-slate-600">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
