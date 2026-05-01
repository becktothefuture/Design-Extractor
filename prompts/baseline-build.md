# Baseline Build Prompt For GPT-5.5

Use this prompt in a fresh context to build or rebuild the agnostic repo baseline.

```text
You are GPT-5.5 acting as a senior repo architect.

Build the baseline for a project called Design Extractor Brain.

The repo is a system for running high-precision design extracts from websites, images, and text. It should work like a growing brain: each extract captures evidence, rationalises it, stores reusable knowledge, links related ideas, and gets better over time.

Do not analyse any specific website in this baseline build. Keep the system source-agnostic.

Instruction hierarchy and operating mode:
- Follow system/developer/user instructions first, then repo AGENTS.md when present, then skills/extract/SKILL.md when present, then workflow docs, then prompts/templates/schemas.
- If rebuilding inside an existing repo, inspect current files before writing. Preserve user changes. Do not delete, rename, or overwrite protected structure unless the user explicitly asked for a destructive rebuild.
- If a required decision would destroy existing work, ask one blocking question. Otherwise choose the smallest sensible implementation and state the assumption.
- Do not analyse a real source during baseline creation. Use examples only as placeholders, never as observed facts.

Memory model requirements:
- Treat the repo as a durable knowledge graph, not a pile of reports.
- Define canonical entities: source, evidence item, moment, finding, pattern, recipe, synthesis, contradiction, and open question.
- Every durable claim must trace back to one or more evidence items.
- Every evidence item must record method, source URL/path, capture context, captured_at date, media path if any, and confidence.
- Findings should be atomic claims. Patterns should be reusable abstractions supported by multiple findings or one very strong finding. Synthesis nodes should reconcile patterns, contradictions, and retrieval pathways.

Create a Git repo if one does not exist.

Create a clear README.md that explains:
- what the repo is
- what an "extract" is
- what a "moment" is
- how the repo grows as a brain
- what inputs are supported: websites, images, text, mixed references
- how knowledge is captured, rationalised, linked, and reused
- how lightweight GIF/video recordings are embedded into Markdown evidence
- how extracts capture human emotion, aesthetic psychology, sensory feel, and perceived quality
- how agents should translate emotion into evidence-backed design rationale
- how reusable frontend recipes should describe structure, states, tokens, motion, responsiveness, accessibility, and failure modes
- how to run a future extract

Create AGENTS.md with strict operating rules:
- Every agent and sub-agent must read AGENTS.md before doing any work.
- Every extraction must use the repo-local extract skill.
- Agents must inspect source evidence before conclusions.
- Agents must separate direct evidence, interpretation, and implementation inference.
- Agents must include aesthetic detail and technical detail.
- Agents must capture timing, easing, layout, interaction states, media/audio clues, DOM/CSS/JS clues where available.
- Agents must explain the emotional and psychological effect of design choices using concrete evidence, not vague praise.
- Agents must capture micro-interactions as stateful sequences: trigger, pre-state, transition, feedback, settled state, interruption/cancel state, and failure state where observable.
- Agents must describe scroll feel, motion feel, audio feel, and interaction feel with timing, rhythm, friction, affordance, and perceived responsiveness.
- Agents must include reusable frontend anatomy: component structure, state model, event triggers, CSS/layout primitives, animation tokens, responsive variants, accessibility considerations, reduced-motion behavior, and implementation risks.
- Agents must mark confidence levels.
- Agents must use stable evidence refs such as E1, E2, and M1.
- Exact implementation claims require verified evidence. Estimated values must say "estimated". Inferred implementation details must say "inferred". Unavailable surfaces must be recorded as "not inspected" or "not available", never guessed.
- Agents must keep outputs structured, concrete, and reusable.
- Agents must never claim exact implementation details unless verified.
- Sub-agents must return findings in the same structure.
- Sub-agents may collect evidence and propose findings, but the coordinating agent owns final node creation, de-duplication, contradiction checks, and index updates.
- Sub-agent claims cannot be marked high confidence unless backed by cited source evidence.
- Do not modify protected repo structure unless the user explicitly asks to change the system architecture.

Create a repo-local skill:
- skills/extract/SKILL.md

The extract skill must define the mandatory extraction workflow:
1. Intake
2. Evidence capture
3. Moment recording
4. Category classification
5. Aesthetic rationale
6. Interaction and sensory decomposition
7. Technical clue extraction
8. Reusable recipe creation
9. Reuse readiness gate
10. Knowledge node creation
11. Brain linking
12. Structure validation

Evidence and claim policy:
- Every finding must use stable evidence refs such as E1, E2, and M1.
- Each evidence ref must record method: browser-observed, screenshot-observed, recording-observed, dom-derived, css-derived, js-derived, network-derived, text-derived, visual-estimated, or inferred.
- Exact implementation claims require verified evidence. Estimated values must say "estimated". Inferred implementation details must say "inferred". Unavailable surfaces must be recorded as "not inspected" or "not available", never guessed.
- Separate observed evidence, interpretation, aesthetic role, technical clues, reusable recipe, confidence, and open questions.

Interaction and sensory decomposition:
- Break key interactions into trigger, user intent, feedback, transition, settled state, and edge states.
- Capture emotional tone: calm, tension, delight, confidence, anticipation, playfulness, luxury, friction, or urgency.
- Tie emotional claims to evidence such as delay, easing, scale, contrast, sound, copy tone, spatial rhythm, or input latency.

Reuse readiness gate:
- Ask whether another capable agent could recreate the intended behavior or feeling from this repo evidence without reopening the original source.
- Mark each major recipe pass, needs-work, or blocked.
- If a recipe does not pass, record missing evidence, implementation ambiguity, or open questions.
- Keep related nodes provisional until the blocker is resolved.

The skill must be explicit that every extract must create or update:
- an extraction report
- one source node
- one or more finding/pattern nodes
- lightweight moment captures when the source is interactive or visual
- an index entry linking the extract to existing knowledge

Create this fixed repo structure:

.
├── AGENTS.md
├── README.md
├── .gitignore
├── prompts/
│   ├── baseline-build.md
│   └── run-extract.md
├── skills/
│   └── extract/
│       └── SKILL.md
├── workflow/
│   ├── extraction-process.md
│   ├── category-catalogue.md
│   ├── brain-structure.md
│   └── protected-structure.md
├── schemas/
│   ├── knowledge-node.schema.json
│   └── extraction-report.schema.json
├── templates/
│   ├── extraction-report.md
│   ├── knowledge-node.md
│   ├── moment.md
│   └── reusable-recipe.md
├── knowledge/
│   ├── _index.md
│   ├── sources/
│   ├── findings/
│   ├── patterns/
│   └── synthesis/
└── media/
    ├── moments/
    └── stills/

Create placeholder .gitkeep files in empty committed directories:
- knowledge/sources/.gitkeep
- knowledge/findings/.gitkeep
- knowledge/patterns/.gitkeep
- knowledge/synthesis/.gitkeep
- media/moments/.gitkeep
- media/stills/.gitkeep

Create .gitignore that ignores OS junk, logs, dependency/build caches, and raw scratch captures, while preserving curated media under media/.

Protected structure rules:
- The top-level folders above are fixed.
- Do not rename protected folders.
- Do not move schemas, templates, prompts, skills, workflow, knowledge, or media.
- New extracts must add content inside the correct folders.
- New categories may be added only through workflow/category-catalogue.md.
- New knowledge branches may be added only if documented in workflow/brain-structure.md.
- Media must be stored under media/moments/<extract-id>/ or media/stills/<extract-id>/.
- Markdown files must embed local relative media links.
- Knowledge nodes must link to related nodes.

Category catalogue must include:
- loading-entry
- sound-interaction-audio
- scroll-navigation
- motion-choreography
- visual-style
- typography
- layout-grid-composition
- project-sequencing
- hover-touch-feedback
- media-handling
- background-webgl-canvas-svg
- content-model
- performance-responsiveness
- reusable-principles

workflow/category-catalogue.md must define each category in plain language and include rules:
- one primary category per node
- secondary categories as tags
- no vague categories such as misc, general, or nice
- split cross-category findings into focused linked nodes

Knowledge nodes use Markdown with YAML frontmatter:
- id
- title
- type: source | finding | pattern | synthesis
- status: provisional | active | superseded | merged | rejected
- category
- source
- extract_id
- aliases
- retrieval_terms
- applies_to
- tags
- evidence_refs
- moment_refs
- direct_evidence
- interpretation
- aesthetic_role
- technical_clues
- reusable_recipe
- related_nodes
- confidence
- evidence_quality: weak | moderate | strong
- confidence_rationale
- lifecycle_note
- contradiction_refs
- supersedes
- superseded_by
- created_at
- updated_at

Node lifecycle rules:
- New findings start as provisional unless directly verified by strong source evidence.
- Promote to active only when the claim has clear evidence and reusable value.
- Do not delete obsolete knowledge. Mark it superseded, merged, or rejected, and link to the replacement or reason.
- If a node is too broad, split it into smaller nodes and mark the original as superseded.
- If a duplicate is found, keep the stronger node active and mark the weaker node merged.

Contradiction handling:
- Never silently overwrite a conflicting claim.
- Link conflicting nodes with contradicts.
- Record what conflicts, the source contexts, and whether the conflict is open, resolved, or source-specific.
- Downgrade confidence when a claim is contradicted and unresolved.
- Create or update a synthesis node when contradictions reveal a more precise rule.

Confidence rubric:
- high: directly observed or source-derived, with stable evidence such as DOM/CSS/JS, recording, screenshot, or repeated browser observation.
- medium: visually observed but estimated, partial, device-specific, or not independently confirmed.
- low: inferred from behavior, naming, style, or incomplete evidence.
- Confidence must be assigned per claim where possible, not only per report or node.

Retrieval requirements:
- Every node must include aliases, retrieval_terms, category, tags, applies_to, and related_nodes.
- Use terms future agents would actually search for: visual descriptors, interaction names, technical clues, device context, and failure modes.
- Before creating a node, search existing knowledge for category, tags, aliases, and related interaction terms.
- Update knowledge/_index.md with retrieval-friendly summaries, not just file paths.

Moment files must document:
- moment id
- source
- trigger/action
- captured media path
- viewport
- device class
- capture tool if known
- timing basis: measured | estimated | unknown
- what happens
- timing/duration
- what the media proves
- what the media does not prove
- aesthetic effect
- technical clues
- reuse notes
- confidence

Media evidence rules:
- Moment and still files must be referenced from evidence rows, moment files, and related knowledge nodes.
- Each media-backed claim must say what the media proves and what it does not prove.
- Moment files must include capture context: viewport, device class, trigger, duration, capture tool if known, and whether timing is measured or estimated.
- Do not treat a media file as reusable asset material; treat it as evidence only.

The run-extract prompt must require this output:
1. Extract summary
2. Source and limits
3. Captured moments
4. Category catalogue findings
5. Evidence table
6. Interaction and sensory decomposition
7. Aesthetic rationale
8. Technical implementation clues
9. Reusable recipes
10. Reuse readiness gate
11. Knowledge nodes to save
12. Brain links
13. Open questions and confidence levels

The run-extract prompt must ask for:
- emotional tone and aesthetic psychology: what the interface makes the user feel and which concrete choices produce that effect
- micro-interaction anatomy: triggers, states, transitions, feedback, cancellation, disabled/loading/error states
- scroll feel: velocity, damping, snapping, pinned sections, scroll-linked animation, perceived weight, and orientation changes
- motion feel: duration ranges, easing character, stagger logic, transform properties, choreography, and reduced-motion alternatives
- audio feel: trigger timing, layering, volume behavior, mute persistence, emotional role, and accessibility risks
- responsive interaction behavior: what changes across desktop, tablet, mobile, touch, keyboard, and reduced-motion contexts

Every reusable recipe must include:
- Intent: the feeling or behavior the pattern is meant to create
- Anatomy: components, layers, layout regions, and content slots
- State model: default, hover, focus, active, loading, disabled, error, empty, and reduced-motion states where relevant
- Interaction model: triggers, event order, feedback, cancellation, and recovery
- Motion tokens: duration, delay, easing, transform/opacity/filter properties, stagger, and recommended ranges
- Sensory notes: audio, haptics, media, texture, contrast, density, and perceived responsiveness
- Responsive rules: breakpoint behavior, input-mode differences, viewport constraints, and touch adaptations
- Accessibility: keyboard path, focus visibility, reduced-motion behavior, audio mute/persistence, contrast, and readable type
- Failure modes: what breaks the intended feel or usability
- Reuse readiness: pass, needs-work, or blocked, with missing evidence or ambiguity recorded

Add validation instructions:

python3 -m json.tool schemas/knowledge-node.schema.json >/dev/null
python3 -m json.tool schemas/extraction-report.schema.json >/dev/null
test -f AGENTS.md
test -f skills/extract/SKILL.md
test -f templates/extraction-report.md
test -f templates/knowledge-node.md
test -f workflow/category-catalogue.md
find . -maxdepth 4 -type f | sort
git status --short

Validation must check:
- JSON schemas parse.
- Markdown frontmatter uses allowed categories and relationship types.
- Media links resolve locally.
- Node links resolve locally.
- No protected folders were renamed or moved.
- New categories exist in workflow/category-catalogue.md.
- New knowledge branches are documented in workflow/brain-structure.md.

Commit the baseline with:

git add .
git commit -m "Create design extractor brain baseline"

Return:
- files changed
- what changed
- how to verify
- any risks or assumptions
```
