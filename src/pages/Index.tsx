
import { Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Navbar from "@/components/Navbar";

// Lazy load components that are not immediately visible
const PropertyGrid = lazy(() => import("@/components/PropertyGrid"));
const AboutUs = lazy(() => import("@/components/AboutUs"));
const OurVision = lazy(() => import("@/components/OurVision"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Ładowanie...</div>}>
        <section className="py-32" id="projekty">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-5xl font-display text-estate-800 mb-16">Projekty</h2>
            <PropertyGrid />
          </div>
        </section>

        <AboutUs />
        <OurVision />
        <Testimonials />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
