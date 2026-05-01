---
id: fixed-chrome-responsive-index
title: Fixed Chrome Responsive Index
type: finding
status: active
category: performance-responsiveness
source: https://pacomepertant.com
extract_id: pacomepertant-portfolio
aliases:
  - mobile fixed portfolio chrome
  - responsive work index
  - fixed controls around canvas
retrieval_terms:
  - mobile spiral portfolio
  - fixed menu mode sound controls
  - responsive list fallback
applies_to:
  - responsive portfolios
  - canvas-backed indexes
  - mobile project navigation
tags:
  - responsive
  - mobile
  - fixed-controls
  - no-scroll-home
evidence_refs:
  - E16
  - E17
moment_refs:
  - M6
direct_evidence: >-
  Mobile captures at 390 x 844 retain fixed logo, mode switch, menu, showreel, and sound controls while spiral and list modes adapt to the narrow viewport.
interpretation: >-
  The site preserves brand/control continuity across viewport sizes instead of replacing the interface with a generic mobile menu.
aesthetic_role: >-
  The mobile site keeps the same instrument-like identity, making the experience feel designed rather than downgraded.
technical_clues: >-
  Mobile CSS changes grid margin to 20rem under 900px and 15rem under 420px; list type falls to 40rem under 900px.
reusable_recipe: >-
  Keep essential controls stable across breakpoints, but ensure canvas has a readable list alternative and touch-safe spacing.
related_nodes:
  - id: spring-panel-menu
    relationship: refines
  - id: webgl-spiral-project-index
    relationship: refines
confidence: high
evidence_quality: strong
confidence_rationale: Mobile screenshots and CSS breakpoint evidence support the finding.
lifecycle_note: Initial active finding.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-01
updated_at: 2026-05-01
---

# Fixed Chrome Responsive Index

## Direct Evidence

E16/E17 and M6 document mobile behavior.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E16 | screenshot-observed | Mobile spiral | Fixed chrome and cropped canvas | All touch gestures | medium |
| E17 | screenshot-observed | Mobile list | Readable mobile list fallback | Hover equivalent | high |

## Interpretation

Responsive behavior protects identity and orientation.

## Aesthetic Role

Mobile still feels like the same designed object.

## Technical Clues

Use smaller grid margins, keep targets visible, and avoid relying on document scroll in canvas mode.

## Reusable Recipe

Design mobile controls first, then allow expressive visuals to crop behind them.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

Touch-specific gestures were not fully explored.
