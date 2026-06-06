"use client";

import { FormEvent, useState } from "react";
import { MaterialIcon } from "@/components/icons";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="flex h-full min-h-0 flex-col bg-[linear-gradient(180deg,rgba(10,25,47,0.72),rgba(2,4,9,0.96))]">
      <div className="border-b border-white/10 bg-black/20 px-4 py-2.5 backdrop-blur-md sm:px-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2f]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="brand-mono text-[11px] uppercase tracking-[0.24em] text-white/45">morven / contact</span>
        </div>
      </div>

      <div className="grid min-h-0 flex-1 xl:grid-cols-[0.4fr_0.6fr]">
        <div className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-4 xl:border-b-0 xl:border-r xl:p-5">
          <div className="flex h-full flex-col gap-4">
            <div>
              <p className="brand-mono text-[11px] uppercase tracking-[0.28em] text-[var(--primary)]">Contact</p>
              <h2 className="mt-2.5 max-w-xs text-[2rem] font-bold leading-[1.05] text-white">Listo para escalar?</h2>
              <p className="mt-3 max-w-sm text-[12px] leading-5 text-white/62">
                Hablenos de su proyecto. Un consultor senior se pondra en contacto en menos de 24 horas con una ruta clara para avanzar.
              </p>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-3.5 py-2.5">
                  <MaterialIcon name="mail" className="text-[18px] text-[var(--primary)]" />
                  <span className="text-[13px] text-white/82">solutions@morven.com</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-3.5 py-2.5">
                  <MaterialIcon name="location_on" className="text-[18px] text-[var(--primary)]" />
                  <span className="text-[13px] text-white/82">Tech District, Global Hub</span>
                </div>
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-2">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3.5">
                <p className="brand-mono text-[10px] uppercase tracking-[0.24em] text-white/45">Stack</p>
                <p className="mt-1.5 text-[12px] leading-5 text-white/80">SaaS, automatizacion, arquitectura TI</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3.5">
                <p className="brand-mono text-[10px] uppercase tracking-[0.24em] text-white/45">Response</p>
                <p className="mt-1.5 text-[12px] leading-5 text-white/80">Menos de 24 horas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-0 p-4 sm:p-5 xl:p-5">
          <div className="mb-4">
            <p className="brand-mono text-[11px] uppercase tracking-[0.28em] text-white/45">Project intake</p>
          </div>

          <form className="space-y-3.5" onSubmit={handleSubmit}>
            <div>
              <label className="brand-mono mb-2 block text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]" htmlFor="name">
                Nombre Completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Ej. Alexander Pierce"
                className="w-full rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-white transition-all placeholder:text-white/28 focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
              />
            </div>
            <div>
              <label className="brand-mono mb-2 block text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]" htmlFor="email">
                Correo Corporativo
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="a.pierce@company.com"
                className="w-full rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-white transition-all placeholder:text-white/28 focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
              />
            </div>
            <div>
              <label className="brand-mono mb-2 block text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]" htmlFor="message">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                placeholder="Describa brevemente sus necesidades..."
                className="w-full rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-white transition-all placeholder:text-white/28 focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-[var(--primary-container)] py-3 font-bold text-white shadow-lg shadow-[rgba(109,40,217,0.2)] transition-all hover:brightness-125"
            >
              Enviar Solicitud
            </button>
            {submitted ? (
              <p className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                Tu mensaje fue enviado correctamente.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}
