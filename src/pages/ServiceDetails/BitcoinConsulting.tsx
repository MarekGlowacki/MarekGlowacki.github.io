
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BitcoinConsulting = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-5xl font-display text-estate-800 mb-6">Bitcoin Expert</h1>
              <p className="text-estate-600 mb-6">
                Profesjonalne doradztwo w zakresie Bitcoina i technologii blockchain. 
                Pomagam w bezpiecznym przechowywaniu środków, implementacji rozwiązań 
                płatniczych i edukacji zespołów w zakresie kryptowalut.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Oferowane usługi:</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    <li>Konsultacje dot. Bitcoina</li>
                    <li>Bezpieczne przechowywanie</li>
                    <li>Implementacja płatności BTC</li>
                    <li>Szkolenia dla zespołów</li>
                    <li>Analiza techniczna</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Zakres wiedzy:</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    <li>Protokół Bitcoin</li>
                    <li>Lightning Network</li>
                    <li>Bezpieczeństwo kluczy</li>
                    <li>Hardware wallety</li>
                    <li>DCA strategia</li>
                  </ul>
                </div>
              </div>

              <Link to="/contact">
                <Button className="bg-[#49be25] hover:bg-[#3da51e]">
                  Zamów konsultację
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
