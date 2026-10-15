import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/landing-page";
import { SITE_URL, trainersSchema, createBreadcrumbSchema } from "@/lib/seo-schemas";

const title = "Certified Personal Trainers in Zirakpur | Pro Athletic";
const description =
  "Meet 7+ certified personal coaches at Pro Athletic Zirakpur with 5-11 years of experience in strength training, bodybuilding, fat loss, yoga, and conditioning.";

const breadcrumb = createBreadcrumbSchema([
  { name: "Home", url: `${SITE_URL}/` },
  { name: "Trainers", url: `${SITE_URL}/trainers` },
]);

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "personal trainer zirakpur, certified fitness coach zirakpur, gym trainers punjab, body transformation trainer zirakpur",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/trainers` },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Pro Athletic Certified Fitness Trainers" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/trainers` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(trainersSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
    ],
  }),
  component: () => <LandingPage initialSection="trainers" />,
});
