
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const WebDevelopment = () => {
  const { language } = useLanguage();
  
  const content = {
    pl: {
      title: "Tworzenie aplikacji internetowych",
      description: "Specjalizuję się w tworzeniu nowoczesnych aplikacji internetowych dostosowanych do potrzeb Twojego biznesu. Wykorzystuję najnowsze technologie i najlepsze praktyki programistyczne, aby dostarczyć rozwiązania najwyższej jakości.",
      services: {
        title: "Oferowane usługi:",
        items: [
          "Strony i aplikacje internetowe",
          "Systemy zarządzania treścią (CMS)",
          "Aplikacje e-commerce",
          "Integracje z API",
          "Progressive Web Apps (PWA)"
        ]
      },
      technologies: {
        title: "Technologie:",
        items: [
          "React i TypeScript",
          "Node.js i Express",
          "Next.js",
          "Tailwind CSS",
          "MongoDB i PostgreSQL"
        ]
      },
      cta: "Zamów aplikację"
    },
    en: {
      title: "Web Application Development",
      description: "I specialize in creating modern web applications tailored to your business needs. I use the latest technologies and best programming practices to deliver solutions of the highest quality.",
      services: {
        title: "Services offered:",
        items: [
          "Websites and web applications",
          "Content Management Systems (CMS)",
          "E-commerce applications",
          "API integrations",
          "Progressive Web Apps (PWA)"
        ]
      },
      technologies: {
        title: "Technologies:",
        items: [
          "React and TypeScript",
          "Node.js and Express",
          "Next.js",
          "Tailwind CSS",
          "MongoDB and PostgreSQL"
        ]
      },
      cta: "Order an application"
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
                src="/images/creating-apps.jpg"
                alt="Tworzenie aplikacji"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/images/projekt-dcm.jpg"
                  alt="Example Project 1"
                  className="rounded-lg shadow-lg w-full"
                />
                <img 
                  src="/images/projekt-btc.jpg"
                  alt="Example Project 2"
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

export default WebDevelopment;
