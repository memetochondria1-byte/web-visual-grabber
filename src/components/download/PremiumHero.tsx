import { Apple, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LINKS, APP_CONFIG } from "@/config/app";
import { DownloadButton } from "./DownloadButton";

function PlayMark() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 shrink-0" aria-hidden="true"><path d="M3 2.8v18.4L13.1 12 3 2.8Zm1.7-.7 11.6 6.6-2.2 2.1L4.7 2.1Zm0 19.8 9.4-8.7 2.2 2.1-11.6 6.6ZM17.7 9.5 21 11.4a.7.7 0 0 1 0 1.2l-3.3 1.9-2.7-2.5 2.7-2.5Z" /></svg>;
}

export function PremiumHero() {
  return (
    <section aria-label="Protiva AI for Android" className="premium-intro mx-auto max-w-6xl border-x px-5 sm:px-10">
      <div className="premium-meta flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-3"><span className="h-2 w-2 bg-accent" aria-hidden="true" />MOBILE STUDY WORKSPACE</span>
        <span className="hidden h-px flex-1 bg-border sm:block" aria-hidden="true" />
        <span>PROTIVA / ANDROID</span>
      </div>
      <h1 className="premium-title font-semibold">
        <span className="premium-title-mask"><span>Protiva AI,</span></span>
        <span className="premium-title-mask"><span className="premium-title-accent text-accent">now on Android.</span></span>
      </h1>
      <div className="premium-support-grid">
        <div className="premium-support">
          <p className="text-lg leading-relaxed text-muted-foreground">Your PDFs. Your notes. Your AI study workspace. Read, annotate, and understand your documents anywhere.</p>
          <div className="mt-6 grid grid-cols-2 gap-3" aria-label="App stores">
            <Button disabled className="store-entry" aria-label="Google Play — Coming soon"><PlayMark /><span className="text-left"><span className="block text-[10px] font-normal">Coming soon</span><span className="block text-sm font-semibold">Google Play</span></span></Button>
            <Button disabled className="store-entry" aria-label="App Store — Coming soon"><Apple className="h-7 w-7 shrink-0" aria-hidden="true" /><span className="text-left"><span className="block text-[10px] font-normal">Coming soon</span><span className="block text-sm font-semibold">App Store</span></span></Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <DownloadButton className="flex-1 whitespace-nowrap px-4 sm:flex-none" />
            <Button asChild variant="outline" className="h-12 flex-1 px-5 sm:flex-none"><a href={LINKS.webApp}>Open Web App <ArrowUpRight aria-hidden="true" /></a></Button>
          </div>
        </div>
      </div>
      <div className="premium-footer flex flex-wrap gap-x-12 gap-y-5 border-t pt-5 pb-7 text-xs">
        <div><span className="mb-1 block text-[10px] text-muted-foreground">FORMAT</span>Android Package (APK)</div>
        <div><span className="mb-1 block text-[10px] text-muted-foreground">PLATFORM</span>Android</div>
        <div><span className="mb-1 block text-[10px] text-muted-foreground">VERSION</span>{APP_CONFIG.version}</div>
      </div>
    </section>
  );
}