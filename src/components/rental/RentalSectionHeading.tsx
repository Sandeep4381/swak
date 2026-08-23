interface RentalSectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function RentalSectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: RentalSectionHeadingProps) {
  return (
    <div
      className={`mb-10 ${align === "center" ? "mx-auto max-w-3xl text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">
          <span className="h-px w-8 bg-orange-500" />
          {eyebrow}
          {align === "center" && <span className="h-px w-8 bg-orange-500" />}
        </span>
      )}
      <h2 className="text-3xl font-bold text-[#29566A] md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-base text-gray-500 md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
