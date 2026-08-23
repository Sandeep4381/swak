import { ChevronDown } from "lucide-react";
import type { BlogFaq } from "@/types/blog";

export default function BlogFaqs({
  faqs,
  showHeader = true,
}: {
  faqs: BlogFaq[];
  showHeader?: boolean;
}) {
  if (faqs.length === 0) return null;

  return (
    <section className="mt-10" itemScope itemType="https://schema.org/FAQPage">
      {showHeader && (
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600/10 text-teal-700">
            <span className="text-lg font-bold">?</span>
          </span>
          <div>
            <h2 className="text-xl font-bold text-[#29566A] md:text-2xl">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-500">
              Everything you need to know before you go.
            </p>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {faqs.map((faq) => (
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
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 transition-all group-open:rotate-180 group-open:bg-teal-700 group-open:text-white">
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
    </section>
  );
}
