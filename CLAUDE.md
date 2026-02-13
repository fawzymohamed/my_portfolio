# CLAUDE.md - AI Assistant Guide for Nuxt Portfolio

This file provides essential context for AI assistants working with this codebase. It describes the project structure, conventions, and workflows.

## Project Overview

A bilingual (EN/AR) portfolio website for Fawzy Mohamed, built on **Nuxt 4** with **Nuxt UI**. The site showcases full-stack development expertise with a security-first positioning, targeting hiring managers and engineering leaders.

**Current Status:** Content implementation phase (Phase 2 of 7)
**Deployment Target:** Vercel (static site generation)

## Technology Stack

| Category | Technology |
|----------|------------|
| Framework | Nuxt 4.2.2 (Vue 3, TypeScript) |
| UI Library | Nuxt UI 4.3.0 + Tailwind CSS |
| Content | Nuxt Content 3.9.0 (YAML + Zod schemas) |
| Animations | motion-v 1.7.3 |
| Icons | @iconify-json/lucide, @iconify-json/simple-icons |
| Images | Nuxt Image 2.0.0, nuxt-og-image 5.1.13 |
| Package Manager | pnpm 10.26.1 |
| Node Version | 22 (per CI) |

## Directory Structure

```
my_portfolio/
├── app/                      # Nuxt application source
│   ├── pages/               # Route pages (index.vue, about.vue, projects.vue)
│   ├── components/          # Vue components
│   │   └── landing/        # Landing page sections (Hero, About, Projects, WorkExperience)
│   ├── layouts/            # Layout templates (default.vue)
│   ├── utils/              # Utility functions (links.ts, clipboard.ts)
│   ├── assets/css/         # Stylesheets (main.css with Tailwind)
│   ├── app.vue             # Root component
│   └── app.config.ts       # App configuration
├── content/                  # Content data (YAML files)
│   ├── index.yml           # Home page content
│   ├── about.yml           # About page content
│   ├── projects.yml        # Projects page header
│   └── projects/*.yml      # Individual project entries
├── public/                   # Static assets (images, favicon, robots.txt)
│   └── hero/               # Hero section images (*.avif)
├── project-docs/            # Planning documentation
│   ├── PLAN.md             # Project objectives
│   ├── DEVELOPMENT_PHASES.md # 7-phase roadmap
│   ├── CONTENT_MAP.md      # Content structure mapping
│   └── CV_Fawzy_*.md       # Source CV content
└── .github/workflows/       # CI/CD (lint, typecheck)
```

## Development Commands

```bash
pnpm install      # Install dependencies
pnpm dev          # Start dev server at http://localhost:3000
pnpm build        # Build for production
pnpm preview      # Serve production build locally
pnpm lint         # Run ESLint
pnpm lint:fix     # Auto-fix ESLint issues
pnpm typecheck    # Run TypeScript type checking
```

## Coding Conventions

### General
- **Indentation:** 2 spaces (per `.editorconfig`)
- **Line endings:** LF
- **Trailing whitespace:** Trim (except in Markdown)
- **TypeScript:** Strict typing, avoid `any` where possible

### Vue Components
- Use `<script setup lang="ts">` (Composition API)
- **Naming:** PascalCase for components (`AppHeader.vue`, `PolaroidItem.vue`)
- Define props with TypeScript interfaces
- Use `computed()` for derived state
- Use `useAsyncData()` with `queryCollection()` for content fetching

### Routes/Pages
- **Naming:** kebab-case filenames (`about.vue` → `/about`)
- Pages use file-based routing

### Styling
- Use Nuxt UI's `:ui` prop for component customization
- Use Tailwind utility classes for layout
- Responsive design: mobile-first with `sm:`, `lg:` breakpoints
- Dark mode via `useColorMode()` composable

## Content Management

All portfolio content lives in `/content` as YAML files with Zod schema validation defined in `content.config.ts`.

### Content Collections

| Collection | Source | Purpose |
|------------|--------|---------|
| `index` | `index.yml` | Home page (hero, about, experience, skills, projects, contact) |
| `projects` | `projects/*.yml` | Individual project entries |
| `pages` | `projects.yml` | Projects page header |
| `about` | `about.yml` | About page content |

