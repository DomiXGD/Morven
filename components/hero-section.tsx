import { MaterialIcon } from "@/components/icons";
import { LogoMark } from "@/components/logo-mark";

export function HeroSection() {
  return (
    <div className="gsap-section-content relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center sm:px-6">
      <div className="hero-glow absolute inset-0 z-0" />
      <div className="absolute left-0 top-16 h-40 w-40 animate-pulse rounded-full bg-[rgba(211,187,255,0.05)] blur-3xl sm:left-10 sm:top-20 sm:h-64 sm:w-64" />
      <div
        className="absolute bottom-16 right-0 h-56 w-56 animate-pulse rounded-full bg-[rgba(185,199,228,0.05)] blur-3xl sm:bottom-20 sm:right-10 sm:h-96 sm:w-96"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-4xl">
        <div className="gsap-animate-in">
          <LogoMark
            alt="MORVEN Large Logo"
            className="mx-auto mb-6 w-44 drop-shadow-[0_0_30px_rgba(109,40,217,0.3)] sm:mb-8 sm:w-56 md:w-80"
          />
        </div>

        <h1 className="gsap-animate-in text-3xl font-extrabold leading-tight text-[var(--text)] sm:text-4xl md:text-6xl">
          Arquitectura tecnológica escalable para empresas modernas.
        </h1>
        <p className="gsap-animate-in mx-auto mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
          Diseñamos soluciones digitales, SaaS y sistemas empresariales preparados para crecer con tu negocio.
        </p>

        <div className="gsap-animate-in mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <a
            href="#services"
            data-gsap-nav
            className="w-full rounded-lg border border-[var(--primary)] bg-[rgba(211,187,255,0.08)] px-6 py-3 text-sm font-semibold text-[var(--primary)] transition-all hover:bg-[rgba(211,187,255,0.18)] sm:w-auto"
          >
            Ver servicios
          </a>
          <a
            href="#contact"
            data-gsap-nav
            className="w-full rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-[var(--text)] transition-all hover:border-[var(--primary)] hover:text-[var(--primary)] sm:w-auto"
          >
            Contactar
          </a>
          <a
            href="#contact"
            data-gsap-nav
            className="w-full rounded-lg bg-[var(--primary-container)] px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 sm:w-auto"
          >
            Agendar consulta
          </a>
        </div>
      </div>

      <div className="gsap-animate-in absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce sm:block">
        <MaterialIcon name="expand_more" className="text-[var(--primary)]" />
      </div>
    </div>
  );
}
