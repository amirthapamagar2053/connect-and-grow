// Canonical origin for the live site. Used by metadataBase, the sitemap and
// robots.txt so canonical URLs and absolute OG image paths all resolve to one
// host rather than being guessed per-page.
export const SITE_URL = "https://connectandgrowservices.com.au";

export const SITE_NAME = "Connect & Grow";

// Routes carry a trailing slash to match `trailingSlash: true` in
// next.config.ts — the sitemap should list the URLs Apache actually serves,
// not ones that redirect.
export const ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" as const },
  { path: "/services/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/about/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/booking/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/contact/", priority: 0.8, changeFrequency: "monthly" as const },
  {
    path: "/emergency-resources/",
    priority: 0.7,
    changeFrequency: "yearly" as const,
  },
  { path: "/privacy-policy/", priority: 0.3, changeFrequency: "yearly" as const },
  {
    path: "/terms-of-service/",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
];
