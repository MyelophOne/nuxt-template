# Review structure and responsive adaptation

Read for crowding, weak hierarchy, alignment/spacing failures, responsive work or an explicit critique. Preserve the existing visual world unless redesign is authorized.

First inspect actual representative renders: identify primary/secondary groups without relying on detail, reading/task path, proximity, rhythm, density and useful variation. Then check source/computed evidence for spacing, container bounds, Grid/gutters, overflow, stacking, contrast and real touch/focus areas. Mechanical success cannot establish hierarchy; do not add blur to the delivered UI as a substitute for this perceptual review.

Name the structural relationship before changing boxes: what leads, what supports, which items belong together and what reflows/collapses/remains visible. Prefer the simplest package Grid composition expressing it. Avoid extra card frames compensating for poor proximity, arbitrary gaps or random offsets. Optical corrections follow rendered evidence, not guessed pixel nudges.

Separate hierarchy from composition: check whether attention first reaches the right subject/action, then whether the page's visual weight, negative space and repeated rhythm balance it. Equal columns are not automatically balanced; asymmetry is not automatically creative. A heavy image, saturated field or moving ornament must not overpower useful content by accident. Avoid unsupported fixed type ratios or a mandatory F/Z reading pattern.

Compare expression with actual supplied brand/voice/tokens or the accepted site DESIGN.md; don't invent a brand violation because optional mood/voice files are absent. Check the same visual idea in a later content/action section and on mobile, not only the opening. State observed mismatch → visitor impact → concrete owning change, rather than prescribing a fashionable style.

Adapt by task and input, not scale alone: handle long/empty/dynamic content, translations, intermediate widths, short landscape and zoom. Preserve essential functions and DOM/focus order. Hover-capable and touch input can coexist; a resized viewport does not prove gestures work. Test in-scope drag/swipe and page scroll separately using existing controls, with ordinary keyboard/button alternatives.

Report a few prioritized findings: blocker/important/polish, affected element, evidence and concrete fix. Apply fixes when authorized, then reinspect the affected view/state. State actual browser/input/device evidence and gaps accurately. No mandatory external detector, telemetry, license service, sub-agent, native-app workflow or extra library is implied by the reference sources.

Use [Polish](POLISH.md) only for visual-detail work after the structure/task path is sound. Prefer evidence from the actual rendered owner/token/variant over repository-wide consistency guesses. A clean automated audit does not establish perceptual quality, and an uninspected state is not an approved state.
