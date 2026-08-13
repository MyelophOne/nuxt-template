FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN yarn install

ENV YARN_ENABLE_INLINE_BUILDS=1
RUN yarn build

FROM alpine:latest
RUN apk add --no-cache nodejs

WORKDIR /app

COPY --from=builder /app/.output ./
COPY --from=builder /app/LICENSE ./LICENSE

ENV NODE_ENV=production

LABEL org.opencontainers.image.title="@myelophone/nuxt-template"
LABEL org.opencontainers.image.description="High-performance nuxt app based on @myelophone/nuxt by @myeloph.one"
LABEL org.opencontainers.image.authors="Aliaksandr Ivanou"
LABEL org.opencontainers.image.licenses="PolyForm-Noncommercial-1.0.0"
LABEL org.opencontainers.image.vendor="Aliaksandr Ivanou"
LABEL org.opencontainers.image.source="https://github.com/myelophone/nuxt-template"

EXPOSE 3000

CMD ["node", "--no-deprecation", "--no-warnings", "server/index.mjs"]
