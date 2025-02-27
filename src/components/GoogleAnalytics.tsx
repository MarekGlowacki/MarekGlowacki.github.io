
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Deklaracja dla Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// ID śledzenia Google Analytics (zamień na właściwe ID)
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Inicjalizacja Google Analytics
    const loadGAScript = () => {
      // Jeśli skrypt już istnieje, nie dodawaj go ponownie
      if (document.querySelector(`script[src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`)) {
        return;
      }

      // Inicjalizuj dataLayer
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      
      // Ustaw pierwszą wartość timestamp
      window.gtag('js', new Date());
      
      // Konfiguracja
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search
      });

      // Dodaj tag skryptu Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);
    };

    loadGAScript();

    // Funkcja czyszcząca
    return () => {
      // Opcjonalnie usunięcie skryptu, często nie jest konieczne
    };
  }, []);

  // Śledź każdą zmianę strony
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search
      });
    }
  }, [location.pathname, location.search]);

  return null;
};

export default GoogleAnalytics;
