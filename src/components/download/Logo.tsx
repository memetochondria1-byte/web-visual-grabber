export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <path d="M5 4.5h9.5c1.4 0 2.5.6 3 1.6.5-1 1.6-1.6 3-1.6H27v17.5h-6.5c-1.4 0-2.5.5-3 1.4-.5-.9-1.6-1.4-3-1.4H8V29H5V4.5Z" fill="currentColor" />
      <path d="M17.5 7.5v14" stroke="var(--background)" strokeWidth="1.4" />
      <path d="m22.2 9.6.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6-1.6-.7 1.6-.7.7-1.6Z" fill="var(--background)" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5 text-foreground">
      <LogoMark />
      <span className="text-[17px] font-semibold tracking-tight">Protiva</span>
    </span>
  );
}
