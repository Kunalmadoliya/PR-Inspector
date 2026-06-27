<div align="center">

<!-- Replace with your Code Chowkidar shield logo once generated -->
<h1>ðŸ›¡ï¸ Code Chowkidar</h1>

<p><strong>Your PR's personal chowkidar. Patrolling every commit â€” before your teammates do.</strong></p>

<p>
  <a href="https://github.com/Kunalmadoliya/Code-Chowkidar/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-orange.svg" alt="MIT License" />
  </a>
  <a href="https://github.com/Kunalmadoliya/Code-Chowkidar/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/Kunalmadoliya/Code-Chowkidar/ci.yml?label=build" alt="Build Status" />
  </a>
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" />
</p>

</div>

---

## What is Code Chowkidar?

**Code Chowkidar** is an AI-powered code review platform that reviews your GitHub pull requests the moment they are opened.

It detects bugs, identifies security vulnerabilities, suggests improvements, and posts its findings as inline PR comments â€” before your teammates even look at the diff.

Think of it as a senior engineer who is always available, never tired, never in a meeting, and slightly opinionated about your variable names.

## Why it exists

Manual code review is slow, inconsistent, and expensive. Senior engineers spend hours every week reviewing boilerplate issues that a machine could catch in seconds. Code Chowkidar handles the mechanical review work so your team can focus on architectural decisions, product thinking, and shipping.

## Who it is for

- **Engineering teams** who want consistent, automated code quality checks on every PR
- **Solo developers** who want a second pair of eyes before merging
- **Open-source maintainers** who need to review external contributions efficiently
- **CTOs and engineering leads** who want visibility into code quality trends across their codebase

---

## Core Features

