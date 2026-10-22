import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/landing-page";
import { SITE_URL, createBreadcrumbSchema } from "@/lib/seo-schemas";

const title = "Gym Photos & Facilities Tour | Pro Athletic Zirakpur";
const description =
  "Take a virtual photo tour of Pro Athletic Gym in Zirakpur. View our Olympic weightlifting stations, cardio theater, CrossFit turf, and luxury recovery zones.";

const breadcrumb = createBreadcrumbSchema([
  { name: "Home", url: `${SITE_URL}/` },
  { name: "Gallery", url: `${SITE_URL}/gallery` },
]);

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Pro Athletic Gym Facilities Gallery",
  description:
    "Photo gallery showcasing workout zones, equipment, locker rooms, and athletic performance facilities at Pro Athletic Zirakpur.",
  url: `${SITE_URL}/gallery`,
};

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "pro athletic gym photos, gym interior zirakpur, workout equipment zirakpur, fitness center images Punjab",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/gallery` },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Pro Athletic Gym Gallery" },
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
      { type: "application/ld+json", children: JSON.stringify(gallerySchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
    ],
  }),
  component: () => <LandingPage initialSection="gallery" />,
});
