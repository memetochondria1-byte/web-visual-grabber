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
- The feature tour renders one chapter per entry with one screenshot left and its details right on wide screens, stacking on narrow screens without pairing pictures.
- Display and body fonts are loaded from local font packages through the global stylesheet, so typography does not depend on external font hosts.

- The download page renders a sequential screenshot feature tour rather than loading the unused WebGL showcase, keeping picture inspection direct and lightweight.
- Scroll fade-ins use `src/components/download/Reveal.tsx`; content stays visible if scripting is unavailable.
- Feature chapters use Reveal's narrative variant for staggered text and masked image entry; reduced-motion visitors receive immediately visible content.
