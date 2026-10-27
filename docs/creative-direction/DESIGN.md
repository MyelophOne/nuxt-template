# Creative direction for @myelophone/nuxt sites

Required by this template's AGENTS.md for new sites, page templates and redesigns. For a small fix, preserve the established direction and inspect the affected area. Package reuse, Grid, auto-import, Nuxt, themes, i18n, accessibility and dual-mode delivery rules remain binding. This guide defines decisions and acceptance, not one house style. Read [MOTION.md](MOTION.md) only when its effects are used; [REFERENCE-NOTES.md](REFERENCE-NOTES.md) is optional source evidence.

## 1. Turn a short prompt into a concrete direction

Complete the work implied by the brief; a simple prompt does not mean a rough mockup. Inspect the application, installed layer, existing materials and previous answers first. Reuse known facts. Ask only material missing questions and continue independent work; do not turn routine design choices into an approval gate or repeatedly ask about an already chosen palette.

### Short brief — ask only unanswered items

Group the two or three questions that affect the next work; omit known answers:

1. **Purpose:** brand/offer, audience, what a visitor should understand and do.
2. **Scope:** pages and essential functions, languages, actual integration boundaries.
3. **Direction:** supplied palette/reference, colors to avoid, permission to select a direction if unspecified. Safe system fonts remain the default.
4. **Materials:** approved text, logo, images and real examples; which facts are confirmed and what needs creation.
5. **Next action:** actual contact, download, booking, purchase or submission destination.

Delegated design choices may proceed with a stated choice. Missing facts never authorize invented clients, metrics, contacts, reviews, prices or successful submissions. If essential information cannot be obtained, make the limitation explicit rather than hiding it behind a fake control.

### Conditional layout recommendations

When a page/element layout, flow, wording or structural issue is in scope, read [the layout router](layouts/INDEX.md) and only its matched profile(s). Explicit user layouts and the established site system win. Choose a useful starting relationship when unspecified, then adapt it to the real content. Do not load all profiles, recursively fetch their sources or turn these recommendations into runtime plugins. Unrelated logic, literal data substitutions and build tasks skip this library.

### Generation workflow — complete it without another special prompt

An explicitly requested aesthetic additionally routes through [style presets](presets/INDEX.md). Page profiles answer what the visitor needs; a preset answers how it should feel. Without a chosen style, use the brief/art-direction process rather than loading the preset library or rotating styles mechanically.

1. **Choose the page's job.** A studio, software download, product, catalogue and editorial site need different entry points and information density. Choose the main task before the hero pattern.
2. **Select an authored direction.** For an open/new visual identity follow [art direction](layouts/workflows/ART-DIRECTION.md); compare cheap credible concepts before polishing, not just palette variants. Choose for the subject, evidence and user action. Write a compact site DESIGN.md (roughly 6–10 useful lines): concept; composition/density; actual palette roles; media/evidence; main action and states; mobile; reused package APIs; acceptance. No long speculative manifesto or mandatory companion documents.
3. **Map the page.** For each useful section record visitor question → evidence → composition → action, where applicable. Meet the root content minima without turning them into a fixed section order. Map behavior to installed APIs; identify a real gap before proposing an extension.
4. **Prove the direction early.** Build one representative vertical slice: header/entry, a real example/content unit and a key action, with finished media and actual controls. Inspect wide/narrow and both themes before repeating the pattern. Fix the highest-impact composition/control defect first.
5. **Complete the experience.** Finish every requested page and state, mobile layout, content, navigation, metadata and assets. A pretty first screen with unfinished lower sections fails.
6. **Critique and verify.** Apply section 8, inspect actual interactions, run both builds/runtime checks, fix material failures and reinspect. Do not replace visual review with a score or call placeholder work complete.

**Refine, then subtract.** After the functional pass, separately examine the built visual result: which choice serves this audience, which is habitual, and what remains unresolved? Pick the weakest criterion and one purposeful technique, revise, then inspect again. Keep a dominant expressive idea with quieter support. Remove an optional flourish if its absence improves clarity without losing useful meaning. Record the important correction briefly; do not wait for another polish prompt or replace refinement with more effects.

