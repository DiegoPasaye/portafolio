# Project Detail Pages Design

## Goal

Add indexable project-detail pages to `diegopasaye.dev` so visitors can open a portfolio project and understand its purpose, Diego's participation, technologies, and available live demo.

## Scope

The site will publish four static pages:

- `/licita`
- `/barberdeck`
- `/nakawe`
- `/pladiermo`

Each page will use only confirmed project information. No metrics, client outcomes, technical architecture claims, or product capabilities beyond the supplied descriptions will be added.

## Content Model

The existing `projects` array in `src/app/data.ts` becomes the single source of truth for project cards and detail pages. Each project gains:

- `slug`: stable public route segment.
- `summary`: concise card description.
- `overview`: one or more factual paragraphs for the detail page.
- `role`: Diego's confirmed participation.
- `tools`: confirmed technologies or capability labels.
- `demo`: public destination when supplied; omitted for Pladiermo.

The records will cover these confirmed facts:

| Project | Role | Public demo |
| --- | --- | --- |
| Licita | Development in a team | `https://licitacionfrontend.vercel.app` |
| BarberDeck | Product project | `https://www.barberdeck.com/` |
| Nakawé | Frontend participation in a team | `https://nakawe.vercel.app` |
| Pladiermo | Frontend participation | None supplied |

## Routes And Rendering

Use one dynamic App Router page at `src/app/projects/[slug]/page.tsx`. The route will use `generateStaticParams` to prerender all four pages and `notFound()` for an unknown slug.

Each detail page is server-rendered and contains:

1. A back link to `/#projects`.
2. Project image, name, summary, role, and technology tags.
3. A factual project overview.
4. A visible external-demo CTA only when the project has a supplied public URL.

`generateMetadata` will provide a unique title, description, canonical URL, Open Graph metadata, and Twitter metadata for every project. The project image is used as the social image for its page.

## Navigation

The homepage project card's image and primary CTA will link to the relevant internal project page. A separate secondary link will retain access to the external demo when one is available.

Global navigation links will resolve to homepage anchors while visitors are on a detail route, preventing broken in-page anchors.

## Error Handling

Unknown project slugs will use the standard Next.js not-found response. Pladiermo will show no external-demo button because no destination was supplied.

## Validation

- Run lint and production build.
- Confirm all four project routes are generated at build time.
- Inspect generated HTML for each page's canonical and Open Graph tags.
- Confirm project cards point internally and external demo links remain correct.
