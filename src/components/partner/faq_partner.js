"use client";

import { ChevronDown, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    question: "Who can become a Swarikaro Partner?",
    answer:
      "Vehicle owners, rental shops, fleet operators, travel agencies, and eligible mobility service providers can join Swarikaro, subject to successful verification.",
  },
  {
    question: "How do I become a Swarikaro Partner?",
    answer:
      "Simply complete the Partner registration form, provide the required business and vehicle details, submit the necessary documents for verification, and wait for approval before listing your vehicles.",
  },
  {
    question: "What documents are required for verification?",
    answer:
      "Required documents may include a valid government-issued ID, vehicle registration certificate (RC), driving licence (where applicable), insurance, pollution certificate (PUC), and any business registration documents if you operate as a company.",
  },
  {
    question: "Can I list multiple vehicles?",
    answer:
      "Yes. You can add and manage multiple vehicles from your Partner account, making it easy to operate an entire fleet on Swarikaro.",
  },
  {
    question: "Is there a limit to the number of vehicles I can list?",
    answer:
      "No. Eligible partners can list as many verified vehicles as they own or manage, provided each vehicle meets Swarikaro's quality and verification requirements.",
  },
  {
    question: "Can I set my own rental prices?",
    answer:
      "Yes. Partners have the flexibility to set competitive rental prices for their vehicles while following Swarikaro's pricing policies and platform guidelines.",
  },
  {
    question: "Can I accept or decline booking requests?",
    answer:
      "Yes. Partners can review booking requests and choose to accept or decline them based on vehicle availability and operational requirements.",
  },
  {
    question: "How do I receive booking payments?",
    answer:
      "Booking payments are securely processed through Swarikaro and transferred to your registered bank account according to the platform's payout schedule after successful booking completion.",
  },
  {
    question: "When do I receive payments?",
    answer:
      "Payments are settled according to Swarikaro's payout schedule once the booking has been successfully completed and all applicable conditions have been met.",
  },
  {
    question: "Can I temporarily make a vehicle unavailable?",
    answer:
      "Yes. You can temporarily block or mark your vehicle as unavailable whenever it is under maintenance, already booked elsewhere, or not available for rental.",
  },
  {
    question: "Which cities can partners operate in?",
    answer:
      "Partners can operate in cities where Swarikaro is currently available. As the platform expands, additional cities will be added, allowing more partners to join.",
  },
  {
    question: "Do I need a physical shop?",
    answer:
      "No. Individual vehicle owners, freelancers, and registered rental businesses can all become partners, subject to eligibility and successful verification.",
  },
  {
    question: "Is document verification mandatory?",
    answer:
      "Yes. Verification is mandatory to ensure customer safety, build trust, and maintain the quality standards of the Swarikaro partner network.",
  },
  {
    question: "Can I update my vehicle details after listing?",
    answer:
      "Yes. Partners can update vehicle information, pricing, availability, photos, and other details whenever required through their Partner dashboard.",
  },
  {
    question: "Are there any registration or joining fees?",
    answer:
      "No. Swarikaro does not charge any registration fee for eligible partners during the onboarding process unless otherwise announced.",
  },
];

export function PartnerFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-18">
       <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-200/20 blur-[120px]" />


<div className="container mx-auto relative z-10 px-8 sm:px-10 lg:px-16 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
         <div className="flex items-center justify-center gap-4 text-base font-extrabold text-orange-500">
            <span className="h-px w-16  bg-orange-500" />
          PARTNER FAQ
            <span className="h-px w-16 bg-orange-500" />
          </div>
          <h2 className="text-3xl mt-2 font-bold leading-tight text-secondary sm:text-4xl lg:text-5xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-xl border border-border bg-white p-5 shadow-soft sm:p-6"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenIndex((current) => (current === index ? -1 : index))
                }
                className="flex w-full items-start gap-4 text-left"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div className="flex-1">
                  <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">
                    {faq.question}
                  </h4>
                </div>
                <ChevronDown
                  className={`mt-1 h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="mt-1 flex gap-4 pl-9">
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-12 max-w-4xl rounded-2xl bg-secondary px-5 py-8 text-center shadow-xl sm:px-8 lg:px-10"
        >
          <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
            Grow Your Business. Earn More. Drive the Future of Local Mobility.
          </h3>
          <p className="mt-4 text-base font-semibold text-white/80 sm:text-lg">
            Swarikaro Apna Safar, Apne Log.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