Use relevant references efficiently, not an endless inspiration search. Inspect pixels at wide/narrow sizes and beyond the hero; record URL, context and transferable principle. Extracted branding alone is not visual evidence. Distinguish observed appearance from untested interaction, estimated measurements and proposed choices. A screenshot does not prove performance or accessibility. Reference prestige never overrides the user's restrictions.

Translate reference intent into a short contract: subject; media scale/crop; text relationship; type contrast; density/spacing; surfaces; user task. A presentation board's outer matte/bezel/perspective is not automatically part of the webpage. Transfer principles rather than logos, claims, fonts, proprietary imagery, framework or animation stack. Claude's paper colors, GitHub's animated scene and a gallery's sliders do not authorize those defaults here.

## 2. Compose the opening and the whole reading journey

**Review section joins as well as sections.** For each neighboring pair, identify whether the reader continues the same subject or moves to a new question. Carry an image detail, alignment anchor, type role or restrained accent across a join where useful; use a controlled surface/scale/density change for a meaningful shift. No mandatory light/dark alternation, empty breathing section between every dense pair or different hero pattern merely to differ from the last project. Appropriate repeated structure can help comparison and reading.

**Make detail systems intentional.** Assign shape, divider/shadow and spacing roles to actual elements rather than giving every badge, preview and field the same radius or changing each randomly. Define the small set of application tokens that the direction needs through existing styling APIs. A calm flat section may contrast with a framed media/card section; evaluate the resulting hierarchy, not a fixed sharp/soft ratio. Reference token dumps are not permission to replace package containers, controls or palettes.

Choose an opening according to the task, not a universal recipe:

| Entry type | When useful | Required substance |
| --- | --- | --- |
| Focused proposition | One offer and a clear next step | Understandable offer, concise support, primary action and a subject-specific focal idea |
| Demonstration-led | A product/process is easier to show | Readable real input/output, interface detail, artifact or substantiated comparison |
| Direct task entry | The visitor is ready to start | Actual form, selection or download path with necessary conditions and useful feedback |
| Browse-first | Catalogue, library or collection | Useful listing immediately, taxonomy and real discovery controls; no obligatory marketing hero |
| Image/editorial-led | Place, work, person or visual product matters | Finished relevant media, purposeful crop and a clear reading/action path |

These are decision prompts, not five templates or features to combine. A centered headline, rounded button or card is not inherently generic; repeating the same composition for unrelated subjects is. Do not default to centered slogan → three icon cards → logo strip → generic CTA, or replace it with a mandatory split hero, terminal or bento dashboard.

**Large hero imagery is full-bleed by default.** A large opening image reaches both viewport edges on desktop/mobile unless the user explicitly requests a bounded/framed/split image. Use a full-width GridStack/media API and constrain only copy with GridContainer. Preserve focal point, overlays and responsive crop; full width need not mean full viewport height. This does not require adding a hero image to a text-, task- or demonstration-led opening. Native UI, a comparison or code sample is not a reason to fabricate a giant background photo. Avoid 100vw breakout tricks, negative page margins and whole-page overflow hiding.

Background Grid roots position direct children as content planes: use their background/media API instead of fighting it with an absolute direct-child image. Inspect actual image URLs, intrinsic dimensions and crop; a loaded 1–2px responsive variant is still broken media.

**Keep the first view immediate.** No hero slider by default; a necessary one uses a minimal existing API, useful first frame, reserved size and deferred remaining media. Do not disguise an autoplay slideshow as feature tabs. A user-selected scenario tab may change a relevant demonstration in place without rotating the proposition. No 3D animation, including CSS perspective scenes, without explicit request. No staging preloader or cinematic delay before the offer/action appears.

Use a readable journey: orientation, demonstration, explanation, decision support and action as appropriate. Vary scale, density, media/text balance and whitespace when meaning changes. A dominant scene can lead into a compact explanation, open list, detailed proof or comparison. Do not disguise identical rows by alternating colors. Section/SEO minima measure useful depth, not a padding quota.

