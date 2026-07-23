import { vehicleTypes } from "@/data/shared/vehicleTypes";

export default function VehicleTypes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#29566A] mb-10">Vehicle Types</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {vehicleTypes.map((v) => (
            <div key={v.name} className="bg-white p-4 rounded-xl text-center shadow-sm">
              <span className="text-4xl">{v.icon}</span>
              <h3 className="mt-2 font-semibold text-[#29566A]">{v.name}</h3>
              <p className="text-xs text-gray-500">{v.seats} seats</p>
              <p className="text-sm text-orange-500 font-semibold mt-1">{v.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
