
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Właściwa deklaracja typów dla Facebook Pixel
declare global {
  interface Window {
    fbq: any;
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
        // @ts-ignore - obchodzimy typowanie dla zachowania oryginalnej logiki
        window.fbq.callMethod ? 
          // @ts-ignore
          window.fbq.callMethod.apply(window.fbq, arguments) : 
          // @ts-ignore
          window.fbq.queue.push(arguments);
      };
      
      if (!window._fbq) window._fbq = window.fbq;
      
      // @ts-ignore - dynamicznie dodajemy właściwości do obiektu fbq
      window.fbq.push = window.fbq;
      // @ts-ignore
      window.fbq.loaded = true;
      // @ts-ignore
      window.fbq.version = '2.0';
      // @ts-ignore
      window.fbq.queue = [];
    }

    // Wstaw skrypt piksela Facebook
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    // Inicjalizacja piksela
    // @ts-ignore - pozwalamy na wywołanie fbq jako funkcji
    window.fbq('init', FACEBOOK_PIXEL_ID);
    
    // Wywołanie pierwszego PageView
    // @ts-ignore
    window.fbq('track', 'PageView');

    // Funkcja czyszcząca
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Rejestruj PageView przy każdej zmianie ścieżki
  useEffect(() => {
    if (window.fbq) {
      // @ts-ignore
      window.fbq('track', 'PageView');
    }
  }, [location.pathname]);

  return null;
};

export default FacebookPixel;
