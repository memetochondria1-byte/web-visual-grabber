import { useLanguage } from "./Language";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/config/app";
import { DownloadButton } from "./DownloadButton";
import studySpace from "@/assets/02-home-and-ocr.webp";
import { DocumentGraphic } from "./DocumentGraphic";
import { MacDownloadButton } from "./MacDownloadButton";

function PlayMark() {
  return <svg viewBox="0 0 32 36" className="store-mark" aria-hidden="true"><path className="play-blue" d="M1 1.5 18 18 1 34.5Z" /><path className="play-green" d="m1 1.5 21 12-4 4.5Z" /><path className="play-red" d="m1 34.5 17-16.5 4 4.5Z" /><path className="play-yellow" d="m18 18 4-4.5 8 4.5-8 4.5Z" /></svg>;
}

function AppleMark() {
  return <svg viewBox="0 0 24 28" fill="currentColor" className="store-mark" aria-hidden="true"><path d="M17.1 0c.2 2-.6 3.5-1.7 4.6-1.1 1.1-2.6 1.8-4.1 1.7-.2-1.9.6-3.4 1.7-4.5C14.2.7 15.8.1 17.1 0ZM21.8 20.3c-.6 1.5-.9 2.2-1.7 3.5-1.1 1.8-2.7 4-4.6 4-1.7 0-2.2-1.1-4.5-1.1-2.3 0-2.9 1.1-4.5 1.1-1.9 0-3.4-2-4.5-3.9C-1.2 18.6-.5 11 3.8 8.6c1.6-.9 3.6-1 5.3-.3 1.4.5 2.2.6 3.2.2 2.1-.9 4.4-1.2 6.2-.2 1 .5 1.8 1.2 2.4 2-3.4 1.9-3.7 6.8.9 10Z" /></svg>;
}

export function PremiumHero() {
  const { t } = useLanguage();
  return (
    <section aria-label={t('Protiva AI for Android')} className="premium-intro mx-auto max-w-6xl border-x px-5 sm:px-10">
      <div className="premium-meta flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-3"><span className="h-2 w-2 bg-accent" aria-hidden="true" />{t('PDF READER & STUDY TOOLS')}</span>
        <span className="hidden h-px flex-1 bg-border sm:block" aria-hidden="true" />
        <span>{t('PROTIVA / ANDROID')}</span>
      </div>
      <h1 className="premium-title font-semibold">
        <span className="premium-title-mask"><span>{t('Protiva AI,')}</span></span>
        <span className="premium-title-mask"><span className="premium-title-accent text-accent">{t('for Android.')}</span></span>
      </h1>
      <div className="mobile-product-stage">
        <div className="intro-expanding-panel" aria-hidden="true"><span /><span /><span /></div>
        <DocumentGraphic kind="annotate" className="intro-document-graphic" />
        <svg className="mobile-motion-lines" viewBox="0 0 350 190" fill="none" aria-hidden="true">
          <path className="motion-document" d="M36 49h52l15 15v76H36V49Zm52 0v15h15M49 82h41M49 95h31M49 108h38M49 121h23" />
          <path className="motion-connection" d="M105 94h27m84 0h28m-7-5 7 5-7 5" />
          <path className="motion-spark" d="m283 61 5 15 15 5-15 5-5 15-5-15-15-5 15-5 5-15ZM270 120h31m-31 10h22" />
        </svg>
        <div className="mobile-product-edge" aria-hidden="true" />
        <img src={studySpace} alt={t('Protiva Android study workspace with PDF library, Nova and OCR')} width={768} height={1366} fetchPriority="high" className="mobile-product-image" />
      </div>
      <div className="premium-support-grid">
        <div className="premium-support">
          <p className="intro-copy text-lg leading-relaxed text-muted-foreground">{t('Read and annotate PDFs, ask Nova questions about a page, and get explanations in Bangla.')}</p>
          <div className="mt-6 grid grid-cols-2 gap-3" aria-label={t('App stores')}>
            <Button disabled className="store-entry" aria-label={t('App Store — Link not available')}><AppleMark /><span className="store-badge-copy"><span className="store-badge-kicker">Download on the</span><span className="store-badge-name">App Store</span></span></Button>
            <Button disabled className="store-entry" aria-label={t('Google Play — Link not available')}><PlayMark /><span className="store-badge-copy"><span className="store-badge-kicker">GET IT ON</span><span className="store-badge-name">Google Play</span></span></Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{t('App Store and Google Play links are not available yet.')}</p>
          <div className="premium-actions mt-4 flex flex-wrap gap-3">
            <DownloadButton className="flex-1 whitespace-nowrap px-4 sm:flex-none" />
            <MacDownloadButton className="flex-1 whitespace-nowrap px-4 sm:flex-none" />
            <Button asChild variant="outline" className="h-12 flex-1 px-5 sm:flex-none"><a href={LINKS.webApp}>{t('Open Web App')}<ArrowUpRight aria-hidden="true" /></a></Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{t('Mac download link is not available yet.')}</p>
        </div>
      </div>
    </section>
  );
}