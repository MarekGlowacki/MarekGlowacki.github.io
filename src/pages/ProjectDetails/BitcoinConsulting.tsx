
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
              <h1 className="text-5xl font-display text-estate-800 mb-6">CRM System zarządzania szkołą</h1>
              <p className="text-estate-600 mb-6">
                Kompleksowy system zarządzania planami zajęć uczniów z różnych szkół. 
                Umożliwia łatwe dodawanie szkół, uczniów oraz tworzenie i zarządzanie 
                planami zajęć w intuicyjny sposób.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Główne funkcje:</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    <li>Zarządzanie szkołami i klasami</li>
                    <li>Dodawanie i edycja uczniów</li>
                    <li>Tworzenie planów zajęć</li>
                    <li>Zarządzanie nauczycielami</li>
                    <li>Harmonogramowanie zajęć</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Korzyści:</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    <li>Efektywne zarządzanie czasem</li>
                    <li>Automatyzacja procesów</li>
                    <li>Łatwy dostęp do informacji</li>
                    <li>Redukcja błędów</li>
                    <li>Oszczędność czasu i zasobów</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://candid-lamington-83dcb0.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#49be25] hover:bg-[#3da51e]">
                    Zobacz demo
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="outline">
                    Zamów podobny system
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="space-y-8">
              <img 
                src="/images/projekt-btc.jpg"
                alt="School CRM System"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/images/creating-apps.jpg"
                  alt="School Management"
                  className="rounded-lg shadow-lg w-full"
                />
                <img 
                  src="/images/ai-kobieta.jpg"
                  alt="Class Schedule"
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
