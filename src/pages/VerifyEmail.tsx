
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const token = searchParams.get("token");
  const type = searchParams.get("type");
  const application = searchParams.get("application");
  
  console.log("URL parameters:", { token, type, application });
  
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
      invalidType: "Nieprawidłowy typ weryfikacji."
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
      invalidType: "Invalid verification type."
    }
  };

  const c = language === "pl" ? content.pl : content.en;
  
  useEffect(() => {
    const verifyEmail = async () => {
      if (!token || !type) {
        setError(c.errorInvalidToken);
        setIsLoading(false);
        console.error("Token or type is missing in URL params");
        return;
      }
      
      try {
        setIsLoading(true);
        console.log("Starting verification process");
        
        let table;
        if (type === 'newsletter') {
          table = 'newsletter_subscribers';
        } else if (type === 'waiting_list') {
          table = 'waiting_list';
        } else {
          setError(c.invalidType);
          setIsLoading(false);
          console.error("Invalid verification type:", type);
          return;
        }
        
        console.log(`Looking for record in table: ${table} with token: ${token}`);
        
        // Znajdź rekord z podanym tokenem
        const { data, error } = await supabase
          .from(table)
          .select('*')
          .eq('verification_token', token)
          .maybeSingle();
        
        if (error) {
          console.error("Supabase error:", error);
          throw error;
        }
        
        if (!data) {
          console.error("No record found with token:", token);
          setError(c.errorInvalidToken);
          setIsLoading(false);
          return;
        }
        
        console.log("Record found:", data);
        
        // Aktualizuj rekord jako zweryfikowany
        const { error: updateError } = await supabase
          .from(table)
          .update({ 
            is_verified: true,
            verification_token: null
          })
          .eq('verification_token', token);
        
        if (updateError) {
          console.error("Update error:", updateError);
          throw updateError;
        }
        
        console.log("Record updated successfully");
        setIsVerified(true);
        
        // Wyświetl powiadomienie o sukcesie
        toast({
          title: c.success,
          description: type === 'newsletter' ? c.newsletterSuccess : c.waitingListSuccess,
        });
      } catch (error) {
        console.error("Verification error:", error);
        setError(c.error);
      } finally {
        setIsLoading(false);
      }
    };
    
    verifyEmail();
  }, [token, type, c, toast, application]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-32">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h1 className="text-4xl font-display text-estate-800 mb-8">{c.title}</h1>
          
          {isLoading ? (
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VerifyEmail;
