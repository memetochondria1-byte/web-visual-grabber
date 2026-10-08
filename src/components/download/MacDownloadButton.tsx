import { Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_CONFIG } from "@/config/app";

export function MacDownloadButton({ className = "" }: { className?: string }) {
  const url: string = APP_CONFIG.macDownloadUrl;
  if (url) {
    return <Button asChild variant="outline" className={`h-12 ${className}`}><a href={url} download><Laptop aria-hidden="true" />Download for Mac</a></Button>;
  }
  return <Button variant="outline" disabled className={`h-12 ${className}`} aria-label="Download for Mac — Link not available"><Laptop aria-hidden="true" />Download for Mac</Button>;
}