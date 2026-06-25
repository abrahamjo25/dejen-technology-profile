"use client";

import { useI18n } from "../_providers/LanguageProvider";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Process() {
  const { dict } = useI18n();
  const t = dict.process;

  return (
    <section id="process" className="py-16 sm:py-24" style={{ background: "var(--section-alt)" }}>
      <div className="container-x">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} accent={t.titleAccent} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((step, i) => (
            <Reveal key={i} delay={i * 100} className="h-full">
              <div className="glass h-full rounded-2xl p-7">
                <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-line font-heading text-heading" style={{ background: "var(--glass-hover)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
