import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/site";

// Emitted as a static sitemap.xml at build time, so it works under
// `output: "export"` on plain Apache hosting. `force-static` is required:
// sitemap.ts is a Route Handler, and a static export has no server to run it
// per-request, so it must be resolved at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
