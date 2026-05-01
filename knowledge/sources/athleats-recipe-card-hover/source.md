---
id: athleats-recipe-card-hover
title: Athleats Recipe Card Hover
type: source
status: active
category: hover-touch-feedback
source: https://www.weareathleats.com
extract_id: athleats-recipe-card-hover
aliases:
  - Athleats recipe hover
  - non-flickering recipe card text
retrieval_terms:
  - recipe card hover
  - text flicker avoidance
  - image wrapper lift
  - macro overlay reveal
applies_to:
  - recipe indexes
  - food cards
  - media-first card grids
tags:
  - website
  - Webflow
  - Splide
  - hover
evidence_refs:
  - E1
  - E2
  - E3
  - E4
  - E5
  - E6
moment_refs:
  - M1
  - M2
direct_evidence: >-
  The inspected site exposes a recipe grid at /recipes, a home recipe carousel, Webflow IX2 hover action lists named Recipe - Hover In/Out, and Splide carousel setup code.
interpretation: >-
  The recipe-grid hover avoids text flicker by animating only the image wrapper and absolute overlay controls, leaving the title and metadata outside the transformed layer.
aesthetic_role: >-
  The interaction feels clean because the food image lifts by a very small amount while useful macro data fades in without disturbing the readable card label.
technical_clues: >-
  Verified Webflow action list moves .recipe-img-wrapper to -0.25rem over 600ms with outExpo and fades .recipe-macros/.bookmark-recipe-item to opacity 1. Hover out returns the wrapper over 300ms and fades overlays over 200ms.
reusable_recipe: >-
  Structure cards with a stable outer item, a linked image wrapper, absolute overlays inside the media wrapper, and a separate text block outside the transformed layer. Animate translateY and opacity only; avoid scaling text-bearing ancestors.
related_nodes:
  - id: isolated-media-layer-recipe-hover
    relationship: evidenced-by
  - id: non-flickering-recipe-card-hover
    relationship: example-of
confidence: high
evidence_quality: strong
confidence_rationale: Browser behavior, computed styles, source CSS, Webflow interaction bundle, and captured media all support the core implementation.
lifecycle_note: Active source node for the 2026-05-01 Athleats extraction.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-01
updated_at: 2026-05-01
---

# Athleats Recipe Card Hover

## Direct Evidence

Athleats serves the recipe index at `https://www.weareathleats.com/recipes` and the home recipe carousel at `https://www.weareathleats.com/#latest-recipes`. The inspected implementation is Webflow-generated and includes Webflow IX2 hover action lists for recipe cards plus a custom Splide carousel script.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E1 | browser-observed | Desktop 1280x720, `/recipes`, first visible recipe card | Recipe image wrapper lifts on hover while text below remains in place. | Does not prove original authoring intent. | high |
| E2 | js-derived | Webflow bundle action lists `a-74` and `a-75` | Hover in/out targets `.recipe-img-wrapper`, `.recipe-macros`, and `.bookmark-recipe-item` with specific durations/easing. | Does not expose unminified Webflow project structure. | high |
| E3 | css-derived | Webflow CSS for recipe card classes | Card text is outside `.recipe-img-wrapper`; overlay macros are absolute inside the media wrapper. | Does not prove all CMS variants share content. | high |
| E4 | browser-observed | Mobile 390x844, `/recipes` | Macro overlay is hidden on mobile and no hover transform is active. | Does not prove all touch devices behave identically. | medium |
| E5 | js-derived | Home page inline Splide setup | Home carousel scales active slides and hides inactive details with reserved height. | Does not prove carousel was the user's intended hover target. | high |
| E6 | css-derived | Home page embedded Splide CSS | Carousel details reserve vertical space and active/inactive visibility is controlled. | Does not prove anti-aliasing quality on every browser. | high |
| M1 | recording-observed | `media/moments/athleats-recipe-card-hover/recipe-card-hover-in-out.webm` | The hover animation reads as a small media lift plus overlay fade. | Does not prove exact easing by itself. | high |
| M2 | recording-observed | `media/moments/athleats-recipe-card-hover/home-carousel-active-scale.webm` | The home carousel uses centered active-slide emphasis separate from grid hover. | Does not prove hover behavior. | high |

## Interpretation

The clean part is not a text-rendering hack. The recipe-grid hover avoids flicker because the text users read is not in the transformed layer. Only the media block moves, and the newly revealed macro overlay is absolute inside that block and fades from opacity 0 to 1.

## Aesthetic Role

The card feels responsive but not jumpy: a -0.25rem lift is enough to acknowledge intent, while the title, time, and calories remain anchored.

## Technical Clues

- Webflow action list `a-74`, `Recipe - Hover In`: `.recipe-img-wrapper` moves from `0rem` to `-0.25rem` over `600ms`, easing `outExpo`; `.recipe-macros` and `.bookmark-recipe-item` fade from `0` to `1` over `600ms`.
- Webflow action list `a-75`, `Recipe - Hover Out`: `.recipe-img-wrapper` returns to `0rem` over `300ms`, easing `outExpo`; overlays fade to `0` over `200ms`.
- CSS structure: `.recipe-img-wrapper` is `position: relative; overflow: hidden; border-radius`; `.recipe-macros` is `position: absolute`; `.recipe-content-btm`, `.recipe-heading`, and `.recipe-details-wrapper` are siblings outside the media wrapper.
- Mobile: at 390px width the macro overlay computed as `display: none`; the wrapper had no active transform.

## Reusable Recipe

Use this when a card needs hover polish without text shimmer:

1. Keep the outer card and text block untransformed.
2. Put only the image and image-bound overlays inside a `position: relative; overflow: hidden` media wrapper.
3. Animate the media wrapper with a small `translateY`, not a scale on the whole card.
4. Fade overlays independently with opacity.
5. On touch/mobile, either keep overlays visible as static content or hide them and rely on the card detail text below.

## Contradictions / Lifecycle

No contradictions found. This source overlaps with `hover-preview-title-list` only at the broad hover category level; the implementation principle is different.

## Extraction Notes

The home carousel also has card scaling, but it is not the same as the recipe-grid hover. It is captured separately because it explains another non-flicker tactic: reserve detail space and expose one active reading target.
