
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Typ dla obiektu Facebook Pixel
interface FacebookPixelType {
  init: (pixelId: string, advancedMatching?: object, options?: object) => void;
  pageView: () => void;
  track: (event: string, data?: object) => void;
}

// Deklaracja dla globalnego obiektu fbq
declare global {
  interface Window {
    fbq: FacebookPixelType;
    _fbq: any;
  }
}

// ID piksela Facebooka - w praktyce należy zastąpić prawdziwym ID
const FACEBOOK_PIXEL_ID = "123456789012345";

const FacebookPixel = () => {
  const location = useLocation();

  useEffect(() => {
    // Inicjalizacja kodu piksela Facebook
    if (!window.fbq) {
      window.fbq = function() {
        (window.fbq as any).callMethod 
          ? (window.fbq as any).callMethod.apply(window.fbq, arguments) 
          : (window.fbq as any).queue.push(arguments);
      };
      
      if (!window._fbq) window._fbq = window.fbq;
      
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = '2.0';
      window.fbq.queue = [];
    }

    // Wstaw skrypt piksela Facebook
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    // Inicjalizacja piksela
    window.fbq('init', FACEBOOK_PIXEL_ID);
    
    // Wywołanie pierwszego PageView
    window.fbq('track', 'PageView');

    // Funkcja czyszcząca
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Rejestruj PageView przy każdej zmianie ścieżki
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location.pathname]);

  return null;
};

export default FacebookPixel;
