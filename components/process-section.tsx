import { processSteps } from "@/lib/site-content";

export function ProcessSection() {
  return (
    <div className="gsap-section-content flex min-h-screen items-center justify-center bg-[var(--surface-lowest)]">
      <div className="site-shell px-0 py-[clamp(3.5rem,8vh,7.5rem)]">
        <div className="mb-10 sm:mb-14 md:mb-20">
          <span className="gsap-animate-in brand-mono text-sm uppercase tracking-widest text-[var(--tertiary)]">Protocolo Morven</span>
          <h2 className="gsap-animate-in mt-4 text-3xl font-bold text-[var(--text)] sm:text-4xl md:text-5xl">Un proceso de ejecución impecable.</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-12 z-0 hidden h-px w-full bg-white/10 lg:block" />
          <div className="relative z-10 grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-3 lg:gap-12">
            {processSteps.map((step) => (
              <div key={step.step} className="gsap-animate-in space-y-6">
                <div className="flex h-18 w-18 items-center justify-center rounded-full border-2 border-[rgba(211,187,255,0.3)] bg-[var(--surface-container)] text-3xl font-extrabold text-[var(--primary)] sm:h-20 sm:w-20 sm:text-4xl md:h-24 md:w-24 md:text-5xl">
                  {step.step}
                </div>
                <h4 className="text-2xl font-semibold text-[var(--text)] sm:text-3xl">{step.title}</h4>
                <p className="text-[var(--muted)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
