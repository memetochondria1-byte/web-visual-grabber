import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpenText, GraduationCap, HardDrive, Languages, Linkedin, Lock, PenLine, Plus, Sparkles, Target } from "lucide-react";
import { APP_CONFIG, LINKS } from "@/config/app";
import protivaQr from "@/assets/protiva-qr.jpg";
import { Navbar } from "@/components/download/Navbar";
import { DownloadButton } from "@/components/download/DownloadButton";
import { ScreenshotGallery } from "@/components/download/ScreenshotGallery";
import { Logo } from "@/components/download/Logo";

const TITLE = "Download Protiva AI for Android | Protiva";
const DESC =
  "Download the official Protiva AI Android app. Read, annotate, study and understand your PDFs with AI-powered tools.";

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

const features = [
  { icon: Sparkles, title: "AI-powered reading", body: "Explain difficult passages, summarize content and ask questions about your documents." },
  { icon: PenLine, title: "Annotate freely", body: "Highlight, write notes, use bookmarks, shapes and other reading tools." },
  { icon: GraduationCap, title: "Study smarter", body: "Generate quizzes, flashcards, mnemonics and study materials from your documents." },
  { icon: Languages, title: "Bangla-ready", body: "Work with Bangla and English documents, including OCR and translation workflows." },
];

const steps = [
  { n: "01", title: "Download", body: "Tap Download APK and save the official Protiva APK." },
  { n: "02", title: "Install", body: "Open the downloaded APK and follow Android's installation instructions." },
  { n: "03", title: "Start reading", body: "Open Protiva and start working with your documents." },
];

const trust = [
  { icon: HardDrive, title: "Local-first", body: "Your reading workspace is designed around on-device storage." },
  { icon: Lock, title: "Private by design", body: "Your documents aren't treated like generic cloud content." },
  { icon: Target, title: "No unnecessary clutter", body: "A focused workspace for reading and thinking." },
];

const faqs: { q: string; a: React.ReactNode }[] = [
  { q: "Is this the official Protiva Android app?", a: "Yes. This page is the official Protiva download page and provides the official APK release." },
  { q: "Is the APK free to download?", a: "The APK download itself is available from this page. Access to specific Protiva features may depend on the current product plan." },
  {
    q: "What Android devices are supported?",
    a: APP_CONFIG.minAndroid === "—"
      ? "The minimum supported Android version will be listed here alongside each release."
      : `Protiva for Android requires Android ${APP_CONFIG.minAndroid} or later.`,
  },
  { q: "Can I use Protiva without an account?", a: "Protiva is free to start, and your documents are stored locally on your device. Some features, such as AI tools and live group study, may require signing in." },
  { q: "Where can I use Protiva?", a: <>On Android with this app, and in any modern browser at <a className="underline underline-offset-4 hover:text-foreground" href={LINKS.webApp}>protiva.me</a>.</> },
  { q: "Where can I get support?", a: <>Reach the team through the <a className="underline underline-offset-4 hover:text-foreground" href={LINKS.contact}>Protiva contact page</a>.</> },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">{children}</p>;
}

function DownloadPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-5 pt-14 pb-16 text-center sm:pt-24">
          <h1 className="animate-fade-up mx-auto mt-6 max-w-3xl text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] [animation-delay:80ms] sm:text-7xl">
            Protiva AI, <span className="text-accent">now on Android.</span>
          </h1>
          <p className="animate-fade-up mx-auto mt-6 max-w-xl text-lg text-foreground/80 [animation-delay:160ms] sm:text-xl">
            Your PDFs. Your notes. Your AI study workspace.
          </p>
          <p className="animate-fade-up mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-muted-foreground [animation-delay:200ms]">
            Read, annotate, study and understand your documents with Protiva AI. Download the official Android app and take your workspace with you.
          </p>
          <div className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 [animation-delay:260ms] sm:flex-row">
            <DownloadButton className="w-full sm:w-auto" />
            <a
              href={LINKS.webApp}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border bg-card px-6 text-[15px] font-medium transition-colors hover:bg-muted sm:w-auto"
            >
              Open Web App <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <p className="animate-fade-up mt-4 font-mono text-xs text-muted-foreground [animation-delay:300ms]">
            Android · APK · Official Protiva release
          </p>
          <p className="animate-fade-up mt-1.5 text-xs text-muted-foreground [animation-delay:320ms]">
            Official Protiva AI app · Direct download · No third-party mirror
          </p>

          <div className="animate-fade-up mt-16 [animation-delay:380ms]">
            <ScreenshotGallery />
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="scroll-mt-20 border-t bg-card/60">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
            <div className="max-w-2xl">
              <Eyebrow>Why install Protiva</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-[-0.025em] sm:text-[2.6rem] sm:leading-[1.1]">
                Everything you need to understand what you read.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Protiva brings reading, annotation and AI-powered study tools into one focused workspace.
              </p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <article key={f.title} className="bg-background p-6 transition-colors hover:bg-card">
                  <f.icon className="h-5 w-5 text-accent" strokeWidth={1.6} aria-hidden="true" />
                  <h3 className="mt-6 font-medium">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="download" className="scroll-mt-20 border-t">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
            <div className="grid items-center gap-10 rounded-2xl border bg-card p-8 shadow-soft sm:p-12 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.025em] sm:text-[2.6rem]">Ready to read smarter?</h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  Install Protiva AI on Android and turn your phone into a focused thinking and study workspace.
                </p>
                <DownloadButton label="Download Protiva for Android" size="lg" className="mt-8 w-full sm:w-auto" />
                <p className="mt-3 font-mono text-xs text-muted-foreground">APK · Official release</p>
              </div>
              <div className="flex flex-col gap-4">
                <dl className="divide-y rounded-xl border bg-background font-mono text-sm">
                  {[
                    ["Version", APP_CONFIG.version],
                    ["Updated", APP_CONFIG.releaseDate],
                    ["File size", APP_CONFIG.fileSize],
                    ["Platform", "Android"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between px-5 py-3.5">
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd className="font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="flex items-center gap-4 rounded-xl border bg-background p-4">
                  <img
                    src={protivaQr}
                    alt="QR code that opens the Protiva download page"
                    className="h-24 w-24 shrink-0 rounded-lg border"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-medium">Scan to install</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Point your phone's camera at the code to open this download page on Android.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INSTALL */}
        <section className="border-t bg-card/60">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
            <Eyebrow>Installation</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-[-0.025em] sm:text-[2.6rem]">How to install</h2>
            <ol className="mt-12 grid gap-10 sm:grid-cols-3">
              {steps.map((s) => (
                <li key={s.n} className="border-t pt-6">
                  <span className="font-mono text-sm text-accent">{s.n}</span>
                  <h3 className="mt-3 text-lg font-medium">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* TRUST */}
        <section className="border-t">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-28 lg:grid-cols-2">
            <div>
              <Eyebrow>Privacy</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-[-0.025em] sm:text-[2.6rem]">Built around your reading.</h2>
              <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
                Protiva is designed around privacy and focused reading. Your documents can stay on your device during normal local-first workflows, while AI features only send the information required for the specific AI request.
              </p>
            </div>
            <ul className="space-y-3">
              {trust.map((t) => (
                <li key={t.title} className="flex gap-4 rounded-xl border bg-card p-5">
                  <t.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.6} aria-hidden="true" />
                  <div>
                    <h3 className="font-medium">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t bg-card/60">
          <div className="mx-auto max-w-3xl px-5 py-20 sm:py-28">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-[-0.025em] sm:text-[2.6rem]">Questions, answered.</h2>
            <div className="mt-10 divide-y border-y">
              {faqs.map((f) => (
                <details key={f.q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium">
                    {f.q}
                    <Plus className="faq-icon h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300" aria-hidden="true" />
                  </summary>
                  <div className="faq-body">
                    <div className="overflow-hidden">
                      <p className="pb-5 text-[15px] leading-relaxed text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <Logo />
              <p className="mt-3 text-sm text-muted-foreground">Read deeper. Think clearer.</p>
              <a
                href="https://www.linkedin.com/company/protiva-ai"
                target="_blank"
                rel="noreferrer"
                aria-label="Protiva AI on LinkedIn"
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
                <div key={group.title}>
                  <h3 className="font-medium text-foreground">{group.title}</h3>
                  <ul className="mt-4 space-y-2.5 text-muted-foreground">
                    {group.links.map(([label, href]) => (
                      <li key={label}>
                        <a className="transition-colors hover:text-foreground" href={href}>{label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
            <p>© 2026 Protiva AI. All rights reserved.</p>
            <p>Made with care in Bangladesh.</p>
          </div>
          <p className="mt-6 text-center text-[11px] text-muted-foreground/70">
            <BookOpenText className="mr-1 inline h-3 w-3" aria-hidden="true" />
            Made by Abdullah Al Rafi Mahmud
          </p>
        </div>
      </footer>
    </div>
  );
}
