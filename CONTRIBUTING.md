# Contributing to pr Inspector

First of all â€” thank you for taking the time to contribute. Every bug report, suggestion, and pull request makes the inspector sharper.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Commit Message Convention](#commit-message-convention)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)
- [Code Style](#code-style)

---

## Code of Conduct

Be kind. Be constructive. Be professional. We do not tolerate harassment of any kind.

---

## Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/pr-inspector.git
   cd pr-inspector
   ```
3. **Install dependencies**:
   ```bash
   pnpm install
   ```
4. **Copy the environment file** and fill in your values:
   ```bash
   cp .env.example .env
   ```
5. **Set up the database**:
   ```bash
   pnpm prisma migrate dev --name init
   ```
6. **Start the development server**:
   ```bash
   pnpm dev
   ```

---

## Development Workflow

1. Create a branch off `main`:
   ```bash
   git checkout -b feat/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```
2. Make your changes
3. Run linting before committing:
   ```bash
   pnpm lint
   ```
4. Commit using the [commit convention](#commit-message-convention) below
5. Push and open a pull request against `main`

---

## Commit Message Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short summary>
```

**Types:**
- `feat` â€” A new feature
- `fix` â€” A bug fix
- `docs` â€” Documentation changes only
- `style` â€” Formatting changes (no logic change)
- `refactor` â€” Code restructuring (no feature/fix)
- `perf` â€” Performance improvements
- `test` â€” Adding or fixing tests
- `chore` â€” Build, config, dependency changes

**Examples:**
```
feat(reviews): add inline comment posting for security findings
fix(auth): handle GitHub OAuth callback error on invalid state
docs(readme): add GitHub App setup instructions
chore(deps): upgrade Next.js to 16.3.0
```

---

## Pull Request Guidelines

- **One thing per PR.** Don't mix features with refactors.
- **Describe your changes** clearly in the PR description.
- **Link to issues** using `Closes #123` or `Fixes #123`.
- **Keep PRs small.** Reviewers are humans (mostly). Large PRs take longer.
- All PRs will be reviewed by pr Inspector itself before a human looks at it. Practice what we preach.

---

## Reporting Bugs

Open a [GitHub Issue](https://github.com/Kunalmadoliya/pr-inspector/issues/new) and include:

1. What you expected to happen
2. What actually happened
3. Steps to reproduce
4. Your environment (OS, Node version, browser if relevant)
5. Any relevant error messages or screenshots

---

## Suggesting Features

Open a [GitHub Issue](https://github.com/Kunalmadoliya/pr-inspector/issues/new) with the label `enhancement`. Describe:

- The problem you're trying to solve
- Your proposed solution
- Alternatives you've considered

---

## Code Style

- **TypeScript** â€” Strict mode is enabled. No `any` unless absolutely unavoidable.
- **Tailwind CSS** â€” Use the design tokens in `globals.css`. Avoid arbitrary values where a token exists.
- **Components** â€” Keep components focused. If it needs a second `useEffect`, it probably needs to be two components.
- **Naming** â€” Use descriptive names. Abbreviations are only acceptable if they're universally understood (`URL`, `ID`, `PR`).
- **Comments** â€” Comment the *why*, not the *what*. If code is self-explanatory, no comment needed.

---

*Built with â¤ï¸ and mild sarcasm. We inspect every PR before it reaches production.*
