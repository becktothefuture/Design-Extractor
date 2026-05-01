---
id: responsive-grain-simplification
title: Responsive Grain Simplification
type: finding
status: active
category: performance-responsiveness
source: https://www.terrygodier.com/the-last-quiet-thing
extract_id: terrygodier-last-quiet-thing-scroll-reveal
aliases:
  - mobile static noise
  - reduced motion grain fallback
  - canvas grain simplification
retrieval_terms:
  - mobile static SVG noise
  - reduced motion canvas fallback
  - article grain performance
applies_to:
  - editorial atmosphere
  - mobile longform pages
  - reduced motion design
tags:
  - performance
  - responsive
  - reduced-motion
  - grain
evidence_refs:
  - E7
  - E8
moment_refs:
  - M4
direct_evidence: >-
  Built JS checks viewport width and `prefers-reduced-motion`; mobile runtime showed no fixed canvas and a fixed SVG noise layer.
interpretation: >-
  The page preserves atmosphere while reducing decorative animation cost on mobile or reduced-motion paths.
aesthetic_role: >-
  The page keeps a textured mood without making mobile reading feel busy.
technical_clues: >-
  Use animated canvas only on larger non-reduced-motion contexts; use static SVG noise or remove the layer otherwise.
reusable_recipe: >-
  Treat decorative motion separately from content reveal and simplify it aggressively on constrained contexts.
related_nodes:
  - id: calm-editorial-scroll-reveal
    relationship: refines
confidence: medium
evidence_quality: moderate
confidence_rationale: JS and mobile runtime evidence are clear for the grain layer; reveal reduced-motion behavior remains unverified.
lifecycle_note: Initial active finding.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-01
updated_at: 2026-05-01
---

# Responsive Grain Simplification

## Direct Evidence

E7/E8 and M4 document the responsive decoration behavior.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E7 | js-derived | Built JS | Grain checks mobile/reduced motion | Reveal wrapper reduced-motion behavior | medium |
| E8 | browser-observed | Mobile runtime | Static noise layer on mobile | Physical touch performance | medium |

## Interpretation

Decorative motion should be optional even when content reveal remains active.

## Aesthetic Role

Static texture maintains tone without competing with the reading flow.

## Technical Clues

Use `matchMedia('(prefers-reduced-motion: reduce)')` and viewport checks.

## Reusable Recipe

Pair content motion with stricter decorative-motion fallbacks.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

Content reveal should still receive a dedicated reduced-motion override in reuse.
