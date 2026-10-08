import { useEffect, useRef, useState } from "react";
import { useMotionPreference } from "./MotionPreference";

/** Fades content up as it scrolls into view. Content stays visible without JS. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  variant = "fade",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
  variant?: "fade" | "narrative";
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(true);
  const motion = useMotionPreference();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (motion !== "full") { setShown(true); return; }
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) return; // already on screen
    setShown(false);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [motion]);

  return (
    <Tag
      ref={ref as never}
      data-reveal={shown ? "shown" : "pending"}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={variant === "narrative" ? `narrative-reveal ${className}` : `transition-all duration-700 ease-out motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
