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
];

export function ScreenshotGallery() {
  return (
    <Carousel
      opts={{ align: "start", slidesToScroll: 1 }}
      aria-label="Protiva app pictures"
      className="mx-auto max-w-5xl text-left"
    >
      <CarouselContent>
        {pictures.map(({ src, alt }, index) => (
          <CarouselItem key={src} className="basis-[85%] sm:basis-1/2 lg:basis-1/3">
            <img
              src={src}
              alt={alt}
              width={768}
              height={1366}
              loading={index < 3 ? "eager" : "lazy"}
              decoding="async"
              className="aspect-[768/1366] w-full rounded-lg object-contain"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-5 flex justify-center gap-3">
        <CarouselPrevious className="static h-10 w-10 translate-y-0" title="Previous picture" />
        <CarouselNext className="static h-10 w-10 translate-y-0" title="Next picture" />
      </div>
    </Carousel>
  );
}
