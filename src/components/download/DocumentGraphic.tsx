type GraphicKind = "annotate" | "scan" | "connect" | "export";

/** Decorative document illustration, never a fabricated app interface. */
export function DocumentGraphic({ kind = "annotate", className = "" }: { kind?: GraphicKind; className?: string }) {
  return (
    <div className={`document-graphic document-graphic-${kind} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 360 240" fill="none">
        <path className="graphic-back" d="m78 52 158-22 35 160-158 22Z" />
        <path className="graphic-middle" d="m91 39 159-10 10 170-159 10Z" />
        <path className="graphic-paper" d="M110 25h123l25 25v164H110V25Z" />
        <path className="graphic-fold" d="M233 25v25h25" />
        <path className="graphic-lines" d="M130 73h105M130 91h87M130 109h105M130 127h75M130 163h105M130 181h68" />
        {kind === "annotate" && <>
          <path className="graphic-highlight" d="M130 109h102" />
          <path className="graphic-stroke" pathLength={1} d="M127 133c24-5 45-3 68-3m-53 27c20 8 42 10 66 6" />
          <path className="graphic-pen" d="m250 111 10 7-49 70-15 7 1-16 53-68Z" />
        </>}
        {kind === "scan" && <>
          <path className="graphic-corners" d="M97 55V17h37M239 17h30v38M97 187v36h37M239 223h30v-36" />
          <path className="graphic-scan-beam" d="M94 62h182" />
          <path className="graphic-recognized" d="M130 73h105M130 91h87M130 109h105M130 127h75" />
        </>}
        {kind === "connect" && <>
          <path className="graphic-connector" pathLength={1} d="M258 104h38v58h-21M110 145H65V87h25" />
          <path className="graphic-node" d="M37 54h56v43H37zM275 144h58v42h-58z" />
          <path className="graphic-node-lines" d="M49 67h31M49 80h19M287 157h33M287 170h22" />
        </>}
        {kind === "export" && <>
          <path className="graphic-connector" pathLength={1} d="M182 170v57h107m-10-8 10 8-10 8" />
          <path className="graphic-node" d="M286 147h49v55h-49z" />
          <path className="graphic-node-lines" d="M297 160h27M297 173h27M297 186h18" />
        </>}
      </svg>
    </div>
  );
}