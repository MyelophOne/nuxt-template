# MyelophOne Nuxt Template

Ready-to-use production-oriented frontend template powered by [`@myelophone/nuxt`](https://github.com/myelophone/nuxt): Nuxt 4, Tailwind CSS 4, SSR/SSG, multilingual routing, consent management, SEO, Pinia stores, security defaults, performance tooling, Docker, and a reusable UI library.

**[Create a repository from this template](https://github.com/myelophone/nuxt-template/generate)** · **[Framework documentation](https://github.com/myelophone/nuxt)** · **[@myelophone/goserver-template](https://github.com/myelophone/goserver-template/generate)**

## What is this

`@myelophone/nuxt-template` is the application-facing starting point for projects built on the [`@myelophone/nuxt`](https://github.com/myelophone/nuxt) framework layer. The layer owns shared framework behavior; this repository is where an application adds its pages, components, locales, assets, server endpoints, configuration, and tests.

Use this template for:

- multilingual corporate and product websites;
- SEO-oriented content sites and landing pages;
- SSR applications and statically generated sites;
- dashboards, catalogues, customer portals, and commerce frontends;
- consent-aware analytics, advertising, CRM, forms, and chat integrations;
- a frontend paired with [`@myelophone/goserver`](https://github.com/myelophone/goserver).

The inherited framework provides:

- Nuxt 4, Vue 3, TypeScript, and Tailwind CSS 4;
- Node SSR and static-generation deployment modes;
- localized routing and lazy namespace-based translations;
- canonical URLs, hreflang, robots, OG images, breadcrumbs and FAQ structured data;
- CSP/security headers, URL normalization, request limits, rate limiting, compression, and immutable asset caching;
- consent categories and presets for more than 30 third-party providers;
- optional user and cart stores with consent-aware persistence and cross-tab synchronization;
- currency conversion and an exchange-rate proxy;
- API, storage, network, device, theme, popup, modal, command, and SEO composables;
- layout, UI, content, media, consent, and SEO components;
- reduced-motion, slow-network, low-battery, bot, static, and old-browser fallbacks.

## @myelophone/goserver compatibility

This frontend template is designed to work seamlessly with [`@myelophone/goserver`](https://github.com/myelophone/goserver), the companion production-oriented Go backend framework.

For the fastest full-stack start, create the backend from [`@myelophone/goserver-template`](https://github.com/myelophone/goserver-template):

- **Frontend:** [`@myelophone/nuxt-template`](https://github.com/myelophone/nuxt-template/generate)
- **Backend:** [`@myelophone/goserver-template`](https://github.com/myelophone/goserver-template/generate)

The responsibilities fit together naturally:

| Nuxt frontend                             | @myelophone/goserver backend                                             |
| ----------------------------------------- | ------------------------------------------------------------------------ |
| Pages, SSR/SSG, UI, themes, i18n, SEO     | HTTP API, routing, validation, normalization                             |
| Consent-aware third-party integrations    | Authentication, encrypted sessions, JWT, CSRF                            |
| Browser-side user/cart presentation state | Trusted users, permissions, carts, orders, transactions                  |
| HTTP and WebSocket clients                | WebSocket hubs and signed connection tokens                              |
| Frontend caching and CDN assets           | Database/Redis access, server cache, cron and background tasks           |
| Frontend health endpoint                  | Health, metrics, pprof, logging, recovery, rate limits and load shedding |

The recommended production topology is same-origin:

```text
https://example.com/        -> @myelophone/nuxt-template :3000
https://example.com/api/**  -> @myelophone/goserver-template :8080
https://example.com/ws/**   -> @myelophone/goserver-template :8080
```

This keeps cookies first-party and simplifies @myelophone/goserver sessions, CSRF protection, browser credentials, and WebSocket security. Configure the gateway/reverse proxy to route by path. With @myelophone/goserver exposed directly below `/api`, set in its `.env`:

```dotenv
API_PREFIX=/api
HTTP_PORT=8080
SESSION_KEY=<high-entropy-secret>
JWT_SECRET=<different-high-entropy-secret>
WS_TOKEN_KEY=<different-high-entropy-secret>
METRICS_SECRET=<different-high-entropy-secret>
```

Call the same-origin API from Nuxt:

```ts
interface CurrentUser {
 id: string;
 name: string;
 roles: string[];
}

const user = await $fetch<CurrentUser>("/api/v1/me", {
 credentials: "include",
});
```

For a mutation protected by @myelophone/goserver CSRF middleware, obtain and send the token according to the backend route contract:

```ts
await $fetch("/api/v1/profile", {
 method: "PATCH",
 credentials: "include",
 headers: {
  "X-CSRF-Token": csrfToken,
 },
 body: { name: "Ada" },
});
```

When browser and backend origins differ during development, configure `CSRF_TRUSTED_ORIGINS` to the exact frontend origin and configure credential/CORS policy at the gateway. Do not replace explicit origins with a wildcard for cookie-authenticated requests.

### Proxy @myelophone/goserver through Nuxt

If a separate reverse proxy is not available in development, add a catch-all Nitro endpoint to the application:

```ts
// app/server/api/[...path].ts
export default defineEventHandler(async (event) => {
 const path = getRouterParam(event, "path") || "";
 return proxyRequest(event, `http://127.0.0.1:8080/${path}`);
});
```

In that arrangement, leave @myelophone/goserver `API_PREFIX` empty: Nuxt receives `/api/users` and forwards `/users`. In Docker, replace `127.0.0.1` with the technical Compose service name, for example `http://goserver:8080`.

Choose one owner for the public `/api` prefix:

- reverse proxy owns `/api` → @myelophone/goserver uses `API_PREFIX=/api`;
- Nuxt catch-all owns `/api` and strips it → @myelophone/goserver uses an empty `API_PREFIX`.

Do not enable both prefixing strategies at the same time.

### Connect @myelophone/goserver authentication to the user store

@myelophone/goserver remains the source of truth. The Nuxt user store mirrors only display/session state:

```ts
const userStore = useUserStore();

const profile = await $fetch("/api/v1/me", {
 credentials: "include",
});

userStore.setAuthenticated({
 profile,
 session: {
  provider: "goserver",
  expiresAt: profile.sessionExpiresAt,
 },
});

userStore.setSessionExtender(async () => {
 return await $fetch("/api/v1/session/extend", {
  method: "POST",
  credentials: "include",
 });
});
```

Never authorize a request from the browser-side Pinia store. Validate the encrypted session/JWT and permissions inside @myelophone/goserver on every protected backend operation.

## Requirements

- Node.js 24+ for local development; the upstream CI currently targets Node.js 26.
- Yarn 4.18.0 through Corepack.
- Docker with Compose for the supplied container workflow.
- Optionally Go 1.26+ when using `@myelophone/goserver-template` locally without Docker.

## Quick start

### Create from the GitHub template

Open **[Use this template](https://github.com/myelophone/nuxt-template/generate)** and create a new repository without preserving this template's history.

Then clone your repository:

```bash
git clone https://github.com/acme/my-app.git
cd my-app
corepack enable
yarn install
yarn dev
```

Open <http://localhost:3000>.

### Clone directly

```bash
git clone https://github.com/myelophone/nuxt-template.git my-app
cd my-app
corepack enable
yarn install
yarn dev
```

The application works without `myelophone.ts` and then uses all defaults supplied by `@myelophone/nuxt`. Create this file only when the project needs to override those defaults. The tracked `myelophone.dev.ts` is an optional configuration example:

```bash
cp myelophone.dev.ts myelophone.ts
```

On PowerShell:

```powershell
Copy-Item myelophone.dev.ts myelophone.ts
```

`myelophone.ts` is intentionally ignored by Git. When present, it is loaded as the project-level override; when absent, the template uses the framework configuration unchanged. If a project needs shared overrides in version control, change that repository policy deliberately or import a separately tracked, non-secret config from the local override.

## First application changes

Create a page:

```vue
<!-- app/pages/index.vue -->
<script setup lang="ts">
useAppSeo({
 title: "Acme",
 description: "Production application powered by MyelophOne Nuxt",
});
</script>

<template>
 <GridContainer size="content" py="16">
  <GridRow align="center" :equal-height="true">
   <GridCol :span="7" :sm-span="12">
    <UiHeading :level="1">Build faster</UiHeading>
    <p class="mt-4 text-lg opacity-80">
     Nuxt frontend, production foundation included.
    </p>
    <UiButton
     as="nuxt-link"
     to="/about"
     label="Learn more"
     color="primary"
     class="mt-6"
    />
   </GridCol>
  </GridRow>
 </GridContainer>
</template>
```

Add project locales:

```text
app/locales/en/home.json
app/locales/pl/home.json
app/locales/ru/home.json
```

```json
{
 "title": "Build faster",
 "description": "Production foundation included"
}
```

```vue
<script setup lang="ts">
const { t } = useMultiLang("home");
</script>

<template>
 <h1>{{ t("home.title") }}</h1>
</template>
```

Static files belong in `public/`; bundled styles, images, and fonts belong in `app/assets/`; reusable Vue components belong in `app/components/`.

## How configuration works

`nuxt.config.ts` always preserves:

```ts
extends: ['@myelophone/nuxt']
```

No override file is required. When an optional root `myelophone.ts` exists, it is imported and deep-merged over the layer configuration:

- objects merge recursively;
- arrays append values not already present;
- defined project values override scalar layer values;
- `extends` remains owned by the template.

For template development, `playground/nuxt.config.ts` first extends the root template config and then deep-merges an optional `playground/myelophone.ts` on top. The effective order is therefore: `@myelophone/nuxt` defaults, root `myelophone.ts`, then `playground/myelophone.ts` for sandbox-only overrides.

Example `myelophone.ts`:

```ts
import {
 cookieScriptPresets,
 mergeCookieScriptConfigs,
} from "#myelophone/app/constants/predefinedCookieScripts";

const cookieScripts = mergeCookieScriptConfigs(
 cookieScriptPresets.googleAnalytics4({ measurementId: "G-XXXX" }),
 cookieScriptPresets.microsoftClarity({ projectId: "XXXX" }),
);

export default defineNuxtConfig({
 app: {
  head: {
   title: "Acme",
   meta: [{ name: "description", content: "Acme application" }],
  },
 },

 multi18n: {
  defaultLocale: "en",
  locales: ["en", "pl", "ru"],
 },

 runtimeConfig: {
  apiBaseServer: "http://goserver:8080",
  public: {
   apiBase: "https://example.com/api",
  },
 },

 myelophone: {
  siteDomain: "https://example.com",
  cookieScripts,
  cookieControl: { enabled: true },
  bundleTranslations: false,
  splitCss: true,
  stores: { cart: true, user: true },
  frankfurterBaseCurrency: "EUR",
  frankfurterCurrencies: ["USD", "PLN", "GBP"],
  creativeCursor: false,
  ssrStream: true,
  tally: { domain: "tally.so" },
 },
});
```

Do not place secrets in `runtimeConfig.public`. Private API credentials belong in private runtime configuration or, preferably, in @myelophone/goserver environment variables.

### Runtime configuration reference

| Key              | Default | Purpose                                        |
| ---------------- | ------- | ---------------------------------------------- |
| `apiBaseServer`  | unset   | Private server-side base URL used by `useApi`. |
| `public.apiBase` | unset   | Public API base fallback on the server.        |

### Myelophone build-time configuration

| Key                                  | Default                 | Purpose                                                            |
| ------------------------------------ | ----------------------- | ------------------------------------------------------------------ |
| `myelophone.siteDomain`              | `http://localhost:3000` | Production origin for SSR-generated alternate and breadcrumb URLs. |
| `myelophone.cookieControl.enabled`   | `true` in the layer     | Enable consent UI and preference handling.                         |
| `myelophone.cookieScripts`           | empty                   | Consent-aware integrations and cookieless notices.                 |
| `myelophone.bundleTranslations`      | `true`                  | Bundle translations; `false` enables locale chunk grouping.        |
| `myelophone.splitCss`                | `false`                 | Vite CSS code splitting.                                           |
| `myelophone.stores.cart`             | `false`                 | Initialize cart, rates, persistence, calculations and tab sync.    |
| `myelophone.stores.user`             | `false`                 | Initialize user/session presentation state and tab sync.           |
| `myelophone.frankfurterCurrencies`   | `[]`                    | Quote currencies for the included rate endpoint.                   |
| `myelophone.frankfurterBaseCurrency` | `USD`                   | Exchange-rate base currency.                                       |
| `myelophone.creativeCursor`          | `false`                 | Custom fine-pointer cursor.                                        |
| `myelophone.ssrStream`               | `false`                 | Enable Nuxt experimental streaming SSR for non-static builds.      |
| `myelophone.tally.domain`            | `tally.so`              | Tally embed host.                                                  |

### Environment variables

| Variable                  | Purpose                                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------------------- |
| `NUXT_API_BASE_SERVER`    | Server-only API origin, for example `http://goserver:8080`.                                     |
| `NUXT_PUBLIC_API_BASE`    | Browser-visible API origin if required.                                                         |
| `NUXT_STATIC=true`        | Select static generation behavior. Set automatically by `yarn generate`.                        |
| `NUXT_SSR_STREAMING=true` | Enable Nuxt experimental streaming SSR for non-static builds.                                   |
| `NITRO_PRESET=<preset>`   | Override the SSR preset; layer default is `node-cluster`.                                       |
| `PROD_DIST=true`          | Exclude framework playground locales. Set by normal template scripts.                           |
| `NUXT_PLAYGROUND=true`    | Include the `playground/` test application during template development. Set by sandbox scripts. |

## Commands

| Command               | Purpose                                                                      |
| --------------------- | ---------------------------------------------------------------------------- |
| `yarn dev`            | Start the application on port 3000.                                          |
| `yarn build`          | Create the production SSR build.                                             |
| `yarn server`         | Run `.output/server/index.mjs`.                                              |
| `yarn generate`       | Generate static output.                                                      |
| `yarn preview`        | Preview the application build.                                               |
| `yarn sandbox:dev`    | Run the isolated `playground/` test application during template development. |
| `yarn sandbox:build`  | Build the development test application.                                      |
| `yarn sandbox:server` | Run the built development test application.                                  |
| `yarn analyze`        | Analyze the application bundle.                                              |
| `yarn test:types`     | Type-check the application and development playground.                       |
| `yarn playwright`     | Run browser tests when a Playwright config/tests are added.                  |
| `yarn test`           | Type-check, then run Playwright.                                             |
| `yarn biome:check`    | Apply Biome lint fixes to `app/`.                                            |
| `yarn biome:format`   | Format `app/`.                                                               |
| `yarn audit`          | Audit dependencies.                                                          |
| `yarn upgrade`        | Upgrade Nuxt and prepare generated types.                                    |
| `yarn update`         | Interactively update dependencies.                                           |
| `yarn lock-update`    | Deduplicate the lockfile to highest versions.                                |

Scripts use POSIX environment assignment syntax. Run them in Linux, macOS, WSL, Git Bash, or CI. In native PowerShell, set environment variables separately or use a compatible shell.

## Internationalization

The default language has no URL prefix; every other language receives a localized route:

```ts
multi18n: {
	defaultLocale: 'en',
	locales: ['en', 'pl', 'ru'],
}
```

| Page                  | Generated URLs                     |
| --------------------- | ---------------------------------- |
| `app/pages/index.vue` | `/`, `/pl`, `/ru`                  |
| `app/pages/about.vue` | `/about`, `/pl/about`, `/ru/about` |

`/en/about` redirects permanently to `/about`. Disable localized copies for a page with:

```ts
definePageMeta({ i18n: false });
```

Translations are grouped by namespace and loaded lazily:

```ts
const { t, tn, loadPromise, refresh } = useMultiLang(["checkout", "common"]);

t("checkout.hello", { name: "Ada" });
t("checkout.items", 3);
tn("checkout.items", 12500);
```

`t` supports interpolation and `Intl.PluralRules`; `tn` produces compact large counts. Project locale files override layer strings with the same namespace/key. Nested objects and dotted JSON keys are supported.

Preserve configuration-driven keys from build-time tree shaking:

```ts
// @i18n-keep checkout.dynamic_label
useSafeList(dynamicConfig);
```

Use `UiLanguageSelect`, `UiLangLink`, and `UiLangVisible` for language-aware UI.

## SEO

```vue
<script setup lang="ts">
const product = await loadProduct();

useAppSeo({
 title: () => product.name,
 descriptionKey: "product.seo_description",
 params: { name: computed(() => product.name) },
 noIndex: !product.published,
});
</script>
```

The inherited shell provides:

- canonical URLs, preserving only the `page` query parameter;
- alternate-language and `x-default` links;
- breadcrumb JSON-LD and `ViewBreadcrumbs`;
- FAQPage JSON-LD through `<UiAccordion faq>`;
- robots and OG image modules;
- URL lowercase/duplicate/trailing-slash normalization;
- HTTP and `www` canonical redirects;
- `SeoNoIndex` for 4xx pages;
- `SeoContentNoIndex` for client-only `data-nosnippet` content.

Always set the production `myelophone.siteDomain`; SSR cannot generate reliable absolute SEO URLs without it.

The supplied `public/_robots.txt` allows ordinary crawling and asks compliant crawlers to clean tracking/filter parameters. Review it for each project's search requirements.

## Cookie consent and integrations

Enable the consent UI and combine provider presets in `myelophone.ts`:

```ts
const cookieScripts = mergeCookieScriptConfigs(
 cookieScriptPresets.googleTagManager({ containerId: "GTM-XXXX" }),
 cookieScriptPresets.googleAnalytics4({ measurementId: "G-XXXX" }),
 cookieScriptPresets.metaPixel({ pixelId: "XXXX" }),
 cookieScriptPresets.hubspot({ portalId: "XXXX" }),
);
```

Available integrations:

| Category      | Presets                                                                                            |
| ------------- | -------------------------------------------------------------------------------------------------- |
| Google        | Google Tag Manager, Google Analytics 4, Google Ads, reCAPTCHA                                      |
| Analytics     | Yandex Metrica, Baidu Tongji, Matomo, Plausible, Umami, Hotjar, Microsoft Clarity, Adobe Analytics |
| Advertising   | Meta, VK, myTarget/Top.Mail.Ru, LinkedIn, TikTok, Pinterest, X                                     |
| CRM/marketing | HubSpot, Bitrix24, amoCRM, Salesforce Account Engagement, Mailchimp                                |
| Chat          | Intercom, Zendesk, Crisp, Tawk.to, JivoSite, LiveChat, Tidio, Chatwoot, Chatra                     |

The loader gates necessary/analytics/marketing/functional categories, deduplicates shared scripts, updates multi-category consent APIs, and supports initializers, inline code, category hooks, custom script attributes, legal metadata, and cookieless notices.

Gate embedded content:

```vue
<ConsentYoutube video-id="dQw4w9WgXcQ" />
<ConsentGoogleMap address="Warsaw, Poland" language="pl" region="pl" />

<CookieConsentWrapper category="functional" service-name="Support chat">
	<SupportChat />
</CookieConsentWrapper>

<CookiePrivacyPolicy title="Cookie policy" />
```

Programmatic control is available through `useCookieControl()` and `useCookieModal()`. Consent tooling is a technical implementation, not legal advice; validate wording, categories, retention, transfers, and lawful bases for every deployment.

## User state

Enable `myelophone.stores.user` and connect it to @myelophone/goserver or another backend:

```ts
const user = useUserStore();

user.configureUser({
 storageKey: "user",
 persistSession: true,
 sessionExtensionSeconds: 3600,
});

user.setAuthenticated({
 profile: {
  id: "user-42",
  name: "Ada",
  roles: ["admin"],
  permissions: ["orders.read"],
 },
 session: { provider: "goserver", expiresAt },
});

user.hasRole("admin");
user.hasPermission("orders.read");
```

The store exposes authentication/pending/expiry getters, profile/session mutation, roles and permissions, custom session extension, errors, logout, consent-aware cookie/localStorage persistence, and cross-tab synchronization.

The browser store is presentation state only. Keep credentials in secure HttpOnly cookies where possible and enforce authorization in @myelophone/goserver.

## Cart and currencies

Enable `myelophone.stores.cart`:

```ts
const cart = useCartStore();

cart.configureCart({
 baseCurrency: "EUR",
 autoFetchRates: true,
 taxPercentMetaKey: "vat",
 shippingAmountMetaKey: "shipping",
 shippingCurrencyMetaKey: "shippingCurrency",
});

cart.addItem({ id: "sku-1", name: "Headphones", price: 99, currency: "EUR" });
cart.incrementItem("sku-1");
await cart.patchMeta({ vat: 23, shipping: 8, shippingCurrency: "EUR" });
cart.applyCoupon("WELCOME10", 10);
cart.setCurrency("PLN");
```

The store supports mixed item currencies, coupons, metadata, custom async calculation strategies/hooks, exchange-rate fetching, conversion, consent-aware persistence, and cross-tab synchronization. `ViewCurrencySelect` provides ready currency UI.

The inherited `GET /api/exchange-rates?base=EUR&currencies=USD,PLN` endpoint proxies Frankfurter. When @myelophone/goserver owns the public `/api/**` namespace, reserve or remap this endpoint at the gateway to avoid a route collision.

Trusted prices, discounts, tax, shipping, stock, and checkout totals must be recalculated by @myelophone/goserver. Browser cart totals are for presentation only.

## API and application data

For same-origin @myelophone/goserver APIs, native Nuxt `$fetch`/`useFetch` is the simplest approach:

```ts
const { data, status, refresh } = await useFetch("/api/v1/products", {
 credentials: "include",
 query: { page: 1 },
});
```

The inherited `useApi()` supplies typed `get`, `post`, `put`, and `delete`, three retries, Bearer `auth_token` forwarding, and Nuxt error conversion:

```ts
const api = useApi();
const result = await api.post<Order, CreateOrder>("/orders", payload);
```

Current framework behavior uses `http://localhost:3000` as the client-side `useApi` base URL. For production same-origin @myelophone/goserver calls, prefer relative `$fetch`/`useFetch` until that upstream behavior is changed, or wrap the API in an application-specific client.

Use Pinia Colada for query/mutation caching when server state requires invalidation, refetching, or optimistic updates.

## Storage, network, device, and UI state

```ts
const settings = useStorage(
 "settings",
 { compact: false },
 {
  storage: "cookie",
  fallbackStorage: "local",
  syncTabs: true,
  canUseCookie: () => useCookieControl().checkConsent("functional"),
 },
);
```

| API                 | Capability                                                                                                     |
| ------------------- | -------------------------------------------------------------------------------------------------------------- |
| `useStorage`        | Typed local/session/cookie persistence, serializer, expiry, fallback, predicates, refresh/remove and tab sync. |
| `useNetwork`        | Online state, effective connection type, Save-Data/slow-connection detection.                                  |
| `useDevice`         | Bot/mobile/legacy/reduced-motion/low-battery/static-mode detection.                                            |
| `useDeviceStore`    | OS, browser, viewport, DPR, touch, orientation, language, and network state.                                   |
| `useGeoFetch`       | Country/city lookup with fallback provider, timeout, and session cache.                                        |
| `useStoreBroadcast` | Synchronize selected Pinia properties between tabs.                                                            |
| `useThemeSync`      | Apply and broadcast light/dark themes.                                                                         |
| `usePopupControl`   | Cookie-frequency-capped popup state.                                                                           |
| `useModalState`     | Modal stacking and body-scroll lock.                                                                           |
| `useCommand`        | Lifecycle-safe command palette registration.                                                                   |
| `useBreadcrumbs`    | Generated localized route breadcrumbs.                                                                         |
| `useLoadScript`     | Simple client script loading; use consent scripts for tracking.                                                |
| `useStatic`         | Detect static-generation mode.                                                                                 |
| `useSnapScroll`     | Coordinate snap containers and global scroll-to-top.                                                           |

## Themes and responsive behavior

The global theme uses `data-theme="light|dark"` with `--ui-bg`, `--ui-text`, `--ui-border`, and `--loader-fill-color`. Use:

```vue
<script setup lang="ts">
const settings = useSettingsStore();
</script>

<template>
 <UiButton label="Theme" @click="settings.toggleTheme()" />
</template>
```

The theme initializes before paint, follows system preference by default, synchronizes across tabs, and updates browser theme color.

Reveal animations adapt automatically to slow networks, reduced motion, low battery, bots, and old browsers:

```vue
<section v-reveal>Slide</section>
<section v-reveal:fade.fast>Fade</section>
<section v-reveal:zoom.slow.repeat="150">Repeated zoom</section>
```

## Component catalogue

Components inherited from the layer are auto-imported with directory prefixes.

### Layout

| Component       | Capability                                                                                                            |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| `GridContainer` | Fullwidth/boxed/content/narrow/text widths, spacing, visibility, responsive image/gradient/video/YouTube backgrounds. |
| `GridRow`       | Alignment, justification, equal-height columns, widths, spacing, visibility, responsive media backgrounds.            |
| `GridCol`       | 12-column desktop/mobile spans, mobile order, visibility and responsive media backgrounds.                            |
| `GridStack`     | Dynamic wrapper for stacked content and responsive backgrounds.                                                       |

### UI primitives

| Components                                                                  | Capability                                                                                             |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `UiAccordion`, `UiFeatureAccordion`                                         | Regular/multiple accordions, custom UI, FAQ schema, feature/image synchronization.                     |
| `UiAlert`, `UiBanner`, `UiBadge`, `UiChip`                                  | Status and notification primitives with variants, colors, icons, avatars, actions, and close behavior. |
| `UiButton`, `UiCard`                                                        | Buttons/anchors/NuxtLinks and content/link cards with slots and visual variants.                       |
| `UiInput`, `UiTextarea`, `UiCheckbox`, `UiToggler`, `UiSegmentedControl`    | Accessible model-bound form controls and emitted actions.                                              |
| `UiAvatar`, `ViewAvatarGroup`                                               | Images, icons, initials, status chips, overlap groups and overflow counts.                             |
| `UiHeading`, `UiTextColumn`, `UiTruncateText`                               | Semantic headings, prose wrappers, and responsive expansion.                                           |
| `UiIcon`, `UiIcon8`                                                         | Server-rendered Iconify SVG and Icons8 PNG resources.                                                  |
| `UiModal`, `UiPopup`                                                        | Stacked keyboard-aware modals and frequency-capped promotional popups.                                 |
| `UiTable`                                                                   | Nested-key sorting and automatic row virtualization above 100 items.                                   |
| `UiLightBox`                                                                | Lazy-loaded gallery/lightbox.                                                                          |
| `UiLocalTime`, `UiRelativeTime`, `UiScheduledContent`, `ViewCountdownTimer` | Timezone, relative time, scheduled visibility, recurrence and countdown UI.                            |
| `UiGeoDependent`, `UiLangVisible`                                           | Country and locale conditional rendering.                                                              |
| `UiLanguageSelect`, `UiLangLink`                                            | Locale navigation and language-aware links.                                                            |
| `UiSnapContainer`, `UiSnapSection`, `UiStickyWrapper`, `UiViewportSpacer`   | Snap, sticky and viewport-based layout behavior.                                                       |
| `UiSmartContrast`, `UiSplitSection`                                         | Contrast-aware backgrounds and image/text split layouts.                                               |
| `UiProtectedEmail`                                                          | Client-assembled email links.                                                                          |
| `UiCommandPalette`, `UiScrollToTop`, `UiCursorCreative`                     | Global navigation/actions and optional creative cursor.                                                |

### Content and media

| Components                                                                         | Capability                                                                  |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `ViewAnimatedCounter`, `ViewInfiniteMarquee`, `ViewAnnouncementBar`, `ViewInfoBar` | Animated figures, continuous strings, announcements and action/info strips. |
| `ViewBreadcrumbs`, `ViewContentWithToc`, `ViewCopyright`                           | Navigation, generated heading anchors, and localized copyright.             |
| `ViewCreativeCTA`, `ViewFeatureBoxGrid`, `ViewQuoteBig`                            | Marketing content blocks.                                                   |
| `ViewHorizontalMenu`, `ViewResponsiveMenu`, `ViewSocialBar`                        | Overflow-aware navigation and social links.                                 |
| `ViewImageCompare`, `ViewImgSlider`, `ViewReviewsSlider`                           | Before/after, mixed image/video, and draggable review sliders.              |
| `ViewLogoGrid`, `ViewLogoSlider`                                                   | Responsive linked partner/customer logos.                                   |
| `ViewTallyForm`                                                                    | Standard, popup, and fullscreen Tally forms with themes and hidden fields.  |
| `ConsentYoutube`, `ConsentGoogleMap`                                               | Consent-gated external embeds.                                              |
| `SafeNuxtImg`, `SafeNuxtPicture`, `SafeImgWithLoader`                              | Static/SSR-safe responsive images and lazy loading.                         |

### Consent, SEO, and shell

| Components                                    | Capability                                                 |
| --------------------------------------------- | ---------------------------------------------------------- |
| `CookieConsentWrapper`, `CookiePrivacyPolicy` | Category-gated slots and generated provider disclosure.    |
| `CookieBanner`, `CookieSettingsModal`         | Global consent UI, already mounted by the framework shell. |
| `SeoNoIndex`, `SeoContentNoIndex`             | Page and fragment indexing control.                        |
| `PagePreloader`, `ViewWarningOutdated`        | Route preloader and unsupported-browser fallback.          |

For every prop, slot, event, composable return value, cookie-provider option, and advanced scenario, see the complete [`@myelophone/nuxt` documentation](https://github.com/myelophone/nuxt#readme).

## Utility functions

```ts
sortBy(items, "price", "asc");
transliterate("Пример заголовка");
getYoutubeEmbed("https://youtu.be/dQw4w9WgXcQ");
getYoutubePoster("dQw4w9WgXcQ");

const refreshLatest = useAsyncRefresh(refresh);
await refreshLatest();
```

To validate forms @myelophone/nuxt-template uses Valibot.

## SSR, static generation, and Docker

### Node SSR

```bash
yarn build
yarn server
```

The inherited default Nitro preset is `node-cluster`. Set `NITRO_PRESET=node-server` when containers or the hosting platform already manage process scaling.

### Static generation

```bash
yarn generate
```

Static mode disables runtime IPX transformation, crawls routes, and includes an Apache `.htaccess` with clean HTML routing, compression, cache headers, and baseline security headers.

### Docker Compose

```bash
docker compose up --build
```

The supplied multi-stage image:

1. builds the application with Node Alpine;
2. copies only `.output` and the license into a small Alpine runtime;
3. exposes port 3000;
4. runs the Nitro server without deprecation/warning output.

Compose maps port 3000, restarts unless stopped, checks the application every 30 seconds, and rotates JSON logs at three 10 MB files.

For a combined Nuxt + @myelophone/goserver deployment, put both services on the same private container network and expose them through a reverse proxy. Only the proxy should publish public HTTP/HTTPS ports; Nuxt and @myelophone/goserver communicate through service DNS names.

## Production and high-load checklist

The layer includes HTML Brotli/Gzip, public-asset compression, immutable hashed-asset caching, CSS cleanup/minification/splitting, locale tree shaking, selective preloading, early hints, security headers, request-size limits, process-local rate limiting, console removal, source-map policy, health endpoints, and client capability fallbacks.

Before calling an application high-load ready:

- place it behind a CDN and reverse proxy;
- terminate TLS and normalize trusted proxy headers there;
- run multiple stateless Nuxt and @myelophone/goserver instances;
- use Redis/database-backed @myelophone/goserver sessions, cache, rate limits, and WebSocket fan-out where shared state is required;
- centralize logs, metrics, traces, error reporting, and alerts;
- load-test realistic SSR/API/cache/session behavior;
- set timeouts, body limits, connection pools, and graceful shutdown budgets;
- cache only responses that are safe for the current authentication/locale model;
- keep secrets outside images and public Nuxt runtime configuration;
- configure exact CORS/CSRF origins and cookie domain/SameSite/Secure behavior;
- recalculate all trusted commerce values in @myelophone/goserver;
- pin and regularly audit both JavaScript and Go dependencies.

The Nuxt layer's rate limiter uses an in-memory LRU and is not a distributed quota. Its default CORS policy allows all origins, CSRF and SRI are disabled, and inline styles are permitted by CSP. Review and override these defaults for the application's threat model and let the edge/@myelophone/goserver enforce shared controls.

Health endpoints inherited from the layer:

- `GET /healthz` → `{ "status": "ok" }`;
- `GET /api/healthz` → `ok`.

If `/api/**` is routed entirely to @myelophone/goserver, the public `/api/healthz` path belongs to @myelophone/goserver; keep Nuxt's `/healthz` for its own probe.

## Project structure

```text
nuxt-template/
├── app/
│   ├── assets/             # project CSS, fonts and bundled media
│   ├── components/         # project-specific Vue components
│   ├── composables/        # project composables and API clients
│   ├── layouts/            # project layouts
│   ├── locales/            # namespace JSON by language
│   ├── middleware/         # project route middleware
│   ├── pages/              # file-based application routes
│   ├── plugins/            # project Nuxt plugins
│   ├── server/             # project Nitro routes/middleware/plugins
│   └── stores/             # project Pinia stores
├── playground/             # Nuxt-recommended test app for template development
├── public/                 # files served from site root
├── myelophone.dev.ts       # optional tracked override example
├── myelophone.ts           # optional ignored project override
├── nuxt.config.ts          # layer loader and deep merge
├── Dockerfile              # production container build
├── docker-compose.yml      # standalone frontend service
└── package.json            # scripts and pinned framework toolchain
```

Only `app/pages/.gitkeep` and `app/locales/.gitkeep` are initially present. Create the other directories as the application needs them.

## Maintainers

### Update policy

The `playground/` directory is exclusively a test application for developing and verifying the template, following the Nuxt convention for module/layer development. It is not the end application's source directory; application code belongs in the root `app/`.

The template currently consumes `@myelophone/nuxt` directly from GitHub. Treat framework updates like dependency upgrades:

1. review upstream changes and README;
2. update the lockfile intentionally;
3. run application and development-playground type checks;
4. verify SSR build and static generation when relevant;
5. run browser tests and dependency audit;
6. exercise @myelophone/goserver API/session/CSRF/WebSocket integration;
7. rebuild and probe the container.

Application code belongs in `app/`. Avoid copying framework-owned components or composables unless the application intentionally forks their behavior; prefer project wrappers and upstream contributions.

### Required checks

```bash
yarn install --immutable
yarn test:types
yarn biome:check
yarn build
yarn generate
yarn playwright
yarn audit
docker compose build
```

Add a Playwright configuration and tests before relying on `yarn playwright`; this initial template does not currently include them.

For the @myelophone/goserver pair, also run in the backend repository:

```bash
go test ./...
go vet ./...
govulncheck ./...
```

### Maintenance checklist

- Keep the `extends: ['@myelophone/nuxt']` contract intact.
- Keep the optional `myelophone.dev.ts` example aligned with current runtime config types and document intentional project overrides.
- Add locale files for every configured locale and safelist dynamic keys.
- Keep frontend user/cart state untrusted and backend-owned business rules authoritative.
- Verify CSP allowlists whenever adding scripts, frames, images, fonts, forms, or API origins.
- Verify reverse-proxy routing so Nuxt and @myelophone/goserver do not compete for `/api/**`.
- Test cookies and CSRF on the actual HTTPS domain, not only localhost.
- Use shared infrastructure for limits, sessions, cache, queues, and WebSockets across replicas.
- Rotate secrets and use independent values for sessions, JWT, WebSockets, metrics, databases, and external providers.
- Keep `package.json`, Yarn release, framework revision, lockfile, Docker image, and documentation synchronized.
- Run both JavaScript and Go security audits for a full-stack release.

### Ownership

Maintained by [MyelophOne](https://github.com/MyelophOne).<br>
Author: [Aliaksandr Ivanou](https://github.com/aleksivanou).

## License

Copyright © 2026 Aliaksandr Ivanou. All rights reserved.

This project is licensed under the **PolyForm Noncommercial License 1.0.0**. Commercial use is not granted by that license. Read [LICENSE](LICENSE) before using, redistributing, or building on the project.
