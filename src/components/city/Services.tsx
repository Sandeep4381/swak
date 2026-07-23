import { services } from "@/data/shared/services";

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#29566A] mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition">
              <span className="text-3xl">{service.icon}</span>
              <h3 className="mt-3 text-lg font-semibold text-[#29566A]">{service.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
