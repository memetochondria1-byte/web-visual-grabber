import { Sparkles } from "lucide-react";
import { LogoMark } from "./Logo";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] text-left sm:w-[300px]">
      <div className="animate-float">
        <div className="rounded-[2.6rem] bg-device p-2.5 shadow-device">
          <div className="relative overflow-hidden rounded-[2.1rem] bg-background">
            {/* status bar */}
            <div className="flex items-center justify-between px-6 pt-3 pb-1 font-mono text-[10px] text-muted-foreground">
              <span>9:41</span>
              <span className="h-3.5 w-3.5 rounded-full bg-device" aria-hidden="true" />
              <span>5G</span>
            </div>
            {/* app bar */}
            <div className="flex items-center gap-2 border-b px-4 py-2.5">
              <LogoMark className="h-4 w-4" />
              <span className="truncate text-[12px] font-medium">Thermodynamics — Ch. 4.pdf</span>
              <span className="ml-auto shrink-0 whitespace-nowrap font-mono text-[10px] text-muted-foreground">p. 42</span>
            </div>
            {/* page */}
            <div className="space-y-2 px-5 pt-4 pb-3">
              <div className="h-2.5 w-3/4 rounded-sm bg-foreground/80" />
              <div className="h-1.5 w-full rounded-sm bg-foreground/15" />
              <div className="h-1.5 w-11/12 rounded-sm bg-foreground/15" />
              <div className="h-1.5 w-full rounded-sm bg-hl-yellow" />
              <div className="h-1.5 w-4/5 rounded-sm bg-hl-yellow" />
              <div className="h-1.5 w-full rounded-sm bg-foreground/15" />
              <div className="h-1.5 w-10/12 rounded-sm bg-foreground/15" />
              <div className="h-1.5 w-2/3 rounded-sm bg-hl-green" />
              <div className="h-1.5 w-full rounded-sm bg-foreground/15" />
              <div className="h-1.5 w-9/12 rounded-sm bg-foreground/15" />
              <div className="h-1.5 w-1/2 rounded-sm bg-hl-pink" />
              <div className="h-1.5 w-full rounded-sm bg-foreground/15" />
            </div>
            {/* AI panel */}
            <div className="mx-3 mb-3 rounded-xl border bg-card p-3.5 shadow-soft">
              <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium">
                <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                Explain selection
              </div>
              <p className="mb-2 rounded-md bg-muted px-2 py-1.5 text-[10px] italic text-muted-foreground">
                “…the partition function Z encodes…”
              </p>
              <p className="text-[11px] leading-relaxed text-foreground/80">
                Z sums over every possible state of the system. Once you know it, quantities like energy
                and entropy follow directly.
              </p>
              <p className="mt-2 font-mono text-[9px] text-muted-foreground">Cited · page 42</p>
            </div>
            <div className="mx-auto mb-2 h-1 w-24 rounded-full bg-foreground/25" />
          </div>
        </div>
      </div>
      <div className="absolute -left-10 top-24 hidden rounded-full border bg-card px-3.5 py-1.5 text-xs font-medium shadow-soft sm:block">
        Read. Understand. Remember.
      </div>
    </div>
  );
}
