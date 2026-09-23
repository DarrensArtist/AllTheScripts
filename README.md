# AllTheScripts

## ATS-AIOS project home

This is the authoritative ATS-AIOS home for the AllTheScripts website. The existing site documentation and repository are preserved as inherited project evidence; the project’s defining intent and IDIC stage outputs have not yet been reviewed or approved through ATS-AIOS.

The [Website Design Brief](Design/Website-Design-Brief.md) and [Website Architecture](Design/Website-Architecture.md) define the initial guide skeleton. The site presents ATS-AIOS as the main product while preserving the AllTheScripts logo, using the actual app as a visual reference, and leaving unfinished app-area pages as explainers. The website Home has a Pocket Companion showcase that cycles through games as illustrative media; the actual feature remains in its app destination. Website pages do not reproduce app operations or expose workspace folders. Commercialisation remains a possibility, not a commitment.

- [Project state](Project-State.md) — current position and re-entry point.
- [Idea](Idea/) — concept source and future foundational changes.
- [Design](Design/) — current website experience and software Architecture.
- [Implement](Implement/) — skeleton implementation plan and handoffs.
- [Configure](Configure/) — site content and configuration.
- [Development - AllTheScripts](Development%20-%20AllTheScripts-Website/) — existing website repository and source.

The project root is also the Git repository root, so ATS-AIOS project documents and the development source remain in one repository.

AllTheScripts is Darren's focused game-development portfolio and public workspace. The static site presents substantial work, focused prototypes and reusable development workflows without requiring a content-management system or build pipeline.

## Current website direction

The website is being reshaped into an app-like guide with ATS-AIOS as the main feature. It remains a plain static site; guide navigation is not an app login or an operational tool. Capability descriptions use current ATS-AIOS definitions and distinguish definition from project use and validation. The four examples are drawn from approved Against the Horde requirements and must not be described as passed runtime tests.

## Public structure

- `/` — ATS-AIOS guide home and Pocket Companion preview
- `/#method` — how the directed development method works
- `/#capabilities` — current source-led capability overview
- `/#examples` — four requirement-based examples
- `/#app-guide` and guide anchors — explanatory app-area skeletons
- `/pages/work.html` — substantial games and projects
- `/pages/work/7-is-watching.html` — developing flagship case-study skeleton
- `/pages/lab.html` — prototypes, technical demonstrations and experiments
- `/pages/games/sub-pages/snake.html` — Project Snake Unity WebGL deployment proof of concept
- `/workflow/` — reusable game-development field manual
- `/pages/main/about-us.html` — first-person About page

Legacy public routes use static HTML redirects so existing links resolve to an appropriate replacement. `CNAME` preserves the `allthescripts.uk` GitHub Pages domain.

## Implementation

The source site is plain HTML, CSS and JavaScript under `Development - AllTheScripts-Website/`. The ATS-AIOS guide shell uses `assets/css/ats-aios-guide.css` and `assets/js/ats-aios-guide.js`; the previous shared site styles and pages remain available for supporting and legacy routes. Approved public identity exports remain in `assets/brand`.

Unity WebGL files remain under `build/ProjectSnake`. They are loaded only when a visitor explicitly launches the proof of concept from its Lab entry.

GitHub Pages deployment is defined by `.github/workflows/deploy-pages.yml`. It publishes the website source from the nested development folder while preserving that new source root, the custom-domain CNAME, and Project Snake. The workflow excludes project coordination documents, development notes, temporary files, and the served page template from the public artifact.

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
