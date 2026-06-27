import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Sign in to PR  Inspector. Your AI-powered GitHub pull request reviewer is ready. Review smarter — connect with GitHub and get instant, automated code reviews.",
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

      {/* PR  Inspector logo — accessible */}
      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c5a44e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="PR  Inspector police cap logo"
          role="img"
          id="pr-inspector-logo"
        >
          <title>PR Inspector</title>
          <path
            d="M2 15C2 17 5 19 12 19C19 19 22 17 22 15"
            stroke="#c5a44e"
            fill="#1e3a5f"
          />
          <path
            d="M4 14V11C4 7 7 5 12 5C17 5 20 7 20 11V14"
            fill="#1e3a5f"
            stroke="#1e3a5f"
          />
          <circle cx="12" cy="10" r="2" fill="#c5a44e" stroke="#c5a44e" />
          <path d="M10 14h4" stroke="#c5a44e" strokeWidth="2" />
        </svg>
        <div>
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
            PR Inspector
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            Inspecting every commit.
          </p>
        </div>
      </div>

      {/* GitHub OAuth */}
      <a
        href={`/api/auth/sign-in/social?provider=github&callbackURL=${encodeURIComponent(callbackURL)}`}
        id="signin-github-btn"
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-200 bg-zinc-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-zinc-700 dark:border-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
        aria-label="Sign in with GitHub"
      >
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
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
          <span className="bg-white px-2 text-zinc-400 dark:bg-zinc-950 dark:text-zinc-500">
            or sign in with email
          </span>
        </div>
      </div>

      {/* Email + Password form */}
      <form
        id="signin-form"
        className="space-y-4"
        aria-label="Sign in with email and password"
        noValidate
      >
        <div className="space-y-1.5">
          <label
            htmlFor="signin-email"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Email address
          </label>
          <input
            id="signin-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="ada@yourteam.com"
            className="block w-full rounded-md border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm outline-none transition focus:border-[#2a4f7a] focus:ring-2 focus:ring-[#2a4f7a]/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-500"
          />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="signin-password"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Password
            </label>
            <Link
              href="/forgot-password"
              id="forgot-password-link"
              className="text-xs text-[#1e3a5f] hover:text-[#2a4f7a] dark:text-slate-400 transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <input
            id="signin-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Your password"
            className="block w-full rounded-md border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm outline-none transition focus:border-[#2a4f7a] focus:ring-2 focus:ring-[#2a4f7a]/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-500"
          />
        </div>
        <button
          id="signin-submit-btn"
          type="submit"
          className="flex w-full items-center justify-center rounded-lg bg-[#1e3a5f] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#2a4f7a] focus:outline-none focus:ring-2 focus:ring-[#2a4f7a] focus:ring-offset-2 active:scale-[0.98]"
          aria-label="Sign in to PR  Inspector"
        >
          Sign in
        </button>
      </form>

      <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
        New to PR Inspector?{" "}
        <Link
          href="/signup"
          id="goto-signup-link"
          className="font-semibold text-[#1e3a5f] hover:text-[#2a4f7a] dark:text-slate-400 transition-colors"
        >
          Get started free
        </Link>
      </p>
    </div>
  );
};

export default SignInPage;
