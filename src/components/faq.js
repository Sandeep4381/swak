"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Swarikaro?",
    answer:
      "Swarikaro is a mobility platform that connects customers, vehicle owners, and rental partners for easy rentals and reservations.",
  },
  {
    question: "How does Swarikaro work?",
    answer:
      "Users search vehicles in their area, choose a rental or reservation option, and complete booking through the app.",
  },
  {
    question: "How can I rent a vehicle using Swarikaro?",
    answer:
      "Download the Swarikaro User App, browse available vehicles, complete verification, and confirm your booking.",
  },
  {
    question: "How can I become a Swarikaro Partner?",
    answer:
      "Download the Swarikaro Partner App, register your account, submit the required documents, and complete verification.",
  },
  {
    question: "Can I rent a bike for a few hours?",
    answer:
      "Yes, availability depends on the partner and vehicle listing in your location.",
  },
  {
    question: "What vehicles are available on Swarikaro?",
    answer:
      "Depending on your city, you may find bikes, scooters, cars, and other local mobility options.",
  },
  {
    question: "Which cities does Swarikaro serve?",
    answer:
      "Swarikaro is expanding across multiple cities. Availability depends on local partner presence.",
  },
  {
    question: "Is Swarikaro available on Android?",
    answer:
      "Yes, the Swarikaro app is available on supported Android devices through the app store links on the website.",
  },
];

export default function FAQ() {
  return (
    <section className="relative overflow-hidden hero-wrapper pt-18 pb-10 lg:pt-24 lg:pb-8">
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-orange-200/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-[360px] w-[360px] rounded-full bg-[#29566A]/10 blur-[120px]" />

      <div className="container  relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[44%_56%] xl:grid-cols-[42%_58%]">
          <div className="relative flex justify-center lg:justify-start">
            <div className="absolute inset-x-10 top-8 h-[75%] rounded-full bg-orange-100/40 blur-3xl" />
            <div className="relative w-full max-w-[560px]">
              <div className="absolute left-4 top-6 hidden rounded-2xl border border-orange-100 bg-white/90 px-4 py-3 shadow-lg backdrop-blur sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <HelpCircle size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#29566A]">Need help?</p>
                    <p className="text-xs text-slate-500">Explore common answers</p>
                  </div>
                </div>
              </div>

              <Image
                src="https://ik.imagekit.io/swarikaro4/Swarikar_website/faq/faq_boy.webp?updatedAt=1785008441431"
                alt="Swarikaro FAQ – Vehicle Rental Platform in India | Rent Bikes, Cars & More"
                width={520}
                height={560}
                className="h-auto w-full object-contain drop-shadow-[0_18px_40px_rgba(249,115,22,0.14)]"
                priority
              />
            </div>
          </div>

          <div>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm font-extrabold uppercase tracking-[0.2em] text-orange-500">
  <span className="h-px w-16 bg-orange-500" />
  FAQ
  <span className="h-px w-16 bg-orange-500" />
</div>

<h2 className="mt-3 mb-4 text-center lg:text-left text-4xl sm:text-5xl lg:text-3xl font-black leading-tight text-[#29566A]">
  Frequently Asked{" "}
  <span className="text-orange-500">Questions</span>
</h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Quick answers to the most common Swarikaro questions. For the
              full FAQ experience, open the dedicated FAQ page.
            </p>

            <div className="mt-8 space-y-4">
              {faqs.slice(0, 5).map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
                    <div>
                      <h3 className="text-sm font-bold text-slate-600 sm:text-base">
                        {faq.question}
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/faq"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--secondary)]"
              >
                View full FAQ page
                <ArrowRight size={16} />
              </Link>

              <p className="text-sm text-slate-600">
                Browse all answers, categories, and support details in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
