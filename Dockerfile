FROM oven/bun:1 AS base

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY prisma ./prisma
COPY prisma.config.ts ./
ENV DATABASE_URL="mongodb://localhost:27017/build"
RUN bunx prisma generate

COPY . .

EXPOSE 3000

CMD ["bun", "run", "start"]
