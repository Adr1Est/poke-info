# ─── Base ─────────────────────────────────────────────────────────────────────
FROM node:lts-alpine AS base

# ─── Stage 1: deps ────────────────────────────────────────────────────────────
FROM base AS deps

RUN apk add --no-cache libc6-compat
RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml .npmrc* ./

RUN pnpm install --frozen-lockfile

# ─── Stage 2: builder ─────────────────────────────────────────────────────────
FROM base AS builder

RUN corepack enable

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PRIVATE_STANDALONE=true

RUN corepack enable pnpm && pnpm run build

# ─── Stage 3: tester ──────────────────────────────────────────────────────────
FROM builder AS tester

RUN pnpm test -- --watchAll=false --passWithNoTests

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