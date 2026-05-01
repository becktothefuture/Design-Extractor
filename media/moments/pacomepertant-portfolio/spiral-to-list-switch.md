---
id: M2
source: https://pacomepertant.com
extract_id: pacomepertant-portfolio
category: background-webgl-canvas-svg
captured_media_path: spiral-to-list-switch.webm
viewport: 1280 x 720
device_class: desktop
capture_tool: Playwright CLI video recording
timing_basis: estimated
duration: approximately 2s capture
confidence: medium
created_at: 2026-05-01
---

# Moment: Spiral To List Switch

![Spiral to list switch](spiral-to-list-switch.webm)

## Trigger / Action

Click the `list` mode button while the spiral view is active.

## What Happens

The active switch state changes and the project presentation moves from a spatial image constellation into a centered vertical title list.

## Timing / Duration

Estimated. CSS evidence shows switch label transitions around `.3s` and WebGL opacity transition `.5s`.

## Evidence Boundary

- What this media proves: the index supports both spatial and scannable modes.
- What this media does not prove: WebGL geometry internals or exact mode-state store.

## Aesthetic Effect

The switch is satisfying because it gives the visitor both playful exploration and quick readability.

## Technical Clues

Canvas is fixed full viewport and hidden by opacity in list mode. Buttons use duplicated labels for vertical text swap.

## Reuse Notes

Build an accessible list as the primary semantic surface, then layer expressive canvas exploration over it.
