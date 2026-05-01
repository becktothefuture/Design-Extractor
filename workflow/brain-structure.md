# Brain Structure

The brain is a linked Markdown knowledge system supported by local media evidence.

## Fixed Folders

```text
knowledge/
  _index.md
  sources/
  findings/
  patterns/
  synthesis/

media/
  moments/
  stills/
```

## Storage Rules

- Store each extract under `knowledge/sources/<extract-id>/`.
- Store source reports as `knowledge/sources/<extract-id>/extraction-report.md`.
- Store source nodes as `knowledge/sources/<extract-id>/source.md`.
- Store finding nodes under `knowledge/findings/<category>/<node-id>.md`.
- Store pattern nodes under `knowledge/patterns/<category>/<node-id>.md`.
- Store synthesis nodes under `knowledge/synthesis/<topic>/<node-id>.md`.
- Store moments under `media/moments/<extract-id>/`.
- Store stills under `media/stills/<extract-id>/`.

## Link Types

Use these relationship types:

- `supports`
- `contradicts`
- `refines`
- `duplicates`
- `inspired-by`
- `example-of`
- `prerequisite-for`
- `variant-of`
- `evidenced-by`
- `implemented-by`

## Index Rules

Update `knowledge/_index.md` after every extract with:

- extract id
- source
- source type
- date
- created nodes
- captured moments
- strongest reusable patterns
- open questions

## Optimization Rules

After each extract:

- merge duplicate ideas
- split overloaded nodes
- add missing links
- downgrade low-evidence claims
- add tags future agents would search for
