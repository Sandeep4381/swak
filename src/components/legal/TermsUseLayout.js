import LegacyLegalGrid from "./LegacyLegalGrid";

/** Shared document presentation for the customer and partner application terms. */
export default function TermsUseLayout({
  appName,
  lastUpdated,
  terms,
  supportEmail,
  documentTitle = "Terms of Use",
  heroDescription,
  introduction,
}) {
  return (
    <LegacyLegalGrid
      appName={appName}
      lastUpdated={lastUpdated}
      sections={terms}
      supportEmail={supportEmail}
      documentTitle={documentTitle}
      description={
        heroDescription ||
        `Please read this ${documentTitle.toLowerCase()} carefully before using the Swarikaro ${appName}.`
      }
      introduction={introduction}
    />
  );
  /*
  const appLabel = appName === "Partner App" ? "PARTNER APP" : "USER APP";
  const downloadLabel =
    appName === "Partner App" ? "Download Partner App" : "Download User App";

  return (
    <main className="bg-[#fffaf5] pt-[72px] text-[#123f58]">
      <section className="relative min-h-[390px] overflow-hidden border-b border-orange-100 bg-[#f8f2e9] lg:min-h-[405px]">
        <div
          className="absolute inset-y-0 right-0 w-full bg-cover bg-[center_right] bg-no-repeat lg:w-[68%]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#fffaf4_0%,#fffaf4_27%,rgba(255,250,244,.91)_42%,rgba(255,250,244,.20)_70%,rgba(255,250,244,.06)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.5),transparent_48%,rgba(255,250,244,.15))]" />

        <div className="relative mx-auto max-w-[1400px] px-5 pb-8 pt-10 sm:px-8 lg:px-10 lg:pt-12">
          <a
            href="/contact"
            className="absolute right-5 top-5 hidden items-center gap-2 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 sm:flex lg:right-10"
          >
            <span className="text-lg leading-none">▯</span>
            {downloadLabel}
          </a>
          <div className="max-w-[600px] pt-4 lg:pt-7">
            <p className="text-xs font-extrabold uppercase tracking-[.32em] text-orange-500">
              {appLabel}
            </p>
            <h1 className="mt-3 font-serif text-5xl font-bold leading-none tracking-tight text-[#0c425d] sm:text-6xl lg:text-7xl">
              {documentTitle === "Privacy Policy" ? (
                <>
                  Privacy <span className="text-orange-500">Policy</span>
                </>
              ) : (
                <>
                  Terms of <span className="text-orange-500">Use</span>
                </>
              )}
            </h1>
            <p className="mt-3 max-w-md text-lg leading-7 text-slate-600 sm:text-xl">
              {heroDescription ||
                `Rules, responsibilities and guidelines for using the Swarikaro ${appName}.`}
            </p>
          </div>
          <div className="mt-7 flex max-w-xl flex-wrap gap-y-4 lg:mt-6">
            {highlights.map(({ title, label, icon: Icon }, index) => (
              <div key={title} className="flex items-center pr-5 sm:pr-7">
                {index > 0 && (
                  <span className="mr-4 h-11 w-px bg-slate-300/70 sm:mr-5" />
                )}
                <span className="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#eaf3f5]/90">
                  <Icon className="h-6 w-6 text-[#0c425d]" />
                </span>
                <span className="text-sm font-bold leading-5 text-[#123f58]">
                  {title}
                  <br />
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-7 px-5 py-8 sm:px-8 lg:grid-cols-[345px_minmax(0,1fr)] lg:px-10 lg:py-10">
        <aside className="self-start rounded-2xl bg-white p-3 shadow-[0_10px_28px_rgba(17,54,73,.10)] lg:sticky lg:top-24">
          <nav
            aria-label="Terms sections"
            className="max-h-[70vh] overflow-y-auto"
          >
            {terms.map((term, index) => {
              const Icon = term.icon;
              return (
                <a
                  key={term.title}
                  href={`#term-${index + 1}`}
                  className={`group flex items-center gap-4 border-b border-slate-200 px-3 py-3.5 last:border-0 transition hover:bg-[#eff7f8] ${index === 0 ? "rounded-xl bg-[#06445b] text-white shadow-md" : "text-[#123f58]"}`}
                >
                  <Icon
                    className={`h-5 w-5 shrink-0 ${index === 0 ? "text-white" : "text-[#06445b]"}`}
                  />
                  <span className="min-w-0 flex-1 text-sm font-semibold">
                    {term.title}
                  </span>
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 ${index === 0 ? "text-white" : "text-slate-500"}`}
                  />
                </a>
              );
            })}
          </nav>
        </aside>

        <article className="min-w-0 rounded-2xl bg-white px-6 py-7 shadow-[0_10px_28px_rgba(17,54,73,.09)] sm:px-9 sm:py-8 lg:px-10">
          <header className="border-b border-orange-100 pb-6">
            <p className="text-xs font-extrabold uppercase tracking-[.28em] text-orange-500">
              Swarikaro {appLabel}
            </p>
            <h2 className="mt-2 font-serif text-4xl font-bold leading-tight text-[#0c425d] sm:text-5xl">
              {documentTitle}
            </h2>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
              <span>Effective Date: {lastUpdated}</span>
              <span className="hidden text-slate-300 sm:inline">|</span>
              <span>Last Updated: {lastUpdated}</span>
            </div>
            <div className="mt-5 h-0.5 w-16 bg-orange-500" />
          </header>

          <div className="divide-y divide-slate-100">
            {terms.map((term, index) => {
              const Icon = term.icon;
              return (
                <section
                  id={`term-${index + 1}`}
                  key={term.title}
                  className="scroll-mt-28 py-7 first:pt-7"
                >
                  <h3 className="flex items-center gap-3 font-serif text-2xl font-bold leading-tight text-[#0c425d] sm:text-3xl">
                    <span>{index + 1}.</span>
                    {term.title}
                  </h3>
                  <div className="mt-2.5 space-y-3 text-[15px] leading-7 text-slate-600 sm:text-base">
                    {term.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {term.intro && <p>{term.intro}</p>}
                    {term.subheading && (
                      <p className="font-bold text-[#123f58]">
                        {term.subheading}
                      </p>
                    )}
                    {term.points && (
                      <ul className="space-y-1.5">
                        {term.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {term.closing && <p>{term.closing}</p>}
                  </div>
                  {term.contact && (
                    <a
                      href={`mailto:${supportEmail}`}
                      className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#06445b] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#0c536d]"
                    >
                      <Icon className="h-4 w-4" />
                      {supportEmail}
                    </a>
                  )}
                </section>
              );
            })}
          </div>
          <div className="mt-2 flex items-start gap-4 rounded-xl bg-[#fff7ed] px-5 py-4 text-sm leading-6 text-[#123f58]">
            <Info className="mt-0.5 h-6 w-6 shrink-0 text-orange-500" />
            <p>
              By using the Swarikaro {appName}, you acknowledge that you have
              read, understood and agree to this {documentTitle}.
            </p>
          </div>
        </article>
      </section>
    </main>
  );*/
}
