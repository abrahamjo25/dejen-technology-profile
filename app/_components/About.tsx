"use client";

import { useI18n } from "../_providers/LanguageProvider";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  const { dict } = useI18n();
  const t = dict.about;

  return (
    <section id="about" className="py-24">
      <div className="container-x">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} accent={t.titleAccent} />
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted">{t.body}</p>
          </Reveal>
          <Reveal delay={120} className="grid gap-5">
            <div className="card">
              <h3 className="text-xl">{t.missionLabel}</h3>
              <p className="mt-2 text-muted">{t.mission}</p>
            </div>
            <div className="card">
              <h3 className="text-xl">{t.visionLabel}</h3>
              <p className="mt-2 text-muted">{t.vision}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
