import { infoStats, partnerLogos } from "@/lib/site-content";

export function PlatformSection() {
  return (
    <div className="gsap-section-content flex min-h-screen items-center justify-center bg-[var(--surface)]">
      <div className="site-shell px-0 py-[clamp(3.5rem,8vh,7.5rem)]">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <span className="gsap-animate-in brand-mono text-sm uppercase tracking-widest text-[var(--primary)]">Global Expertise</span>
            <h2 className="gsap-animate-in text-3xl font-bold leading-tight text-[var(--text)] sm:text-4xl md:text-5xl">
              Impulsando la transformación de líderes industriales.
            </h2>
            <p className="gsap-animate-in text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              En MORVEN, no solo construimos software; diseñamos los cimientos del futuro digital para corporaciones que demandan seguridad absoluta y escalabilidad sin límites.
            </p>
            <div className="gsap-animate-in grid grid-cols-2 gap-3 opacity-70 transition-all duration-500 sm:flex sm:flex-wrap sm:gap-6 sm:opacity-50 sm:grayscale hover:grayscale-0">
              {partnerLogos.map((partner) => (
                <div key={partner} className="flex h-10 items-center justify-center rounded bg-white/10 px-3 text-center text-xs sm:w-32 sm:text-sm">
                  {partner}
                </div>
              ))}
            </div>
          </div>

          <div className="gsap-animate-in grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {infoStats.map((stat, index) => (
              <div key={stat.title} className={`glass-card rounded-xl p-6 sm:p-8 ${index === 1 ? "sm:mt-8" : ""}`}>
                <div className="mb-2 text-3xl font-extrabold text-[var(--primary)] sm:text-4xl md:text-5xl">{stat.value}</div>
                <div className="mb-1 font-bold text-[var(--text)]">{stat.title}</div>
                <div className="text-sm text-[var(--muted)]">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
