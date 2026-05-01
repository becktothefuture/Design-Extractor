---
extract_id: athleats-recipe-card-hover
source: https://www.weareathleats.com
source_type: website
goal: Understand and extract Athleats recipe-card hover effects, especially how text flicker is avoided when motion and text appear together.
created_at: 2026-05-01
confidence: high
---

# Extract Report: Athleats Recipe Card Hover

## 1. Extract Summary

Athleats uses two related card-motion systems. The `/recipes` grid hover is the important non-flicker pattern: the image wrapper moves up by a small amount, and absolute overlay controls fade in, while the readable card title and metadata remain outside the transformed layer. The home carousel uses Splide to scale active/inactive slides, but it reserves text space and only shows details for the active slide, so the text is not constantly reflowing.

## 2. Source And Limits

- Source: `https://www.weareathleats.com` and `https://www.weareathleats.com/recipes`
- Source type: website
- Limits: Webflow-generated/minified assets were inspected, not the original Webflow project. User session/login-dependent save-button states were not authenticated. Touch behavior was checked at a mobile viewport, not on a physical device. Exact GPU rasterization behavior is browser-dependent.

## 3. Captured Moments

| Moment | Category | Media | Why It Matters | Confidence |
| --- | --- | --- | --- | --- |
| M1 recipe hover in/out | hover-touch-feedback | ![Recipe card hover in/out](../../../media/moments/athleats-recipe-card-hover/recipe-card-hover-in-out.webm) | Shows the media wrapper lift and macro overlay fade while title text remains anchored. | high |
| M2 home carousel active scale | motion-choreography | ![Home carousel active scaling](../../../media/moments/athleats-recipe-card-hover/home-carousel-active-scale.webm) | Shows the separate carousel emphasis system, which scales slide wrappers and reveals active details. | high |

## 4. Category Catalogue Findings

| Category | Finding | Evidence | Confidence |
| --- | --- | --- | --- |
| hover-touch-feedback | Recipe-grid hover isolates movement to the image wrapper and overlay controls. | E1, E2, E3, M1 | high |
| motion-choreography | Hover motion token is a short upward lift with fade-in utility overlays. | E2, E6 | high |
| performance-responsiveness | Mobile removes the hover-only macro overlay and avoids the transform state. | E4 | medium |
| reusable-principles | Non-flickering card hover comes from layer separation, not from scaling text. | E1, E2, E3 | high |

## 5. Evidence Table

