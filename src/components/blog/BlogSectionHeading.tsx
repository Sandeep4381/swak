interface BlogSectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function BlogSectionHeading({
  title,
  subtitle,
  align = "center",
}: BlogSectionHeadingProps) {
  return (
    <div
      className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="text-3xl font-bold text-[#29566A] md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-base text-gray-500 md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