Whitespace separates, groups or emphasizes; avoid both cramped layouts and empty viewport-height sections stretching a thin story. Use shared alignment anchors and spacing scale through Grid. Keep semantic DOM order coherent without CSS positioning or motion. Local layering/cutouts/overlap may compose a scene; they must not absolutely position the page or cover faces, products, copy or controls. Recompose optional overlaps on mobile. Quiet editorial design is equally valid.

**Structural cues carry information.** Use step numbers only for a real sequence, not unrelated services. Eyebrows should identify a useful category, not repeat the heading. Uppercase tracking, monospace metadata, colored/italic single words and repeated separators need a specific reason; none is automatic chrome. Do not replace one familiar template with compulsory brutalism or editorial rules.

**Alignment and proximity express structure.** Establish a few shared alignment/baseline anchors and a coherent spacing scale rather than a box/divider for every group. Related items sit closer than unrelated groups; equal gaps must not flatten different priorities. Assess the visible primary/secondary groups first, then verify measured gaps, Grid bounds and overflow. The perceptual squint test is a review method, not a shipped blur effect. Grid discipline need not mean symmetry, compulsory 8px spacing or one fixed aesthetic.

**Density is a design decision.** A useful catalogue can be compact; a single offer can have more breathing room. Do not enlarge every card until browsing becomes endless scrolling or shrink every label to imitate sophisticated software. Let the dominant subject have scale, body text have a comfortable measure, and metadata remain subordinate and readable. On mobile reduce simultaneous chrome and preserve the main task, rather than stacking two sidebars above the actual content.

## 3. Make the subject and its proof visible

A product's own interface, a studio's work, a place's imagery or a service's real deliverable should supply visual identity at a useful scale. Demonstrate the capability where it is explained: input → output; a relevant project detail; actual feature state; before/after with context; a deliverable sample. A logo grid and adjectives do not replace evidence. Do not insert an unrelated code editor into a service site merely because software references use one.

### Proof and demonstration contract

- **Make the example legible.** Crop/enlarge the task-bearing part instead of shrinking an entire dashboard into an unreadable thumbnail. Keep a clear border between explanatory composition and operational UI. One readable detail often explains more than several miniature windows.
- **Use coherent content.** Labels, selected state, sample input and output must describe the same scenario. Avoid random snippets, meaningless charts, fake notifications, nonsensical progress bars or controls that cannot change anything. Label fictional concepts and demo data; do not imply a live backend.
- **Match the medium to the claim.** Screenshots/recordings can establish appearance or a documented workflow, not an interactive integration. A clearly labeled static example is valid. Real interactive demos need supported choices, resulting state, keyboard/touch access and recovery. Do not put focusable fake controls inside an image/mockup.
- **Keep comparisons honest.** If the brief needs charts, benchmarks, plans or metrics, include meaningful labels, units, source/conditions and applicable scope. Never copy another brand's scores, customers or growth figures. If verified numbers are unavailable, demonstrate the process/qualitative difference instead of inventing bars or counters.
- **Make the first action concrete.** Say what opens, downloads, is copied, selected or submitted, and show the real result. Add relevant requirements/cost/next-step explanation nearby when known. Do not invent free trials, availability or delivery promises. Copy/download controls must work and expose failure where relevant; do not execute pasted installation commands.
- **Platform-specific paths must be explicit.** Downloads/install instructions need confirmed assets and a usable platform choice. Do not guess URLs/version or silently serve the wrong platform. Preserve SSR/hydration agreement; browser detection must not cause differing first-render markup, and users need a manual alternative.

A product stage can have a deliberately different surface to separate interface from narrative, with a clear edge/inset and stable proportions. It is not permission to add glowing fog, arbitrary glass panels or nested frames around everything. Keep meaningful mobile content legible by choosing a detail/sequence, not scaling the desktop screenshot to illegibility. Do not misrepresent a crop as a different product state.

### Plan finished assets

