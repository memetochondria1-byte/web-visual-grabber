import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMotionPreference } from "./MotionPreference";

import annotations from "@/assets/01-pdf-annotations.png";
import home from "@/assets/02-home-and-ocr.webp";
import signIn from "@/assets/03-sign-in.png";
import pro from "@/assets/04-protiva-pro.png";
import reading from "@/assets/05-continue-reading.webp";
import rooms from "@/assets/06-live-study-rooms.png";
import nova from "@/assets/07-meet-nova.png";
import conversations from "@/assets/08-nova-conversations.png";
import sharing from "@/assets/09-share-conversations.png";
import bangla from "@/assets/10-bangla-explanations.png";
import context from "@/assets/11-document-context.png";
import simpler from "@/assets/12-simpler-explanations.png";
import exportWork from "@/assets/13-export-your-work.png";
import tools from "@/assets/14-study-tools.png";

const features = [
  { src: annotations, title: "PDF Annotations", category: "PDF reader", description: "Highlight text and write on your PDF.", detail: "Mark passages, add handwritten notes or draw on the page while you read.", points: ["Highlight text", "Write notes and draw on the page", "View annotations with the original text"] },
  { src: home, title: "Your Study Space", category: "Home", description: "Open your library, Nova or OCR.", detail: "The home screen gives you access to your PDFs, Nova conversations and text extraction tools.", points: ["Open your PDF library", "Start a conversation with Nova", "Extract text with OCR"] },
  { src: signIn, title: "Sign In", category: "Account", description: "Sign in to your Protiva account.", detail: "Use the sign-in screen to access your account in the Android app.", points: ["Sign in from the app", "Access your account"] },
  { src: pro, title: "Protiva Pro", category: "Plan", description: "View the Pro plan in the app.", detail: "Check the Pro screen for the plan details shown in your app version.", points: ["View Protiva Pro", "Check the available plan details"] },
  { src: reading, title: "Continue Reading", category: "PDF reader", description: "Reopen a recent PDF.", detail: "Find recently opened documents in Continue Reading and return to a reading session.", points: ["Find recent PDFs", "Reopen a document"] },
  { src: rooms, title: "Live Study Rooms", category: "Group study", description: "Join a room and study with others.", detail: "Live study rooms give you a place to take part in a group study session.", points: ["Join a live study room", "Study alongside other learners"] },
  { src: nova, title: "Meet Nova", category: "Nova", description: "Ask questions about what you are reading.", detail: "Ask Nova to explain a passage or help you work through a topic in your document.", points: ["Ask about a passage", "Request an explanation", "Ask a follow-up question"] },
  { src: conversations, title: "Nova Conversations", category: "Nova", description: "Keep asking in the same conversation.", detail: "Follow up on Nova’s answers when you need more detail or a different explanation.", points: ["Start with a question", "Ask follow-up questions", "Request more detail"] },
  { src: sharing, title: "Share Conversations", category: "Sharing", description: "Share a Nova conversation by link or QR code.", detail: "Create a link or QR code for a conversation you want someone else to read.", points: ["Create a conversation link", "Share a QR code", "Send a discussion to someone else"] },
  { src: bangla, title: "Bangla Explanations", category: "Page explanations", description: "Get a PDF page explained in Bangla.", detail: "Read the Bangla explanation alongside the original page.", points: ["Request a page explanation in Bangla", "View the PDF beside the explanation", "Ask about an unfamiliar passage"] },
  { src: context, title: "Document Context", category: "Nova", description: "Include your PDF in the conversation.", detail: "Use document context in page mode to ask Nova questions about your PDF.", points: ["Add PDF context", "Ask Nova about the document", "Use page mode"] },
  { src: simpler, title: "Simpler Explanations", category: "Page explanations", description: "Ask for an explanation in simpler words.", detail: "If a page is hard to follow, ask Nova to explain it more simply. You can ask again about any part that is still unclear.", points: ["Request simpler wording", "Ask about a difficult passage", "Follow up on unclear details"] },
  { src: exportWork, title: "Export Your Work", category: "Export", description: "Save your work in another format.", detail: "Choose from the export options shown in the app: flattened PDF, Markdown, PDF + JSON or an .lpdf bundle.", points: ["Export a flattened PDF or Markdown", "Save PDF + JSON", "Create an .lpdf bundle"] },
  { src: tools, title: "More Study Tools", category: "Study tools", description: "Use translation, Study Mode and mnemonics.", detail: "Open the study tools menu to find Lens Translator, Study Mode and mnemonic tools.", points: ["Open Lens Translator", "Use Study Mode", "Try mnemonic tools"] },
];

const stageWords = ["ANNOTATE", "WORKSPACE", "CONNECT", "PRO", "READ", "TOGETHER", "NOVA", "EXPLORE", "SHARE", "BANGLA", "CONTEXT", "SIMPLIFY", "EXPORT", "DISCOVER"];

