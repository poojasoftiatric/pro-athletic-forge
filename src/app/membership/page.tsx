import type { Metadata } from "next";
import { LandingPage } from "@/components/site/landing-page";
import { SITE_URL, membershipSchema, createBreadcrumbSchema } from "@/lib/seo-schemas";

const title = "Gym Membership & Pricing | Pro Athletic Gyms Zirakpur";
const description =
  "Transparent gym membership plans in Zirakpur starting at ₹5,000. Includes 18-hour access, certified coaches, sauna & steam bath. Claim your free trial session!";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "gym membership zirakpur",
    "gym fees zirakpur",
    "pro athletic pricing",
    "affordable luxury gym zirakpur",
    "gym subscription VIP road",
  ],
  alternates: {
    canonical: `${SITE_URL}/membership`,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: `${SITE_URL}/membership`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Pro Athletic Membership Plans and Pricing",
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

export default function MembershipPage() {
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Membership", url: `${SITE_URL}/membership` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(membershipSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <LandingPage initialSection="membership" />
    </>
  );
}
