
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-5xl font-display text-estate-800 mb-6">Tworzenie aplikacji internetowych</h1>
              <p className="text-estate-600 mb-6">
                Specjalizuję się w tworzeniu nowoczesnych aplikacji internetowych dostosowanych 
                do potrzeb Twojego biznesu. Wykorzystuję najnowsze technologie i najlepsze 
                praktyki programistyczne, aby dostarczyć rozwiązania najwyższej jakości.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Oferowane usługi:</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    <li>Strony i aplikacje internetowe</li>
                    <li>Systemy zarządzania treścią (CMS)</li>
                    <li>Aplikacje e-commerce</li>
                    <li>Integracje z API</li>
                    <li>Progressive Web Apps (PWA)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Technologie:</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    <li>React i TypeScript</li>
                    <li>Node.js i Express</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>MongoDB i PostgreSQL</li>
                  </ul>
                </div>
              </div>

              <Link to="/contact">
                <Button className="bg-[#49be25] hover:bg-[#3da51e]">
                  Zamów aplikację
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopment;
