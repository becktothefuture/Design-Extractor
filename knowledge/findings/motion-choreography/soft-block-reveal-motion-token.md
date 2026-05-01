---
id: soft-block-reveal-motion-token
title: Soft Block Reveal Motion Token
type: finding
status: active
category: motion-choreography
source: https://www.terrygodier.com/the-last-quiet-thing
extract_id: terrygodier-last-quiet-thing-scroll-reveal
aliases:
  - soft fade translate reveal
  - 24px article reveal
  - cubic out block reveal
retrieval_terms:
  - opacity transform 0.5s ease out
  - translateY 24px reveal
  - scale 0.95 reveal
applies_to:
  - text blocks
  - section headings
  - editorial visual blocks
tags:
  - motion
  - opacity
  - translate
  - easing
evidence_refs:
  - E2
  - E3
  - E4
moment_refs:
  - M1
  - M2
direct_evidence: >-
  Runtime styles show `opacity 0`, `translateY(24px)`, 0.5s ease-out transitions, and settled opacity 1/transform 0; JS shows scale mode starts at 0.95.
interpretation: >-
  The motion token is intentionally small, making the article feel polished without turning reading into a spectacle.
aesthetic_role: >-
  The ease-out creates quick readability with a soft final settle.
technical_clues: >-
  Apply opacity and transform only; use `will-change` before reveal and return to auto after activation.
reusable_recipe: >-
  Use 16-24px translate and 0.5s ease-out for body content; reserve scale mode for separators or cards.
related_nodes:
  - id: viewport-progress-reveal-wrapper
    relationship: supports
  - id: calm-editorial-scroll-reveal
    relationship: supports
confidence: high
evidence_quality: strong
confidence_rationale: Built JS, runtime DOM, and recordings align on values and behavior.
lifecycle_note: Initial active finding.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-01
updated_at: 2026-05-01
---

# Soft Block Reveal Motion Token

## Direct Evidence

E2/E3 and M1/M2 document the token.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E3 | dom-derived | Runtime wrapper styles | Hidden and settled states | Every custom graphic detail | high |

## Interpretation

The restrained token is the main reason the effect feels mature.

## Aesthetic Role

Motion is felt as pacing, not decoration.

## Technical Clues

Keep transition properties limited to opacity and transform.

## Reusable Recipe

See R1 in the extraction report.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

Use reduced-motion override in reuse.
