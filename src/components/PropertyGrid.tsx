
import PropertyCard from "./PropertyCard";
import { useLanguage } from "@/contexts/LanguageContext";

const PropertyGrid = () => {
  const { t, language } = useLanguage();
  
  const properties = [
    {
      image: "images/TOS111.png",
      title: t("projects.ai"),
      location: t("projects.location.biala"),
      slug: "ai-for-business",
    },
    {
      image: "/images/TOS111.png",
      title: language === "pl" ? "Terminal Operation System (TOS) 111" : "Terminal Operation System (TOS) 111",
      location: t("projects.location.world"),
      slug: "tos111",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {properties.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
    </div>
  );
};

export default PropertyGrid;
