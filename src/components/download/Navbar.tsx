import { useLanguage, LanguageSwitch } from "./Language";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { APP_CONFIG, LINKS } from "@/config/app";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-background",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-5 sm:gap-6 sm:px-5"
        aria-label={t("Main")}
      >
        <a
          href={LINKS.home}
          aria-label={t("Protiva home")}
          className="min-w-0 shrink"
        >
          <Logo />
        </a>

        <ul className="ml-auto hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <li><a className="transition-colors hover:text-foreground" href={LINKS.webApp}>{t("Web App")}</a></li>
          <li><a className="transition-colors hover:text-foreground" href="#features">{t("Features")}</a></li>
          <li><a className="transition-colors hover:text-foreground" href="#download">{t("Download")}</a></li>
        </ul>

        <a
          href={LINKS.webApp}
          className="hidden h-9 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
        >
          {t("Open Protiva")}
        </a>

        <a
          href={APP_CONFIG.apkUrl}
          download={APP_CONFIG.apkFileName}
          aria-label={t("Download APK")}
          className="ml-auto inline-flex h-9 shrink-0 items-center gap-2 rounded-lg bg-primary px-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:hidden"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          <span className="download-nav-label">{t("Download")}</span>
        </a>

        <LanguageSwitch />
      </nav>
    </header>
  );
}
