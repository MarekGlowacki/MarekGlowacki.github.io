
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Clock, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PerformanceComparison = () => {
  const { language } = useLanguage();

  const content = {
    pl: {
      title: "Porównanie wydajności",
      subtitle: "Dlaczego szybkość ma znaczenie?",
      description: "Poniżej przedstawiam porównanie czasu ładowania mojej strony z konkurencyjną stroną wykonaną za 13 tysięcy złotych kilka lat temu. Różnica jest zauważalna gołym okiem!",
      explanation: "Na powyższym filmiku jest nagrany czas wczytywania strony, która została zakupiona kilka lat temu za 13 tyś zł (zrobiona w starych technologiach) oraz mojej strony (zrobiona w najnowszych technologiach) w porównywalnych sekcjach -> strona główna i kontakt.",
      paragraph1: "Na stronie 13k za każdym przełączaniem się między sekcją kontakt czas wczytywania oscyluje w okolicach ponad 2 sekund. Czyli za każdym kliknięciem w oddzielną sekcję, klient musi czekać minimum 2 sekundy, by zobaczyć daną treść, co wpływa na doświadczenie klienta z marką.",
      paragraph2: "Natomiast na mojej stronie podczas pierwszego wczytywania klient podobnie czeka w okolicach nieco ponad 2 sekund, jednakże od tej pory przełączanie między sekcją kontakt odbywa się natychmiast (kilka milisekund). Dzięki takiej szybkości ładowania klient doświadcza, że ma do czynienia z prawdziwymi profesjonalistami, nie jest znudzony czekaniem, więc przyjemniej kojarzy markę i ma więcej motywacji do zaangażowania się.",
      benefits: {
        title: "Korzyści z szybkiej strony",
        items: [
          {
            title: "Lepsze doświadczenie użytkownika",
            description: "Użytkownicy nie lubią czekać. Szybko ładujące się strony zapewniają lepsze wrażenia."
          },
          {
            title: "Wyższe pozycje w wyszukiwarkach",
            description: "Google uwzględnia szybkość ładowania strony w swoim algorytmie rankingowym."
          },
          {
            title: "Niższy współczynnik odrzuceń",
            description: "Szybsze strony zatrzymują użytkowników dłużej, zmniejszając liczbę osób opuszczających witrynę."
          },
          {
            title: "Większa konwersja",
            description: "Badania pokazują, że szybsze strony mają wyższe wskaźniki konwersji."
          }
        ]
      },
      cta: "Zamów szybką stronę",
      backToServices: "Powrót do usług"
    },
    en: {
      title: "Performance Comparison",
      subtitle: "Why speed matters?",
      description: "Below I present a comparison of the loading time of my website with a competitive website made for 13 thousand PLN a few years ago. The difference is noticeable to the naked eye!",
      explanation: "The video above shows the loading time of a website that was purchased a few years ago for 13,000 PLN (made with old technologies) and my website (made with the latest technologies) in comparable sections -> home page and contact.",
      paragraph1: "On the 13k site, each time you switch between the contact section, the loading time oscillates around over 2 seconds. So with each click to a separate section, the client has to wait at least 2 seconds to see the content, which affects the client's experience with the brand.",
      paragraph2: "On my website, during the first loading, the client similarly waits for a little over 2 seconds, however, from then on, switching between the contact section takes place immediately (a few milliseconds). Thanks to such loading speed, the client experiences that they are dealing with real professionals, they are not bored with waiting, so they associate the brand more pleasantly and have more motivation to get involved.",
      benefits: {
        title: "Benefits of a fast website",
        items: [
          {
            title: "Better user experience",
            description: "Users don't like to wait. Fast-loading pages provide a better experience."
          },
          {
            title: "Higher search engine rankings",
            description: "Google takes into account page loading speed in its ranking algorithm."
          },
          {
            title: "Lower bounce rate",
            description: "Faster pages keep users longer, reducing the number of people leaving the site."
          },
          {
            title: "Higher conversion",
            description: "Research shows that faster pages have higher conversion rates."
          }
        ]
      },
      cta: "Order a fast website",
      backToServices: "Back to services"
    }
  };

  // Choose the appropriate language
  const c = language === "pl" ? content.pl : content.en;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-display text-estate-800 mb-4">{c.title}</h1>
            <p className="text-xl text-estate-600 max-w-3xl mx-auto">{c.subtitle}</p>
          </div>

          <div className="bg-gradient-to-br from-[#f7fbff] to-[#f9fff4] rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display text-estate-800 mb-6">{c.description}</h2>
                <p className="text-estate-600 mb-4">{c.explanation}</p>
                <p className="text-estate-600 mb-4">{c.paragraph1}</p>
                <p className="text-estate-600">{c.paragraph2}</p>
              </div>
              <div className="flex justify-center">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/images/performance-comparison.gif" 
                    alt="Performance comparison"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 px-6 py-3 rounded-lg">
                      <p className="text-estate-800 font-semibold">GIF ładowania stron</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-display text-estate-800 mb-8 text-center">{c.benefits.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {c.benefits.items.map((benefit, idx) => (
                <Card key={idx} className="border-2 border-[#e8f4ff] hover:border-[#49be25] transition-all duration-300 bg-white hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      {idx === 0 && <Zap className="w-6 h-6 text-[#49be25] mt-1" />}
                      {idx === 1 && <BarChart className="w-6 h-6 text-[#49be25] mt-1" />}
                      {idx === 2 && <ArrowRight className="w-6 h-6 text-[#49be25] mt-1" />}
                      {idx === 3 && <Clock className="w-6 h-6 text-[#49be25] mt-1" />}
                      <div>
                        <h3 className="text-xl font-display text-estate-800 mb-2">{benefit.title}</h3>
                        <p className="text-estate-600">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-[#49be25] text-white hover:bg-[#3da51e] text-lg px-8 py-6 h-auto">
                {c.cta}
              </Button>
            </Link>
            <Link to="/services/web-development">
              <Button variant="outline" size="lg" className="border-[#49be25] text-[#49be25] hover:bg-[#f0faf0] text-lg px-8 py-6 h-auto">
                {c.backToServices}
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PerformanceComparison;
