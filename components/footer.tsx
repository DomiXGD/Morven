import { MaterialIcon } from "@/components/icons";
import { LogoMark } from "@/components/logo-mark";
import { footerLegal, footerResources, footerSocials } from "@/lib/site-content";

export function Footer() {
  return (
    <div className="gsap-section-content flex min-h-screen items-center justify-center border-t border-white/5 bg-[var(--surface-lowest)]">
      <div className="site-shell px-0 py-[120px]">
        <div className="mb-16 grid grid-cols-1 gap-2 md:grid-cols-4">
          <div className="col-span-1 space-y-6 md:col-span-2">
            <div className="gsap-animate-in flex items-center gap-2">
              <LogoMark alt="MORVEN Footer Logo" className="h-10 w-auto" />
            </div>
            <p className="gsap-animate-in max-w-sm text-[var(--muted)]">
              High-Performance Enterprise Solutions para un mundo que nunca se detiene. Innovación garantizada por ingeniería de élite.
            </p>
            <div className="gsap-animate-in flex gap-4">
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

          <div className="gsap-animate-in space-y-4">
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

          <div className="gsap-animate-in space-y-4">
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

        <div className="gsap-animate-in flex flex-col justify-between gap-4 border-t border-white/5 pt-8 text-sm text-[var(--muted)] md:flex-row">
          <p>© 2024 MORVEN. All rights reserved. High-Performance Enterprise Solutions.</p>
          <div className="brand-mono flex gap-6 text-[10px] uppercase tracking-tighter opacity-40">
            <span>Precision.</span>
            <span>Scale.</span>
            <span>Security.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
