
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const BitcoinConsulting = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-5xl font-display text-estate-800 mb-6">Doradztwo Bitcoin</h1>
              <p className="text-estate-600 mb-6">
                Profesjonalne doradztwo w zakresie inwestycji w Bitcoin, bezpieczeństwa 
                przechowywania środków oraz implementacji rozwiązań płatniczych opartych 
                na Lightning Network dla firm i klientów indywidualnych.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Zakres usług:</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    <li>Konsultacje inwestycyjne</li>
                    <li>Audyty bezpieczeństwa portfeli</li>
                    <li>Implementacja Lightning Network</li>
                    <li>Szkolenia dla zespołów</li>
                    <li>Wsparcie techniczne 24/7</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Obszary specjalizacji:</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    <li>Multisig & Hardware Wallets</li>
                    <li>Lightning Network</li>
                    <li>Bitcoin Core</li>
                    <li>Sovereign Computing</li>
                    <li>Privacy & Security</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="bg-[#49be25] hover:bg-[#3da51e]">
                  Umów konsultację
                </Button>
                <Button variant="outline">
                  FAQ
                </Button>
              </div>
            </div>
            
            <div className="space-y-8">
              <img 
                src="/images/projekt-btc.jpg"
                alt="Bitcoin Consulting"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&q=80&w=600"
                  alt="Bitcoin Security"
                  className="rounded-lg shadow-lg w-full"
                />
                <img 
                  src="https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&q=80&w=600"
                  alt="Lightning Network"
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
