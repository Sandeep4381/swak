import type { CityData } from "@/types/city";

export default function NearbyAreas({ city }: { city: CityData }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-[#29566A] mb-8">Nearby Areas in {city.name}</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {city.nearbyAreas.map((area) => (
            <span key={area} className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm border border-gray-100">
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
