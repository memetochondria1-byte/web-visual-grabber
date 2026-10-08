import { createContext, useContext, useEffect, useState } from "react";
import { CirclePause, Play, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

type MotionMode = "full" | "reduced" | "off";
const MotionContext = createContext<MotionMode>("reduced");
export const useMotionPreference = () => useContext(MotionContext);

export function MotionPreference({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<MotionMode>("reduced");
  const [chosen, setChosen] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (!chosen) setMode(preference.matches ? "reduced" : "full");
    };
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, [chosen]);

  useEffect(() => {
    document.documentElement.dataset.motion = mode;
    return () => { delete document.documentElement.dataset.motion; };
  }, [mode]);

  return (
    <MotionContext.Provider value={mode}>
      <div className="border-b bg-background">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-end gap-3 px-5 py-2">
          <span className="text-xs text-muted-foreground">Animation</span>
          <div role="group" aria-label="Page animation" className="flex gap-1">
            {([
              { value: "full", label: "Full", icon: Play },
              { value: "reduced", label: "Reduced", icon: Waves },
              { value: "off", label: "Off", icon: CirclePause },
            ] as const).map((option) => (
              <Button key={option.value} size="sm" variant={mode === option.value ? "secondary" : "ghost"} aria-pressed={mode === option.value} onClick={() => { setChosen(true); setMode(option.value); }} className="h-8 gap-1.5 px-2 text-xs">
                <option.icon className="h-3.5 w-3.5" aria-hidden="true" />{option.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
      {children}
    </MotionContext.Provider>
  );
}