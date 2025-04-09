
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Services = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const portfolioProjects = [
    { 
      name: "Karolina Siemion", 
      url: "https://delicate-empanada-d272d8.netlify.app",
      type: language === "pl" ? "Strona personalna" : "Personal website"
    },
    { 
      name: "Arkadiusz Sikorski", 
      url: "https://ephemeral-brigadeiros-7225df.netlify.app",
      type: language === "pl" ? "Portfolio" : "Portfolio"
    },
    { 
      name: "Jacek Pęczak", 
      url: "https://animated-style-fusion.vercel.app",
      type: language === "pl" ? "Strona profesjonalna" : "Professional site"
    },
    { 
      name: "Daniel Sciborek", 
      url: "https://peaceful-gingersnap-e1d5f8.netlify.app",
      type: language === "pl" ? "Strona personalna" : "Personal website"
    },
    { 
      name: "Asia Kuźma", 
      url: "https://deft-starlight-518597.netlify.app",
      type: language === "pl" ? "Portfolio" : "Portfolio"
    },
    { 
      name: "DCA Crypto Monitor", 
      url: "https://gentle-klepon-d28eaf.netlify.app/",
      type: language === "pl" ? "Aplikacja webowa" : "Web application"
    },
    { 
      name: "CRM Zarządzanie szkołą", 
      url: "https://candid-lamington-83dcb0.netlify.app/",
      type: language === "pl" ? "System CRM" : "CRM System"
    },
    { 
      name: "Magda Hawryluk", 
      url: "https://verdant-kashata-8db74f.netlify.app/",
      type: language === "pl" ? "Portfolio" : "Portfolio"
    },
    { 
      name: "OKEiWR", 
      url: "https://nimble-florentine-02af1e.netlify.app/",
      type: language === "pl" ? "Strona organizacji" : "Organization website"
    }
  ];

  return (
    <section className="py-32 bg-white" id="uslugi">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-display text-estate-800 mb-16 text-center">
          {t("services.title")}
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
                    {t("services.web.title")}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-[#49be25] text-white hover:bg-[#3da51e]">
                    {t("services.more")}
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
                    {t("services.ai.title")}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-[#49be25] text-white hover:bg-[#3da51e]">
                    {t("services.more")}
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
                    {t("services.btc.title")}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-[#49be25] text-white hover:bg-[#3da51e]">
                    {t("services.more")}
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-3xl font-display text-estate-800 mb-12 text-center">
            {language === "pl" ? "Przykłady moich produkcji:" : "Examples of my work:"}
          </h3>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {portfolioProjects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="block h-full group"
                  >
                    <Card className="h-full border-2 border-[#e8f4ff] hover:border-[#49be25] transition-all duration-300 bg-white hover:shadow-xl">
                      <CardContent className="p-0">
                        <div className="aspect-video w-full overflow-hidden">
                          <img 
                            src={`https://image.thum.io/get/width/600/crop/800/${project.url}`} 
                            alt={project.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-display text-lg text-estate-800 mb-1 group-hover:text-[#49be25] transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-sm text-estate-600">{project.type}</p>
                          <div className="mt-2 flex items-center text-[#49be25] text-sm font-medium">
                            <span>{language === "pl" ? "Odwiedź stronę" : "Visit website"}</span>
                            <ExternalLink className="ml-1 w-3 h-3" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static mx-2 translate-y-0" />
              <CarouselNext className="static mx-2 translate-y-0" />
            </div>
          </Carousel>
        </div>

        {isHomePage && (
          <div className="mt-12 flex justify-center space-x-4">
            <Link to="/services">
              <Button 
                variant="outline" 
                className="text-estate-800 border-estate-800 hover:bg-estate-800 hover:text-white"
              >
                {t("services.all")}
              </Button>
            </Link>
            <Link to="/projects">
              <Button 
                variant="outline" 
                className="text-estate-800 border-estate-800 hover:bg-estate-800 hover:text-white"
              >
                {language === "pl" ? "Pokaż wszystkie produkcje" : "Show all productions"}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
