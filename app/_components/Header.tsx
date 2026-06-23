"use client";

import { useEffect, useState } from "react";
import { useI18n } from "../_providers/LanguageProvider";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { dict } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { href: string; label: string }[] = [
    { href: "#hero", label: dict.nav.home },
    { href: "#services", label: dict.nav.services },
    { href: "#industries", label: dict.nav.industries },
    { href: "#work", label: dict.nav.work },
    { href: "#process", label: dict.nav.process },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-line transition-colors duration-300"
      style={{
        background: scrolled ? "var(--header-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="container-x flex h-[74px] items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/img/green-light-logo.png" alt="Dejen" className="h-10 w-auto" />
          <span className="leading-none">
            <span className="block font-heading text-xl tracking-[2px] text-heading">DEJEN</span>
            <span className="block font-nav text-[11px] tracking-wide text-muted">
              Software Technology
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-nav text-[15px] text-foreground transition-colors hover:text-heading"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <LanguageToggle />
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary hidden md:inline-flex !px-5 !py-2 text-sm">
            {dict.nav.cta}
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-foreground lg:hidden"
            style={{ background: "var(--glass-bg)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-line lg:hidden" style={{ background: "var(--header-bg)", backdropFilter: "blur(16px)" }}>
          <nav className="container-x flex flex-col py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-3 font-nav text-foreground last:border-0 hover:text-heading"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-4">
              {dict.nav.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
