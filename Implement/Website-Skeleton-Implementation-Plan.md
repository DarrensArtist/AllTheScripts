# AllTheScripts — Website Skeleton Implementation Plan

| Field | Value |
|---|---|
| Version | 0.1 |
| Created | 2026-09-23 |
| Updated | 2026-09-23 |
| Status | Current |
| Project | AllTheScripts |
| Owner | The Implementation Coordinator |
| Execution owner | Website implementation under ATS-AIOS Lead Director direction |
| Design source | [Website Design Brief](../Design/Website-Design-Brief.md) |
| Architecture source | [Website Architecture](../Design/Website-Architecture.md) |

## Plan in One View

Preserve the static site and its public assets, replace the front-door story with an ATS-AIOS guide shell, and build the core explainer destinations first. Leave less-defined app pages as labelled skeletons; keep the app, live workspace, and publication settings outside the change.

```text
Existing static site → shared guide shell → core content pages → app-area skeletons
```

## Starting State and Constraints

- The existing site is plain HTML/CSS/JavaScript with root-relative routes and `CNAME=allthescripts.uk`.
- Approved AllTheScripts logo exports are present under `assets/brand/`; reuse them.
- The ATS-AIOS Visualiser source currently uses a dark navy shell, blue/cyan accents, grouped sidebar navigation, panels, and text-based brand treatment.
- Preserve Project Snake and its complete Unity WebGL build; no legacy route cleanup in this pass.
- The site's source is nested under the ATS-AIOS project directory; GitHub Pages cannot publish an arbitrary repository subfolder directly as a branch source. A custom Actions workflow assembles a curated public artifact from that source and retains the root CNAME.
- Do not add tests or claim runtime/accessibility/browser validation has occurred.

## Implementation Route

| Step | Work and result | Depends on |
|---|---|---|
| 1 | Replace the home-page focus with ATS-AIOS, app-like guide navigation, method overview, and illustrative Pocket Companion showcase. | Design/Architecture |
| 2 | Add source-backed Capabilities and Examples guide pages, accurately labelling evidence maturity. | Step 1; approved project requirements and current system definitions |
| 3 | Add app-guide destinations as explanatory skeleton pages for app areas not yet fully described. | Shared navigation/content model |
| 4 | Reconcile Worlds/Projects, Systems/Lab and Build Log as secondary destinations while preserving useful existing routes and Snake. | Step 1; route inventory |
| 5 | Update project continuity files with changed scope and outstanding decisions. | Completed source edits |

## Structural Invariants

- AllTheScripts logo remains the studio mark; ATS-AIOS remains separate and textual until icon provenance is known.
- No workspace tree, internal source paths, operational tool behavior, app state, login, or persistence is added to the website.
- The website Home Pocket Companion preview is not the app's Home; the real app feature remains in its separate Operations > Desktop destination.
- Game cycling uses only known game/project names and is optional, pauseable, and disabled for reduced-motion preference.
- Preserve custom domain and current route compatibility during this pass.
- Exclude the internal `docs/`, temporary content, template source and ATS-AIOS project records from the Pages artifact.

## Evidence and Limits

The current handoff contains source edits only. No tests, browser walkthrough, accessibility review, build, publish, or live app connection is claimed. The ATS-AIOS icon source and usage rights, detailed future guide content, and legacy-route redirect decisions remain open.
