# Baseline Build Prompt For GPT-5.5

Use this prompt in a fresh context to build or rebuild the agnostic repo baseline.

```text
You are GPT-5.5 acting as a senior repo architect.

Build the baseline for a project called Design Extractor Brain.

The repo is a system for running high-precision design extracts from websites, images, and text. It should work like a growing brain: each extract captures evidence, rationalises it, stores reusable knowledge, links related ideas, and gets better over time.

Do not analyse any specific website in this baseline build. Keep the system source-agnostic.

Create a Git repo if one does not exist.

Create a clear README.md that explains:
- what the repo is
- what an "extract" is
- what a "moment" is
- how the repo grows as a brain
- what inputs are supported: websites, images, text, mixed references
- how knowledge is captured, rationalised, linked, and reused
- how lightweight GIF/video recordings are embedded into Markdown evidence
- how to run a future extract

Create AGENTS.md with strict operating rules:
- Every agent and sub-agent must read AGENTS.md before doing any work.
- Every extraction must use the repo-local extract skill.
- Agents must inspect source evidence before conclusions.
- Agents must separate direct evidence, interpretation, and implementation inference.
- Agents must include aesthetic detail and technical detail.
- Agents must capture timing, easing, layout, interaction states, media/audio clues, DOM/CSS/JS clues where available.
- Agents must mark confidence levels.
- Agents must keep outputs structured, concrete, and reusable.
- Agents must never claim exact implementation details unless verified.
- Sub-agents must return findings in the same structure.
- Do not modify protected repo structure unless the user explicitly asks to change the system architecture.

Create a repo-local skill:
- skills/extract/SKILL.md

The extract skill must define the mandatory extraction workflow:
1. Intake
2. Evidence capture
3. Moment recording
4. Category classification
5. Aesthetic rationale
6. Technical clue extraction
7. Reusable recipe creation
8. Knowledge node creation
9. Brain linking
10. Structure validation

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

Knowledge nodes use Markdown with YAML frontmatter:
- id
- title
- type: source | finding | pattern | synthesis
- category
- source
- extract_id
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
- created_at
- updated_at

Moment files must document:
- moment id
- source
- trigger/action
- captured media path
- what happens
- timing/duration
- aesthetic effect
- technical clues
- reuse notes
- confidence

The run-extract prompt must require this output:
1. Extract summary
2. Source and limits
3. Captured moments
4. Category catalogue findings
5. Evidence table
6. Aesthetic rationale
7. Technical implementation clues
8. Reusable recipes
9. Knowledge nodes to save
10. Brain links
11. Open questions and confidence levels

Add validation instructions:

python3 -m json.tool schemas/knowledge-node.schema.json >/dev/null
python3 -m json.tool schemas/extraction-report.schema.json >/dev/null
find . -maxdepth 4 -type f | sort
git status --short

Commit the baseline with:

git add .
git commit -m "Create design extractor brain baseline"

Return:
- files changed
- what changed
- how to verify
- any risks or assumptions
```
