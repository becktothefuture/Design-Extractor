---
id: epic-work-line-portfolio-index
title: EPIC Work Line Portfolio Index
type: source
status: provisional
category: layout-grid-composition
source: https://www.epic.net/en/work/
source_url: https://www.epic.net/en/work/
source_label: EPIC selected works page
capture_status: partial
primary_media: media/stills/epic-work-line-portfolio-index/case-grid-desktop.png
summary: A dark agency work index combines a formal top rule, taxonomy filter bar, and large case-study cards with expressive serif titles.
extract_id: epic-work-line-portfolio-index
aliases:
  - EPIC selected works
  - EPIC portfolio index
retrieval_terms:
  - agency work index
  - case study card grid
  - portfolio taxonomy filters
  - dark editorial portfolio
applies_to:
  - agency portfolio indexes
  - case study libraries
  - work archive pages
tags:
  - website
  - portfolio
  - grid
  - filtering
evidence_refs:
  - E1
  - E2
  - E3
  - E4
moment_refs:
  - M1
direct_evidence: >-
  Browser capture shows a dark selected-works page with a thin horizontal rule, centered section label, language/menu controls, a bottom filter row, and a two-column grid of large image case cards.
interpretation: >-
  The reusable idea is a portfolio index that treats filtering as a composed editorial control surface rather than a utility afterthought.
aesthetic_role: >-
  The dark field and gold rules make the page feel curated and award-like, while the large cards keep the browsing surface visual.
technical_clues: >-
  HTML assets include Works, Video, and CaseCard bundles. The hero video area showed a playback verification failure during capture, so line/3D effects could not be verified in this pass.
reusable_recipe: >-
  Place a restrained masthead and taxonomy bar around oversized case cards. Use a muted page field, thin rules, and high-contrast project images so filtering feels like browsing a gallery catalogue.
related_nodes:
  - id: editorial-filtered-work-index
    relationship: example-of
confidence: medium
evidence_quality: moderate
confidence_rationale: Still captures verify the index/grid system; the user's noted 3D/video effects are only partially inspectable because the embedded video failed verification.
lifecycle_note: Initial Apple Notes batch extraction; keep provisional until motion/video behavior is recaptured.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-02
updated_at: 2026-05-02
---

# EPIC Work Line Portfolio Index

## Direct Evidence

The first viewport captured a "Selected Works" masthead, a dark page background, a wide embedded video region that failed playback verification, and a category row with counts. A lower crop captured a two-column grid of large case-study cards with varied image treatments and expressive serif project names.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E1 | screenshot-observed | Desktop first viewport | Header, rule system, filter row, and video placement. | Does not prove video content. | high |
| E2 | screenshot-observed | Desktop case-grid crop | Large two-column visual card grid and serif titles. | Does not prove hover states. | high |
| E3 | text-derived | HTML metadata | Page is the awarded projects portfolio; assets include Works, Video, and CaseCard bundles. | Does not expose original source code. | medium |
| E4 | browser-observed | Embedded video area | Playback verification failed in the capture environment. | Does not prove the site fails for normal users. | high |

## Interpretation

The "epic 3d and line effects" note could not be fully verified, but the current page still provides a reusable portfolio-index pattern: a formal, editorial frame around work-card browsing.

## Aesthetic Role

The dark grey field, thin warm rules, and small uppercase section label slow the page down. The work cards then provide the visual variety.

## Technical Clues

The page ships separate bundles for Works, Video, and CaseCard. The capture did not inspect exact CSS grid values or hover states.

## Reusable Recipe

Use a two-layer index: a precise editorial shell with section label and filters, then large image cards with strong typographic project titles. Avoid making filters look like generic pills; align them to the page rule so they feel part of the composition.

## Contradictions / Lifecycle

No contradictions recorded. This node is provisional because the video/3D behavior was not available in the capture environment.

## Extraction Notes

A follow-up headed browser capture should test video playback, menu behavior, and card hover states.
