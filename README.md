# Protiva AI — Android download site

The public download page for Protiva AI on Android: feature overview, install
steps, FAQ, and the APK download.

## Development

You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`, `npm run test`.

## Where things live

- `src/routes/index.tsx` — the page itself.
- `src/components/download/` — nav, download button, app pictures, logo.
- `src/config/app.ts` — APK link, version, file size, release date, and the
  external links. Update this file for every release; nothing else hardcodes them.
- `public/downloads/` — drop the APK here as `protiva-ai.apk`.
- `src/assets/` — the app screenshots shown in the gallery.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
