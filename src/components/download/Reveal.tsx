import { useEffect, useRef, useState } from "react";
import { useMotionPreference } from "./MotionPreference";
import { useGraphicInteraction } from "@/hooks/use-graphic-interaction";

/** Viewport-aware choreography; server-rendered content remains visible without JS. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  variant = "kinetic",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
  variant?: "fade" | "narrative" | "kinetic";
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(true);
  const [visible, setVisible] = useState(true);
  const motion = useMotionPreference();
  const interaction = useGraphicInteraction();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (motion !== "full") { setShown(true); setVisible(true); return; }
    const rect = el.getBoundingClientRect();
    const initiallyVisible = rect.top < window.innerHeight && rect.bottom > 0 && rect.left < window.innerWidth && rect.right > 0;
    setShown(initiallyVisible);
    setVisible(initiallyVisible);
    const io = new IntersectionObserver(
      (entries) => {
        const inView = entries[0]?.isIntersecting ?? false;
        setVisible(inView);
        if (inView) setShown(true);
      },
      { threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [motion]);

  return (
    <Tag
      {...interaction}
      ref={ref as never}
      data-reveal={shown ? "shown" : "pending"}
      data-visible={visible ? "true" : "false"}
      style={{ "--reveal-delay": `${delay}ms`, transitionDelay: shown ? `${delay}ms` : "0ms" } as React.CSSProperties}
      className={variant === "kinetic" ? `kinetic-reveal ${className}` : variant === "narrative" ? `narrative-reveal ${className}` : `transition-all duration-700 ease-out motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
