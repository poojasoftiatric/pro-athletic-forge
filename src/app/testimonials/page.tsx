import type { Metadata } from "next";
import { LandingPage } from "@/components/site/landing-page";
import { SITE_URL, gymSchema, createBreadcrumbSchema } from "@/lib/seo-schemas";

const title = "Member Reviews & Success Stories | Pro Athletic Zirakpur";
const description =
  "Read real member reviews and body transformation stories from Pro Athletic Gym in Zirakpur. Rated 5/5 stars on Google by 80+ happy fitness athletes.";

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "@id": `${SITE_URL}/#gym`,
  name: "Pro Athletic",
  aggregateRating: gymSchema.aggregateRating,
};

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "pro athletic reviews",
    "gym reviews zirakpur",
    "best gym in zirakpur reviews",
    "gym member transformations punjab",
  ],
  alternates: {
    canonical: `${SITE_URL}/testimonials`,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: `${SITE_URL}/testimonials`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Pro Athletic Member Reviews and Testimonials",
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

export default function TestimonialsPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Testimonials", url: `${SITE_URL}/testimonials` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <LandingPage initialSection="testimonials" />
    </>
  );
}
