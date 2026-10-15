import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/landing-page";
import { SITE_URL, gymSchema, createBreadcrumbSchema } from "@/lib/seo-schemas";

const title = "Member Reviews & Success Stories | Pro Athletic Zirakpur";
const description =
  "Read real member reviews and body transformation stories from Pro Athletic Gym in Zirakpur. Rated 5/5 stars on Google by 80+ happy fitness athletes.";

const breadcrumb = createBreadcrumbSchema([
  { name: "Home", url: `${SITE_URL}/` },
  { name: "Testimonials", url: `${SITE_URL}/testimonials` },
]);

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "@id": `${SITE_URL}/#gym`,
  name: "Pro Athletic",
  aggregateRating: gymSchema.aggregateRating,
};

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "pro athletic reviews, gym reviews zirakpur, best gym in zirakpur reviews, gym member transformations punjab",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/testimonials` },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Pro Athletic Member Reviews and Testimonials" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/testimonials` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(reviewsSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
    ],
  }),
  component: () => <LandingPage initialSection="testimonials" />,
});
