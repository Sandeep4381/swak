import type { CityData } from "@/types/city";

export default function Hero({ city }: { city: CityData }) {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="mt-10 text-4xl md:text-6xl font-bold text-[#29566A]">{city.hero.title}</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{city.hero.subtitle}</p>
      </div>
    </section>
  );
}
