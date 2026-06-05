import { LogoMark } from "@/components/logo-mark";
import { MaterialIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <div className="gsap-section-content relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="hero-glow absolute inset-0 z-0" />
      <div className="absolute left-10 top-20 h-64 w-64 animate-pulse rounded-full bg-[rgba(211,187,255,0.05)] blur-3xl" />
      <div className="absolute bottom-20 right-10 h-96 w-96 animate-pulse rounded-full bg-[rgba(185,199,228,0.05)] blur-3xl" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-4xl">
        <div className="gsap-animate-in">
          <LogoMark
            alt="MORVEN Large Logo"
            className="mx-auto mb-8 w-64 drop-shadow-[0_0_30px_rgba(109,40,217,0.3)] md:w-80"
          />
        </div>

        <h1 className="gsap-animate-in text-4xl font-extrabold leading-tight text-[var(--text)] md:text-6xl">
          Arquitectura tecnológica escalable para empresas modernas.
        </h1>
        <p className="gsap-animate-in mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] md:text-xl">
          Diseñamos soluciones digitales, SaaS y sistemas empresariales preparados para crecer con tu negocio.
        </p>

        <div className="gsap-animate-in mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#services"
            data-gsap-nav
            className="rounded-lg border border-[var(--primary)] bg-[rgba(211,187,255,0.08)] px-6 py-3 font-semibold text-[var(--primary)] transition-all hover:bg-[rgba(211,187,255,0.18)]"
          >
            Ver servicios
          </a>
          <a
            href="#contact"
            data-gsap-nav
            className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-semibold text-[var(--text)] transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            Contactar
          </a>
          <a
            href="#contact"
            data-gsap-nav
            className="rounded-lg bg-[var(--primary-container)] px-6 py-3 font-semibold text-white transition-all hover:brightness-110"
          >
            Agendar consulta
          </a>
        </div>
      </div>

      <div className="gsap-animate-in absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <MaterialIcon name="expand_more" className="text-[var(--primary)]" />
      </div>
    </div>
  );
}
