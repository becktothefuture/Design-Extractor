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
   - For websites, inspect browser behavior, screenshots/stills, DOM, CSS, JS/network clues, media, responsiveness, and interaction states where available.
   - For images, inspect composition, palette, typography, subject treatment, texture, lighting, density, and style references.
   - For text, inspect audience, tone, structure, rhythm, vocabulary, claims, sequencing, and persuasion logic.

3. Moment Recording
   - Record short GIF/video moments for visual or interactive behavior.
   - Store moments under `media/moments/<extract-id>/`.
   - Store still frames under `media/stills/<extract-id>/`.
   - Keep media lightweight, named by category and action.
   - Embed local relative media links in reports and relevant nodes.

4. Category Classification
   - Classify each finding with categories from `workflow/category-catalogue.md`.
   - Do not create categories casually. Add a category only if it is documented in the catalogue.

5. Aesthetic Rationale
   - Explain why the observed behavior feels the way it feels.
   - Tie satisfaction, clarity, rhythm, weight, surprise, calm, friction, or delight to concrete evidence.

6. Technical Clue Extraction
   - Record verified values such as durations, easing functions, spacing, type scale, layout rules, asset behavior, and event triggers.
   - Mark bundle-derived, DOM-derived, visual-estimated, and inferred details separately.

7. Reusable Recipe Creation
   - Convert findings into implementation-ready guidance.
   - Describe principles and build steps without copying proprietary code or assets.
   - Include interaction states, timing ranges, structure, and failure modes.

8. Knowledge Node Creation
   - Create one source node.
   - Create one or more finding or pattern nodes.
   - Keep each node atomic: one durable idea per node.
   - Use `templates/knowledge-node.md`.

9. Brain Linking
   - Link new nodes to the source node, moments, related findings, patterns, and synthesis nodes.
   - Update `knowledge/_index.md`.
   - Mark relationship types clearly.

10. Structure Validation
   - Preserve the protected structure.
   - Run schema validation commands.
   - Report files changed, verification, risks, assumptions, and confidence limits.

## Required Extract Artifacts

Every extract must create or update:

- an extraction report under `knowledge/sources/<extract-id>/extraction-report.md`
- one source node under `knowledge/sources/<extract-id>/source.md`
- one or more finding/pattern nodes under `knowledge/findings/` or `knowledge/patterns/`
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
8. Reusable recipes
9. Knowledge nodes created
10. Brain links added
11. Open questions and confidence levels
