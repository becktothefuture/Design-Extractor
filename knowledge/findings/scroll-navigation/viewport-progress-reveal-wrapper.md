---
id: viewport-progress-reveal-wrapper
title: Viewport Progress Reveal Wrapper
type: finding
status: active
category: scroll-navigation
source: https://www.terrygodier.com/the-last-quiet-thing
extract_id: terrygodier-last-quiet-thing-scroll-reveal
aliases:
  - scroll reveal wrapper
  - viewport progress animation
  - reveal on visible viewport
retrieval_terms:
  - getBoundingClientRect scroll reveal
  - viewport progress reveal
  - scroll listener reveal wrapper
applies_to:
  - editorial pages
  - longform reading
  - article animation
tags:
  - scroll-navigation
  - viewport
  - reveal
  - progress
evidence_refs:
  - E1
  - E2
  - E5
moment_refs:
  - M1
direct_evidence: >-
  Built JS computes element reveal progress from `getBoundingClientRect()`, viewport height, and scroll events; runtime DOM shows partial opacity/translate states while elements enter view.
interpretation: >-
  The animation is continuous and scroll-position aware rather than a binary IntersectionObserver class toggle.
aesthetic_role: >-
  Continuous progress lets content feel like it is arriving with the reader instead of popping in.
technical_clues: >-
  Use `progress = clamp((vh - (top - offset)) / (vh + height))`, threshold `.15`, range `.15`, cubic-out easing, and per-block wrappers.
reusable_recipe: >-
  Wrap content blocks, compute progress on scroll, ease it, and bind opacity/transform to progress.
related_nodes:
  - id: soft-block-reveal-motion-token
    relationship: supports
  - id: calm-editorial-scroll-reveal
    relationship: supports
confidence: high
evidence_quality: strong
confidence_rationale: Built JS and runtime DOM both support the same mechanism.
lifecycle_note: Initial active finding.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-01
updated_at: 2026-05-01
---

# Viewport Progress Reveal Wrapper

## Direct Evidence

E1/E2 show the computation; E5 shows measured partial reveal state.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E1 | js-derived | Built JS | Progress is computed from viewport geometry | Original source names | high |
| E5 | dom-derived | Runtime at scrollY 1560 | Partial progress state exists | Exact frame timing | high |

## Interpretation

This is the core reusable mechanism behind the page's simple-feeling polish.

## Aesthetic Role

It gives the reader a sense that the article is unfolding at their pace.

## Technical Clues

Use passive scroll listeners or IntersectionObserver plus requestAnimationFrame; avoid layout-heavy recalculation for too many nodes.

## Reusable Recipe

See R1 in the extraction report.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

Reduced-motion handling for this wrapper remains an open question.
