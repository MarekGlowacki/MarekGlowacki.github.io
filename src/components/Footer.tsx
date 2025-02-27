import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Schemat walidacji email
  const emailSchema = z.object({
    email: z.string().email("Proszę podać poprawny adres email")
  });

  // Funkcja do resetowania zgody na ciasteczka
  const resetCookieConsent = () => {
    localStorage.removeItem("cookieConsent");
    window.location.reload();
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Walidacja adresu email
      emailSchema.parse({ email });
      
      setIsSubmitting(true);
      
      // Sanityzacja adresu email
      const sanitizedEmail = email.trim().toLowerCase();
      
      // Sprawdź czy adres email już istnieje
      const { data: existingEmail } = await supabase
        .from('newsletter_subscribers')
        .select('email')
        .eq('email', sanitizedEmail)
        .maybeSingle();
      
      if (existingEmail) {
        toast({
          title: "Ten adres email już istnieje",
          description: "Już jesteś zapisany/a na nasz newsletter. Dziękujemy za zainteresowanie!",
        });
        setIsSubmitting(false);
        return;
      }
      
      // Zapisz email do nowej tabeli newsletter_subscribers
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ 
          email: sanitizedEmail
        }]);
      
      if (error) throw error;
      
      toast({
        title: "Dziękujemy za zapisanie się!",
        description: "Będziemy informować Cię o najnowszych aktualizacjach i ofertach.",
      });
      
      // Wyczyść formularz
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Niepoprawny adres email",
          description: "Proszę podać poprawny adres email.",
        });
      } else {
        console.error('Error:', error);
        toast({
          variant: "destructive",
          title: "Wystąpił błąd",
          description: "Nie udało się zapisać do newslettera. Spróbuj ponownie później.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Formularz zapisu na newsletter */}
        <div className="mt-12 pt-8 border-t border-white/20" id="newsletter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-display mb-2">Bądź na bieżąco</h3>
              <p className="text-white/90">
                Zapisz się na newsletter, aby otrzymywać informacje o nowościach, ofertach specjalnych i przydatnych poradach.
              </p>
            </div>
            <div>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Twój adres email"
                  className="px-4 py-3 rounded-md flex-1 text-black outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-white text-[#49be25] hover:bg-white/90 px-6 py-3 rounded-md font-medium transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Wysyłanie..." : "Zapisz się"}
                </Button>
              </form>
              <p className="mt-3 text-sm text-white/80 text-center sm:text-left">
                Twoje dane są bezpieczne. W każdej chwili możesz wypisać się z newslettera.
              </p>
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
            <button 
              onClick={resetCookieConsent} 
              className="ml-2 underline hover:text-white transition-colors text-white/90"
            >
              Zarządzaj cookies
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
