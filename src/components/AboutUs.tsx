
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
            <h2 className="text-4xl font-display text-estate-800 mb-6">O mnie</h2>
            <p className="text-lg text-estate-600 mb-8">
              Jestem pasjonatem Bitcoina, programowania i finansów. Moją misją jest dzielenie się wiedzą i doświadczeniem z innymi.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-[#49be25]/10">
                  <BadgeDollarSign className="w-6 h-6 text-[#49be25]" />
                </span>
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Wolność Finansowa</h3>
                  <p className="text-estate-600">
                    Osiągnąłem wolność finansową w wieku 33 lat!
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-[#49be25]/10">
                  <Briefcase className="w-6 h-6 text-[#49be25]" />
                </span>
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Doświadczenie Korporacyjne</h3>
                  <p className="text-estate-600">
                    Programista w największych korporacjach na świecie, zatrudniających 250,000 pracowników w 154 krajach.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-[#49be25]/10">
                  <LineChart className="w-6 h-6 text-[#49be25]" />
                </span>
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Background Finansowy</h3>
                  <p className="text-estate-600">
                    3 lata doświadczenia w finansach: 2,5 roku sprzedaży produktów finansowych opartych na funduszach inwestycyjnych oraz 0,5 roku jako bankier dla klientów biznesowych.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-[#49be25]/10">
                  <ShieldCheck className="w-6 h-6 text-[#49be25]" />
                </span>
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Cyberbezpieczeństwo</h3>
                  <p className="text-estate-600">
                    Pasjonat cyberbezpieczeństwa, stale poszerzający wiedzę w tej dziedzinie.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-[#49be25]/10">
                  <Rocket className="w-6 h-6 text-[#49be25]" />
                </span>
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Expert Bitcoin</h3>
                  <p className="text-estate-600">
                    2,5 roku intensywnego szkolenia z inwestowania w Bitcoina u światowej klasy eksperta. Od 2020 roku jestem "all in" w Bitcoinie!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-[#49be25]/10">
                  <Bot className="w-6 h-6 text-[#49be25]" />
                </span>
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Trading Bots</h3>
                  <p className="text-estate-600">
                    Od 13.05.2022 r. tworzę boty tradingowe dla kryptowalut.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-[#49be25]/10">
                  <MapPin className="w-6 h-6 text-[#49be25]" />
                </span>
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Światowy człowiek</h3>
                  <p className="text-estate-600">
                    Mieszkałem rok na Zanzibarze, co odmieniło moje życie.
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
              <h2 className="text-4xl font-display text-estate-800 mb-12">Dlaczego warto?</h2>
              
              <div className="space-y-12">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#49be25] text-4xl font-display">01</span>
                    <h3 className="text-2xl font-display text-estate-800">Doświadczenie i Wiedza</h3>
                  </div>
                  <p className="text-estate-600 leading-relaxed">
                    Posiadam bogate doświadczenie w tworzeniu aplikacji internetowych, szkoleniach AI oraz doradztwie w zakresie Bitcoina. Moje rozwiązania są zawsze dostosowane do indywidualnych potrzeb klienta.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#49be25] text-4xl font-display">02</span>
                    <h3 className="text-2xl font-display text-estate-800">Innowacyjne Podejście</h3>
                  </div>
                  <p className="text-estate-600 leading-relaxed">
                    Wykorzystuję najnowsze technologie i trendy, aby dostarczać rozwiązania, które nie tylko spełniają obecne potrzeby, ale są też gotowe na przyszłe wyzwania.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#49be25] text-4xl font-display">03</span>
                    <h3 className="text-2xl font-display text-estate-800">Wsparcie na Każdym Etapie</h3>
                  </div>
                  <p className="text-estate-600 leading-relaxed">
                    Zapewniam kompleksową obsługę od konsultacji, przez wdrożenie, aż po wsparcie techniczne. Zawsze jestem dostępny dla moich klientów.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-8 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-display text-estate-800 mb-4">Nie czekaj - skontaktuj się już teraz!</h3>
                <p className="text-estate-600 mb-6">
                  Umów się na bezpłatną konsultację i dowiedz się, jak mogę pomóc w rozwoju Twojego biznesu.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+48514383545" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#49be25] text-white rounded-lg hover:bg-[#3da51e] transition-colors"
                  >
                    Zadzwoń teraz: +48 514 383 545
                  </a>
                  <a 
                    href="mailto:kontakt@marekglowacki.pl" 
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#49be25] text-[#49be25] rounded-lg hover:bg-[#49be25] hover:text-white transition-colors"
                  >
                    Wyślij email
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
              <p className="text-5xl font-display text-estate-800 mb-2">5+ lat</p>
              <p className="text-lg text-estate-600">doświadczenia w branży IT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
