import { useLanguage } from "./Language";
import { Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_CONFIG } from "@/config/app";

export function MacDownloadButton({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  const url: string = APP_CONFIG.macDownloadUrl;
  if (url) {
    return <Button asChild variant="outline" className={`h-12 ${className}`}><a href={url} download><Laptop aria-hidden="true" />{t('Download for Mac')}</a></Button>;
  }
  return <Button variant="outline" disabled className={`h-12 ${className}`} aria-label={t('Download for Mac — Link not available')}><Laptop aria-hidden="true" />{t('Download for Mac')}</Button>;
}