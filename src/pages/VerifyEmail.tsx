
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [resendingEmail, setResendingEmail] = useState(false);
  // Dodajemy nowy stan do kontroli, czy weryfikacja została już wykonana
  const [verificationDone, setVerificationDone] = useState(false);
  
  // Pobierz parametry z URL
  const token = searchParams.get("token");
  const type = searchParams.get("type");
  const application = searchParams.get("application");
  
  console.log("[VerifyEmail] URL parameters:", { token, type, application });
  
  const content = {
    pl: {
      title: "Weryfikacja adresu email",
      verifying: "Weryfikacja w toku...",
      success: "Weryfikacja zakończona pomyślnie!",
      successMessage: "Twój adres email został pomyślnie zweryfikowany. Dziękujemy!",
      newsletterSuccess: "Pomyślnie zapisałeś się do naszego newslettera!",
      waitingListSuccess: "Pomyślnie zapisałeś się na naszą listę oczekujących!",
      error: "Wystąpił błąd podczas weryfikacji",
      errorInvalidToken: "Nieprawidłowy lub wygasły token weryfikacyjny.",
      backToHome: "Wróć do strony głównej",
      invalidType: "Nieprawidłowy typ weryfikacji.",
      resendVerification: "Wyślij ponownie email weryfikacyjny",
      resendingVerification: "Wysyłanie...",
      resendSuccess: "Link weryfikacyjny został wysłany ponownie",
      resendError: "Nie udało się wysłać linku weryfikacyjnego",
      enterEmail: "Podaj swój adres email, aby wysłać ponownie link weryfikacyjny:",
      emailPlaceholder: "Twój adres email"
    },
    en: {
      title: "Email Verification",
      verifying: "Verification in progress...",
      success: "Verification successful!",
      successMessage: "Your email address has been successfully verified. Thank you!",
      newsletterSuccess: "You have successfully subscribed to our newsletter!",
      waitingListSuccess: "You have successfully joined our waiting list!",
      error: "An error occurred during verification",
      errorInvalidToken: "Invalid or expired verification token.",
      backToHome: "Back to homepage",
      invalidType: "Invalid verification type.",
      resendVerification: "Resend verification email",
      resendingVerification: "Sending...",
      resendSuccess: "Verification link has been resent",
      resendError: "Failed to resend verification link",
      enterEmail: "Enter your email to resend the verification link:",
      emailPlaceholder: "Your email address"
    }
  };

  const c = language === "pl" ? content.pl : content.en;
  
  // Generowanie losowego tokenu weryfikacyjnego
  const generateVerificationToken = () => {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  };
  
  // Funkcja do ponownego wysłania emaila weryfikacyjnego
  const handleResendVerification = async () => {
    if (!email) return;
    
    try {
      setResendingEmail(true);
      
      // Sprawdź, czy email istnieje w odpowiedniej tabeli
      if (type === 'newsletter') {
        const { data, error: checkError } = await supabase
          .from('newsletter_subscribers')
          .select('*')
          .eq('email', email.trim().toLowerCase())
          .maybeSingle();
        
        if (checkError) throw checkError;
        
        if (!data) {
          toast({
            variant: "destructive",
            title: c.error,
            description: "Podany adres email nie jest zarejestrowany.",
            duration: 8000, // Ustawienie długiego czasu wyświetlania
          });
          return;
        }
        
        // Generuj nowy token
        const verificationToken = generateVerificationToken();
        
        // Aktualizuj rekord z nowym tokenem
        const { error: updateError } = await supabase
          .from('newsletter_subscribers')
          .update({ verification_token: verificationToken })
          .eq('email', email.trim().toLowerCase());
        
        if (updateError) throw updateError;
        
        // Wywołaj funkcję Edge do wysłania emaila weryfikacyjnego
        const { error: sendError } = await supabase.functions.invoke('send-verification-email', {
          body: { 
            email: email.trim().toLowerCase(), 
            token: verificationToken,
            type: 'newsletter',
            application: application
          }
        });
        
        if (sendError) throw sendError;
      } else if (type === 'waiting_list') {
        const { data, error: checkError } = await supabase
          .from('waiting_list')
          .select('*')
          .eq('email', email.trim().toLowerCase())
          .maybeSingle();
        
        if (checkError) throw checkError;
        
        if (!data) {
          toast({
            variant: "destructive",
            title: c.error,
            description: "Podany adres email nie jest zarejestrowany.",
            duration: 8000, // Ustawienie długiego czasu wyświetlania
          });
          return;
        }
        
        // Generuj nowy token
        const verificationToken = generateVerificationToken();
        
        // Aktualizuj rekord z nowym tokenem
        const { error: updateError } = await supabase
          .from('waiting_list')
          .update({ verification_token: verificationToken })
          .eq('email', email.trim().toLowerCase());
        
        if (updateError) throw updateError;
        
        // Wywołaj funkcję Edge do wysłania emaila weryfikacyjnego
        const { error: sendError } = await supabase.functions.invoke('send-verification-email', {
          body: { 
            email: email.trim().toLowerCase(), 
            token: verificationToken,
            type: 'waiting_list',
            application: application
          }
        });
        
        if (sendError) throw sendError;
      }
      
      toast({
        title: c.success,
        description: c.resendSuccess,
        duration: 8000, // Ustawienie długiego czasu wyświetlania
      });
    } catch (error) {
      console.error("[VerifyEmail] Resend error:", error);
      toast({
        variant: "destructive",
        title: c.error,
        description: c.resendError,
        duration: 8000, // Ustawienie długiego czasu wyświetlania
      });
    } finally {
      setResendingEmail(false);
    }
  };
  
  useEffect(() => {
    // Uruchamiamy weryfikację tylko raz, gdy komponent się załaduje
    if (!verificationDone) {
      verifyEmail();
    }
    
    // Funkcja do weryfikacji emaila
    async function verifyEmail() {
      // Jeśli nie mamy tokenu, nie próbujemy weryfikować - tylko pokazujemy formularz ponownego wysyłania
      if (!token || !type) {
        setError(c.errorInvalidToken);
        setIsLoading(false);
        setVerificationDone(true);
        console.error("[VerifyEmail] Token or type is missing in URL params:", { token, type });
        return;
      }
      
      try {
        setIsLoading(true);
        console.log("[VerifyEmail] Starting verification process with parameters:", { token, type, application });
        
        if (type === 'newsletter') {
          // Znajdź rekord z podanym tokenem
          const { data, error } = await supabase
            .from('newsletter_subscribers')
            .select('*')
            .eq('verification_token', token)
            .maybeSingle();
          
          if (error) {
            console.error("[VerifyEmail] Supabase error:", error);
            throw error;
          }
          
          if (!data) {
            console.error("[VerifyEmail] No record found with token:", token);
            setError(c.errorInvalidToken);
            setIsLoading(false);
            setVerificationDone(true);
            return;
          }
          
          console.log("[VerifyEmail] Record found:", data);
          
          // Zapisz email do stanu, żeby użytkownik mógł ponownie wysłać weryfikację
          setEmail(data.email);
          
          // Aktualizuj rekord jako zweryfikowany
          const { error: updateError } = await supabase
            .from('newsletter_subscribers')
            .update({ 
              is_verified: true,
              verification_token: null
            })
            .eq('verification_token', token);
          
          if (updateError) {
            console.error("[VerifyEmail] Update error:", updateError);
            throw updateError;
          }
          
          console.log("[VerifyEmail] Record updated successfully");
          
          // Oznaczamy weryfikację jako zakończoną
          setVerificationDone(true);
          // Ustawiamy stan ładowania na false
          setIsLoading(false);
          // Ustawiamy stan weryfikacji na true
          setIsVerified(true);
          
          // Wyświetl powiadomienie o sukcesie (z dłuższym czasem wyświetlania)
          toast({
            title: c.success,
            description: c.newsletterSuccess,
            duration: 8000, // Ustawienie długiego czasu wyświetlania
          });
          
        } else if (type === 'waiting_list') {
          // Znajdź rekord z podanym tokenem
          const { data, error } = await supabase
            .from('waiting_list')
            .select('*')
            .eq('verification_token', token)
            .maybeSingle();
          
          if (error) {
            console.error("[VerifyEmail] Supabase error:", error);
            throw error;
          }
          
          if (!data) {
            console.error("[VerifyEmail] No record found with token:", token);
            setError(c.errorInvalidToken);
            setIsLoading(false);
            setVerificationDone(true);
            return;
          }
          
          console.log("[VerifyEmail] Record found:", data);
          
          // Zapisz email do stanu, żeby użytkownik mógł ponownie wysłać weryfikację
          setEmail(data.email);
          
          // Aktualizuj rekord jako zweryfikowany
          const { error: updateError } = await supabase
            .from('waiting_list')
            .update({ 
              is_verified: true,
              verification_token: null
            })
            .eq('verification_token', token);
          
          if (updateError) {
            console.error("[VerifyEmail] Update error:", updateError);
            throw updateError;
          }
          
          console.log("[VerifyEmail] Record updated successfully");
          
          // Oznaczamy weryfikację jako zakończoną
          setVerificationDone(true);
          // Ustawiamy stan ładowania na false
          setIsLoading(false);
          // Ustawiamy stan weryfikacji na true
          setIsVerified(true);
          
          // Wyświetl powiadomienie o sukcesie (z dłuższym czasem wyświetlania)
          toast({
            title: c.success,
            description: c.waitingListSuccess,
            duration: 8000, // Ustawienie długiego czasu wyświetlania
          });
          
        } else {
          setError(c.invalidType);
          setIsLoading(false);
          setVerificationDone(true);
          console.error("[VerifyEmail] Invalid verification type:", type);
          return;
        }
        
      } catch (error) {
        console.error("[VerifyEmail] Verification error:", error);
        setError(c.error);
        setVerificationDone(true);
        setIsLoading(false);
        
        // Wyświetl powiadomienie o błędzie (z dłuższym czasem wyświetlania)
        toast({
          variant: "destructive",
          title: c.error,
          description: String(error),
          duration: 8000, // Ustawienie długiego czasu wyświetlania
        });
      }
    }
  }, [token, type, application, c, toast, verificationDone]);

  // Formularz do ponownego wysłania emaila weryfikacyjnego
  const ResendForm = () => (
    <div className="mt-8 bg-[#f0ffe8] p-6 rounded-lg border border-[#49be25]/30">
      <h3 className="text-xl font-display text-estate-800 mb-3">{c.enterEmail}</h3>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email || ''}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={c.emailPlaceholder}
          className="px-4 py-3 rounded-md flex-1 border border-gray-300 outline-none focus:ring-2 focus:ring-[#49be25]"
          required
        />
        <Button 
          onClick={handleResendVerification}
          className="bg-[#49be25] text-white hover:bg-[#3da51e]"
          disabled={resendingEmail || !email}
        >
          {resendingEmail ? c.resendingVerification : c.resendVerification}
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-32">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h1 className="text-4xl font-display text-estate-800 mb-8">{c.title}</h1>
          
          {isLoading && !verificationDone ? (
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="animate-spin h-12 w-12 border-4 border-[#49be25] border-t-transparent rounded-full"></div>
              <p className="text-xl text-estate-600">{c.verifying}</p>
            </div>
          ) : isVerified ? (
            <div className="bg-[#f0ffe8] p-8 rounded-lg border border-[#49be25]/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#49be25] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h2 className="text-2xl font-display text-estate-800 mb-4">{c.success}</h2>
              <p className="text-estate-600 mb-6">{c.successMessage}</p>
              <p className="text-estate-600 mb-8">
                {type === 'newsletter' ? c.newsletterSuccess : c.waitingListSuccess}
              </p>
              <button 
                onClick={() => navigate('/')}
                className="bg-[#49be25] text-white hover:bg-[#3da51e] px-6 py-3 rounded-md font-medium transition-colors"
              >
                {c.backToHome}
              </button>
            </div>
          ) : (
            <div className="bg-red-50 p-8 rounded-lg border border-red-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-2xl font-display text-estate-800 mb-4">{c.error}</h2>
              <p className="text-estate-600 mb-8">{error}</p>
              <button 
                onClick={() => navigate('/')}
                className="bg-[#49be25] text-white hover:bg-[#3da51e] px-6 py-3 rounded-md font-medium transition-colors"
              >
                {c.backToHome}
              </button>
            </div>
          )}
          
          {/* Formularz ponownego wysyłania, jeśli weryfikacja nie powiodła się */}
          {verificationDone && !isLoading && !isVerified && <ResendForm />}

          {/* Diagnostyczne informacje (widoczne tylko w środowisku deweloperskim) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-8 p-4 bg-gray-100 rounded-lg text-left">
              <h3 className="font-bold mb-2">Diagnostyka (tylko dev):</h3>
              <div>
                <p><strong>Token:</strong> {token || 'brak'}</p>
                <p><strong>Typ:</strong> {type || 'brak'}</p>
                <p><strong>Aplikacja:</strong> {application || 'brak'}</p>
                <p><strong>Stan:</strong> {isLoading ? 'ładowanie' : isVerified ? 'zweryfikowano' : 'błąd'}</p>
                <p><strong>Email:</strong> {email || 'brak'}</p>
                <p><strong>Weryfikacja zakończona:</strong> {verificationDone ? 'tak' : 'nie'}</p>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VerifyEmail;
