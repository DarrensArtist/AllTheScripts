# AllTheScripts — Idea Brief

| Field | Value |
|---|---|
| Version | 0.6 |
| Created | 2026-09-23 |
| Updated | 2026-09-23 |
| Status | Needs Review |
| Project | AllTheScripts |
| Platform or type | Public product showcase; current implementation is a static website |
| Owner | The Idea Agent |

## The Idea in One Sentence

AllTheScripts is an app-like public guide and showcase for ATS-AIOS: it explains a human-directed AI-assisted development system that helps people turn spontaneous ideas into coherent products, while the ATS-AIOS app remains the real place to use its tools and workflows.

## At a Glance

| Question | Answer |
|---|---|
| What is the visitor doing? | Exploring an app-like guide to ATS-AIOS, learning what its areas do, and seeing examples from real project documents. |
| What is the main goal? | Understand how ATS-AIOS gives direction to spontaneous AI-assisted coding and how to use its real app for the work. |
| What creates challenge? | Unstructured AI coding can create inconsistent decisions, overlooked requirements, and avoidable rework; a development process also needs to catch conflicts without stifling new ideas. |
| What creates reward? | The visitor sees a practical path from an idea to a reviewed product, with focused agent roles challenging gaps and surfacing issues earlier. |
| What ends a session or experience? | The visitor understands the approach and can explore a relevant example, follow its development, or consider using ATS-AIOS. There is no required linear journey. |

## Intended Experience

Visitors should come away understanding that ATS-AIOS keeps room for spontaneous ideas while giving them somewhere purposeful to go. Instead of jumping directly from each new thought into code, a builder can take an idea to the Idea Agent, clarify what they intend to make, and move it through the appropriate development stages. Focused agents contribute their expertise, challenge assumptions, and identify conflicts or missing requirements before they become costly inconsistencies.

The website should make this value concrete rather than presenting ATS-AIOS as abstract process. It should feel familiar to the ATS-AIOS app, using a related visual language and app-like navigation so visitors can explore concepts in context. It is a guide and UI preview, not a duplicate app: app areas such as the Library lead to explanatory pages about what the area is for and how to use it. The site should not expose the app’s actual workspace folders or pretend its explainers perform the app’s operational functions. The real app remains the place to use ATS-AIOS tools and workflows.

AllTheScripts’ game projects, practical systems, and development updates remain part of the wider story: they help demonstrate the kinds of work ATS-AIOS can guide and how its approach develops. They support ATS-AIOS as the main product, rather than competing with it as equal website themes.

Examples such as a forgotten password-visibility control or a password rule that deserves challenge illustrate the type of gap an agent might surface. They are examples of the intended value, not fixed requirements for ATS-AIOS or guaranteed outcomes. The system should help builders reach better-directed, more consistent work; the website must not promise error-free results.

## Core Loop

```text
Arrive wanting to understand ATS-AIOS
          ↓
Navigate a website that feels familiar to the ATS-AIOS app
          ↓
Select an app area, such as Library
          ↓
Read its explanation or use a tooltip/UI preview to learn how it works
          ↓
Open the real app when ready to use its operational tools
          ↺
```

## Defining Features

- ATS-AIOS is the primary product and organising idea of the website.
- Explain how spontaneous ideas can enter a purposeful process and move toward a coherent product.
- Show how focused agents challenge, review, and carry decisions through appropriate stages to reduce avoidable inconsistencies and rework.
- Use AllTheScripts game projects and their associated material as examples of the system’s application, without implying that every project or past decision was developed through ATS-AIOS unless that is evidenced.
- Present practical systems and tools as supporting parts or demonstrations of the ATS-AIOS approach.
- Show development updates that make the system’s growth and real use understandable.
- Be clear about what exists now, what is experimental or in development, and what is only a possible future offering.
- Maintain a friendly, growing **“What ATS-AIOS can do”** capability page. Its visitor-facing summaries should be grounded in the current agent, skill, standard, template, and sub-agent definitions, with concrete project evidence where available. Update it as ATS-AIOS capabilities are added or changed.
- Use four concise, traceable game-development examples to show the kinds of omissions and inconsistencies ATS-AIOS helps teams catch during requirements and review.
- Make the website feel like the ATS-AIOS app in visual essence and navigation, while keeping the site’s purpose distinct: orient, explain, preview, and guide.
- Let an app-like label such as **Library** open a visitor-friendly explainer for that area, including what it contains and how a person uses it in the real app.
- Keep operational tools and functionality in the ATS-AIOS app. The website can explain them with examples, tooltips, guided UI previews, and usage instructions, but does not reproduce their working capability.
- Use short recordings, GIFs, or small animations as visual showcases. For example, the Home Pocket Companion preview can flick through the games to show visitors what is there; it is a presentation sequence, not the actual tool running on the website.
- Keep the actual app’s workspace folder tree private to its working context; present useful concepts and categories rather than literal internal paths.

