# Stage 1: builder
FROM node:lts-alpine AS builder

RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm run build

# Stage 2: tester
FROM builder AS tester

RUN pnpm test

# Stage 3: runner
FROM node:lts-alpine AS runner

WORKDIR /app

COPY --from=builder /app/public           ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static     ./.next/static

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

CMD []

