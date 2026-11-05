import {
  ArrowRight,
  BookOpen,
  Cog,
  Gavel,
  ShieldAlert,
  MapPin,
  Scale,
} from "lucide-react";
import RulesAccordion from "@/components/RulesAccordion";
import {
  siteConfig,
  storyConfig,
  rulesConfig,
  systemsConfig,
  lawsConfig,
  navLinks,
} from "@/config/site";

function SectionHeader({
  id,
  icon: Icon,
  title,
  subtitle,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle?: string;
}) {
  return (
    <div id={id} className="mb-10 scroll-mt-28 text-center">
      <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/10 text-red-500 ring-1 ring-red-600/30">
        <Icon className="h-6 w-6" />
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-neutral-400">{subtitle}</p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative bg-cnv-bg">
      {/* Background grid */}
      <div className="bg-grid pointer-events-none fixed inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
      <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />

      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-5 py-3">
          <a href="#" className="flex items-center gap-2 font-bold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-sm">
              {siteConfig.shortName[0]}
            </span>
            <span>{siteConfig.shortName}</span>
          </a>
          <ul className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-red-500">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={siteConfig.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
          >
            Discord
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="flex min-h-screen items-center justify-center px-6 pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-neutral-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              Comunidade de Roleplay • Brookhaven
            </span>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-7xl">
              Cidade Nova{" "}
              <span className="bg-gradient-to-r from-red-600 to-[#FF002B] bg-clip-text text-transparent">
                Roleplay
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
              {siteConfig.description}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={siteConfig.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-500"
              >
                Entrar no Discord
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#regras"
                className="glass inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Ler as regras
              </a>
            </div>
          </div>
        </section>

        {/* História */}
        <section className="mx-auto max-w-3xl px-6 py-24">
          <SectionHeader id="historia" icon={BookOpen} title={storyConfig.title} />
          <div className="glass space-y-5 rounded-3xl p-8 leading-relaxed text-neutral-300 sm:p-10">
            {storyConfig.paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === storyConfig.paragraphs.length - 1
                    ? "font-semibold text-white"
                    : ""
                }
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Sistemas RP */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeader
            id="sistemas"
            icon={Cog}
            title={systemsConfig.title}
            subtitle={systemsConfig.subtitle}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {systemsConfig.systems.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.title}
                  className="glass group rounded-2xl p-6 transition hover:border-red-600/40 hover:bg-white/[0.05]"
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-600/10 text-red-500 ring-1 ring-red-600/30">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {s.description}
                  </p>
                  {s.details && (
                    <ul className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm text-neutral-400">
                      {s.details.map((d) => (
                        <li key={d} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {/* Regras RP */}
        <section className="mx-auto max-w-3xl px-6 py-24">
          <SectionHeader
            id="regras"
            icon={ShieldAlert}
            title={rulesConfig.title}
            subtitle={rulesConfig.subtitle}
          />
          <RulesAccordion rules={rulesConfig.rules} />

          <div className="mt-8 rounded-2xl border border-red-600/30 bg-red-600/[0.06] p-6 backdrop-blur-xl">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
              <MapPin className="h-5 w-5 text-red-500" />
              {rulesConfig.safeZones.title}
            </h3>
            <p className="mt-2 text-neutral-300">
              {rulesConfig.safeZones.description}
            </p>
            <ul className="mt-4 space-y-2 text-neutral-300">
              {rulesConfig.safeZones.places.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Leis RP */}
        <section className="mx-auto max-w-5xl px-6 py-24">
          <SectionHeader
            id="leis"
            icon={Gavel}
            title={lawsConfig.title}
            subtitle={lawsConfig.subtitle}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {lawsConfig.laws.map((law) => {
              const Icon = law.icon;
              return (
                <article
                  key={law.article}
                  className="glass flex gap-4 rounded-2xl p-6 transition hover:border-red-600/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600/10 text-red-500 ring-1 ring-red-600/30">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-red-500">
                      {law.article}
                    </p>
                    <h3 className="mt-1 font-semibold text-white">{law.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                      {law.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* CTA final */}
        <section className="px-6 pb-24">
          <div className="glass mx-auto max-w-3xl rounded-3xl p-10 text-center">
            <Scale className="mx-auto mb-4 h-8 w-8 text-red-500" />
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Pronto para viver na Cidade Nova?
            </h2>
            <p className="mt-3 text-neutral-400">
              Entre no nosso Discord, leia as regras e comece sua história.
            </p>
            <a
              href={siteConfig.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-500"
            >
              Entrar no Discord <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
      </footer>
    </div>
  );
}