### Schema Patterns

**Button Schema** (reused throughout):
```yaml
- label: "View Project"
  icon: "i-lucide-external-link"
  to: "https://example.com"
  color: "primary"        # primary|neutral|success|warning|error|info
  variant: "solid"        # solid|outline|subtle|soft|ghost|link
  target: "_blank"        # _blank|_self
```

**Image Schema**:
```yaml
- src: "/hero/random-1.avif"
  alt: "Description"
```

### Fetching Content in Components

```typescript
const { data } = await useAsyncData('index', () => queryCollection('index').first())
```

## Important Configuration Files

| File | Purpose |
|------|---------|
| `nuxt.config.ts` | Nuxt modules, CSS, prerender config, ESLint settings |
| `content.config.ts` | Zod schemas for content validation |
| `eslint.config.mjs` | ESLint rules (extends Nuxt config) |
| `.editorconfig` | Editor settings (indent, line endings) |
| `.env.example` | Environment variable template (`NUXT_PUBLIC_SITE_URL`) |
| `pnpm-workspace.yaml` | pnpm workspace configuration |

## Component Patterns

### Animation Pattern (Motion)
```vue
<Motion
  :initial="{ opacity: 0, y: 20 }"
  :visible-once="{ opacity: 1, y: 0 }"
  :transition="{ duration: 0.5 }"
>
  <!-- Content -->
</Motion>
```

### Dark Mode Toggle
```typescript
const colorMode = useColorMode()
const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: () => colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
})
```

## Git Workflow

### Commit Messages
Use scoped conventional commits:
```
feat(content): add speaking section
fix(ui): correct header alignment on mobile
docs(readme): update setup instructions
```

### Branch Naming
Feature branches: `claude/<description>-<session-id>`

### CI/CD Pipeline
GitHub Actions runs on every push:
1. Install dependencies (pnpm)
2. Run linter (`pnpm lint`)
3. Run TypeScript checks (`pnpm typecheck`)

## Build & Deployment

- **Static Site Generation:** Nuxt Nitro prerenders routes with `crawlLinks: true`
- **Target Platform:** Vercel
- **Environment Variables:** Set `NUXT_PUBLIC_SITE_URL` for OG image generation

## Project Roadmap (from project-docs/)

1. **Phase 1:** Discovery & Content Mapping - *Completed*
2. **Phase 2:** Content Implementation - *In Progress*
3. **Phase 3:** Localization & RTL support
4. **Phase 4:** UI/UX Polish
5. **Phase 5:** SEO & Metadata
6. **Phase 6:** Vercel Deployment
7. **Phase 7:** QA & Launch

## Common Tasks

### Adding a New Project
1. Create `content/projects/<project-name>.yml`
2. Follow the schema: `title`, `description`, `image`, `url`, `tags`, `date`
3. Add project image to `public/`

### Adding a New Page
1. Create `app/pages/<page-name>.vue`
2. Add content file in `content/<page-name>.yml` if needed
3. Define collection schema in `content.config.ts`
4. Update navigation in `app/utils/links.ts`

### Modifying Content Schemas
1. Edit `content.config.ts`
2. Update corresponding YAML files to match
3. Run `pnpm typecheck` to verify

## Testing

No test framework is currently configured. When adding tests:
- Use `*.spec.ts` or `*.test.ts` naming
- Add `pnpm test` script to `package.json`
- Follow Nuxt testing conventions

## Security Considerations

- Never commit `.env` files (use `.env.example` as template)
- Keep secrets out of content files
- Renovate bot auto-updates dependencies for security patches

## Quick Reference

| What | Where |
|------|-------|
| Main entry point | `app/app.vue` |
| Page routes | `app/pages/` |
| Components | `app/components/` |
| Content data | `content/*.yml` |
| Static assets | `public/` |
| Styles | `app/assets/css/main.css` |
| Config | `nuxt.config.ts`, `content.config.ts` |
| Planning docs | `project-docs/` |
