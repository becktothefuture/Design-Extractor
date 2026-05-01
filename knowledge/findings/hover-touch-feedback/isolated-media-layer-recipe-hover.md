---
id: isolated-media-layer-recipe-hover
title: Isolated Media Layer Recipe Hover
type: finding
status: active
category: hover-touch-feedback
source: https://www.weareathleats.com
extract_id: athleats-recipe-card-hover
aliases:
  - media-only card hover
  - recipe image lift hover
  - stable text card hover
retrieval_terms:
  - recipe card hover text does not flicker
  - hover image wrapper lift
  - card hover without scaling text
applies_to:
  - recipe grids
  - product cards
  - media-first cards
tags:
  - hover
  - card
  - image
  - text-stability
evidence_refs:
  - E1
  - E2
  - E3
moment_refs:
  - M1
direct_evidence: >-
  Runtime hover inspection showed `.recipe-img-wrapper` translating up by about 4px while `.recipe-heading` remained transform-free and stationary.
interpretation: >-
  The text avoids flicker because the readable label is not inside the transformed layer.
aesthetic_role: >-
  The card feels responsive while the title stays optically calm and easy to read.
technical_clues: >-
  Keep the moving media layer and absolute overlay controls inside the link/media wrapper; keep the title and details in a sibling content block outside that wrapper.
reusable_recipe: >-
  Animate only the image wrapper and image-bound overlays; leave live text outside transformed ancestors.
related_nodes:
  - id: athleats-recipe-card-hover
    relationship: evidenced-by
  - id: non-flickering-recipe-card-hover
    relationship: supports
confidence: high
evidence_quality: strong
confidence_rationale: Supported by browser computed styles, CSS structure, Webflow action targets, stills, and recording.
lifecycle_note: Initial active finding from Athleats extraction.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-01
updated_at: 2026-05-01
---

# Isolated Media Layer Recipe Hover

## Direct Evidence

E1, E2, E3, and M1 document the recipe-grid card hover.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E1 | browser-observed | `/recipes` desktop hover | Image wrapper moves and macro overlay fades; title does not transform. | Browser rasterization internals | high |
| E2 | js-derived | Webflow IX2 action lists | Hover targets and timing values | Original Webflow author intent | high |
| E3 | css-derived | Recipe card CSS | Text block is outside the moving wrapper | Every CMS edge variant | high |

## Interpretation

The anti-flicker behavior is primarily structural. Athleats does not ask the browser to scale or translate the title text during hover; it moves the image wrapper and fades overlays inside that wrapper.

## Aesthetic Role

The card gains affordance without making the reading line wobble. That is why the effect feels polished even though the motion amplitude is small.

## Technical Clues

Use a stable card container, a separate transformed media frame, and a separate text block. Avoid `transform: scale()` on an ancestor that contains live text.

## Reusable Recipe

Use this for dense browse grids where text legibility matters more than dramatic card motion.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

This finding is distinct from the home carousel, where slide scale is part of a centered active-state system.
