
import { Button } from "./ui/button";

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
    <section className="py-24 bg-white" id="uslugi">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-display text-estate-800">Nasze usługi</h2>
          <Button variant="link" className="text-[#49be25] hover:text-[#3da51e]">
            Zobacz wszystko →
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative h-[400px] overflow-hidden rounded-xl">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-display text-white mb-4">{service.title}</h3>
                <Button 
                  variant="outline"
                  className="w-fit text-white border-white hover:bg-white hover:text-black transition-colors"
                >
                  Czytaj więcej
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
