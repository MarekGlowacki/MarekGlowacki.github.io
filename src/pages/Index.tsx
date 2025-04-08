
import { Suspense, lazy, useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Lazy load components that are not immediately visible
const PropertyGrid = lazy(() => import("@/components/PropertyGrid"));
const OurVision = lazy(() => import("@/components/OurVision"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Footer = lazy(() => import("@/components/footer"));

const Index = () => {
  const { language } = useLanguage();
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const portfolioProjects = [
    { 
      name: "Karolina Siemion", 
      url: "https://delicate-empanada-d272d8.netlify.app",
      type: language === "pl" ? "Strona personalna" : "Personal website"
    },
    { 
      name: "Arkadiusz Sikorski", 
      url: "https://ephemeral-brigadeiros-7225df.netlify.app",
      type: language === "pl" ? "Portfolio" : "Portfolio"
    },
    { 
      name: "Jacek Pęczak", 
      url: "https://animated-style-fusion.vercel.app",
      type: language === "pl" ? "Strona profesjonalna" : "Professional site"
    },
    { 
      name: "Daniel Sciborek", 
      url: "https://peaceful-gingersnap-e1d5f8.netlify.app",
      type: language === "pl" ? "Strona personalna" : "Personal website"
    }
  ];
  
  // Show more or less projects
  const visibleProjects = showAllProjects ? portfolioProjects : portfolioProjects.slice(0, 3);
  
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
            
            <div className="mt-24">
              <h3 className="text-3xl font-display text-estate-800 mb-12">
                {language === "pl" ? "Przykłady moich produkcji:" : "Examples of my work:"}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleProjects.map((project, index) => (
                  <a 
                    key={index}
                    href={project.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="block h-full group"
                  >
                    <Card className="h-full border-2 border-[#e8f4ff] hover:border-[#49be25] transition-all duration-300 bg-white hover:shadow-xl">
                      <CardContent className="p-0">
                        <div className="aspect-video w-full overflow-hidden">
                          <img 
                            src={`https://image.thum.io/get/width/600/crop/800/${project.url}`} 
                            alt={project.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-display text-lg text-estate-800 mb-1 group-hover:text-[#49be25] transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-sm text-estate-600">{project.type}</p>
                          <div className="mt-2 flex items-center text-[#49be25] text-sm font-medium">
                            <span>{language === "pl" ? "Odwiedź stronę" : "Visit website"}</span>
                            <ExternalLink className="ml-1 w-3 h-3" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
              
              {portfolioProjects.length > 3 && (
                <div className="mt-8">
                  <button
                    onClick={() => setShowAllProjects(!showAllProjects)}
                    className="text-[#49be25] hover:text-[#3da51e] font-medium"
                  >
                    {showAllProjects 
                      ? (language === "pl" ? "Pokaż mniej" : "Show less") 
                      : (language === "pl" ? "Pokaż więcej" : "Show more")
                    }
                  </button>
                </div>
              )}
            </div>
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
