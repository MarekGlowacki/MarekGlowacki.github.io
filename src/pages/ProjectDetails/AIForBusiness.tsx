import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const AIForBusiness = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-5xl font-display text-estate-800 mb-6">Firmowa Sztuczna Inteligencja</h1>
              <p className="text-estate-600 mb-6">
                Kompleksowe rozwiązanie AI dostosowane do potrzeb biznesowych, automatyzujące procesy
                i zwiększające efektywność pracy. System został zaimplementowany w firmie z branży 
                logistycznej, przynosząc znaczące oszczędności czasowe i finansowe.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Kluczowe możliwości:</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    <li>Automatyczna analiza dokumentów</li>
                    <li>Predykcja trendów sprzedażowych</li>
                    <li>Optymalizacja procesów logistycznych</li>
                    <li>Chatbot dla obsługi klienta</li>
                    <li>System rekomendacji produktów</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Zastosowane technologie:</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    <li>OpenAI GPT-4</li>
                    <li>Python & TensorFlow</li>
                    <li>React & TypeScript</li>
                    <li>FastAPI</li>
                    <li>PostgreSQL & Redis</li>
                  </ul>
                </div>
              </div>

            </div>
            
            <div className="space-y-8">
              <img 
                src="/images/projekt-ai.jpg"
                alt="AI System Dashboard"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/images/ai-kobieta.jpg"
                  alt="AI Analytics"
                  className="rounded-lg shadow-lg w-full"
                />
                <img 
                  src="/images/ai-maz.jpg"
                  alt="Machine Learning Models"
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

export default AIForBusiness;
