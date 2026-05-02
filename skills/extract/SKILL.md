# Extract Skill

Use this skill for every Design Extractor Brain extraction.

An extract is one source analysis run that captures evidence, records moments, classifies findings, creates reusable recipes, and grows the repo brain through linked knowledge nodes.

## Mandatory Workflow

1. Intake
   - Define `extract_id` in kebab case.
   - Identify source type: website, image, text, or mixed.
   - Record source URL/path/text reference and extraction goal.
   - Read existing `knowledge/_index.md` and relevant related nodes before creating new ones.

2. Evidence Capture
   - Capture direct observations before interpretation.
   - Use stable evidence refs such as `E1`, `E2`, and `M1`.
   - For every evidence item, record method, source URL/path/text reference, capture context, `captured_at` date, media path if any, and confidence.
   - Record method for each evidence ref: `browser-observed`, `screenshot-observed`, `recording-observed`, `dom-derived`, `css-derived`, `js-derived`, `network-derived`, `image-observed`, `text-derived`, `visual-estimated`, or `inferred`.
   - Mark exact values as verified, estimated values as `estimated`, inferred implementation as `inferred`, and unavailable surfaces as `not inspected` or `not available`.
   - For websites, inspect browser behavior, screenshots/stills, DOM, CSS, JS/network clues, media, responsiveness, and interaction states where available.
   - For images, inspect composition, palette, typography, subject treatment, texture, lighting, density, and style references.
   - For text, inspect audience, tone, structure, rhythm, vocabulary, claims, sequencing, and persuasion logic.

3. Moment Recording
   - Record short GIF/video moments for visual or interactive behavior.
   - Store moments under `media/moments/<extract-id>/`.
   - Store still frames under `media/stills/<extract-id>/`.
   - Keep media lightweight, named by category and action.
   - Embed local relative media links in reports and relevant nodes.
   - For each media-backed claim, state what the media proves and what it does not prove.
   - Public pattern media must be real captured evidence: screenshot crops, JPG/PNG stills, GIFs, WebM, or video. Do not use SVG diagrams or generated placeholder illustrations as the public pattern media.

4. Category Classification
   - Classify each finding with categories from `workflow/category-catalogue.md`.
   - Do not create categories casually. Add a category only if it is documented in the catalogue.

5. Aesthetic Rationale
   - Explain why the observed behavior feels the way it feels.
   - Tie satisfaction, clarity, rhythm, weight, surprise, calm, friction, or delight to concrete evidence.
   - Avoid vague praise. Emotional claims must cite evidence such as delay, easing, scale, contrast, sound, copy tone, spatial rhythm, or input latency.

6. Interaction And Sensory Decomposition
   - Break key interactions into trigger, user intent, pre-state, feedback, transition, settled state, and edge states.
   - Capture emotional tone: calm, tension, delight, confidence, anticipation, playfulness, luxury, friction, or urgency.
   - Describe scroll feel, motion feel, audio feel, and interaction feel with timing, rhythm, friction, affordance, and perceived responsiveness.

7. Technical Clue Extraction
   - Record verified values such as durations, easing functions, spacing, type scale, layout rules, asset behavior, and event triggers.
   - Mark bundle-derived, DOM-derived, visual-estimated, and inferred details separately.
   - Record unavailable surfaces as `not inspected` or `not available` instead of filling gaps with guesses.

8. Reusable Recipe Creation
   - Convert findings into implementation-ready guidance.
   - Describe principles and build steps without copying proprietary code or assets.
   - Include interaction states, timing ranges, structure, and failure modes.
   - Include component anatomy, state model, event order, motion tokens, responsive variants, accessibility, reduced-motion behavior, and implementation risks where relevant.

9. Public Pattern Promotion
   - Treat extraction reports, source nodes, finding nodes, and media as the evidence engine.
   - Treat `knowledge/patterns/` as the public design library product.
   - Create or update exactly one primary public pattern for the reusable design idea, unless this extract only strengthens an existing pattern.
   - Write the pattern for a designer first: what was captured, when to use it, why it works, and how to recreate it.
   - Put technical implementation detail below the simple explanation.
   - Add `source_label`, `source_url` when available, `capture_status`, `primary_media`, `summary`, and one to five public tags.
   - Use human-searchable tags. Do not expose internal category names as public-facing tags unless the term is also natural to search.
   - Do not publish raw extraction reports, source nodes, finding nodes, categories, or system mechanics as the primary public experience.

10. Reuse Readiness Gate
   - Ask: could another capable agent recreate the intended behavior or feeling from this repo evidence without reopening the original source?
   - Mark each major recipe `pass`, `needs-work`, or `blocked`.
   - If a recipe does not pass, record the missing evidence, implementation ambiguity, or open question.
   - Keep related nodes `provisional` until the blocker is resolved.

11. Knowledge Node Creation
   - Create one source node.
   - Create one or more finding or pattern nodes.
   - Keep each node atomic: one durable idea per node.
   - New findings start as `provisional` unless directly verified by strong source evidence.
   - Do not delete obsolete knowledge. Mark it `superseded`, `merged`, or `rejected`, and link to the replacement or reason.
   - Use `templates/knowledge-node.md`.

12. Brain Linking
   - Link new nodes to the source node, moments, related findings, patterns, and synthesis nodes.
   - Update `knowledge/_index.md`.
   - Mark relationship types clearly.
   - Never silently overwrite a conflicting claim. Link conflicting nodes with `contradicts` and record whether the conflict is open, resolved, or source-specific.
   - Before creating a node, search existing knowledge for category, tags, aliases, and related interaction terms.

13. Structure Validation
   - Preserve the protected structure.
   - Run schema validation commands.
   - Run `node scripts/validate-pattern-library.mjs` for any public pattern or site change.
   - Check that media links and node links resolve locally.
   - Check that new categories are documented in `workflow/category-catalogue.md`.
   - Report files changed, verification, risks, assumptions, and confidence limits.

## Required Extract Artifacts

Every extract must create or update:

- an extraction report under `knowledge/sources/<extract-id>/extraction-report.md`
- one source node under `knowledge/sources/<extract-id>/source.md`
- one or more finding/pattern nodes under `knowledge/findings/` or `knowledge/patterns/`
- one public pattern node under `knowledge/patterns/` or a clearly documented update to an existing public pattern
- lightweight moment captures when the source is interactive or visual
- an index entry in `knowledge/_index.md`

## Required Output Shape

Return:

1. Extract summary
2. Source and limits
3. Captured moments
4. Category catalogue findings
5. Evidence table
6. Aesthetic rationale
7. Technical implementation clues
8. Public pattern created or updated
9. Reusable recipes
10. Reuse readiness gate
11. Knowledge nodes created
12. Brain links added
13. Open questions and confidence levels
