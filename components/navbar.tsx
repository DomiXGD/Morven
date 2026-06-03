"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "@/components/logo-mark";
import { navigationItems } from "@/lib/site-content";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`sticky top-0 z-50 h-20 border-b transition-all duration-300 ${isScrolled ? "nav-scrolled" : "border-white/10 bg-[rgba(19,19,19,0.8)] backdrop-blur-xl"}`}>
      <nav className="site-shell flex h-full items-center justify-between px-0">
        <div className="flex items-center gap-2">
          <a href="#inicio" onClick={closeMenu}>
            <LogoMark alt="MORVEN Logo" className="h-12 w-auto" />
          </a>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={
                index === 0
                  ? "border-b-2 border-[var(--primary)] pb-1 text-base font-bold text-[var(--primary)] duration-300 ease-in-out"
                  : "text-base text-[var(--muted)] transition-colors duration-300 ease-in-out hover:text-[var(--primary)]"
              }
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Abrir menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="text-2xl">{isOpen ? "×" : "≡"}</span>
        </button>
      </nav>

      <div id="mobile-menu" className={`site-shell md:hidden ${isOpen ? "block pb-4" : "hidden"}`}>
        <div className="rounded-2xl border border-white/10 bg-[rgba(19,19,19,0.95)] p-4 backdrop-blur-xl">
          <div className="flex flex-col gap-3">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
