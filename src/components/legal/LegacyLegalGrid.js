import { Mail, ShieldCheck } from "lucide-react";

/** Matches the original Swarikaro Terms and Privacy page card layout. */
export default function LegacyLegalGrid({
  appName,
  lastUpdated,
  sections,
  supportEmail,
  documentTitle,
  description,
  introduction,
}) {
  const isPrivacyPolicy = documentTitle === "Privacy Policy";
  return (
    <section className="relative hero-wrapper overflow-hidden !py-16 lg:!py-20">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--foreground)]/5 blur-3xl" />
      <div className="container relative mx-auto px-4 lg:px-8">
        {isPrivacyPolicy ? (
          <header className="grid items-center gap-8 p-5 sm:p-6 lg:grid-cols-2 lg:p-10">
            <div className="text-center lg:text-left">
              <h1 className="mt-2 text-3xl font-bold text-[#29566A] md:text-5xl">
                Privacy <span className="text-orange-500">Policy</span>
              </h1>
              <p className="mt-3 text-lg leading-8 text-slate-600">
                {description}
              </p>
              <div className="mx-auto mt-6 grid max-w-xl gap-3 sm:grid-cols-2 lg:mx-0">
                <div className="rounded-2xl border border-orange-100 bg-orange-50 px-5 py-4 text-center">
                  <p className="text-xs font-bold uppercase tracking-wide text-orange-600">
                    Effective Date
                  </p>
                  <p className="mt-1 font-semibold text-[#29566A]">
                    {lastUpdated}
                  </p>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-orange-50 px-5 py-4 text-center">
                  <p className="text-xs font-bold uppercase tracking-wide text-orange-600">
                    Last Updated
                  </p>
                  <p className="mt-1 font-semibold text-[#29566A]">
                    {lastUpdated}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-orange-100 bg-[#F8F4EE] p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white">
                <ShieldCheck size={34} />
              </div>
              <h2 className="mt-4 text-2xl font-extrabold text-[#183153]">
                {appName} Privacy Notice
              </h2>
              <div className="mt-2 space-y-3 text-lg leading-8 text-slate-600">
                {introduction?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </header>
        ) : (
          <header className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-orange-500">
              Swarikaro {appName}
            </p>
            <h1 className="mt-2 text-3xl font-bold text-[#29566A] md:text-5xl">
              {documentTitle.split(" ")[0]}{" "}
              <span className="text-orange-500">
                {documentTitle.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {description}
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-500">
              Effective Date: {lastUpdated}{" "}
              <span className="mx-2 text-orange-400">•</span> Last Updated:{" "}
              {lastUpdated}
            </p>
          </header>
        )}

        <section className="relative mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <article
                key={section.title}
                className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <h2 className="text-sm font-bold leading-5 text-slate-600 sm:text-base">
                      {section.title}
                    </h2>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50">
                    <Icon className="h-5 w-5 text-orange-500" />
                  </span>
                </div>
                <div className="space-y-3 text-sm leading-relaxed text-slate-600">
                  {section.paragraphs?.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                  {section.intro && <p>{section.intro}</p>}
                  {section.subheading && (
                    <p className="font-semibold text-[#29566A]">
                      {section.subheading}
                    </p>
                  )}
                  {section.points && (
                    <ul className="space-y-3">
                      {section.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-600" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.closing && <p>{section.closing}</p>}
                </div>
                {section.contact && (
                  <a
                    href={`mailto:${supportEmail}`}
                    className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
                  >
                    <Mail className="h-4 w-4" />
                    {supportEmail}
                  </a>
                )}
              </article>
            );
          })}
        </section>
      </div>
    </section>
  );
}
