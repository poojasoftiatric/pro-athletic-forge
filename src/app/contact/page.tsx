import type { Metadata } from "next";
import { LandingPage } from "@/components/site/landing-page";
import { SITE_URL, contactSchema, createBreadcrumbSchema } from "@/lib/seo-schemas";

const title = "Contact & Book Free Trial Pass | Pro Athletic Gym Zirakpur";
const description =
  "Contact Pro Athletic Gym at Hollywood Plaza, VIP Road, Zirakpur. Call +91-98200-44120 or book your 100% free workout session online today!";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "contact pro athletic",
    "gym free trial zirakpur",
    "gym address VIP road zirakpur",
    "gym phone number zirakpur",
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: `${SITE_URL}/contact`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact Pro Athletic Gym in Zirakpur",
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

export default function ContactPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Contact", url: `${SITE_URL}/contact` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <LandingPage initialSection="contact" />
    </>
  );
}
