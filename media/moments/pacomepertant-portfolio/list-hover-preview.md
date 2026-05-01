---
id: M3
source: https://pacomepertant.com
extract_id: pacomepertant-portfolio
category: hover-touch-feedback
captured_media_path: list-hover-preview.webm
viewport: 1280 x 720
device_class: desktop
capture_tool: Playwright CLI video recording
timing_basis: estimated
duration: approximately 3s capture
confidence: medium
created_at: 2026-05-01
---

# Moment: List Hover Preview

![List hover preview](list-hover-preview.webm)

## Trigger / Action

Hover project titles in list mode.

## What Happens

The hovered title stays high contrast, sibling titles dim, and a project image preview appears behind the active title.

## Timing / Duration

Estimated. CSS shows project title opacity transition `.3s`; preview image animation uses `.5s var(--ease-expo-out)`.

## Evidence Boundary

- What this media proves: hover creates active-title focus, sibling dimming, and image-backed preview.
- What this media does not prove: touch equivalent or exact preview-image following algorithm.

## Aesthetic Effect

The moment feels tactile because text focus and visual proof happen together.

## Technical Clues

CSS uses `:has(.project p:hover)` for sibling dimming and cursor image wrappers for preview.

## Reuse Notes

Provide a keyboard/focus equivalent and a tap state on touch devices.
