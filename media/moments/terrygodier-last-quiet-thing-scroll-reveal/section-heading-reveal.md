---
id: M2
source: https://www.terrygodier.com/the-last-quiet-thing
extract_id: terrygodier-last-quiet-thing-scroll-reveal
category: motion-choreography
captured_media_path: section-heading-reveal.webm
viewport: 1280 x 720
device_class: desktop
capture_tool: Playwright CLI video recording
timing_basis: css-derived
duration: approximately 3.4s capture
confidence: high
created_at: 2026-05-01
---

# Moment: Section Heading Reveal

![Section heading reveal](section-heading-reveal.webm)

## Trigger / Action

Scroll into a new article section.

## What Happens

A divider, section heading, and following paragraphs enter in separate blocks. Each block uses the same soft fade/translate primitive, creating a readable cadence rather than one large reveal.

## Timing / Duration

CSS-derived block transition is 0.5s ease-out. The perceived sequence is scroll-paced because each block starts when its own viewport progress crosses the threshold.

## Evidence Boundary

- What this media proves: section transitions are composed from multiple individually observed reveal wrappers.
- What this media does not prove: exact authoring component names beyond the minified JS wrapper function.

## Aesthetic Effect

The section break feels calm and editorial. The page gives the reader a beat before the next idea.

## Technical Clues

Repeated wrappers start at `opacity: 0` and `translateY(24px)`, then settle at opacity 1 and translate 0.

## Reuse Notes

Wrap heading, lead line, and supporting paragraph separately to create rhythm without hard-coded delays.
