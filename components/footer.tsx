import { MaterialIcon } from "@/components/icons";
import { LogoMark } from "@/components/logo-mark";
import { footerLegal, footerResources, footerSocials } from "@/lib/site-content";

export function Footer() {
  return (
    <div className="gsap-section-content flex min-h-screen items-center justify-center border-t border-white/5 bg-[var(--surface-lowest)]">
      <div className="site-shell px-0 py-[clamp(3.5rem,8vh,7.5rem)]">
        <div className="mb-10 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-4 md:gap-6">
          <div className="col-span-1 space-y-6 text-center md:col-span-2 md:text-left">
            <div className="gsap-animate-in flex items-center justify-center gap-2 md:justify-start">
              <LogoMark alt="MORVEN Footer Logo" className="h-[14px] w-auto" />
            </div>
            <p className="gsap-animate-in mx-auto max-w-sm text-[var(--muted)] md:mx-0">
              High-Performance Enterprise Solutions para un mundo que nunca se detiene. Innovacion garantizada por ingenieria de elite.
            </p>
            <div className="gsap-animate-in flex justify-center gap-4 md:justify-start">
              {footerSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:text-[var(--tertiary)]"
                >
                  <MaterialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="gsap-animate-in space-y-4 text-center md:text-left">
            <h5 className="text-sm font-bold uppercase tracking-widest text-[var(--text)]">Recursos</h5>
            <ul className="space-y-2 text-[var(--muted)]">
              {footerResources.map((resource) => (
                <li key={resource}>
                  <a className="transition-colors hover:text-[var(--tertiary)]" href="#">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="gsap-animate-in space-y-4 text-center md:text-left">
            <h5 className="text-sm font-bold uppercase tracking-widest text-[var(--text)]">Legal</h5>
            <ul className="space-y-2 text-[var(--muted)]">
              {footerLegal.map((item) => (
                <li key={item}>
                  <a className="transition-colors hover:text-[var(--tertiary)]" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gsap-animate-in flex flex-col justify-between gap-4 border-t border-white/5 pt-6 text-center text-sm text-[var(--muted)] md:flex-row md:pt-8 md:text-left">
          <p>© 2024 MORVEN. All rights reserved. High-Performance Enterprise Solutions.</p>
          <div className="brand-mono flex flex-wrap justify-center gap-4 text-[10px] uppercase tracking-tighter opacity-40 md:justify-end md:gap-6">
            <span>Precision.</span>
            <span>Scale.</span>
            <span>Security.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
