"use client";

import { useState } from "react";
import { LogoMark } from "@/components/logo-mark";
import { navigationItems } from "@/lib/site-content";

export function GsapNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="gsap-header">
      <nav className="gsap-header-nav">
        <div className="flex items-center gap-2">
          <a href="#inicio" data-gsap-nav onClick={closeMenu}>
            <LogoMark alt="MORVEN Logo" className="h-7 w-auto sm:h-9 lg:h-12" />
          </a>
        </div>

        <div className="hidden items-center gap-6 xl:flex xl:gap-8">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} data-gsap-nav className="gsap-nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white sm:h-11 sm:w-11 xl:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Abrir menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="text-2xl">{isOpen ? "\u00D7" : "\u2261"}</span>
        </button>
      </nav>

      <div id="mobile-menu" className={`gsap-mobile-menu ${isOpen ? "block" : "hidden"}`}>
        <div className="rounded-2xl border border-white/10 bg-[rgba(19,19,19,0.95)] p-4 backdrop-blur-xl">
          <div className="flex flex-col gap-3">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-gsap-nav
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

export { GsapNavbar as Navbar };
