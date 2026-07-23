import { howItWorks } from "@/data/shared/howItWorks";

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#29566A] mb-10">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {howItWorks.map((step) => (
            <div key={step.step} className="text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                {step.step}
              </div>
              <h3 className="mt-4 font-semibold text-[#29566A]">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
