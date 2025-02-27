
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LegalTerms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-display text-estate-800 mb-8 text-center">Informacje prawne</h1>
          
          <Tabs defaultValue="terms" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="terms">Regulamin</TabsTrigger>
              <TabsTrigger value="privacy">Polityka prywatności</TabsTrigger>
              <TabsTrigger value="cookies">Polityka cookies</TabsTrigger>
            </TabsList>
            
<TabsContent value="terms" className="space-y-6">
  <h2 className="text-2xl font-semibold mb-4">Regulamin świadczenia usług</h2>

  <div className="space-y-4 text-estate-600">
    <h3 className="text-xl font-semibold">§1. Postanowienia ogólne</h3>
    <p>
      1.1. Niniejszy regulamin określa zasady korzystania z serwisu internetowego dostępnego pod adresem https://marekglowacki.pl, prowadzonego przez Marka Głowackiego, osoby fizycznej, z siedzibą w Białej Podlaskiej.
    </p>
    <p>
      1.2. Kontakt z Usługodawcą możliwy jest pod adresem e-mail: kontakt@marekglowacki.pl oraz numerem telefonu: +48 514 383 545.
    </p>
    <p>
      1.3. Serwis świadczy usługi w zakresie tworzenia aplikacji internetowych, szkoleń z zakresu sztucznej inteligencji oraz doradztwa w obszarze technologii Bitcoina.
    </p>

    <h3 className="text-xl font-semibold mt-6">§2. Definicje</h3>
    <p>
      2.1. Użytkownik – osoba fizyczna, prawna lub jednostka organizacyjna korzystająca z usług świadczonych przez Usługodawcę za pośrednictwem Serwisu.
    </p>
    <p>
      2.2. Serwis – strona internetowa dostępna pod adresem https://marekglowacki.pl.
    </p>
    <p>
      2.3. Usługi – usługi świadczone przez Usługodawcę za pośrednictwem Serwisu, w szczególności w zakresie tworzenia aplikacji internetowych, szkoleń AI oraz doradztwa w obszarze blockchain i kryptowalut.
    </p>

    <h3 className="text-xl font-semibold mt-6">§3. Wymagania techniczne</h3>
    <p>
      3.1. Aby korzystać z usług świadczonych drogą elektroniczną, Użytkownik powinien dysponować urządzeniem z dostępem do Internetu oraz zainstalowaną przeglądarką internetową w najnowszej dostepnej wersji oraz włączoną obsługą plików cookies.
    </p>
    <p>
      3.2. Użytkownik powinien również posiadać zainstalowane oprogramowanie umożliwiające korzystanie z usług.
    </p>

    <h3 className="text-xl font-semibold mt-6">§4. Procedura zawierania umów</h3>
    <p>
      4.1. Umowa o świadczenie usług drogą elektroniczną zostaje zawarta w momencie, gdy Użytkownik złoży zamówienie na Usługę poprzez formularz dostępny w Serwisie, a Usługodawca potwierdzi przyjęcie zamówienia.
    </p>
    <p>
      4.2. Potwierdzenie przyjęcia zamówienia następuje drogą elektroniczną na adres e-mail podany przez Użytkownika.
    </p>

    <h3 className="text-xl font-semibold mt-6">§5. Warunki rozwiązania umowy</h3>
    <p>
      5.1. Użytkownik ma prawo odstąpić od umowy w terminie 14 dni bez podawania przyczyny, składając stosowne oświadczenie na adres e-mail: kontakt@marekglowacki.pl.
    </p>
    <p>
      5.2. Usługodawca ma prawo do rozwiązania umowy w przypadku naruszenia przez Użytkownika postanowień niniejszego regulaminu.
    </p>

    <h3 className="text-xl font-semibold mt-6">§6. Odpowiedzialność Usługodawcy</h3>
    <p>
      6.1. Usługodawca odpowiada za niewykonanie lub nienależyte wykonanie usług tylko w przypadku, gdy jest to wynikiem jego winy umyślnej lub rażącego niedbalstwa.
    </p>
    <p>
      6.2. Usługodawca nie ponosi odpowiedzialności za szkody powstałe w wyniku niewłaściwego korzystania z Serwisu przez Użytkownika.
    </p>

    <h3 className="text-xl font-semibold mt-6">§7. Postanowienia dotyczące ochrony konsumentów</h3>
    <p>
      7.1. Użytkownik będący konsumentem ma prawo odstąpić od umowy w terminie 14 dni bez podawania przyczyny, składając stosowne oświadczenie na adres e-mail: kontakt@marekglowacki.pl.
    </p>
    <p>
      7.2. Reklamacje dotyczące świadczonych Usług można składać zgodnie z procedurą opisaną w punkcie 6.
    </p>

    <h3 className="text-xl font-semibold mt-6">§8. Informacje o plikach cookies</h3>
    <p>
      8.1. Serwis wykorzystuje pliki cookies w celu zapewnienia prawidłowego funkcjonowania oraz poprawy jakości świadczonych usług. Użytkownik może zarządzać plikami cookies poprzez ustawienia swojej przeglądarki.
    </p>

    <h3 className="text-xl font-semibold mt-6">§9. Postanowienia końcowe</h3>
    <p>
      9.1. Usługodawca zastrzega sobie prawo do wprowadzania zmian w niniejszym regulaminie. Zmiany wchodzą w życie z dniem ich opublikowania w Serwisie.
    </p>
    <p>
      9.2. W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa polskiego.
    </p>
    <p>
      9.3. Niniejszy regulamin obowiązuje od dnia 15.02.2025.
    </p>
  </div>
