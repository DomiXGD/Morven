import { MaterialIcon } from "@/components/icons";
import { services } from "@/lib/site-content";

export function ServicesSection() {
  return (
    <div className="gsap-section-content flex min-h-screen items-center justify-center bg-[var(--surface)]">
      <div className="site-shell px-0 py-[clamp(3.5rem,8vh,6rem)]">
        <div className="mb-10 space-y-3 text-center">
          <span className="gsap-animate-in brand-mono text-sm uppercase tracking-widest text-[var(--primary)]">Ecosistema de Soluciones</span>
          <h2 className="gsap-animate-in text-3xl font-bold text-[var(--text)] sm:text-4xl md:text-5xl">Capacidades Tecnológicas Avanzadas</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`gsap-animate-in glass-card group relative overflow-hidden rounded-xl p-5 sm:p-6 md:p-7 ${service.featured ? "lg:col-span-2" : ""}`}
            >
              <div
                className={`absolute rounded-full bg-[rgba(211,187,255,0.05)] transition-all duration-500 group-hover:bg-[rgba(211,187,255,0.2)] ${service.featured ? "bottom-0 right-0 h-64 w-64" : "-bottom-10 -right-10 h-32 w-32"}`}
              />

              {service.featured ? (
                <div className="flex flex-col items-start gap-6 md:flex-row md:gap-8">
                  <div className="flex-1">
                    <MaterialIcon name={service.icon} className="mb-6 text-4xl text-[var(--primary)]" />
                    <h3 className="mb-3 text-xl font-semibold text-[var(--text)] sm:text-2xl">{service.title}</h3>
                    <p className="text-[var(--muted)]">{service.description}</p>
                  </div>
                  <div className="w-full flex-none pt-0 md:w-auto md:pt-4">
                    <button className="w-full rounded-lg border border-[rgba(211,187,255,0.2)] bg-[rgba(211,187,255,0.1)] px-6 py-3 font-bold text-[var(--primary)] transition-all hover:bg-[var(--primary)] hover:text-white md:w-auto">
                      Solicitar Demo
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <MaterialIcon name={service.icon} className="mb-4 text-3xl text-[var(--primary)]" />
                  <h3 className="mb-3 text-xl font-semibold text-[var(--text)] sm:text-2xl">{service.title}</h3>
                  <p className="text-[var(--muted)]">{service.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
