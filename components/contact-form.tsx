"use client";

import { FormEvent, useState } from "react";
import { MaterialIcon } from "@/components/icons";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    setIsLoading(true);
    setErrorMessage("");
    setSubmitted(false);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_API_URL ?? "/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => ({}))) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? result.message ?? "No se pudo enviar el mensaje.");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "No se pudo enviar el mensaje.");
    } finally {
      setIsLoading(false);
    }
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
          <span className="brand-mono hidden text-[11px] uppercase tracking-[0.24em] text-white/45 min-[390px]:inline">
            morven / contact
          </span>
        </div>
      </div>

      <div className="grid min-h-0 flex-1 lg:grid-cols-[0.42fr_0.58fr]">
        <div className="border-b border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-4 sm:p-5 lg:border-b-0 lg:border-r">
          <div className="flex h-full flex-col gap-4">
            <div>
              <p className="brand-mono text-[11px] uppercase tracking-[0.28em] text-[var(--primary)]">Contact</p>
              <h2 className="mt-2.5 max-w-xs text-[1.65rem] font-bold leading-[1.05] text-white min-[390px]:text-[1.8rem] sm:text-[2rem]">
                Listo para escalar?
              </h2>
              <p className="mt-3 max-w-sm text-[12px] leading-5 text-white/62 sm:text-[13px]">
                Hablenos de su proyecto. Un consultor senior se pondra en contacto en menos de 24 horas con una ruta clara para avanzar.
              </p>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-3.5 py-2.5">
                  <MaterialIcon name="mail" className="text-[18px] text-[var(--primary)]" />
                  <span className="break-all text-[12px] text-white/82 min-[390px]:text-[13px] sm:break-normal">
                    solutions@morven.com
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-3.5 py-2.5">
                  <MaterialIcon name="location_on" className="text-[18px] text-[var(--primary)]" />
                  <span className="text-[12px] text-white/82 min-[390px]:text-[13px]">Tech District, Global Hub</span>
                </div>
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
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

        <div className="min-h-0 p-4 sm:p-5">
          <div className="mb-4">
            <p className="brand-mono text-[11px] uppercase tracking-[0.28em] text-white/45">Project intake</p>
          </div>

          <form className="space-y-3 max-[420px]:space-y-2.5" onSubmit={handleSubmit}>
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
                className="w-full rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-white transition-all placeholder:text-white/28 focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)] sm:py-3.5"
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
                className="w-full rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-white transition-all placeholder:text-white/28 focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)] sm:py-3.5"
              />
            </div>
            <div>
              <label className="brand-mono mb-2 block text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]" htmlFor="message">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Describa brevemente sus necesidades..."
                className="min-h-28 w-full rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-white transition-all placeholder:text-white/28 focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)] sm:min-h-32 sm:py-3.5"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-[var(--primary-container)] py-3 font-bold text-white shadow-lg shadow-[rgba(109,40,217,0.2)] transition-all hover:brightness-125 disabled:cursor-not-allowed disabled:opacity-70 sm:py-3.5"
            >
              {isLoading ? "Enviando..." : "Enviar Solicitud"}
            </button>
            {errorMessage ? (
              <p className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                {errorMessage}
              </p>
            ) : null}
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
