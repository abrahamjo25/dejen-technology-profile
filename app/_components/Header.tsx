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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links: { href: string; label: string }[] = [
    { href: "#hero", label: dict.nav.home },
    { href: "#services", label: dict.nav.services },
    { href: "#industries", label: dict.nav.industries },
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
      <div className="container-x flex h-16 items-center justify-between gap-3 sm:h-20 lg:h-[88px]">
        <a href="#hero" className="group flex items-center gap-0 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <span className="flex flex-col leading-none"></span>
          <span className="flex flex-col leading-none">
            <span
              className="font-heading text-lg font-bold tracking-[3px] transition-colors duration-300 group-hover:text-accent sm:text-2xl lg:text-[26px]"
              style={{
                background:
                  "linear-gradient(135deg, var(--c-accent), var(--c-accent-2))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <img
                src="/assets/img/nitro-logo.png"
                alt="nitro logo"
                className="h-32 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-16 lg:h-[256px]"
              />
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 xl:flex">
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

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href="#contact"
            className="btn btn-primary hidden lg:inline-flex !px-5 !py-2 text-sm"
          >
            {dict.nav.cta}
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => {
              setOpen((v) => {
                if (!v) window.scrollTo({ top: 0, behavior: "smooth" });
                return !v;
              });
            }}
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-foreground xl:hidden"
            style={{ background: "var(--glass-bg)" }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`fixed inset-x-0 top-16 bottom-0 z-40 overflow-auto xl:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "var(--c-bg)",
          backdropFilter: "blur(24px)",
        }}
      >
        <nav className="container-x flex flex-col py-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/60 py-4 font-nav text-lg font-medium text-foreground last:border-0 hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-6"
          >
            {dict.nav.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}
