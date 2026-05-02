---
id: lightshiprv-product-parallax
title: Lightship RV Product Parallax
type: source
status: active
category: media-handling
source: https://lightshiprv.com/
source_url: https://lightshiprv.com/
source_label: Lightship homepage
capture_status: captured
primary_media: media/stills/lightshiprv-product-parallax/home-desktop.png
summary: A full-bleed cinematic vehicle scene lets oversized split headlines sit directly over the product and landscape.
extract_id: lightshiprv-product-parallax
aliases:
  - Lightship RV homepage
  - Born for Adventure Built in America
retrieval_terms:
  - cinematic product hero
  - RV parallax landing page
  - split headline over product video
  - full bleed vehicle story
applies_to:
  - vehicle product launches
  - outdoor product landing pages
  - cinematic ecommerce pages
tags:
  - website
  - product
  - parallax
  - video
evidence_refs:
  - E1
  - E2
  - E3
  - E4
moment_refs:
  - M1
direct_evidence: >-
  Desktop capture shows a full-bleed landscape/product scene with the Lightship trailer centered horizontally, navigation overlaid at the top, large split headline text over the media, a bottom progress-like rule, and a scroll cue.
interpretation: >-
  The reusable pattern is to sell a physical product by treating the first viewport as a cinematic still rather than a boxed product module.
aesthetic_role: >-
  The product feels calm and premium because the trailer sits in a believable landscape while the typography is large enough to become part of the scene.
technical_clues: >-
  HTML metadata describes Lightship as an all-electric RV company. Assets include main.css and app.js with cache-busting query strings. Exact parallax mechanics and video timing were not inspected.
reusable_recipe: >-
  Use full-viewport media, overlay minimal chrome, split a large headline around the product, and add a subtle scroll cue/progress line so the user reads the scene as the start of a guided product story.
related_nodes:
  - id: cinematic-product-scene-hero
    relationship: example-of
confidence: high
evidence_quality: strong
confidence_rationale: Desktop/mobile/full-page captures verify the visual structure; exact motion mechanics need a recorded scroll pass.
lifecycle_note: Initial Apple Notes batch extraction on 2026-05-02.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-02
updated_at: 2026-05-02
---

# Lightship RV Product Parallax

## Direct Evidence

The first viewport is dominated by a landscape video/still with the product in the center and two large headline phrases placed left and right over the media. Navigation is minimal and white, and a thin bottom line plus scroll hint signal continuation.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E1 | screenshot-observed | Desktop first viewport | Full-bleed product scene, split headline, overlaid navigation, and scroll cue. | Does not prove parallax timing. | high |
| E2 | screenshot-observed | Desktop full-page crop | Subsequent product/spec sections exist below the hero. | Does not prove scroll interpolation values. | medium |
| E3 | screenshot-observed | Mobile first viewport | The cinematic product-first approach persists on mobile. | Does not prove all device states. | medium |
| E4 | text-derived | HTML metadata/assets | The site is an all-electric RV product homepage and ships main CSS/JS assets. | Does not expose original implementation. | medium |

## Interpretation

The note "Insanely amazing use of 3d and parallax" is partly supported by the captured page, but this pass only verifies the cinematic product story and not exact 3D/parallax mechanics.

## Aesthetic Role

The page feels expensive because the product is not isolated on a white background. It is already in the world the buyer wants to enter.

## Technical Clues

The page ships `assets/styles/main.css` and `assets/scripts/app.js`. Detailed JS inspection and motion capture are follow-ups.

## Reusable Recipe

Start with full-bleed product media. Put the product at the horizon/focal center. Split the main message around the object. Use minimal navigation and a quiet scroll indicator so the next sections feel like a continuation of the scene.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

This extraction promotes the captured cinematic hero pattern; parallax specifics remain medium-confidence.
