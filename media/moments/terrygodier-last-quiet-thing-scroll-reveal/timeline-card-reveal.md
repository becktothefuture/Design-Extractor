---
id: M3
source: https://www.terrygodier.com/the-last-quiet-thing
extract_id: terrygodier-last-quiet-thing-scroll-reveal
category: motion-choreography
captured_media_path: timeline-card-reveal.webm
viewport: 1280 x 720
device_class: desktop
capture_tool: Playwright CLI video recording
timing_basis: css-derived
duration: approximately 3.4s capture
confidence: medium
created_at: 2026-05-01
---

# Moment: Emphasis Graphic Reveal

![Timeline card reveal](timeline-card-reveal.webm)

## Trigger / Action

Scroll into a more graphic mid-article emphasis section.

## What Happens

The large word treatment and surrounding micro-elements appear as a staged visual beat, while the next body paragraph below uses the same fade/translate reveal.

## Timing / Duration

Mixed. The common block reveal is CSS-derived at 0.5s ease-out; internal graphic sequencing is visually observed and partially JS-derived.

## Evidence Boundary

- What this media proves: the article escalates from simple paragraph reveals to special visual beats while preserving the same scroll rhythm.
- What this media does not prove: exact internal sequencing of every icon/letter in the graphic.

## Aesthetic Effect

The graphic moment feels like a quiet punctuation mark: it interrupts the text enough to reset attention, but remains restrained.

## Technical Clues

The inspected JS includes several progress ranges for nested rows and graphic elements, indicating scroll-progress orchestration rather than a single CSS class.

## Reuse Notes

Use the base reveal primitive for most blocks, then reserve custom progress ranges for one or two narrative emphasis moments.
