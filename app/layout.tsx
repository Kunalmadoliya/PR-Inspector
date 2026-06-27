import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { QueryProvider } from "@/components/providers/query-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://prinspector.com";
export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    template: "%s | PR  Inspector",
    default: "PR  Inspector — AI Code Review for GitHub Pull Requests",
  },
  description:
    "PR  Inspector automatically reviews your GitHub pull requests, detects bugs, flags security vulnerabilities, and helps your team ship cleaner, safer code. Instant. Automated. Opinionated.",
  keywords: [
    "AI code review",
    "GitHub pull request review",
    "automated code review",
    "bug detection",
    "code quality",
    "static analysis",
    "developer productivity",
    "AI developer tools",
    "PR review bot",
    "code security",
  ],
  authors: [{ name: "PR  Inspector" }],
  creator: "PR  Inspector",
  publisher: "PR  Inspector",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: APP_URL,
    siteName: "PR  Inspector",
    title: "PR  Inspector — AI Code Review for GitHub Pull Requests",
    description:
      "Your PR's personal inspector. We review every pull request before it reaches production. Bugs, security risks, and code smells — caught automatically.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PR  Inspector — AI Code Review for GitHub Pull Requests",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PR  Inspector — AI Code Review for GitHub Pull Requests",
    description:
      "Your PR's personal inspector. Automated code review that catches bugs, flags security issues, and posts inline suggestions — before your teammates do.",
    images: ["/og-image.png"],
    creator: "@prInspector",
    site: "@prInspector",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: APP_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        manrope.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
