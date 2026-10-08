import { useLanguage } from "@/components/download/Language";
import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Plus } from "lucide-react";
import { APP_CONFIG, LINKS } from "@/config/app";
import protivaQr from "@/assets/protiva-qr.jpg";
import { Navbar } from "@/components/download/Navbar";
import { DownloadButton } from "@/components/download/DownloadButton";
import { Reveal } from "@/components/download/Reveal";
import { Logo } from "@/components/download/Logo";
import { PremiumHero } from "@/components/download/PremiumHero";
import { FeatureBento } from "@/components/download/FeatureBento";
import { DocumentGraphic } from "@/components/download/DocumentGraphic";
import { MotionPreference } from "@/components/download/MotionPreference";
import { MacDownloadButton } from "@/components/download/MacDownloadButton";

const TITLE = "Download Protiva AI for Android | Protiva";
const DESC =
  "Protiva AI for Android: read and annotate PDFs, ask Nova about your documents, and get page explanations in Bangla.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://protiva.me/download" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://protiva.me/download" }],
  }),
  component: DownloadPage,
});

const steps = [
  { n: "01", title: "Download", body: "Tap Download APK to save the Android installation file." },
  { n: "02", title: "Install", body: "Open the downloaded APK and follow Android's installation instructions." },
  { n: "03", title: "Start reading", body: "Open Protiva and choose a PDF from your library." },
];


