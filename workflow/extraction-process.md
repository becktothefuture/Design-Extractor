# Extraction Process

The extraction process converts a source into linked reusable knowledge.

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
11. Create atomic knowledge nodes.
12. Link nodes into the brain.
13. Update the index.
14. Validate schemas and structure.

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
