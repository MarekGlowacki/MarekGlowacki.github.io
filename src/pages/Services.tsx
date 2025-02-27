
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl sm:text-5xl font-display text-estate-800 mb-16 text-center">Nasze Usługi</h1>
          
          {/* Sekcja 1: Tworzenie aplikacji */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32" id="web-apps">
            <div className="order-2 lg:order-1">
              <img 
                src="/images/creating-apps.jpg"
                alt="Tworzenie aplikacji"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <h2 className="text-3xl font-display text-estate-800 mb-6">Tworzenie aplikacji internetowych</h2>
              <p className="text-xl font-display text-estate-800 mb-4">Zabłyśnij w internecie</p>
              <p className="text-xl font-display text-estate-800 mb-4">Robię szybko, robię tanio, robię dobrze</p>
              <p className="text-xl font-display text-estate-800 mb-6">Zamów stronę, z której duma będzie Cię rozpierać</p>
              <p className="text-estate-600 mb-6">
                Specjalizuję się w tworzeniu nowoczesnych aplikacji internetowych z wykorzystaniem najnowszych technologii.
                Od prostych stron po zaawansowane systemy zarządzania, tworzę rozwiązania szyte na miarę potrzeb klienta.
              </p>
              <Link to="/services/web-development">
                <Button className="w-fit bg-[#49be25] text-white hover:bg-[#3da51e]">
                  Dowiedz się więcej
                </Button>
              </Link>
            </div>
          </div>

          {/* Sekcja 2: AI dla Firm */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32" id="ai">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-display text-estate-800 mb-6">Sztuczna Inteligencja dla Firm</h2>
              <p className="text-estate-600 mb-6">
                Wykorzystaj potencjał sztucznej inteligencji w swojej firmie. Oferuję kompleksowe 
                rozwiązania AI, które zautomatyzują procesy, zwiększą efektywność i pomogą w 
                podejmowaniu lepszych decyzji biznesowych.
              </p>
              <Link to="/project/ai-for-business">
                <Button className="w-fit bg-[#49be25] text-white hover:bg-[#3da51e]">
                  Dowiedz się więcej
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="/images/ai-kobieta.jpg"
                alt="AI dla Firm"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>

          {/* Sekcja 3: Bitcoin */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" id="bitcoin">
            <div>
              <img 
                src="/images/zwrocic-Bitcoina.jpg"
                alt="Bitcoin Expert"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-display text-estate-800 mb-6">Bitcoin Expert</h2>
              <p className="text-estate-600 mb-6">
                Profesjonalne doradztwo w zakresie Bitcoina i technologii blockchain. 
                Pomagam w bezpiecznym przechowywaniu środków, implementacji rozwiązań 
                płatniczych i edukacji zespołów w zakresie kryptowalut.
              </p>
              <Link to="/services/bitcoin-consulting">
                <Button className="w-fit bg-[#49be25] text-white hover:bg-[#3da51e]">
                  Dowiedz się więcej
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
