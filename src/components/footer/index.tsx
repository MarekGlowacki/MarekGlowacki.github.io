
import { useState } from "react";
import FooterColumns from "./FooterColumns";
import NewsletterForm from "./NewsletterForm";
import SocialLinks from "./SocialLinks";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  // Funkcja do resetowania zgody na ciasteczka
  const resetCookieConsent = () => {
    localStorage.removeItem("cookieConsent");
    window.location.reload();
  };

  return (
    <footer className="bg-[#49be25] text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <FooterColumns />

        {/* Formularz zapisu na newsletter */}
        <div className="mt-12 pt-8 border-t border-white/20" id="newsletter">
          <NewsletterForm />
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <SocialLinks />
          <FooterCopyright resetCookieConsent={resetCookieConsent} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
