---
id: M1
source: https://www.weareathleats.com/recipes
extract_id: athleats-recipe-card-hover
category: hover-touch-feedback
captured_media_path: recipe-card-hover-in-out.webm
viewport: 1280 x 720
device_class: desktop
capture_tool: Playwright CLI video recording
timing_basis: js-derived
duration: approximately 2.2s capture
confidence: high
created_at: 2026-05-01
---

# Moment: Recipe Card Hover In/Out

![Recipe card hover in/out](recipe-card-hover-in-out.webm)

## Trigger / Action

Pointer enters and leaves the first visible recipe card on `/recipes`.

## What Happens

The image wrapper lifts slightly and the macro/save overlay fades in. On pointer exit, the image settles back and the overlay fades out. The title and details below the image do not visibly move.

## Timing / Duration

JS-derived timing: hover-in uses 600ms for the media lift and overlay fade; hover-out returns the media frame over 300ms and fades overlays over 200ms.

## Evidence Boundary

- What this media proves: visible grid-card hover reads as media-only lift plus overlay fade.
- What this media does not prove: exact easing without the inspected Webflow action list.

## Aesthetic Effect

The card feels responsive without making the recipe title shimmer or jump.

## Technical Clues

The media wrapper is the transformed layer. The readable text is a sibling below the wrapper.

## Reuse Notes

Use this as the reference moment for card-hover implementations that need stable text.