function Eyebrow({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage();
  return <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">{typeof children === "string" ? t(children) : children}</p>;
}

function DownloadPage() {
  const { t, language } = useLanguage();
const faqs: { q: string; a: React.ReactNode }[] = [
  { q: "Is this the official Protiva Android app?", a: "Yes. This is the Protiva Android download page." },
  { q: "Where can I find Protiva Pro?", a: "Open the Protiva Pro screen in the app to check the plan details." },
  {
    q: "What Android devices are supported?",
    a: APP_CONFIG.minAndroid === "—"
      ? "The minimum supported Android version will be listed here alongside each release."
      : language === "bn" ? `Protiva চালাতে অ্যান্ড্রয়েড ${APP_CONFIG.minAndroid} বা পরবর্তী সংস্করণ লাগবে।` : `Protiva for Android requires Android ${APP_CONFIG.minAndroid} or later.`,
  },
  { q: "How do I ask Nova about a PDF?", a: "Open a Nova conversation and include your PDF using document context. Then ask about the page or passage you are reading." },
  { q: "Where can I use Protiva?", a: <>{t("On Android with this app, and in any modern browser at")} <a className="underline underline-offset-4 hover:text-foreground" href={LINKS.webApp}>{t('protiva.me')}</a>.</> },
  { q: "Where can I get support?", a: <>{t("Reach the team through the")} <a className="underline underline-offset-4 hover:text-foreground" href={LINKS.contact}>{t("Protiva contact page")}</a>.</> },
];


  return (
    <div className="min-h-screen motion-page">
      <Navbar />
      <MotionPreference>
      <main>
        <PremiumHero />

        <FeatureBento />

        <section aria-label={t('Download Protiva')} className="download-motion-band bg-primary text-primary-foreground border-y">
          <DocumentGraphic kind="connect" className="band-document-graphic" />
          <Reveal className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-semibold">{t('Protiva AI for Android')}</h2>
              <p className="mt-2 text-sm text-primary-foreground/75">{t('Read PDFs, add notes and ask Nova about your documents.')}</p>
            </div>
            <DownloadButton className="w-full sm:w-auto" />
          </Reveal>
        </section>

        {/* CTA */}
        <section id="download" className="scroll-mt-20 border-t">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
            <Reveal className="download-editorial grid items-center gap-10 py-8 sm:py-12 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.025em] sm:text-[2.6rem]">{t('Download Protiva for Android')}</h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  {t("Install the Android app to read PDFs, annotate pages and use Nova.")}
                </p>
                <DownloadButton label="Download Protiva for Android" size="lg" className="mt-8 w-full sm:w-auto" />
                <MacDownloadButton className="mt-3 w-full sm:ml-3 sm:w-auto" />
                <p className="mt-2 text-xs text-muted-foreground">{t('Mac download link is not available yet.')}</p>
                <p className="mt-3 font-mono text-xs text-muted-foreground">{t('Android installation file · APK')}</p>
                <DocumentGraphic kind="export" className="download-document-graphic" />
              </div>
              <div className="flex flex-col gap-4">
                <dl className="divide-y rounded-xl border bg-background font-mono text-sm">
                  {[
                    ["Updated", APP_CONFIG.releaseDate],
                    ["File size", APP_CONFIG.fileSize],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between px-5 py-3.5">
                      <dt className="text-muted-foreground">{t(k ?? "")}</dt>
                      <dd className="font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="flex items-center gap-4 rounded-xl border bg-background p-4">
                  <img
                    src={protivaQr}
                    alt={t('QR code that opens the Protiva download page')}
                    className="h-24 w-24 shrink-0 rounded-lg border"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-medium">{t('Scan to install')}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {t("Point your phone's camera at the code to open this download page on Android.")}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* INSTALL */}
        <section className="installation-motion border-t bg-card/60">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
            <Reveal>
              <Eyebrow>{t('Installation')}</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-[-0.025em] sm:text-[2.6rem]">{t('How to install')}</h2>
            </Reveal>
            <ol className="mt-12 grid gap-10 sm:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.n} delay={i * 120} className="installation-step border-t pt-6">
                  <DocumentGraphic kind={i === 0 ? "export" : i === 1 ? "scan" : "annotate"} className="installation-step-graphic" />
                  <span className="font-mono text-sm text-accent">{language === "bn" ? s.n.replace(/\d/g, digit => "০১২৩৪৫৬৭৮৯"[Number(digit)] ?? digit) : s.n}</span>
                  <h3 className="mt-3 text-lg font-medium">{t(s.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(s.body)}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t bg-card/60">
          <div className="mx-auto max-w-3xl px-5 py-20 sm:py-28">
            <Reveal>
              <Eyebrow>{t('FAQ')}</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-[-0.025em] sm:text-[2.6rem]">{t('Common questions')}</h2>
            </Reveal>
            <Reveal className="mt-10 divide-y border-y">
              {faqs.map((f) => (
                <details key={t(f.q)} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium">
                    {t(f.q)}
                    <Plus className="faq-icon h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300" aria-hidden="true" />
                  </summary>
                  <div className="faq-body">
                    <div className="overflow-hidden">
                      <p className="pb-5 text-[15px] leading-relaxed text-muted-foreground">{typeof f.a === "string" ? t(f.a) : f.a}</p>
                    </div>
                  </div>
                </details>
              ))}
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <Reveal className="mx-auto max-w-6xl px-5 py-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <Logo />
              <p className="mt-3 text-sm text-muted-foreground">{t('PDF reading, annotations and Nova.')}</p>
              <a
                href="https://www.linkedin.com/company/protiva-ai"
                target="_blank"
                rel="noreferrer"
                aria-label={t('Protiva AI on LinkedIn')}
                className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
            <div className="grid gap-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Product",
                  links: [
                    ["All features", "https://protiva.me/features"],
                    ["Library", "https://protiva.me/feature/library"],
                    ["Highlights & notes", "https://protiva.me/feature/highlights-notes"],
                    ["Study mode", "https://protiva.me/feature/study-mode"],
                    ["Export & share", "https://protiva.me/feature/export-share"],
                    ["Pricing", "https://protiva.me/pricing"],
                  ],
                },
                {
                  title: "Resources",
                  links: [
                    ["Documentation", "https://protiva.me/docs"],
                    ["Blog", "https://protiva.me/blog"],
                    ["Founder", "https://protiva.me/founder"],
                    ["Team", "https://protiva.me/team"],
                    ["Privacy", "https://protiva.me/privacy"],
                    ["Terms", "https://protiva.me/terms"],
                    ["Contact", "https://protiva.me/contact"],
                  ],
                },
                {
                  title: "Solutions",
                  links: [
                    ["Study tools for PDFs", "https://protiva.me/solutions/study-tools"],
                    ["PDF reading & annotation", "https://protiva.me/solutions/reading-tools"],
                    ["Nova — AI tutor for PDFs", "https://protiva.me/solutions/ai-tutor"],
                    ["What is Protiva?", "https://protiva.me/blog/what-is-protiva"],
                    ["Why students struggle with PDFs", "https://protiva.me/blog/why-students-struggle"],
                    ["Protiva vs. other readers", "https://protiva.me/blog/protiva-vs-other-readers"],
                  ],
                },
                {
                  title: "Use cases",
                  links: [
                    ["Students", "https://protiva.me/use-cases/students"],
                    ["Researchers", "https://protiva.me/use-cases/researchers"],
                    ["Language learners", "https://protiva.me/use-cases/language-learners"],
                    ["Exam prep", "https://protiva.me/use-cases/exam-prep"],
                    ["Offline reading", "https://protiva.me/use-cases/offline-reading"],
                  ],
                },
              ].map((group) => (
                <div key={t(group.title)}>
                  <h3 className="font-medium text-foreground">{t(group.title)}</h3>
                  <ul className="mt-4 space-y-2.5 text-muted-foreground">
                    {group.links.map(([label, href]) => (
                      <li key={label}>
                        <a className="transition-colors hover:text-foreground" href={href}>{t(label ?? "")}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
            <p>{t('© 2026 Protiva AI. All rights reserved.')}</p>
            <p>{t('Bangladesh')}</p>
          </div>
        </Reveal>
      </footer>
      </MotionPreference>
    </div>
  );
}
