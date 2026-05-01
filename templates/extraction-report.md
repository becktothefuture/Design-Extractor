---
extract_id: {{extract-id}}
source: {{source}}
source_type: {{website|image|text|mixed}}
goal: {{goal}}
created_at: {{YYYY-MM-DD}}
confidence: {{low|medium|high}}
---

# Extract Report: {{title}}

## 1. Extract Summary

{{Concise summary of what was analysed and what matters most.}}

## 2. Source And Limits

- Source: {{source}}
- Source type: {{source-type}}
- Limits: {{capture limits, access limits, uncertainty}}

## 3. Captured Moments

| Moment | Category | Media | Why It Matters | Confidence |
| --- | --- | --- | --- | --- |
| {{moment-id}} | {{category}} | ![{{alt}}](../../../media/moments/{{extract-id}}/{{file.gif}}) | {{reason}} | {{confidence}} |

## 4. Category Catalogue Findings

| Category | Finding | Evidence | Confidence |
| --- | --- | --- | --- |
| {{category}} | {{finding}} | {{evidence-ref}} | {{confidence}} |

## 5. Evidence Table

| Evidence Ref | Method | Observation | Confidence |
| --- | --- | --- | --- |
| {{ref}} | {{browser-observed|css-derived|js-derived|inferred}} | {{observation}} | {{confidence}} |

## 6. Interaction And Sensory Decomposition

| Interaction | Trigger | State Sequence | Feel | Evidence | Confidence |
| --- | --- | --- | --- | --- | --- |
| {{interaction}} | {{trigger}} | {{pre-state -> transition -> feedback -> settled state}} | {{scroll/motion/audio/interaction feel}} | {{E1/M1}} | {{confidence}} |

## 7. Aesthetic Rationale

{{Why the source feels the way it feels, tied to concrete evidence rather than vague praise.}}

## 8. Technical Implementation Clues

{{Durations, easing, layout values, DOM/CSS/JS clues, media behavior, and confidence. Mark estimated, inferred, not inspected, and not available details clearly.}}

## 9. Reusable Recipes

{{Implementation-ready recipes with intent, anatomy, state model, interaction model, motion tokens, sensory notes, responsive rules, accessibility, failure modes, and constraints.}}

## 10. Reuse Readiness Gate

| Recipe | Status | Can Another Agent Recreate It Without Reopening Source? | Missing Evidence / Blocker |
| --- | --- | --- | --- |
| {{recipe-id}} | {{pass|needs-work|blocked}} | {{yes|partial|no}} | {{missing values, states, media, or implementation evidence}} |

## 11. Knowledge Nodes

- {{node-id}}: {{path}}

## 12. Brain Links

- {{source-node}} -> {{related-node}}: {{relationship}}

## 13. Open Questions

- {{question}}: {{why it matters}}
