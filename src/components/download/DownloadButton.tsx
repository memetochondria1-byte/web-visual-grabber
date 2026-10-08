import { useLanguage } from "./Language";
import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { APP_CONFIG } from "@/config/app";
import { cn } from "@/lib/utils";

export function DownloadButton({
  label = "Download APK",
  size = "md",
  className,
}: {
  label?: string;
  size?: "md" | "lg";
  className?: string;
}) {
  const { t } = useLanguage();
  const [starting, setStarting] = useState(false);

  return (
    <a
      href={APP_CONFIG.apkUrl}
      download={APP_CONFIG.apkFileName}
      type="application/vnd.android.package-archive"
      onClick={() => {
        setStarting(true);
        window.setTimeout(() => setStarting(false), 1600);
      }}
      aria-live="polite"
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-lg bg-primary font-medium text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-px hover:bg-primary/90 active:translate-y-0 active:scale-[0.98]",
        size === "lg" ? "h-14 px-8 text-base" : "h-12 px-6 text-[15px]",
        className,
      )}
    >
      {starting ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      ) : (
        <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
      )}
      <span>{starting ? t("Starting download…") : t(label)}</span>
    </a>
  );
}
