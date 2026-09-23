# Workflow 1.0 migration map

Source of truth: `AllTheScripts-Workflow-Area-Design-Brief.md` (full replacement brief).

## Repository reality

- Static HTML, CSS and small progressive-enhancement JavaScript files; no production build step or package manifest.
- Stable route family already exists under `/workflow/`.
- Shared header, footer, local navigation, cards, disclosures, responsive shell and blueprint-at-dusk styling are reusable.
- Prompt metadata currently lives in `content/workflow/prompts.json`; there are no approved prompt bodies.

## Retain

- All five Workflow URLs and legacy redirects.
- Global header/footer, local Workflow navigation and active-page treatment.
- Brand tokens, typography, dusk palette, responsive page shell, skip link and native disclosures.
- Correct Unity project/module trees and the under-validation scene/UI language.
- Structured prompt source and the rule that missing bodies receive no copy control.

## Replace

- Linear ten-stage pipeline with Initial Baseline plus Continuous Development.
- Process content with persistent workspaces, per-module readiness, Codex cycle, validation outcomes and change propagation.
- Generic AI/developer split with the complete agent, workspace, reasoning and Librarian model.
- Obsolete prompt taxonomy with Workflow 1.0 workspace, specialist-agent and operation groups.
- Resume card with Start, Change and Return route guidance.

## Remove

- Separate Task Lists and Documentation Audit stages.
- Mandatory project-wide gate before any implementation.
- Language describing Slices as inherently cross-module.
- Incorrect Board ownership for `ChipDefinition.cs`.
- Any implication that the Idea Workspace closes or that chat history is authoritative.

## Add

- Three-depth overview, responsive explorer, authority legend and full-system map.
- Documentation hierarchy and authority lookup.
- Module readiness and concurrency decision controls.
- Experimental-versus-production distinction.
- Agent directory, Work/Codex workspace maps and read-only Project Librarian.
- Data schemas for Workflow stages and the expanded prompt contract.

## Implementation risks and decisions

- The repository has no build system, so critical content remains server-rendered in HTML while JSON acts as the maintainable source for interactive/data records.
- No approved prompt bodies were supplied. All 24 Workflow 1.0 entries will remain honestly labelled `Content needed` and will not expose copy buttons.
- Wide diagrams, tables and paths require contained scrolling or vertical mobile forms; document-level horizontal overflow is not acceptable.
- Existing Workflow CSS can remain as a component foundation, but new Workflow 1.0 selectors must supersede obsolete pipeline presentation without disturbing the rest of the site.
