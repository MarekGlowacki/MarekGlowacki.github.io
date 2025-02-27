
const OurVision = () => {
  return (
    <section className="py-32 bg-white" id="dlaczego-warto">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl font-display text-estate-800 mb-16 text-center">
            Dlaczego warto?
          </h2>

          <img
            src="/images/ai-maz.jpg"
            alt="AI Expert"
            className="w-full max-w-2xl h-[600px] object-cover rounded-lg shadow-xl mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-display text-estate-800 mb-4">
                Oszczędność czasu
              </h3>
              <p className="text-estate-600">
                Automatyzacja procesów i intuicyjne interfejsy pozwalają zaoszczędzić cenny czas.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-display text-estate-800 mb-4">
                Nowoczesne rozwiązania
              </h3>
              <p className="text-estate-600">
                Wykorzystuję najnowsze technologie, aby dostarczyć najlepsze możliwe rozwiązania.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-display text-estate-800 mb-4">
                Wsparcie techniczne
              </h3>
              <p className="text-estate-600">
                Zapewniam kompleksowe wsparcie techniczne i pomoc w rozwiązywaniu problemów.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
