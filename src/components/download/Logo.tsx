import protivaLogo from "@/assets/protiva-logo.png";

export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return <img src={protivaLogo} alt="" aria-hidden="true" className={`${className} brightness-0`} />;
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5 text-foreground">
      <LogoMark />
      <span className="text-[17px] font-semibold tracking-tight">Protiva</span>
    </span>
  );
}