## Capability Page and Game Examples

The capability page should translate the living ATS-AIOS component set into plain-language abilities: what its agents own, which repeatable tasks its skills support, what its standards check, what its templates help produce, and where sub-agents provide bounded help. The list should grow or change when those source capabilities change. Each public claim should point to a current source or relevant project example and make clear whether it is documented, applied in project documents, or verified in an implementation. A completed requirement or template must not be presented as proof that a running game has passed it.

These four short examples are grounded in the Lead Director-approved Against the Horde M07, M08, M12, and M14 requirements. They demonstrate what ATS-AIOS has specified and how it connects the work; they are **not** claims that these four failures occurred or that the corresponding runtime behavior has already passed testing. The current [Against the Horde Project State](../../../Roblox/AgainstTheHorde/Project-State.md) says no code execution is recorded for the approved plans and that Studio/published-client validation remains deferred for many systems.

1. **A setting never makes it into the player save.** The approved [Against the Horde M08 profile requirements](../../../Roblox/AgainstTheHorde/Design/Module-Requirements/M08-Profiles-Shard-Transactions.md) explicitly list settings among durable profile data and distinguish run-only ranks, slots, and combination marks that must reset. This makes a missing save field visible in the contract before implementation planning.
2. **A paid Continue revives the player but mishandles saved currency or records.** Approved [M07 recovery requirements](../../../Roblox/AgainstTheHorde/Design/Module-Requirements/M07-Recovery-Continue.md) and M08 define the order and ownership: the Shard debit completes before revival, retries cannot spend or revive twice, and the continued run is excluded from unassisted records. [M12 presentation requirements](../../../Roblox/AgainstTheHorde/Design/Module-Requirements/M12-Cross-Device-Presentation.md) also require the cost and record consequence to be visible before confirmation.
3. **A new action works with a keyboard but is unreachable on touch or controller.** M12-R02 requires the Ready/Start, Leave, upgrade, revive, Continue, and results actions to be reachable across keyboard/mouse, controller, and touch, with clear accepted or rejected feedback.
4. **A save is called complete because it worked in an editor session.** Approved [Against the Horde M14 integration and evidence requirements](../../../Roblox/AgainstTheHorde/Design/Module-Requirements/M14-Integration-Quality-Evidence.md) require each module obligation to map to evidence or an explicit gap, and call for published-client persistence/rejoin validation. Editor or static checks alone cannot be reported as published persistence acceptance.

The examples are intentionally small. They make the system’s contribution visible: define boundaries, connect dependent behavior, set acceptance conditions, and require evidence at the right stage. Refresh them when approved project evidence or ATS-AIOS capabilities change; do not imply the changes publish themselves without a review step.

## Website and App Relationship

The website should act like an interactive guide to ATS-AIOS: familiar enough to orient a visitor as though they were exploring the app, but clearly an explanatory layer rather than the operational product. Selecting an app area opens a guide or UI preview for that area. For example, the Library page would describe what the app’s Library is for and how to use it; it would not show the app’s actual folder tree or claim to provide working Library operations.

Tooltips, explainer text, and guided UI samples help visitors understand how the app works. A short video, GIF, or animation may showcase an app area—for instance, the Home Pocket Companion preview flicking through the games to show visitors what is there. This is a presentation sequence, not a functioning copy of the Pocket Companion. When visitors want to perform app tasks, they use ATS-AIOS itself. The website feels like a UI guide or preview without duplicating the app or implying that the website is the real tool.

## Project Boundaries

### Included

- A public explanation and showcase of ATS-AIOS as the main AllTheScripts product.
- Evidence and examples from relevant games, tools, systems, and development work that help explain ATS-AIOS.
- Information that helps an individual or team building with AI understand the problem ATS-AIOS addresses and the value of a directed process.
- Honest communication of current capability, maturity, limitations, and development progress.
- The possibility that ATS-AIOS may become a product people can buy, while its eventual form and commercial model remain undecided.

### Intentionally Not Included

- Treating games, systems, or progress reporting as unrelated, co-equal products that displace ATS-AIOS as the main website focus.
- Reproducing the ATS-AIOS app’s operational tools or suggesting that website explainers perform real app tasks.
- Embedding a working copy of an app feature such as the Pocket Companion in the website; its website depiction is explanatory media only.
- Publishing the app’s actual workspace folder tree or internal file paths as the visitor-facing navigation.
- Claiming ATS-AIOS guarantees bug-free code, prevents every inconsistency, or always produces a finished product.
- Promising a sale, release date, price, licensing model, or specific commercial package before those decisions are made.
- Returning to a tutorial or course platform as the site’s central purpose; the inherited site audit records that older direction as superseded.
- Publishing placeholder sections or unsupported claims as available work.

## Session or Progression Shape

