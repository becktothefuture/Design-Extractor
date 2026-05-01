---
id: M6
source: https://pacomepertant.com
extract_id: pacomepertant-portfolio
category: performance-responsiveness
captured_media_path: mobile-scroll-spiral.webm
viewport: 390 x 844
device_class: mobile
capture_tool: Playwright CLI video recording
timing_basis: estimated
duration: approximately 3s capture
confidence: medium
created_at: 2026-05-01
---

# Moment: Mobile Spiral Scroll Attempt

![Mobile spiral scroll attempt](mobile-scroll-spiral.webm)

## Trigger / Action

Use wheel scroll on the mobile-sized spiral view.

## What Happens

The page remains at `scrollY: 0` with document height equal to viewport height, while the cropped WebGL field remains visible.

## Timing / Duration

Estimated; no normal document scrolling was measured in this state.

## Evidence Boundary

- What this media proves: the mobile home spiral is viewport-contained in this captured state.
- What this media does not prove: all touch gestures or internal canvas gesture handling.

## Aesthetic Effect

The cropped spiral feels immersive and poster-like rather than page-like.

## Technical Clues

DOM evaluation returned `scrollHeight: 844`, `bodyHeight: 844`, and `scrollY: 0` at 390 x 844.

## Reuse Notes

Provide a visible list mode and avoid trapping touch users in a decorative canvas.
