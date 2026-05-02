# AGENTS.md

## Required First Step

Every agent and sub-agent must read this file before doing any work in this repo.

Every extraction must use the repo-local `extract` skill at `skills/extract/SKILL.md`.

## Product Model

The extraction system is the evidence engine. Keep it rigorous, detailed, and structured.

The public product is the design pattern library one layer above that evidence engine:

- `knowledge/patterns/` is the primary library surface.
- `knowledge/sources/`, `knowledge/findings/`, and `media/` are the proof trail behind each pattern.
- Public pages should present patterns, not the extraction machinery.
- The site flow should be simple: search by keyword or tag, open a pattern, understand what was captured, then use the technical section to recreate it.
- Do not surface internal categories as public navigation. Categories are for repo organization and evidence classification only.
- Public search uses one to five tags per pattern. Tags should be human-searchable terms such as `hover`, `cards`, `motion`, `scroll`, `editorial`, `photography`, `product`, `portfolio`, or `navigation`.
- Public pattern media must be real captured evidence: screenshots, JPG/PNG crops, GIFs, WebM, or video. Do not use SVG diagrams or generated placeholder illustrations as public pattern media.
- Keep public copy designer-friendly first. Put implementation detail below the simple explanation.
- Keep source attribution clear with `source_label`, `source_url` where available, and `capture_status`.

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

## Public Pattern Requirements

Every extract that contributes reusable design value must create or update one public pattern node in `knowledge/patterns/`, unless the work explicitly only strengthens an existing pattern.

Pattern frontmatter must include:

- `type: pattern`
- `status`
- `source_label`
- `source_url` when available
- `capture_status`
- `primary_media`
- `summary`
- `tags` with one to five entries

Run `node scripts/validate-pattern-library.mjs` before publishing site changes.

## Output Format

When proposing or completing changes, list:

1. Files changed
2. What changed
3. How to verify
4. Risks, assumptions, or confidence limits