A visitor arrives through the ATS-AIOS overview or a direct link to an app area, follows app-like navigation to an explainer such as Library or Home’s Pocket Companion, and learns its purpose and how to use the corresponding part of the real app. Tooltips and short media provide context; the Pocket Companion preview can cycle through games to show what is available without running the tool. Traceable game examples show the development method at work. The visitor can continue exploring or move to the real ATS-AIOS app to perform the task. The website should not require a fixed sequence.

## Platform and Constraints

- The existing site is a framework-free static website in a GitHub Pages-compatible repository using `allthescripts.uk`. This is inherited implementation context; whether it remains a defining constraint is still open.
- The current site uses root-relative routes and expects to be served from the custom-domain root.
- The inherited site work records mobile, keyboard, reduced-motion, accessibility, and truthful-status concerns as important quality expectations. Their exact requirements belong in Design.
- No publication, hosting-setting, or repository change is authorized by this Idea Brief.

## Concept Risks and Challenges

- **The product can be difficult to explain:** ATS-AIOS has stages, agents, and governance; the website must convey the practical benefit without overwhelming a first-time visitor with internal detail.
- **Audience breadth may blur the message:** “anyone trying to build” includes solo makers, teams, and people with different levels of experience. The primary audience and first use case may need focus.
- **The evidence must be credible:** examples should distinguish work actually guided by ATS-AIOS from inherited projects or hypothetical demonstrations.
- **The capability list can become stale:** ATS-AIOS will evolve, so public summaries need traceable source definitions and a review/update route.
- **The app-like site can be mistaken for the real app:** label previews and explainers clearly, and direct operational use to the app.
- **The guide can expose internal structure by accident:** translate app areas into user-facing explanations without publishing actual workspace paths or folder listings.
- **Capability descriptions can overstate the current system:** source components describe responsibilities and procedures, while project documents and runtime evidence show how far those capabilities have been applied or verified.
- **Claims must stay proportionate:** ATS-AIOS can help surface gaps and improve direction, but cannot guarantee correctness or remove all rework.
- **Commercial potential is uncertain:** the idea may later be sold, but the viable form, intended buyer, and product boundary have not been established.
- **Supporting sections may regain equal weight:** games and other features should reinforce ATS-AIOS rather than pull the site back toward a broad portfolio.

## Decisions Requiring ATS-AIOS Lead Director Review

| Decision | Why it matters | Recommendation, if any |
|---|---|---|
| Who should the website speak to first: individual builders, teams, or both? | The first audience affects the problem statement and examples. | Recommendation: start with individual builders who use AI coding tools and want more direction; explain that the approach can also support teams. |
| What should visitors be invited to do now? | The site’s main call to action depends on ATS-AIOS’s current maturity. | Recommendation: initially invite visitors to understand and follow the system’s development; add a try/adopt action only when there is a ready offering. |
| Which projects and tools can credibly demonstrate ATS-AIOS in use? | Past or unrelated work should not be presented as evidence that it was built through ATS-AIOS. | Select examples with accurate provenance as the system develops. |
| Should static, root-hosted publishing remain a project constraint? | Current implementation assumes a custom-domain root and may shape future options. | No recommendation; decide whether this is an Idea-level boundary or a later Design choice. |

## Questions Carried into Design

- How should the website explain ATS-AIOS’s stages and agent roles to a first-time visitor?
- Which real project examples best demonstrate idea refinement, cross-checking, and reduced inconsistency, and what evidence supports those claims?
- How should visitors distinguish ATS-AIOS itself, the AllTheScripts projects developed with it, and the wider website?
- What should the initial visitor action be at the product’s current maturity?
- How should the site communicate current capability, limitations, and any future availability?
- How should capability-page entries be refreshed when agents, skills, standards, templates, or sub-agents change?
- How should public entries link to supporting evidence while respecting what is suitable to publish?
- How should the page distinguish defined capabilities, use in project documents, and implementation validation?
- Which real app areas should have a website explainer first, and what is each area actually for?
- How should the app-like navigation, tooltips, and UI previews explain the app without duplicating operational functions or exposing workspace folders?
- Which real app areas should be shown with a recording, GIF, or animation, and how should each visual make clear that it is illustrative rather than an active tool?
- How should the website show the handoff from an explainer to the real ATS-AIOS app?
- What navigation and interaction patterns make the product explanation clear across devices and access needs?

## Approval

| Field | Value |
|---|---|
| ATS-AIOS Lead Director decision | Pending |
| Decision date | Pending |
| Approved scope | None; this is a review draft. |

---

## Readiness Finding

The concept is now coherent: AllTheScripts presents ATS-AIOS as its main product, explains how it gives direction to AI-assisted development, and uses games, systems, and progress as supporting parts and evidence. A future sale is an option if the system develops into a suitable product, not a current promise. The first audience, initial visitor action, credible examples, and lasting platform constraint still need confirmation. The brief remains **Needs Review** until the key choices are settled or explicitly left open for Design.
