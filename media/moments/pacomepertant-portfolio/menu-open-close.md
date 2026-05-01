---
id: M4
source: https://pacomepertant.com
extract_id: pacomepertant-portfolio
category: motion-choreography
captured_media_path: menu-open-close.webm
viewport: 1280 x 720
device_class: desktop
capture_tool: Playwright CLI video recording
timing_basis: css-derived
duration: approximately 2.5s capture
confidence: medium
created_at: 2026-05-01
---

# Moment: Menu Open Close

![Menu open and close](menu-open-close.webm)

## Trigger / Action

Click `menu`, then click the close control.

## What Happens

The top-right pill expands into a white navigation panel, reveals links/socials, then collapses back into the compact pill.

## Timing / Duration

CSS-derived menu wrapper timings include width `.9s var(--ease-spring)` and height `1s var(--ease-spring)`.

## Evidence Boundary

- What this media proves: menu is an expanding panel interaction, not a route change.
- What this media does not prove: keyboard trapping or Escape behavior.

## Aesthetic Effect

The panel feels physical and elastic because the same object grows from control to container.

## Technical Clues

Closed width is 86.8rem and closed height is 48rem; open height is `calc(100dvh - var(--grid-margin)*2)`.

## Reuse Notes

Delay child link reveal until the panel shape is legible; add focus management in reuse.
