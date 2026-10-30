FROM node:24-alpine AS builder

WORKDIR /app

COPY . .

ENV YARN_ENABLE_INLINE_BUILDS=1

RUN node .yarn/releases/yarn-4.18.1.cjs install --immutable

RUN node .yarn/releases/yarn-4.18.1.cjs build

FROM node:24-alpine AS runtime

WORKDIR /app

COPY --from=builder /app/.output ./
COPY --from=builder /app/LICENSE ./LICENSE
COPY --from=builder /app/scripts/healthcheck.mjs ./scripts/healthcheck.mjs

ENV NODE_ENV=production

LABEL org.opencontainers.image.title="@myelophone/nuxt-template"
LABEL org.opencontainers.image.description="High-performance nuxt app based on @myelophone/nuxt by @myeloph.one"
LABEL org.opencontainers.image.authors="Aliaksandr Ivanou"
LABEL org.opencontainers.image.licenses="PolyForm-Noncommercial-1.0.0"
LABEL org.opencontainers.image.vendor="Aliaksandr Ivanou"
LABEL org.opencontainers.image.source="https://github.com/myelophone/nuxt-template"

EXPOSE 3000

CMD ["node", "--no-deprecation", "--no-warnings", "server/index.mjs"]
