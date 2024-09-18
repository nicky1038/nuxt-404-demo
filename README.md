# Nuxt 3 404 reproduction demo

## What problem does this demo show?

Before nuxt 3.12 it was possible to specify redirects from non-existing pages to existing ones in global middleware.
From nuxt 3.12 even if there is such a global middleware, users will get 404 errors when they visit non-existing pages of the application.

## How is it possible to observe the issue?

Launch nuxt dev server go to `/non-existing`.

404 screen will occur, even though there is a global middleware that navigates user to an existing page.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```
