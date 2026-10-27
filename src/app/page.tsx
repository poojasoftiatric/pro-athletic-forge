import type { Metadata } from "next";
import { LandingPage } from "@/components/site/landing-page";
import { SITE_URL, gymSchema, faqSchema } from "@/lib/seo-schemas";

const title = "Pro Athletic | Best Gym in Zirakpur — VIP Road Fitness Center";
const description =
  "Join Pro Athletic, Punjab's premier gym in Zirakpur on VIP Road. 7+ certified trainers, 18-hr access, CrossFit, Strength Training & Yoga. Book your free trial!";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "gym in zirakpur",
    "best gym zirakpur",
    "fitness center zirakpur",
    "personal trainer zirakpur",
    "gym near VIP road",
    "strength training zirakpur",
    "crossfit zirakpur",
    "yoga zirakpur",
    "24 hour gym punjab",
    "pro athletic gym",
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: `${SITE_URL}/`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Pro Athletic — Premium Gym in Zirakpur, Punjab",
      },
    ],
    locale: "en_IN",
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gymSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LandingPage initialSection="home" />
    </>
  );
}
