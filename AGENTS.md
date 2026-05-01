# AGENTS.md

## Required First Step

Every agent and sub-agent must read this file before doing any work in this repo.

Every extraction must use the repo-local `extract` skill at `skills/extract/SKILL.md`.

## Work Style

- Be pragmatic and specific.
- Prefer minimal, concrete changes over broad rewrites.
- Inspect source evidence before writing conclusions.
- Separate direct evidence, interpretation, and implementation inference.
- Include aesthetic detail and technical detail.
- Capture timing, easing, layout, interaction states, media/audio clues, DOM/CSS/JS clues, and responsive behavior where available.
- Mark confidence levels.
- Keep outputs structured, concrete, and reusable.
- Never claim exact implementation details unless verified.
- Do not copy proprietary source code or assets into reusable recipes.

## Sub-Agent Rules

- Sub-agents must read this file and `skills/extract/SKILL.md` before starting.
- Sub-agents must return findings in the repo extraction structure.
- Sub-agents must state evidence, inference, confidence, and open questions.
- Sub-agents must not modify protected structure.

## Protected Structure

Do not rename or move these top-level directories unless the user explicitly asks to change the system architecture:

- `prompts/`
- `skills/`
- `workflow/`
- `schemas/`
- `templates/`
- `knowledge/`
- `media/`

New extracts must add content inside the correct protected folders.

## Output Format

When proposing or completing changes, list:

1. Files changed
2. What changed
3. How to verify
4. Risks, assumptions, or confidence limits
