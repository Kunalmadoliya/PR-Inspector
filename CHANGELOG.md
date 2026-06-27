# Changelog

All notable changes to PR Inspector are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versioning follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added

- Full PR Inspector landing page with Hero, Features, How It Works, Benefits, Pricing, FAQ, and Footer sections
- Sign-in page with GitHub OAuth and email/password form
- Sign-up page with GitHub OAuth and email/password form
- Root layout with complete SEO metadata (Open Graph, Twitter Card, keywords, robots)
- `robots.ts` — crawl rules for search engines
- `sitemap.ts` — sitemap covering all public pages
- `manifest.ts` — Web App Manifest for PWA support
- `.env.example` — documented environment variable template
- `CONTRIBUTING.md` — contribution guide with Conventional Commits convention
- `LICENSE` — MIT license
- `SECURITY.md` — vulnerability disclosure policy
- `CHANGELOG.md` — this file
- Auth layout with PR Inspector brand identity and on-brand hero copy
- Accessibility improvements: skip-to-content link, `aria-label` on logo SVG, `<title>` in SVG, semantic heading hierarchy
- SoftwareApplication and Organization Schema.org structured data on homepage
- FAQPage Schema.org structured data on FAQ section

### Changed

- Renamed `package.json` name from `coderabbit` to `code-chowkidar` (and later to `pr-inspector`)
- Updated root layout metadata: replaced Next.js boilerplate with PR Inspector branding
- Updated auth layout: replaced `YOUR_APP` and generic copy with PR Inspector brand copy
- Rewrote README: correct brand, architecture diagram, GitHub App guide, full environment variables table, contributing guide, roadmap

### Removed

- Default Next.js create-app homepage (Vercel/Next.js logos, links, boilerplate copy)
- `model test` dev placeholder from Prisma schema
- Broken sign-in page description (`"Sign to the coderabbit it is a code review..."`)

### Fixed

- Sign-in metadata description: grammatically corrected, correct brand name
- SVG logo: added `aria-label`, `role="img"`, and `<title>` child element for screen reader support
- Package name: removed old `coderabbit` brand reference

---

## [0.1.0] — 2026-06-27

### Added

- Initial project scaffolding with Next.js 16, TypeScript, Tailwind CSS v4
- Better Auth integration with GitHub OAuth and email/password providers
- Prisma ORM with PostgreSQL — User, Session, Account, Verification models
- Shadcn UI component library (56 components)
- TanStack Query for server state management
- Light/dark theme support via `next-themes`
- Auth layout (split-panel design)
- Sign-in page (structure)
