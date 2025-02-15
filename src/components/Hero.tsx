
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    "https://images.unsplash.com/photo-1605379399642-870262d3d051",
    "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${img}')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}
      <div className="relative z-10 container mx-auto px-8 text-center">
        <h1 className="text-6xl md:text-7xl font-display text-white mb-8 leading-tight animate-fadeIn">
          Innowacyjne Rozwiązania Technologiczne
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto animate-fadeIn">
          Specjalizuję się w tworzeniu aplikacji internetowych, szkoleniach AI dla firm oraz doradztwie w zakresie kryptowalut.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
          <Button size="lg" className="bg-white text-black hover:bg-white/90 transform transition-transform hover:scale-105">
            Zobacz projekty
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 transform transition-transform hover:scale-105">
            Skontaktuj się
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
