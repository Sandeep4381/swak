import type { CityData } from "@/types/city";

export default function Testimonials({ city }: { city: CityData }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#29566A] mb-10">What Riders Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {city.testimonials.map((t, i) => (
            <div key={i} className="p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className={`text-sm ${j < t.rating ? "text-yellow-400" : "text-gray-200"}`}>★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm italic">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-4">
                <p className="font-semibold text-[#29566A] text-sm">{t.name}</p>
                <p className="text-xs text-gray-400">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
