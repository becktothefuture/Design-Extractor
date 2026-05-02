---
id: luma-event-discovery-system
title: Luma Event Discovery System
type: source
status: active
category: visual-style
source: https://luma.com/
source_url: https://luma.com/
source_label: Luma homepage
capture_status: captured
primary_media: media/stills/luma-event-discovery-system/home-desktop.png
summary: Luma turns event creation into a friendly product scene with soft gradients, readable product UI, and playful 3D props.
extract_id: luma-event-discovery-system
aliases:
  - Luma homepage
  - delightful events start here
retrieval_terms:
  - event product hero
  - playful SaaS product scene
  - phone mockup with props
  - soft gradient landing page
applies_to:
  - event products
  - creator tools
  - consumer SaaS landing pages
tags:
  - website
  - product
  - events
  - 3d
evidence_refs:
  - E1
  - E2
  - E3
moment_refs:
  - M1
direct_evidence: >-
  Desktop capture shows the headline "Delightful events start here.", a compact CTA, a pastel gradient word treatment, and a large circular product scene with an iPhone event page, beach imagery, and floating 3D props.
interpretation: >-
  The reusable design value is a product hero that makes a functional event page feel social and celebratory without hiding the UI.
aesthetic_role: >-
  The phone remains legible while the props supply emotional context, making the tool feel playful but still practical.
technical_clues: >-
  HTML metadata identifies the page as Luma and describes event hosting, ticket sales, and discovery. The app appears Next.js-built from `_next/static` assets. Exact 3D asset pipeline is not inspected.
reusable_recipe: >-
  Place a realistic product screen inside a circular lifestyle scene, add a small set of floating props that communicate event mood, and keep the CTA/text column simpler than the visual.
related_nodes:
  - id: legible-ui-in-playful-product-orbit
    relationship: example-of
confidence: high
evidence_quality: strong
confidence_rationale: Desktop/mobile stills and metadata directly support the product-scene pattern; only animation internals remain unverified.
lifecycle_note: Initial Apple Notes batch extraction on 2026-05-02.
contradiction_refs: []
supersedes: []
superseded_by: []
created_at: 2026-05-02
updated_at: 2026-05-02
---

# Luma Event Discovery System

## Direct Evidence

The page presents a product screen as the central object inside a bright circular beach scene. Floating party props surround the phone, but the event title, date, registration area, and CTA remain visually readable.

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| E1 | screenshot-observed | Desktop 1440x1000 first viewport | Product UI is staged inside a playful circular scene. | Does not prove asset authoring method. | high |
| E2 | screenshot-observed | Mobile 390x844 first viewport | The product scene adapts to a narrow viewport. | Does not prove all breakpoints. | medium |
| E3 | text-derived | HTML metadata | The page positions Luma around event hosting, tickets, friends, and discovery. | Does not prove internal information architecture. | high |

## Interpretation

The note "Luma Awesome events" maps to a reusable hero pattern: show the actual event page while wrapping it in the emotional context of the event itself.

## Aesthetic Role

The scene feels delightful because the props are not generic decoration. They explain the event vibe while the phone screen proves the product.

## Technical Clues

The site ships Next.js assets. Exact animation timing, image format selection, and 3D render pipeline were not inspected.

## Reusable Recipe

Use a two-column hero with quiet copy and a dense product-scene image. Make the phone/product UI large enough to inspect. Limit props to objects that name the use case: date, venue mood, guests, ticketing, or theme.

## Contradictions / Lifecycle

No contradictions recorded.

## Extraction Notes

This extraction focuses on the homepage product scene, not the logged-in event creation flow.