</TabsContent>


            
<TabsContent value="privacy" className="space-y-6">
  <h2 className="text-2xl font-semibold mb-4">Polityka prywatności</h2>

  <div className="space-y-4 text-estate-600">
    <h3 className="text-xl font-semibold">1. Informacje ogólne</h3>
    <p>
      Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z usług oferowanych przez stronę Marka Głowackiego.
    </p>

    <h3 className="text-xl font-semibold mt-6">2. Administrator danych</h3>
    <p>
      Administratorem danych osobowych jest Marek Głowacki, osoba fizyczna, z siedzibą w Białej Podlaskiej.
    </p>

    <h3 className="text-xl font-semibold mt-6">3. Cel przetwarzania danych</h3>
    <p>
      Dane osobowe Użytkowników przetwarzane są w celu:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Realizacji usług świadczonych przez Administratora</li>
      <li>Komunikacji z Użytkownikiem</li>
      <li>Marketingu własnych usług Administratora</li>
      <li>Wypełnienia obowiązków prawnych ciążących na Administratorze</li>
      <li>Analizy ruchu na stronie oraz poprawy jej funkcjonalności</li>
    </ul>

    <h3 className="text-xl font-semibold mt-6">4. Zakres przetwarzanych danych</h3>
    <p>
      Administrator przetwarza następujące dane osobowe Użytkowników:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Imię i nazwisko</li>
      <li>Adres e-mail</li>
      <li>Numer telefonu</li>
      <li>Adres IP</li>
    </ul>

    <h3 className="text-xl font-semibold mt-6">5. Podstawa prawna przetwarzania danych</h3>
    <p>
      Dane osobowe Użytkowników przetwarzane są na podstawie:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Zgody Użytkownika (art. 6 ust. 1 lit. a RODO)</li>
      <li>Niezbędności do wykonania umowy (art. 6 ust. 1 lit. b RODO)</li>
      <li>Obowiązku prawnego ciążącego na Administratorze (art. 6 ust. 1 lit. c RODO)</li>
      <li>Prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO)</li>
    </ul>

    <h3 className="text-xl font-semibold mt-6">6. Prawa Użytkownika</h3>
    <p>
      Użytkownik ma prawo do:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Dostępu do swoich danych osobowych</li>
      <li>Sprostowania swoich danych osobowych</li>
      <li>Usunięcia swoich danych osobowych</li>
      <li>Ograniczenia przetwarzania swoich danych osobowych</li>
      <li>Przenoszenia swoich danych osobowych</li>
      <li>Wniesienia sprzeciwu wobec przetwarzania swoich danych osobowych</li>
      <li>Wniesienia skargi do organu nadzorczego</li>
    </ul>

    <h3 className="text-xl font-semibold mt-6">7. Przekazywanie danych</h3>
    <p>
      Dane osobowe Użytkowników mogą być udostępniane podmiotom trzecim wyłącznie w zakresie niezbędnym do realizacji celów przetwarzania, takim jak dostawcy usług IT, firmy hostingowe czy podmioty świadczące usługi księgowe.
    </p>

    <h3 className="text-xl font-semibold mt-6">8. Okres przechowywania danych</h3>
    <p>
      Dane osobowe Użytkowników przechowywane są przez okres niezbędny do realizacji celów, dla których zostały zebrane, a po ich zakończeniu przez okres wymagany przepisami prawa lub dla zabezpieczenia ewentualnych roszczeń. W przypadku przetwarzania danych na podstawie zgody, dane będą przechowywane do momentu jej cofnięcia.
    </p>

    <h3 className="text-xl font-semibold mt-6">9. Zabezpieczenia danych</h3>
    <p>
      Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę przetwarzanych danych osobowych, w szczególności zabezpieczające przed dostępem osób nieuprawnionych. Wszelkie dane osobowe są przechowywane w zabezpieczonych systemach informatycznych oraz są chronione przed nieautoryzowanym dostępem.
    </p>

    <h3 className="text-xl font-semibold mt-6">10. Zautomatyzowane podejmowanie decyzji</h3>
    <p>
      Serwis nie stosuje zautomatyzowanego podejmowania decyzji, w tym profilowania, które mogłoby wywołać skutki prawne dla Użytkowników lub w podobny sposób istotnie ich dotknąć.
    </p>

    <h3 className="text-xl font-semibold mt-6">11. Pliki cookies</h3>
    <p>
      Serwis wykorzystuje pliki cookies w celu zapewnienia jego prawidłowego działania oraz analizy ruchu na stronie. Użytkownik ma możliwość zarządzania plikami cookies w ustawieniach swojej przeglądarki.
    </p>

    <h3 className="text-xl font-semibold mt-6">12. Zmiany w Polityce Prywatności</h3>
    <p>
      Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. Zmiany te będą publikowane na stronie Serwisu i wchodzą w życie z dniem ich opublikowania. Użytkownicy będą informowani o istotnych zmianach w Polityce Prywatności poprzez zamieszczenie stosownej informacji na stronie Serwisu.
    </p>
  </div>
