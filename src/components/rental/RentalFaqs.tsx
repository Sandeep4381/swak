import { ChevronDown } from "lucide-react";
import type { RentalConfig } from "@/types/rental";
import RentalSectionHeading from "./RentalSectionHeading";

export default function RentalFaqs({ config }: { config: RentalConfig }) {
  return (
    <section
      className="bg-[#FCF7F2] py-16 md:py-20"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <RentalSectionHeading
          eyebrow="FAQ"
          title={`${config.label} – FAQs`}
          subtitle="Everything you need to know before you book."
        />
        <div className="space-y-3">
          {config.faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-gray-100 bg-white shadow-soft transition-all open:border-teal-600/30 open:shadow-card"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 font-semibold text-[#29566A] transition-colors hover:text-teal-700 [&::-webkit-details-marker]:hidden">
                <span itemProp="name" className="text-sm md:text-base">
                  {faq.question}
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition-all group-open:rotate-180 group-open:bg-orange-500 group-open:text-white">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <div
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
                className="border-t border-gray-100 px-5 py-4 text-sm leading-relaxed text-gray-600 md:text-base"
              >
                <p itemProp="text">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
