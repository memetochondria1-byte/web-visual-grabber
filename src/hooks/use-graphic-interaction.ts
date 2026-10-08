import type { PointerEvent } from "react";
import { useMotionPreference } from "@/components/download/MotionPreference";

/** Pointer coordinates affect decorative ink only, never product pictures or layout. */
export function useGraphicInteraction() {
  const motion = useMotionPreference();
  const reset = (event: PointerEvent<HTMLElement>) => {
    const element = event.currentTarget;
    element.dataset.engaged = "false";
    element.style.removeProperty("--graphic-x");
    element.style.removeProperty("--graphic-y");
    element.style.removeProperty("--scan-position");
  };
  return {
    onPointerMove: (event: PointerEvent<HTMLElement>) => {
      if (motion !== "full" || event.pointerType === "touch") return;
      const element = event.currentTarget;
      const rect = element.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
      element.style.setProperty("--graphic-x", `${(x - .5) * 12}px`);
      element.style.setProperty("--graphic-y", `${(y - .5) * 8}px`);
      element.style.setProperty("--scan-position", `${y * 85}px`);
    },
    onPointerDown: (event: PointerEvent<HTMLElement>) => {
      if (motion === "full") event.currentTarget.dataset.engaged = "true";
    },
    onPointerUp: reset,
    onPointerLeave: reset,
    onPointerCancel: reset,
  };
}