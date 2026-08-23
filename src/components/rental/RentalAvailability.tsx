import { CheckCircle2 } from "lucide-react";
import type { RentalConfig } from "@/types/rental";
import RentalSectionHeading from "./RentalSectionHeading";

export default function RentalAvailability({
  config,
}: {
  config: RentalConfig;
}) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RentalSectionHeading
          eyebrow="WE ARE AVAILABLE IN"
          title="We Are Available In"
          subtitle={`${config.label} is live across India and expanding every month.`}
        />
        <div className="flex flex-wrap justify-center gap-3">
          {config.availableIn.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-2 rounded-full border border-gray-100 bg-white px-5 py-2.5 text-sm font-semibold text-[#29566A] shadow-soft transition-all hover:-translate-y-0.5 hover:border-teal-600/30 hover:shadow-card"
            >
              <CheckCircle2 className="h-4 w-4 text-teal-600" />
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
