import type { Metadata } from "next";
import { LandingPage } from "@/components/site/landing-page";
import { SITE_URL, createBreadcrumbSchema } from "@/lib/seo-schemas";

const title = "Gym Photos & Facilities Tour | Pro Athletic Zirakpur";
const description =
  "Take a virtual photo tour of Pro Athletic Gym in Zirakpur. View our Olympic weightlifting stations, cardio theater, CrossFit turf, and luxury recovery zones.";

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Pro Athletic Gym Facilities Gallery",
  description:
    "Photo gallery showcasing workout zones, equipment, locker rooms, and athletic performance facilities at Pro Athletic Zirakpur.",
  url: `${SITE_URL}/gallery`,
};

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "pro athletic gym photos",
    "gym interior zirakpur",
    "workout equipment zirakpur",
    "fitness center images Punjab",
  ],
  alternates: {
    canonical: `${SITE_URL}/gallery`,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: `${SITE_URL}/gallery`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Pro Athletic Gym Gallery",
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

export default function GalleryPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Gallery", url: `${SITE_URL}/gallery` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <LandingPage initialSection="gallery" />
    </>
  );
}
