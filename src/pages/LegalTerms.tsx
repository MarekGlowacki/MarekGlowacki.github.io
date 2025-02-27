
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const LegalTerms = () => {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const tabFromUrl = searchParams.get("tab");
  
  const content = {
    pl: {
      title: "Informacje prawne",
      tabs: {
        terms: "Regulamin",
        privacy: "Polityka prywatności",
        cookies: "Polityka cookies"
      },
      terms: {
        title: "Regulamin",
        introduction: "Witaj w serwisie marekglowacki.pl. Niniejszy regulamin określa zasady korzystania z naszych usług.",
        points: [
          {
            title: "1. Postanowienia ogólne",
            content: "Właścicielem i administratorem serwisu jest Marek Głowacki. Serwis dostarcza informacje na temat usług oferowanych przez Marka Głowackiego w zakresie programowania, sztucznej inteligencji i Bitcoina."
          },
          {
            title: "2. Warunki korzystania",
            content: "Korzystanie z serwisu jest równoznaczne z akceptacją niniejszego regulaminu. Zabrania się wykorzystywania serwisu do celów niezgodnych z prawem."
          },
          {
            title: "3. Prawa autorskie",
            content: "Wszelkie treści umieszczone na stronie są chronione prawem autorskim i stanowią własność Marka Głowackiego lub firm trzecich. Kopiowanie i rozpowszechnianie tych treści bez zgody właściciela jest zabronione."
          },
          {
            title: "4. Odpowiedzialność",
            content: "Administrator dokłada wszelkich starań, aby informacje prezentowane na stronie były aktualne i rzetelne, jednak nie ponosi odpowiedzialności za ewentualne błędy lub nieścisłości."
          },
          {
            title: "5. Zmiany regulaminu",
            content: "Administrator zastrzega sobie prawo do zmiany niniejszego regulaminu w dowolnym czasie. Zmiany wchodzą w życie z chwilą ich opublikowania na stronie."
          }
        ]
      },
      privacy: {
        title: "Polityka prywatności",
        introduction: "Ochrona prywatności użytkowników jest dla nas bardzo ważna. Poniżej przedstawiamy informacje dotyczące przetwarzania danych osobowych.",
        points: [
          {
            title: "1. Administrator danych",
            content: "Administratorem danych osobowych jest Marek Głowacki."
          },
          {
            title: "2. Zakres zbieranych danych",
            content: "Zbieramy dane podane dobrowolnie przez użytkowników w formularzach kontaktowych lub zapisach na newsletter (imię, adres e-mail)."
          },
          {
            title: "3. Cel przetwarzania danych",
            content: "Dane są przetwarzane w celu udzielenia odpowiedzi na zapytania, realizacji usług oraz wysyłki informacji marketingowych (w przypadku wyrażenia zgody na newsletter)."
          },
          {
            title: "4. Prawa użytkowników",
            content: "Użytkownicy mają prawo dostępu do swoich danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania, a także prawo do wniesienia sprzeciwu oraz prawo do przenoszenia danych."
          },
          {
            title: "5. Okres przechowywania danych",
            content: "Dane przechowujemy przez okres niezbędny do realizacji celów, dla których zostały zebrane, a następnie przez okres wymagany przez przepisy prawa."
          }
        ]
      },
      cookies: {
        title: "Polityka cookies",
        introduction: "Nasza strona wykorzystuje pliki cookies w celu zapewnienia jej prawidłowego funkcjonowania i poprawy jakości usług.",
        points: [
          {
            title: "1. Czym są pliki cookies",
            content: "Cookies to małe pliki tekstowe przechowywane na urządzeniu użytkownika, które pomagają stronie zapamiętać ustawienia i preferencje."
          },
          {
            title: "2. Rodzaje wykorzystywanych cookies",
            content: "Wykorzystujemy cookies niezbędne (zapewniające podstawowe funkcje), funkcjonalne (zapamiętujące preferencje) oraz analityczne (pomagające zrozumieć zachowania użytkowników)."
          },
          {
            title: "3. Zarządzanie cookies",
            content: "Użytkownik może samodzielnie zarządzać ustawieniami cookies poprzez zmianę ustawień przeglądarki internetowej lub korzystając z opcji dostępnych w naszym banerze cookie."
          },
          {
            title: "4. Konsekwencje wyłączenia cookies",
            content: "Wyłączenie cookies może wpłynąć na działanie niektórych funkcji strony, jednak nie uniemożliwi przeglądania jej zawartości."
          },
          {
            title: "5. Aktualizacje polityki cookies",
            content: "Zastrzegamy sobie prawo do aktualizacji niniejszej polityki cookies w dowolnym momencie, o czym poinformujemy użytkowników poprzez stronę."
          }
        ]
      }
    },
    en: {
      title: "Legal Information",
      tabs: {
        terms: "Terms & Conditions",
        privacy: "Privacy Policy",
        cookies: "Cookie Policy"
      },
      terms: {
        title: "Terms & Conditions",
        introduction: "Welcome to marekglowacki.pl. These terms and conditions govern your use of our services.",
        points: [
          {
            title: "1. General Provisions",
            content: "The owner and administrator of the website is Marek Głowacki. The website provides information about services offered by Marek Głowacki in the fields of programming, artificial intelligence, and Bitcoin."
          },
          {
            title: "2. Terms of Use",
            content: "Using the website constitutes acceptance of these terms and conditions. It is prohibited to use the website for purposes that violate the law."
          },
          {
            title: "3. Copyright",
            content: "All content on the website is protected by copyright and is the property of Marek Głowacki or third parties. Copying and distributing this content without the owner's consent is prohibited."
          },
          {
            title: "4. Liability",
            content: "The administrator makes every effort to ensure that the information presented on the website is current and reliable, but is not responsible for any errors or inaccuracies."
          },
          {
            title: "5. Changes to Terms",
            content: "The administrator reserves the right to change these terms at any time. Changes take effect upon their publication on the website."
          }
        ]
      },
      privacy: {
        title: "Privacy Policy",
        introduction: "Protecting the privacy of our users is very important to us. Below we present information on the processing of personal data.",
        points: [
          {
            title: "1. Data Controller",
            content: "The controller of personal data is Marek Głowacki."
          },
          {
            title: "2. Scope of Collected Data",
            content: "We collect data voluntarily provided by users in contact forms or newsletter subscriptions (name, email address)."
          },
          {
            title: "3. Purpose of Data Processing",
            content: "Data is processed to respond to inquiries, provide services, and send marketing information (if consent for the newsletter has been given)."
          },
          {
            title: "4. User Rights",
            content: "Users have the right to access their data, correct it, delete it or limit its processing, as well as the right to object and the right to data portability."
          },
          {
            title: "5. Data Retention Period",
            content: "We store data for the period necessary to achieve the purposes for which it was collected, and then for the period required by law."
          }
        ]
      },
      cookies: {
        title: "Cookie Policy",
        introduction: "Our website uses cookies to ensure its proper functioning and improve the quality of services.",
        points: [
          {
            title: "1. What Are Cookies",
            content: "Cookies are small text files stored on the user's device that help the website remember settings and preferences."
          },
          {
            title: "2. Types of Cookies Used",
            content: "We use necessary cookies (providing basic functions), functional cookies (remembering preferences) and analytical cookies (helping to understand user behavior)."
          },
          {
            title: "3. Cookie Management",
            content: "Users can manage cookie settings by changing browser settings or using the options available in our cookie banner."
          },
          {
            title: "4. Consequences of Disabling Cookies",
            content: "Disabling cookies may affect the functioning of some website features, but will not prevent browsing its content."
          },
          {
            title: "5. Cookie Policy Updates",
            content: "We reserve the right to update this cookie policy at any time, which we will inform users about through the website."
          }
        ]
      }
    }
  };

  // Wybierz odpowiednią wersję językową
  const c = language === "pl" ? content.pl : content.en;

  // Ustaw aktywną zakładkę na podstawie parametru URL
  useEffect(() => {
    const validTabs = ["terms", "privacy", "cookies"];
    if (tabFromUrl && validTabs.includes(tabFromUrl)) {
      const tabTrigger = document.querySelector(`[data-state="inactive"][data-value="${tabFromUrl}"]`) as HTMLButtonElement;
      if (tabTrigger) {
        tabTrigger.click();
      }
    }
  }, [tabFromUrl]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-display text-estate-800 mb-8 text-center">{c.title}</h1>
          
          <Tabs defaultValue="terms" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="terms">{c.tabs.terms}</TabsTrigger>
              <TabsTrigger value="privacy">{c.tabs.privacy}</TabsTrigger>
              <TabsTrigger value="cookies">{c.tabs.cookies}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="terms" className="space-y-6">
              <h2 className="text-2xl font-display text-estate-800 mb-4">{c.terms.title}</h2>
              <p className="text-estate-600 mb-6">{c.terms.introduction}</p>
              
              <div className="space-y-6">
                {c.terms.points.map((point, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-display text-estate-800 mb-2">{point.title}</h3>
                    <p className="text-estate-600">{point.content}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="privacy" className="space-y-6">
              <h2 className="text-2xl font-display text-estate-800 mb-4">{c.privacy.title}</h2>
              <p className="text-estate-600 mb-6">{c.privacy.introduction}</p>
              
              <div className="space-y-6">
                {c.privacy.points.map((point, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-display text-estate-800 mb-2">{point.title}</h3>
                    <p className="text-estate-600">{point.content}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cookies" className="space-y-6">
              <h2 className="text-2xl font-display text-estate-800 mb-4">{c.cookies.title}</h2>
              <p className="text-estate-600 mb-6">{c.cookies.introduction}</p>
              
              <div className="space-y-6">
                {c.cookies.points.map((point, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-display text-estate-800 mb-2">{point.title}</h3>
                    <p className="text-estate-600">{point.content}</p>
                  </div>
                ))}
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
