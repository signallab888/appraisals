# Commercial Appraiser FL

A static commercial real estate appraisal website for **commercialappraiserfl.com** (Appraisers of America Inc.) built with Astro 4 + Tailwind CSS 3.

## Run & Operate

- `pnpm --filter @workspace/web run dev` — run the dev server (port 22333, workflow: `artifacts/web: web`)
- `pnpm --filter @workspace/web run build` — build to `artifacts/web/dist/public/`
- `pnpm --filter @workspace/web run typecheck` — typecheck with `astro check`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.7
- **Astro 4** static site generator
- **Tailwind CSS 3** (via `@astrojs/tailwind`)
- **Sharp** — image optimization to WebP (must be in `onlyBuiltDependencies` in pnpm-workspace.yaml)
- Inter font — self-hosted via `@fontsource-variable/inter`

## Where things live

```
artifacts/web/
  src/
    assets/          # Images downloaded from GitHub repo signallab888/appraisals
    components/      # All Astro components (HeaderSEO, HeroHome, FAQ, QuoteForm, etc.)
    data/            # JSON data files (business.json, regions.json, faqs-*.json, etc.)
    layouts/         # LayoutSEO.astro + LayoutLP.astro
    lib/             # geo.ts (region detection), schema.ts (JSON-LD builders)
    pages/
      index.astro                        # Home page
      lp/commercial-appraisal.astro      # Geo-aware landing page
    styles/global.css                    # Tailwind imports + Inter font
  public/
    logo.svg         # Static logo (SVG — not processed by astro:assets)
    favicon.svg      # Simple navy/white favicon
    robots.txt       # Noindex for /lp/, sitemap reference
  astro.config.mjs   # Astro config — PORT, outDir, allowedHosts
  tailwind.config.mjs # Full design system (brand navy, cta orange, ink, surface, semantic)
```

## Architecture decisions

- **Static output** — no server runtime. Geo detection in LP page defaults to "florida" at build time; `?city=` URL params are available client-side via CityPills component.
- **SVG logo via `<img>`** — not routed through `astro:assets` since Sharp can't optimize SVGs. JPG hero images go through Sharp → WebP (627kB → ~18kB).
- **Native `<details>`/`<summary>` FAQ** — zero JS accordion. CSS-only chevron rotation on `details[open]`.
- **Formspree placeholder** — form action is `https://formspree.io/f/xxxxxxx`. Replace with real endpoint before launch.
- **GTM placeholder** — `GTM-XXXXXXX` in both layouts. Replace before launch.
- **@astrojs/sitemap removed** — v3.7.2 has a bug with `filter` option. Add back when fixed or generate sitemap manually.

## Product

- **Home page** (`/`) — Full SEO page: sticky header, hero + quote form, trust bar, who we serve, 12-type property grid, process timeline (4 steps), pricing table, statewide coverage map, why us (6 badges), testimonials, FAQ (10 questions), final CTA.
- **Landing page** (`/lp/commercial-appraisal/`) — noindex, geo-aware (defaults to Florida, adapts via `?city=` param), compact layout optimized for PPC.

## User preferences

- Stack: Astro 4 + Tailwind CSS 3 ONLY. No React, Vue, or Svelte.
- Use `<Image>` from `astro:assets` for raster images. Use `<img>` for SVGs.
- Self-hosted Inter font via `@fontsource-variable/inter`.
- Native `<details>` for FAQ — no JS accordion libraries.
- Anti-AI copy: grep for "delve", "seamless", "leverage", "empower", "game-changer", etc. before every delivery.

## Gotchas

- `sharp` must be listed in `onlyBuiltDependencies` in `pnpm-workspace.yaml` AND as a direct dep in `package.json`, or Astro can't find it for image optimization.
- `Astro.request.headers` is unavailable in static output mode. Use `new Headers()` as fallback.
- Dev server needs `allowedHosts: 'all'` in `astro.config.mjs` for Replit's proxied preview.
- Logo SVG is 69kB — consider optimizing with SVGO before production.
- Formspree and GTM IDs are placeholders. Replace before deploying to production.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
- BRIEF.md source: https://github.com/signallab888/appraisals
