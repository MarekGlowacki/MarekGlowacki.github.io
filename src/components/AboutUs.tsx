
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Briefcase,
  BadgeDollarSign,
  LineChart,
  ShieldCheck,
  Rocket,
  Bot,
  MapPin
} from "lucide-react";

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-estate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Sekcja O mnie */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="/images/moje.jpg"
                alt="Marek Głowacki - Expert Bitcoin & Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-display text-estate-800 mb-6">{t("about.title")}</h2>
            <p className="text-lg text-estate-600 mb-8">
              {t("about.intro")}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-[#49be25]/10">
                  <BadgeDollarSign className="w-6 h-6 text-[#49be25]" />
                </span>
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">{t("about.finance")}</h3>
                  <p className="text-estate-600">
                    {t("about.finance.desc")}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-[#49be25]/10">
                  <Briefcase className="w-6 h-6 text-[#49be25]" />
                </span>
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">{t("about.corporate")}</h3>
                  <p className="text-estate-600">
                    {t("about.corporate.desc")}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-[#49be25]/10">
                  <LineChart className="w-6 h-6 text-[#49be25]" />
                </span>
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">{t("about.background")}</h3>
                  <p className="text-estate-600">
                    {t("about.background.desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-[#49be25]/10">
                  <ShieldCheck className="w-6 h-6 text-[#49be25]" />
                </span>
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">{t("about.security")}</h3>
                  <p className="text-estate-600">
                    {t("about.security.desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-[#49be25]/10">
                  <Rocket className="w-6 h-6 text-[#49be25]" />
                </span>
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">{t("about.btcexpert")}</h3>
                  <p className="text-estate-600">
                    {t("about.btcexpert.desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-[#49be25]/10">
                  <Bot className="w-6 h-6 text-[#49be25]" />
                </span>
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">{t("about.bots")}</h3>
                  <p className="text-estate-600">
                    {t("about.bots.desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-[#49be25]/10">
                  <MapPin className="w-6 h-6 text-[#49be25]" />
                </span>
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">{t("about.world")}</h3>
                  <p className="text-estate-600">
                    {t("about.world.desc")}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Sekcja Dlaczego warto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl font-display text-estate-800 mb-12">{t("why.title")}</h2>
              
              <div className="space-y-12">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#49be25] text-4xl font-display">01</span>
                    <h3 className="text-2xl font-display text-estate-800">{t("why.experience")}</h3>
                  </div>
                  <p className="text-estate-600 leading-relaxed">
                    {t("why.experience.desc")}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#49be25] text-4xl font-display">02</span>
                    <h3 className="text-2xl font-display text-estate-800">{t("why.innovative")}</h3>
                  </div>
                  <p className="text-estate-600 leading-relaxed">
                    {t("why.innovative.desc")}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#49be25] text-4xl font-display">03</span>
                    <h3 className="text-2xl font-display text-estate-800">{t("why.support")}</h3>
                  </div>
                  <p className="text-estate-600 leading-relaxed">
                    {t("why.support.desc")}
                  </p>
                </div>
              </div>

              <div className="mt-12 p-8 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-display text-estate-800 mb-4">{t("why.cta")}</h3>
                <p className="text-estate-600 mb-6">
                  {t("why.cta.desc")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+48514383545" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#49be25] text-white rounded-lg hover:bg-[#3da51e] transition-colors"
                  >
                    {t("why.call")}
                  </a>
                  <a 
                    href="mailto:kontakt@marekglowacki.pl" 
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#49be25] text-[#49be25] rounded-lg hover:bg-[#49be25] hover:text-white transition-colors"
                  >
                    {t("why.email")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&q=80&w=1200"
                alt="Nowoczesny dom z dużymi oknami"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-8 right-8 bg-white p-8 rounded-lg shadow-xl">
              <p className="text-5xl font-display text-estate-800 mb-2">{t("why.experience.years")}</p>
              <p className="text-lg text-estate-600">{t("why.experience.text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
