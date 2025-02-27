
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const AIBusiness = () => {
  const { language } = useLanguage();
  
  const content = {
    pl: {
      title: "Sztuczna Inteligencja dla Firm",
      description: "Wykorzystaj potencjał sztucznej inteligencji w swojej firmie. Oferuję kompleksowe rozwiązania AI, które zautomatyzują procesy, zwiększą efektywność i pomogą w podejmowaniu lepszych decyzji biznesowych.",
      services: {
        title: "Oferowane usługi:",
        items: [
          "Automatyzacja procesów biznesowych",
          "Analiza danych i predykcje",
          "Chatboty i asystenci AI",
          "Systemy rekomendacji",
          "Integracja AI z istniejącymi systemami"
        ]
      },
      technologies: {
        title: "Technologie:",
        items: [
          "OpenAI GPT-4",
          "Machine Learning",
          "Python & TensorFlow",
          "Natural Language Processing",
          "Computer Vision"
        ]
      },
      cta: "Zamów konsultację"
    },
    en: {
      title: "Artificial Intelligence for Business",
      description: "Harness the potential of artificial intelligence in your company. I offer comprehensive AI solutions that automate processes, increase efficiency, and help make better business decisions.",
      services: {
        title: "Services offered:",
        items: [
          "Business process automation",
          "Data analysis and predictions",
          "Chatbots and AI assistants",
          "Recommendation systems",
          "AI integration with existing systems"
        ]
      },
      technologies: {
        title: "Technologies:",
        items: [
          "OpenAI GPT-4",
          "Machine Learning",
          "Python & TensorFlow",
          "Natural Language Processing",
          "Computer Vision"
        ]
      },
      cta: "Order a consultation"
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
                  <h3 className="text-xl font-display text-estate-800 mb-2">{c.services.title}</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    {c.services.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">{c.technologies.title}</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
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
                src="/images/ai-kobieta.jpg"
                alt="AI dla firm"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/images/ai-maz.jpg"
                  alt="AI Analytics"
                  className="rounded-lg shadow-lg w-full"
                />
                <img 
                  src="/images/projekt-ai.jpg"
                  alt="AI Dashboard"
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

export default AIBusiness;
