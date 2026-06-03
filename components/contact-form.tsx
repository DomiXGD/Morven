"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="brand-mono mb-2 block text-sm uppercase tracking-wide text-[var(--muted)]" htmlFor="name">
          Nombre Completo
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Ej. Alexander Pierce"
          className="w-full rounded-lg border border-white/10 bg-black p-4 text-white transition-all focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
        />
      </div>
      <div>
        <label className="brand-mono mb-2 block text-sm uppercase tracking-wide text-[var(--muted)]" htmlFor="email">
          Correo Corporativo
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="a.pierce@company.com"
          className="w-full rounded-lg border border-white/10 bg-black p-4 text-white transition-all focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
        />
      </div>
      <div>
        <label className="brand-mono mb-2 block text-sm uppercase tracking-wide text-[var(--muted)]" htmlFor="message">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Describa brevemente sus necesidades..."
          className="w-full rounded-lg border border-white/10 bg-black p-4 text-white transition-all focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-[var(--primary-container)] py-4 font-bold text-white shadow-lg shadow-[rgba(109,40,217,0.2)] transition-all hover:brightness-125"
      >
        Enviar Solicitud
      </button>
      {submitted ? (
        <p className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
          Tu mensaje fue enviado correctamente.
        </p>
      ) : null}
    </form>
  );
}
