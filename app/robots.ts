import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Emitted as a static robots.txt at build time, so it works under
// `output: "export"` on plain Apache hosting. `force-static` is required:
// robots.ts is a Route Handler, and a static export has no server to run it
// per-request, so it must be resolved at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
