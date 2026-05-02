# Extraction Process

The extraction process converts a source into linked reusable knowledge, then promotes the useful design idea into the public pattern library.

The mental model is:

```text
source -> evidence -> findings -> pattern -> public page
```

`knowledge/sources/`, `knowledge/findings/`, and `media/` are the evidence engine. `knowledge/patterns/` is the product layer people browse.

## Process

1. Read `AGENTS.md`.
2. Read `skills/extract/SKILL.md`.
3. Assign an `extract_id`.
4. Inspect existing knowledge for related nodes.
5. Capture source evidence.
6. Record moments and stills where useful.
7. Classify findings with the category catalogue.
8. Separate direct evidence from interpretation.
9. Derive implementation clues.
10. Write reusable recipes.
11. Promote the strongest reusable idea into one public pattern page.
12. Run the reuse readiness gate.
13. Create atomic knowledge nodes.
14. Link nodes into the brain.
15. Update the index.
16. Validate schemas, pattern requirements, and site structure.

## Evidence Standard

Each finding should identify how it was established:

- `browser-observed`
- `screenshot-observed`
- `recording-observed`
- `dom-derived`
- `css-derived`
- `js-derived`
- `network-derived`
- `text-derived`
- `visual-estimated`
- `inferred`

Use stable evidence refs such as `E1`, `E2`, and `M1`.

Every evidence item must record:

- evidence ref
- method
- source URL/path/text reference
- capture context, including viewport, device, tool, account/access state, and interaction state where relevant
- `captured_at` date
- media path if a screenshot, GIF, video, or still supports the claim
- observation
- what the evidence proves and what it does not prove
- confidence

Claims about exact implementation details require verified source evidence. Estimated values must be labeled `estimated`. Inferred implementation details must be labeled `inferred`. Unavailable surfaces must be recorded as `not inspected` or `not available`, never guessed.

Confidence should be assigned per claim where possible:

- `high`: directly observed or source-derived, with stable evidence such as DOM/CSS/JS, recording, screenshot, or repeated browser observation.
- `medium`: visually observed but estimated, partial, device-specific, or not independently confirmed.
- `low`: inferred from behavior, naming, style, or incomplete evidence.

## Moment Standard

Use a moment when movement, timing, interaction, or sequencing is central to the finding.

Moment files should be:

- short
- lightweight
- named by category and action
- embedded in Markdown with local relative paths
- linked from relevant nodes
- documented with viewport, device class, trigger, duration, capture tool if known, and whether timing is measured or estimated
- treated as evidence only, not reusable asset material
- based on real captured media for public pattern previews; do not use SVG diagrams or generated placeholder illustrations as public pattern media

Example:

```markdown
![Menu open moment](../../media/moments/example-extract/menu-open.gif)
```

## Interaction Standard

For interactive sources, decompose important interactions into:

- trigger
- user intent
- pre-state
- feedback
- transition
- settled state
- interruption/cancel state
- failure or unavailable state, where observable

Tie emotional effects to concrete evidence such as delay, easing, scale, contrast, sound, copy tone, spatial rhythm, or input latency.

Describe scroll feel, motion feel, audio feel, and interaction feel with timing, rhythm, friction, affordance, and perceived responsiveness. Mark timing as measured, estimated, or unknown.

## Reuse Readiness Gate

Before an extract is complete, test its strongest recipes against this question:

> Could another capable agent recreate the intended behavior or feeling from this repo evidence without reopening the original source?

Mark each major recipe:

- `pass`: enough evidence, values, states, and caveats exist to reuse it.
- `needs-work`: reusable direction exists, but important values, states, media, or edge cases are missing.
- `blocked`: the recipe depends on unavailable evidence or unverifiable implementation detail.

If a recipe is `needs-work` or `blocked`, keep related nodes `provisional`, record missing evidence, and add the blocker to the report's open questions.

## Public Pattern Standard

Every extract with reusable value should create or update one primary public pattern in `knowledge/patterns/`.

Public pattern pages should answer, in this order:

- What did we capture?
- When would I use it?
- Why does it work?
- How do I recreate it?
- What evidence supports it?

Use simple designer-facing language first. Put exact implementation details, timing, accessibility notes, and risks below the explanation.

Public pattern frontmatter must include:

- `type: pattern`
- `status`
- `source_label`
- `source_url` when available
- `capture_status`
- `primary_media`
- `summary`
- `tags` with one to five entries

Public tags are retrieval handles, not the internal category model. Use concrete terms someone would search for, such as `hover`, `cards`, `motion`, `scroll`, `editorial`, `photography`, `product`, `portfolio`, or `navigation`.

Run:

```bash
node scripts/validate-pattern-library.mjs
cd site && npm run build && npm run check:links
```
