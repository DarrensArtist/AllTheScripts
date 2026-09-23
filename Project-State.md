# AllTheScripts — Project State

| Field | Value |
|---|---|
| Version | 1.7 |
| Created | 2026-09-23 |
| Updated | 2026-09-23 |
| Project status | Active |
| Platform or type | Public ATS-AIOS product showcase; current implementation is a static website |
| Current IDIC stage | Implement |
| Stage status | Skeleton in progress |

## Project Snapshot

The website is being reshaped into an app-like ATS-AIOS guide. Its existing AllTheScripts logo remains the studio identity; ATS-AIOS is shown as a separate text wordmark while the liked icon's origin is checked. The website Home promotes the product and includes a clearly illustrative Pocket Companion preview; the real app Pocket Companion remains a separate Operations > Desktop destination. Website guides explain app areas but do not expose workspace folders or perform app operations. A static website skeleton is committed locally for deployment. The Lead Director requested publication; GitHub Pages source is now set to GitHub Actions, while the local commit still needs authenticated push before the new site can deploy.

## Current Authority

| Authority | Status | Location or note |
|---|---|---|
| ATS-AIOS Lead Director intent | Seed | ATS-AIOS should be the website’s main product: purposeful, directed AI-assisted development that guides spontaneous ideas through appropriate stages and agents. Games, systems, and updates support this story. Commercialisation is a possibility, not a commitment. |
| Current stage output | Current | [Website Design Brief](Design/Website-Design-Brief.md) v0.1 records the app-inspired guide and skeleton boundary. The Idea Brief v0.6 remains the concept source. |
| Architecture | Current | [Website Architecture](Design/Website-Architecture.md) v0.1 retains static root-hosted HTML/CSS/JS with no app connection. |
| Implementation plan | Current | [Skeleton Implementation Plan](Implement/Website-Skeleton-Implementation-Plan.md) v0.1. |
| Implementation | In progress | [Development - AllTheScripts-Website](Development%20-%20AllTheScripts-Website/); the new ATS-AIOS guide shell and first explanatory pages are in progress. |
| Canon or configuration | Existing site content; not assessed as ATS-AIOS Configure authority | Website source and content are in the development folder. |

## IDIC Progress

| Area | State | Evidence or note |
|---|---|---|
| Onboarding | Complete | Project home, navigation, README and this state established. |
| Idea | Current concept source | [Idea Brief](Idea/Idea-Brief.md) v0.6 positions ATS-AIOS as the primary product. Further material concept changes return here. |
| Design | Current for skeleton | [Website Design Brief](Design/Website-Design-Brief.md) v0.1 captures supplied direction; unfinished guide destinations remain labelled skeletons. |
| Architecture | Current for skeleton | [Website Architecture](Design/Website-Architecture.md) v0.1. |
| Implement | In progress | [Implementation Plan](Implement/Website-Skeleton-Implementation-Plan.md) v0.1; static guide shell first, content expansion later. |
| Configure | Existing website content; ATS-AIOS stage not started | Existing content remains in the site repository; no Configure assessment has been made. |

## Current Work

The Lead Director directed a website skeleton using the app's visual language, preserving the AllTheScripts logo and treating ATS-AIOS as a separate product identity. The guide shell and initial content are implemented in the existing static site. Four public examples reference Against the Horde M07/M08/M12/M14 requirements; those requirements specify behavior and evidence obligations, not passed runtime tests. Workspace source paths are not visitor-facing. Commit `92fdeac` records the website move and guide skeleton locally. GitHub Pages is configured for GitHub Actions, but the commit has not been pushed because the GitHub CLI/remote Git session lacks authentication; the new site has not been deployed.

## Next Expected Work

Complete the first coherent skeleton: review the route/content implementation, inspect the guide at desktop and mobile widths, then refine the app-area guide pages and ATS-AIOS identity when the liked icon source is identified. Preserve current deep links and Project Snake. Do not publish or alter hosting settings without explicit direction.

## Decisions Requiring Attention

The ATS-AIOS icon's exact source/licence remains unresolved; use the ATS-AIOS text mark meanwhile. Continue to distinguish defined capability, project application and runtime validation. Preserve existing routes during the first pass; legacy route cleanup and any later commercial offer require separate decisions. Future commercialisation remains an option, not a current commitment.

## Blockers and Risks

- The move has many unstaged deletions at the old repository paths and an untracked development folder. Preserve this state and review the move before staging or committing.
- Existing Git history reports `0ff3010` (“Reframe site around worlds wikis and systems”) as the prior HEAD; the current checkout shows `main...origin/main` before the move is recorded.
- No runtime, browser, deployment, or current publication validation was performed during onboarding.

## Re-entry

1. Read this state and the current [Website Design Brief](Design/Website-Design-Brief.md), [Architecture](Design/Website-Architecture.md), and [implementation plan](Implement/Website-Skeleton-Implementation-Plan.md).
2. Continue the bounded skeleton implementation under `Development - AllTheScripts-Website/`; keep app areas that lack visitor-facing detail as labelled guide pages.
3. Review the liked ATS-AIOS icon's exact source and usage rights before using it; keep the text wordmark until resolved.
4. Inspect the completed skeleton at desktop and mobile widths when the Lead Director asks for verification. Preserve Project Snake, current deep links, and hosting configuration.
