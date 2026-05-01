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
- `inferred`

Claims about exact implementation details require verified source evidence. Inferred details must be labeled.

## Moment Standard

Use a moment when movement, timing, interaction, or sequencing is central to the finding.

Moment files should be:

- short
- lightweight
- named by category and action
- embedded in Markdown with local relative paths
- linked from relevant nodes

Example:

```markdown
![Menu open moment](../../media/moments/example-extract/menu-open.gif)
```
