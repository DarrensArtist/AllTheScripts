# Phase 1 progress — Audit and Foundation

This tracked checklist mirrors Phase 1 of `C:\Users\Dahh\Downloads\Website-Rebuild-Tasklist.md`, which remains the complete source of truth for the rebuild.

## Task 01 — Audit the Existing Website

- [x] Inspect the current homepage, shared styling, scripts, content pages, assets and WebGL build structure.
- [x] Confirm how GitHub Pages is currently configured, including the custom domain and URL behaviour.
- [x] Identify all existing public routes.
- [x] Identify legacy learning-site content that conflicts with the new portfolio direction.
- [x] Identify code and assets still required by Project Snake.
- [x] Check for broken links, unused scripts and duplicate styling without deleting them yet.
- [x] Record a concise audit summary in the repository.

Verified in `docs/website-audit.md`. No destructive cleanup occurred. `CNAME` and the complete Project Snake build remain unchanged.

## Task 02 — Install the Approved Brand Assets

- [x] Confirm the approved logo package is available.
- [x] Add the primary horizontal logo, dark-background logo, icon, favicon and touch icon to a clear brand asset directory.
- [x] Use descriptive, stable filenames.
- [x] Confirm transparency, legibility and dimensions are suitable for header, footer, favicon and social-profile use.
- [x] Keep only public website assets in the served asset directory.
- [x] Do not recreate or substantially alter the approved symbol or wordmark.

Verified against `AllTheScripts-Website-Visual-Package-v1.zip`. The existing `assets/art` files belong to the superseded identity and have not been reused by the new shell.

## Task 03 — Create the Shared Visual System

- [x] Define the approved colour palette as shared design tokens.
- [x] Define typography, spacing, content widths, borders, radii, shadows and focus styles.
- [x] Create consistent styles for headings, body copy, labels, links, actions, media, captions and status tags.
- [x] Support light and dark surfaces without requiring every page to have a manual theme switch.
- [x] Add reduced-motion behaviour.
- [x] Remove reliance on the old pixel/glitch identity from the new pages.
- [x] Ensure the system can be extended by project-specific themes such as 7 Is Watching.

## Task 04 — Build the Shared Site Shell

- [x] Build a desktop and mobile header using the approved logo.
- [x] Use the initial navigation: Work, Lab, Workflow and About.
- [x] Make the logo return to the homepage.
- [x] Provide accessible mobile navigation with correct keyboard and screen-reader behaviour.
- [x] Create the shared footer with a concise AllTheScripts description and relevant external links.
- [x] Add clear active-page states.
- [x] Ensure the shell supports project-specific visual overrides without losing navigation consistency.

## Phase milestone

- [x] Verify all Phase 1 acceptance criteria.
- [x] Create the major commit: Brand foundation and shared site shell.
- [x] Stop for Darren's review before beginning Phase 2.