export function ScreenshotGallery() {
  const [active, setActive] = useState(0);
  const motion = useMotionPreference();
  const reducedMotion = motion !== "full";
  const [carouselRef, carousel] = useEmblaCarousel({ loop: false, duration: 35 });

  useEffect(() => {
    if (!carousel) return;
    const update = () => setActive(carousel.selectedScrollSnap());
    carousel.on("select", update);
    carousel.on("reInit", update);
    return () => {
      carousel.off("select", update);
      carousel.off("reInit", update);
    };
  }, [carousel]);

  useEffect(() => {
    carousel?.reInit({ duration: reducedMotion ? 0 : 35 });
  }, [carousel, reducedMotion]);

  function goTo(index: number) {
    carousel?.scrollTo(index, reducedMotion);
  }

  return (
    <section id="feature-tour" aria-label="Protiva app pictures" className="border-t">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-10 text-center sm:pt-20">
        <p className="font-mono text-xs uppercase text-accent">Protiva for Android · 14 app screens</p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A closer look at the app.</h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">PDF reading, Nova conversations, Bangla explanations and the other tools available in Protiva.</p>
      </div>
      <div className="border-y bg-background">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
          <span className="shrink-0 font-mono text-xs tabular-nums text-accent" aria-live="polite">{String(active + 1).padStart(2, "0")} / 14</span>
          <span className="min-w-0 flex-1 truncate text-sm font-medium">{features[active]?.title}</span>
          <div className="flex shrink-0 gap-2">
            <Button variant="outline" size="icon" aria-label="Previous feature" title="Previous feature" disabled={active === 0} onClick={() => goTo(active - 1)}><ArrowLeft /></Button>
            <Button variant="outline" size="icon" aria-label="Next feature" title="Next feature" disabled={active === features.length - 1} onClick={() => goTo(active + 1)}><ArrowRight /></Button>
          </div>
        </div>
      </div>
      <div ref={carouselRef} className="feature-swipe-viewport mx-auto max-w-6xl" role="region" aria-roledescription="carousel" aria-label="Protiva features" tabIndex={0} onKeyDown={(event) => {
        if (event.key === "ArrowRight") { event.preventDefault(); goTo(Math.min(active + 1, features.length - 1)); }
        if (event.key === "ArrowLeft") { event.preventDefault(); goTo(Math.max(active - 1, 0)); }
      }}>
        <div className="feature-swipe-track">
        {features.map((feature, index) => (
          <article key={feature.title} data-feature-index={index} data-active={index === active} inert={index !== active} aria-hidden={index !== active} aria-roledescription="slide" aria-label={`${index + 1} of ${features.length}`} aria-labelledby={`feature-title-${index}`} className="feature-swipe-slide px-5 py-10 sm:py-14">
            <div className="kinetic-chapter grid items-center gap-8 md:grid-cols-2 md:gap-14 lg:gap-20">
              <div className="kinetic-image-stage">
                <span className="kinetic-word" aria-hidden="true">{stageWords[index]}</span>
                <div className="narrative-picture kinetic-picture mx-auto w-full max-w-[340px] rounded-lg sm:max-w-[380px]">
                <img src={feature.src} alt={`Protiva — ${feature.title}`} width={768} height={1366} loading={index <= active + 1 ? "eager" : "lazy"} decoding="async" draggable={false} className="aspect-[768/1366] w-full object-contain" />
                </div>
                <span className="kinetic-stage-caption font-mono text-xs text-muted-foreground" aria-hidden="true">PROTIVA / ANDROID · {String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="min-w-0">
              <header className="narrative-heading mb-8 w-full">
                <p className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground"><span className="font-mono text-sm font-medium text-accent">{String(index + 1).padStart(2, "0")} / 14</span><span className="h-px w-8 bg-accent/30" aria-hidden="true" />{feature.category}</p>
                <h3 id={`feature-title-${index}`} className="kinetic-title mt-6 font-semibold">{feature.title}</h3>
                <p className="mt-5 text-xl font-medium text-accent-foreground">{feature.description}</p>
              </header>
              <p className="narrative-detail max-w-2xl leading-relaxed text-muted-foreground">{feature.detail}</p>
              <ul className="narrative-points mt-8 w-fit space-y-3 text-left">
                {feature.points.map((point) => <li key={point} className="flex items-start gap-3 text-sm leading-relaxed"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft"><Check className="h-3.5 w-3.5 text-accent-foreground" aria-hidden="true" /></span><span className="pt-0.5">{point}</span></li>)}
              </ul>
              <div className="narrative-points mt-10 flex items-center gap-3">
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full" disabled={index === 0} aria-label={`Feature before ${feature.title}`} title="Previous feature" onClick={() => goTo(index - 1)}><ArrowLeft /></Button>
                <Button size="icon" className="h-12 w-12 rounded-full" disabled={index === features.length - 1} aria-label={`Feature after ${feature.title}`} title="Next feature" onClick={() => goTo(index + 1)}><ArrowRight /></Button>
                <div className="ml-2 flex min-w-0 flex-1 gap-1" aria-hidden="true">{features.map((item, step) => <span key={item.title} className={`h-1 rounded-full ${step === index ? "flex-[3] bg-accent" : "flex-1 bg-border"}`} />)}</div>
              </div>
              </div>
            </div>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}
