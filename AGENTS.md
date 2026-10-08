<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- APK download URL and release info live only in src/config/app.ts (APP_CONFIG) — one place to update per release.
- Everything the site shows is served from this repository: app pictures and the Protiva logo/QR are imported from src/assets/ and the site icon is public/favicon.png, so no page depends on an outside host.
- FeatureBento is the download page's only feature presentation and includes all fourteen repository app pictures once; this prevents duplicate feature sections.
- Display and body fonts are loaded from local font packages through the global stylesheet, so typography does not depend on external font hosts.
- Website language is provided by LanguageProvider with an explicit translation dictionary; only the language preference uses browser storage, keeping SSR deterministic and original app screenshots unchanged.
- Fonts without web redistribution permission may be selected from installed local fonts only; a bundled open-license Bengali fallback keeps reading available without unauthorized font hosting.

- The download page does not mount the legacy screenshot carousel or WebGL showcase, keeping the feature presentation direct and lightweight.
- Scroll fade-ins use `src/components/download/Reveal.tsx`; content stays visible if scripting is unavailable.
- Page choreography uses viewport-aware kinetic Reveal states and scoped CSS panel construction; offscreen decorative motion pauses to avoid wasted work while pictures stay grounded.
- The introduction lives in PremiumHero as an unframed editorial masthead with CSS-only masked text and staggered entry, keeping the first screen lightweight and reduced-motion safe.
- Official store destinations live in APP_CONFIG and store entry buttons stay unavailable until confirmed listing URLs are supplied, avoiding fabricated release availability.
- FeatureBento uses a desktop grid and native horizontal mobile scrolling; home and OCR share one tile so the fourteen pictures have exactly fourteen entries.
- PremiumHero uses one grounded repository app picture with CSS/SVG document-line reveal, stacked on mobile and placed right of the editorial content on desktop; reduced motion renders the complete illustration without animation.
- Decorative document graphics live in DocumentGraphic and use scoped semantic-token CSS motion across the introduction, bento and download/reading bands; app screenshots stay grounded, and reduced motion displays complete graphics without animation.
- Automatic device motion preferences live in MotionPreference context and the root data-motion attribute without visible controls; Reveal and decorative graphics respect the same preference.
- Mac installer destinations live in APP_CONFIG and MacDownloadButton stays unavailable without a confirmed compatible download, preventing mislabeled Windows files and broken links.
- Every overview tile mounts a feature-specific FeatureMotionGraphic scene with scoped tool, scan, connection or text motion; only decorative SVG elements animate, and reduced motion leaves complete illustrations visible.

- Decorative pointer responses use useGraphicInteraction on Reveal and the introduction; CSS coordinate variables move only SVG ink, preserving grounded screenshots and native touch scrolling.
- The native mobile feature strip includes accessible previous/next buttons and a position counter; navigation scrolls the existing fourteen tiles instead of duplicating screens.
