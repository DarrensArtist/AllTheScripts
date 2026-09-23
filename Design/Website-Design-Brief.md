# AllTheScripts — Website Design Brief

| Field | Value |
|---|---|
| Version | 0.1 |
| Created | 2026-09-23 |
| Updated | 2026-09-23 |
| Status | Current — skeleton scope |
| Project | AllTheScripts |
| Design owner | The Design Agent |
| Source | [Idea Brief](../Idea/Idea-Brief.md) v0.6 and direct ATS-AIOS Lead Director direction in this working session |

## Experience in One View

AllTheScripts presents ATS-AIOS as its main product through an app-like, navigable website guide. Visitors can explore how the system helps turn a spontaneous idea into directed, consistent development, while real tools remain in the ATS-AIOS app. The initial website is a content-complete visual skeleton: navigation and guide pages work, unfinished destinations explain their intended purpose and show clearly labelled concepts, and no operational app capability is duplicated.

## Experience Pillars

| Pillar | Visitor experience | Design consequence |
|---|---|---|
| Familiar guide | The site feels like exploring the ATS-AIOS app. | Use an app-inspired shell and navigation, while making guide/preview status clear. |
| Purposeful building | Visitors see how ideas move through structured work and catch mismatches early. | Explain the workflow with source-backed examples, not broad promises. |
| Honest capability | Visitors can tell what ATS-AIOS defines, what has been applied, and what has been validated. | Label evidence and maturity; keep a curated capability catalogue tied to current system sources. |
| One studio identity | AllTheScripts remains the studio identity; ATS-AIOS is a distinct product identity. | Preserve the AllTheScripts logo; render ATS-AIOS as its own wordmark for the skeleton. Existing icon provenance is unresolved and no icon asset was found in the Visualiser development source. |

## Navigation and Page Model

The shell has persistent primary navigation. **Home, How it works, Capabilities, Examples, and App guide** are first-class visitor destinations. Worlds/Projects and Build Log support the ATS-AIOS story. The App guide translates real application areas into visitor-facing explanations; it never reveals workspace paths or performs app operations.

| Destination | Initial treatment |
|---|---|
| Home | ATS-AIOS-led introduction, idea-to-product flow, calls to explore, and a short Pocket Companion showcase that cycles through games. |
| How it works | Explain the directed journey from idea through design and implementation to a coherent result, without claiming every task follows an identical rigid path. |
| Capabilities | A curated, growing account of what current agents, sub-agents, skills, standards, and templates define; distinguish defined, applied, and validated evidence. |
| Examples | Four approved Against the Horde requirement examples, each explicitly framed as specified requirements, not verified runtime failures or passed tests. |
| App guide | Explanatory destinations for Home, Projects, Workforce, Library, System, Operations, and Pocket Companion, based on the current app shell. Unfinished pages use Concept/Not connected labels. |
| Worlds / Projects | Supporting project showcases with accurate status and provenance; not peer products to ATS-AIOS. |
| Build Log | Supporting development updates; retain concise skeleton until verified entries are selected. |

## Home Pocket Companion Showcase

On the **website Home**, a compact animated or manually browsable preview cycles through the available games. It is illustrative media, not an active tool, saved companion state, or live game. Visitors can pause or change the preview; reduced-motion preference disables automatic cycling. The real Visualiser Pocket Companion remains a separate Operations > Desktop destination, distinct from app-wide Home.

## Capability and Evidence Language

Each public capability entry has a plain-language purpose, visitor benefit, owning capability type, source-backed definition, and evidence level. The levels are **Defined** (the ATS-AIOS source component specifies it), **Applied** (a project document records its use), and **Validated** (a stated implementation check has evidence). Never upgrade an entry merely because a document or code exists. A maintainer reviews affected public entries after capability-source changes; updates are not implied to publish automatically.

The four launch examples are: settings explicitly included in durable saves; paid Continue ordering and record eligibility; required cross-device action reachability; and published-client persistence evidence. Their specific requirement sources are linked in the Idea Brief and on the Examples page.

## Visual and Interaction Direction

Use the current app as reference: dark navy surfaces, a persistent side navigation, cyan/light-blue active accents, grouped destinations, compact status chips, and information panels. Keep AllTheScripts' approved logo visible as the studio mark. ATS-AIOS is a distinct text wordmark until its own mark is resolved. Reuse existing site assets; do not recreate or replace supplied brand artwork.

At narrow widths, navigation becomes a labelled, keyboard-operable menu and content stacks into one column. All links and controls work with keyboard, focus is visible, headings are semantic, contrast remains readable, and motion respects reduced-motion preference. The Pocket Companion showcase communicates that it is a preview.

## Skeleton Boundary

### Included

- Finished navigation, Home, How it works, Capabilities, Examples, and App guide overview.
- Clearly labelled explanatory skeletons for app areas and supporting sections whose detailed content is not ready.
- Pocket Companion showcase with sample game cycling, using only known project names and no live app connection.
- Existing domain, AllTheScripts logo, game/project routes, and Project Snake deployment preserved.

### Excluded

- Any operational app tools, workspace browsing, real folder tree, source documents, login, telemetry, companion save data, or live app connection.
- Claims that ATS-AIOS guarantees error-free output or that example requirements have passed runtime validation.
- A final ATS-AIOS icon, sale/package offer, or new brand artwork before identity/source decisions are resolved.
- Publishing, hosting setting changes, or removing legacy routes/build assets.

## Open Decisions

| Matter | Current handling |
|---|---|
| ATS-AIOS icon origin/licence | Keep the liked icon out of the website until the exact asset is identified and its source/rights are checked. Use a typographic ATS-AIOS wordmark meanwhile. |
| Primary audience and visitor action | Use accessible explanatory copy and an Explore ATS-AIOS action; refine from later direction without delaying the skeleton. |
| Legacy route replacement/redirects | Preserve existing routes while the new surface is built; assess redirects separately with route inventory. |

## Readiness

The skeleton experience is sufficiently defined for a static HTML/CSS/JavaScript implementation. Detailed app-guide content, future media, commercial packaging, and icon identity can mature independently. Architecture should preserve the current root-hosted static site and existing deep links/builds.
