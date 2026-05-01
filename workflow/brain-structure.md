# Brain Structure

The brain is a linked Markdown knowledge system supported by local media evidence.

Treat the repo as a durable knowledge graph, not a pile of reports. Canonical entities are source, evidence item, moment, finding, pattern, recipe, synthesis, contradiction, and open question.

## Canonical Entities

- `source`: the website, image, text, or mixed reference being analysed.
- `evidence item`: one cited observation with method, source URL/path/text reference, capture context, `captured_at` date, media path if any, and confidence.
- `moment`: a lightweight media-backed interaction or visual state with a documented trigger, viewport, timing basis, proof boundary, and reuse notes.
- `finding`: an atomic evidence-backed claim about a source.
- `pattern`: a reusable abstraction supported by multiple findings or one very strong finding.
- `recipe`: implementation-ready guidance derived from findings or patterns, with states, tokens, responsive behavior, accessibility, and failure modes.
- `synthesis`: a node that reconciles patterns, contradictions, variants, and retrieval pathways.
- `contradiction`: a recorded conflict between nodes, with context and open/resolved/source-specific status.
- `open question`: a missing evidence or implementation issue that limits confidence or reuse readiness.

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

## Node Lifecycle

Use these statuses:

- `provisional`: new or partially verified knowledge.
- `active`: verified enough to reuse.
- `superseded`: replaced by a clearer or stronger node.
- `merged`: duplicate knowledge merged into another node.
- `rejected`: kept for audit history but not reusable.

Rules:

- New findings start as `provisional` unless directly verified by strong evidence.
- Promote to `active` only when the claim has clear evidence and reusable value.
- Do not delete obsolete knowledge. Mark it with a lifecycle status and link to the replacement or reason.
- If a node is too broad, split it into smaller nodes and mark the original as `superseded`.
- If a duplicate is found, keep the stronger node active and mark the weaker node `merged`.

## Contradiction Handling

- Never silently overwrite a conflicting claim.
- Link conflicting nodes with `contradicts`.
- Record what conflicts, the source contexts, and whether the conflict is open, resolved, or source-specific.
- Downgrade confidence when a claim is contradicted and unresolved.
- Create or update a synthesis node when contradictions reveal a more precise rule.

## Retrieval Rules

- Every node must include aliases, retrieval terms, category, tags, applies-to contexts, and related nodes.
- Use terms future agents would search for: visual descriptors, interaction names, technical clues, device context, and failure modes.
- Before creating a node, search existing knowledge for category, tags, aliases, and related interaction terms.
- Update `knowledge/_index.md` with retrieval-friendly summaries, not just file paths.

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
