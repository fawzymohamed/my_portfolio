# Portfolio Development Phases Plan

## Phase 1 - Discovery and Content Mapping
- [x] Confirm which template sections to keep (Testimonials, Blog, Speaking, FAQ).
- [x] Finalize bilingual routing strategy (/en and /ar).
- [ ] Define content structure for hero, about, experience, skills, projects, and contact.
- [ ] Collect or identify assets (headshot, screenshots, logos).

## Phase 2 - Content Implementation
- [ ] Replace placeholder content in:
  - [ ] content/index.yml
  - [ ] content/projects.yml
  - [ ] content/about.yml
  - [ ] content/projects/*.yml
- [ ] Prioritize Stock Management System as the first featured project.
- [ ] Add Arabic translations for all visible content.

## Phase 3 - Localization and RTL
- [ ] Add @nuxtjs/i18n and configure locales in nuxt.config.ts.
- [ ] Create locale-specific content files (index.en.yml, index.ar.yml, etc.).
- [ ] Add language switcher to AppHeader.
- [ ] Apply RTL direction for Arabic pages and verify Nuxt UI components.

## Phase 4 - UI and UX Polish
- [ ] Ensure consistent layout with the template.
- [ ] Review typography, spacing, and visuals in both languages.
- [ ] Add subtle motion or transitions if supported by template patterns.

## Phase 5 - SEO and Metadata
- [ ] Add locale-specific SEO meta (title, description, OG tags).
- [ ] Ensure OpenGraph images exist or use defaults.
- [ ] Confirm robots and sitemap behavior (if applicable).

## Phase 6 - Vercel Deployment
- [ ] Configure Vercel project settings.
- [ ] Set environment variables if required.
- [ ] Deploy preview and production builds.
- [ ] Validate build output and routes for both locales.

## Phase 7 - QA and Launch
- [ ] Cross-browser and mobile checks.
- [ ] Verify RTL layouts and language toggle.
- [ ] Confirm all external links.
- [ ] Final deploy and post-launch review.

## Deliverables by Phase
- [ ] Phase 1: Content map and asset list.
- [ ] Phase 2: Updated content files with EN/AR.
- [ ] Phase 3: Locale routing, RTL support, and language toggle.
- [ ] Phase 4: Visual polish and motion.
- [ ] Phase 5: SEO and OG verification.
- [ ] Phase 6: Vercel deployment live.
- [ ] Phase 7: QA checklist completed.
