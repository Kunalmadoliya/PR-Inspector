import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up for pr Inspector. Start automating your GitHub pull request reviews today.",
  robots: { index: false, follow: false },
};

export default function SignUpPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Create an account
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Join pr Inspector and automate your PR reviews.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c5a44e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="pr Inspector police cap logo" role="img">
          <title>pr Inspector</title>
          <path d="M2 15C2 17 5 19 12 19C19 19 22 17 22 15" stroke="#c5a44e" fill="#1e3a5f" />
          <path d="M4 14V11C4 7 7 5 12 5C17 5 20 7 20 11V14" fill="#1e3a5f" stroke="#1e3a5f" />
          <circle cx="12" cy="10" r="2" fill="#c5a44e" stroke="#c5a44e" />
          <path d="M10 14h4" stroke="#c5a44e" strokeWidth="2" />
        </svg>
        <div>
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">pr Inspector</p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">Inspecting every commit.</p>
        </div>
      </div>

      <a
        href="/api/auth/sign-in/social?provider=github&callbackURL=/dashboard"
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-200 bg-zinc-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-zinc-700 dark:border-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
      >
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
        Sign up with GitHub
      </a>

      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-zinc-200 dark:border-zinc-700" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-zinc-400 dark:bg-zinc-950 dark:text-zinc-500">or sign up with email</span>
        </div>
      </div>

      <form className="space-y-4">
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email address</label>
          <input type="email" required placeholder="ada@yourteam.com"
            className="block w-full rounded-md border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm outline-none transition focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-500" />
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</label>
          <input type="password" required placeholder="Create a password"
            className="block w-full rounded-md border border-zinc-200 bg-white px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm outline-none transition focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-500" />
        </div>
        <button type="submit"
          className="flex w-full items-center justify-center rounded-lg bg-[#1e3a5f] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#2a4f7a] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:ring-offset-2 active:scale-[0.98]">
          Sign up
        </button>
      </form>

      <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
        Already have an account?{" "}
        <Link href="/signin" className="font-semibold text-[#1e3a5f] hover:text-[#2a4f7a] transition-colors">
          Sign in
        </Link>
      </p>
    </div>
  );
}
