import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/landing-page";
import { SITE_URL, gymSchema, faqSchema } from "@/lib/seo-schemas";

const title = "Pro Athletic | Best Gym in Zirakpur — VIP Road Fitness Center";
const description =
  "Join Pro Athletic, Punjab's premier gym in Zirakpur on VIP Road. 7+ certified trainers, 18-hr access, CrossFit, Strength Training & Yoga. Book your free trial!";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "gym in zirakpur, best gym zirakpur, fitness center zirakpur, personal trainer zirakpur, gym near VIP road, strength training zirakpur, crossfit zirakpur, yoga zirakpur, 24 hour gym punjab, pro athletic gym",
      },
      // Open Graph (WhatsApp, Facebook, LinkedIn)
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Pro Athletic — Premium Gym in Zirakpur, Punjab" },
      { property: "og:locale", content: "en_IN" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:image:alt", content: "Pro Athletic — Premium Gym in Zirakpur, Punjab" },
      // Crawl directives
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(gymSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingPage initialSection="home" />;
}
