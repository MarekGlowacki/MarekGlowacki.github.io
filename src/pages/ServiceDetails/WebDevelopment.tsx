
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Rocket, Globe, Database, Calendar, CreditCard, Shield, Clock, Zap, DollarSign, Languages, Gem } from "lucide-react";

const WebDevelopment = () => {
  const { language } = useLanguage();
  
  const content = {
    pl: {
      title: "Tworzenie aplikacji internetowych",
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
      },
      sellingPoints: {
        headline1: "Zabłyśnij w internecie i poczuj moc najbardziej zaawansowanych komputerów świata",
        headline2: "Robię szybko, robię tanio, robię dobrze",
        headline3: "Zamów stronę, z której duma będzie Cię rozpierać",
        customSolutions: {
          title: "Rozwiązania szyte na miarę",
          description: "Mam 100% kontroli nad kodem, gdyż robię rozwiązania w całości od początku, dlatego jestem w stanie dowolnie rozszerzać aplikację, według mojego uznania, a nie \"Jeśli wtyczka pozwoli\"."
        },
        fastTech: {
          title: "Najszybsze technologie świata",
          description: "Masz pewność, że moje rozwiązania będą bezkonkurencyjne pod względem wydajności, bo korzystam z najnowocześniejszych technologii. Sprawdź mnie!"
        },
        freeDraft: {
          title: "Pierwszy szkic za darmo w ciągu 24h!",
          description: "Od przyjęcia zamówienia deklaruję zrobienia pierwszego szkicu w 24h i potem decydujesz czy to jest kierunek w jakim chcesz iść, czy zmieniamy koncepcję."
        },
        goodQuality: {
          title: "Robię dobrze",
          description: "Dzięki temu, że jestem niezależnym programistą z ogromną łatwością jestem w stanie aktualizować używane technologie do najnowszych trendów na świecie."
        },
        fastDelivery: {
          title: "Robię szybko",
          description: "Otrzymujesz pierwszy szkic już następnego dnia od przyjęcia zamówienia! A Całość projektu skończę w ciągu kilku tygodni, nie miesięcy."
        },
        affordable: {
          title: "Robię tanio",
          description: "Wszystkie rozwiązania wykonuję osobiście, nie mam konieczności utrzymywania zespołu programistów, więc mogę zaproponować najbardziej konkurencyjne stawki na rynku. Najprostrze wizytówki jestem w stanie zrobić już od 1 970 zł netto!"
        },
        multiLanguage: {
          title: "Strona w każdym języku świata!",
          description: "Zapewniam możliwość przetłumaczenia strony na dowoloną liczbę wszystkich języków na świecie."
        }
      }
    },
    en: {
      title: "Web Application Development",
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
      },
      sellingPoints: {
        headline1: "Shine online and feel the power of the world's most advanced computers",
        headline2: "I work fast, I work affordably, I work well",
        headline3: "Order a website that will make you proud",
        customSolutions: {
          title: "Custom-tailored solutions",
          description: "I have 100% control over the code as I create solutions entirely from scratch, so I can expand the application in any way according to my judgment, not based on \"If the plugin allows it\"."
        },
        fastTech: {
          title: "World's fastest technologies",
          description: "You can be sure that my solutions will be unrivaled in terms of performance because I use the most modern technologies. Try me!"
        },
        freeDraft: {
          title: "First draft free within 24 hours!",
          description: "From accepting the order, I declare to make the first draft within 24 hours, and then you decide if this is the direction you want to go, or if we change the concept."
        },
        goodQuality: {
          title: "I do it well",
          description: "Because I am an independent developer, I can easily update the technologies I use to the latest global trends."
        },
        fastDelivery: {
          title: "I do it fast",
          description: "You get the first draft the day after the order is placed! And I'll complete the entire project within a few weeks, not months."
        },
        affordable: {
          title: "I do it affordably",
          description: "I personally create all solutions, I don't need to maintain a team of programmers, so I can offer the most competitive rates on the market. I can make the simplest business card websites from just $240!"
        },
        multiLanguage: {
          title: "Website in any language in the world!",
          description: "I provide the ability to translate the website into any number of languages in the world."
        }
      }
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
              <h1 className="text-5xl font-display text-estate-800 mb-10">{c.title}</h1>
              
              {/* Headliners - atrakcyjne hasła */}
              <div className="space-y-6 mb-12">
                <p className="text-2xl font-display text-estate-800 text-pretty">
                  {c.sellingPoints.headline1}
                </p>
                <p className="text-xl font-semibold text-[#49be25]">
                  {c.sellingPoints.headline2}
                </p>
                <p className="text-lg text-estate-600 italic">
                  {c.sellingPoints.headline3}
                </p>
              </div>

              <Link to="/contact">
                <Button className="bg-[#49be25] text-white hover:bg-[#3da51e] text-lg px-8 py-6 h-auto mb-16">
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

          {/* Sekcja marketingowa */}
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
          </div>
          
          {/* Zalety z ikonami */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-[#f0faf0] p-3 rounded-full mr-4">
                  <Gem className="w-6 h-6 text-[#49be25]" />
                </div>
                <h3 className="text-xl font-display text-estate-800">
                  {c.sellingPoints.customSolutions.title}
                </h3>
              </div>
              <p className="text-estate-600">
                {c.sellingPoints.customSolutions.description}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-[#f0faf0] p-3 rounded-full mr-4">
                  <Zap className="w-6 h-6 text-[#49be25]" />
                </div>
                <h3 className="text-xl font-display text-estate-800">
                  {c.sellingPoints.fastTech.title}
                </h3>
              </div>
              <p className="text-estate-600">
                {c.sellingPoints.fastTech.description}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-[#f0faf0] p-3 rounded-full mr-4">
                  <Clock className="w-6 h-6 text-[#49be25]" />
                </div>
                <h3 className="text-xl font-display text-estate-800">
                  {c.sellingPoints.freeDraft.title}
                </h3>
              </div>
              <p className="text-estate-600">
                {c.sellingPoints.freeDraft.description}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-[#f0faf0] p-3 rounded-full mr-4">
                  <Check className="w-6 h-6 text-[#49be25]" />
                </div>
                <h3 className="text-xl font-display text-estate-800">
                  {c.sellingPoints.goodQuality.title}
                </h3>
              </div>
              <p className="text-estate-600">
                {c.sellingPoints.goodQuality.description}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-[#f0faf0] p-3 rounded-full mr-4">
                  <Rocket className="w-6 h-6 text-[#49be25]" />
                </div>
                <h3 className="text-xl font-display text-estate-800">
                  {c.sellingPoints.fastDelivery.title}
                </h3>
              </div>
              <p className="text-estate-600">
                {c.sellingPoints.fastDelivery.description}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-[#f0faf0] p-3 rounded-full mr-4">
                  <DollarSign className="w-6 h-6 text-[#49be25]" />
                </div>
                <h3 className="text-xl font-display text-estate-800">
                  {c.sellingPoints.affordable.title}
                </h3>
              </div>
              <p className="text-estate-600">
                {c.sellingPoints.affordable.description}
              </p>
            </div>
            
            <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-[#f0faf0] p-3 rounded-full mr-4">
                  <Languages className="w-6 h-6 text-[#49be25]" />
                </div>
                <h3 className="text-xl font-display text-estate-800">
                  {c.sellingPoints.multiLanguage.title}
                </h3>
              </div>
              <p className="text-estate-600">
                {c.sellingPoints.multiLanguage.description}
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-[#49be25] text-white hover:bg-[#3da51e] text-lg px-8 py-6 h-auto">
                {c.cta}
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopment;
