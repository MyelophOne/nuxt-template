# Typography and readable detail

Read when designing or repairing text, not for every logic change. Preserve the existing type system and root safe-system-font rule; a reference never authorizes new fonts or font packages.

Define a small set of roles with size, weight and leading together. Prefer rem-based text sizing and unitless leading. Short display text can be tight; wrapping descriptions need breathing room (roughly 1.4 or more, body often 1.5–1.6). Judge the actual font/language rather than enforcing one ratio on all headings. Avoid thin small text; do not increase brightness or tracking to compensate for poor weight/size.

Keep the guide's prose measure; use `text-wrap: balance` selectively on short headings, `pretty` on prose as progressive enhancements. Ordinary wrapping must already work without them. Avoid fixed line breaks across locales, forced nowrap on long actions, or shrinking text to fit. Long URLs/IDs need appropriate wrapping. Use logical start alignment and actual document lang/dir through existing i18n; isolate mixed-direction values where needed. Do not hand-reorder numbers or change code punctuation.

Use tabular numerals for changing/comparable figures, not all prose. Prefer semantic font properties over raw OpenType tags. Use real available weights; don't assume a system family supports every fractional weight or globally disable font synthesis/smoothing as a polish trick.

Truncation is a content decision: keep essential prices, conditions, errors and primary actions readable. A genuinely bounded label/preview needs a discoverable keyboard/touch path to the complete value, not only a native title or hover tooltip. Do not replace clipped text with an unreadable fade.

Keep useful content selectable and links identifiable with intentional underlines/offsets where appropriate. Preserve descenders, accents and Cyrillic at tight leading. Optional text-box trimming needs support checks and fallback geometry; never use it to hide broken inherited button typography.

For mobile editable fields prefer an actual computed size of at least 16px where needed to avoid unwanted iOS focus zoom. Use supported input styling; no transform-scale sizing workaround or disabling pinch zoom. Verify actual device behavior before claiming it fixed.

Inspect computed nested text and real wraps at 320px, intermediate widths and 200% zoom, in both themes and long translations. Check selection, full-value recovery, numeric stability, labels and focused fields. A token declaration alone is not proof of readable typography.

Required editorial breaks must survive the actual SSR pipeline. The installed layer's `app/server/plugins/html-one-line.ts` (path relative to the resolved package root) replaces literal CR/LF in rendered fragments with spaces: interpolating a string containing `\n` and styling it with pre-line can disagree with client VNodes. Use semantic `<br>` or deliberate line groups in the existing heading/content slot, with identical deterministic pieces on server/client; retain ordinary wrapping within each piece. Do not disable SSR/HTML processing, patch the shared heading, use mismatch suppression or replace it with a new primitive. This is a content-markup decision, not a license for forced desktop line breaks across all widths/locales.
