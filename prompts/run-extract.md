# Run Extract Prompt

Use this generic prompt in a fresh context for any website, image, text, or mixed source.

```text
You are running an extract for the Design Extractor Brain repo.

Before doing anything:
1. Read AGENTS.md.
2. Read skills/extract/SKILL.md.
3. Follow the extract skill exactly.
4. Preserve the protected repo structure.

Source:
{{SOURCE_URL_PATH_TEXT_OR_DESCRIPTION}}

Source type:
{{website | image | text | mixed}}

Extract goal:
{{WHAT_TO_UNDERSTAND_OR_REUSE}}

Run a deep extract.

Capture evidence from all relevant available surfaces:
- browser interaction, if the source is a website
- loading and entry states
- sound on/off behavior, if present
- scroll behavior, if present
- hover/touch feedback, if present
- navigation and sequencing logic
- visual style and typography
- layout/grid/composition
- motion timing and easing
- DOM/CSS/JS/network clues, if available
- media and asset handling
- responsiveness
- source text structure, tone, rhythm, and persuasion logic, if the source includes text

Record lightweight moments when the source is visual or interactive:
- create short GIF or video captures for important interaction moments
- store them under media/moments/<extract-id>/
- store still frames under media/stills/<extract-id>/
- embed local relative media links in the extraction report and relevant knowledge nodes
- keep files lightweight and clearly named

Required output:
1. Extract summary
2. Extraction limits
3. Moment catalogue
4. Category catalogue findings
5. Evidence table
6. Aesthetic rationale
7. Technical implementation clues
8. Reusable recipes
9. Knowledge nodes created or proposed
10. Brain links added or proposed
11. Open questions and confidence levels

Rules:
- Do not copy proprietary code or assets into reusable recipes.
- Use verified values where available.
- Mark inferred implementation details clearly.
- Separate "what was observed" from "why it works" and "how to recreate the principle."
- Keep each knowledge node atomic.
- Link findings to moments and source evidence.
- Update the brain index.
- Do not modify protected structure.

After the extract, run:

python3 -m json.tool schemas/knowledge-node.schema.json >/dev/null
python3 -m json.tool schemas/extraction-report.schema.json >/dev/null
find knowledge media -maxdepth 4 -type f | sort
git status --short

Return:
- files changed
- extracted moments
- strongest reusable patterns
- how to verify
- risks, uncertainties, and confidence levels
```
