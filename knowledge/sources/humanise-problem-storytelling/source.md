---
id: humanise-problem-storytelling
title: Humanise Problem Storytelling
type: source
status: active
category: typography
source: https://humanise.org/the-problem
source_url: https://humanise.org/the-problem
source_label: Humanise The Problem page
capture_status: captured
primary_media: media/stills/humanise-problem-storytelling/problem-desktop.png
summary: A campaign page uses handwritten typography, paper-like fragments, and tilted media to make urban design criticism feel human and urgent.
extract_id: humanise-problem-storytelling
aliases:
  - Humanise boring buildings
  - The Problem page
retrieval_terms:
  - handwritten campaign page
  - boring buildings storytelling
  - anti-polish editorial page
  - tilted media campaign design
applies_to:
  - advocacy campaigns
  - issue-led editorial pages
  - nonprofit storytelling
tags:
  - website
  - editorial
  - campaign
  - typography
evidence_refs:
  - E1
  - E2
  - E3
  - E4
moment_refs:
  - M1
direct_evidence: >-
  Browser capture shows red handwritten navigation, a handwritten hero line reading "A hundred year catastrophe", rough black texture fragments, and a tilted video card over an off-white background.
interpretation: >-
  The reusable design idea is to make critique feel authored by a person rather than a brand system, using roughness as evidence of urgency.
aesthetic_role: >-
  The handwriting and rotated media introduce human friction, which supports the page's argument against sterile buildings.
technical_clues: >-
  HTML assets are a compact Vite-style index JS/CSS pair. Exact font files, video behavior, and scroll timing were not inspected in this pass.
reusable_recipe: >-
  Pair a restrained off-white canvas with a single loud handwritten accent color, intentionally imperfect media rotation, and sparse collage fragments. Keep the structure readable so roughness feels intentional rather than broken.
related_nodes:
  - id: handwritten-campaign-collage-page
    relationship: example-of
confidence: high
evidence_quality: strong
confidence_rationale: The core visual system is directly visible in desktop/mobile stills; only media playback and animation internals remain unverified.
lifecycle_note: Initial Apple Notes batch extraction on 2026-05-02.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-02
updated_at: 2026-05-02
---

# Humanise Problem Storytelling

## Direct Evidence

The first viewport uses handwritten red type for both navigation and the main statement, paper-texture marks, and a rotated video/image card. The mobile still preserves the handwritten campaign identity.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E1 | screenshot-observed | Desktop first viewport | Handwritten navigation, handwritten headline, collage marks, and tilted media. | Does not prove font source. | high |
| E2 | screenshot-observed | Desktop full-page crop | The rough editorial language continues below the hero. | Does not prove full scroll choreography. | medium |
| E3 | screenshot-observed | Mobile first viewport | The campaign style adapts to mobile. | Does not prove every breakpoint. | medium |
| E4 | text-derived | HTML metadata/assets | The page is a campaign about ending boring buildings and ships compact index JS/CSS assets. | Does not expose source components. | medium |

## Interpretation

The note "Humanise boring buildings" is literal: the page makes the criticism visually human by refusing a polished corporate interface.

## Aesthetic Role

The red handwriting feels urgent because it looks added by hand on top of the page. The tilted media and smudged textures break grid perfection, reinforcing the anti-boring argument.

## Technical Clues

The page is likely a bundled single-page app from `/assets/index-*.js` and `/assets/index-*.css`. Exact animation timing, easing, and video playback were not inspected.

## Reusable Recipe

Use handwriting sparingly but consistently for the campaign voice. Keep body content structured and readable; reserve roughness for headers, active nav markings, media rotation, and marginal texture.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

This extraction focuses on the visual rhetoric of the problem page, not the full campaign site.
