
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface FooterCopyrightProps {
  resetCookieConsent: () => void;
}

const FooterCopyright = ({ resetCookieConsent }: FooterCopyrightProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center">
      <p className="text-white/90">&copy; {new Date().getFullYear()} Marek Głowacki. {t("footer.rights")}</p>
      <p className="text-white/90 mt-2">
        <Link to="/legal" className="hover:text-white transition-colors">{t("footer.terms")}</Link> | 
        <Link to="/legal?tab=privacy" className="hover:text-white transition-colors ml-2">{t("footer.privacy")}</Link> | 
        <Link to="/legal?tab=cookies" className="hover:text-white transition-colors ml-2">{t("footer.cookies")}</Link>
        <button 
          onClick={resetCookieConsent} 
          className="ml-2 underline hover:text-white transition-colors text-white/90"
        >
          {t("footer.cookies.manage")}
        </button>
      </p>
    </div>
  );
};

export default FooterCopyright;
