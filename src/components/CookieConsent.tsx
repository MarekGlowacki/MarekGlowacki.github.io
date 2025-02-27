
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  
  const content = {
    pl: {
      title: "Polityka cookies",
      description: "Używamy plików cookie, aby zapewnić najlepsze wrażenia podczas korzystania z naszej strony internetowej. Klikając \"Akceptuj wszystkie\", zgadzasz się na użycie wszystkich plików cookie. Możesz także wybrać \"Tylko niezbędne\", aby zezwolić tylko na niezbędne pliki cookie.",
      more: "Więcej informacji w naszej",
      policy: "Polityce Cookies",
      necessary: "Tylko niezbędne",
      acceptAll: "Akceptuj wszystkie",
      close: "Zamknij"
    },
    en: {
      title: "Cookie Policy",
      description: "We use cookies to ensure the best experience when using our website. By clicking \"Accept all\", you agree to the use of all cookies. You can also choose \"Only necessary\" to allow only essential cookies.",
      more: "Find more information in our",
      policy: "Cookie Policy",
      necessary: "Only necessary",
      acceptAll: "Accept all",
      close: "Close"
    }
  };

  // Wybierz odpowiednią wersję językową
  const c = language === "pl" ? content.pl : content.en;

  useEffect(() => {
    // Sprawdź, czy użytkownik już zaakceptował ciasteczka
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Jeśli nie, pokaż banner po krótkim opóźnieniu
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookieConsent", "necessary");
    setIsVisible(false);
  };

  const closeConsent = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200 p-4 md:p-6 animate-fade-in-up">
      <button
        onClick={closeConsent}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        aria-label={c.close}
      >
        <X size={20} />
      </button>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {c.description}
            </p>
            <div className="text-xs text-gray-500">
              {c.more}{" "}
              <Link to="/legal?tab=cookies" className="text-[#49be25] hover:underline">
                {c.policy}
              </Link>.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={acceptNecessary}
              variant="outline"
              className="border-[#49be25] text-[#49be25] hover:bg-[#f0ffe8]"
            >
              {c.necessary}
            </Button>
            <Button
              onClick={acceptAll}
              className="bg-[#49be25] text-white hover:bg-[#3da51e]"
            >
              {c.acceptAll}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
