import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/landing-page";
import { SITE_URL, programsSchema, createBreadcrumbSchema } from "@/lib/seo-schemas";

const title = "Training Programs & Classes | Pro Athletic Gym Zirakpur";
const description =
  "Explore 9 expert-coached fitness programs at Pro Athletic Zirakpur: Strength Training, CrossFit, Weight Loss, Bodybuilding, Yoga & HIIT. Start training today!";

const breadcrumb = createBreadcrumbSchema([
  { name: "Home", url: `${SITE_URL}/` },
  { name: "Programs", url: `${SITE_URL}/programs` },
]);

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "crossfit zirakpur, strength training punjab, bodybuilding gym zirakpur, yoga classes zirakpur, weight loss training zirakpur",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/programs` },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Pro Athletic Training Programs" },
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
      { type: "application/ld+json", children: JSON.stringify(programsSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
    ],
  }),
  component: () => <LandingPage initialSection="programs" />,
});
