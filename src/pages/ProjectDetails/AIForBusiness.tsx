
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const AIForBusiness = () => {
  const { t, language } = useLanguage();
  
  const content = {
    pl: {
      title: "Firmowa Sztuczna Inteligencja",
      description: "Kompleksowe rozwiązanie AI dostosowane do potrzeb biznesowych, automatyzujące procesy i zwiększające efektywność pracy. System został zaimplementowany w firmie z branży logistycznej, przynosząc znaczące oszczędności czasowe i finansowe.",
      features: {
        title: "Kluczowe możliwości:",
        items: [
          "Automatyczna analiza dokumentów",
          "Predykcja trendów sprzedażowych",
          "Optymalizacja procesów logistycznych",
          "Chatbot dla obsługi klienta",
          "System rekomendacji produktów"
        ]
      },
      technologies: {
        title: "Zastosowane technologie:",
        items: [
          "OpenAI GPT-4",
          "Python & TensorFlow",
          "React & TypeScript",
          "FastAPI",
          "PostgreSQL & Redis"
        ]
      },
      cta: "Zamów podobny system"
    },
    en: {
      title: "Corporate Artificial Intelligence",
      description: "A comprehensive AI solution tailored to business needs, automating processes and increasing work efficiency. The system was implemented in a logistics company, bringing significant time and financial savings.",
      features: {
        title: "Key features:",
        items: [
          "Automatic document analysis",
          "Sales trend prediction",
          "Logistics process optimization",
          "Customer service chatbot",
          "Product recommendation system"
        ]
      },
      technologies: {
        title: "Technologies used:",
        items: [
          "OpenAI GPT-4",
          "Python & TensorFlow",
          "React & TypeScript",
          "FastAPI",
          "PostgreSQL & Redis"
        ]
      },
      cta: "Order a similar system"
    }
  };

  // Wybierz odpowiednią wersję językową
  const c = language === "pl" ? content.pl : content.en;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-5xl font-display text-estate-800 mb-6">{c.title}</h1>
              <p className="text-estate-600 mb-6">
                {c.description}
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">{c.features.title}</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {c.features.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">{c.technologies.title}</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {c.technologies.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link to="/contact">
                <Button className="bg-[#49be25] text-white hover:bg-[#3da51e]">
                  {c.cta}
                </Button>
              </Link>
            </div>
            
            <div className="space-y-8">
              <img 
                src="/images/projekt-ai.jpg"
                alt="AI System Dashboard"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/images/ai-kobieta.jpg"
                  alt="AI Analytics"
                  className="rounded-lg shadow-lg w-full"
                />
                <img 
                  src="/images/ai-maz.jpg"
                  alt="Machine Learning Models"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIForBusiness;
