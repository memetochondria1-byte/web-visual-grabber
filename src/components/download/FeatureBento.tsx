import { FileText, Languages, ScanText, Sparkles, Users, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/download/Reveal";
import annotations from "@/assets/01-pdf-annotations.png";
import nova from "@/assets/11-document-context.png";
import bangla from "@/assets/10-bangla-explanations.png";
import rooms from "@/assets/06-live-study-rooms.png";

export function FeatureBento() {
  return (
    <section id="features" aria-label="Protiva feature overview" className="border-t">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 font-mono text-xs uppercase text-accent">The Protiva workspace</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">One PDF. More possibilities.</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">Read, ask, understand and study together — without leaving your material behind.</p>
        </Reveal>
        <div className="protiva-feature-bento">
          <Reveal as="article" className="overview-tile overview-annotation bg-card" delay={0}>
            <div className="overview-label"><FileText aria-hidden="true" /><span>PDF Annotations</span></div>
            <h3 className="mt-4 text-2xl font-semibold">Keep your thinking<br />on the page.</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">Highlights, handwritten notes and drawings beside the original text.</p>
            <div className="overview-image overview-annotation-image"><img src={annotations} alt="Protiva PDF reader with annotations" loading="lazy" draggable={false} /></div>
          </Reveal>
          <Reveal as="article" className="overview-tile overview-bangla bg-accent-soft" delay={80}>
            <div className="overview-label"><Languages aria-hidden="true" /><span>Bangla Explanations</span></div>
            <h3 className="mt-4 text-xl font-semibold">Understand it in Bangla.</h3>
            <div className="overview-image overview-bangla-image"><img src={bangla} alt="Protiva explaining a PDF page in Bangla" loading="lazy" draggable={false} /></div>
          </Reveal>
          <Reveal as="article" className="overview-tile overview-nova bg-primary text-primary-foreground" delay={160}>
            <div className="overview-label"><Sparkles aria-hidden="true" /><span>Nova · Document Context</span></div>
            <h3 className="mt-5 text-3xl font-semibold">Your PDF.<br />Your questions.<br /><span className="text-accent">Meet Nova.</span></h3>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">Ask, follow up and explore difficult ideas with your document in the conversation.</p>
            <div className="overview-image overview-nova-image"><img src={nova} alt="Nova conversation with PDF document context" loading="lazy" draggable={false} /></div>
          </Reveal>
          <Reveal as="article" className="overview-tile overview-ocr bg-secondary" delay={120}>
            <ScanText className="h-8 w-8 text-accent" strokeWidth={1.5} aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold">From scan to text.</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Extract text with OCR from your study workspace.</p>
            <div className="overview-scan" aria-hidden="true"><span /><span /><span /><span /><i /></div>
          </Reveal>
          <Reveal as="article" className="overview-tile overview-rooms bg-card" delay={200}>
            <div className="overview-room-copy">
              <div className="overview-label"><Users aria-hidden="true" /><span>Live Study Rooms</span></div>
              <h3 className="mt-4 text-xl font-semibold">Focus, together.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">A dedicated place to study alongside other learners.</p>
            </div>
            <div className="overview-image overview-rooms-image"><img src={rooms} alt="Protiva live study rooms" loading="lazy" draggable={false} /></div>
          </Reveal>
        </div>
        <a href="#feature-tour" className="mt-7 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline">Inside Protiva · Explore all 14 features <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
      </div>
    </section>
  );
}