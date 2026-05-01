---
id: M5
source: https://pacomepertant.com
extract_id: pacomepertant-portfolio
category: sound-interaction-audio
captured_media_path: sound-toggle.webm
viewport: 1280 x 720
device_class: desktop
capture_tool: Playwright CLI video recording
timing_basis: estimated
duration: approximately 2s capture
confidence: low
created_at: 2026-05-01
---

# Moment: Sound Toggle

![Sound toggle](sound-toggle.webm)

## Trigger / Action

Click the fixed sound button twice.

## What Happens

The icon changes visual state while staying fixed in the lower-right corner.

## Timing / Duration

Estimated. Iconfade CSS uses `.25s` opacity, transform, and filter transitions.

## Evidence Boundary

- What this media proves: the sound control is persistent and visually toggles.
- What this media does not prove: audible playback, volume, mute persistence, or audio layering.

## Aesthetic Effect

The control gives the visitor agency over sensory intensity.

## Technical Clues

Network requests load named `.ogg` files; console warnings indicate potential audio-pool exhaustion.

## Reuse Notes

Persist mute state and cap audio object creation.
