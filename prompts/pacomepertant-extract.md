# Website Extract Prompt: pacomepertant.com

Use this prompt only after the agnostic baseline repo has been created.

```text
You are running an extract for the Design Extractor Brain repo.

Before doing anything:
1. Read AGENTS.md.
2. Read skills/extract/SKILL.md.
3. Follow the extract skill exactly.
4. Preserve the protected repo structure.

Source:
https://pacomepertant.com

Extract goal:
Understand why this website feels satisfying and how its design, sound, scrolling, loading, interaction, motion, media, and project-to-project logic work together. Capture both aesthetic principles and implementation-ready clues so another bot could reuse the patterns without copying the site.

Run a deep website extract.

Capture evidence from:
- browser interaction
- loading and entry states
- sound on/off behavior
- scroll behavior
- hover/touch feedback
- project navigation and transitions
- visual style and typography
- layout/grid/composition
- motion timing and easing
- DOM/CSS/JS/network clues
- media and asset handling
- responsiveness

Record lightweight moments:
- create short GIF or video captures for important interaction moments
- store them under media/moments/<extract-id>/
- embed them in the extraction report and relevant knowledge nodes
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
9. Knowledge nodes created
10. Brain links added
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
