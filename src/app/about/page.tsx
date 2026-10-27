import type { Metadata } from "next";
import { LandingPage } from "@/components/site/landing-page";
import { SITE_URL, aboutSchema, createBreadcrumbSchema } from "@/lib/seo-schemas";

const title = "About Us | Pro Athletic Gym in Zirakpur, Punjab";
const description =
  "Discover Pro Athletic in Zirakpur. Explore our 18-hour facility, Olympic equipment, certified personal trainers, and performance fitness community on VIP Road.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "about pro athletic",
    "gym in zirakpur",
    "best fitness center zirakpur",
    "gym trainers zirakpur",
    "fitness facility VIP road",
  ],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: `${SITE_URL}/about`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "About Pro Athletic Gym in Zirakpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function AboutPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "About Us", url: `${SITE_URL}/about` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <LandingPage initialSection="about" />
    </>
  );
}
