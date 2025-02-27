
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const CRM = () => {
  const { t, language } = useLanguage();
  
  const content = {
    pl: {
      title: "CRM System zarządzania szkołą",
      description: "Kompleksowy system zarządzania planami zajęć uczniów z różnych szkół. Umożliwia łatwe dodawanie szkół, uczniów oraz tworzenie i zarządzanie planami zajęć w intuicyjny sposób.",
      features: {
        title: "Główne funkcje:",
        items: [
          "Zarządzanie szkołami i klasami",
          "Dodawanie i edycja uczniów",
          "Tworzenie planów zajęć",
          "Zarządzanie nauczycielami",
          "Harmonogramowanie zajęć"
        ]
      },
      benefits: {
        title: "Korzyści:",
        items: [
          "Efektywne zarządzanie czasem",
          "Automatyzacja procesów",
          "Łatwy dostęp do informacji",
          "Redukcja błędów",
          "Oszczędność czasu i zasobów"
        ]
      },
      demo: "Zobacz demo",
      cta: "Zamów podobny system"
    },
    en: {
      title: "School Management CRM System",
      description: "A comprehensive system for managing student schedules from different schools. It allows easy addition of schools, students, and creating and managing schedules in an intuitive way.",
      features: {
        title: "Main features:",
        items: [
          "School and class management",
          "Adding and editing students",
          "Creating schedules",
          "Teacher management",
          "Lesson scheduling"
        ]
      },
      benefits: {
        title: "Benefits:",
        items: [
          "Effective time management",
          "Process automation",
          "Easy access to information",
          "Error reduction",
          "Time and resource savings"
        ]
      },
      demo: "See demo",
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
                  <h3 className="text-xl font-display text-estate-800 mb-2">{c.benefits.title}</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {c.benefits.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://candid-lamington-83dcb0.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#49be25] text-white hover:bg-[#3da51e]">
                    {c.demo}
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="outline">
                    {c.cta}
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="space-y-8">
              <img 
                src="/images/real-calendar.jpg"
                alt="School CRM System"
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1581726690015-c9861fa5057f"
                  alt="School Management"
                  className="rounded-lg shadow-lg w-full object-cover h-[400px]"
                />
                <img 
                  src="https://images.unsplash.com/photo-1600431521340-491eca880813"
                  alt="Class Schedule"
                  className="rounded-lg shadow-lg w-full object-cover h-[400px]"
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

export default CRM;
