# ─── Base ─────────────────────────────────────────────────────────────────────
FROM node:lts-alpine AS base

# ─── Stage 1: deps ────────────────────────────────────────────────────────────
FROM base AS deps

RUN apk add --no-cache libc6-compat
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml .npmrc* ./

RUN pnpm install --frozen-lockfile

# ─── Stage 2: tester ──────────────────────────────────────────────────────────
FROM base AS tester

RUN corepack enable

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm test --watchAll=false --passWithNoTests

# ─── Stage 3: builder ─────────────────────────────────────────────────────────
FROM base AS builder

RUN corepack enable

WORKDIR /app

# Gate: si el tester falló, este COPY aborta el build
COPY --from=tester /app/package.json /tmp/test-gate

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PRIVATE_STANDALONE=true

RUN pnpm run build

# ─── Stage 4: runner ──────────────────────────────────────────────────────────
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NEXT_PRIVATE_STANDALONE=true

COPY --from=builder /app/public           ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static     ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]