import Image from "next/image";
import { MaterialIcon } from "@/components/icons";
import { aboutPoints } from "@/lib/site-content";

export function AboutSection() {
  return (
    <section id="about" className="overflow-hidden bg-[var(--surface-low)] py-[120px]">
      <div className="site-shell grid grid-cols-1 items-center gap-20 px-0 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-10 rounded-full bg-[rgba(211,187,255,0.2)] blur-[120px]" />
          <Image
            className="relative z-10 rounded-2xl border border-white/10 shadow-2xl grayscale transition-all duration-700 hover:grayscale-0"
            alt="Arquitectura digital abstracta MORVEN"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbEwBzoVoUNtg5pbNXQ__tzgvTpEu3-883E-Xga94N_UC5X3ISMtMAc9f1oqkS8sFtovRMTryblQNNQ5mREonRDg0qI4hABtnjqxttyKAGRGP6TesrfyIPagACnHz2eahmr0IPQI3dxCRfX7Xbc-C-CrnSp67BkF_u2OHYzR7gaNMWdxrObNTx_19IvkhmgHVmMTVF_fiMJ6Mz6TVY3p0XmB6pggK8PSptqi_K_lsdnKJ1VWaLrnmIJlYx4WOvU2xAwA3NSu5UTs4"
            width={1200}
            height={900}
          />
        </div>

        <div className="order-1 space-y-8 lg:order-2">
          <span className="brand-mono text-sm uppercase tracking-widest text-[var(--secondary)]">Nuestra Visión</span>
          <h2 className="text-4xl font-bold leading-tight text-[var(--text)] md:text-5xl">
            Ingeniería que trasciende los límites convencionales.
          </h2>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            MORVEN nació con la misión de redefinir la relación entre la empresa y la tecnología. Creemos que la innovación no debe ser un obstáculo, sino un motor invisible que impulsa el crecimiento exponencial.
          </p>
          <ul className="space-y-4">
            {aboutPoints.map((point) => (
              <li key={point.title} className="flex items-start gap-4">
                <MaterialIcon name={point.icon} className="mt-1 text-[var(--primary)]" />
                <div>
                  <strong className="block text-[var(--text)]">{point.title}</strong>
                  <span className="text-[var(--muted)]">{point.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
