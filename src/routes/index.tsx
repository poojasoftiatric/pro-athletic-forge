import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { WhyUs } from "@/components/site/why-us";
import { Membership } from "@/components/site/membership";
import { Programs } from "@/components/site/programs";
import { Trainers } from "@/components/site/trainers";
import { BmiCalculator } from "@/components/site/bmi";
import { Transformations } from "@/components/site/transformations";
import { Testimonials } from "@/components/site/testimonials";
import { Gallery } from "@/components/site/gallery";
import { Facilities } from "@/components/site/facilities";
import { AppPromo } from "@/components/site/app-promo";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

const title = "Pro Athletic — Premium Gym & Performance Center";
const description =
  "Train with elite coaches, world-class equipment and 24/7 access at Pro Athletic. Memberships from ₹999/month. Book a free trial today.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: "Pro Athletic",
          description,
          telephone: "+91 98200 44120",
          email: "train@proathletic.fit",
          address: {
            "@type": "PostalAddress",
            streetAddress: "24 Turf Lane, Bandra West",
            addressLocality: "Mumbai",
            postalCode: "400050",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 00:00-23:59",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Programs />
        <Membership />
        <Trainers />
        <BmiCalculator />
        <Transformations />
        <Testimonials />
        <Gallery />
        <Facilities />
        <AppPromo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
