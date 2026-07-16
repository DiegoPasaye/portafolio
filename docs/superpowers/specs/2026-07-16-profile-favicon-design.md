# Profile Favicon Design

## Goal

Replace the current Vercel favicon with a neutral profile avatar that resembles the placeholder shown when a user has no profile photo.

## Design

- Use a square SVG favicon recognized by the Next.js App Router.
- Draw a dark gray circular background with a simple light gray/white head-and-shoulders silhouette.
- Avoid text, gradients, shadows, and fine details so the icon remains readable at 16×16 pixels.
- Keep the artwork neutral and consistent with the portfolio's dark visual theme.

## Implementation

- Add the SVG through Next.js file-based metadata in `src/app`.
- Remove the existing `src/app/favicon.ico` so browsers receive one unambiguous favicon source.
- Do not change page metadata, components, dependencies, or unrelated local work.

## Verification

- Confirm the old favicon is absent and the new SVG favicon exists.
- Run the production build and confirm Next.js accepts and publishes the icon.

