# AllTheScripts — Website Architecture

| Field | Value |
|---|---|
| Version | 0.1 |
| Created | 2026-09-23 |
| Updated | 2026-09-23 |
| Status | Current — skeleton scope |
| Project | AllTheScripts |
| Architecture owner | The Architect |
| Design source | [Website Design Brief](Website-Design-Brief.md) v0.1 |

## Architecture in One View

Keep the public guide as a framework-free, root-hosted static site. Semantic HTML owns visitor content and routes, shared CSS owns the app-inspired shell, and small progressive JavaScript owns mobile navigation and the illustrative game preview. The ATS-AIOS app and workspace are outside the website boundary.

```text
Visitor browser
    ├── static HTML pages and root routes
    ├── shared brand assets and CSS
    └── small client-side interactions
           └── illustrative preview data only

No website connection → ATS-AIOS workspace, app state, tools, or saves
```

## Drivers and Constraints

| Driver | Source | Structural consequence |
|---|---|---|
| App-like explanatory guide; no operational duplication | Design v0.1 | Static content pages and visual-only examples; no backend or app IPC/API. |
| Existing GitHub Pages root deployment and `allthescripts.uk` | Existing site audit/CNAME | Preserve root-relative URL behavior and CNAME. |
| Existing Project Snake page/build must remain intact | Existing audit | Do not remove or relocate build payload or its launcher during this skeleton. |
| Small, evolving capability list | Design v0.1 | Curated source-linked content with manual review; no scraping or auto-publication. |
| Preserve AllTheScripts logo; ATS-AIOS icon undecided | Lead Director direction and Design | Reuse approved brand exports; text ATS-AIOS identity until icon provenance is resolved. |

## System Map and Ownership

| System | Responsibility | Owns | Excludes |
|---|---|---|---|
| Static page layer | Deliver semantic pages and navigable content | Markup and metadata | App operations and user state |
| Shared shell styles | Present consistent app-inspired guide UI responsively | Site design tokens and components | Modifying supplied brand assets |
| Guide interactions | Mobile menu and optional preview selection/cycling | Ephemeral presentation state | Persistence, game state, analytics |
| Static media/content | Provide illustrative, curated public material | Copy, labels, source links, example data | Authoritative ATS-AIOS truth; public claims must link to authority |
| Existing Project Snake | Preserve existing proof-of-concept route/build | Its current page and build files | ATS-AIOS guide navigation |

## Dependency Direction

```text
HTML page content → shared CSS and approved assets
HTML controls → small progressive enhancement JavaScript
Preview data → presentation only
```

No runtime dependency points to ATS-AIOS local paths or app services. Core copy and navigation remain available without JavaScript; JavaScript enhances the mobile menu and game showcase only.

## Data and State

| Data | Authority | Access | Lifetime |
|---|---|---|---|
| Public page copy/capability claims | Reviewed site content linked to ATS-AIOS sources | Static read-only | Deployment version |
| Pocket Companion showcase selection | Page-local sample data | Client-side display | Current page visit only |
| Menu open/closed | Browser UI | Client-side display | Current page visit only |
| ATS-AIOS workspace/project truth | ATS-AIOS authoritative project documents | Not read by site runtime | Outside website |

## Platform Decisions

| Decision | Rationale | Trade-off |
|---|---|---|
| Plain HTML/CSS/vanilla JS; no build pipeline | Preserves the current deployed model and keeps skeleton easy to inspect. | Shared shell markup may be repeated across pages; consistency must be reviewed. |
| Root-relative links and assets | Required by current custom-domain hosting. | Previewing under a repository subpath needs a separate base-path strategy. |
| Keep all current legacy routes/build artifacts during first pass | Prevent broken deep links and preserve Snake. | Old content may remain reachable until separately reconciled. |

## Lifecycle and Failure Behaviour

Each page loads directly from its static route. Missing optional JavaScript leaves page content and links usable; the preview displays its initial game without cycling. Mobile navigation must default closed and expose its state to assistive technology. Missing illustrative media must have an explicit designed fallback and must not make navigation fail.

## Architecture Readiness

Current architecture is ready for the skeleton implementation. No backend, account system, dynamic source ingestion, or ATS-AIOS integration is needed. Hosting publication and legacy-route cleanup remain outside this implementation pass.
