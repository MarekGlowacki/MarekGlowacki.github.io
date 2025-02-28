import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

// Schemat walidacji email
const emailSchema = z.object({
  email: z.string().email("Proszę podać poprawny adres email")
});

// Generowanie losowego tokenu weryfikacyjnego
const generateVerificationToken = () => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

const DCACryptoMonitor = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isCheckingDB, setIsCheckingDB] = useState(false);
  const [isVerificationSent, setIsVerificationSent] = useState(false);

  // Dodajemy efekt do logowania podczas montowania komponentu
  useEffect(() => {
    console.log("DCACryptoMonitor component mounted");
  }, []);

  const content = {
    pl: {
      title: "DCA Crypto Monitor",
      description: "Innowacyjna aplikacja do monitorowania i zarządzania strategią DCA (Dollar Cost Averaging) w inwestycjach kryptowalutowych. Projekt został stworzony z myślą o inwestorach, którzy chcą systematycznie budować swój portfel kryptowalutowy.",
      features: {
        title: "Główne funkcje:",
        items: [
          "Automatyczne śledzenie transakcji DCA",
          "Analiza średniej ceny zakupu",
          "Powiadomienia o planowanych zakupach",
          "Integracja z popularnymi giełdami crypto",
          "Raporty i statystyki inwestycji"
        ]
      },
      technologies: {
        title: "Technologie:",
        items: [
          "React & TypeScript",
          "Node.js & Express",
          "MongoDB",
          "WebSocket dla danych real-time",
          "Integracje API giełd kryptowalutowych"
        ]
      },
      demo: "Zobacz demo",
      subscribe: "Zapisz się na premierę",
      hideForm: "Ukryj formularz",
      formTitle: "Zapisz się na premierę",
      formDescription: "Bądź pierwszym, który uzyska dostęp do pełnej wersji DCA Crypto Monitor. Zapisz się na listę oczekujących i otrzymaj specjalne promocje na start!",
      emailPlaceholder: "Twój adres email",
      submitButton: "Zapisz mnie",
      checking: "Sprawdzanie...",
      sending: "Wysyłanie...",
      privacyNote: "Twoje dane są bezpieczne. Nie będziemy wysyłać spamu. W każdej chwili możesz wypisać się z listy.",
      emailExists: "Ten adres email już istnieje",
      emailExistsDesc: "Już jesteś na naszej liście oczekujących. Dziękujemy za zainteresowanie!",
      thankYou: "Dziękujemy za zapisanie się!",
      thankYouDesc: "Będziemy informować o postępach i promocjach związanych z DCA Crypto Monitor.",
      error: "Wystąpił błąd",
      errorDesc: "Nie udało się zapisać do listy oczekujących. Spróbuj ponownie później.",
      verificationSent: "Sprawdź swoją skrzynkę email",
      verificationSentDesc: "Wysłaliśmy link weryfikacyjny na podany adres email. Kliknij w link, aby potwierdzić swój adres i dokończyć proces rejestracji.",
      verificationSuccess: "Weryfikacja zakończona pomyślnie!",
      verificationSuccessDesc: "Twój adres email został pomyślnie zweryfikowany. Dziękujemy za dołączenie do naszej listy oczekujących!",
      backToForm: "Powrót do formularza"
    },
    en: {
      title: "DCA Crypto Monitor",
      description: "An innovative application for monitoring and managing DCA (Dollar Cost Averaging) strategy in cryptocurrency investments. The project was created for investors who want to systematically build their cryptocurrency portfolio.",
      features: {
        title: "Main features:",
        items: [
          "Automatic DCA transaction tracking",
          "Average purchase price analysis",
          "Notifications for planned purchases",
          "Integration with popular crypto exchanges",
          "Investment reports and statistics"
        ]
      },
      technologies: {
        title: "Technologies:",
        items: [
          "React & TypeScript",
          "Node.js & Express",
          "MongoDB",
          "WebSocket for real-time data",
          "Crypto exchange API integrations"
        ]
      },
      demo: "See demo",
      subscribe: "Sign up for launch",
      hideForm: "Hide form",
      formTitle: "Sign up for launch",
      formDescription: "Be the first to get access to the full version of DCA Crypto Monitor. Join the waiting list and receive special launch promotions!",
      emailPlaceholder: "Your email address",
      submitButton: "Sign me up",
      checking: "Checking...",
      sending: "Sending...",
      privacyNote: "Your data is secure. We won't send spam. You can unsubscribe from the list at any time.",
      emailExists: "This email already exists",
      emailExistsDesc: "You're already on our waiting list. Thank you for your interest!",
      thankYou: "Thank you for signing up!",
      thankYouDesc: "We will keep you informed about progress and promotions related to DCA Crypto Monitor.",
      error: "An error occurred",
      errorDesc: "Unable to sign up to the waiting list. Please try again later.",
      verificationSent: "Check your email",
      verificationSentDesc: "We've sent a verification link to your email address. Click the link to confirm your email and complete the registration process.",
      verificationSuccess: "Verification successful!",
      verificationSuccessDesc: "Your email has been successfully verified. Thank you for joining our waiting list!",
      backToForm: "Back to form"
    }
  };

  // Wybierz odpowiednią wersję językową
  const c = language === "pl" ? content.pl : content.en;

  const validateEmail = (email: string): boolean => {
    console.log("Validating email:", email);
    try {
      emailSchema.parse({ email });
      setEmailError(null);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setEmailError(error.errors[0].message);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with email:", email);
    
    if (!validateEmail(email)) {
      console.log("Email validation failed");
      return;
    }

    setIsSubmitting(true);
    setIsCheckingDB(true);
    
    try {
      // Sanityzacja adresu email
      const sanitizedEmail = email.trim().toLowerCase();
      console.log("Sanitized email:", sanitizedEmail);
      
      // Sprawdź czy adres email już istnieje
      console.log("Checking if email exists in the database...");
      const { data: existingEmail, error: checkError } = await supabase
        .from('waiting_list')
        .select('email, is_verified')
        .eq('email', sanitizedEmail)
        .maybeSingle();
      
      if (checkError) {
        console.error("Error checking email:", checkError);
        throw checkError;
      }
      
      setIsCheckingDB(false);
      
      if (existingEmail) {
        console.log("Email already exists:", existingEmail);
        
        if (existingEmail.is_verified) {
          toast({
            title: c.emailExists,
            description: c.emailExistsDesc,
          });
        } else {
          // Email istnieje, ale nie został zweryfikowany - wy��lij ponownie link weryfikacyjny
          const verificationToken = generateVerificationToken();
          
          const { error: updateError } = await supabase
            .from('waiting_list')
            .update({ verification_token: verificationToken })
            .eq('email', sanitizedEmail);
            
          if (updateError) throw updateError;
          
          // Wywołaj funkcję Edge do wysłania emaila weryfikacyjnego
          const { error: sendError } = await supabase.functions.invoke('send-verification-email', {
            body: { 
              email: sanitizedEmail, 
              token: verificationToken,
              type: 'waiting_list',
              application: 'dca-crypto-monitor'
            }
          });
          
          if (sendError) throw sendError;
          
          setIsVerificationSent(true);
          toast({
            title: c.verificationSent,
            description: c.verificationSentDesc,
          });
        }
        
        setIsSubmitting(false);
        return;
      }
      
      // Generuj token weryfikacyjny
      const verificationToken = generateVerificationToken();
      
      // Zapisz email do bazy danych
      console.log("Inserting email into the database...");
      const { error: insertError } = await supabase
        .from('waiting_list')
        .insert([{ 
          email: sanitizedEmail,
          application: 'dca-crypto-monitor',
          verification_token: verificationToken,
          is_verified: false
        }]);
      
      if (insertError) {
        console.error("Error inserting email:", insertError);
        throw insertError;
      }
      
      // Wywołaj funkcję Edge do wysłania emaila weryfikacyjnego
      const { error: sendError } = await supabase.functions.invoke('send-verification-email', {
        body: { 
          email: sanitizedEmail, 
          token: verificationToken,
          type: 'waiting_list',
          application: 'dca-crypto-monitor'
        }
      });
      
      if (sendError) throw sendError;
      
      console.log("Email successfully saved to the database");
      setIsVerificationSent(true);
      toast({
        title: c.verificationSent,
        description: c.verificationSentDesc,
      });
      
      // Wyczyść formularz
      setEmail("");
    } catch (error) {
      console.error('Error:', error);
      toast({
        variant: "destructive",
        title: c.error,
        description: c.errorDesc,
      });
    } finally {
      setIsSubmitting(false);
      setIsCheckingDB(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-5xl font-display text-estate-800 mb-6">{c.title}</h1>
              <p className="text-estate-600 mb-6">
                {c.description}
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">{c.features.title}</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    {c.features.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">{c.technologies.title}</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    {c.technologies.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <a href="https://gentle-klepon-d28eaf.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#49be25] text-white hover:bg-[#3da51e]">
                      {c.demo}
                    </Button>
                  </a>
                  <Button 
                    variant="outline" 
                    className="border-[#49be25] text-[#49be25] hover:bg-[#f0ffe8]"
                    onClick={() => setIsFormOpen(!isFormOpen)}
                  >
                    {isFormOpen ? c.hideForm : c.subscribe}
                  </Button>
                </div>
                
                {isFormOpen && !isVerificationSent && (
                  <div className="mt-4 bg-[#f0ffe8] p-6 rounded-lg border border-[#49be25]/30 animate-fadeIn">
                    <h3 className="text-xl font-display text-estate-800 mb-3">{c.formTitle}</h3>
                    <p className="text-estate-600 mb-4">
                      {c.formDescription}
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={c.emailPlaceholder}
                          className={`w-full p-3 border rounded ${emailError ? 'border-red-500' : 'border-gray-300'}`}
                          required
                        />
                        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-[#49be25] text-white hover:bg-[#3da51e]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                            {isCheckingDB ? c.checking : c.sending}
                          </span>
                        ) : c.submitButton}
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">
                        {c.privacyNote}
                      </p>
                    </form>
                  </div>
                )}
                
                {isFormOpen && isVerificationSent && (
                  <div className="mt-4 bg-[#f0ffe8] p-6 rounded-lg border border-[#49be25]/30 animate-fadeIn">
                    <h3 className="text-xl font-display text-estate-800 mb-3">{c.verificationSent}</h3>
                    <p className="text-estate-600 mb-6">
                      {c.verificationSentDesc}
                    </p>
                    <Button 
                      onClick={() => setIsVerificationSent(false)}
                      className="w-full bg-[#49be25] text-white hover:bg-[#3da51e]"
                    >
                      {c.backToForm}
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-8">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="DCA Crypto Monitor Dashboard"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
                  alt="Crypto Analytics"
                  className="rounded-lg shadow-lg w-full"
                />
                <img 
                  src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d"
                  alt="Portfolio Tracking"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DCACryptoMonitor;
