import { ContactForm } from "@/components/contact-form";
import { MaterialIcon } from "@/components/icons";

export function ContactSection() {
  return (
    <div className="gsap-section-content flex min-h-screen items-center justify-center bg-[var(--surface)] px-6">
      <div className="gsap-animate-in glass-card relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/5 p-8 md:p-16">
        <div className="absolute right-0 top-0 h-64 w-64 bg-[rgba(211,187,255,0.1)] blur-[100px]" />
        <div className="relative z-10 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="gsap-animate-in text-4xl font-bold text-[var(--text)] md:text-5xl">¿Listo para escalar?</h2>
            <p className="gsap-animate-in text-lg text-[var(--muted)]">
              Háblenos de su proyecto. Un consultor senior se pondrá en contacto en menos de 24 horas.
            </p>
            <div className="gsap-animate-in space-y-4">
              <div className="flex items-center gap-4">
                <MaterialIcon name="mail" className="text-[var(--primary)]" />
                <span>solutions@morven.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MaterialIcon name="location_on" className="text-[var(--primary)]" />
                <span>Tech District, Global Hub</span>
              </div>
            </div>
          </div>

          <div className="gsap-animate-in">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
