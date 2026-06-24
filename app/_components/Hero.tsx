"use client";

import { useI18n } from "../_providers/LanguageProvider";
import Reveal from "./Reveal";

export default function Hero() {
  const { dict } = useI18n();
  const t = dict.hero;

  return (
    <section id="hero" className="relative pt-[150px] pb-20 lg:pb-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <span className="eyebrow">{t.eyebrow}</span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[60px] lg:leading-[1.05]">
            <span className="grad-text">{t.title}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{t.subtitle}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn btn-primary">
              {t.ctaPrimary} <span aria-hidden>→</span>
            </a>
            {/* <a href="#work" className="btn btn-ghost">
              {t.ctaSecondary}
            </a> */}
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
            <div className="absolute -left-6 -top-4 z-10 flex items-center gap-2.5 rounded-xl border border-line px-4 py-3 text-[13px] text-heading shadow-card" style={{ background: "var(--c-surface)" }}>
              <span className="grid h-7 w-7 place-items-center rounded-md text-white" style={{ background: "linear-gradient(135deg,var(--c-accent),var(--c-accent-2))" }}>
                ◧
              </span>
              {t.chipErp}
            </div>
            <div className="glass rounded-3xl p-5 shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/hero-img.png"
                alt="nitro software dashboard illustration"
                className="w-full rounded-2xl"
              />
            </div>
            <div className="absolute -right-5 bottom-8 z-10 flex items-center gap-2.5 rounded-xl border border-line px-4 py-3 text-[13px] text-heading shadow-card" style={{ background: "var(--c-surface)" }}>
              <span className="grid h-7 w-7 place-items-center rounded-md text-white" style={{ background: "linear-gradient(135deg,var(--c-accent),var(--c-accent-2))" }}>
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
