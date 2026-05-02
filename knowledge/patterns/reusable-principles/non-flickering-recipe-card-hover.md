---
id: non-flickering-recipe-card-hover
title: Non-Flickering Recipe Card Hover
type: pattern
status: active
category: reusable-principles
source: https://www.weareathleats.com
source_url: https://www.weareathleats.com/recipes
source_label: Athleats recipe grid
capture_status: verified
primary_media: media/moments/athleats-recipe-card-hover/recipe-card-hover-in-out.gif
preview_media: media/moments/athleats-recipe-card-hover/home-carousel-active-scale.gif
preview_poster: media/stills/athleats-recipe-card-hover/home-carousel-desktop.png
summary: Keep recipe-card text steady by animating only the image and overlay layer.
public_description: >-
  A card hover where the image reacts, lifts, and reveals small controls while the title and metadata stay fixed in place.
public_why: >-
  It gives the pointer a premium response without making the label shimmer, jump, or rewrap. The user keeps a stable reading anchor while the visual layer does the expressive work.
recipe_steps:
  - Build the card as a stable outer shell with separate media and text layers.
  - Put images, badges, and utility overlays inside the media layer.
  - Keep title, description, price, and metadata outside any transformed parent.
  - On hover or focus, move only the media layer by a few pixels and fade overlays in.
  - Avoid changing card dimensions, text wrapping, line height, or text opacity during hover.
  - On touch, make the overlay static or remove it because hover is not reliable.
code_recipe: |
  .card {
    display: grid;
    gap: 0.75rem;
    text-decoration: none;
  }

  .card__media {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    transform: translateY(0);
    transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .card__media img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
  }

  .card__overlay {
    position: absolute;
    inset: auto 0 0;
    opacity: 0;
    transform: translateY(6px);
    transition:
      opacity 180ms ease,
      transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .card:hover .card__media,
  .card:focus-visible .card__media {
    transform: translateY(-4px);
  }

  .card:hover .card__overlay,
  .card:focus-visible .card__overlay {
    opacity: 1;
    transform: translateY(0);
  }

  .card__body {
    /* No transform here. This is what prevents text flicker. */
  }
extract_id: athleats-recipe-card-hover
aliases:
  - stable text card hover
  - card hover without text shimmer
  - image-only lift card pattern
retrieval_terms:
  - avoid text flicker on hover scale
  - non flickering card hover
  - recipe card hover animation
  - transform layer separation card
applies_to:
  - recipe grids
  - product listing cards
  - article cards
  - image-first browse surfaces
tags:
  - hover
  - cards
  - motion
evidence_refs:
  - E1
  - E2
  - E3
  - E4
moment_refs:
  - M1
direct_evidence: >-
  Athleats moves the media wrapper and fades absolute overlays while the card title and metadata stay outside the transformed layer.
interpretation: >-
  The reusable principle is layer separation: transform media, not text-bearing card ancestors.
aesthetic_role: >-
  The effect feels premium because it gives pointer feedback without disturbing the user's reading anchor.
technical_clues: >-
  Stable outer card; transformed image frame; absolute overlay panel; untransformed sibling text block; touch simplification; reduced-motion opacity fallback.
reusable_recipe: >-
  Build cards with a separate media layer and text layer, animate `translateY` and opacity only, and never scale the ancestor that contains live text.
related_nodes:
  - id: isolated-media-layer-recipe-hover
    relationship: supports
  - id: short-lift-overlay-reveal-card-token
    relationship: supports
  - id: touch-simplified-card-hover
    relationship: supports
  - id: hover-preview-title-list
    relationship: variant-of
confidence: high
evidence_quality: strong
confidence_rationale: Supported by browser state, source CSS, Webflow action list values, and recorded media.
lifecycle_note: Initial reusable pattern from Athleats recipe hover extract.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-01
updated_at: 2026-05-01
---

# Non-Flickering Recipe Card Hover

## Direct Evidence

Supported by the Athleats source node and three findings from this extract.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E1 | browser-observed | Recipe grid hover | Text remains stable while media lifts. | Full rendering pipeline internals | high |
| E2 | js-derived | Webflow hover actions | Exact action targets, durations, and easing labels | Original source component names | high |
| E3 | css-derived | Recipe card CSS | Text and media layers are structurally separated. | Every content variant | high |
| E4 | browser-observed | Mobile viewport | Hover-only overlay is simplified away on mobile. | Physical-device touch behavior | medium |

## Interpretation

Text flicker often appears when a whole card, or an ancestor containing text, is scaled or translated at fractional values during hover. Athleats avoids that class of issue in the recipe grid by keeping the text in a stable sibling layer.

## Aesthetic Role

The hover feels precise because the image reacts while the title remains trustworthy. The user can keep reading without the label shifting or shimmer-compensating.

## Technical Clues

Component anatomy:

| Part | Behavior |
| --- | --- |
| outer card | Layout only; no transform. |
| link/media frame | Contains image and overlay controls; receives translateY. |
| image | Full-frame, object-fit cover. |
| macro/save overlays | Absolute in media frame; opacity reveal. |
| title/details | Sibling below media frame; no transform. |

## Reusable Recipe

1. Keep live text outside transformed ancestors.
2. Move only the media wrapper by a small distance, such as `-0.25rem`.
3. Reveal utility overlays with opacity rather than layout changes.
4. Make hover-out faster than hover-in.
5. On touch, remove the hover-only layer or make it static and nonessential.
6. For `prefers-reduced-motion`, remove travel and keep a short opacity transition.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

The home carousel can scale cards because it is a different interaction model: one active slide is readable, inactive details are hidden, and vertical detail space is reserved. Do not generalize that carousel scale to dense hover grids.
