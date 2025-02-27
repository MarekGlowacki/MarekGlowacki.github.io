
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
                  1.1. Niniejszy regulamin określa zasady korzystania z usług oferowanych przez Marek Głowacki, prowadzącego działalność gospodarczą pod adresem Biała Podlaska 21-500, Lubelskie.
                </p>
                <p>
                  1.2. Korzystanie z usług oznacza akceptację niniejszego regulaminu.
                </p>
                
                <h3 className="text-xl font-semibold mt-6">§2. Definicje</h3>
                <p>
                  2.1. Usługodawca - Marek Głowacki, prowadzący działalność gospodarczą pod adresem Biała Podlaska 21-500, Lubelskie.
                </p>
                <p>
                  2.2. Usługobiorca - osoba fizyczna, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, korzystająca z usług Usługodawcy.
                </p>
                
                <h3 className="text-xl font-semibold mt-6">§3. Zakres usług</h3>
                <p>
                  3.1. Usługodawca świadczy usługi w zakresie tworzenia aplikacji internetowych, szkolenia z zakresu sztucznej inteligencji oraz doradztwa w zakresie kryptowalut Bitcoin.
                </p>
                <p>
                  3.2. Szczegółowy zakres usług jest każdorazowo ustalany indywidualnie z Usługobiorcą.
                </p>
                
                <h3 className="text-xl font-semibold mt-6">§4. Warunki świadczenia usług</h3>
                <p>
                  4.1. Usługodawca zobowiązuje się do świadczenia usług z należytą starannością.
                </p>
                <p>
                  4.2. Usługobiorca zobowiązuje się do współpracy z Usługodawcą w zakresie niezbędnym do prawidłowego wykonania usługi.
                </p>
                
                <h3 className="text-xl font-semibold mt-6">§5. Płatności</h3>
                <p>
                  5.1. Wysokość wynagrodzenia za świadczone usługi jest ustalana indywidualnie z Usługobiorcą.
                </p>
                <p>
                  5.2. Płatność za usługi następuje na podstawie faktury wystawionej przez Usługodawcę.
                </p>
                
                <h3 className="text-xl font-semibold mt-6">§6. Postanowienia końcowe</h3>
                <p>
                  6.1. W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa polskiego.
                </p>
                <p>
                  6.2. Wszelkie spory wynikające z niniejszego regulaminu będą rozstrzygane przez sąd właściwy dla siedziby Usługodawcy.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="privacy" className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Polityka prywatności</h2>
              
              <div className="space-y-4 text-estate-600">
                <h3 className="text-xl font-semibold">1. Informacje ogólne</h3>
                <p>
                  Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z usług oferowanych przez Marek Głowacki.
                </p>
                
                <h3 className="text-xl font-semibold mt-6">2. Administrator danych</h3>
                <p>
                  Administratorem danych osobowych jest Marek Głowacki, prowadzący działalność gospodarczą pod adresem Biała Podlaska 21-500, Lubelskie.
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
                  <li><strong>Cookies niezbędne</strong> - pliki cookies, które są niezbędne do prawidłowego funkcjonowania strony</li>
                  <li><strong>Cookies funkcjonalne</strong> - pliki cookies, które zapamiętują preferencje Użytkownika</li>
                  <li><strong>Cookies analityczne</strong> - pliki cookies, które zbierają informacje o sposobie korzystania ze strony</li>
                  <li><strong>Cookies marketingowe</strong> - pliki cookies, które są wykorzystywane do wyświetlania reklam</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6">3. Cel wykorzystywania plików cookies</h3>
                <p>
                  Pliki cookies są wykorzystywane w celu:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Zapewnienia prawidłowego funkcjonowania strony</li>
                  <li>Dostosowania strony do preferencji Użytkownika</li>
                  <li>Analizy sposobu korzystania ze strony</li>
                  <li>Wyświetlania reklam dostosowanych do preferencji Użytkownika</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6">4. Zarządzanie plikami cookies</h3>
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
