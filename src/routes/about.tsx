import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/landing-page";
import { SITE_URL, aboutSchema, createBreadcrumbSchema } from "@/lib/seo-schemas";

const title = "About Us | Pro Athletic Gym in Zirakpur, Punjab";
const description =
  "Discover Pro Athletic in Zirakpur. Explore our 18-hour facility, Olympic equipment, certified personal trainers, and performance fitness community on VIP Road.";

const breadcrumb = createBreadcrumbSchema([
  { name: "Home", url: `${SITE_URL}/` },
  { name: "About Us", url: `${SITE_URL}/about` },
]);

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "about pro athletic, gym in zirakpur, best fitness center zirakpur, gym trainers zirakpur, fitness facility VIP road",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/about` },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "About Pro Athletic Gym in Zirakpur" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(aboutSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
    ],
  }),
  component: () => <LandingPage initialSection="about" />,
});
