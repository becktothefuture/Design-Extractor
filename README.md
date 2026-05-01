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
- implementation clues such as timings, easing, DOM/CSS/JS clues, layout values, interaction states, audio/media behavior, and responsive behavior
- reusable recipes that explain how to recreate the principle without copying protected source code or assets

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
