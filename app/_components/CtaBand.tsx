"use client";

import { useI18n } from "../_providers/LanguageProvider";
import Reveal from "./Reveal";

export default function CtaBand() {
  const { dict } = useI18n();
  const t = dict.ctaBand;

  return (
    <section className="pb-24">
      <div className="container-x">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-2xl border border-line p-8 text-center backdrop-blur-md sm:rounded-3xl sm:p-12 sm:p-16"
            style={{
              background:
                "linear-gradient(135deg, rgba(139,92,246,.22), rgba(168,85,247,.10))",
            }}
          >
            <span className="flex justify-center">
              <span className="eyebrow">{t.eyebrow}</span>
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{t.title}</h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
              {t.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="btn btn-primary">
                {t.primary} <span aria-hidden>→</span>
              </a>
              {/* <a href="#work" className="btn btn-ghost">
                {t.secondary}
              </a> */}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
