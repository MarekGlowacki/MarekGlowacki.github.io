
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

const Services = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <section className="py-32 bg-white" id="uslugi">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-display text-estate-800 mb-16 text-center">
          Usługi
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative">
            <Link to="/services/web-development" className="block">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/images/creating-apps.jpg"
                  alt="Tworzenie aplikacji"
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-2xl font-display text-white text-center px-4">
                    Tworzenie aplikacji internetowych
                  </h3>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-[#49be25] text-white hover:bg-[#3da51e]">
                    Czytaj więcej
                  </Button>
                </div>
              </div>
            </Link>
          </div>

          <div className="group relative">
            <Link to="/services/ai-business" className="block">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/images/ai-kobieta.jpg"
                  alt="AI dla firm"
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-2xl font-display text-white text-center px-4">
                    Sztuczna Inteligencja dla Firm
                  </h3>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-[#49be25] text-white hover:bg-[#3da51e]">
                    Czytaj więcej
                  </Button>
                </div>
              </div>
            </Link>
          </div>

          <div className="group relative">
            <Link to="/services/bitcoin-consulting" className="block">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/images/zwrocic-Bitcoina.jpg"
                  alt="Bitcoin Expert"
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-2xl font-display text-white text-center px-4">
                    Bitcoin Expert
                  </h3>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-[#49be25] text-white hover:bg-[#3da51e]">
                    Czytaj więcej
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {isHomePage && (
          <div className="mt-12 flex justify-center">
            <Link to="/services">
              <Button 
                variant="outline" 
                className="text-estate-800 border-estate-800 hover:bg-estate-800 hover:text-white"
              >
                Zobacz wszystkie usługi
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
