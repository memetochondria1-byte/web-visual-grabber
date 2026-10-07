import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { APP_CONFIG, LINKS } from "@/config/app";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Navbar() {
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
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5" aria-label="Main">
        <a href={LINKS.home} aria-label="Protiva home">
          <Logo />
        </a>
        <ul className="ml-auto hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <li><a className="transition-colors hover:text-foreground" href={LINKS.webApp}>Web App</a></li>
          <li><a className="transition-colors hover:text-foreground" href="#features">Features</a></li>
          <li><a className="transition-colors hover:text-foreground" href="#download">Download</a></li>
        </ul>
        <a
          href={LINKS.webApp}
          className="hidden h-9 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
        >
          Open Protiva
        </a>
        <a
          href={APP_CONFIG.apkUrl}
          download={APP_CONFIG.apkFileName}
          className="ml-auto inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-3.5 text-sm font-medium text-primary-foreground md:hidden"
        >
          <Download className="h-4 w-4" aria-hidden="true" /> Download
        </a>
      </nav>
    </header>
  );
}
