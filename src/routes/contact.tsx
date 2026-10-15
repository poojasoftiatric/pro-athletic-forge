import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/landing-page";
import { SITE_URL, contactSchema, createBreadcrumbSchema } from "@/lib/seo-schemas";

const title = "Contact & Book Free Trial Pass | Pro Athletic Gym Zirakpur";
const description =
  "Contact Pro Athletic Gym at Hollywood Plaza, VIP Road, Zirakpur. Call +91-98200-44120 or book your 100% free workout session online today!";

const breadcrumb = createBreadcrumbSchema([
  { name: "Home", url: `${SITE_URL}/` },
  { name: "Contact", url: `${SITE_URL}/contact` },
]);

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "contact pro athletic, gym free trial zirakpur, gym address VIP road zirakpur, gym phone number zirakpur",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Contact Pro Athletic Gym in Zirakpur" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(contactSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
    ],
  }),
  component: () => <LandingPage initialSection="contact" />,
});
