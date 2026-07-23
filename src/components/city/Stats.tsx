import type { CityData } from "@/types/city";

export default function Stats({ city }: { city: CityData }) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {city.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-bold text-orange-500">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
