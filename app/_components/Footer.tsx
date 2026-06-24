"use client";

import { useI18n } from "../_providers/LanguageProvider";

const companyHrefs = ["#about", "#services", "#work", "#contact"];

const socials: { label: string; href: string; path: string }[] = [
  { label: "LinkedIn", href: "#", path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.99H5.67v8.35h2.67zM7 8.78a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.56v-4.57c0-2.45-1.31-3.59-3.06-3.59-1.41 0-2.04.78-2.39 1.32v-1.13h-2.67c.04.75 0 8.35 0 8.35h2.67v-4.66c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.73 1.34 1.8v4.48h2.67z" },
  { label: "X", href: "#", path: "M18.9 2H22l-7.5 8.6L23.3 22h-6.9l-5.4-7-6.2 7H1.7l8-9.2L1 2h7l4.9 6.5L18.9 2zm-1.2 18h1.9L7.4 4H5.4l12.3 16z" },
  { label: "Facebook", href: "#", path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" },
  { label: "Instagram", href: "#", path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.4a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" },
];

export default function Footer() {
  const { dict } = useI18n();
  const t = dict.footer;

  return (
    <footer className="border-t border-line" style={{ background: "var(--header-bg)" }}>
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr]">
          <div>
            <span className="font-heading text-2xl font-bold tracking-[3px]" style={{ background: "linear-gradient(135deg, var(--c-accent), var(--c-accent-2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>NITRO</span>
            <p className="mt-1 font-nav text-[11px] font-medium tracking-[1.5px] uppercase text-muted/80">We Build. You Accelerate.</p>
            <p className="mt-4 max-w-xs text-sm text-muted">{t.tagline}</p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-line text-foreground transition-colors hover:border-accent hover:text-heading"
                  style={{ background: "var(--glass-bg)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-base">{t.companyLabel}</h4>
            <ul className="space-y-2.5">
              {t.company.map((label, i) => (
                <li key={label}>
                  <a href={companyHrefs[i]} className="text-sm text-muted transition-colors hover:text-heading">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base">{t.servicesLabel}</h4>
            <ul className="space-y-2.5">
              {t.services.map((label) => (
                <li key={label} className="text-sm text-muted">
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base">{t.newsletterLabel}</h4>
            <p className="mb-3 text-sm text-muted">{t.newsletterText}</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="field" placeholder={t.emailPlaceholder} aria-label={t.emailPlaceholder} />
              <button type="submit" className="btn btn-primary !px-4" aria-label={t.newsletterLabel}>
                →
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6 text-center text-[13px] text-muted">
          {t.rights}
        </div>
      </div>
    </footer>
  );
}
