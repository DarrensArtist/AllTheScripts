# Existing website audit

Audit completed for Phase 1, Task 01 of the supplied website rebuild task list.

## Hosting and URL behaviour

- The site is a framework-free static GitHub Pages repository on `main`, with no package manager, build pipeline, Pages workflow, or Jekyll configuration in the repository.
- `CNAME` contains `allthescripts.uk` and must be preserved. All shared-site pages use root-relative URLs (and most declare `<base href="/">`), so they are designed for the custom domain root. A project-site preview under a `/AllTheScripts/` path would not resolve those root-relative assets without adjustment.
- The repository remote is `https://github.com/DarrensArtist/AllTheScripts.git`. Publishing settings live outside the repository and were not changed during this audit.
- `/pages/content/games.html` is the only explicit legacy redirect; it immediately redirects to `/pages/content/projects.html` and includes a fallback link.

## Current public routes

| Route | Current purpose | Later treatment |
| --- | --- | --- |
| `/` and `/index.html` | Learning-oriented homepage | Replace with the portfolio homepage in Phase 2. |
| `/pages/content/projects.html` | Project/tutorial listing | Account for this URL when the Work and Lab areas replace it. |
| `/pages/content/games.html` | Redirect to the projects listing | Retain or redirect deliberately during legacy cleanup. |
| `/pages/content/roadmap.html` | Public learning-site roadmap | Legacy content; no public roadmap is allowed by the new brief. |
| `/pages/content/assets.html` | Future/placeholder assets area | Legacy placeholder; no replacement page should be exposed without content. |
| `/pages/content/blog.html` | Future/placeholder blog area | Legacy placeholder; a blog is outside the new scope. |
| `/pages/content/docs-temps.html` | Learning resources and templates | Reassess against the future Workflow area before redirecting. |
| `/pages/content/scripts.html` | Future/placeholder scripts area | Legacy placeholder; reassess useful material before redirecting. |
| `/pages/main/about-us.html` | Existing About page | Replace with a first-person About page while accounting for this URL. |
| `/pages/games/sub-pages/snake.html` | Snake project page with an embedded WebGL build | Preserve until the Phase 3 replacement is verified. |
| `/build/ProjectSnake/index.html` | Standalone Unity WebGL player | Preserve as part of the Snake deployment. |
| `/pages/games/sub-pages/pong.html` | Proposed tutorial/project page | Legacy learning content with unsupported completion claims. |
| `/pages/games/sub-pages/breakout.html` | Proposed tutorial/project page | Legacy learning content with unsupported completion claims. |
| `/pages/games/sub-pages/top-down-movement.html` | Proposed tutorial/project page | Legacy learning content with unsupported completion claims. |
| `/template-data/page-template/page-base-template.html` | Served HTML template | Development material currently reachable as a public URL; replace with non-public reusable patterns later. |

Extensionless requests depend on GitHub Pages' normal HTML handling; the current navigation consistently links to explicit `.html` routes.

## Shared implementation

- Shared styling is split across `universal-style-reset.css`, `default-styling.css`, `base-page-styling.css`, and `responsive-design.css`. `coming-soon.css` is a legacy stylesheet used by the older template.
- Shared behaviour is split between `toggle-menu-visibility.js` and `hide-reveal-header.js`. `navigation.js` implements mouse dragging for a `.navigation` element but is not referenced by the current HTML and does not match the current navigation markup.
- Header, mobile navigation, and footer markup are copied into every page rather than generated. This creates substantial duplication and makes active states and navigation changes error-prone.
- The current mobile menu toggles visually and responds to Escape, but it does not update its accessible name, move or trap focus, close after a menu selection, or mark active links with `aria-current`.
- The current identity relies on Pixeloid/Glitch Goblin fonts, monochrome grid/glitch styling, and the old files in `assets/art`. Those are superseded for the new shell but remain untouched until replacements are installed and legacy routes are handled.
- The root-relative asset approach works at `allthescripts.uk`; it is not portable to a GitHub Pages project subpath without a base-path strategy.

## Project Snake preservation boundary

The following are required by the current Snake presentation and must not be removed before its replacement is verified:

- `pages/games/sub-pages/snake.html`
- the complete `build/ProjectSnake/Build` directory, including the uncompressed `.data`, `.framework.js`, and `.wasm` files loaded by the page
- the complete `build/ProjectSnake/TemplateData` directory
- `build/ProjectSnake/index.html`
- the shared CSS and mobile-navigation scripts currently referenced by the Snake page

The desktop Snake page currently creates its Unity canvas and injects `ProjectSnake.loader.js` as soon as the page loads. The build payload is roughly 36.6 MB uncompressed across data, framework, and WebAssembly files. Mobile devices receive a placeholder instead. Moving the build behind an intentional launch action is correctly deferred to later phases.

## Link, script, and asset findings

- All root-relative internal links and assets referenced by current public pages resolve to repository files.
- The old page template contains five broken relative stylesheet paths because they resolve beneath `template-data/page-template/` instead of the repository root.
- `navigation.js` is unused. It also assumes `.navigation` exists and would throw if included on a page without that element.
- Shared header/footer markup and legacy page content repeat extensively; the CSS is broadly shared rather than duplicated per page, but contains selectors for multiple old content patterns.
- Both compressed and uncompressed Unity build artifacts exist. The live Snake page explicitly requests the uncompressed variants, so none should be classified as removable until hosting headers and the build are tested in a later phase.
- No files were deleted, renamed, redirected, or otherwise cleaned up during the audit.

## Direction conflicts to replace later

The homepage, projects page, About page, roadmap, and proposed Pong/Breakout/top-down pages describe a tutorial or “project-learning” platform, use team/company-style language in places, advertise planned lessons, and present project states that are not supported by supplied evidence. Placeholder Blog, Assets, and Scripts pages also conflict with the selective portfolio model. These routes must remain available until their replacements and redirect decisions are verified.

## Foundation dependency

The repository currently contains only the superseded logo artwork and pixel/glitch fonts. No approved AllTheScripts identity package was found in the repository or among clearly named items in Downloads during this audit. Phase 1 Task 02 therefore requires Darren to supply or identify the approved package before the new shell can be built faithfully.
