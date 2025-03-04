
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Check, 
  Rocket, 
  Globe, 
  Database, 
  Calendar, 
  CreditCard, 
  Shield, 
  Clock, 
  Code, 
  Zap, 
  DollarSign, 
  Hammer, 
  Languages,
  ExternalLink
} from "lucide-react";

const WebDevelopment = () => {
  const { language } = useLanguage();
  
  const content = {
    pl: {
      title: "Tworzenie aplikacji internetowych",
      description: "Specjalizuję się w tworzeniu nowoczesnych aplikacji internetowych dostosowanych do potrzeb Twojego biznesu. Wykorzystuję najnowsze technologie i najlepsze praktyki programistyczne, aby dostarczyć rozwiązania najwyższej jakości.",
      cta: "Zamów aplikację",
      comparePerformance: "Zobacz porównanie wydajności",
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
      },
      features: {
        title: "Dlaczego warto wybrać moje usługi?",
        items: [
          {
            title: "Rozwiązania szyte na miarę",
            description: "Mam 100% kontroli nad kodem, gdyż tworzę rozwiązania w całości od początku. Jestem w stanie dowolnie rozszerzać aplikację według uznania, a nie \"Jeśli wtyczka pozwoli\".",
            icon: <Code className="w-8 h-8 text-[#49be25]" />
          },
          {
            title: "Najszybsze technologie świata",
            description: "Masz pewność, że moje rozwiązania będą bezkonkurencyjne pod względem wydajności, bo korzystam z najnowocześniejszych technologii. Sprawdź mnie!",
            icon: <Zap className="w-8 h-8 text-[#49be25]" />
          },
          {
            title: "Pierwszy szkic za darmo w ciągu 24h!",
            description: "Od przyjęcia zamówienia deklaruję zrobienie pierwszego szkicu w 24h i potem decydujesz czy to jest kierunek w jakim chcesz iść, czy zmieniamy koncepcję.",
            icon: <Clock className="w-8 h-8 text-[#49be25]" />
          }
        ]
      },
      sellingPoints: [
        {
          title: "Robię dobrze",
          description: "Dzięki temu, że jestem niezależnym programistą z ogromną łatwością jestem w stanie aktualizować używane technologie do najnowszych trendów na świecie.",
          icon: <Hammer className="w-12 h-12 text-[#49be25]" />,
          link: "/services/performance-comparison",
          linkText: "Zobacz porównanie wydajności"
        },
        {
          title: "Robię szybko",
          description: "Otrzymujesz pierwszy szkic już następnego dnia od przyjęcia zamówienia! A całość projektu skończę w ciągu kilku tygodni, nie miesięcy.",
          icon: <Clock className="w-12 h-12 text-[#49be25]" />
        },
        {
          title: "Robię tanio",
          description: "Wszystkie rozwiązania wykonuję osobiście, nie mam konieczności utrzymywania zespołu programistów, więc mogę zaproponować najbardziej konkurencyjne stawki na rynku. Najprostsze wizytówki jestem w stanie zrobić już od 997 zł netto!",
          icon: <DollarSign className="w-12 h-12 text-[#49be25]" />
        },
        {
          title: "Strona w każdym języku świata!",
          description: "Zapewniam możliwość przetłumaczenia strony na dowolną liczbę wszystkich języków na świecie.",
          icon: <Languages className="w-12 h-12 text-[#49be25]" />
        }
      ],
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
      cta: "Order an application",
      comparePerformance: "See performance comparison",
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
      },
      features: {
        title: "Why choose my services?",
        items: [
          {
            title: "Tailor-made solutions",
            description: "I have 100% control over the code, as I create solutions entirely from scratch. I can extend the application as needed, not limited by \"if a plugin allows it\".",
            icon: <Code className="w-8 h-8 text-[#49be25]" />
          },
          {
            title: "Fastest technologies in the world",
            description: "You can be sure that my solutions will be unrivaled in terms of performance because I use the most modern technologies. Try me!",
            icon: <Zap className="w-8 h-8 text-[#49be25]" />
          },
          {
            title: "First draft free within 24 hours!",
            description: "From the moment I accept your order, I commit to creating the first draft within 24 hours, and then you decide if it's the direction you want to go, or if we change the concept.",
            icon: <Clock className="w-8 h-8 text-[#49be25]" />
          }
        ]
      },
      sellingPoints: [
        {
          title: "I do it well",
          description: "As an independent programmer, I can easily update the technologies I use to match the latest global trends.",
          icon: <Hammer className="w-12 h-12 text-[#49be25]" />,
          link: "/services/performance-comparison",
          linkText: "See performance comparison"
        },
        {
          title: "I do it quickly",
          description: "You receive the first draft the very next day after placing an order! And I'll complete the entire project within a few weeks, not months.",
          icon: <Clock className="w-12 h-12 text-[#49be25]" />
        },
        {
          title: "I do it affordably",
          description: "I execute all solutions personally, I don't need to maintain a team of programmers, so I can offer the most competitive rates on the market. I can create the simplest business cards starting from just 997 PLN net!",
          icon: <DollarSign className="w-12 h-12 text-[#49be25]" />
        },
        {
          title: "Website in any language in the world!",
          description: "I provide the ability to translate the site into any number of languages in the world.",
          icon: <Languages className="w-12 h-12 text-[#49be25]" />
        }
      ],
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
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-[#49be25] text-white hover:bg-[#3da51e]">
                    {c.cta}
                  </Button>
                </Link>
                <Link to="/services/performance-comparison">
                  <Button variant="outline" className="border-[#49be25] text-[#49be25] hover:bg-[#f0faf0]">
                    {c.comparePerformance} <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
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

          {/* Sekcja głównych funkcji */}
          <div className="mt-24 bg-gradient-to-br from-[#f7fbff] to-[#f9fff4] rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display text-estate-800 mb-4">{c.features.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {c.features.items.map((feature, idx) => (
                <Card key={idx} className="border-2 border-[#e8f4ff] hover:border-[#49be25] transition-all duration-300 bg-white hover:shadow-lg hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6 p-4 bg-[#f0faf0] rounded-full">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-display text-estate-800 mb-3">{feature.title}</h3>
                      <p className="text-estate-600">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Nowa sekcja marketingowa */}
          <div className="mt-16 bg-gradient-to-r from-[#f4f9ff] to-[#f9fff4] rounded-2xl p-8 shadow-lg">
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

            <div className="mt-12 flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-[#49be25] text-white hover:bg-[#3da51e] text-lg px-8 py-6 h-auto">
                  {c.cta}
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Główne zalety - Robię dobrze, szybko, tanio */}
          <div className="mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {c.sellingPoints.map((point, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#49be25] hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-[#f0faf0] rounded-lg">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-display text-estate-800 mb-3">{point.title}</h3>
                      <p className="text-estate-600 mb-3">{point.description}</p>
                      {point.link && (
                        <Link to={point.link} className="inline-flex items-center text-[#49be25] hover:text-[#3da51e] font-medium">
                          {point.linkText} <ExternalLink className="ml-1 w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
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
