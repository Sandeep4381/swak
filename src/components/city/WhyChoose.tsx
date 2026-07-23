import { whyChoose } from "@/data/shared/whyChoose";

export default function WhyChoose() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#29566A] mb-10">Why Choose Swarikaro</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {whyChoose.map((item) => (
            <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-[#29566A]">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
