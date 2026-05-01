---
id: short-lift-overlay-reveal-card-token
title: Short Lift Overlay Reveal Card Token
type: finding
status: active
category: motion-choreography
source: https://www.weareathleats.com
extract_id: athleats-recipe-card-hover
aliases:
  - 0.25rem card lift
  - recipe overlay fade token
  - short hover lift
retrieval_terms:
  - card hover 0.25rem lift
  - recipe macro overlay fade
  - hover out faster than hover in
applies_to:
  - recipe cards
  - food cards
  - image cards
tags:
  - motion
  - hover
  - opacity
  - easing
evidence_refs:
  - E1
  - E2
moment_refs:
  - M1
direct_evidence: >-
  Webflow action list `Recipe - Hover In` moves `.recipe-img-wrapper` to `-0.25rem` over 600ms with `outExpo` and fades overlays to opacity 1; hover out returns the wrapper over 300ms and fades overlays over 200ms.
interpretation: >-
  The hover is tuned to enter softly and leave quickly, so discovery feels gentle but pointer exit does not lag.
aesthetic_role: >-
  The motion reads as a small, useful nudge rather than a decorative bounce.
technical_clues: >-
  Lift distance `-0.25rem`; lift-in `600ms outExpo`; lift-out `300ms outExpo`; overlay-in `600ms cubic-bezier(0.6, 0.6, 0, 1)`; overlay-out `200ms cubic-bezier(0.6, 0.6, 0, 1)`.
reusable_recipe: >-
  Pair a small media translate with opacity-only overlay reveal; make exit shorter than entry.
related_nodes:
  - id: isolated-media-layer-recipe-hover
    relationship: refines
  - id: non-flickering-recipe-card-hover
    relationship: supports
confidence: high
evidence_quality: strong
confidence_rationale: Values are derived from the inspected Webflow interaction bundle and confirmed at runtime.
lifecycle_note: Initial active finding from Athleats extraction.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-01
updated_at: 2026-05-01
---

# Short Lift Overlay Reveal Card Token

## Direct Evidence

E2 provides the strongest evidence for the motion values. E1 and M1 confirm the visible effect.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E1 | browser-observed | `/recipes` hover state | The wrapper reaches about -4px and overlays become visible. | Authored easing name | high |
| E2 | js-derived | Webflow IX2 action lists `a-74` and `a-75` | Target selectors, durations, easing labels, and values | Non-minified source names | high |

## Interpretation

The timing is asymmetric: hover-in is longer and more elegant; hover-out is shorter and practical. That makes the UI feel responsive when the pointer leaves.

## Aesthetic Role

The card signals interactivity without becoming springy or noisy.

## Technical Clues

Treat the lift and the overlay reveal as separate channels. The lift gives physical response; opacity reveals information.

## Reusable Recipe

Use this as a token preset for card grids:

| Token | Value | Notes |
| --- | --- | --- |
| lift distance | `-0.25rem` | Keep below text-jitter territory. |
| lift in | `600ms outExpo` | Soft entry. |
| lift out | `300ms outExpo` | Fast release. |
| overlay in | `600ms cubic-bezier(0.6, 0.6, 0, 1)` | Matches the calm reveal. |
| overlay out | `200ms cubic-bezier(0.6, 0.6, 0, 1)` | Clears quickly. |

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

Reduced-motion reuse should remove the translate and keep a short opacity-only reveal.
