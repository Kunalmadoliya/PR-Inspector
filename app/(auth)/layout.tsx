import React from "react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen bg-white dark:bg-zinc-950">
      {/* LEFT PANEL — Brand identity panel, hidden on mobile */}
      <div className="relative hidden w-1/2 overflow-hidden bg-zinc-900 lg:flex lg:flex-col lg:justify-between">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#2a4f7a] to-[#0f2440] opacity-95" />

        {/* Decorative depth orbs */}
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-yellow-300 opacity-30 mix-blend-multiply blur-3xl filter" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-red-400 opacity-30 mix-blend-multiply blur-3xl filter" />

        {/* Content overlay */}
        <div className="relative z-10 flex h-full flex-col justify-between p-12 text-white xl:p-16">
          {/* Brand name */}
          <Link
            href="/"
            aria-label="PR  Inspector — go to homepage"
            className="flex items-center gap-2 w-fit"
          >
            {/* Shield icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#c5a44e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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
            <span className="text-2xl font-black tracking-tight">
              Code <span className="text-[#c5a44e]">Inspector</span>
            </span>
          </Link>

          {/* Hero copy */}
          <div className="max-w-lg space-y-6">
            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight">
              Inspecting every commit.
              <br />
              <span className="text-[#c5a44e]">Before your teammates do.</span>
            </h1>
            <p className="text-lg font-medium text-white/80">
              Connect GitHub and let PR Inspector review your next pull request
              in under 30 seconds. Bugs caught. Security flagged. Teammates
              impressed.
            </p>

            {/* Social proof strip */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {["#f59e0b", "#ef4444", "#3b82f6", "#10b981"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-white/50 flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: color }}
                      aria-hidden="true"
                    >
                      {["A", "R", "S", "K"][i]}
                    </div>
                  ),
                )}
              </div>
              <p className="text-sm text-white/70">
                Trusted by developers shipping production-ready code.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL — Auth form container */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          {/* Mobile-only brand header */}
          <div className="mb-8 flex items-center gap-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#c5a44e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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
            <Link
              href="/"
              className="text-xl font-black tracking-tight text-zinc-900 dark:text-white"
            >
              PR Inspector
            </Link>
          </div>

          {/* Actual sign-in / sign-up form */}
          <div className="animate-fade-in-up">{children}</div>
        </div>
      </div>
    </div>
  );
}
