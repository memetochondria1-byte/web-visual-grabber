import { createContext, useContext, useEffect, useState } from "react";

type MotionMode = "full" | "reduced" | "off";
const MotionContext = createContext<MotionMode>("reduced");
export const useMotionPreference = () => useContext(MotionContext);

export function MotionPreference({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<MotionMode>("reduced");

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setMode(preference.matches ? "reduced" : "full");
    };
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    document.documentElement.dataset["motion"] = mode;
    return () => { delete document.documentElement.dataset["motion"]; };
  }, [mode]);

  return (
    <MotionContext.Provider value={mode}>
      {children}
    </MotionContext.Provider>
  );
}