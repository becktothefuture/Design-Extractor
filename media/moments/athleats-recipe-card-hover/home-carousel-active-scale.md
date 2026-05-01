---
id: M2
source: https://www.weareathleats.com
extract_id: athleats-recipe-card-hover
category: motion-choreography
captured_media_path: home-carousel-active-scale.webm
viewport: 1280 x 720
device_class: desktop
capture_tool: Playwright CLI video recording
timing_basis: js-and-css-derived
duration: approximately 4.0s capture
confidence: high
created_at: 2026-05-01
---

# Moment: Home Carousel Active Scale

![Home carousel active scale](home-carousel-active-scale.webm)

## Trigger / Action

The home page recipe carousel advances through its custom autoplay sequence.

## What Happens

The centered active slide scales to full size and opacity while adjacent slides stay smaller and dimmer. Recipe details are visible on the active slide and hidden on inactive slides.

## Timing / Duration

Splide transition speed is 500ms with `cubic-bezier(0.6, 0.6, 0, 1)`. The custom progress interval is 3000ms.

## Evidence Boundary

- What this media proves: carousel cards use centered active-state scaling.
- What this media does not prove: recipe-grid hover behavior.

## Aesthetic Effect

The carousel turns one recipe into a clear focal target while keeping neighboring recipes as context.

## Technical Clues

Inactive slides use reduced opacity and a scaled `.slide-content-wrapper`; active details reserve vertical space to avoid layout jump.

## Reuse Notes

Use this pattern only for one-active-card carousel contexts, not dense grids where every card title should remain stable.