| Evidence Ref | Method | Source URL/Path/Text Ref | Capture Context | Captured At | Media Path | Observation | What It Proves | What It Does Not Prove | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| E1 | browser-observed | `https://www.weareathleats.com/recipes` | Playwright Chromium, 1280x720, first visible recipe card hover | 2026-05-01 | `media/stills/athleats-recipe-card-hover/recipe-card-rest-desktop.png`, `media/stills/athleats-recipe-card-hover/recipe-card-hover-desktop.png` | Rest state: `.recipe-img-wrapper` transform `matrix(..., 0, 0)`, `.recipe-macros` opacity `0`; hover state: wrapper transform `matrix(..., 0, -4)`, macros opacity `1`; `.recipe-heading` remains `transform: none`. | The visible hover moves only the media wrapper and fades the overlay; title text is not transformed. | Does not reveal author intent or all browser rasterization details. | high |
| E2 | js-derived | Webflow JS bundle `athleats.e42470da...js` | Bundle search for action lists `a-74` and `a-75` | 2026-05-01 | not available | `Recipe - Hover In` moves `.recipe-img-wrapper` to `yValue:-.25rem` over `600ms` with `outExpo`, and fades `.recipe-macros`/`.bookmark-recipe-item` to opacity `1`; hover out returns wrapper over `300ms` and fades overlays over `200ms`. | Exact interaction targets, durations, easing labels, and values. | Does not expose readable source components. | high |
| E3 | css-derived | Webflow CSS `athleats.shared.ad0343d30.min.css` | CSS class inspection | 2026-05-01 | not available | `.recipe-img-wrapper` is `position: relative; overflow: hidden`; `.recipe-macros` is `position: absolute`; `.recipe-content-btm` and `.recipe-heading` are outside the image wrapper. | Text stability is structural: readable text is a sibling outside the moving layer. | Does not prove every CMS card has identical optional tags. | high |
| E4 | browser-observed | `https://www.weareathleats.com/recipes` | Mobile viewport 390x844 | 2026-05-01 | `media/stills/athleats-recipe-card-hover/recipe-card-mobile.png` | At mobile width, first card link is 358px square, media wrapper transform is `none`, border radius is `12px`, and `.recipe-macros` computed `display: none`. | Mobile simplifies away the hover-only macro overlay and transform. | Physical touch testing was not performed. | medium |
| E5 | js-derived | Home page inline script | Inline script containing `new Splide('.splide', ...)` | 2026-05-01 | not available | Carousel config: loop, `perPage: 5`, `focus:'center'`, `fixedWidth:'280px'`, `speed:500`, easing `cubic-bezier(0.6, 0.6, 0, 1)`, custom 3000ms autoplay. | Home carousel emphasis is orchestrated separately from grid hover. | Does not prove user meant this specific surface by "recipe cards." | high |
| E6 | css-derived | Home page embedded Splide CSS | Runtime embedded style inspection | 2026-05-01 | not available | Inactive `.splide__slide` opacity `0.5`; inactive `.slide-content-wrapper` scale `0.85`; active slide opacity `1` and wrapper scale `1`; `.recipe-details` reserves `min-height:100px` and fades visibility. | Carousel avoids layout jump by reserving text space and controlling active/inactive visibility. | Does not prove anti-aliasing quality on every browser. | high |
| M1 | recording-observed | `media/moments/athleats-recipe-card-hover/recipe-card-hover-in-out.webm` | Desktop hover in/out recording | 2026-05-01 | `media/moments/athleats-recipe-card-hover/recipe-card-hover-in-out.webm` | The food image card lifts and macro overlay appears; bottom title/details do not jitter. | Visual sequence and perceived calm of the hover. | Does not provide exact code values alone. | high |
| M2 | recording-observed | `media/moments/athleats-recipe-card-hover/home-carousel-active-scale.webm` | Home carousel autoplay recording | 2026-05-01 | `media/moments/athleats-recipe-card-hover/home-carousel-active-scale.webm` | Center carousel slide grows to active scale while side slides shrink/fade. | Carousel active emphasis is visible and distinct from grid hover. | Does not prove hover behavior. | high |

## 6. Interaction And Sensory Decomposition

| Interaction | Trigger | User Intent | Pre-State | Feedback | Transition | Settled State | Edge States | Feel | Evidence | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Recipe-grid card hover | Pointer enters `.recipe-link` | Preview recipe utility data without opening the page | Image wrapper at rest; macro/save overlays opacity 0; title/details visible below | Image media lifts about 4px; macro/save overlays fade in | Hover in: 600ms `outExpo` for -0.25rem wrapper move; overlays fade in over 600ms | Media remains lifted; macro overlay visible; text below unchanged | Pointer out reverses lift in 300ms and fades overlays in 200ms; mobile removes overlay | Calm, precise, useful; feels like the image is responding without making the whole card wobble | E1, E2, E3, M1 | high |
| Home carousel active-card emphasis | Custom 3000ms autoplay or pagination click | Browse recipes without manual scanning | Center slide active; side slides dimmed/scaled | New active slide moves center, reaches opacity 1/scale 1; details visible | Splide transition speed 500ms with cubic-bezier(0.6, 0.6, 0, 1); custom dot fill runs linear over 3000ms | Center recipe card is larger and readable; inactive details hidden | Play/pause freezes dot width and timer; responsive fixed widths change | Editorial, rhythmic, less pointer-driven than the grid | E5, E6, M2 | high |

## 7. Aesthetic Rationale

The recipe hover feels polished because the feedback is local and low-amplitude. The 4px lift is enough for affordance, but the card's reading line stays fixed. The macro panel appears inside the image as an added layer of information, not as a replacement for the title. That separation prevents the common "flicker" feeling caused by scaling text-bearing containers: the browser does not have to re-rasterize the title and metadata at fractional scale values during hover.

The carousel uses scale, but it uses it as a stateful focus system rather than a pointer hover on a dense grid. Details have reserved height, inactive slides dim to 0.5 opacity, and only the center active slide exposes full details.

## 8. Technical Implementation Clues

