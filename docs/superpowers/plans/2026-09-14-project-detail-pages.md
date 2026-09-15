# Project Detail Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish four static, search-friendly project detail pages and link the homepage portfolio cards to them.

**Architecture:** Extend the existing project data into a typed, single content source with stable slugs and long-form factual content. A dynamic App Router route will statically generate each detail page, metadata, and not-found response. Homepage cards and global navigation will use internal links that keep the existing external demos as secondary destinations.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS, Next Image.

**Spec:** `docs/superpowers/specs/2026-09-14-project-detail-pages-design.md`

## Global Constraints

- Publish exactly `/licita`, `/barberdeck`, `/nakawe`, and `/pladiermo`.
- Use only the supplied project information; do not add metrics or unverified technical claims.
- Add no dependencies.
- Preserve existing homepage design, animation behavior, and external demos.
- Do not create commits unless the user explicitly requests one.

---

## File Structure

- Modify `src/app/data.ts`: define `Project` and project detail content, plus lookup helpers.
- Create `src/app/[slug]/page.tsx`: statically generated detail route, metadata, and not-found handling.
- Modify `src/app/components/ProjectCard.tsx`: link cards to internal details and retain demo CTA.
- Modify `src/app/components/TopNav.tsx`: make section navigation return to homepage from detail routes.
- Modify `src/app/components/Projects.tsx`: pass the project position when rendering cards.

### Task 1: Define Project Detail Content

**Files:**
- Modify: `src/app/data.ts`

**Interfaces:**
- Produces: `Project` with `slug`, `name`, `image`, `summary`, `overview`, `role`, `tools`, and optional `demo`.
- Produces: `getProjectBySlug(slug: string): Project | undefined`.
- Produces: `projectSlugs: string[]` for static route generation.

- [ ] **Step 1: Replace the untyped project array with the typed content model**

```ts
export type Project = {
  slug: 'licita' | 'barberdeck' | 'nakawe' | 'pladiermo'
  name: string
  image: string
  summary: string
  overview: string[]
  role: string
  tools: string[]
  demo?: string
}
```

- [ ] **Step 2: Add factual overview and role fields for all four records**

Use the provided descriptions for Licita, BarberDeck, Nakawé, and Pladiermo. Give Nakawé the supplied role `Participación en desarrollo frontend, dentro de un equipo de dos personas.` and omit a `demo` field for Pladiermo.

- [ ] **Step 3: Export lookup primitives directly below the project records**

```ts
export const projectSlugs = projects.map((project) => project.slug)

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
```

- [ ] **Step 4: Run the production build to validate TypeScript inference**

Run: `npm run build`

Expected: build completes and all existing routes remain static.

### Task 2: Add Static Project Detail Routes

**Files:**
- Create: `src/app/[slug]/page.tsx`

**Interfaces:**
- Consumes: `getProjectBySlug` and `projectSlugs` from `src/app/data.ts`.
- Produces: static pages at every `Project['slug']` route.
- Produces: `generateMetadata` with canonical, Open Graph, and Twitter fields for a project.

- [ ] **Step 1: Implement static parameters and unknown-slug handling**

```ts
export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()
  // render the resolved project
}
```

- [ ] **Step 2: Add project-specific metadata**

```ts
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  const url = `/${project.slug}`
  return {
    title: `${project.name} | Diego Pasaye`,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: { title: `${project.name} | Diego Pasaye`, description: project.summary, url, images: [project.image] },
    twitter: { card: 'summary_large_image', title: `${project.name} | Diego Pasaye`, description: project.summary, images: [project.image] },
  }
}
```

- [ ] **Step 3: Render the shared page layout without client-side dependencies**

Render the back link to `/#projects`, image, heading, summary, `role`, overview paragraphs, technology tags, and the external CTA only when `project.demo` is present. Use `next/image` with the existing local image fields and preserve the site’s dark palette, `max-w-[1400px]`, and rounded border treatment.

- [ ] **Step 4: Run the production build and verify every route**

Run: `npm run build`

Expected: build output lists `/projects/licita`, `/projects/barberdeck`, `/projects/nakawe`, and `/projects/pladiermo` as static routes.

### Task 3: Link Portfolio Cards And Navigation

**Files:**
- Modify: `src/app/components/ProjectCard.tsx`
- Modify: `src/app/components/Projects.tsx`
- Modify: `src/app/components/TopNav.tsx`

**Interfaces:**
- Consumes: `Project.slug` and optional `Project.demo` from `src/app/data.ts`.
- Produces: internal detail-page links on all homepage cards and working homepage section links on detail routes.

- [ ] **Step 1: Change the project image and primary CTA to internal Next links**

```tsx
<Link href={`/${project.slug}`} aria-label={`${project.name} — ver proyecto`}>
  {/* existing image treatment */}
</Link>

<Link href={`/${project.slug}`}>Ver proyecto <span>→</span></Link>
```

- [ ] **Step 2: Keep a separate external CTA only for supplied demos**

```tsx
{project.demo ? (
  <a href={project.demo} target="_blank" rel="noreferrer">
    Ver sitio <span>↗</span>
  </a>
) : null}
```

- [ ] **Step 3: Update homepage section links to work from every route**

Use `href={`/#${link.id}`}` in `TopNav` so a visitor on a detail page reaches the homepage section. Preserve smooth scrolling on the homepage by applying the existing handler only when the current pathname is `/`.

- [ ] **Step 4: Run lint, build, and inspect generated HTML**

Run: `npm run lint && npm run build`

Run: `rg -o 'rel="canonical" href="[^"]+"|property="og:title" content="[^"]+"' .next/server/app/{licita,barberdeck,nakawe,pladiermo}.html`

Expected: lint reports no errors; build succeeds; each generated project page contains its own canonical URL and Open Graph title.
