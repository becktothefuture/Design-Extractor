---
id: consent-first-sound-entry
title: Consent-First Sound Entry
type: finding
status: active
category: loading-entry
source: https://pacomepertant.com
extract_id: pacomepertant-portfolio
aliases:
  - sound gate
  - audio consent entry
  - enter with sound
retrieval_terms:
  - loading entry with sound choice
  - no sound entry
  - sensory consent gate
applies_to:
  - sound-enabled websites
  - portfolios
  - interactive landing states
tags:
  - loading-entry
  - sound
  - consent
  - loader
evidence_refs:
  - E1
  - E2
moment_refs:
  - M1
direct_evidence: >-
  The entry screen shows "enter with sound" and "enter without sound"; CSS defines a fixed dark loader and a .5s vertical transform exit.
interpretation: >-
  The site treats sound as a chosen layer, not an assumed autoplay effect.
aesthetic_role: >-
  The choice creates anticipation while reducing sensory friction and preserving user agency.
technical_clues: >-
  Loader is fixed, dark, full-screen, with `transition: transform .5s var(--ease-quad-in-out)` and secondary no-sound reveal at .3s.
reusable_recipe: >-
  Gate sound-enabled experiences with explicit with-sound and without-sound options; persist a reversible sound control after entry.
related_nodes:
  - id: pacomepertant-portfolio-source
    relationship: evidenced-by
  - id: named-interaction-audio-palette
    relationship: prerequisite-for
confidence: high
evidence_quality: strong
confidence_rationale: Direct browser, screenshot, and CSS evidence supports the claim.
lifecycle_note: Initial active finding.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-01
updated_at: 2026-05-01
---

# Consent-First Sound Entry

## Direct Evidence

Entry options and loader behavior are captured in M1 and E1/E2.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E1 | browser-observed | First desktop load | Two entry choices exist | Audible playback | high |
| E2 | css-derived | Loader CSS | Exit/reveal timing | Runtime load duration | high |

## Interpretation

Sound becomes an opt-in enhancement and the no-sound path is not hidden.

## Aesthetic Role

The ritualized choice makes the portfolio feel intentional rather than intrusive.

## Technical Clues

Use an accessible button pair, visible progress/ready state, and a persistent mute toggle.

## Reusable Recipe

See R1 in the extraction report.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

Exact sound-enabled path was not audibly verified.