Before markup, decide permitted source, purpose, subject, aspect ratio, focal point, crop/mobile variant and fallback. Reuse package media APIs and reserve dimensions. If photography/rendering/human imagery is central, obtain suitable permitted assets or create original assets with available tools. A crude SVG, empty browser shell or random stock photo does not replace the reference's substance. Use code/vector artwork when intended by the concept, not as a shortcut around needed media. Supplied references do not grant reuse rights or turn their people/work into the user's clients.

Keep a coherent photographic/illustration treatment, enough detail and restrained overlays. Preserve text contrast over every changing frame. Optimize media including SSG fallbacks; a huge asset is not the cost of visual impact. A small subject-specific motif can recur meaningfully in two contexts; do not stamp generic orbs, asterisks, grain, badges or technical grids across every new site.

## 4. Compose typography, color and depth together

For type design/repair, use the conditional [typography checks](layouts/elements/TYPOGRAPHY.md). For a final detail pass, use [polish](layouts/workflows/POLISH.md); neither requires a new font or style system.

Use the required safe font stack unless the user/established brand specifies otherwise. Distinction comes from measure, scale, weight, leading, tracking and an intentional serif/sans relationship. Test actual language/fallback glyphs. Default to comfortably readable body text (often 16–18px) and supporting text (often 12–14px); smaller annotations need a deliberate role and actual readability. These are starting points, not forced sizes for every component.

Establish dominant statement → readable explanation → quieter detail. Do not make every heading enormous, all text equally bright, or metadata tiny/faint to create elegance. Compose wraps around meaning and real width; avoid awkward single-word remnants and forced desktop newlines reused blindly in translations/mobile. Inline fragments inherit type unless intentionally styled. Fix inherited package typography defects upstream instead of per-span compensations.

Set a comfortable prose measure, usually about 45–75 characters per line; review passages approaching 80 in the real font/language. Code and tables have separate reading needs. One safe family can supply personality through scale, width, weight and spacing; a second needs a distinct role, not novelty.

For comparable or changing numeric values, tabular numerals can stabilize alignment; format real numbers/dates/units for the actual locale and preserve SSR agreement. Check browser-native controls against the selected theme through the existing theme pipeline. Do not copy a media-only dark-mode strategy, opacity-only text hierarchy or remote-font setup from a stylistic reference.

**Clear surfaces, not default white haze.** No automatic milky/cream/beige-gray page ground, foggy pastel field, translucent white veil or blurred white gradient. A pale popular swatch is not a background prescription. Photos remain sharp; the requested soft edge stays a local boundary, not an all-over effect. User-requested paper/cream/pastel direction remains an explicit exception. Do not mechanically turn a dark theme into cream paper or bleach its transitions to gray-white.

Choose actual page/section/card grounds from the brief with deliberate hue/value relationships. A clear white or brand-derived light theme can work; user restrictions prevail. Review large opaque swatches at viewport scale before adding effects. Compose visible harmonious gradients through Grid/view APIs as required by AGENTS.md, in a purposeful stage/transition rather than behind every section. Gradient stops must show controlled color/lightness transition, not white fog. No mandatory dark/neon alternative, fluorescent fields or clashing rainbow unless explicitly requested. Passing contrast alone does not establish comfort.

### Concrete replaceable palettes

Select the established brand or a coherent curated palette before assigning roles. These literal starting sets were observed in Color Hunt **Popular / Month on 2026-10-21**; they are neither current/all-time rankings nor package defaults. User palettes take precedence. Pale swatches can be ink/details; do not automatically spread them across the page.

| Direction | Source HEX swatches | Role/adaptation guidance |
| --- | --- | --- |
| Smoky blue / milk | `#AEC4D4` `#F5EFE1` `#E5D3AF` `#790D16` | Blue accent, milk ink on dark, sand/wine detail; derive contrasting grounds |
| Sage / rose | `#84A282` `#B8CFB3` `#FEFAF3` `#F6E2E9` | Sage emphasis, cream/rose detail; choose a deliberate ground and readable ink |
| Botanical | `#D1EDD3` `#ACC5A6` `#89A482` `#5C7057` | Related greens; derive dark ink/light ground rather than pale-on-pale text |
| Marine | `#FFEFC4` `#97D7FF` `#4D8DBA` `#086288` | Blue emphasis, cream/light-blue details; verify every foreground pairing |
| Editorial earth | `#4C4541` `#F2C46A` `#AEAC78` `#FCF0DA` | Brown ink, olive/gold accent, cream detail; derive coordinated theme roles |

