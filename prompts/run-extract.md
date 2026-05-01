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
- scroll feel: velocity, damping, snapping, pinned sections, scroll-linked animation, perceived weight, and orientation changes
- hover/touch feedback, if present
- emotional tone and aesthetic psychology: what the interface makes the user feel and which concrete choices produce that effect
- micro-interaction anatomy: triggers, states, transitions, feedback, cancellation, disabled/loading/error states
- motion feel: duration ranges, easing character, stagger logic, transform properties, choreography, and reduced-motion alternatives
- audio feel: trigger timing, layering, volume behavior, mute persistence, emotional role, and accessibility risks
- navigation and sequencing logic
- visual style and typography
- layout/grid/composition
- motion timing and easing
- DOM/CSS/JS/network clues, if available
- media and asset handling
- responsiveness
- responsive interaction behavior: what changes across desktop, tablet, mobile, touch, keyboard, and reduced-motion contexts
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
6. Interaction and sensory decomposition
7. Aesthetic rationale
8. Technical implementation clues
9. Reusable recipes
10. Reuse readiness gate
11. Knowledge nodes created or proposed
12. Brain links added or proposed
13. Open questions and confidence levels

Rules:
- Do not copy proprietary code or assets into reusable recipes.
- Use verified values where available.
- Mark inferred implementation details clearly.
- Use stable evidence refs such as E1, E2, and M1.
- Exact implementation claims require verified evidence.
- Estimated values must say "estimated".
- Inferred implementation details must say "inferred".
- Unavailable surfaces must be recorded as "not inspected" or "not available", never guessed.
- Separate "what was observed" from "why it works" and "how to recreate the principle."
- Keep each knowledge node atomic.
- Link findings to moments and source evidence.
- Update the brain index.
- Do not modify protected structure.

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

Run the reuse readiness gate before considering the extract complete:
- Ask whether another capable agent could recreate the intended behavior or feeling from this repo evidence without reopening the original source.
- Mark each major recipe pass, needs-work, or blocked.
- If it does not pass, record missing evidence or ambiguity and keep related nodes provisional.

After the extract, run:

python3 -m json.tool schemas/knowledge-node.schema.json >/dev/null
python3 -m json.tool schemas/extraction-report.schema.json >/dev/null
test -f AGENTS.md
test -f skills/extract/SKILL.md
test -f templates/extraction-report.md
test -f templates/knowledge-node.md
test -f workflow/category-catalogue.md
find knowledge media -maxdepth 4 -type f | sort
git status --short

Return:
- files changed
- extracted moments
- strongest reusable patterns
- how to verify
- risks, uncertainties, and confidence levels
```
