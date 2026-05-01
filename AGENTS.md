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
- Explain emotional and psychological effects with concrete evidence, not vague praise.
- Capture micro-interactions as stateful sequences: trigger, pre-state, transition, feedback, settled state, interruption/cancel state, and failure state where observable.
- Describe scroll feel, motion feel, audio feel, and interaction feel with timing, rhythm, friction, affordance, and perceived responsiveness.
- Include reusable frontend anatomy: component structure, state model, event triggers, CSS/layout primitives, animation tokens, responsive variants, accessibility considerations, reduced-motion behavior, and implementation risks.
- Mark confidence levels.
- Use stable evidence refs such as `E1`, `E2`, and `M1`.
- Label estimated values as `estimated`, inferred implementation details as `inferred`, and unavailable surfaces as `not inspected` or `not available`.
- Keep outputs structured, concrete, and reusable.
- Never claim exact implementation details unless verified.
- Do not copy proprietary source code or assets into reusable recipes.

## Sub-Agent Rules

- Sub-agents must read this file and `skills/extract/SKILL.md` before starting.
- Sub-agents must return findings in the repo extraction structure.
- Sub-agents must state evidence, inference, confidence, and open questions.
- Sub-agent claims cannot be marked high confidence unless backed by cited source evidence.
- The coordinating agent owns final node creation, de-duplication, contradiction checks, and index updates.
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
