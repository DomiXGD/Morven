import { processSteps } from "@/lib/site-content";

export function ProcessSection() {
  return (
    <section className="bg-[var(--surface-lowest)] py-[120px]">
      <div className="site-shell px-0">
        <div className="mb-20">
          <span className="brand-mono text-sm uppercase tracking-widest text-[var(--tertiary)]">Protocolo Morven</span>
          <h2 className="mt-4 text-4xl font-bold text-[var(--text)] md:text-5xl">Un proceso de ejecución impecable.</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-12 z-0 hidden h-px w-full bg-white/10 lg:block" />
          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.step} className="space-y-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[rgba(211,187,255,0.3)] bg-[var(--surface-container)] text-5xl font-extrabold text-[var(--primary)]">
                  {step.step}
                </div>
                <h4 className="text-3xl font-semibold text-[var(--text)]">{step.title}</h4>
                <p className="text-[var(--muted)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
