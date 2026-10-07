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
- Everything the site shows is served from this repository: app pictures are imported from src/assets/ and the site icon is public/favicon.svg, so no page depends on an outside host.
- The gallery reuses the shared carousel controls in src/components/ui/carousel.tsx so browsing stays consistent.
