import type { Metadata } from "next";
import { LandingPage } from "@/components/site/landing-page";
import { SITE_URL, trainersSchema, createBreadcrumbSchema } from "@/lib/seo-schemas";

const title = "Certified Personal Trainers in Zirakpur | Pro Athletic";
const description =
  "Meet 7+ certified personal coaches at Pro Athletic Zirakpur with 5-11 years of experience in strength training, bodybuilding, fat loss, yoga, and conditioning.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "personal trainer zirakpur",
    "certified fitness coach zirakpur",
    "gym trainers punjab",
    "body transformation trainer zirakpur",
  ],
  alternates: {
    canonical: `${SITE_URL}/trainers`,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: `${SITE_URL}/trainers`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Pro Athletic Certified Fitness Trainers",
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

export default function TrainersPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Trainers", url: `${SITE_URL}/trainers` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trainersSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <LandingPage initialSection="trainers" />
    </>
  );
}