Keep actual color values in one application-owned palette/theme configuration, including gradient stops, focus/status and on-color text. Components consume semantic roles; no fixed hex scattered through templates, second theme engine or mandatory named palette. Record source swatches separately from derived contrast tones. All swatches need not be used. Replacing the palette must reach actual fills/text in both themes; verify a rendered override. Branded media may require a coordinated variant.

Use prominent text, comfortable body and quieter secondary roles, chosen separately for each theme/surface. Verify meaningful normal-size text at ≥4.5:1, large text at ≥3:1 under the root accessibility baseline, including gradient/overlay composites. Do not fade entire content groups or child actions with opacity. Quiet text is not a disabled state; retain link affordances/focus. Never shrink weak text to conceal contrast failure.

Define a surface system: ground → content/media plane → grouped card → raised control where appropriate. Coordinate border weight, radii, inner insets, spacing and restrained elevation. Not every plane needs a box or shadow. Use shadows to explain layering, not uniform floating panels or glow. Check transitions, frames and edges at normal scale in both themes. If a fill dominates or glares, revise its palette/area, not a compensating veil. Declare only tokens actually used and map inherited UI variables; declaration is not proof of visual effect.

## 5. Design cards, controls and image responses

Use UiCard when content benefits from a distinct scannable unit: comparable offers, services, projects or facts with heading/body/action. Avoiding a wall of identical cards does not mean avoiding cards. Choose anatomy from content: image-led work, concise editorial text, actual comparison or product details. Use verified slots/props (`header`, default, `footer`, `bordered`, `rounded`, `padded`) and site tokens. No copied card primitive, internal DOM overrides or undocumented variants. Keep page columns in Grid.

Vary scale/aspect ratio and top alignment when it expresses an editorial relationship: a dominant work with a smaller companion entering lower can form a composed spread. Use Grid columns and ordinary insets/flow, not absolute positioning, random transforms or a masonry dependency. Keep coherent gutters, caption proximity and DOM order; clear offsets on mobile if they create dead space. Comparable plans/specifications may need aligned starts/actions. Staggering every row is another template, not authorship.

### Image feedback — required on relevant previews

For image-led project/product/card previews, design one visible restrained hover response: small crop scale inside a fixed frame, controlled tone/overlay change preserving sharpness, or emphasis of an existing real caption/action. Static decorative backgrounds may stay still. Use supported media APIs/classes/slots and owned CSS, not new media wrappers/animation libraries or internal overrides.

Match response to behavior. A linked preview gets equivalent keyboard focus feedback, accessible name and real destination. Non-linked imagery may respond decoratively, but no pointer cursor, fake open action or button-like lift suggesting a click outcome. Essential captions/actions remain visible without hover. Gate pointer motion to appropriate hover/fine-pointer devices; preserve touch behavior and reduced-motion static feedback. Check actual before/after, crisp crop, stable layout and unclipped focus. See MOTION.md for bounded values and tests; a transition declaration is not proof it works.

### Button geometry — required acceptance

Use UiButton and its actual API. Choose a concise specific label and primary/secondary hierarchy. Define a small control scale centrally: height; padding; label size/leading/weight; icon size/gap; radius. **44–48px height, 14–16px label, 20–24px leading, 12–20px horizontal padding and 8–10px icon gap** are starting proportions for ordinary marketing/forms, not a universal pill shape. Fit vertical padding plus real leading/borders to height; inspect the actual root and label boxes.

