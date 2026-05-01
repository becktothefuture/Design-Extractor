---
id: M7
source: https://pacomepertant.com
extract_id: pacomepertant-portfolio
category: project-sequencing
captured_media_path: project-open-transition.webm
viewport: 1280 x 720
device_class: desktop
capture_tool: Playwright CLI video recording
timing_basis: estimated
duration: approximately 3s capture
confidence: medium
created_at: 2026-05-01
---

# Moment: Project Open Transition

![Project open transition](project-open-transition.webm)

## Trigger / Action

Click `Paths of life` in list mode.

## What Happens

The route changes to `/projects/paths-of-life` and displays a project detail layout with play prompt, description, case link, and styleframes.

## Timing / Duration

Estimated. CSS project enter uses `.65s` opacity/transform with a `.2s` delay.

## Evidence Boundary

- What this media proves: project list items route into detail pages with animated continuity.
- What this media does not prove: browser history focus restoration or video playback.

## Aesthetic Effect

The transition keeps selection momentum; the portfolio does not feel like a hard page jump.

## Technical Clues

Project route content is backed by payload data and Sanity/Mux media refs.

## Reuse Notes

Animate route-level continuity but keep the detail content semantically navigable.
