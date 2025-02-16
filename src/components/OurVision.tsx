
import { Check } from "lucide-react";

const OurVision = () => {
  const values = [
    {
      title: "Nowoczesne Aplikacje",
      description: "Tworzę wyjątkowe aplikacje internetowe łączące innowacyjność z funkcjonalnością.",
    },
    {
      title: "Sztuczna Inteligencja",
      description: "Implementuję rozwiązania AI, które wspierają rozwój i automatyzację procesów biznesowych.",
    },
    {
      title: "Bitcoin Expert",
      description: "Dostarczam profesjonalne doradztwo i wsparcie w zakresie inwestycji w Bitcoin.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl font-display text-estate-800 mb-4">Moja Wizja</h2>
        <p className="text-estate-500 mb-12 mx-auto max-w-2xl">
          Moją misją jest tworzenie innowacyjnych rozwiązań technologicznych, które wyznaczają nowe standardy w branży IT.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group transition-colors duration-300 hover:bg-green-200">
                <Check className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-estate-800 mb-2">{value.title}</h3>
                <p className="text-estate-500">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVision;
