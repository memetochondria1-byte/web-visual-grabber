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
- The screenshot feature tour keeps each image and its details together in one ordered collection in ScreenshotGallery.tsx, so scroll navigation and copy cannot drift apart.
- The feature tour uses Embla for a single horizontal mouse-draggable and touch-swipeable stage, with one screenshot left and its details right on wide screens, stacking on narrow screens; image and copy travel in the same slide.
- Display and body fonts are loaded from local font packages through the global stylesheet, so typography does not depend on external font hosts.

- The download page renders a manually navigated screenshot carousel rather than loading the unused WebGL showcase, keeping picture inspection direct and lightweight.
- Scroll fade-ins use `src/components/download/Reveal.tsx`; content stays visible if scripting is unavailable.
- Feature slides use Embla's horizontal transitions and scoped kinetic-stage CSS for text entry; reduced-motion visitors receive instant navigation without changing the shared bento animation.
- The introduction lives in PremiumHero as an unframed editorial masthead with CSS-only masked text and staggered entry, keeping the first screen lightweight and reduced-motion safe.
- Official store destinations live in APP_CONFIG and store entry buttons stay unavailable until confirmed listing URLs are supplied, avoiding fabricated release availability.
- FeatureBento presents repository app-image excerpts in a desktop grid and a native horizontal mobile overview, separate from the detailed Embla tour, so overview navigation never alters detailed feature navigation.
- PremiumHero uses one grounded repository app picture with CSS/SVG document-line reveal, stacked on mobile and placed right of the editorial content on desktop; reduced motion renders the complete illustration without animation.
- Decorative document graphics live in DocumentGraphic and use scoped semantic-token CSS motion across the introduction, bento and download/reading bands; app screenshots stay grounded, and reduced motion displays complete graphics without animation.
- Automatic device motion preferences live in MotionPreference context and the root data-motion attribute without visible controls; Reveal and Embla share the preference to preserve accessible feature navigation.
- Mac installer destinations live in APP_CONFIG and MacDownloadButton stays unavailable without a confirmed compatible download, preventing mislabeled Windows files and broken links.
- FeatureMotionGraphic mounts one feature-specific decorative SVG scene for the active tour slide; scoped path/scene animations restart on manual navigation without animating the original screenshot.
