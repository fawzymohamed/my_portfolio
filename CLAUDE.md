# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nuxt 4 personal portfolio site (TypeScript, Vue 3, Tailwind CSS) deployed on Vercel as a prerendered static site. Content is managed via YAML files in `content/` using Nuxt Content v3.

## Commands

- `pnpm dev` — Start dev server on port 4000
- `pnpm build` — Production build with static prerendering
- `pnpm preview` — Preview production build locally
- `pnpm lint` — ESLint check
- `pnpm lint:fix` — ESLint auto-fix
- `pnpm typecheck` — TypeScript type checking
- `pnpm postinstall` / `nuxt prepare` — Generate Nuxt types

No test framework is configured.

## Architecture

### Routing & Layout

Three pages (`app/pages/`): `/` (home), `/about`, `/projects`. All wrapped by `app/layouts/default.vue` which provides the fixed `AppHeader` and `AppFooter`. Root component is `app/app.vue`.

### Content System

Site data lives in `content/` as YAML files with Zod schemas defined in `content.config.ts`:
- `content/index.yml` — Home page sections (hero, about, experience, skills, projects, contact)
- `content/about.yml` — About page data
- `content/projects.yml` — Projects page metadata
- `content/projects/*.yml` — Individual project entries

Pages fetch content via `useAsyncData` + `queryCollection`.

### Component Structure

Landing page sections are in `app/components/landing/` (Hero, About, Skills, Projects, WorkExperience, Contact). Each section is composed in `app/pages/index.vue`.

### Styling

- Tailwind CSS via Nuxt UI v4 with dark mode forced on
- Color scheme: primary=cyan, neutral=slate (set in `app/app.config.ts`)
- Custom utility classes in `app/assets/css/main.css`: `glass-card`, `text-glow`, `bg-grid-pattern`, `animate-blink`
- Cyber-security aesthetic: glass cards with backdrop blur, gradient text, grid background patterns, neon glow effects

### Key Dependencies

- **Nuxt UI v4** — UI component library (buttons, navigation, sections)
- **motion-v** — Scroll/entrance animations
- **Nuxt Content v3** — YAML-based content with typed collections
- **Nuxt Image** — Image optimization
- **nuxt-og-image** — Open Graph image generation (uses `NUXT_PUBLIC_SITE_URL` env var)

### App Config

`app/app.config.ts` holds global settings: personal branding (name, email, meeting link), color scheme, social links, and footer configuration.

### Navigation

Menu links defined in `app/utils/links.ts`. Header uses Nuxt UI's `UNavigationMenu`.

## CI/CD

GitHub Actions (`.github/workflows/ci.yml`): runs lint and typecheck on Ubuntu with Node 22 and pnpm.

## Code Style

- ESLint with Nuxt config: `comma-dangle: never`, `brace-style: 1tbs`
- Composition API with `<script setup lang="ts">`
- `cursor-pointer` class should be applied to all buttons
