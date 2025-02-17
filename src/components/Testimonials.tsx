
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anna Kowalska",
      role: "CEO Startup Tech",
      text: "Współpraca z Markiem przy wdrożeniu sztucznej inteligencji w naszej firmie okazała się strzałem w dziesiątkę. Procesy, które zajmowały nam godziny, teraz wykonują się w minutach.",
    },
    {
      name: "Tomasz Nowicki",
      role: "Inwestor",
      text: "Doradztwo w zakresie Bitcoina na najwyższym poziomie. Otrzymałem nie tylko wiedzę techniczną, ale też praktyczne wskazówki dotyczące bezpieczeństwa i strategii inwestycyjnych.",
    },
    {
      name: "Magdalena Wiśniewska",
      role: "Dyrektor Marketingu",
      text: "DCA Crypto Monitor to narzędzie, którego szukaliśmy od dawna. Automatyzacja i przejrzystość raportowania sprawiły, że nasza strategia inwestycyjna stała się znacznie bardziej efektywna.",
    },
    {
      name: "Piotr Adamczyk",
      role: "Właściciel e-commerce",
      text: "Implementacja AI w naszym sklepie internetowym przyniosła natychmiastowe rezultaty. Personalizacja ofert i automatyczna obsługa klienta znacząco zwiększyły sprzedaż.",
    },
    {
      name: "Karolina Dąbrowska",
      role: "CTO FinTech",
      text: "Profesjonalizm i głęboka wiedza techniczna - to cechy, które wyróżniają Marka. Jego wsparcie przy integracji Lightning Network było nieocenione.",
    },
    {
      name: "Michał Zieliński",
      role: "Manager ds. Rozwoju",
      text: "Szkolenia z zakresu AI dla naszego zespołu otworzyły nam oczy na nowe możliwości. Teraz aktywnie wykorzystujemy sztuczną inteligencję w codziennej pracy.",
    },
    {
      name: "Barbara Lewandowska",
      role: "Przedsiębiorca",
      text: "Aplikacja do monitorowania DCA zmieniła sposób, w jaki zarządzam swoimi inwestycjami. Wszystko jest przejrzyste i zautomatyzowane.",
    },
    {
      name: "Robert Kaczmarek",
      role: "Doradca finansowy",
      text: "Współpraca przy projekcie implementacji rozwiązań kryptowalutowych przebiegła sprawnie i profesjonalnie. Polecam każdemu, kto szuka eksperta w tej dziedzinie.",
    },
    {
      name: "Katarzyna Jabłońska",
      role: "Product Manager",
      text: "Wdrożenie AI w naszym procesie obsługi klienta przyniosło niesamowite rezultaty. Czas odpowiedzi skrócił się o 70%, a zadowolenie klientów znacząco wzrosło.",
    },
    {
      name: "Adam Kowalczyk",
      role: "Inwestor Bitcoin",
      text: "Dzięki konsultacjom z Markiem znacznie lepiej rozumiem techniczne aspekty Bitcoina. Jego wiedza i sposób tłumaczenia złożonych zagadnień są imponujące.",
    },
    {
      name: "Joanna Mazur",
      role: "Dyrektor Operacyjny",
      text: "System AI, który Marek wdrożył w naszej firmie, zrewolucjonizował nasze procesy logistyczne. Oszczędności czasu i kosztów przerosły nasze oczekiwania.",
    },
    {
      name: "Paweł Wojciechowski",
      role: "Założyciel startupu",
      text: "Aplikacja do monitorowania inwestycji kryptowalutowych, którą dla nas stworzył, jest dokładnie tym, czego potrzebowaliśmy. Intuicyjna i pełna przydatnych funkcji.",
    },
  ];

  return (
    <section className="py-20 bg-estate-50">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl font-display text-estate-800 mb-4">Opinie Klientów</h2>
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-6">
                  <blockquote className="text-xl text-estate-600 mb-6">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div>
                      <div className="font-semibold text-estate-800">{testimonial.name}</div>
                      <div className="text-estate-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
