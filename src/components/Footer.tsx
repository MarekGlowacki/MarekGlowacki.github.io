
import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#49be25] text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-display text-xl mb-4">Marek Głowacki</h3>
            <p className="text-white/90">
              Jako programista tworzę innowacyjne rozwiązania technologiczne, które usprawniają procesy biznesowe i wspierają osiąganie celów firm. Dążę do doskonałości, łącząc pasję z technologią w każdym projekcie.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Usługi</h4>
            <ul className="space-y-2 text-white/90">
              <li><Link to="/services#web-apps" className="hover:text-white transition-colors transform hover:translate-x-2 inline-block">Tworzenie aplikacji internetowych</Link></li>
              <li><Link to="/services#ai" className="hover:text-white transition-colors transform hover:translate-x-2 inline-block">Szkolenia Sztucznej Inteligencji dla Firm</Link></li>
              <li><Link to="/services#bitcoin" className="hover:text-white transition-colors transform hover:translate-x-2 inline-block">Bitcoin Expert</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Odkryj mnie</h4>
            <ul className="space-y-2 text-white/90">
              <li><Link to="/about" className="hover:text-white transition-colors transform hover:translate-x-2 inline-block">O mnie</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors transform hover:translate-x-2 inline-block">Moja oferta</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors transform hover:translate-x-2 inline-block">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors transform hover:translate-x-2 inline-block">Kontakt</Link></li>
              <li><Link to="/legal" className="hover:text-white transition-colors transform hover:translate-x-2 inline-block">Polityka prywatności & Regulamin</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-white/90">
              <li>
                <a href="mailto:kontakt@marekglowacki.pl" className="flex items-center gap-2 justify-center md:justify-start hover:text-white transition-colors">
                  <Mail className="w-4 h-4" /> kontakt@marekglowacki.pl
                </a>
              </li>
              <li>
                <a href="tel:+48514383545" className="flex items-center gap-2 justify-center md:justify-start hover:text-white transition-colors">
                  <Phone className="w-4 h-4" /> +48 514 383 545
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4" /> Biała Podlaska 21-500, Lubelskie
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Godziny pracy:</h5>
              <p className="text-white/90">Pon - Pt: 08:00 - 20:00</p>
              <p className="text-white/90">Sobota - Niedziela: Zamknięte</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://facebook.com/marekglowacki" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors transform hover:scale-110">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/marekglowacki" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors transform hover:scale-110">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://youtube.com/@marekglowacki" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors transform hover:scale-110">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/marekglowacki" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/marekglowacki" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <p className="text-white/90">&copy; {new Date().getFullYear()} Marek Głowacki. Wszelkie prawa zastrzeżone.</p>
          <p className="text-white/90 mt-2">
            <Link to="/legal" className="hover:text-white transition-colors">Regulamin</Link> | 
            <Link to="/legal?tab=privacy" className="hover:text-white transition-colors ml-2">Polityka prywatności</Link> | 
            <Link to="/legal?tab=cookies" className="hover:text-white transition-colors ml-2">Cookies</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
