---
id: sequential-project-detail-loop
title: Sequential Project Detail Loop
type: finding
status: active
category: project-sequencing
source: https://pacomepertant.com
extract_id: pacomepertant-portfolio
aliases:
  - next up project page
  - project continuation loop
  - scroll to next project
retrieval_terms:
  - next project teaser
  - sequential portfolio detail
  - project detail scroll flow
applies_to:
  - portfolio case studies
  - project detail pages
  - work galleries
tags:
  - project-page
  - next-up
  - scroll
  - sequencing
evidence_refs:
  - E13
  - E14
moment_refs:
  - M7
  - M8
direct_evidence: >-
  The Paths of life detail page includes play prompt, title, description, case link, styleframes, back-to-home, and next-up teaser for The disease spread on Tiktok.
interpretation: >-
  Project pages are structured to continue browsing instead of ending after one case.
aesthetic_role: >-
  The sequence creates momentum and makes the portfolio feel curated.
technical_clues: >-
  Route content uses payload project data, optimized Sanity images, and project enter/leave CSS transitions.
reusable_recipe: >-
  End each project page with an explicit next-up teaser and preserve an escape route back to the index.
related_nodes:
  - id: instrumented-sensory-portfolio-shell
    relationship: supports
confidence: high
evidence_quality: strong
confidence_rationale: Browser, screenshot, DOM, and video evidence verify the sequence.
lifecycle_note: Initial active finding.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-01
updated_at: 2026-05-01
---

# Sequential Project Detail Loop

## Direct Evidence

E13/E14 and M7/M8 document project detail and next-up behavior.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E14 | dom-derived | Scrolled project page | Next-up section appears below project content | Automatic next-route behavior | high |

## Interpretation

Project detail pages keep the user in a loop of discovery.

## Aesthetic Role

The portfolio feels curated and continuous.

## Technical Clues

Use route transitions and data-derived previous/next project lookup.

## Reusable Recipe

See R5 in the extraction report.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

Video playback controls need further inspection.
