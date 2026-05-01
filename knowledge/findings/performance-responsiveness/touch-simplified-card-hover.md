---
id: touch-simplified-card-hover
title: Touch Simplified Card Hover
type: finding
status: active
category: performance-responsiveness
source: https://www.weareathleats.com
extract_id: athleats-recipe-card-hover
aliases:
  - mobile card hover fallback
  - touch safe recipe card
  - no-hover card simplification
retrieval_terms:
  - recipe hover mobile fallback
  - hide hover overlay on mobile
  - touch card no transform
applies_to:
  - touch recipe grids
  - responsive card grids
  - mobile food browsing
tags:
  - mobile
  - responsive
  - hover
  - touch
evidence_refs:
  - E4
moment_refs: []
direct_evidence: >-
  At a 390px mobile viewport, `.recipe-macros` computed as `display: none`, the first card link remained a square media target, and the media wrapper had no active transform.
interpretation: >-
  The site treats the macro overlay as hover-only utility information and simplifies the mobile card instead of trying to emulate hover.
aesthetic_role: >-
  The mobile card stays clean and easy to scan, with the recipe title/details below the image carrying the browsing task.
technical_clues: >-
  Use breakpoint rules or capability queries to remove hover-only overlays on touch layouts unless the information is essential.
reusable_recipe: >-
  For touch, make the card tap target stable and avoid hover-only transforms; expose essential metadata in always-visible text.
related_nodes:
  - id: isolated-media-layer-recipe-hover
    relationship: variant-of
  - id: non-flickering-recipe-card-hover
    relationship: supports
confidence: medium
evidence_quality: moderate
confidence_rationale: Supported by mobile viewport inspection; physical device touch behavior was not tested.
lifecycle_note: Initial active finding from Athleats extraction.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-01
updated_at: 2026-05-01
---

# Touch Simplified Card Hover

## Direct Evidence

E4 documents the mobile viewport state.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E4 | browser-observed | `/recipes`, 390 x 844 viewport | Macro overlay is hidden and no hover transform is active. | Physical touch behavior on every device | medium |

## Interpretation

Athleats avoids a common mobile failure mode: hover-only utility panels that half-trigger or leave the card visually unstable.

## Aesthetic Role

The mobile layout feels direct. The user gets a large image and stable text without needing to discover hidden hover affordances.

## Technical Clues

Use `@media (hover: hover)` or width/capability rules for hover-only overlays. Keep required content outside hover-only surfaces.

## Reusable Recipe

On touch breakpoints, remove hover transforms or make them purely decorative and nonessential. Use visible title/metadata as the primary information path.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

Physical-device testing remains a confidence limit.
