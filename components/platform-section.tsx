import { infoStats, partnerLogos } from "@/lib/site-content";

export function PlatformSection() {
  return (
    <section className="site-shell px-0 py-[120px]">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="space-y-6">
          <span className="brand-mono text-sm uppercase tracking-widest text-[var(--primary)]">Global Expertise</span>
          <h2 className="text-4xl font-bold leading-tight text-[var(--text)] md:text-5xl">
            Impulsando la transformación de líderes industriales.
          </h2>
          <p className="text-lg leading-8 text-[var(--muted)]">
            En MORVEN, no solo construimos software; diseñamos los cimientos del futuro digital para corporaciones que demandan seguridad absoluta y escalabilidad sin límites.
          </p>
          <div className="flex flex-wrap gap-8 opacity-50 grayscale transition-all duration-500 hover:grayscale-0">
            {partnerLogos.map((partner) => (
              <div key={partner} className="flex h-10 w-32 items-center justify-center rounded bg-white/10">
                {partner}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {infoStats.map((stat, index) => (
            <div key={stat.title} className={`glass-card rounded-xl p-8 ${index === 1 ? "mt-8" : ""}`}>
              <div className="mb-2 text-4xl font-extrabold text-[var(--primary)] md:text-5xl">{stat.value}</div>
              <div className="mb-1 font-bold text-[var(--text)]">{stat.title}</div>
              <div className="text-sm text-[var(--muted)]">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
