"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, type Dictionary, type Locale } from "../_i18n/dictionaries";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  dict: Dictionary;
  mounted: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const fromDom = document.documentElement.lang as Locale;
    const fromStore = localStorage.getItem("locale") as Locale | null;
    const next = fromDom === "am" || fromStore === "am" ? "am" : "en";
    setLocaleState(next);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
    localStorage.setItem("locale", locale);
  }, [locale, mounted]);

  const setLocale = (next: Locale) => setLocaleState(next);
  const toggleLocale = () =>
    setLocaleState((prev) => (prev === "en" ? "am" : "en"));

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, toggleLocale, dict: dictionaries[locale], mounted }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
