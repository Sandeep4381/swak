import { benefits } from "@/data/shared/benefits";

export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#29566A] mb-10">Why Rent with Swarikaro</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100">
              <span className="text-2xl flex-shrink-0">{b.icon}</span>
              <div>
                <h3 className="font-semibold text-[#29566A]">{b.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
