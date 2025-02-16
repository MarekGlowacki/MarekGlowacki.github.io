
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
    <section className="relative h-[500px] bg-white overflow-hidden" id="uslugi">
      <div className="absolute inset-0 flex">
        {services.map((service, index) => (
          <div key={index} className="flex-1 relative group" style={{ marginRight: index !== services.length - 1 ? '2px' : '0' }}>
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
    </section>
  );
};

export default Services;
