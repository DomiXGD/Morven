import { ContactForm } from "@/components/contact-form";
import { LaptopShell } from "@/components/laptop/laptop-shell";

export function ContactSection() {
  return (
    <div className="gsap-section-content w-full overflow-visible bg-[var(--surface)]">
      <div className="site-shell relative px-0 py-[120px]">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 bg-[rgba(211,187,255,0.1)] blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-[1080px]">
          <div className="gsap-animate-in">
            <LaptopShell>
              <ContactForm />
            </LaptopShell>
          </div>
        </div>
      </div>
    </div>
  );
}
