# AllTheScripts

AllTheScripts is Darren's focused game-development portfolio and public workspace. The static site presents substantial work, focused prototypes and reusable development workflows without requiring a content-management system or build pipeline.

## Public structure

- `/` — selective portfolio homepage
- `/pages/work.html` — substantial games and projects
- `/pages/work/7-is-watching.html` — developing flagship case-study skeleton
- `/pages/lab.html` — prototypes, technical demonstrations and experiments
- `/pages/games/sub-pages/snake.html` — Project Snake Unity WebGL deployment proof of concept
- `/workflow/` — reusable game-development field manual
- `/pages/main/about-us.html` — first-person About page

Legacy public routes use static HTML redirects so existing links resolve to an appropriate replacement. `CNAME` preserves the `allthescripts.uk` GitHub Pages domain.

## Implementation

The site is plain HTML, CSS and JavaScript. Shared design tokens and components live in `assets/css/site.css`; mobile navigation, copy utilities and the intentional Unity launcher live in `assets/js`. Approved public identity exports live in `assets/brand`.

Unity WebGL files remain under `build/ProjectSnake`. They are loaded only when a visitor explicitly launches the proof of concept from its Lab entry.

## Adding content

Read `docs/content-patterns.md` before adding a project, prototype, system showcase or Workflow entry. It defines the minimum verified content and the optional sections for each type. Omit unavailable optional sections completely—never publish blank galleries, empty launch controls or unsupported claims.

New public pages should:

1. Reuse the shared site header, navigation and footer.
2. Include a specific title, description, canonical URL and approved icons.
3. Use one logical `h1` and a semantic heading outline.
4. Add only real media with meaningful alternative text or captions.
5. Keep heavy builds behind the shared explicit launch pattern.
6. Verify keyboard, mobile, reduced-motion and broken-link behaviour.

## Current content dependencies

See `docs/content-needed.md`. These are missing source materials, not implementation defects, and the relevant public pages use honest in-development states until the material is supplied.

## Publishing

The repository is compatible with GitHub Pages and its current custom domain. Do not change Pages settings, push or publish without Darren's explicit request.
