import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { bengali } from "@/lib/translations";

type Language = "en" | "bn";
const LanguageContext = createContext({ language: "en" as Language, setLanguage: (_language: Language) => {}, t: (text: string): string => text });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("protiva-language");
      if (saved === "en" || saved === "bn") setLanguage(saved);
    } catch { /* Reading remains available when storage is blocked. */ }
  }, []);
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  function selectLanguage(next: Language) {
    setLanguage(next);
    try { localStorage.setItem("protiva-language", next); } catch { /* Preference is optional. */ }
  }
  const t = (text: string) => language === "bn" ? (bengali[text] ?? text) : text;
  return <LanguageContext.Provider value={{ language, setLanguage: selectLanguage, t }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="language-switch flex shrink-0 items-center border border-border" role="group" aria-label="Website language">
      <Button variant="ghost" size="sm" lang="en" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</Button>
      <Button variant="ghost" size="sm" lang="bn" aria-pressed={language === "bn"} onClick={() => setLanguage("bn")}>বাংলা</Button>
    </div>
  );
}