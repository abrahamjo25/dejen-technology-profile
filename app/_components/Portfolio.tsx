"use client";

import { useI18n } from "../_providers/LanguageProvider";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const images = ["1.jpg", "7.png", "6.png", "3.png", "4.png", "2.png"];

export default function Portfolio() {
  const { dict } = useI18n();
  const t = dict.work;

  return (
    <section id="work" className="py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          accent={t.titleAccent}
          subtitle={t.subtitle}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 100} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line" style={{ background: "var(--c-surface)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/assets/projects/${images[i]}`}
                  alt={item.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(to top, rgba(11,6,24,.96), rgba(11,6,24,.15) 60%, transparent)" }}>
                  <h3 className="text-lg text-white">{item.title}</h3>
                  <p className="mt-1.5 text-[13px] text-[#cbbff0]">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
