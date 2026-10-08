import { lazy, Suspense, useEffect, useState } from "react";

const Scene = lazy(() => import("./Hero3DScene"));

function Placeholder() {
  return (
    <div className="relative h-[420px] w-full sm:h-[580px]" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[150px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-[2rem] bg-muted sm:h-[440px] sm:w-[220px]" />
    </div>
  );
}

/** Client-only 3D hero showcase (WebGL never renders on the server). */
export function Hero3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--accent-soft), transparent)" }}
        aria-hidden="true"
      />
      {mounted ? (
        <Suspense fallback={<Placeholder />}>
          <Scene />
        </Suspense>
      ) : (
        <Placeholder />
      )}
    </div>
  );
}
