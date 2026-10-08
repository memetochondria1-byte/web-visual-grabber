import { FileText, Languages, ScanText, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/download/Reveal";
import annotations from "@/assets/01-pdf-annotations.png";
import nova from "@/assets/11-document-context.png";
import bangla from "@/assets/10-bangla-explanations.png";
import rooms from "@/assets/06-live-study-rooms.png";
import { FeatureMotionGraphic } from "./FeatureMotionGraphic";
import home from "@/assets/02-home-and-ocr.webp";
import signIn from "@/assets/03-sign-in.png";
import pro from "@/assets/04-protiva-pro.png";
import reading from "@/assets/05-continue-reading.webp";
import meetNova from "@/assets/07-meet-nova.png";
import conversations from "@/assets/08-nova-conversations.png";
import sharing from "@/assets/09-share-conversations.png";
import simpler from "@/assets/12-simpler-explanations.png";
import exportWork from "@/assets/13-export-your-work.png";
import tools from "@/assets/14-study-tools.png";

const additionalFeatures = [
  { index: 2, title: "Sign In", heading: "Access your Protiva account.", description: "Sign in to your account from the Android app.", image: signIn },
  { index: 3, title: "Protiva Pro", heading: "View the Pro plan.", description: "Check the app’s Pro screen for available plan details.", image: pro },
  { index: 4, title: "Continue Reading", heading: "Return to a recent PDF.", description: "Reopen recently viewed documents and continue reading.", image: reading },
  { index: 6, title: "Meet Nova", heading: "Ask about what you’re reading.", description: "Request an explanation of a passage and ask follow-up questions.", image: meetNova },
  { index: 7, title: "Nova Conversations", heading: "Keep the conversation going.", description: "Ask for more detail or a different explanation in the same conversation.", image: conversations },
  { index: 8, title: "Share Conversations", heading: "Share by link or QR code.", description: "Send a Nova conversation to someone else to read.", image: sharing },
  { index: 11, title: "Simpler Explanations", heading: "Ask for simpler words.", description: "Request another explanation when a passage is hard to follow.", image: simpler },
  { index: 12, title: "Export Your Work", heading: "Save your work in another format.", description: "Export a flattened PDF, Markdown, PDF + JSON or an .lpdf bundle.", image: exportWork },
  { index: 13, title: "More Study Tools", heading: "Translate and study a passage.", description: "Find Lens Translator, Study Mode and mnemonic tools in the app.", image: tools },
];

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
            <FeatureMotionGraphic index={0} />
            <div className="overview-label"><FileText aria-hidden="true" /><span>PDF Annotations</span></div>
            <h3 className="mt-4 text-2xl font-semibold">Highlight text.<br />Add your notes.</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">Highlights, handwritten notes and drawings beside the original text.</p>
            <div className="overview-image overview-annotation-image"><img src={annotations} alt="Protiva PDF reader with annotations" loading="lazy" draggable={false} /></div>
          </Reveal>
          <Reveal as="article" className="overview-tile overview-bangla bg-accent-soft" delay={80}>
            <FeatureMotionGraphic index={9} />
            <div className="overview-label"><Languages aria-hidden="true" /><span>Bangla Explanations</span></div>
            <h3 className="mt-4 text-xl font-semibold">Read explanations in Bangla.</h3>
            <div className="overview-image overview-bangla-image"><img src={bangla} alt="Protiva explaining a PDF page in Bangla" loading="lazy" draggable={false} /></div>
          </Reveal>
          <Reveal as="article" className="overview-tile overview-nova bg-primary text-primary-foreground" delay={160}>
            <FeatureMotionGraphic index={10} />
            <div className="overview-label"><Sparkles aria-hidden="true" /><span>Nova · Document Context</span></div>
            <h3 className="mt-5 text-3xl font-semibold">Ask Nova<br />about your<br /><span className="text-accent">PDF.</span></h3>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">Include your PDF in a Nova conversation and ask follow-up questions.</p>
            <div className="overview-image overview-nova-image"><img src={nova} alt="Nova conversation with PDF document context" loading="lazy" draggable={false} /></div>
          </Reveal>
          <Reveal as="article" className="overview-tile overview-ocr bg-secondary" delay={120}>
            <ScanText className="h-8 w-8 text-accent" strokeWidth={1.5} aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold">Your library & OCR.</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Open your PDFs or extract text from a scan.</p>
            <FeatureMotionGraphic index={1} />
            <div className="overview-image overview-home-image"><img src={home} alt="Protiva home screen with library and OCR tools" loading="lazy" draggable={false} /></div>
          </Reveal>
          <Reveal as="article" className="overview-tile overview-rooms bg-card" delay={200}>
            <FeatureMotionGraphic index={5} />
            <div className="overview-room-copy">
              <div className="overview-label"><Users aria-hidden="true" /><span>Live Study Rooms</span></div>
              <h3 className="mt-4 text-xl font-semibold">Study with others.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Join a live room for group study.</p>
            </div>
            <div className="overview-image overview-rooms-image"><img src={rooms} alt="Protiva live study rooms" loading="lazy" draggable={false} /></div>
          </Reveal>
          {additionalFeatures.map((feature, index) => (
            <Reveal as="article" key={feature.index} delay={(index % 3) * 80} className={`overview-tile overview-additional ${index % 3 === 1 ? "bg-accent-soft" : "bg-card"}`}>
              <div className="overview-label"><FileText aria-hidden="true" /><span>{feature.title}</span></div>
              <h3 className="mt-4 text-xl font-semibold">{feature.heading}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              <FeatureMotionGraphic index={feature.index} />
              <div className="overview-image overview-additional-image"><img src={feature.image} alt={`Protiva — ${feature.title}`} loading="lazy" draggable={false} /></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}