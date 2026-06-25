"use client";

import { useI18n } from "../_providers/LanguageProvider";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const icons = ["🧩", "💻", "☁️", "📱", "🎨", "🛠️"];

export default function Services() {
  const { dict } = useI18n();
  const t = dict.services;

  return (
    <section id="services" className="py-16 sm:py-24" style={{ background: "var(--section-alt)" }}>
      <div className="container-x">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          accent={t.titleAccent}
          subtitle={t.subtitle}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((s, i) => (
            <Reveal key={i} delay={(i % 3) * 100} className="h-full">
              <div className="card relative h-full">
                {i === 0 && (
                  <span
                    className="mb-3 inline-block rounded-full border border-line px-3 py-1 font-nav text-[11px] uppercase tracking-wider text-heading"
                    style={{ background: "var(--glass-hover)" }}
                  >
                    {t.flagship}
                  </span>
                )}
                <div className="icon-badge mb-5">{icons[i]}</div>
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-2.5 text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
