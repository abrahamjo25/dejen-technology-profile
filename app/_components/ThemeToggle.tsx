"use client";

import { useTheme } from "../_providers/ThemeProvider";
import { useI18n } from "../_providers/LanguageProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const { dict } = useI18n();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? dict.toggles.themeToLight : dict.toggles.themeToDark}
      className="grid h-9 w-9 place-items-center rounded-lg border border-line text-foreground transition-colors hover:border-accent hover:text-heading"
      style={{ background: "var(--glass-bg)" }}
    >
      {!mounted ? (
        <span className="block h-[18px] w-[18px]" />
      ) : isDark ? (
        // sun — switch to light
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        // moon — switch to dark
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
