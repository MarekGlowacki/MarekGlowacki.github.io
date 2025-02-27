
import PropertyCard from "./PropertyCard";
import { useLanguage } from "@/contexts/LanguageContext";

const PropertyGrid = () => {
  const { t } = useLanguage();
  
  const properties = [
    {
      image: "images/projekt-dcm.jpg",
      title: t("projects.dca"),
      location: t("projects.location.poland"),
      slug: "dca-crypto-monitor",
    },
    {
      image: "images/projekt-ai.jpg",
      title: t("projects.ai"),
      location: t("projects.location.biala"),
      slug: "ai-for-business",
    },
    {
      image: "/images/real-calendar.jpg",
      title: t("projects.crm"),
      location: t("projects.location.world"),
      slug: "crm",
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
