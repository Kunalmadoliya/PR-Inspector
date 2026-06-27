import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Code Chowkidar â€” AI Code Review for GitHub Pull Requests",
  description:
    "Code Chowkidar reviews every GitHub pull request the moment it's opened. Bugs caught. Security risks flagged. Suggestions posted inline. Before your teammates even look.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    type: "website",
  },
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   STRUCTURED DATA â€” SoftwareApplication + Organization schema
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Code Chowkidar",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      description:
        "AI-powered code review platform that reviews GitHub pull requests, detects bugs, identifies security risks, and helps developers ship production-ready code faster.",
      url: "https://codechowkidar.com",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free for open-source repositories",
      },
      featureList: [
        "Automated pull request reviews",
        "Bug detection",
        "Security vulnerability scanning",
        "Inline code suggestions",
        "GitHub integration",
      ],
    },
    {
      "@type": "Organization",
      name: "Code Chowkidar",
      url: "https://codechowkidar.com",
      logo: "https://codechowkidar.com/og-image.png",
      sameAs: ["https://github.com/Kunalmadoliya/Code-Chowkidar"],
    },
  ],
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   STATIC DATA
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const features = [
  {
    icon: "ðŸ›",
    title: "Catch Bugs Before Your Users Do",
    description:
      "Logic errors, null pointer risks, broken edge cases â€” spotted in the diff before they reach main.",
  },
  {
    icon: "ðŸ”",
    title: "Security Built Into Every Review",
    description:
      "Hardcoded secrets, injection risks, and vulnerable dependencies flagged automatically. Every PR, every time.",
  },
  {
    icon: "ðŸ’¬",
    title: "Actionable, Inline Feedback",
    description:
      "No vague comments. Every suggestion is precise, contextual, and posted directly on the relevant line.",
  },
  {
    icon: "âš¡",
    title: "Instant. No Waiting.",
    description:
      "Review starts the moment a PR is opened. No queue. No delay. Results within 30 seconds.",
  },
  {
    icon: "ðŸ”",
    title: "Works With Your Existing Workflow",
    description:
      "No new tools to learn. Code Chowkidar posts its findings as GitHub PR comments â€” right where your team already works.",
  },
  {
    icon: "ðŸ“Š",
    title: "Track Code Quality Over Time",
    description:
      "See trends across your repositories. Identify recurring issues. Watch code quality improve sprint over sprint.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect GitHub",
    description:
      "Install the Code Chowkidar GitHub App on your repositories. Takes 60 seconds. No code changes required.",
  },
  {
    number: "02",
    title: "Open a Pull Request",
    description:
      "Work exactly the way you already do. Open a PR as usual. Code Chowkidar is watching.",
  },
  {
    number: "03",
    title: "Review Starts Instantly",
    description:
      "Code Chowkidar analyzes the diff and posts its findings as PR comments within 30 seconds. Bugs, security issues, and improvements â€” all inline.",
  },
];

const benefits = [
  {
    title: "Save Engineering Hours",
    description:
      "Stop spending senior engineer time on boilerplate review comments. Let Code Chowkidar handle the mechanical checks.",
    stat: "~3hrs",
    statLabel: "saved per engineer per week",
  },
  {
    title: "Prevent Production Disasters",
    description:
      "Every bug caught in review is a production incident that never happens. Ship with confidence, not hope.",
    stat: "Zero",
    statLabel: "bugs reach production unreviewed",
  },
  {
    title: "Stop Arguing About Code Style",
    description:
      "Automated, consistent feedback means less debate, more shipping. Everyone gets the same standard applied.",
    stat: "100%",
    statLabel: "consistent review standards",
  },
];

const plans = [
  {
    name: "Open Source",
    price: "Free",
    period: "forever",
    description: "Public repositories. We've got you.",
    features: [
      "Unlimited public repositories",
      "Unlimited PR reviews",
      "Bug detection",
      "Security scanning",
      "Inline suggestions",
      "GitHub PR comments",
    ],
    cta: "Get started free",
    ctaHref: "/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per seat / month",
    description: "Private repos, teams, and advanced rules.",
    features: [
      "Everything in Open Source",
      "Unlimited private repositories",
      "Custom review rules",
      "Priority review queue",
      "Team analytics dashboard",
      "Email + Slack notifications",
      "Priority support",
    ],
    cta: "Start 14-day trial",
    ctaHref: "/signup?plan=pro",
    highlighted: true,
  },
];

