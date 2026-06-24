"use client";

import { useI18n } from "../_providers/LanguageProvider";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type RoleKey = "projectManager" | "softwareDeveloper";

const members: { name: string; img: string; linkedin: string; roleKey: RoleKey }[] = [
  {
    name: "Mulualem Berhanu",
    img: "team-5.jpeg",
    linkedin: "https://www.linkedin.com/in/mulualem-berhanu-7a13b4368/",
    roleKey: "projectManager",
  },
  {
    name: "Sewlesew Biazen",
    img: "team-1.jpeg",
    linkedin: "https://www.linkedin.com/in/sewlesew-biazen-sfd/",
    roleKey: "softwareDeveloper",
  },
  {
    name: "Talegeta Mandefro",
    img: "team-2.jpg",
    linkedin: "https://www.linkedin.com/in/talegeta-m-393003362/",
    roleKey: "softwareDeveloper",
  },
  {
    name: "Abraham Yohannes",
    img: "team-3.jpg",
    linkedin: "https://www.linkedin.com/in/abraham-yohannes-12995238b",
    roleKey: "softwareDeveloper",
  },
  {
    name: "Habtamu Awoke",
    img: "team-4.jpg",
    linkedin: "https://www.linkedin.com/in/habtamuawoke/",
    roleKey: "softwareDeveloper",
  },
];

export default function Team() {
  const { dict } = useI18n();
  const t = dict.team;

  return (
    <section
      id="team"
      className="py-24"
      style={{ background: "var(--section-alt)" }}
    >
      <div className="container-x">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          accent={t.titleAccent}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 90} className="h-full">
              <div className="card h-full text-center">
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/assets/img/team/${m.img}`}
                    alt={m.name}
                    className="h-full w-full object-cover"
                  />
                </div>
<h3 className="mt-4 text-lg">{m.name}</h3>
<p className="text-sm text-muted">{t.roles[m.roleKey]}</p>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-grid h-9 w-9 place-items-center rounded-lg border border-line text-foreground transition-colors hover:border-accent hover:text-heading"
                  style={{ background: "var(--glass-bg)" }}
                  aria-label={`${m.name} on LinkedIn`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.99H5.67v8.35h2.67zM7 8.78a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.56v-4.57c0-2.45-1.31-3.59-3.06-3.59-1.41 0-2.04.78-2.39 1.32v-1.13h-2.67c.04.75 0 8.35 0 8.35h2.67v-4.66c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.73 1.34 1.8v4.48h2.67z" />
                  </svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
