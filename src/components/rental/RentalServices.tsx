import { Check } from "lucide-react";
import type { RentalConfig } from "@/types/rental";
import RentalSectionHeading from "./RentalSectionHeading";

export default function RentalServices({ config }: { config: RentalConfig }) {
  return (
    <section className="bg-[#FCF7F2] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RentalSectionHeading
          eyebrow="CHOOSE YOUR"
          title="Choose Your Service"
          subtitle={`Three simple ways to rent a ${config.singular} with Swarikaro.`}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {config.services.map((service) => (
            <div
              key={service.slug}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                <service.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-[#29566A]">
                {service.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-gray-100 pt-5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-gray-600"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
