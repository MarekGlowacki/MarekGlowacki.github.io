
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl sm:text-5xl font-display text-estate-800 mb-16 text-center">{t("services.title")}</h1>
          
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
              <h2 className="text-3xl font-display text-estate-800 mb-6">{t("services.web.title")}</h2>
              <p className="text-estate-600 mb-6">
                {t("services.web.desc")}
              </p>
              <Link to="/services/web-development">
                <Button className="w-fit bg-[#49be25] text-white hover:bg-[#3da51e]">
                  {t("services.more")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Sekcja 2: AI dla Firm */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32" id="ai">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-display text-estate-800 mb-6">{t("services.ai.title")}</h2>
              <p className="text-estate-600 mb-6">
                {t("services.ai.desc")}
              </p>
              <Link to="/project/ai-for-business">
                <Button className="w-fit bg-[#49be25] text-white hover:bg-[#3da51e]">
                  {t("services.more")}
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
              <h2 className="text-3xl font-display text-estate-800 mb-6">{t("services.btc.title")}</h2>
              <p className="text-estate-600 mb-6">
                {t("services.btc.desc")}
              </p>
              <Link to="/services/bitcoin-consulting">
                <Button className="w-fit bg-[#49be25] text-white hover:bg-[#3da51e]">
                  {t("services.more")}
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
