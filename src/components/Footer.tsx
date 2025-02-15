
import { Facebook, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-estate-800 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-display text-xl mb-4">Marek Głowacki</h3>
            <p className="text-estate-300">
              Zespół programistów tworzy innowacyjne rozwiązania technologiczne, które usprawniają procesy biznesowe i wspierają osiąganie celów firm. Dążymy do doskonałości, łącząc pasję z technologią w każdym projekcie.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Usługi</h4>
            <ul className="space-y-2 text-estate-300">
              <li><a href="#" className="hover:text-white transition-colors">Tworzenie aplikacji internetowych</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Szkolenia Sztucznej Inteligencji dla Firm</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bitcoin Expert</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Odkryj nas</h4>
            <ul className="space-y-2 text-estate-300">
              <li><a href="#" className="hover:text-white transition-colors">O mnie</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nasza oferta</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-estate-300">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-4 h-4" /> kontakt@marekglowacki.pl
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-4 h-4" /> +48 514 383 545
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4" /> Biała Podlaska 21-500, Lubelskie
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Godziny pracy:</h5>
              <p className="text-estate-300">Pon - Pt: 08:00 - 20:00</p>
              <p className="text-estate-300">Sobota - Niedziela: Zamknięte</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-estate-700 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-estate-300 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-estate-300 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-estate-300 hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
          <p className="text-estate-300">&copy; {new Date().getFullYear()} Marek Głowacki. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
