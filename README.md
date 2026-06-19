# AlignaERP Website

Marketing landing page for **AlignaERP — Integrated Business System for Operational
Excellence**, by PT Triastanto Teknologi Indonesia.

Built with **Vite + React 19 + TypeScript + Tailwind CSS v4**. It's a single static
page (no backend, no router), so it can be hosted on any static host for free.

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script            | Purpose                                  |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the dev server (HMR)               |
| `npm run build`   | Type-check (`tsc -b`) + production build → `dist/` |
| `npm run preview` | Serve the production build locally       |
| `npm run lint`    | Run ESLint                               |

Node 20+ is recommended (see [.nvmrc](.nvmrc)).

## SEO

SEO metadata is centralized in [src/config/site.ts](src/config/site.ts). **To change the
domain, edit `SITE_URL` there** and update the hard-coded URLs in
[index.html](index.html), [public/robots.txt](public/robots.txt) and
[public/sitemap.xml](public/sitemap.xml).

What's included: Open Graph + Twitter Card tags and canonical URL in `index.html`,
JSON-LD structured data ([src/components/StructuredData.tsx](src/components/StructuredData.tsx)),
`robots.txt`, `sitemap.xml`, `site.webmanifest`, a 1200×630 `og-image.png` social card,
and `apple-touch-icon.png` (all in [public/](public/)).

## Deploy

The build output (`dist/`) is fully static. Build command is `npm run build`, output
directory is `dist`.

### Option A — Cloudflare Pages (recommended, free)

Free, fast global CDN, free custom domain, unlimited bandwidth. No config file needed —
`public/_headers` (cache + security headers) and `public/_redirects` (SPA fallback) are
picked up automatically.

1. Push to GitHub (already set up).
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build command: `npm run build` · Output directory: `dist`.
4. Add custom domain `alignaerp.com` under **Custom domains**.

### Option B — Netlify (free)

[netlify.toml](netlify.toml) is already configured (build command, publish dir, Node
version). Connect the repo in the Netlify dashboard, or run `netlify deploy --prod`.
The same `_headers` / `_redirects` files apply.

### Option C — Self-hosted server (Docker + Nginx)

For deploying to your own VPS/server. Multi-stage [Dockerfile](Dockerfile) builds the
site and serves it with Nginx ([nginx.conf](nginx.conf) — gzip, cache headers, SPA
fallback, security headers).

```bash
docker build -t alignaerp-website .
docker run -d -p 80:80 --name alignaerp alignaerp-website
```

Put a TLS-terminating reverse proxy (or Cloudflare) in front for HTTPS.

## Brand assets

In-page logos live in [src/assets/](src/assets/). Favicon, social image, and app icon
in [public/](public/) are derived from the official Aligna visual-identity assets
(blue-gradient mark).
