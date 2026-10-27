import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo-schemas";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", changeFrequency: "daily" as const, priority: 1.0 },
    { path: "/about", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/programs", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/membership", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/trainers", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/testimonials", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/gallery", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
    images: [`${SITE_URL}/og-image.jpg`],
  }));
}