- ðŸ› **Bug Detection** â€” Logic errors, null pointer risks, broken edge cases
- ðŸ” **Security Scanning** â€” Hardcoded secrets, injection risks, vulnerable dependencies
- ðŸ’¬ **Inline Suggestions** â€” Precise, contextual comments posted directly on the diff
- âš¡ **Instant Reviews** â€” Results within 30 seconds of a PR being opened
- ðŸ” **GitHub Native** â€” Works as a GitHub App, posts comments where your team already works
- ðŸ“Š **Quality Trends** â€” Track code quality improvements across repositories over time

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) | Full-stack React framework |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Type safety across the entire codebase |
| **UI** | [Tailwind CSS v4](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/) | Design system and components |
| **Icons** | [Phosphor Icons](https://phosphoricons.com/) | Icon library |
| **ORM** | [Prisma 7](https://www.prisma.io/) | Type-safe database access |
| **Database** | [PostgreSQL](https://www.postgresql.org/) | Primary data store |
| **Auth** | [Better Auth](https://better-auth.com/) | Sessions, OAuth, email/password |
| **State** | [TanStack Query v5](https://tanstack.com/query/latest) | Server state and caching |
| **Package Manager** | [pnpm 11](https://pnpm.io/) | Fast, disk-efficient installs |

---

## Architecture

```
GitHub PR opened
        â”‚
        â–¼
GitHub Webhook â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â–º /api/webhooks/github
                                       â”‚
                                       â–¼
                               Verify webhook signature
                                       â”‚
                                       â–¼
                               Extract PR diff
                                       â”‚
                                       â–¼
                               AI Analysis (OpenAI / Gemini)
                                       â”‚
                                       â–¼
                               Parse findings
                                       â”‚
                                       â–¼
                               Post inline PR comments
                               via GitHub REST API
```

The core review pipeline:
1. GitHub sends a `pull_request` webhook event to `/api/webhooks/github`
2. The webhook signature is verified using `GITHUB_WEBHOOK_SECRET`
3. The PR diff is extracted via the GitHub API
4. The diff is sent to the configured AI provider for analysis
5. Findings are parsed and posted as inline review comments on the PR

---

## GitHub Integration

### Setting Up the GitHub App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers) â†’ **GitHub Apps** â†’ **New GitHub App**
2. Configure the app:
   - **Homepage URL**: Your app URL (e.g., `https://codechowkidar.com`)
   - **Webhook URL**: `https://yourdomain.com/api/webhooks/github`
   - **Webhook Secret**: Generate a random string and save it as `GITHUB_WEBHOOK_SECRET`
3. **Required permissions**:
   - `Pull requests`: Read & Write (to post review comments)
   - `Contents`: Read-only (to fetch the diff)
   - `Metadata`: Read-only (required)
4. **Subscribe to events**: `Pull request`
5. After creation, generate a **Private Key** and save it

### Required GitHub Scopes (OAuth App)

If using GitHub OAuth for user sign-in (separate from the GitHub App):
- `read:user` â€” Read user profile
- `user:email` â€” Read user email address
- `repo` â€” Required to list and access private repositories

---

## Prerequisites

- **Node.js** v20 or higher
- **pnpm** v11 (`npm install -g pnpm`)
- **PostgreSQL** (local or cloud â€” [Neon](https://neon.tech) recommended for development)

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Kunalmadoliya/Code-Chowkidar.git
cd coderabbit
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Copy the example environment file:

```bash
cp .env.example .env
```

Then edit `.env` with your values. See [Environment Variables](#environment-variables) below for a full reference.

### 4. Set up the database

Run Prisma migrations to create all tables:

```bash
pnpm prisma migrate dev --name init
```

Generate the Prisma client:

```bash
pnpm prisma generate
```

### 5. Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env` file in the project root. Reference `.env.example` for a template with all variables documented.

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | âœ… | PostgreSQL connection string |
| `BETTER_AUTH_SECRET` | âœ… | Secret key for session signing. Generate with `openssl rand -base64 32` |
| `BETTER_AUTH_URL` | âœ… | Your app's base URL (e.g., `http://localhost:3000` in development) |
| `GITHUB_CLIENT_ID` | âœ… | GitHub OAuth App client ID (for user sign-in) |
| `GITHUB_CLIENT_SECRET` | âœ… | GitHub OAuth App client secret |
| `GITHUB_APP_ID` | âœ… | GitHub App ID (for PR review posting) |
| `GITHUB_APP_PRIVATE_KEY` | âœ… | GitHub App private key (PEM format, base64-encoded) |
| `GITHUB_WEBHOOK_SECRET` | âœ… | Secret for verifying GitHub webhook payloads |
| `OPENAI_API_KEY` | âš ï¸ | OpenAI API key (required if using OpenAI as the AI provider) |
| `GOOGLE_AI_API_KEY` | âš ï¸ | Google Gemini API key (required if using Gemini as the AI provider) |
| `NEXT_PUBLIC_APP_URL` | âœ… | Public base URL of the app (used for OG images, emails, canonical URLs) |

---

## Running Locally

```bash
# Development server (with hot reload)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint

# Prisma Studio (visual database browser)
pnpm prisma studio
```

---

## Deployment

### Vercel (recommended)

1. Push to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Add all environment variables in the Vercel project settings
4. Deploy

Set `NEXT_PUBLIC_APP_URL` to your production domain (e.g., `https://codechowkidar.com`).

### Docker

A `Dockerfile` and `docker-compose.yml` are on the roadmap. PRs welcome.

---

## Folder Structure

```text
code-chowkidar/
â”œâ”€â”€ app/                    # Next.js App Router
â”‚   â”œâ”€â”€ (auth)/             # Authentication pages (sign-in, sign-up)
â”‚   â”‚   â”œâ”€â”€ layout.tsx      # Auth layout (split-panel)
â”‚   â”‚   â”œâ”€â”€ signin/         # Sign-in page
â”‚   â”‚   â””â”€â”€ signup/         # Sign-up page
â”‚   â”œâ”€â”€ api/                # API routes
â”‚   â”‚   â”œâ”€â”€ auth/           # Better Auth handler
â”‚   â”‚   â””â”€â”€ webhooks/       # GitHub webhook handler (to be built)
â”‚   â”œâ”€â”€ dashboard/          # Protected dashboard (to be built)
â”‚   â”œâ”€â”€ globals.css         # Global styles and CSS variables
â”‚   â”œâ”€â”€ layout.tsx          # Root layout (metadata, fonts, providers)
â”‚   â”œâ”€â”€ manifest.ts         # Web App Manifest
â”‚   â”œâ”€â”€ page.tsx            # Landing page
â”‚   â”œâ”€â”€ robots.ts           # Robots.txt
â”‚   â””â”€â”€ sitemap.ts          # Sitemap
â”œâ”€â”€ components/
â”‚   â”œâ”€â”€ providers/          # React context providers
â”‚   â”‚   â”œâ”€â”€ query-provider.tsx
â”‚   â”‚   â””â”€â”€ theme-provider.tsx
â”‚   â””â”€â”€ ui/                 # Shadcn UI components (56 components)
â”œâ”€â”€ hooks/                  # Custom React hooks
â”‚   â””â”€â”€ use-mobile.ts
â”œâ”€â”€ lib/                    # Library configurations
â”‚   â”œâ”€â”€ auth-client.ts      # Better Auth client (browser)
â”‚   â”œâ”€â”€ db.ts               # Prisma client singleton
â”‚   â””â”€â”€ utils.ts            # cn() utility
â”œâ”€â”€ prisma/
â”‚   â”œâ”€â”€ migrations/         # Database migrations
â”‚   â””â”€â”€ schema.prisma       # Database schema
â”œâ”€â”€ public/                 # Static assets
â”‚   â””â”€â”€ og-image.png        # Open Graph image
â”œâ”€â”€ utils/
â”‚   â””â”€â”€ auth.ts             # Better Auth server config
â”œâ”€â”€ .env.example            # Environment variable template
â”œâ”€â”€ .gitignore
â”œâ”€â”€ CHANGELOG.md
â”œâ”€â”€ CONTRIBUTING.md
â”œâ”€â”€ LICENSE
â”œâ”€â”€ README.md
â”œâ”€â”€ SECURITY.md
â”œâ”€â”€ next.config.ts
â”œâ”€â”€ package.json
â”œâ”€â”€ prisma.config.ts
â””â”€â”€ tsconfig.json
```

---

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Build the production bundle |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run ESLint |
| `pnpm prisma studio` | Open Prisma Studio (visual DB browser) |
| `pnpm prisma migrate dev` | Run pending migrations in development |
| `pnpm prisma generate` | Regenerate the Prisma client |

---

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a PR.

Quick guide:
1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature-name`
3. Make your changes
4. Run `pnpm lint` and ensure there are no errors
5. Open a PR against `main`

---

## Roadmap

- [ ] GitHub App webhook handler and PR review pipeline
- [ ] AI provider integration (OpenAI / Gemini)
- [ ] Dashboard â€” connected repositories, review history, settings
- [ ] Rule customization â€” configure which checks to run
- [ ] Slack and email notifications
- [ ] Team management and billing
- [ ] Docker support
- [ ] Self-hosted deployment guide

---

## License

[MIT](LICENSE) â€” free to use, free to modify, free to ship.

---

<div align="center">
  <i>Built with â¤ï¸ and mild sarcasm by the Code Chowkidar team.</i>
</div>
