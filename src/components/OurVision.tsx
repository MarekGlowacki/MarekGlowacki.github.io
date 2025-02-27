
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const OurVision = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      title: t("vision.apps"),
      description: t("vision.apps.desc"),
    },
    {
      title: t("vision.ai"),
      description: t("vision.ai.desc"),
    },
    {
      title: t("vision.btc"),
      description: t("vision.btc.desc"),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl font-display text-estate-800 mb-4">{t("vision.title")}</h2>
        <p className="text-estate-500 mb-12 mx-auto max-w-2xl">
          {t("vision.desc")}
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
