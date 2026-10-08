import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  { src: annotations, title: "PDF Annotations", category: "Read & annotate", description: "Make the page your own.", detail: "Read your PDF and keep your thinking on the page, with highlights, handwritten marks and drawings alongside the original text.", points: ["Highlight passages worth revisiting", "Add notes and draw directly on the page", "Keep your annotations beside the source text"] },
  { src: home, title: "Your Study Space", category: "Your workspace", description: "Everything starts in one place.", detail: "Your home brings documents, Nova and text extraction together, so you can move from opening a PDF to working with its content.", points: ["Open your PDF library", "Start a conversation with Nova", "Extract text with OCR"] },
  { src: signIn, title: "Sign In", category: "Your account", description: "A workspace that feels like yours.", detail: "Sign in to your Protiva account to access the connected parts of your study workspace, including AI conversations and shared study.", points: ["Access your Protiva account", "Connect to account-based features", "Return to your study workspace"] },
  { src: pro, title: "Protiva Pro", category: "Your plan", description: "Your account. Your next step.", detail: "See Protiva Pro from inside the app and review the account and library options available for your study workflow.", points: ["Explore the Pro plan", "Review your account options", "Find connected library features"] },
  { src: reading, title: "Continue Reading", category: "Read & annotate", description: "Back to the page that matters.", detail: "Find the documents you have been reading and return to your work without starting your study session from scratch.", points: ["Find recently opened PDFs", "Return to an ongoing reading session", "Keep your reading workflow focused"] },
  { src: rooms, title: "Live Study Rooms", category: "Study together", description: "A shared space to stay focused.", detail: "Bring a study session into a live room and work alongside others, with a dedicated place for group study.", points: ["Join a live study room", "Study alongside other learners", "Keep group study in one space"] },
  { src: nova, title: "Meet Nova", category: "Your AI study partner", description: "A little help with the hard parts.", detail: "Bring Nova into your reading workflow to ask about your material and get explanations while you study.", points: ["Ask questions about your reading", "Explore ideas with AI assistance", "Keep studying alongside your documents"] },
  { src: conversations, title: "Nova Conversations", category: "Your AI study partner", description: "Follow your curiosity further.", detail: "Turn a question into a conversation. Ask follow-ups, explore a difficult concept and build on Nova’s responses as you read.", points: ["Ask a focused question", "Continue with follow-up questions", "Explore a concept through conversation"] },
  { src: sharing, title: "Share Conversations", category: "Study together", description: "Good explanations are worth sharing.", detail: "Pass a useful Nova conversation to someone else using a shareable link or QR code.", points: ["Create a conversation link", "Share through a QR code", "Pass useful study discussions to others"] },
  { src: bangla, title: "Bangla Explanations", category: "Understand your reading", description: "Understand it in Bangla.", detail: "Read a page explanation in Bangla alongside your PDF, keeping the source material close while you work through its meaning.", points: ["Get page explanations in Bangla", "Keep the PDF beside the explanation", "Work through unfamiliar passages"] },
  { src: context, title: "Document Context", category: "Understand your reading", description: "More than an isolated paragraph.", detail: "Bring document context into your Nova conversation while working in page mode, so your questions can connect to the wider reading material.", points: ["Bring a PDF into the conversation", "Use document context with Nova", "Keep working in page mode"] },
  { src: simpler, title: "Simpler Explanations", category: "Understand your reading", description: "Make a difficult page click.", detail: "Ask Nova for a simpler explanation when a page feels dense. Work through the same material in more approachable words.", points: ["Ask for simpler wording", "Break down a difficult page", "Follow up on what is still unclear"] },
  { src: exportWork, title: "Export Your Work", category: "Keep & share", description: "Take your work with you.", detail: "Choose the export format that fits your next step, whether you need a readable PDF, Markdown or a bundle of your work.", points: ["Export a flattened PDF or Markdown", "Choose PDF + JSON for your workflow", "Keep a .lpdf bundle of your work"] },
  { src: tools, title: "More Study Tools", category: "Your study toolkit", description: "Go beyond simply reading.", detail: "Explore the tools around your PDF, from translation to Study Mode and mnemonics, and choose what fits the material you are working through.", points: ["Explore Lens Translator", "Work with Study Mode", "Use mnemonics while studying"] },
];

const stageWords = ["ANNOTATE", "WORKSPACE", "CONNECT", "PRO", "READ", "TOGETHER", "NOVA", "EXPLORE", "SHARE", "BANGLA", "CONTEXT", "SIMPLIFY", "EXPORT", "DISCOVER"];

export function ScreenshotGallery() {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [carouselRef, carousel] = useEmblaCarousel({ loop: false, duration: 35 });

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

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
        <p className="font-mono text-xs uppercase text-accent">Inside Protiva · 14 features</p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Your entire study workflow.</h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">From your first PDF to your next breakthrough. Reading, understanding and studying, together in Protiva.</p>
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
