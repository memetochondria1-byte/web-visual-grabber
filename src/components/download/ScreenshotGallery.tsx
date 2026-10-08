import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

const pictures = [
  { src: annotations, alt: "Protiva PDF annotations: read, mark and draw on your PDF" },
  { src: home, alt: "Protiva home with PDFs, Nova and text extraction" },
  { src: signIn, alt: "Sign in to your Protiva workspace" },
  { src: pro, alt: "Protiva Pro account and cloud library" },
  { src: reading, alt: "Continue reading your PDFs in Protiva" },
  { src: rooms, alt: "Protiva live study rooms for working together" },
  { src: nova, alt: "Meet Nova in your Protiva workspace" },
  { src: conversations, alt: "Ask questions and explore with Nova" },
  { src: sharing, alt: "Share a Nova conversation with a link or QR code" },
  { src: bangla, alt: "Page explanations in Bangla beside your PDF" },
  { src: context, alt: "Bring your PDF into the Nova conversation with document context" },
  { src: simpler, alt: "Ask Nova to explain a hard page in simpler words" },
  { src: exportWork, alt: "Export your work as PDF, Markdown or a bundle" },
  { src: tools, alt: "Reading, annotation and study tools in one place" },
];

const explanationCards = [
  {
    title: "PDF Annotations",
    description: "Read, mark, highlight, and draw directly on any page of your PDF.",
  },
  {
    title: "Your Study Space",
    description: "Keep your PDFs, Nova AI, and text extraction together in one focused workspace.",
  },
  {
    title: "Pick up where you left off",
    description: "Sign in once and access your study workspace across all your devices.",
  },
  {
    title: "Protiva Pro",
    description: "Unlock Pro features and keep your account and library connected.",
  },
  {
    title: "Continue Reading",
    description: "Jump back into your PDFs and continue reading from where you stopped.",
  },
  {
    title: "Live Study Rooms",
    description: "Study together with others in shared live rooms.",
  },
  {
    title: "Meet Nova",
    description: "Use Nova AI to understand your documents and get help while studying.",
  },
  {
    title: "Nova Conversations",
    description: "Ask Nova questions and explore your documents through AI conversations.",
  },
  {
    title: "Share Conversations",
    description: "Share useful Nova conversations with others using a link or QR code.",
  },
  {
    title: "Bangla Explanations",
    description: "Read page explanations in Bangla, right beside your PDF.",
  },
  {
    title: "Document Context",
    description: "Nova can use the whole document while you keep working in page mode.",
  },
  {
    title: "Simpler Explanations",
    description: "Ask Nova to explain a hard page in simpler words you understand.",
  },
  {
    title: "Export Your Work",
    description: "Keep highlights, drawings, and notes together and take them anywhere.",
  },
  {
    title: "More Study Tools",
    description: "Discover reading, annotation, and study tools in one place.",
  },
];

export function ScreenshotGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <Carousel
      opts={{ align: "start", slidesToScroll: 1 }}
      aria-label="Protiva app pictures"
      className="mx-auto max-w-5xl text-left"
    >
      <CarouselContent>
        {pictures.map(({ src, alt }, index) => (
          <CarouselItem
            key={src}
            className="basis-[85%] sm:basis-1/2 lg:basis-1/3 transition-transform duration-300 ease-out hover:-translate-y-1.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <img
              src={src}
              alt={alt}
              width={768}
              height={1366}
              loading={index < 3 ? "eager" : "lazy"}
              decoding="async"
              className="aspect-[768/1366] w-full rounded-lg object-contain"
            />
            {explanationCards[index] && (
              <div
                className={`mt-4 motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{
                  transitionProperty: "opacity, transform",
                  transitionDuration: "0.6s",
                  transitionTimingFunction: "ease-out",
                  transitionDelay: isVisible ? `${index * 0.15}s` : "0s",
                }}
              >
                <h3 className="text-lg font-semibold tracking-[-0.015em]">{explanationCards[index].title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{explanationCards[index].description}</p>
              </div>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-5 flex justify-center gap-3">
        <CarouselPrevious className="static h-10 w-10 translate-y-0" title="Previous picture" />
        <CarouselNext className="static h-10 w-10 translate-y-0" title="Next picture" />
      </div>
      </Carousel>
    </div>
  );
}
