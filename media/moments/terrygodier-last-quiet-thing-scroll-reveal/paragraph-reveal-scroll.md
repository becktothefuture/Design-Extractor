---
id: M1
source: https://www.terrygodier.com/the-last-quiet-thing
extract_id: terrygodier-last-quiet-thing-scroll-reveal
category: scroll-navigation
captured_media_path: paragraph-reveal-scroll.webm
viewport: 1280 x 720
device_class: desktop
capture_tool: Playwright CLI video recording
timing_basis: css-derived
duration: approximately 2.6s capture
confidence: high
created_at: 2026-05-01
---

# Moment: Paragraph Reveal Scroll

![Paragraph reveal scroll](paragraph-reveal-scroll.webm)

## Trigger / Action

Scroll down from the hero into the first article body section.

## What Happens

Article blocks fade from transparent to visible while translating upward from a 24px lower starting position. Already-revealed blocks settle with opacity 1 and transform 0.

## Timing / Duration

CSS-derived transition is `opacity 0.5s ease-out, transform 0.5s ease-out`.

## Evidence Boundary

- What this media proves: body copy uses scroll-entry fade/translate reveals.
- What this media does not prove: every later section uses the exact same wrapper.

## Aesthetic Effect

The reveal makes simple text feel paced and deliberate without stealing attention from reading.

## Technical Clues

The JS reveal component maps viewport progress to opacity and transform, and releases `will-change` after the threshold is crossed.

## Reuse Notes

Use the effect on block wrappers, not individual words, unless the passage needs a special emphasis moment.
