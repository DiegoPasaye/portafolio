# Profile Favicon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Vercel favicon with a neutral gray-and-white profile placeholder.

**Architecture:** Use Next.js App Router file-based metadata with one static SVG at `src/app/icon.svg`. Remove the competing legacy `favicon.ico` so browsers receive one unambiguous favicon declaration.

**Tech Stack:** Next.js 15 App Router, static SVG, npm build verification

## Global Constraints

- The icon uses a dark gray circular background and a simple light gray/white head-and-shoulders silhouette.
- The artwork contains no text, gradients, shadows, or fine details.
- Page metadata, components, dependencies, and unrelated local changes remain untouched.

---

### Task 1: Replace the favicon asset

**Files:**
- Create: `src/app/icon.svg`
- Delete: `src/app/favicon.ico`
- Test: file-based assertions and the existing production build

**Interfaces:**
- Consumes: Next.js App Router file-based icon metadata convention
- Produces: `/icon.svg`, referenced automatically in the generated page metadata

- [ ] **Step 1: Run the pre-implementation assertion**

Run:

```bash
test -f src/app/icon.svg && test ! -e src/app/favicon.ico
```

Expected: FAIL because `src/app/icon.svg` does not exist and `src/app/favicon.ico` still exists.

- [ ] **Step 2: Add the minimal SVG favicon**

Create `src/app/icon.svg` with:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="16" fill="#292929"/>
  <circle cx="16" cy="11" r="5" fill="#f2f2f2"/>
  <path d="M7 28c.8-6 4-9 9-9s8.2 3 9 9" fill="#f2f2f2"/>
</svg>
```

Delete `src/app/favicon.ico` so it cannot compete with the new icon.

- [ ] **Step 3: Re-run the asset assertion**

Run:

```bash
test -f src/app/icon.svg && test ! -e src/app/favicon.ico
```

Expected: PASS with exit code 0.

- [ ] **Step 4: Run the production build**

Run:

```bash
npm run build
```

Expected: PASS; Next.js completes its production build without icon metadata errors.

- [ ] **Step 5: Inspect the focused diff**

Run:

```bash
git status --short src/app/icon.svg src/app/favicon.ico
```

Expected: `D src/app/favicon.ico` and `?? src/app/icon.svg` before staging.

- [ ] **Step 6: Commit the favicon replacement**

```bash
git add src/app/icon.svg src/app/favicon.ico
git commit -m "feat: replace Vercel favicon with profile avatar"
```

