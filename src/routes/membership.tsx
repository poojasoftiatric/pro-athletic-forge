import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/landing-page";
import { SITE_URL, membershipSchema, createBreadcrumbSchema } from "@/lib/seo-schemas";

const title = "Gym Membership & Pricing | Pro Athletic Gyms Zirakpur";
const description =
  "Transparent gym membership plans in Zirakpur starting at ₹5,000. Includes 18-hour access, certified coaches, sauna & steam bath. Claim your free trial session!";

const breadcrumb = createBreadcrumbSchema([
  { name: "Home", url: `${SITE_URL}/` },
  { name: "Membership", url: `${SITE_URL}/membership` },
]);

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "gym membership zirakpur, gym fees zirakpur, pro athletic pricing, affordable luxury gym zirakpur, gym subscription VIP road",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/membership` },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Pro Athletic Membership Plans and Pricing" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/membership` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(membershipSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
    ],
  }),
  component: () => <LandingPage initialSection="membership" />,
});
