# Repository Guidelines

## Project Structure & Module Organization
- `app/` contains the Nuxt application (Vue components, layouts, pages, utilities, and app config).
- `content/` holds site content in YAML and content collections (e.g., `content/blog/`, `content/projects/`).
- `public/` stores static assets served as-is (e.g., `public/hero/`, `favicon.ico`).
- `project-docs/` includes planning and documentation artifacts.
- `.nuxt/` is generated output; do not edit manually.

## Build, Test, and Development Commands
- `pnpm install` installs dependencies.
- `pnpm dev` starts the local dev server at `http://localhost:3000`.
- `pnpm build` builds the production bundle.
- `pnpm preview` serves the production build locally.
- `pnpm lint` and `pnpm lint:fix` run ESLint (with auto-fix).
- `pnpm typecheck` runs Nuxt TypeScript checks.

## Coding Style & Naming Conventions
- Indentation: 2 spaces (see `.editorconfig`).
- Use LF line endings and trim trailing whitespace (except in Markdown).
- TypeScript + ES modules; prefer `PascalCase` for Vue components and `kebab-case` for route filenames.
- ESLint is configured via `eslint.config.mjs`; keep `any` usage minimal even if allowed.

## Testing Guidelines
- No test framework is configured yet and no test files exist.
- If adding tests, follow Nuxt conventions and name files like `*.spec.ts` or `*.test.ts`.
- Add a `pnpm test` script and document it here when introducing a test runner.

## Commit & Pull Request Guidelines
- The repository has no commit history yet, so no established convention.
- Use clear, scoped messages (recommended): `feat(content): add speaking section`.
- PRs should include a concise description, screenshots for UI changes, and links to related issues (if any).

## Configuration & Secrets
- Use `.env.example` as the template; do not commit real secrets.
- Keep content changes in `content/` and static assets in `public/` to maintain clean diffs.
