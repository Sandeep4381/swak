import type { CityData } from "@/types/city";

export default function FAQ({ city }: { city: CityData }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#29566A] mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {city.faqs.map((faq, i) => (
            <details key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <summary className="font-semibold text-[#29566A] cursor-pointer">{faq.question}</summary>
              <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
