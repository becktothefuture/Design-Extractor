# Design Extractor Brain

Design Extractor Brain is a prompt-led repository for running high-precision design extracts from websites, images, text, and mixed references.

The repo is intended to behave like a growing brain. Each extract captures evidence, records important moments, rationalises what happened, stores reusable knowledge, and links new ideas to prior knowledge so future extracts become easier and sharper.

## Nomenclature

- **Extract**: one analysis run on a website, image, text sample, or mixed reference.
- **Moment**: a short captured interaction or state, stored as lightweight GIF/video evidence.
- **Finding**: a concrete observation tied to source evidence.
- **Pattern**: a reusable design or technical principle learned from findings.
- **Recipe**: implementation-ready guidance another agent can use.
- **Node**: one stored brain memory item.

## What Gets Captured

Every extract should capture both aesthetic and technical detail:

- direct source evidence
- lightweight GIF/video moments for visual or interactive sources
- stills when a static frame communicates the point better
- category-specific findings
- emotional and psychological effects tied to concrete source evidence
- micro-interaction anatomy: trigger, state changes, feedback, timing, cancellation, and settled state
- implementation clues such as timings, easing, DOM/CSS/JS clues, layout values, interaction states, audio/media behavior, and responsive behavior
- reusable recipes that explain how to recreate the principle without copying protected source code or assets

## Evidence Standard

The brain is a durable knowledge graph, not a pile of reports. Every durable claim should trace back to stable evidence refs such as `E1`, `E2`, or `M1`.

- Verified details can be stated directly.
- Estimated details must be labeled `estimated`.
- Inferred implementation details must be labeled `inferred`.
- Uninspected surfaces must be recorded as `not inspected` or `not available`, never guessed.

## Memory Hygiene

Knowledge nodes have a lifecycle: `provisional`, `active`, `superseded`, `merged`, or `rejected`.

Do not delete obsolete knowledge by default. Mark it with the correct lifecycle status, link it to the stronger replacement or contradiction, and keep the graph searchable with aliases, retrieval terms, tags, and related nodes.

## Repo Map

```text
.
├── AGENTS.md
├── README.md
├── prompts/
├── skills/
│   └── extract/
├── workflow/
├── schemas/
├── templates/
├── knowledge/
│   ├── _index.md
│   ├── sources/
│   ├── findings/
│   ├── patterns/
│   └── synthesis/
└── media/
    ├── moments/
    └── stills/
```

The top-level structure is protected. New extracts add content inside the existing folders rather than renaming or moving the system directories.

## Running An Extract

1. Read `AGENTS.md`.
2. Read `skills/extract/SKILL.md`.
3. Use `prompts/run-extract.md` for a generic extract, or a source-specific prompt under `prompts/`.
4. Store reports and source nodes under `knowledge/sources/<extract-id>/`.
5. Store finding and pattern nodes under `knowledge/findings/` and `knowledge/patterns/`.
6. Store moment recordings under `media/moments/<extract-id>/`.
7. Embed local relative media links in the Markdown report and relevant nodes.
8. Update `knowledge/_index.md`.

## Verification

```bash
python3 -m json.tool schemas/knowledge-node.schema.json >/dev/null
python3 -m json.tool schemas/extraction-report.schema.json >/dev/null
find . -maxdepth 4 -type f | sort
git status --short
```
