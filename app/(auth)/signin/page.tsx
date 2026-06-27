import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Sign in to Code Chowkidar. Your AI-powered GitHub pull request reviewer is ready. Review smarter — connect with GitHub and get instant, automated code reviews.",
  robots: {
    index: false,
    follow: false,
  },
};

type SignInPageProps = {
  searchParams: Promise<{ callback?: string }>;
};

const SignInPage = async ({ searchParams }: SignInPageProps) => {
  const { callback } = await searchParams;
  const callbackURL = callback ?? "/dashboard";

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Welcome back
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Your PRs have been waiting. Let&apos;s get back to work.
        </p>
      </div>

      {/* Code Chowkidar logo — accessible */}
      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 80 80"
          fill="none"
          aria-label="Code Chowkidar shield logo"
          role="img"
          id="code-chowkidar-logo"
        >
          <title>Code Chowkidar</title>
          <g id="logomark">
            <g id="outline">
              <path
                d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40Z"
                fill="#1D2633"
              />
            </g>
            <path d="M69.7127 50.2134C71.0635 50.2134 72.0243 51.5262 71.5163 52.7778C66.4657 65.2234 54.2573 74.0001 39.999 74.0001C25.7408 74.0001 13.5324 65.2234 8.4817 52.7778C7.97373 51.5262 8.93455 50.2134 10.2854 50.2134H69.7127Z" fill="#EDEBDE" />
            <path d="M71.5163 27.2222C72.0243 28.4739 71.0635 29.7867 69.7127 29.7867H10.2854C8.93454 29.7867 7.97373 28.4739 8.48169 27.2222C13.5324 14.7767 25.7408 6 39.999 6C54.2573 6 66.4655 14.7767 71.5163 27.2222Z" fill="#EDEBDE" />
            <path d="M34 6.52774C35.9477 6.18095 37.9527 6 40.0001 6C42.0474 6 44.0524 6.18095 46 6.52773V29.7867H34V6.52774Z" fill="#AC2828" />
            <path d="M46.0007 50.2134H33.9995C33.9743 55.4313 33.0237 60.6039 31.1912 65.4907L28.7188 72.0837C32.2489 73.325 36.0457 74.0001 40.0002 74.0001C43.9546 74.0001 47.7514 73.325 51.2815 72.0837L48.809 65.4907C46.9765 60.6039 46.0259 55.4313 46.0007 50.2134Z" fill="#AC2828" />
            <path d="M46 6.52783C50.3408 7.30072 54.3967 8.89734 58 11.1503V29.7868H46V6.52783Z" fill="#306A9F" />
            <path d="M51.2808 72.0837C56.7382 70.1648 61.5584 66.8929 65.3386 62.6705L64.7487 62.2951C60.6051 59.6582 58.0725 55.1148 58.001 50.2134H46C46.0252 55.4313 46.9759 60.6039 48.8085 65.4907L51.2808 72.0837Z" fill="#306A9F" />
            <path d="M22 11.1503C25.6033 8.89735 29.6591 7.30072 34 6.52783V29.7868H22V11.1503Z" fill="#DEB038" />
            <path d="M21.9979 50.2134H33.9989C33.9738 55.409 33.0311 60.5597 31.2139 65.4281L28.7181 72.0837C23.2606 70.1648 18.4405 66.8929 14.6602 62.6705L15.2501 62.2951C19.3937 59.6582 21.9264 55.1148 21.9979 50.2134Z" fill="#DEB038" />
          </g>
        </svg>
        <div>
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Code Chowkidar</p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">Patrolling every commit.</p>
        </div>
      </div>

      {/* GitHub OAuth */}
      <a
        href={`/api/auth/sign-in/social?provider=github&callbackURL=${encodeURIComponent(callbackURL)}`}
        id="signin-github-btn"
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-200 bg-zinc-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-zinc-700 dark:border-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
        aria-label="Sign in with GitHub"
      >
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
        Sign in with GitHub
      </a>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-zinc-200 dark:border-zinc-700" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-zinc-400 dark:bg-zinc-950 dark:text-zinc-500">or sign in with email</span>
        </div>
      </div>

      {/* Email + Password form */}
      <form id="signin-form" className="space-y-4" aria-label="Sign in with email and password" noValidate>
        <div className="space-y-1.5">
          <label htmlFor="signin-email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email address</label>
          <input id="signin-email" name="email" type="email" autoComplete="email" required placeholder="ada@yourteam.com"
            className="block w-full rounded-md border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-500" />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="signin-password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</label>
            <Link href="/forgot-password" id="forgot-password-link" className="text-xs text-orange-600 hover:text-orange-500 dark:text-orange-400 transition-colors">Forgot password?</Link>
          </div>
          <input id="signin-password" name="password" type="password" autoComplete="current-password" required placeholder="Your password"
            className="block w-full rounded-md border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-500" />
        </div>
        <button id="signin-submit-btn" type="submit"
          className="flex w-full items-center justify-center rounded-lg bg-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-[0.98]"
          aria-label="Sign in to Code Chowkidar">
          Sign in
        </button>
      </form>

      <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
        New to Code Chowkidar?{" "}
        <Link href="/signup" id="goto-signup-link" className="font-semibold text-orange-600 hover:text-orange-500 dark:text-orange-400 transition-colors">
          Get started free
        </Link>
      </p>
    </div>
  );
};

export default SignInPage;
