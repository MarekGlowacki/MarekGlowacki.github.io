
import PropertyCard from "./PropertyCard";

const PropertyGrid = () => {
  const properties = [
    {
      image: "images/projekt-dcm.jpg",
      title: "DCA Crypto Monitor",
      location: "Polska",
      slug: "dca-crypto-monitor",
    },
    {
      image: "images/projekt-ai.jpg",
      title: "Firmowa Sztuczna Inteligencja",
      location: "Biała Podlaska",
      slug: "ai-for-business",
    },
    {
      image: "images/projekt-btc.jpg",
      title: "Doradztwo Bitcoin",
      location: "Świat",
      slug: "bitcoin-consulting",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {properties.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
    </div>
  );
};

export default PropertyGrid;
