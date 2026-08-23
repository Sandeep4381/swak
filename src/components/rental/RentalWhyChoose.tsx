import type { RentalConfig } from "@/types/rental";
import RentalSectionHeading from "./RentalSectionHeading";

export default function RentalWhyChoose({ config }: { config: RentalConfig }) {
  return (
    <section className="bg-[#FCF7F2] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RentalSectionHeading
          eyebrow="WHY CHOOSE"
          title={`Why Choose ${config.label}?`}
          subtitle="Ride with confidence – here's what makes Swarikaro different."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {config.whyChoose.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-600/10 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                <item.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-[#29566A]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