const faqs = [
  {
    question: "How does Code Chowkidar access my code?",
    answer:
      "Code Chowkidar uses a GitHub App with read-only access to your repository's pull request diffs. It never clones your repository or stores your source code. Only the changed lines in a PR are sent for analysis.",
  },
  {
    question: "Which AI model powers the reviews?",
    answer:
      "Code Chowkidar uses a combination of static analysis and large language model inference to review code. The specific model is updated periodically as better options become available.",
  },
  {
    question: "Does it work with all programming languages?",
    answer:
      "Code Chowkidar works with all languages GitHub supports. It has enhanced understanding of TypeScript, JavaScript, Python, Go, Rust, Java, and Ruby, but can review any language.",
  },
  {
    question: "What if I disagree with a suggestion?",
    answer:
      "Every suggestion is optional. You can dismiss, resolve, or ignore any comment â€” just like you would with a human reviewer. Code Chowkidar does not block merges.",
  },
  {
    question: "Is it free for open-source projects?",
    answer:
      "Yes. Public repositories are free forever. Always. We use open-source projects as a way to improve our models and we believe in giving back to the community.",
  },
];

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   PAGE COMPONENT
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-orange-600 focus:px-4 focus:py-2 focus:text-white focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950">

        {/* â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <header className="sticky top-0 z-40 border-b border-zinc-100 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
            aria-label="Main navigation"
          >
            {/* Brand */}
            <Link
              href="/"
              id="nav-logo"
              aria-label="Code Chowkidar â€” home"
              className="flex items-center gap-2.5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-600 shadow-sm">
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"
                    fill="white"
                    fillOpacity="0.3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-base font-bold text-zinc-900 dark:text-white">
                Code Chowkidar
              </span>
            </Link>

            {/* Desktop nav links */}
            <ul className="hidden items-center gap-6 md:flex" role="list">
              {[
                { label: "Features", href: "/#features" },
                { label: "How It Works", href: "/#how-it-works" },
                { label: "Pricing", href: "/#pricing" },
                { label: "Docs", href: "/docs" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <Link
                href="/signin"
                id="nav-signin-btn"
                className="hidden text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white sm:block"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                id="nav-signup-btn"
                className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Get started free
              </Link>
            </div>
          </nav>
        </header>

        <main id="main-content">

          {/* â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <section
            aria-labelledby="hero-headline"
            className="relative overflow-hidden bg-white dark:bg-zinc-950"
          >
            {/* Background gradient */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900"
            />
            {/* Decorative blobs */}
            <div
              aria-hidden="true"
              className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange-200 opacity-20 blur-3xl dark:bg-orange-900"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-amber-200 opacity-20 blur-3xl dark:bg-amber-900"
            />

            <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
              <div className="mx-auto max-w-3xl text-center">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700 dark:border-orange-800 dark:bg-orange-950 dark:text-orange-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true" />
                  AI-Powered Code Review
                </div>

                {/* H1 */}
                <h1
                  id="hero-headline"
                  className="text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-6xl lg:text-7xl"
                >
                  Your PR&apos;s Personal{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                    Chowkidar.
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-zinc-600 dark:text-zinc-400">
                  We review every pull request before it reaches production.
                  Bugs, security risks, and code smells â€” caught automatically,
                  so your team can focus on shipping.
                </p>

                {/* CTAs */}
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link
                    href="/signup"
                    id="hero-primary-cta"
                    className="flex items-center gap-2 rounded-xl bg-orange-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-500 hover:shadow-orange-500/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:translate-y-0"
                    aria-label="Hire your Chowkidar â€” get started free"
                  >
                    Hire Your Chowkidar
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/#how-it-works"
                    id="hero-secondary-cta"
                    className="flex items-center gap-2 rounded-xl border border-zinc-200 px-8 py-4 text-base font-semibold text-zinc-700 transition-all hover:border-zinc-300 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  >
                    See how it works
                  </Link>
                </div>

                {/* Social proof */}
                <p className="mt-8 text-sm text-zinc-400 dark:text-zinc-500">
                  Free for open-source. No credit card required.
                </p>
              </div>

              {/* Hero visual â€” PR review mockup */}
              <div className="mx-auto mt-16 max-w-4xl">
                <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-2xl shadow-zinc-900/10 dark:border-zinc-700 dark:shadow-black/30">
                  {/* Mock browser chrome */}
                  <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-900">
                    <div className="h-3 w-3 rounded-full bg-red-400" aria-hidden="true" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" aria-hidden="true" />
                    <div className="h-3 w-3 rounded-full bg-green-400" aria-hidden="true" />
                    <div className="ml-4 flex-1 rounded-md bg-zinc-200 px-3 py-1 text-xs text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400">
                      github.com/yourorg/yourrepo/pull/142
                    </div>
                  </div>
                  {/* Mock PR review card */}
                  <div className="bg-white p-6 dark:bg-zinc-950">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-xs font-bold text-white" aria-hidden="true">
                          CC
                        </div>
                        <div className="flex-1 rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-900 dark:bg-orange-950/30">
                          <div className="mb-2 flex items-center gap-2">
                            <span className="text-sm font-semibold text-zinc-900 dark:text-white">Code Chowkidar</span>
                            <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                              bot
                            </span>
                            <span className="text-xs text-zinc-400">just now</span>
                          </div>
                          <p className="text-sm text-zinc-700 dark:text-zinc-300">
                            ðŸ” <strong>Security:</strong> Potential SQL injection risk on line 47. User input is being concatenated directly into the query string. Use parameterized queries instead.
                          </p>
                          <div className="mt-3 rounded-md bg-zinc-900 p-3 font-mono text-xs dark:bg-zinc-800">
                            <span className="text-red-400">- const query = `SELECT * FROM users WHERE id = ${"{"}userId{"}"}`;</span>
                            <br />
                            <span className="text-green-400">+ const query = db.prepare(&apos;SELECT * FROM users WHERE id = ?&apos;).get(userId);</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-xs font-bold text-white" aria-hidden="true">
                          CC
                        </div>
                        <div className="flex-1 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
                          <div className="mb-2 flex items-center gap-2">
                            <span className="text-sm font-semibold text-zinc-900 dark:text-white">Code Chowkidar</span>
                            <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                              bot
                            </span>
                            <span className="text-xs text-zinc-400">just now</span>
                          </div>
                          <p className="text-sm text-zinc-700 dark:text-zinc-300">
                            ðŸ› <strong>Bug:</strong> The <code className="rounded bg-zinc-100 px-1 text-xs dark:bg-zinc-800">fetchUser</code> function does not handle the case where the user is <code className="rounded bg-zinc-100 px-1 text-xs dark:bg-zinc-800">null</code>. This will throw a runtime error on line 83 when the user is not found.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* â”€â”€ FEATURES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <section
            id="features"
            aria-labelledby="features-heading"
            className="bg-zinc-50 py-24 dark:bg-zinc-900 sm:py-32"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2
                  id="features-heading"
                  className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
                >
                  Everything a senior reviewer catches.
                  <br />
                  <span className="text-orange-600">In 30 seconds.</span>
                </h2>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                  Code Chowkidar doesn&apos;t get tired, doesn&apos;t miss
                  things, and doesn&apos;t have off days.
                </p>
              </div>

              <ul
                role="list"
                className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {features.map((feature) => (
                  <li
                    key={feature.title}
                    className="group flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-800"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl dark:bg-orange-950" aria-hidden="true">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* â”€â”€ HOW IT WORKS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <section
            id="how-it-works"
            aria-labelledby="how-it-works-heading"
            className="bg-white py-24 dark:bg-zinc-950 sm:py-32"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2
                  id="how-it-works-heading"
                  className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
                >
                  Up and running in 3 steps.
                </h2>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                  No YAML. No config files. No engineering time wasted on setup.
                </p>
              </div>

              <ol
                role="list"
                className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3"
              >
                {steps.map((step, index) => (
                  <li key={step.number} className="relative flex flex-col gap-4">
                    {/* Connector line */}
                    {index < steps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="absolute left-10 top-5 hidden h-0.5 w-full bg-gradient-to-r from-orange-200 to-transparent sm:block dark:from-orange-900"
                      />
                    )}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white shadow-lg shadow-orange-500/30 z-10">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-12 text-center">
                <Link
                  href="/signup"
                  id="how-it-works-cta"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-500 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Connect GitHub Now
                </Link>
              </div>
            </div>
          </section>

          {/* â”€â”€ BENEFITS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <section
            id="benefits"
            aria-labelledby="benefits-heading"
            className="bg-zinc-50 py-24 dark:bg-zinc-900 sm:py-32"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2
                  id="benefits-heading"
                  className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
                >
                  The math is simple.
                </h2>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                  Better reviews. Faster shipping. Less firefighting.
                </p>
              </div>

              <ul role="list" className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-3">
                {benefits.map((benefit) => (
                  <li
                    key={benefit.title}
                    className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
                  >
                    <div>
                      <p className="text-4xl font-black text-orange-600">
                        {benefit.stat}
                      </p>
                      <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1 uppercase tracking-wide">
                        {benefit.statLabel}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* â”€â”€ PRICING â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <section
            id="pricing"
            aria-labelledby="pricing-heading"
            className="bg-white py-24 dark:bg-zinc-950 sm:py-32"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2
                  id="pricing-heading"
                  className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl"
                >
                  Simple, honest pricing.
                </h2>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                  Open source? Free forever. Team? Affordable per seat.
                  <br />
                  No hidden fees. No surprise invoices.
                </p>
              </div>

              <ul
                role="list"
                className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2"
              >
                {plans.map((plan) => (
                  <li
                    key={plan.name}
                    className={`flex flex-col rounded-2xl border p-8 shadow-sm ${
                      plan.highlighted
                        ? "border-orange-500 bg-gradient-to-br from-orange-50 to-amber-50 shadow-orange-500/10 dark:from-orange-950/30 dark:to-amber-950/30 dark:border-orange-700"
                        : "border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800"
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="mb-4 inline-flex w-fit items-center gap-1 rounded-full bg-orange-600 px-3 py-1 text-xs font-bold text-white">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      {plan.description}
                    </p>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-black text-zinc-900 dark:text-white">
                        {plan.price}
                      </span>
                      <span className="text-sm text-zinc-500 dark:text-zinc-400">
                        {plan.period}
                      </span>
                    </div>
                    <ul role="list" className="mt-6 flex flex-col gap-3 flex-1">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                        >
                          <svg
                            aria-hidden="true"
                            className="h-4 w-4 flex-shrink-0 text-orange-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={plan.ctaHref}
                      id={`pricing-${plan.name.toLowerCase().replace(" ", "-")}-cta`}
                      className={`mt-8 flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        plan.highlighted
                          ? "bg-orange-600 text-white shadow-lg shadow-orange-500/25 hover:bg-orange-500 focus:ring-orange-500"
                          : "border border-zinc-200 text-zinc-700 hover:bg-zinc-50 focus:ring-zinc-400 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-700"
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* â”€â”€ FAQ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <section
            id="faq"
            aria-labelledby="faq-heading"
            className="bg-zinc-50 py-24 dark:bg-zinc-900 sm:py-32"
          >
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <h2
                id="faq-heading"
                className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl text-center"
              >
                Questions we get asked.
              </h2>
              <dl className="mt-12 space-y-6">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800"
                  >
                    <dt className="text-base font-semibold text-zinc-900 dark:text-white">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* FAQ Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: faqs.map((faq) => ({
                      "@type": "Question",
                      name: faq.question,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                      },
                    })),
                  }),
                }}
              />
            </div>
          </section>

          {/* â”€â”€ FINAL CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <section
            aria-labelledby="final-cta-heading"
            className="bg-gradient-to-br from-orange-500 to-red-700 py-24 sm:py-32"
          >
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
              <h2
                id="final-cta-heading"
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
              >
                Your codebase deserves a chowkidar.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-xl text-orange-100">
                Start reviewing pull requests automatically. Free for
                open-source. No credit card. Up in 60 seconds.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/signup"
                  id="final-cta-primary-btn"
                  className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-orange-600 shadow-lg transition-all hover:bg-orange-50 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
                >
                  Hire Your Chowkidar Free
                </Link>
                <Link
                  href="/docs"
                  id="final-cta-secondary-btn"
                  className="flex items-center gap-2 rounded-xl border border-orange-300 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-orange-600 hover:border-orange-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
                >
                  Read the Docs
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
              {/* Brand column */}
              <div className="col-span-2 lg:col-span-2">
                <Link
                  href="/"
                  aria-label="Code Chowkidar â€” home"
                  className="flex items-center gap-2"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-red-600">
                    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-zinc-900 dark:text-white">
                    Code Chowkidar
                  </span>
                </Link>
                <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 max-w-xs">
                  Your PR&apos;s personal chowkidar. Patrolling every commit,
                  before your teammates do.
                </p>
              </div>

              {/* Product links */}
              <nav aria-label="Product links">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Product
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {[
                    { label: "Features", href: "/#features" },
                    { label: "How It Works", href: "/#how-it-works" },
                    { label: "Pricing", href: "/#pricing" },
                    { label: "Changelog", href: "/changelog" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Resources links */}
              <nav aria-label="Resources links">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Resources
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {[
                    { label: "Documentation", href: "/docs" },
                    { label: "GitHub Integration", href: "/docs/github" },
                    { label: "API Reference", href: "/docs/api" },
                    { label: "Status", href: "/status" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Legal links */}
              <nav aria-label="Legal links">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {[
                    { label: "Privacy Policy", href: "/privacy" },
                    { label: "Terms of Service", href: "/terms" },
                    { label: "Security", href: "/security" },
                    { label: "Contact", href: "/contact" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Bottom bar */}
            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 sm:flex-row dark:border-zinc-800">
              <p className="text-xs text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Code Chowkidar. Built with â¤ï¸ and mild sarcasm.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Kunalmadoliya/Code-Chowkidar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Code Chowkidar on GitHub"
                  className="text-zinc-400 transition-colors hover:text-zinc-700 dark:hover:text-zinc-300"
                >
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
