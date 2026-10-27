import type { Metadata } from "next";
import { LandingPage } from "@/components/site/landing-page";
import { SITE_URL, programsSchema, createBreadcrumbSchema } from "@/lib/seo-schemas";

const title = "Training Programs & Classes | Pro Athletic Gym Zirakpur";
const description =
  "Explore 9 expert-coached fitness programs at Pro Athletic Zirakpur: Strength Training, CrossFit, Weight Loss, Bodybuilding, Yoga & HIIT. Start training today!";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "crossfit zirakpur",
    "strength training punjab",
    "bodybuilding gym zirakpur",
    "yoga classes zirakpur",
    "weight loss training zirakpur",
  ],
  alternates: {
    canonical: `${SITE_URL}/programs`,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: `${SITE_URL}/programs`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Pro Athletic Training Programs",
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

export default function ProgramsPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Programs", url: `${SITE_URL}/programs` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <LandingPage initialSection="programs" />
    </>
  );
}
