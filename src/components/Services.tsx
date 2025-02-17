
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Tworzenie aplikacji internetowych",
      image: "/images/creating-apps.jpg",
      link: "/services#web-apps",
    },
    {
      title: "Sztuczna Inteligencja dla Firm",
      image: "/images/ai.jpg",
      link: "/services#ai",
    },
    {
      title: "Bitcoin Expert",
      image: "/images/zwrocic-Bitcoina.jpg",
      link: "/services#bitcoin",
    },
  ];

  return (
    <section 
      className="py-32 bg-white" 
      id="uslugi"
      style={{ willChange: 'transform' }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display text-estate-800 mb-6">Usługi</h2>
          <div className="flex justify-center items-center gap-4 mb-4">
            <Separator className="w-12" />
            <span className="text-estate-600">Co mogę dla Ciebie zrobić?</span>
            <Separator className="w-12" />
          </div>
          <p className="text-estate-600 max-w-2xl mx-auto">
            Specjalizuję się w trzech głównych obszarach, które pozwalają mi dostarczać kompleksowe rozwiązania dla Twojego biznesu
          </p>
        </div>

        <div 
          className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl"
          style={{ willChange: 'transform' }}
        >
          <div className="absolute inset-0 flex">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={service.link}
                className="flex-1 relative group overflow-hidden"
                style={{ 
                  marginRight: index !== services.length - 1 ? '2px' : '0',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ 
                    backgroundImage: `url(${service.image})`,
                    willChange: 'transform',
                    transform: 'translateZ(0)'
                  }}
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"
                  style={{ transform: 'translateZ(0)' }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-display text-white mb-4 transform group-hover:-translate-y-2 transition-transform">
                    {service.title}
                  </h3>
                  <div 
                    className="w-fit transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                  >
                    <Button 
                      variant="outline"
                      className="border-[#49be25] bg-[#49be25] hover:bg-[#3da51e] hover:text-white text-white"
                    >
                      Czytaj więcej
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

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
      </div>
    </section>
  );
};

export default Services;
