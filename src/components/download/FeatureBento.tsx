import { FileText, Languages, ScanText, Sparkles, Users, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/download/Reveal";
import annotations from "@/assets/01-pdf-annotations.png";
import nova from "@/assets/11-document-context.png";
import bangla from "@/assets/10-bangla-explanations.png";
import rooms from "@/assets/06-live-study-rooms.png";
import { DocumentGraphic } from "./DocumentGraphic";

export function FeatureBento() {
  return (
    <section id="features" aria-label="Protiva feature overview" className="border-t">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 font-mono text-xs uppercase text-accent">PDF tools</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Read, annotate and ask Nova.</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">Add notes to PDFs, extract text with OCR, or join a live study room.</p>
        </Reveal>
        <div className="protiva-feature-bento" tabIndex={0} role="region" aria-label="Protiva feature overview tiles">
          <Reveal as="article" className="overview-tile overview-annotation bg-card" delay={0}>
            <DocumentGraphic kind="annotate" className="tile-document-graphic" />
            <div className="overview-label"><FileText aria-hidden="true" /><span>PDF Annotations</span></div>
            <h3 className="mt-4 text-2xl font-semibold">Highlight text.<br />Add your notes.</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">Highlights, handwritten notes and drawings beside the original text.</p>
            <div className="overview-image overview-annotation-image"><img src={annotations} alt="Protiva PDF reader with annotations" loading="lazy" draggable={false} /></div>
          </Reveal>
          <Reveal as="article" className="overview-tile overview-bangla bg-accent-soft" delay={80}>
            <span className="bangla-glyph" aria-hidden="true">অ</span>
            <div className="overview-label"><Languages aria-hidden="true" /><span>Bangla Explanations</span></div>
            <h3 className="mt-4 text-xl font-semibold">Read explanations in Bangla.</h3>
            <div className="overview-image overview-bangla-image"><img src={bangla} alt="Protiva explaining a PDF page in Bangla" loading="lazy" draggable={false} /></div>
          </Reveal>
          <Reveal as="article" className="overview-tile overview-nova bg-primary text-primary-foreground" delay={160}>
            <DocumentGraphic kind="connect" className="tile-document-graphic" />
            <div className="overview-label"><Sparkles aria-hidden="true" /><span>Nova · Document Context</span></div>
            <h3 className="mt-5 text-3xl font-semibold">Ask Nova<br />about your<br /><span className="text-accent">PDF.</span></h3>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">Include your PDF in a Nova conversation and ask follow-up questions.</p>
            <div className="overview-image overview-nova-image"><img src={nova} alt="Nova conversation with PDF document context" loading="lazy" draggable={false} /></div>
          </Reveal>
          <Reveal as="article" className="overview-tile overview-ocr bg-secondary" delay={120}>
            <ScanText className="h-8 w-8 text-accent" strokeWidth={1.5} aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold">Extract text with OCR.</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Turn scanned text into text you can copy.</p>
            <DocumentGraphic kind="scan" className="ocr-document-graphic" />
          </Reveal>
          <Reveal as="article" className="overview-tile overview-rooms bg-card" delay={200}>
            <svg className="room-orbit" viewBox="0 0 200 160" fill="none" aria-hidden="true"><path pathLength={1} d="M26 80h148M100 25v110M47 38l106 84M47 122l106-84" /><circle cx="100" cy="80" r="23" /><circle cx="26" cy="80" r="8" /><circle cx="174" cy="80" r="8" /><circle cx="100" cy="25" r="8" /><circle cx="100" cy="135" r="8" /></svg>
            <div className="overview-room-copy">
              <div className="overview-label"><Users aria-hidden="true" /><span>Live Study Rooms</span></div>
              <h3 className="mt-4 text-xl font-semibold">Study with others.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Join a live room for group study.</p>
            </div>
            <div className="overview-image overview-rooms-image"><img src={rooms} alt="Protiva live study rooms" loading="lazy" draggable={false} /></div>
          </Reveal>
        </div>
        <div className="mobile-overview-marker" aria-hidden="true"><span /><span /><span /><span /><span /></div>
        <a href="#feature-tour" className="mt-7 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline">See all 14 app screens <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
      </div>
    </section>
  );
}