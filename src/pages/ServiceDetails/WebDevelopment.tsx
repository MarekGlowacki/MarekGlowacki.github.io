
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Rocket, Globe, Database, Calendar, CreditCard, Shield, Clock } from "lucide-react";

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
      cta: "Zamów aplikację",
      marketingSection: {
        title: "Kompleksowe rozwiązania cyfrowe",
        subtitle: "Wszystko szyte na miarę na najwyższym światowym poziomie",
        services: [
          { name: "Strony internetowe", icon: <Globe className="w-6 h-6 text-[#49be25]" /> },
          { name: "Aplikacje webowe", icon: <Rocket className="w-6 h-6 text-[#49be25]" /> },
          { name: "Portale i platformy", icon: <Database className="w-6 h-6 text-[#49be25]" /> },
          { name: "Systemy CRM", icon: <Database className="w-6 h-6 text-[#49be25]" /> },
          { name: "Komunikatory", icon: <Database className="w-6 h-6 text-[#49be25]" /> },
          { name: "Systemy rezerwacji", icon: <Calendar className="w-6 h-6 text-[#49be25]" /> },
          { name: "Zintegrowane płatności", icon: <CreditCard className="w-6 h-6 text-[#49be25]" /> }
        ],
        fastDelivery: {
          title: "Twoja strona w 1 dzień!",
          subtitle: "Sprawdź mnie!"
        }
      },
      advantages: [
        {
          title: "Najnowocześniejsze technologie",
          description: "Wykorzystuję najnowsze frameworki i biblioteki dla najlepszej wydajności."
        },
        {
          title: "Błyskawiczny czas realizacji",
          description: "Dzięki sprawnym procesom pracy, dostarczam projekty nawet o 70% szybciej niż konkurencja."
        },
        {
          title: "Bezpieczeństwo i niezawodność",
          description: "Implementuję zaawansowane protokoły zabezpieczeń chroniące Twoje dane i aplikacje przed zagrożeniami."
        },
        {
          title: "Kompleksowa optymalizacja",
          description: "Każda aplikacja jest zoptymalizowana pod kątem wydajności, SEO i doświadczeń użytkownika."
        }
      ]
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
      cta: "Order an application",
      marketingSection: {
        title: "Comprehensive Digital Solutions",
        subtitle: "Everything custom-tailored at the highest global standards",
        services: [
          { name: "Websites", icon: <Globe className="w-6 h-6 text-[#49be25]" /> },
          { name: "Web applications", icon: <Rocket className="w-6 h-6 text-[#49be25]" /> },
          { name: "Portals and platforms", icon: <Database className="w-6 h-6 text-[#49be25]" /> },
          { name: "CRM systems", icon: <Database className="w-6 h-6 text-[#49be25]" /> },
          { name: "Messengers", icon: <Database className="w-6 h-6 text-[#49be25]" /> },
          { name: "Reservation systems", icon: <Calendar className="w-6 h-6 text-[#49be25]" /> },
          { name: "Integrated payments", icon: <CreditCard className="w-6 h-6 text-[#49be25]" /> }
        ],
        fastDelivery: {
          title: "Your website in 1 day!",
          subtitle: "Try me!"
        }
      },
      advantages: [
        {
          title: "Cutting-edge technologies",
          description: "I use the latest frameworks and libraries for the best performance."
        },
        {
          title: "Lightning-fast delivery",
          description: "Thanks to efficient work processes, I deliver projects up to 70% faster than competitors."
        },
        {
          title: "Security and reliability",
          description: "I implement advanced security protocols protecting your data and applications from threats."
        },
        {
          title: "Comprehensive optimization",
          description: "Every application is optimized for performance, SEO, and user experience."
        }
      ]
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

          {/* Nowa sekcja marketingowa */}
          <div className="mt-24 bg-gradient-to-r from-[#f4f9ff] to-[#f9fff4] rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display text-estate-800 mb-4">{c.marketingSection.title}</h2>
              <p className="text-xl text-estate-600 max-w-3xl mx-auto">{c.marketingSection.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
              {c.marketingSection.services.map((service, index) => (
                <Card key={index} className="border-2 border-[#e8f4ff] hover:border-[#49be25] transition-colors duration-300 bg-white hover:shadow-md">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-[#f0faf0] rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="font-display text-estate-800">{service.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-[#49be25] text-white rounded-xl p-8 text-center animate-pulse">
              <h2 className="text-3xl font-display mb-2">{c.marketingSection.fastDelivery.title}</h2>
              <p className="text-xl font-medium">{c.marketingSection.fastDelivery.subtitle}</p>
            </div>

            <div className="mt-12 flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-[#49be25] text-white hover:bg-[#3da51e] text-lg px-8 py-6 h-auto">
                  {c.cta}
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Lista zalet z ikonami */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.advantages.map((advantage, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="mt-1 bg-[#f0faf0] p-2 rounded-full">
                  <Check className="w-5 h-5 text-[#49be25]" />
                </div>
                <div>
                  <h3 className="text-lg font-display text-estate-800 mb-1">
                    {advantage.title}
                  </h3>
                  <p className="text-estate-600">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopment;
