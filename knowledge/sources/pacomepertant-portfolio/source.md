---
id: pacomepertant-portfolio-source
title: Pacome Pertant Portfolio Source
type: source
status: active
category: reusable-principles
source: https://pacomepertant.com
extract_id: pacomepertant-portfolio
aliases:
  - Pacome Pertant
  - pacomepertant.com
  - motion designer portfolio
retrieval_terms:
  - sound-enabled portfolio
  - WebGL spiral work index
  - hover preview project list
  - expanding spring menu
  - sequential project detail
applies_to:
  - portfolio websites
  - motion design portfolios
  - sensory interactive websites
tags:
  - website
  - portfolio
  - sound
  - webgl
  - nuxt
evidence_refs:
  - E1
  - E3
  - E5
  - E6
  - E13
moment_refs:
  - M1
  - M2
  - M3
  - M4
  - M7
direct_evidence: >-
  Browser, DOM, CSS, network, screenshot, and video evidence captured from https://pacomepertant.com on 2026-05-01.
interpretation: >-
  The site operates as a sensory portfolio shell: audio choice, WebGL browsing, hover previews, spring navigation, and sequential project details work together.
aesthetic_role: >-
  The dark instrument-like chrome and playful center make the portfolio feel tactile, controlled, and motion-native.
technical_clues: >-
  Observed Nuxt asset paths, Lenis classes, Howler/Howl strings, WebGL canvas, Sanity image URLs, Mux metadata, and CSS motion tokens.
reusable_recipe: >-
  Use a stable control shell around expressive project browsing, keep an accessible list fallback, and require explicit sound consent.
related_nodes:
  - id: consent-first-sound-entry
    relationship: evidenced-by
  - id: webgl-spiral-project-index
    relationship: evidenced-by
  - id: hover-preview-title-list
    relationship: evidenced-by
  - id: spring-panel-menu
    relationship: evidenced-by
  - id: instrumented-sensory-portfolio-shell
    relationship: example-of
confidence: medium
evidence_quality: strong
confidence_rationale: >-
  High-quality browser and asset evidence was captured, but audio playback and WebGL internals were not fully verified.
lifecycle_note: Initial source node for the pacomepertant-portfolio extract.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-01
updated_at: 2026-05-01
---

# Pacome Pertant Portfolio Source

## Direct Evidence

See `extraction-report.md` for the full evidence table and captured moments.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E1 | browser-observed | First load desktop entry | Sound choice gates the experience | Audio playback success | high |
| E3 | screenshot-observed | Desktop work index | WebGL spiral is the default visual mode | Shader internals | high |
| E5 | network-derived | Nuxt payload | Data-driven project model | CMS editing workflow | high |

## Interpretation

The source is valuable as a system example of a sensory, motion-native portfolio.

## Aesthetic Role

The site makes browsing feel like operating a small audiovisual instrument.

## Technical Clues

Nuxt-like asset structure, Sanity/Mux content, Lenis, Howler/Howl strings, WebGL canvas, and CSS motion tokens.

## Reusable Recipe

Extract reusable interaction principles only; do not copy site assets, code, or exact visual identity.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

Audio and WebGL internals remain partial-confidence surfaces.
