
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const BitcoinConsulting = () => {
  const { language } = useLanguage();
  
  const content = {
    pl: {
      title: "Bitcoin Expert",
      description: "Profesjonalne doradztwo w zakresie Bitcoina i technologii blockchain. Pomagam w bezpiecznym przechowywaniu środków, implementacji rozwiązań płatniczych i edukacji zespołów w zakresie kryptowalut.",
      services: {
        title: "Oferowane usługi:",
        items: [
          "Konsultacje dot. Bitcoina",
          "Bezpieczne przechowywanie",
          "Implementacja płatności BTC",
          "Szkolenia dla zespołów",
          "Analiza techniczna"
        ]
      },
      knowledge: {
        title: "Zakres wiedzy:",
        items: [
          "Protokół Bitcoin",
          "Lightning Network",
          "Bezpieczeństwo kluczy",
          "Hardware wallety",
          "DCA strategia"
        ]
      },
      cta: "Zamów konsultację"
    },
    en: {
      title: "Bitcoin Expert",
      description: "Professional advice on Bitcoin and blockchain technology. I help with secure storage, implementation of payment solutions, and education of teams in the field of cryptocurrencies.",
      services: {
        title: "Services offered:",
        items: [
          "Bitcoin consultations",
          "Secure storage",
          "BTC payment implementation",
          "Team training",
          "Technical analysis"
        ]
      },
      knowledge: {
        title: "Knowledge areas:",
        items: [
          "Bitcoin Protocol",
          "Lightning Network",
          "Key security",
          "Hardware wallets",
          "DCA strategy"
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
                  <h3 className="text-xl font-display text-estate-800 mb-2">{c.knowledge.title}</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    {c.knowledge.items.map((item, index) => (
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
                src="/images/zwrocic-Bitcoina.jpg"
                alt="Bitcoin Expert"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/images/projekt-btc.jpg"
                  alt="Bitcoin Analytics"
                  className="rounded-lg shadow-lg w-full"
                />
                <img 
                  src="/images/creating-apps.jpg"
                  alt="Bitcoin Implementation"
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

export default BitcoinConsulting;
