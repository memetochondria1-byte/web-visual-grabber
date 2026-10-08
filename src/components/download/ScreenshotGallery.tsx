import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

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

export function ScreenshotGallery() {
  const rows = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      let current = 0;
      rows.current.forEach((row, index) => {
        if (row && row.getBoundingClientRect().top <= 170) {
          const previous = rows.current[index - 1];
          if (!previous || Math.abs(previous.getBoundingClientRect().top - row.getBoundingClientRect().top) > 2) current = index;
        }
      });
      setActive((selected) => {
        const selectedRow = rows.current[selected];
        const currentRow = rows.current[current];
        if (selectedRow && currentRow && Math.abs(selectedRow.getBoundingClientRect().top - currentRow.getBoundingClientRect().top) < 2) return selected;
        return current;
      });
      frame = 0;
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  function goTo(index: number) {
    const row = rows.current[index];
    if (!row) return;
    setActive(index);
    row.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
  }

  return (
    <section id="feature-tour" aria-label="Protiva app pictures" className="border-t">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-10 text-center sm:pt-20">
        <p className="font-mono text-xs uppercase text-accent">Inside Protiva · 14 features</p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Your entire study workflow.</h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">From your first PDF to your next breakthrough. Reading, understanding and studying, together in Protiva.</p>
      </div>
      <div className="sticky top-16 z-20 border-y bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
          <span className="shrink-0 font-mono text-xs tabular-nums text-accent" aria-live="polite">{String(active + 1).padStart(2, "0")} / 14</span>
          <span className="min-w-0 flex-1 truncate text-sm font-medium">{features[active]?.title}</span>
          <div className="flex shrink-0 gap-2">
            <Button variant="outline" size="icon" aria-label="Previous feature" title="Previous feature" disabled={active === 0} onClick={() => goTo(active - 1)}><ArrowUp /></Button>
            <Button variant="outline" size="icon" aria-label="Next feature" title="Next feature" disabled={active === features.length - 1} onClick={() => goTo(active + 1)}><ArrowDown /></Button>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5">
        {Array.from({ length: Math.ceil(features.length / 2) }, (_, pair) => (
          <div key={pair} className="grid gap-16 border-b py-12 last:border-b-0 sm:py-16 md:grid-cols-2 md:gap-16 lg:gap-24">
          {features.slice(pair * 2, pair * 2 + 2).map((feature, offset) => {
            const index = pair * 2 + offset;
            return (
          <article key={feature.title} data-feature-index={index} ref={(element) => { rows.current[index] = element; }} aria-labelledby={`feature-title-${index}`} className="feature-chapter flex scroll-mt-36 flex-col">
            <Reveal className="mx-auto w-full max-w-md flex-1 pb-8 text-center">
              <p className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")} / 14 · {feature.category}</p>
              <h3 id={`feature-title-${index}`} className="mt-3 text-2xl font-semibold sm:text-3xl">{feature.title}</h3>
              <p className="mt-3 font-medium">{feature.description}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.detail}</p>
              <ul className="mx-auto mt-5 w-fit space-y-2 text-left">
                {feature.points.map((point) => <li key={point} className="flex items-start gap-3 text-sm leading-relaxed"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />{point}</li>)}
              </ul>
            </Reveal>
            <div className="flex justify-center">
              <img src={feature.src} alt={`Protiva — ${feature.title}`} width={768} height={1366} loading={index < 2 ? "eager" : "lazy"} decoding="async" className="aspect-[768/1366] w-full max-w-[320px] rounded-lg object-contain sm:max-w-[340px]" />
            </div>
          </article>
            );
          })}
          </div>
        ))}
      </div>
    </section>
  );
}
