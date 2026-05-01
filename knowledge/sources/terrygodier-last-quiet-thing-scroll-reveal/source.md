---
id: terrygodier-last-quiet-thing-source
title: Terry Godier Last Quiet Thing Source
type: source
status: active
category: scroll-navigation
source: https://www.terrygodier.com/the-last-quiet-thing
extract_id: terrygodier-last-quiet-thing-scroll-reveal
aliases:
  - Terry Godier The Last Quiet Thing
  - terrygodier.com scroll reveal
  - Last Quiet Thing article
retrieval_terms:
  - editorial scroll reveal
  - viewport progress animation
  - calm article animation
  - scroll into viewport effect
applies_to:
  - editorial websites
  - longform articles
  - narrative microsites
tags:
  - website
  - article
  - scroll-reveal
  - nextjs
evidence_refs:
  - E1
  - E2
  - E3
  - E4
moment_refs:
  - M1
  - M2
  - M3
  - M4
direct_evidence: >-
  Browser, screenshot, video, DOM, network, CSS, and built JS evidence captured from the article page on 2026-05-01.
interpretation: >-
  The source is valuable as a focused example of subtle viewport-progress reveals for longform editorial pacing.
aesthetic_role: >-
  The article feels calm and carefully paced because content blocks enter softly as the reader reaches them.
technical_clues: >-
  Built Next.js chunks expose a reveal wrapper that maps `getBoundingClientRect()` progress to opacity and transform.
reusable_recipe: >-
  Use per-block viewport-progress reveals with a small offset, cubic-out easing, and generous layout spacing.
related_nodes:
  - id: viewport-progress-reveal-wrapper
    relationship: evidenced-by
  - id: calm-editorial-scroll-reveal
    relationship: example-of
confidence: high
evidence_quality: strong
confidence_rationale: Direct runtime and built-JS evidence supports the scroll reveal mechanics.
lifecycle_note: Initial source node for the scroll reveal nugget.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-01
updated_at: 2026-05-01
---

# Terry Godier Last Quiet Thing Source

## Direct Evidence

See the extraction report for evidence refs E1-E9 and moments M1-M4.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E1 | js-derived | Built JS chunk | Viewport-progress calculation | Original source component names | high |
| E3 | dom-derived | Runtime wrapper styles | Hidden/settled states | All custom sections | high |
| E4 | recording-observed | Scroll recording | Reader-visible reveal effect | Isolated code mechanics | high |

## Interpretation

The page turns basic scroll reading into a measured sequence.

## Aesthetic Role

Subtle movement creates care and pacing without becoming ornamental noise.

## Technical Clues

Next.js built chunks, Tailwind-style utility classes, inline styles, and scroll listener based progress.

## Reusable Recipe

Use the pattern in `calm-editorial-scroll-reveal`.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

The article prose and assets are not reusable material.
