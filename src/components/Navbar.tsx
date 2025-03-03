
import { Menu, Mail, Phone, Facebook, Twitter, Youtube, Linkedin, Github, Globe, Edit3 } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  
  // Funkcja do przełączania języka
  const toggleLanguage = () => {
    setLanguage(language === "pl" ? "en" : "pl");
  };

  // Funkcja do przewijania do sekcji newslettera
  const scrollToNewsletter = () => {
    const newsletterSection = document.getElementById('newsletter');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Jeśli nie jesteśmy na stronie głównej, przekieruj na główną z parametrem
      window.location.href = '/#newsletter';
    }
  };

  return (
    <>
      {/* Contact Info Bar */}
      <div className="bg-black py-2 w-full z-50">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a href="mailto:kontakt@marekglowacki.pl" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors whitespace-nowrap text-xs sm:text-sm">
              <Mail className="h-4 w-4" /> kontakt@marekglowacki.pl
            </a>
            <a href="tel:+48514383545" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors whitespace-nowrap text-xs sm:text-sm">
              <Phone className="h-4 w-4" /> +48 514 383 545
            </a>
            <Link to="/email-composer" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors whitespace-nowrap text-xs sm:text-sm">
              <Edit3 className="h-4 w-4" /> Email Composer
            </Link>
          </div>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <a href="https://facebook.com/marekglowacki" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://twitter.com/marekglowacki" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="https://youtube.com/@marekglowacki" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com/in/marekglowacki" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://github.com/marekglowacki" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-xl sm:text-2xl font-display text-estate-800">Marek Głowacki</Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-estate-600 hover:text-estate-800 transition-colors whitespace-nowrap">
                {t("navbar.about")}
              </Link>
              <Link to="/services" className="text-estate-600 hover:text-estate-800 transition-colors whitespace-nowrap">{t("navbar.services")}</Link>
              <Link to="/projects" className="text-estate-600 hover:text-estate-800 transition-colors whitespace-nowrap">{t("navbar.portfolio")}</Link>
              <Link to="/contact" className="text-estate-600 hover:text-estate-800 transition-colors whitespace-nowrap">{t("navbar.contact")}</Link>
              <Link to="/email-composer" className="text-estate-600 hover:text-estate-800 transition-colors whitespace-nowrap">
                <span className="flex items-center gap-1">
                  <Edit3 className="h-4 w-4" /> 
                  Email
                </span>
              </Link>
              <button 
                onClick={scrollToNewsletter} 
                className="text-estate-600 hover:text-estate-800 transition-colors whitespace-nowrap cursor-pointer"
              >
                {t("navbar.newsletter")}
              </button>
              <Button
                className="w-full bg-[#49be25] text-white hover:bg-[#3da51e]"
                onClick={() => (window.location.href = '/cv.html')}>
                {t("navbar.cv")}
              </Button>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-estate-600 hover:text-estate-800 transition-colors"
                aria-label={t("language.switch")}
                title={t("language.switch")}
              >
                <Globe className="h-4 w-4" />
                <span>{t("language")}</span>
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-estate-600 hover:text-estate-800 transition-colors"
                aria-label={t("language.switch")}
                title={t("language.switch")}
              >
                <Globe className="h-4 w-4" />
                <span>{t("language")}</span>
              </button>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    <Link to="/about" className="text-lg">{t("navbar.about")}</Link>
                    <Link to="/services" className="text-lg">{t("navbar.services")}</Link>
                    <Link to="/projects" className="text-lg">{t("navbar.portfolio")}</Link>
                    <Link to="/contact" className="text-lg">{t("navbar.contact")}</Link>
                    <Link to="/email-composer" className="text-lg flex items-center gap-2">
                      <Edit3 className="h-4 w-4" /> Email Composer
                    </Link>
                    <button 
                      onClick={() => {
                        scrollToNewsletter();
                        const sheetCloseButton = document.querySelector('[data-radix-collection-item]') as HTMLElement;
                        if (sheetCloseButton) sheetCloseButton.click();
                      }} 
                      className="text-lg text-left"
                    >
                      {t("navbar.newsletter")}
                    </button>
                    <Button
                      className="w-full bg-[#49be25] text-white hover:bg-[#3da51e]"
                      onClick={() => (window.location.href = '/cv.html')}>
                      {t("navbar.cv")}
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
