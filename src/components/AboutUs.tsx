
const AboutUs = () => {
  return (
    <section className="py-20 bg-estate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display text-estate-800 mb-6">Dlaczego warto ze mną współpracować?</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-4xl text-[#49be25]">01</span>
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Doświadczenie i Wiedza</h3>
                  <p className="text-estate-600">
                    Posiadam bogate doświadczenie w tworzeniu aplikacji internetowych, szkoleniach AI oraz doradztwie w zakresie Bitcoina. Moje rozwiązania są zawsze dostosowane do indywidualnych potrzeb klienta.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-4xl text-[#49be25]">02</span>
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Innowacyjne Podejście</h3>
                  <p className="text-estate-600">
                    Wykorzystuję najnowsze technologie i trendy, aby dostarczać rozwiązania, które nie tylko spełniają obecne potrzeby, ale są też gotowe na przyszłe wyzwania.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-4xl text-[#49be25]">03</span>
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Wsparcie na Każdym Etapie</h3>
                  <p className="text-estate-600">
                    Zapewniam kompleksową obsługę od konsultacji, przez wdrożenie, aż po wsparcie techniczne. Zawsze jestem dostępny dla moich klientów.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-display text-estate-800 mb-4">Nie czekaj - skontaktuj się już teraz!</h3>
              <p className="text-estate-600 mb-4">
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
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&q=80&w=1200"
                alt="Profesjonalne podejście do każdego projektu"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl">
              <p className="text-4xl font-display text-estate-800 mb-2">5+ lat</p>
              <p className="text-estate-600">doświadczenia w branży IT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
