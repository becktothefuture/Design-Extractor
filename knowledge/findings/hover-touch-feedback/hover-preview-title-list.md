---
id: hover-preview-title-list
title: Hover Preview Title List
type: finding
status: active
category: hover-touch-feedback
source: https://pacomepertant.com
extract_id: pacomepertant-portfolio
aliases:
  - image-backed project hover
  - dimming title list
  - cursor preview list
retrieval_terms:
  - hover project preview
  - sibling dimming list
  - title list with image preview
applies_to:
  - project lists
  - portfolio navigation
  - editorial indexes
tags:
  - hover
  - preview
  - typography
  - list
evidence_refs:
  - E8
  - E9
moment_refs:
  - M3
direct_evidence: >-
  Hovering a list title keeps it white, dims sibling titles, and shows a large project image preview behind the active line.
interpretation: >-
  The list stays fast to scan while giving immediate visual proof of each project.
aesthetic_role: >-
  The interaction feels tactile and confident because text focus and image feedback are synchronized.
technical_clues: >-
  CSS uses `:has(.project p:hover)` sibling dimming, 60rem desktop title type, 40rem under 900px, and preview fade/scale animation.
reusable_recipe: >-
  Build a semantic anchor list with hover/focus preview, sibling dimming, keyboard support, and touch fallback.
related_nodes:
  - id: webgl-spiral-project-index
    relationship: variant-of
  - id: instrumented-sensory-portfolio-shell
    relationship: supports
confidence: high
evidence_quality: strong
confidence_rationale: Screenshot, video, CSS, and DOM evidence directly support the behavior.
lifecycle_note: Initial active finding.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-01
updated_at: 2026-05-01
---

# Hover Preview Title List

## Direct Evidence

E8/E9 and M3 document the hover state.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E8 | css-derived | List CSS | Sibling dimming and type scale | Touch behavior | high |
| E9 | screenshot-observed | Hovered list | Active preview state | Exact motion curve | high |

## Interpretation

The interaction turns a list into a high-bandwidth browser.

## Aesthetic Role

It creates confidence and momentum without hiding navigation.

## Technical Clues

Use `:has` where supported and provide JS/class fallback if needed.

## Reusable Recipe

See R3 in the extraction report.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

Touch preview remains an open question.
