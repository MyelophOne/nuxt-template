# On-demand layout recommendations

Read this router only when creating/changing a page structure, choosing a layout, or addressing the corresponding component/UX problem. Skip backend, build/tooling, unrelated logic, tiny copy fixes and changes preserving an explicit layout. This is agent-read documentation, not a runtime plugin or external skill loader.

User/reference requirements and the established site system win. When structure is open, choose by actual content/task, record the choice briefly and adapt it. Defaults describe relationships, not fixed templates, palettes, section quotas or props. The application AGENTS.md and DESIGN.md remain binding; installed package technical contracts still apply.

## Load only what the task needs

- Read **one primary page profile** per page/template in scope. A multi-page site does not load all profiles at project start.
- Add an element file only for the element being designed/reworked, not because it might occur later.
- Add a workflow only for its trigger. Do not recursively follow links or glob/concatenate this directory into prompts. Read a named subsection when sufficient.
- For an explicit existing layout, preserve it; consult only the requested element/fix workflow.
- A named visual style adds [one selected style preset](../presets/INDEX.md). Style and page type are independent; a bento preset does not turn an article into a dashboard. Generic requests for quality do not activate the preset library.

| Work in scope                                                          | Read                                            | Skip when                                                                              |
| ---------------------------------------------------------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------- |
| Campaign or single offer                                               | [Landing](pages/LANDING.md)                     | App/listing/article is the actual task                                                 |
| Corporate/company website                                              | [Corporate](pages/CORPORATE.md)                 | A single-offer campaign rather than multiple visitor intents                           |
| Studio, portfolio, professional service                                | [Studio/service](pages/STUDIO-SERVICE.md)       | A transactional collection or operational app is intended                              |
| SaaS/tool marketing, software download                                 | [Software](pages/SOFTWARE.md)                   | Building the actual workspace/account                                                  |
| Catalogue/library, shop listing, product detail                        | [Catalogue/commerce](pages/CATALOG-COMMERCE.md) | No collection/product decision exists                                                  |
| Dashboard, admin, workspace, settings                                  | [Application](pages/APPLICATION.md)             | Public marketing rather than repeated operations                                       |
| Appointment, reservation or event registration                         | [Booking/events](pages/BOOKING-EVENTS.md)       | No actual date/availability/registration task                                          |
| Article, documentation, editorial collection                           | [Editorial](pages/EDITORIAL.md)                 | No sustained reading/browsing task                                                     |
| Hero, proof scene, feature explanation                                 | [Hero/features](elements/HERO-FEATURES.md)      | Editing another region                                                                 |
| Cards, plans, metrics, tables, comparisons                             | [Cards/data](elements/CARDS-DATA.md)            | No such grouping is being designed                                                     |
| Header, menu, breadcrumbs, TOC, footer                                 | [Navigation](elements/NAVIGATION.md)            | Navigation is unchanged                                                                |
| Contact, booking, signup, checkout, settings form                      | [Forms](elements/FORMS.md)                      | No data-entry/action flow                                                              |
| Campaign banner, announcement or exported creative                     | [Banners](elements/BANNERS.md)                  | No banner in scope; consent banners keep their existing system                         |
| Toasts, transient notifications, async feedback                        | [Notifications](elements/NOTIFICATIONS.md)      | No notification flow being changed                                                     |
| Type scale, wrapping, readable text or truncation                      | [Typography](elements/TYPOGRAPHY.md)            | Typography is unchanged                                                                |
| New visual identity, creative public site or replacement art direction | [Art direction](workflows/ART-DIRECTION.md)     | Established direction is preserved; operational/reading task needs no new visual world |
| Final visual-detail refinement                                         | [Polish](workflows/POLISH.md)                   | Structure/actions are still broken or no visual change is in scope                     |
| Material ambiguity in a feature/flow, or requested brief               | [Shape](workflows/SHAPE.md)                     | Facts/behavior already settled                                                         |
| Confusing messages, terminology or localization copy                   | [Clarify](workflows/CLARIFY.md)                 | No wording problem in scope                                                            |
| Crowding, misalignment, responsive failure, critique                   | [Review/adapt](workflows/REVIEW.md)             | Unrelated implementation change                                                        |

Useful Swiss alignment/type principles are integrated in the shared guide, not a separate style profile. General frontend-design principles already live in [DESIGN.md](../DESIGN.md); do not load another universal design skill. [MOTION.md](../MOTION.md) applies when its behavior is used.

## Composition is not an implementation license

All page/column suggestions use existing Grid and installed breakpoints. Reuse package UI, media, i18n, themes and state contracts. Ratios/sketches describe relationships, not a replacement grid. Profiles never authorize remote fonts, fixed palettes, fake proof, forced animation, dependencies or stop-and-confirm rituals. Root content minima still apply; only explicit user scope overrides them.