- Use existing leadingIcon/trailingIcon for ordinary icon-and-label controls. Do not add another inline-flex label row that inflates baselines, fix spans with negative offsets or scatter emergency sizes.
- Width follows the action/context. Keep ordinary short actions compact; full-width is justified in a suitable mobile form, purchase or comparable flow, not automatically on every desktop CTA. The installed button uses whitespace-nowrap: test the longest supported label rather than shrinking/clipping it. Report a real missing extension upstream.
- Use comfortable weight; no automatic bold/uppercase, stretched tracking, oversized rounding or tiny labels. A rounded shape can be correct when coordinated with the design. Optical alignment, equal spacing and practical hit area matter more than the named variant.
- Verify enabled text/background contrast (normally ≥4.5:1), including gradient stops and both themes; a color/variant name does not prove readability. Keep hover/focus/pressed/pending/disabled states coherent and loading dimensions/name stable. No layout jumps or exaggerated movement.
- Raised primary actions may use a compact shadow/edge; secondary actions remain subordinate. Place truthful next-step information nearby where useful. No fabricated free trials, promises or decorative reassurance.

Inspect close-up header/hero/form controls at normal scale, wide/narrow, both themes and 200% zoom. Check computed font/leading, root height, four paddings, icon gap, inherited inline type, longest label and state feedback. Cramped, inflated or unreadable geometry fails even when clicking/build/contrast tests pass.

Use UiIcon for interface SVG (including supported button icon props), with currentColor via text/CSS tokens. UiIcon8 currently loads PNG. Recheck installed contracts; do not invent color props, hand-copy paths or substitute Unicode/emoji/CSS glyphs for available icons. Choose meaningful family/stroke/size and a role for color. Arrows belong to actual directional/open-link conventions, not every button/heading. Hide decorative icons, name icon-only controls and verify CSP/network loading; missing artwork must not erase action meaning.

## 6. Make interaction carry the actual task

Map each requested journey: entry → understandable choice → action → result → recovery. Reuse the package's navigation, tabs, disclosure, search, gallery, form and feedback APIs. Choose widgets for a real task, not a quota. Do not globalize local behavior or add a parallel primitive.

Use the installed `UiThemeToggle` for the visible light/dark control, with its existing localized label or a supplied label. Do not compose another button/store/icon switch. Its visibility wrappers keep the SVG-mask icon's display rule separate from theme visibility; verify exactly one icon in each theme, accessible name, keyboard activation, reload and cross-tab persistence. For older versions without this component, report the missing API/upgrade path rather than silently copying it. Preserve the current store/theme pipeline.

Public email addresses must use the installed `SafeEmail` or verified package equivalent with its actual user/domain/tld/subject API. No handwritten mailto, raw public email in templates, homegrown obfuscation/copy system or second contact primitive. This reduces simple scraping; it does not make an address secret or prove message delivery. Verify the real address/destination after hydration and state its existing no-JS limitation honestly.

Use the selected [page profile](layouts/INDEX.md) for its task-specific relationships and boundaries; do not read other profiles speculatively. These are recommendations for requested behavior, never a feature quota or permission to invent a backend.

**Discovery controls must operate on real data.** Search/filter/sort and counts describe the displayed collection, with pending/empty/error/reset where applicable. A selected category must affect results, and clearing it must recover them. Tabs represent real alternative content, not decorative labels. Preserve focus and useful selection/return state. Do not add a fake browser/sidebar, global command palette or dashboard chrome to a marketing page. Use existing suitable primitives; UiSiteSearch is site-route discovery, not automatic evidence of a catalogue filtering API. Verify that the installed contract fits before composing local domain logic. Do not install a second search stack or replace package keyboard/focus behavior.

**Interface wording is part of the design.** Use the visitor's vocabulary and concrete action names; keep terms consistent through control, pending state and result. An error explains the failed action and recovery; an empty state explains a useful next step. Avoid vague success, filler slogans and implementation jargon. Each short text should guide one decision.

**Reduce action friction.** Keep one dominant next action per context, with a lower-priority alternative only when useful. A visitor should not need to read the whole page to learn how to start, but repeated CTAs must be relevant to their surrounding information. Keep essential price, choice, requirements and conditions visible; progressive disclosure is for secondary detail. Preserve entered/selected state, explain unavailable actions and allow recovery. Never simulate auth, payment, booking, copy or submission success. Test the full path with supported data rather than merely the click event.

