"use client";

import { useI18n } from "../_providers/LanguageProvider";
import Reveal from "./Reveal";

const clients = [1, 2, 3, 4, 5, 6];

export default function Stats() {
  const { dict } = useI18n();

  return (
    <section className="pb-10">
      <div className="container-x">
        <Reveal>
          <div className="glass grid grid-cols-2 gap-6 rounded-3xl p-8 sm:p-10 md:grid-cols-4">
            {dict.stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-heading text-4xl text-heading sm:text-[44px]">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70">
          {clients.map((n) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={n} src={`/assets/img/clients/client-${n}.png`} alt="" className="h-8 w-auto" />
          ))}
        </div>
      </div>
    </section>
  );
}
