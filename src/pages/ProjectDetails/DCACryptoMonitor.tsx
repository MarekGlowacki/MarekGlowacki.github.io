
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const DCACryptoMonitor = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-5xl font-display text-estate-800 mb-6">DCA Crypto Monitor</h1>
              <p className="text-estate-600 mb-6">
                Innowacyjna aplikacja do monitorowania i zarządzania strategią DCA (Dollar Cost Averaging) 
                w inwestycjach kryptowalutowych. Projekt został stworzony z myślą o inwestorach, 
                którzy chcą systematycznie budować swój portfel kryptowalutowy.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Główne funkcje:</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    <li>Automatyczne śledzenie transakcji DCA</li>
                    <li>Analiza średniej ceny zakupu</li>
                    <li>Powiadomienia o planowanych zakupach</li>
                    <li>Integracja z popularnymi giełdami crypto</li>
                    <li>Raporty i statystyki inwestycji</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Technologie:</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    <li>React & TypeScript</li>
                    <li>Node.js & Express</li>
                    <li>MongoDB</li>
                    <li>WebSocket dla danych real-time</li>
                    <li>Integracje API giełd kryptowalutowych</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="bg-[#49be25] hover:bg-[#3da51e]">
                  Zobacz demo
                </Button>
                <Button variant="outline">
                  Dokumentacja
                </Button>
              </div>
            </div>
            
            <div className="space-y-8">
              <img 
                src="/images/projekt-dcm.jpg"
                alt="DCA Crypto Monitor Dashboard"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&q=80&w=600"
                  alt="Crypto Analytics"
                  className="rounded-lg shadow-lg w-full"
                />
                <img 
                  src="https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&q=80&w=600"
                  alt="Portfolio Tracking"
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

export default DCACryptoMonitor;
