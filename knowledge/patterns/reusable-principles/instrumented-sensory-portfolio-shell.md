---
id: instrumented-sensory-portfolio-shell
title: Instrumented Sensory Portfolio Shell
type: pattern
status: active
category: reusable-principles
source: https://pacomepertant.com
extract_id: pacomepertant-portfolio
aliases:
  - sensory portfolio shell
  - instrument-like portfolio chrome
  - control-shell portfolio
retrieval_terms:
  - fixed controls around expressive portfolio
  - sound WebGL hover preview portfolio
  - reusable sensory portfolio pattern
applies_to:
  - motion portfolios
  - creative portfolio websites
  - interactive gallery shells
tags:
  - pattern
  - portfolio
  - sensory-design
  - fixed-chrome
  - reusable-principles
evidence_refs:
  - E1
  - E3
  - E8
  - E11
  - E13
moment_refs:
  - M1
  - M2
  - M3
  - M4
  - M7
direct_evidence: >-
  Multiple findings show a stable portfolio shell with sound entry, mode switch, WebGL index, hover preview list, spring menu, fixed showreel/sound controls, and project detail sequencing.
interpretation: >-
  The reusable abstraction is a portfolio that behaves like an instrument: controls stay fixed while content modes perform in the center.
aesthetic_role: >-
  The pattern creates delight without sacrificing orientation because the visitor always has visible controls and a scannable fallback.
technical_clues: >-
  Combine fixed control chrome, data-driven projects, canvas/list dual mode, consent-first audio, motion tokens, and next-up project detail pages.
reusable_recipe: >-
  Build a fixed sensory shell, expose semantic navigation, add expressive media modes progressively, and ensure reduced-motion/no-audio alternatives.
related_nodes:
  - id: consent-first-sound-entry
    relationship: supports
  - id: webgl-spiral-project-index
    relationship: supports
  - id: hover-preview-title-list
    relationship: supports
  - id: spring-panel-menu
    relationship: supports
  - id: sequential-project-detail-loop
    relationship: supports
confidence: medium
evidence_quality: strong
confidence_rationale: Supported by several verified findings, but audio and WebGL internals remain partially inspected.
lifecycle_note: Initial synthesis-level reusable pattern from the Pacome Pertant extract.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-01
updated_at: 2026-05-01
---

# Instrumented Sensory Portfolio Shell

## Direct Evidence

Supported by the source node and active findings from the extract.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E3 | screenshot-observed | Home spiral | Expressive center mode | Implementation internals | high |
| E9 | screenshot-observed | List hover | Scannable fallback with tactile preview | Touch equivalent | high |
| E11 | css-derived | Menu CSS | Spring control shell | Focus behavior | high |

## Interpretation

A sensory portfolio can stay usable if the expressive layer is framed by stable controls and fallback views.

## Aesthetic Role

The pattern feels premium because the user operates the site through visible controls while the work remains visually alive.

## Technical Clues

Use tokens for color/grid/easing, use data-driven project media, and keep semantic anchors for all navigable content.

## Reusable Recipe

Combine R1-R5 from the extraction report.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

Pattern confidence should improve after audio listening and deeper WebGL inspection.
