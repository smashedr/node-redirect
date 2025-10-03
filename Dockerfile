FROM node:lts-alpine

ARG VERSION=source

ENV TZ=UTC
ENV NODE_ENV=production
ENV APP_VERSION="${VERSION}"

LABEL org.opencontainers.image.source="https://github.com/smashedr/node-redirect"
LABEL org.opencontainers.image.description="Node Redirect"
LABEL org.opencontainers.image.authors="smashedr"
LABEL org.opencontainers.image.version="${VERSION}"

RUN apk add --no-cache curl

COPY docker-entrypoint.sh /

WORKDIR /app

COPY package.json package-lock.json ./

RUN --mount=type=cache,target=/root/.npm npm ci

COPY --chown=node:node ./src ./src

USER node

ENTRYPOINT ["sh", "/docker-entrypoint.sh"]