For interactive pages apply the [state-feedback and timing contract](MOTION.md#state-feedback-and-timing): honest pending/progress, coherent interruption and error recovery. Keep visual duration separate from operation duration; feedback must not delay action completion.

Movement explains a state change, hierarchy or continuity; it is not a substitute for content. Existing v-reveal owns suitable below-fold entrances; sticky components retain context within their section. Do not copy reference WebGL/GSAP, cursors, shaders, preloaders or scroll physics. One or two meaningful signature effects can suffice beyond ordinary feedback; static reading remains complete. Keep hero immediate, no autoplay scenario queues or long forced pinned tours. Read MOTION.md when using edge treatment, scroll letter color or other described effects; honor no-JS/reduced motion and package device/network fallbacks.

Navigation reflects actual pages and visitor tasks, not borrowed mega-menu labels. Do not create empty Product/Resources/Company destinations or a sidebar merely because a reference has them. Announcement strips, version badges and availability dots require real relevant facts; they are not automatic visual decoration. Account for the combined height of site header, section navigation and consent/promotion UI on phones and at zoom: keep the main action and dismissal/focus controls reachable. Reuse inherited globals rather than adding another fixed control layer.

Native scrolling, visible navigation and keyboard/touch access remain familiar even in an expressive layout. No essential detail or action exists only on hover; no guessing gestures, forced tours or hidden exits. A reference's sticky nav, app sidebars, cookies/overlays or autoplay media are not universal defaults. Reuse inherited globals once and consent-aware integrations; don't reproduce their controls to fill the design.

### Same-page anchors: smooth scroll, unchanged URL

Activating a same-page section action scrolls smoothly **without adding/changing hash, pathname, query or history**. Another route or an explicitly requested shareable deep link has a separate contract. Never jump natively and erase the hash afterward; that already causes a visible jump/history mutation. Inspect installed mechanisms first; if none fits, one small application-owned handler may orchestrate existing links/UI and native scrolling, without a replacement router, global interception, library, wheel/touch hijack or animation loop.

Bind only intended controls, prevent default for handled activation and use real target IDs. Preserve modified clicks, external/other-route navigation and meaningful fallback links; do not claim JS-driven unchanged-URL behavior works without JavaScript. Respect reduced motion with immediate/native auto scroll.

Coordinate scroll-padding/scroll-margin with the real sticky header; include the page-root/top target, which is not its own descendant. Move focus sensibly, using preventScroll where appropriate to avoid a second jump. The destination heading must stay visible below the complete mobile header. Never use href="#" placeholders. Verify from top/middle/bottom in both outputs: destination, focus, actual smooth/reduced scrolling, unchanged URL/history; test direct loads and back/forward separately.

Automated review must await hydration and the actual settled scroll/transition state before judging positions or taking final captures; a fixed short sleep can sample a long smooth journey halfway. Verify responsive behavior from computed styles after the breakpoint update, not from an assumed class name. Test interruption separately rather than masking it with longer delays.

## 7. Author the mobile layout

Choose the narrow focal point, crop, order, density and action placement deliberately. Do not simply scale the desktop canvas or stack sidebars above the useful content. Preserve substantive evidence with fewer simultaneous elements, not hidden essential content. Responsive UI demonstrations may need a readable detail or sequence instead of a tiny desktop window. No horizontal page clipping to mask defects.

Use verified Grid breakpoints; test intermediate gutters, real branding/longest supported labels, 320px header/theme control, 390px phone, tablet and short landscape. Sticky context returns to normal reading where content cannot fit; check section-end release, ancestor clipping and keyboard access. Full-width media still reaches both edges on phones. Keep theme/palette recognition without mechanically inverting every image. Verify 200% zoom, real glyph/wrap behavior, pointer/touch equivalents and visibility after theme/navigation/reveal changes.

## 8. Pass a visual and task critique

Inspect the actual built site at readable scale: opening, a representative content/demo, decision/action and footer, wide/narrow in both themes. A shrunken full-page screenshot is useful for rhythm, not detail acceptance. Walk through below-fold reveals after navigation/theme changes before judging visibility. Apply these tests and fix the highest-impact defect before adding decoration:

| Test | Acceptance / corrective action |
| --- | --- |
| Offer and first action | A new visitor can understand the subject and useful next step without guessing; labels match actual outcomes |
| Subject swap | Swapping only the brand/colors must not make the site equally plausible for an unrelated business; strengthen subject, evidence and composition |
| Opening choice | Entry/density fits the page's job; no obligatory slogan/photo/terminal/three-card recipe |
| Silhouette | Intentional changes in emphasis/density with stable alignment; no identical-card tower or empty-screen padding |
| Proof | An actual task/artifact/detail is readable and relevant; selected state and example content agree; no fake product/proof |
| Memorable idea | Identify the subject-linked visual/interaction idea beyond standard boxes; keep it meaningful in a static view |
| Surface clarity | No unrequested milky wash, haze, clashing neon or diffuse blur; intentional surfaces and visible controlled transitions at viewport scale |
| Typography | Useful hierarchy, readable body/metadata, coherent safe-font fallbacks and actual language wraps, inherited inline type |
| Cards and controls | Appropriate grouping, deliberate top alignment, consistent insets/edges; readable balanced controls in all required states |
| Image feedback | Actual hover/focus response is visible, crisp, stable and meaningful; touch/reduced motion retain access; no fake action |
| Refinement and subtraction | Identify the material visual correction made after the functional pass; remove an unnecessary flourish, preserving useful information and identity |
| Static reading | With JS/motion disabled, the offer, evidence and action explanation remain usable and visually complete |
| Mobile authorship | The phone composition has an intended crop/order/density and practical controls; no merely shrunken desktop scene |
| Reference fit | Compare equivalent crops at similar viewport scale, excluding external presentation frames; match hierarchy, media quality and density without copying identity |
| Task completion | Entry-to-result works with keyboard/touch and supported data, including failure/recovery where relevant; visual polish cannot compensate for a broken task |

Review the representative slice early, then finish the whole page to the same standard. A checked list, compiled page or automated score does not establish design quality. Report only checks performed and concrete limits; don't call an essential placeholder or unresolved major visual defect finished.

## Dual-mode delivery

Both **yarn build and yarn generate must work** on the application (not the layer playground), using pinned scripts or flag-equivalent PowerShell commands. Honor correct static flags/preset; run sequentially with separate logs and inspect each output before the next overwrites it. Stop previews holding output/native image DLLs open on Windows before rebuilding; never patch dependencies or disable optimization for a file lock.

- Start and inspect the built production server. Separately serve generated .output/public on a file-only static server without Nitro/backend or SPA fallback. Successful generation/HTTP 200 alone is insufficient.
- Test required direct routes/reloads, locale paths and dynamic detail enumeration, client navigation/back/forward, assets, actual metadata/SSR content, hydration, both themes, reveals/sticky, forms and implemented actions in each output. A fallback page does not prove a route was generated.
- Keep browser-only APIs out of prerender/setup. Static output cannot rely on missing Nitro endpoints, per-request public config or server-only secrets. Identify and implement a real compatible backend boundary where required; don't fake a result or silently drop behavior in SSG.
- Inspect SafeNuxtImg/static fallbacks and generated responsive media rather than assuming SSR transformations survive. Check console/asset/hydration failures on each actual output.
- Fix defects in their owner. No blanket ClientOnly, disabled SSR/checks, mismatch suppression, skipped routes or hand-edited generated/dependency files to force a pass.

Report commands, results and browser acceptance for each mode separately; state exact failures/blockers. Documentation-only edits need no rebuild. For website delivery, complete the root type/lint/test, viewport and interaction requirements as applicable. Reference evidence and observations live in REFERENCE-NOTES.md; they are not additional mandatory styling recipes.

Also inspect a fresh dev SSR load for Vue hydration warnings: production builds can omit development diagnostics. Collect console `warn` as well as `error` and page exceptions, distinguishing hydration failures from unrelated notices. Compare the received SSR text/markup with hydrated content, including required breaks and localized variants. Do not claim hydration is clean from an error-only log or production-only review; preserve successful existing checks but rerun affected modes after a source fix.
