
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Services = () => {
  const services = [
    {
      title: "Tworzenie aplikacji internetowych",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "#",
    },
    {
      title: "Szkolenia Sztucznej Inteligencji dla Firm",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      link: "#",
    },
    {
      title: "Bitcoin Expert",
      image: "/lovable-uploads/42d94cd4-348d-4d21-a88c-2d8401f1f35c.png",
      link: "#",
    },
  ];

  return (
    <section className="py-32 bg-white" id="uslugi">
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

        <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl">
          <div className="absolute inset-0 flex">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="flex-1 relative group overflow-hidden"
                style={{ marginRight: index !== services.length - 1 ? '2px' : '0' }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-display text-white mb-4 transform group-hover:-translate-y-2 transition-transform">
                    {service.title}
                  </h3>
                  <Button 
                    variant="outline"
                    className="w-fit text-white border-white hover:bg-white hover:text-black transition-all transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    Czytaj więcej
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button 
            variant="outline" 
            className="text-estate-800 border-estate-800 hover:bg-estate-800 hover:text-white"
          >
            Zobacz wszystkie usługi
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