</TabsContent>


            
<TabsContent value="cookies" className="space-y-6">
  <h2 className="text-2xl font-semibold mb-4">Polityka cookies</h2>

  <div className="space-y-4 text-estate-600">
    <h3 className="text-xl font-semibold">1. Czym są pliki cookies?</h3>
    <p>
      Pliki cookies (tzw. "ciasteczka") to niewielkie pliki tekstowe, które są zapisywane na urządzeniu końcowym Użytkownika podczas korzystania ze strony internetowej. Pliki te zawierają informacje, które są niezbędne do prawidłowego funkcjonowania strony.
    </p>

    <h3 className="text-xl font-semibold mt-6">2. Rodzaje plików cookies</h3>
    <p>
      Na stronie wykorzystywane są następujące rodzaje plików cookies:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>Cookies niezbędne</strong> - pliki cookies, które są niezbędne do prawidłowego funkcjonowania strony.</li>
      <li><strong>Cookies funkcjonalne</strong> - pliki cookies, które zapamiętują preferencje Użytkownika.</li>
      <li><strong>Cookies analityczne</strong> - pliki cookies, które zbierają informacje o sposobie korzystania ze strony.</li>
      <li><strong>Cookies marketingowe</strong> - pliki cookies, które są wykorzystywane do wyświetlania reklam.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-6">3. Cel wykorzystywania plików cookies</h3>
    <p>
      Pliki cookies są wykorzystywane w celu:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Zapewnienia prawidłowego funkcjonowania strony.</li>
      <li>Dostosowania strony do preferencji Użytkownika.</li>
      <li>Analizy sposobu korzystania ze strony.</li>
      <li>Wyświetlania reklam dostosowanych do preferencji Użytkownika.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-6">4. Podstawa prawna przetwarzania danych</h3>
    <p>
      Przetwarzanie danych za pomocą plików cookies odbywa się na podstawie przepisów RODO (Rozporządzenie o Ochronie Danych Osobowych) oraz ustawy Prawo telekomunikacyjne. Użytkownik wyraża zgodę na przetwarzanie danych osobowych w związku z używaniem plików cookies.
    </p>

    <h3 className="text-xl font-semibold mt-6">5. Informacja o możliwości wycofania zgody</h3>
    <p>
      Użytkownik ma prawo do wycofania zgody na stosowanie plików cookies w dowolnym momencie. Można to zrobić poprzez zmianę ustawień przeglądarki internetowej lub poprzez skorzystanie z opcji dostępnych na stronie.
    </p>

    <h3 className="text-xl font-semibold mt-6">6. Szczegółowe informacje o plikach cookies stron trzecich</h3>
    <p>
      Na stronie mogą być wykorzystywane pliki cookies pochodzące od podmiotów trzecich, takich jak narzędzia analityczne i reklamowe. Pliki te są stosowane w celu analizy ruchu na stronie oraz dostosowywania reklam do preferencji Użytkownika. Szczegółowe informacje na temat tych plików cookies oraz ich celów można znaleźć w politykach prywatności tych podmiotów.
    </p>

    <h3 className="text-xl font-semibold mt-6">7. Czas przechowywania plików cookies</h3>
    <p>
      Czas przechowywania poszczególnych rodzajów plików cookies na urządzeniu Użytkownika może się różnić. Cookies sesyjne są usuwane po zamknięciu przeglądarki, natomiast cookies trwałe mogą być przechowywane przez określony czas, zazwyczaj od kilku dni do kilku lat, w zależności od ich rodzaju.
    </p>

    <h3 className="text-xl font-semibold mt-6">8. Informacja o przekazywaniu danych</h3>
    <p>
      Dane zbierane za pomocą plików cookies mogą być przekazywane innym podmiotom, takim jak dostawcy usług analitycznych i reklamowych. Przekazywanie danych odbywa się w celu analizy oraz dostosowywania treści reklamowych. Kategorie tych podmiotów oraz cele przekazania danych są opisane w ich politykach prywatności.
    </p>

    <h3 className="text-xl font-semibold mt-6">9. Zarządzanie plikami cookies</h3>
    <p>
      Użytkownik może w każdej chwili zmienić ustawienia przeglądarki dotyczące plików cookies. Brak zmiany tych ustawień oznacza akceptację dla stosowanych tu plików cookies.
    </p>
    <p>
      Poniżej znajdują się linki do informacji, jak zarządzać plikami cookies w najpopularniejszych przeglądarkach:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li><a href="https://support.google.com/chrome/answer/95647?hl=pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Chrome</a></li>
      <li><a href="https://support.mozilla.org/pl/kb/ciasteczka" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox</a></li>
      <li><a href="https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-cookie-w-przegl%C4%85darce-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</a></li>
      <li><a href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Safari</a></li>
    </ul>

    <h3 className="text-xl font-semibold mt-6">10. Aktualizacja polityki cookies</h3>
    <p>
      Zastrzegamy sobie prawo do wprowadzania zmian w polityce cookies. O wszelkich zmianach będziemy informować Użytkowników poprzez zamieszczenie aktualnej wersji polityki na stronie. Zachęcamy do regularnego zapoznawania się z polityką cookies.
    </p>
  </div>
</TabsContent>


          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalTerms;