- Grid card anatomy: `.recipe-item` contains an `a.recipe-link`; inside it is `.recipe-img-wrapper` with `.recipe-img`, `.recipe-macros`, and `.bookmark-recipe-item`; below the link is `.recipe-content-btm` with `.recipe-heading` and `.recipe-details-wrapper`.
- Grid hover target: Webflow event targets a recipe link element and applies action list `a-74`; hover out applies `a-75`.
- Grid motion: translateY only, from `0rem` to `-0.25rem`; no verified scale on the recipe-grid card or text.
- Overlay reveal: `.recipe-macros` and `.bookmark-recipe-item` opacity animate from 0 to 1; the macro panel is absolute within the media wrapper.
- Carousel: Splide loop carousel with `focus:'center'`, responsive `fixedWidth` values, `drag:false`, `speed:500`, and custom 3000ms autoplay/dot progress.
- Text smoothing: page CSS sets `-webkit-font-smoothing: antialiased`, `-moz-osx-font-smoothing: grayscale`, and `text-rendering: optimizeLegibility`; these may help rendering quality but are not the main anti-flicker mechanism.

## 9. Reusable Recipes

### Non-Flickering Recipe Grid Hover

Intent: make a food card feel interactive while keeping the title and metadata visually stable.

Anatomy: `card` untransformed layout container; `mediaLink` clickable square media area; `mediaFrame` transformed layer; `image` full-frame image; `overlayMetrics` absolute panel; `textBlock` sibling below media frame, never transformed.

State model: `rest` means mediaFrame translateY(0), overlay opacity 0; `hover` means mediaFrame translateY(-0.25rem), overlay opacity 1; `hover-out` reverses; `touch` removes hover-only reveal.

Motion tokens: lift distance `-0.25rem`; lift in `600ms outExpo`; lift out `300ms outExpo`; overlay in `600ms cubic-bezier(0.6, 0.6, 0, 1)`; overlay out `200ms cubic-bezier(0.6, 0.6, 0, 1)`.

Accessibility and risks: do not hide required information only on hover; provide focus-visible parity for keyboard users; respect `prefers-reduced-motion` by reducing lift to 0 and using short opacity-only reveal; avoid applying `transform: scale()` to ancestors containing live text.

### Center-Focus Carousel Recipe Cards

Use a loop carousel with center active slide, side slides dimmed/scaled, reserved detail space, and external dot progress. This is useful when one card should be the readable focal target and others should act as context.

## 10. Reuse Readiness Gate

| Recipe | Status | Can Another Agent Recreate It Without Reopening Source? | Missing Evidence / Blocker |
| --- | --- | --- | --- |
| non-flickering-recipe-grid-hover | pass | yes | Keyboard focus parity remains an implementation requirement for reuse. |
| center-focus-carousel-recipe-cards | pass | yes | Original CMS ordering randomization is verified, but exact item set should be project-specific. |

## 11. Knowledge Nodes

- `athleats-recipe-card-hover`: `knowledge/sources/athleats-recipe-card-hover/source.md`
- `isolated-media-layer-recipe-hover`: `knowledge/findings/hover-touch-feedback/isolated-media-layer-recipe-hover.md`
- `short-lift-overlay-reveal-card-token`: `knowledge/findings/motion-choreography/short-lift-overlay-reveal-card-token.md`
- `touch-simplified-card-hover`: `knowledge/findings/performance-responsiveness/touch-simplified-card-hover.md`
- `non-flickering-recipe-card-hover`: `knowledge/patterns/reusable-principles/non-flickering-recipe-card-hover.md`

## 12. Brain Links

- `athleats-recipe-card-hover` -> `isolated-media-layer-recipe-hover`: evidenced-by
- `isolated-media-layer-recipe-hover` -> `non-flickering-recipe-card-hover`: supports
- `short-lift-overlay-reveal-card-token` -> `non-flickering-recipe-card-hover`: supports
- `touch-simplified-card-hover` -> `non-flickering-recipe-card-hover`: supports
- `non-flickering-recipe-card-hover` -> `hover-preview-title-list`: variant-of

## 13. Open Questions

- Keyboard focus parity: the browser-visible focus path was not deeply tested.
- Physical touch devices: mobile viewport behavior was inspected, but not on real hardware.
- Authenticated save states: unauthenticated bookmark behavior was visible only as hidden/overlay structure.
