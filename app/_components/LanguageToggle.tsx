"use client";

import { useI18n } from "../_providers/LanguageProvider";
import type { Locale } from "../_i18n/dictionaries";

const options: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "am", label: "አማ" },
];

export default function LanguageToggle() {
  const { locale, setLocale, mounted, dict } = useI18n();

  return (
    <div
      role="group"
      aria-label={dict.toggles.language}
      className="flex items-center rounded-lg border border-line p-0.5"
      style={{ background: "var(--glass-bg)" }}
    >
      {options.map((opt) => {
        const active = mounted && locale === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLocale(opt.code)}
            className={`rounded-md px-2.5 py-1 font-nav text-xs font-medium transition-colors ${
              active
                ? "bg-accent text-white"
                : "text-muted hover:text-heading"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
