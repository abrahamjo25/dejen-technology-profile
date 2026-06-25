"use client";

import { useState, type FormEvent } from "react";
import { useI18n } from "../_providers/LanguageProvider";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const infoIcons = ["📍", "📞", "✉️", "⏱️"];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { dict } = useI18n();
  const t = dict.contact;
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const info = [
    { label: t.addressLabel, value: t.address },
    { label: t.callLabel, value: t.call },
    { label: t.emailLabel, value: t.email },
    { label: t.responseLabel, value: t.response },
  ];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      subject: data.get("subject") as string,
      message: data.get("message") as string,
    };

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Request failed");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24" style={{ background: "var(--section-alt)" }}>
      <div className="container-x">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} accent={t.titleAccent} />
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="grid gap-4 content-start">
            {info.map((item, i) => (
              <div key={i} className="glass flex items-start gap-4 rounded-2xl p-5">
                <span className="icon-badge shrink-0 text-xl">{infoIcons[i]}</span>
                <span>
                  <span className="block font-heading text-heading">{item.label}</span>
                  <span className="block text-sm text-muted">{item.value}</span>
                </span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={120}>
            <form className="glass rounded-3xl p-7" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block font-nav text-[13px] text-muted">
                    {t.nameLabel}
                  </label>
                  <input id="name" name="name" className="field" placeholder={t.namePlaceholder} required />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-nav text-[13px] text-muted">
                    {t.emailFieldLabel}
                  </label>
                  <input id="email" name="email" type="email" className="field" placeholder={t.emailPlaceholder} required />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="subject" className="mb-2 block font-nav text-[13px] text-muted">
                  {t.subjectLabel}
                </label>
                <input id="subject" name="subject" className="field" placeholder={t.subjectPlaceholder} required />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="mb-2 block font-nav text-[13px] text-muted">
                  {t.messageLabel}
                </label>
                <textarea id="message" name="message" rows={5} className="field resize-none" placeholder={t.messagePlaceholder} required />
              </div>

              {status === "success" && (
                <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                  {t.successMessage}
                </div>
              )}
              {status === "error" && (
                <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {errorMsg || t.errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-primary mt-5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? t.sending : t.send} <span aria-hidden>→</span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
