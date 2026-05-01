---
id: webgl-spiral-project-index
title: WebGL Spiral Project Index
type: finding
status: provisional
category: background-webgl-canvas-svg
source: https://pacomepertant.com
extract_id: pacomepertant-portfolio
aliases:
  - spiral work index
  - WebGL project constellation
  - floating project thumbnails
retrieval_terms:
  - canvas portfolio index
  - WebGL gallery
  - warped project cards
  - spatial work browser
applies_to:
  - portfolio indexes
  - motion design galleries
  - interactive canvas navigation
tags:
  - webgl
  - canvas
  - project-index
  - spatial-navigation
evidence_refs:
  - E3
  - E4
  - E15
moment_refs:
  - M2
  - M6
direct_evidence: >-
  Desktop and mobile screenshots show warped project thumbnails in a spiral-like canvas field; DOM contains a full-viewport `canvas.webgl`.
interpretation: >-
  The default index uses spatial curiosity to communicate motion-design identity before asking the visitor to read.
aesthetic_role: >-
  The constellation makes the portfolio feel alive, cinematic, and exploratory.
technical_clues: >-
  Canvas is fixed, full viewport, opacity-hidden in list/detail states, and populated by optimized Sanity thumbnail requests.
reusable_recipe: >-
  Pair a playful canvas gallery with a semantic list fallback and mode switch; build original geometry and avoid copying assets.
related_nodes:
  - id: hover-preview-title-list
    relationship: variant-of
  - id: instrumented-sensory-portfolio-shell
    relationship: supports
confidence: medium
evidence_quality: strong
confidence_rationale: Canvas output is strongly verified, but shader/camera internals were not inspected.
lifecycle_note: Provisional until implementation internals are inspected or replaced by an original recipe.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-01
updated_at: 2026-05-01
---

# WebGL Spiral Project Index

## Direct Evidence

E3/E4 and M2/M6 show canvas-backed spatial project browsing.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E3 | screenshot-observed | Desktop home | Warped thumbnail constellation exists | Shader internals | high |
| E4 | dom-derived | Home DOM | Full viewport canvas exists | WebGL library | high |

## Interpretation

The canvas makes the work index feel like motion content, not a CMS listing.

## Aesthetic Role

Exploration and depth are established before project reading begins.

## Technical Clues

Use viewport-contained canvas plus list fallback.

## Reusable Recipe

See R2 in the extraction report.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

Do not copy source WebGL implementation.
