/**
 * ===== PROTIVA ANDROID RELEASE CONFIG =====
 * Single source of truth for the APK download.
 * Upload the APK to /public/downloads/protiva-ai.apk, or point apkUrl at an external host.
 */
export const APP_CONFIG = {
  apkUrl: "/downloads/protiva-ai.apk",
  apkFileName: "protiva-ai.apk",
  version: "1.0.0",
  fileSize: "—",
  releaseDate: "—",
  /** Minimum Android version from the APK's minSdk. Leave "—" until confirmed. */
  minAndroid: "—",
  /** Leave empty until official store listings are supplied. */
  googlePlayUrl: "",
  appStoreUrl: "",
  /** Mac-compatible installer URL; leave empty until a DMG/PKG or official Mac download is supplied. */
  macDownloadUrl: "",
} as const;

export const LINKS = {
  home: "https://protiva.me/",
  webApp: "https://protiva.me/app",
  features: "https://protiva.me/features",
  docs: "https://protiva.me/docs",
  privacy: "https://protiva.me/privacy",
  terms: "https://protiva.me/terms",
  contact: "https://protiva.me/contact",
} as const;
