import { useEffect, useRef } from "react";
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
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { Faq } from "@/components/site/faq";
import { initPopStateListener, scrollToSection } from "@/lib/navigation";

export function LandingPage({ initialSection }: { initialSection?: string }) {
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    const cleanup = initPopStateListener();

    // Only scroll once on initial load if directly visiting a sub-path URL like /programs
    if (!hasScrolledRef.current && initialSection && initialSection !== "home") {
      hasScrolledRef.current = true;
      const timer = setTimeout(() => {
        scrollToSection(initialSection, true);
      }, 150);
      return () => {
        clearTimeout(timer);
        cleanup();
      };
    }

    return cleanup;
  }, [initialSection]);

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
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
