import { ArrowDownRight, ArrowRight, BookOpen, Check, FileText, Languages, PenLine, Sparkles } from "lucide-react";
import home from "@/assets/02-home-and-ocr.webp";
import { LINKS } from "@/config/app";
import { Button } from "@/components/ui/button";
import { DownloadButton } from "./DownloadButton";
import { Reveal } from "./Reveal";

export function BentoHero() {
  return (
    <section aria-label="Protiva AI for Android" className="bento-intro mx-auto max-w-6xl px-5 pt-10 pb-12 sm:pt-14">
      <div className="bento-grid">
        <div className="bento-masthead min-w-0">
          <p className="mb-5 flex items-center gap-2 font-mono text-xs uppercase text-muted-foreground"><span className="h-2 w-2 rounded-full bg-accent" /> Your mobile study workspace</p>
          <h1 className="text-5xl font-semibold leading-[1.06] sm:text-6xl lg:text-7xl">Protiva AI,<br /><span className="text-accent">now on Android.</span></h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">Your PDFs. Your notes. Your AI study workspace. Read, annotate, and understand your documents anywhere.</p>
          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <DownloadButton />
            <Button asChild variant="outline" className="h-12 px-6"><a href={LINKS.webApp}>Open Web App <ArrowRight aria-hidden="true" /></a></Button>
          </div>
          <p className="mt-5 font-mono text-xs text-muted-foreground">Android · APK · Official Protiva release</p>
        </div>

        <article className="bento-mobile bento-tile bg-accent-soft">
          <div className="relative z-10">
            <p className="mb-3 font-mono text-xs uppercase text-muted-foreground">Mobile workspace</p>
            <h2 className="text-3xl font-semibold">Study anywhere.</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Your documents and Nova, together on Android.</p>
          </div>
          <div className="bento-screen-stage">
            <div className="bento-screen-edge" aria-hidden="true" />
            <img src={home} alt="Protiva Android home screen with PDF library, Nova and text extraction" width={768} height={1366} className="bento-app-picture" fetchPriority="high" />
          </div>
          <span className="bento-corner-index font-mono text-xs text-muted-foreground">PROTIVA / ANDROID</span>
        </article>

        <Reveal as="article" className="bento-workflow bento-tile bg-primary text-primary-foreground">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
            <div className="min-w-0"><p className="mb-3 font-mono text-xs uppercase text-primary-foreground/60">Read → understand → study</p><h2 className="text-3xl font-semibold">Your entire study workflow.</h2><p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/70">From your first PDF to your next breakthrough. Keep your reading, thinking and studying together.</p></div>
            <Button asChild variant="ghost" size="icon" className="shrink-0 border border-primary-foreground/20 hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href="#feature-tour" aria-label="Explore all fourteen features" title="Explore all fourteen features"><ArrowDownRight /></a></Button>
          </div>
          <div className="workflow-depth" aria-hidden="true">
            <div className="workflow-layer workflow-layer-back" />
            <div className="workflow-layer workflow-layer-middle" />
            <div className="workflow-page">
              <div className="flex items-center gap-3 border-b border-primary-foreground/15 pb-3"><FileText className="h-5 w-5 text-accent" /><span className="text-sm font-medium">Your next breakthrough.pdf</span></div>
              <div className="mt-4 flex gap-4"><span className="document-line" /><span className="document-line" /><span className="document-line" /></div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-xs"><span className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-accent" /> Read</span><span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-accent" /> Ask Nova</span><span className="flex items-center gap-2"><Languages className="h-4 w-4 text-accent" /> Understand</span></div>
            </div>
          </div>
        </Reveal>

        <Reveal as="article" delay={120} className="bento-annotation bento-tile border bg-card">
          <div className="mb-8 flex items-center justify-between gap-3"><PenLine className="h-7 w-7 text-accent" strokeWidth={1.5} /><span className="font-mono text-xs text-muted-foreground">01 / 14 FEATURES</span></div>
          <h2 className="text-2xl font-semibold">Make every page yours.</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Keep your thinking on the page with highlights, handwritten marks and drawings.</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2"><Check className="h-4 w-4 shrink-0 text-accent" /> Highlight passages worth revisiting</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 shrink-0 text-accent" /> Add notes and draw directly</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}