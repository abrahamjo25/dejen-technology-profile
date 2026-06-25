"use client";

import { useI18n } from "../_providers/LanguageProvider";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Testimonials() {
  const { dict } = useI18n();
  const t = dict.testimonials;

  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} accent={t.titleAccent} />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {t.items.map((item, i) => (
            <Reveal key={i} delay={i * 120} className="h-full">
              <figure className="card h-full">
                <div className="text-[15px] text-[#facc15]" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <blockquote className="mt-4 italic text-foreground">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3.5">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-full font-heading font-bold text-white"
                    style={{ background: "linear-gradient(135deg,var(--c-accent),var(--c-accent-2))" }}
                  >
                    {item.initials}
                  </span>
                  <span>
                    <span className="block font-heading text-heading">{item.name}</span>
                    <span className="block text-[13px] text-muted">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
