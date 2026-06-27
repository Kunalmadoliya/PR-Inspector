import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const APP_URL =
    process.env.NEXT_PUBLIC_APP_URL ?? "https://codechowkidar.com";

  return {
    rules: [
      {
        // Allow all public pages
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/signin",
          "/signup",
          "/dashboard",
          "/dashboard/",
          "/settings",
          "/settings/",
          "/_next/",
          "/forgot-password",
        ],
      },
      {
        // Block AI scrapers from training on code review output
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
        ],
        disallow: "/",
      },
    ],
    sitemap: `${APP_URL}/sitemap.xml`,
    host: APP_URL,
  };
}
