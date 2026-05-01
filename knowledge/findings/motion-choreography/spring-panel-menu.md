---
id: spring-panel-menu
title: Spring Panel Menu
type: finding
status: active
category: motion-choreography
source: https://pacomepertant.com
extract_id: pacomepertant-portfolio
aliases:
  - expanding pill menu
  - instrument menu panel
  - spring navigation panel
retrieval_terms:
  - spring menu expansion
  - pill to panel navigation
  - elastic menu chrome
applies_to:
  - navigation menus
  - portfolio chrome
  - overlay panels
tags:
  - menu
  - spring
  - navigation
  - motion
evidence_refs:
  - E10
  - E11
moment_refs:
  - M4
direct_evidence: >-
  The top-right menu expands from a compact 86.8rem by 48rem pill into a white panel using .9s/1s spring-like dimension transitions.
interpretation: >-
  The menu is treated as a morphing object, not a simple overlay.
aesthetic_role: >-
  The spring expansion creates physicality and makes navigation feel like opening an instrument panel.
technical_clues: >-
  Use width `.9s var(--ease-spring)`, height `1s var(--ease-spring)`, border-radius `.9s ease`, and delayed child fades.
reusable_recipe: >-
  Morph the trigger into the panel, reveal links after the panel is legible, and add robust focus/escape behavior.
related_nodes:
  - id: instrumented-sensory-portfolio-shell
    relationship: supports
  - id: fixed-chrome-responsive-index
    relationship: refines
confidence: high
evidence_quality: strong
confidence_rationale: CSS, screenshot, and video evidence directly support the menu structure and timing.
lifecycle_note: Initial active finding.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-01
updated_at: 2026-05-01
---

# Spring Panel Menu

## Direct Evidence

E10/E11 and M4 document the menu motion.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E11 | css-derived | Menu CSS | Dimension timing and panel sizing | Focus handling | high |

## Interpretation

Navigation is designed as part of the site's tactile motion language.

## Aesthetic Role

The menu feels weighted and satisfying.

## Technical Clues

Use grid-derived panel widths and a single visual object that changes size.

## Reusable Recipe

See R4 in the extraction report.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

Keyboard focus behavior was not deeply inspected.
