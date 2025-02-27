
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AIBusiness = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-5xl font-display text-estate-800 mb-6">Sztuczna Inteligencja dla Firm</h1>
              <p className="text-estate-600 mb-6">
                Wykorzystaj potencjał sztucznej inteligencji w swojej firmie. Oferuję kompleksowe 
                rozwiązania AI, które zautomatyzują procesy, zwiększą efektywność i pomogą w 
                podejmowaniu lepszych decyzji biznesowych.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Oferowane usługi:</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    <li>Automatyzacja procesów biznesowych</li>
                    <li>Analiza danych i predykcje</li>
                    <li>Chatboty i asystenci AI</li>
                    <li>Systemy rekomendacji</li>
                    <li>Integracja AI z istniejącymi systemami</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Technologie:</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    <li>OpenAI GPT-4</li>
                    <li>Machine Learning</li>
                    <li>Python & TensorFlow</li>
                    <li>Natural Language Processing</li>
                    <li>Computer Vision</li>
                  </ul>
                </div>
              </div>

              <Link to="/contact">
                <Button className="bg-[#49be25] text-white hover:bg-[#3da51e]">
                  Zamów konsultację
                </Button>
              </Link>
            </div>
            
            <div className="space-y-8">
              <img 
                src="/images/ai-kobieta.jpg"
                alt="AI dla firm"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/images/ai-maz.jpg"
                  alt="AI Analytics"
                  className="rounded-lg shadow-lg w-full"
                />
                <img 
                  src="/images/projekt-ai.jpg"
                  alt="AI Dashboard"
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

export default AIBusiness;
