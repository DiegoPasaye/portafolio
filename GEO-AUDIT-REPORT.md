# GEO + SEO Audit — diegopasaye.dev

**Subject:** Diego Pasaye — personal portfolio (single-page Next.js 15, SSG on Vercel)
**Date:** 2026-06-20
**Method:** `geo-seo-claude` skill — 5 parallel subagents (AI visibility, platform, technical, content/E-E-A-T, schema) + live signal capture.
**Owner goal:** AI assistants (ChatGPT, Claude, Perplexity, Gemini, Google AIO) recognize & cite **"Diego Pasaye"** as an entity; searching "Diego Pasaye" surfaces this site.

---

## Composite GEO Score

| Category | Weight | Before | After fixes (est.) |
|---|---|---|---|
| AI Citability & Visibility | 25% | 27 | ~62 |
| Brand Authority Signals | 20% | 15 | ~22 |
| Content Quality & E-E-A-T | 20% | 34 | ~58 |
| Technical Foundations | 15% | 58 | ~85 |
| Structured Data | 10% | 8 | ~92 |
| Platform Optimization | 10% | 27 | ~58 |
| **COMPOSITE** | | **≈ 29 / 100** | **≈ 59 / 100** |

> On-page work takes you from **29 → ~59**. The ceiling above ~60 is **Brand Authority**, which is *off-site* and needs time (see §"Only you can do this").

---

## Key findings

### 🔴 Critical (fixed in this PR)
1. **Zero structured data.** No JSON-LD → no machine-readable entity. AI engines had no way to know who "Diego Pasaye" is or link his profiles. → Added `Person` + `WebSite` + `ProfilePage` + `FAQPage` `@graph`.
2. **No robots.txt / sitemap.xml / llms.txt** (all 404). Crawlers had zero guidance. → `public/robots.txt` (explicit allow for GPTBot/ClaudeBot/PerplexityBot/Google-Extended + Content-Signal), `app/sitemap.ts`, `public/llms.txt`.
3. **No canonical, no OG image.** Duplicate-content risk; no social/AI preview. → `metadataBase` + canonical; dynamic `opengraph-image.tsx`.

### 🟠 High
4. **NAP inconsistency** — `data.ts` said "Remote / Available Worldwide" while the hero said "Morelia, México". Fragmented entity resolution. → Unified to "Morelia, México · Remote-friendly".
5. **Thin / un-extractable content (E-E-A-T 34).** No "Diego Pasaye is a…" definitional sentence, no FAQ, no dates, projects aren't case studies. → Added visible **FAQ** ("Who is Diego Pasaye?") mirrored by FAQPage schema; entity-rich meta description.
6. **Entity split across two domains** — `diegopasaye.com` AND `diegopasaye.dev` both exist; LinkedIn shows two "Diego Pasaye" profiles. AIs can't tell which is you. → *Needs your decision (see below).*

### 🟡 Medium
7. No security headers → added X-Content-Type-Options / Referrer-Policy / X-Frame-Options.
8. No web manifest → `app/manifest.ts`.
9. **LCP risk:** the hero `<h1>` is the LCP element and is animated in (GSAP `yPercent:120`, ~1.1s), gating paint. Kept (signature animation; `prefers-reduced-motion` honored; text is in SSR HTML). Prod LCP ≈ 1.5–2s — acceptable; revisit if Core Web Vitals flag it.

---

## What was implemented (in this repo)

| File | Change |
|---|---|
| `src/app/components/JsonLd.tsx` | Person + WebSite + ProfilePage + FAQPage `@graph` (sameAs GitHub/LinkedIn, alumniOf UT Morelia, knowsAbout, speakable) |
| `src/app/components/FAQ.tsx` + `page.tsx` | Visible FAQ section (entity Q&A) |
| `public/robots.txt` | AI-crawler allow-list + Content-Signal + sitemap ref |
| `public/llms.txt` | llms.txt standard (bio, projects, key facts) |
| `src/app/sitemap.ts` | sitemap.xml |
| `src/app/manifest.ts` | web manifest |
| `src/app/opengraph-image.tsx` | dynamic OG/Twitter image |
| `src/app/layout.tsx` | metadataBase, canonical, keywords, authors, OG/Twitter, entity-rich description |
| `src/app/data.ts` | NAP location unified |
| `next.config.ts` | security headers |

---

## Only you can do this (off-site — the real ceiling)

Brand Authority (20% weight) and entity recognition are won *off* the site. Highest impact, in order:

1. **Consolidate the domain split.** Pick ONE canonical domain (recommend `.dev`). 301-redirect `diegopasaye.com` → `.dev`. Use the identical `sameAs` set everywhere so AIs merge both into one entity.
2. **Fix GitHub** (`github.com/DiegoPasaye`): full name "Diego Pasaye", English bio, link to diegopasaye.dev, a profile README, pin the Nakawé/Pladiermo repos.
3. **Complete LinkedIn**: headline = "Junior Frontend Engineer", location Morelia, education UT Morelia — matching the site exactly.
4. **Seed corroborating sources** (this is what makes AI *confident*): 1–2 dev.to / Medium / Hashnode posts authored as "Diego Pasaye" linking back; consider a **Wikidata** item (Person) listing the same sameAs.
5. **Add a real headshot** to `/public` and re-enable `image` in the Person schema (helps Google knowledge panel).
6. **Replace placeholder demo links** (`#`) with real project URLs/repos.

---

## How to re-measure

After deploy: `/geo audit https://diegopasaye.dev` again, or `/geo compare diegopasaye.dev` for a delta vs this baseline. Validate schema at `search.google.com/test/rich-results` and `validator.schema.org`.
