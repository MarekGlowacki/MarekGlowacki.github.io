
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const FooterColumns = () => {
  const { t } = useLanguage();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
      <div>
        <h3 className="font-display text-xl mb-4">Marek Głowacki</h3>
        <p className="text-white/90">
          {t("footer.about")}
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
        <ul className="space-y-2 text-white/90">
          <li><Link to="/services#web-apps" className="hover:text-white transition-colors transform hover:translate-x-2 inline-block">{t("footer.web")}</Link></li>
          <li><Link to="/services#ai" className="hover:text-white transition-colors transform hover:translate-x-2 inline-block">{t("footer.ai")}</Link></li>
          <li><Link to="/services#bitcoin" className="hover:text-white transition-colors transform hover:translate-x-2 inline-block">{t("footer.btc")}</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4">{t("footer.discover")}</h4>
        <ul className="space-y-2 text-white/90">
          <li><Link to="/about" className="hover:text-white transition-colors transform hover:translate-x-2 inline-block">{t("footer.about.link")}</Link></li>
          <li><Link to="/services" className="hover:text-white transition-colors transform hover:translate-x-2 inline-block">{t("footer.offer")}</Link></li>
          <li><Link to="/projects" className="hover:text-white transition-colors transform hover:translate-x-2 inline-block">{t("footer.portfolio")}</Link></li>
          <li><Link to="/contact" className="hover:text-white transition-colors transform hover:translate-x-2 inline-block">{t("footer.contact")}</Link></li>
          <li><Link to="/legal" className="hover:text-white transition-colors transform hover:translate-x-2 inline-block">{t("footer.legal")}</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4">{t("footer.contact.title")}</h4>
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
          <h5 className="font-semibold mb-2">{t("footer.hours")}</h5>
          <p className="text-white/90">{t("footer.weekdays")}</p>
          <p className="text-white/90">{t("footer.weekend")}</p>
        </div>
      </div>
    </div>
  );
};

export default FooterColumns;
