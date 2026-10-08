import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site has no server-side features (no route handlers,
  // no next/image, no server actions), so `next build` can emit a plain
  // HTML/CSS/JS tree into `out/` for Apache-based cPanel hosting.
  output: "export",

  // Emits `/about/index.html` rather than `/about.html`, which Apache serves
  // from a directory automatically — no .htaccess rewrites needed.
  trailingSlash: true,
};

export default nextConfig;
