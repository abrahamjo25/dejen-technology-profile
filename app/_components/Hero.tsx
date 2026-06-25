"use client";

import { useI18n } from "../_providers/LanguageProvider";
import Reveal from "./Reveal";

export default function Hero() {
  const { dict } = useI18n();
  const t = dict.hero;

  return (
    <section id="hero" className="relative pt-24 pb-16 sm:pt-[150px] sm:pb-20 lg:pb-28">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <Reveal>
          <span className="eyebrow">{t.eyebrow}</span>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-[60px] lg:leading-[1.05]">
            <span className="grad-text">{t.title}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">{t.subtitle}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn btn-primary">
              {t.ctaPrimary} <span aria-hidden>→</span>
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-muted">
            <div className="flex">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="-ml-2 h-7 w-7 rounded-full border-2 first:ml-0"
                  style={{
                    borderColor: "var(--c-bg)",
                    background: "linear-gradient(135deg,var(--c-accent),var(--c-accent-2))",
                  }}
                />
              ))}
            </div>
            {t.trust}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <div className="absolute -left-3 -top-3 z-10 flex items-center gap-2 rounded-xl border border-line px-3 py-2 text-[12px] text-heading shadow-card sm:-left-6 sm:-top-4 sm:gap-2.5 sm:px-4 sm:py-3 sm:text-[13px]" style={{ background: "var(--c-surface)" }}>
              <span className="grid h-6 w-6 place-items-center rounded-md text-white sm:h-7 sm:w-7" style={{ background: "linear-gradient(135deg,var(--c-accent),var(--c-accent-2))" }}>
                ◧
              </span>
              {t.chipErp}
            </div>
            <div className="glass rounded-2xl p-3 shadow-card sm:rounded-3xl sm:p-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/hero-img.png"
                alt="nitro software dashboard illustration"
                className="w-full rounded-xl sm:rounded-2xl"
              />
            </div>
            <div className="absolute -right-2 bottom-6 z-10 flex items-center gap-2 rounded-xl border border-line px-3 py-2 text-[12px] text-heading shadow-card sm:-right-5 sm:bottom-8 sm:gap-2.5 sm:px-4 sm:py-3 sm:text-[13px]" style={{ background: "var(--c-surface)" }}>
              <span className="grid h-6 w-6 place-items-center rounded-md text-white sm:h-7 sm:w-7" style={{ background: "linear-gradient(135deg,var(--c-accent),var(--c-accent-2))" }}>
                ⚡
              </span>
              {t.chipSpeed}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
