
import { Suspense, lazy, useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Lazy load components that are not immediately visible
const PropertyGrid = lazy(() => import("@/components/PropertyGrid"));
const OurVision = lazy(() => import("@/components/OurVision"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Footer = lazy(() => import("@/components/footer"));

const Index = () => {
  const { language } = useLanguage();
  
  // Obsługa przewijania do sekcji newslettera po załadowaniu strony
  useEffect(() => {
    if (window.location.hash === '#newsletter') {
      // Opóźnij przewijanie, aby dać czas na załadowanie komponentów lazy
      setTimeout(() => {
        const newsletterSection = document.getElementById('newsletter');
        if (newsletterSection) {
          newsletterSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Ładowanie...</div>}>
        <section className="py-32" id="projekty">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-5xl font-display text-estate-800 mb-16">Projekty</h2>
            <PropertyGrid />
          </div>
        </section>
        <OurVision />
        <Testimonials />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
