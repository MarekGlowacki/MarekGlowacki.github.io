
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
          <div className="group">
            <Link to="/services#web-apps" className="block">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="/images/creating-apps.jpg"
                  alt="Tworzenie aplikacji"
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-display text-estate-800 mb-2">
                Tworzenie aplikacji internetowych
              </h3>
            </Link>
          </div>

          <div className="group">
            <Link to="/services#ai" className="block">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="/images/ai-kobieta.jpg"
                  alt="AI dla firm"
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-display text-estate-800 mb-2">
                Sztuczna Inteligencja dla Firm
              </h3>
            </Link>
          </div>

          <div className="group">
            <Link to="/services#bitcoin" className="block">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="/images/zwrocic-Bitcoina.jpg"
                  alt="Bitcoin Expert"
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-display text-estate-800 mb-2">
                Bitcoin Expert
              </h3>
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
