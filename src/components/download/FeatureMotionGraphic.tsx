/** Feature illustrations are decorative, not replacement app screens. */
export function FeatureMotionGraphic({ index }: { index: number }) {
  const motifs = [
    <><path className="tour-ink" pathLength={1} d="M67 53h92M67 72h62M64 88q40-12 84 0" /><path className="tour-accent-fill tour-arrive" d="m181 39 9 7-43 60-15 7 2-16z" /></>,
    <>{[45,100,155].map((x) => <g key={x} className="tour-arrive"><rect x={x} y="35" width="40" height="57" rx="3" /><path d={`M${x+8} 49h24m-24 12h20m-20 12h16`} /></g>)}<path className="tour-ink" pathLength={1} d="M46 106h151" /></>,
    <><circle className="tour-arrive" cx="102" cy="46" r="16" /><path className="tour-ink" pathLength={1} d="M73 94v-9c0-28 58-28 58 0v9M145 65h42m-11-10 11 10-11 10" /></>,
    <><path className="tour-arrive" d="M62 30h111v71H62z" /><path className="tour-ink" pathLength={1} d="m83 64 11 10 26-27M134 48h23m-23 15h23m-23 15h14" /><path className="tour-accent-fill tour-arrive" d="m178 31 4 12 12 4-12 4-4 12-4-12-12-4 12-4z" /></>,
    <><path className="tour-arrive" d="M42 39q43-16 77 0 34-16 77 0v62q-43-16-77 0-34-16-77 0zM119 39v62" /><path className="tour-ink" pathLength={1} d="M58 53h42m-42 14h38m39-14h42m-42 14h36" /><path className="tour-accent-fill tour-arrive" d="M150 37h12v44l-6-7-6 7z" /></>,
    <><path className="tour-ink" pathLength={1} d="M120 65 60 36m60 29 60-29m-60 29v43M60 36l120 0" />{[[60,36],[180,36],[120,108]].map(([x,y])=><g key={x} className="tour-arrive"><circle cx={x} cy={y} r="11" /><circle cx={x} cy={y} r="3" className="tour-accent-fill" /></g>)}<rect className="tour-arrive" x="99" y="48" width="42" height="30" rx="2" /></>,
    <><path className="tour-ink" pathLength={1} d="M60 45h59v36H77L60 95V45Zm88 26h45v31h-45zM119 63h29" /><path className="tour-accent-fill tour-arrive" d="m93 49 3 9 9 3-9 3-3 9-3-9-9-3 9-3z" /></>,
    <><path className="tour-arrive" d="M45 28h106v30H63L45 72zM91 76h106v30h-18l-16 13v-13H91z" /><path className="tour-ink" pathLength={1} d="M61 43h73M108 91h72M67 72v19h17" /></>,
    <><path className="tour-ink" pathLength={1} d="m80 67 70-34m-70 34 70 34" />{[[65,67],[168,26],[168,108]].map(([x,y])=><circle key={y} className="tour-arrive" cx={x} cy={y} r="14" />)}<path className="tour-ink" pathLength={1} d="M162 21h12m-12 10h12" /></>,
    <><path className="tour-arrive" d="M40 30h67v79H40zM139 30h67v79h-67z" /><path className="tour-ink" pathLength={1} d="M53 47h41m-41 14h31m-31 14h39M109 69h27m-7-7 7 7-7 7" /><text className="tour-glyph tour-arrive" x="155" y="83">অ</text></>,
    <><path className="tour-arrive" d="M47 26h65v88H47zM162 48h45v44h-45z" /><path className="tour-ink" pathLength={1} d="M60 44h39m-39 15h34m-34 15h39M112 68h49m-9-8 9 8-9 8M172 61h25m-25 13h19" /></>,
    <><path className="tour-ink" pathLength={1} d="M42 39h72m-72 15h66m-66 15h72m-72 15h58m-58 15h69M122 69h24m-7-7 7 7-7 7M162 49h43m-43 20h34m-34 20h43" /><path className="tour-arrive" d="M154 31h62v78h-62z" /></>,
    <><path className="tour-arrive" d="M50 32h65v76H50zM59 26h65v76M68 20h65v76M166 73h41v37h-52V64h21l8 9" /><path className="tour-ink" pathLength={1} d="M94 48h57v33m-7-8 7 8 7-8" /></>,
    <><path className="tour-arrive" d="M43 29h63v80H43zM144 29h63v80h-63z" /><circle className="tour-arrive" cx="76" cy="61" r="15" /><path className="tour-ink" pathLength={1} d="m87 72 12 12M154 48h43m-43 18h33m-33 18h40M108 70h33" /></>,
  ];
  const accents = [
    <path className="motion-tool" d="m148 83 6 5-17 24-9 4 1-10z" />,
    <path className="motion-scanner" d="M38 48h164" />,
    <path className="motion-confirm" d="m149 94 9 9 22-24" />,
    <path className="motion-rays" d="M178 19v-7m18 23h8m-40-14-5-5m33 6 5-5" />,
    <path className="motion-bookmark" d="M73 30h11v28l-5-5-6 5z" />,
    <>{[[60,36],[180,36],[120,108]].map(([x,y],i)=><circle className={`motion-ring motion-ring-${i}`} key={i} cx={x} cy={y} r="18" />)}</>,
    <path className="motion-spark" d="m171 31 3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />,
    <g className="motion-typing"><circle cx="120" cy="92" r="2" /><circle cx="134" cy="92" r="2" /><circle cx="148" cy="92" r="2" /></g>,
    <circle className="motion-packet" cx="84" cy="58" r="4" />,
    <path className="motion-language" d="M153 94h40m-40 7h27" />,
    <path className="motion-context" d="M112 68h49" />,
    <g className="motion-simplify"><path d="M162 49h43M162 69h34M162 89h43" /></g>,
    <path className="motion-export" d="M145 30v24m-7-7 7 7 7-7" />,
    <path className="motion-lens" d="M55 42h40v39H55z" />,
  ];
  return (
    <div className="tour-motion-graphic" data-motion-feature={index} aria-hidden="true">
      <svg viewBox="0 0 240 140" fill="none">
        <g className="motion-drafting"><path d="M24 22h192M24 120h192M32 15v112M208 15v112" /><path d="M24 22h16m-8-8v16M200 120h16m-8-8v16" /></g>
        <path className="motion-plinth" d="m30 119 25 12h134l25-12-25-10H55z" />
        <g className="tour-scene">{motifs[index]}</g>
        <g className="motion-detail">{accents[index]}</g>
        <path className="tour-baseline" d="M24 134h192" />
      </svg>
    </div>
  );
}