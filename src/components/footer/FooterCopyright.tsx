
import { Link } from "react-router-dom";

interface FooterCopyrightProps {
  resetCookieConsent: () => void;
}

const FooterCopyright = ({ resetCookieConsent }: FooterCopyrightProps) => {
  return (
    <div className="text-center">
      <p className="text-white/90">&copy; {new Date().getFullYear()} Marek Głowacki. Wszelkie prawa zastrzeżone.</p>
      <p className="text-white/90 mt-2">
        <Link to="/legal" className="hover:text-white transition-colors">Regulamin</Link> | 
        <Link to="/legal?tab=privacy" className="hover:text-white transition-colors ml-2">Polityka prywatności</Link> | 
        <Link to="/legal?tab=cookies" className="hover:text-white transition-colors ml-2">Cookies</Link>
        <button 
          onClick={resetCookieConsent} 
          className="ml-2 underline hover:text-white transition-colors text-white/90"
        >
          Zarządzaj cookies
        </button>
      </p>
    </div>
  );
};

export default FooterCopyright;
