# Installed layer API map

Read when mapping application requirements to package capabilities. All source paths below are relative to the **resolved installed @myelophone/nuxt root**, not this template. Verify contracts in that version's source/types/generated registrations; names are discovery aids, not guarantees. Application AGENTS.md governs site generation; installed package AGENTS.md governs technical development/contracts.
| Need | Existing entry points |
| --- | --- |
| Page structure, widths, responsive columns, backgrounds | `app/components/grid/{Stack,Container,Row,Col}.vue`, `app/constants/layout.ts` |
| Buttons, headings, cards, forms | `UiButton`, `UiHeading`, `UiCard`, `UiInput`, `UiTextarea`, `UiCheckbox`, `UiToggler`, `UiFileUpload`; `app/components/ui/` |
| Dialogs, tabs, disclosure, feedback | `UiModal`, `UiPopup`, `UiTabs`, `UiAccordion`, `UiTooltip`, `UiAlert`, `UiSkeleton`, `UiSegmentedControl` |
| Navigation, locale, search | `UiLangLink`, `UiLanguageSelect`, `ViewResponsiveMenu`, `ViewHorizontalMenu`, `ViewBreadcrumbs`, `UiSiteSearch`, `UiCommandPalette` |
| Content compositions | `UiSplitSection`, `UiFeatureAccordion`, `ViewStickyHeadingContent`, `ViewPartialBackground`, `ViewFeatureBoxGrid`, `ViewQuoteBig` |
| Galleries and media | `SafeNuxtImg`, `SafeNuxtPicture`, `SafeImgWithLoader`, `UiLightBox`, `ViewImgSlider`, `ViewImageCompare` |
| Icons and supplementary content | `UiIcon`, `UiIcon8`, `ViewSocialBar`, `ViewLogoGrid`, `ViewLogoSlider`, `ViewReviewsSlider`, `ViewAnimatedCounter`, `ViewTallyForm` |
| Translations and complete reusable pages | `useMultiLang`, `useReadyPage`, `mergeReadyContent`, `readyCssVariables`, `PageReadyLocalized`, `UiLangVisible` |
| API, state and persistence | `useApi`, `useSettingsStore`, optional `useUserStore`/`useCartStore`; inspect `app/composables/` and `app/stores/` |
| SEO, consent and embeds | `useAppSeo`, `SeoOrgInfo`, `SeoBrandInfo`, `SeoProfileInfo`, `CookieConsentWrapper`, `ConsentYoutube`, `ConsentGoogleMap` |
| Entrance effects, theme, device constraints | `UiThemeToggle`, `app/plugins/reveal.ts`, `app/assets/css/animation.css`, `useSettingsStore`, `useDevice`, `useNetwork` |

