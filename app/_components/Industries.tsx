"use client";

import { useI18n } from "../_providers/LanguageProvider";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const icons = ["🎓", "🌾", "🏦", "🏨", "🏛️", "🏥", "🛒", "✈️"];

export default function Industries() {
  const { dict } = useI18n();
  const t = dict.industries;

  return (
    <section id="industries" className="py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          accent={t.titleAccent}
          subtitle={t.subtitle}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, i) => (
            <Reveal key={i} delay={(i % 4) * 80} className="h-full">
              <div className="glass flex h-full items-center gap-3.5 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent">
                <span className="text-2xl">{icons[i]}</span>
                <span>
                  <span className="block font-heading text-base font-semibold text-heading">
                    {item.title}
                  </span>
                  <span className="block text-[13px] text-muted">{item.desc}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
