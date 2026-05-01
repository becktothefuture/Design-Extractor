---
id: named-interaction-audio-palette
title: Named Interaction Audio Palette
type: finding
status: provisional
category: sound-interaction-audio
source: https://pacomepertant.com
extract_id: pacomepertant-portfolio
aliases:
  - sound palette
  - hover click audio
  - Howler audio pool
retrieval_terms:
  - named ogg interaction sounds
  - audio feedback palette
  - Howler portfolio sounds
applies_to:
  - sound design portfolios
  - interactive UI audio
  - sensory websites
tags:
  - audio
  - howler
  - ogg
  - accessibility-risk
evidence_refs:
  - E6
  - E7
moment_refs:
  - M5
direct_evidence: >-
  Network requests include ambient, hover, click, spiral, list, tick, longclick, switch, close, menu-link, and smiley `.ogg` files; console warns that the HTML5 audio pool is exhausted.
interpretation: >-
  Audio is designed as a broad interaction feedback layer, but the implementation may create too many HTML5 audio objects.
aesthetic_role: >-
  Sound likely reinforces the site's instrument-like feel, but unverified playback keeps emotional confidence low.
technical_clues: >-
  JS contains Howler/Howl strings and named sound paths; console warnings identify an audio-pool risk.
reusable_recipe: >-
  Use a small named sound map with pooled/reused audio instances, mute persistence, and graceful no-audio fallback.
related_nodes:
  - id: consent-first-sound-entry
    relationship: prerequisite-for
  - id: pacomepertant-portfolio-source
    relationship: evidenced-by
confidence: medium
evidence_quality: moderate
confidence_rationale: Requests and console warnings are verified, but audible playback and mix levels were not directly inspected.
lifecycle_note: Provisional until audio can be listened to and tested across browsers.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-01
updated_at: 2026-05-01
---

# Named Interaction Audio Palette

## Direct Evidence

Audio file requests and console warnings are recorded as E6/E7.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E6 | network-derived | Browser requests | Many named `.ogg` files load | Audible trigger mapping | high |
| E7 | console-observed | Console warnings | Audio pool exhaustion risk | User-facing failure | medium |

## Interpretation

The audio system is ambitious and broad, but needs safeguards in any reuse.

## Aesthetic Role

Audio likely supports playfulness and tactility.

## Technical Clues

Use a bounded Howler pool or single reusable players per sound type.

## Reusable Recipe

Add explicit mute, volume normalization, and reduced-sensory mode.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

Audible sound was not confirmed.
