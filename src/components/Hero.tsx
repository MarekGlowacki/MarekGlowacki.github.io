
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-white mb-6 sm:mb-8 leading-tight animate-fadeIn">
            Innowacyjne Rozwiązania Technologiczne
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto animate-fadeIn">
            Specjalizuję się w tworzeniu aplikacji internetowych, szkoleniach AI dla firm oraz doradztwie w zakresie Bitcoina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
            <Link to="/projects" className="inline-flex items-center justify-center px-6 py-3 bg-[#49be25] text-white rounded-lg hover:bg-[#3da51e] transition-colors">
              Zobacz projekty
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-estate-800 transition-colors">
              Skontaktuj się
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
