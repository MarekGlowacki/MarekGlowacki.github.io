
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const TOS111 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl sm:text-5xl font-display text-estate-800 mb-8">Terminal Operation System (TOS) 111</h1>
          
          <div className="mb-12">
            <img 
              src="/images/projekt-btc.jpg" 
              alt="Terminal Operation System" 
              className="w-full h-[60vh] object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="prose max-w-none text-estate-600 mb-8">
            <p>
              Z przyjemnością przedstawiam mój zaawansowany Terminal Operation System (TOS), który zrewolucjonizował sposób zarządzania operacjami transportowymi w terminalach. Stworzyłem ten system z myślą o efektywnej obsłudze pociągów i samochodów transportujących kontenery, oferując szereg innowacyjnych funkcji, które znacząco zwiększają wydajność i precyzję operacji.
            </p>

            <p>
              Mój TOS umożliwia płynne przyjmowanie i wydawanie pociągów, co jest kluczowe dla sprawnego zarządzania ruchem w terminalu. Dzięki zaawansowanej funkcjonalności, system przy wydaniach zapewnia obsługę załadunków, podwójnie sprawdzając przypisanie platform do odpowiednich kontenerów. To innowacyjne podejście minimalizuje ryzyko błędów przy współpracy spedytora z operatorem i zwiększa efektywność operacyjną, co przekłada się na szybsze i bardziej niezawodne procesy załadunkowe.
            </p>
            
            <p>
              System wspiera również zarządzanie przestrzenią magazynową, umożliwiając śledzenie stanów magazynowych. Dzięki temu operacje przyjęć i wydań towarów są nie tylko szybsze, ale także bardziej precyzyjne.
            </p>
            
            <p>
              Moje rozwiązanie nie tylko ułatwia codzienne operacje, ale także zapewnia pełną dokumentację i raportowanie, co jest niezbędne do analizy wydajności i podejmowania strategicznych decyzji. TOS 111 integruje wszystkie aspekty działalności terminalu, co pozwala na lepsze zarządzanie zasobami i poprawę jakości obsługi klienta.
            </p>
            
            <p>
              Mój Terminal Operation System (TOS) 111 wykorzystuje najnowocześniejsze technologie, bazując na nowoczesnych bazach danych w chmurze, które obsługują zamianę danych na wektory. Dzięki temu mogę zapewnić szybki i efektywny dostęp do informacji, co znacząco zwiększa wydajność operacyjną. Wykorzystanie technologii wektorowych pozwala na zaawansowaną analizę danych oraz lepsze zarządzanie zasobami, co przekłada się na jeszcze bardziej precyzyjne podejmowanie decyzji w zakresie operacji transportowych. Taki innowacyjny system umożliwia mi dostosowanie się do dynamicznych potrzeb rynku i zapewnia elastyczność w zarządzaniu operacjami w terminalu.
            </p>
            
            <p>
              Dzięki mojemu Terminal Operation System 111, terminale mogą osiągnąć nowy poziom efektywności i niezawodności, co jest kluczowe w dynamicznie zmieniającym się środowisku transportowym. Zachęcam do zapoznania się z moim TOS i odkrycia, jak może on wspierać rozwój Twojego terminalu!
            </p>
          </div>
          
          <div className="mb-12">
            <a href="https://tos111.netlify.app" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#49be25] text-white hover:bg-[#3da51e] flex items-center gap-2">
                Wypróbuj demo <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
            <div className="mt-4 text-sm text-estate-500">
              <p>Login: admin@tos111.pl</p>
              <p>Hasło: 123123</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TOS111;
