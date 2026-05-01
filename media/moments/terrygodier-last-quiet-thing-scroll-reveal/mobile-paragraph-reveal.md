---
id: M4
source: https://www.terrygodier.com/the-last-quiet-thing
extract_id: terrygodier-last-quiet-thing-scroll-reveal
category: performance-responsiveness
captured_media_path: mobile-paragraph-reveal.webm
viewport: 390 x 844
device_class: mobile
capture_tool: Playwright CLI video recording
timing_basis: css-derived
duration: approximately 2.6s capture
confidence: medium
created_at: 2026-05-01
---

# Moment: Mobile Paragraph Reveal

![Mobile paragraph reveal](mobile-paragraph-reveal.webm)

## Trigger / Action

Scroll from the mobile hero into the article body.

## What Happens

The same block reveal pattern appears on mobile. The decorative grain layer is static SVG noise rather than the desktop canvas.

## Timing / Duration

CSS-derived reveal transition remains 0.5s ease-out.

## Evidence Boundary

- What this media proves: mobile keeps the scroll-reveal rhythm.
- What this media does not prove: touch inertia on physical devices.

## Aesthetic Effect

The article still feels paced on a narrow screen, while avoiding extra animated canvas cost.

## Technical Clues

Runtime check found no fixed canvas on mobile and did find a fixed SVG noise background.

## Reuse Notes

Keep the reveal distance small on mobile and simplify decorative layers.
