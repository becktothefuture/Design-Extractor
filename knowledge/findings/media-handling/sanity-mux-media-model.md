---
id: sanity-mux-media-model
title: Sanity And Mux Media Model
type: finding
status: active
category: media-handling
source: https://pacomepertant.com
extract_id: pacomepertant-portfolio
aliases:
  - Sanity image payload
  - Mux portfolio videos
  - optimized remote media
retrieval_terms:
  - Sanity CDN image URLs
  - Mux playback IDs
  - Nuxt payload project media
applies_to:
  - portfolio CMS
  - media-rich project pages
  - video case study sites
tags:
  - sanity
  - mux
  - images
  - video
  - payload
evidence_refs:
  - E5
  - E15
moment_refs:
  - M7
  - M8
direct_evidence: >-
  The Nuxt payload includes project slugs, descriptions, Sanity image asset refs, Mux video asset/playback metadata, social links, and showreel metadata.
interpretation: >-
  The portfolio uses a reusable content model that separates project data from presentation.
aesthetic_role: >-
  Consistent media sizing and optimized image URLs help the playful interface remain responsive.
technical_clues: >-
  Sanity CDN URLs include `w=512` or `w=1024&auto=format`; payload includes Mux playback IDs and project slugs.
reusable_recipe: >-
  Model projects with title, slug, year, description, thumbnail, styleframes, video metadata, and external case URL.
related_nodes:
  - id: sequential-project-detail-loop
    relationship: prerequisite-for
  - id: webgl-spiral-project-index
    relationship: prerequisite-for
confidence: high
evidence_quality: strong
confidence_rationale: Network and payload evidence directly verify the content model and media URLs.
lifecycle_note: Initial active finding.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-01
updated_at: 2026-05-01
---

# Sanity And Mux Media Model

## Direct Evidence

E5/E15 document remote media and project metadata.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E5 | network-derived | Payload | Project and media data exists | CMS editing permissions | high |

## Interpretation

Data-driven media enables the same projects to power spiral, list, hover preview, and detail page.

## Aesthetic Role

Optimized media lets rich visuals appear quickly enough to feel responsive.

## Technical Clues

Use a typed project schema with optimized thumbnail/styleframe transforms.

## Reusable Recipe

Build one content model and project it into multiple UI modes.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

CDN cache behavior was not inspected.
