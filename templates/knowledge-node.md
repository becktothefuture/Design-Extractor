---
id: {{id}}
title: {{title}}
type: {{source|finding|pattern|synthesis}}
status: {{provisional|active|superseded|merged|rejected}}
category: {{category}}
source: {{source}}
extract_id: {{extract-id}}
aliases:
  - {{alias}}
retrieval_terms:
  - {{retrieval-term}}
applies_to:
  - {{context}}
tags:
  - {{tag}}
evidence_refs:
  - {{evidence-ref}}
moment_refs:
  - {{moment-id-or-path}}
confidence: {{low|medium|high}}
evidence_quality: {{weak|moderate|strong}}
confidence_rationale: {{why-this-confidence}}
lifecycle_note: {{current lifecycle note}}
contradiction_refs:
  - {{contradicting-node-id}}
supersedes:
  - {{node-id}}
superseded_by:
  - {{node-id}}
created_at: {{YYYY-MM-DD}}
updated_at: {{YYYY-MM-DD}}
related_nodes:
  - id: {{related-node-id}}
    relationship: {{supports|contradicts|refines|duplicates|inspired-by|example-of|prerequisite-for|variant-of|evidenced-by|implemented-by}}
---

# {{title}}

## Direct Evidence

{{Direct evidence from the source.}}

## Evidence Provenance

| Ref | Method | Source Context | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- |
| {{E1}} | {{browser-observed|screenshot-observed|recording-observed|dom-derived|css-derived|js-derived|network-derived|text-derived|visual-estimated|inferred}} | {{context}} | {{proof}} | {{limit}} | {{low|medium|high}} |

## Interpretation

{{What the evidence means and why it matters.}}

## Aesthetic Role

{{How this detail affects feeling, rhythm, clarity, satisfaction, or behavior.}}

## Technical Clues

{{Verified values and implementation clues. Mark inference clearly.}}

## Reusable Recipe

{{How another agent can recreate the principle without copying the source.}}

## Contradictions / Lifecycle

{{Conflicts, merges, supersession notes, or why this node remains provisional.}}

## Extraction Notes

{{Assumptions, limits, or follow-up checks.}}
