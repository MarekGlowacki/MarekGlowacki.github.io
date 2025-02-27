
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

// Schemat walidacji email
const emailSchema = z.object({
  email: z.string().email("Proszę podać poprawny adres email")
});

const DCACryptoMonitor = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isCheckingDB, setIsCheckingDB] = useState(false);

  // Dodajemy efekt do logowania podczas montowania komponentu
  useEffect(() => {
    console.log("DCACryptoMonitor component mounted");
  }, []);

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
        .select('email')
        .eq('email', sanitizedEmail)
        .maybeSingle();
      
      if (checkError) {
        console.error("Error checking email:", checkError);
        throw checkError;
      }
      
      setIsCheckingDB(false);
      
      if (existingEmail) {
        console.log("Email already exists:", existingEmail);
        toast({
          title: "Ten adres email już istnieje",
          description: "Już jesteś na naszej liście oczekujących. Dziękujemy za zainteresowanie!",
        });
        setIsSubmitting(false);
        return;
      }
      
      // Zapisz email do bazy danych
      console.log("Inserting email into the database...");
      const { error: insertError } = await supabase
        .from('waiting_list')
        .insert([{ 
          email: sanitizedEmail,
          application: 'dca-crypto-monitor'
        }]);
      
      if (insertError) {
        console.error("Error inserting email:", insertError);
        throw insertError;
      }
      
      console.log("Email successfully saved to the database");
      toast({
        title: "Dziękujemy za zapisanie się!",
        description: "Będziemy informować o postępach i promocjach związanych z DCA Crypto Monitor.",
      });
      
      // Wyczyść formularz i zamknij go
      setEmail("");
      setIsFormOpen(false);
    } catch (error) {
      console.error('Error:', error);
      toast({
        variant: "destructive",
        title: "Wystąpił błąd",
        description: "Nie udało się zapisać do listy oczekujących. Spróbuj ponownie później.",
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
              <h1 className="text-5xl font-display text-estate-800 mb-6">DCA Crypto Monitor</h1>
              <p className="text-estate-600 mb-6">
                Innowacyjna aplikacja do monitorowania i zarządzania strategią DCA (Dollar Cost Averaging) 
                w inwestycjach kryptowalutowych. Projekt został stworzony z myślą o inwestorach, 
                którzy chcą systematycznie budować swój portfel kryptowalutowy.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Główne funkcje:</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    <li>Automatyczne śledzenie transakcji DCA</li>
                    <li>Analiza średniej ceny zakupu</li>
                    <li>Powiadomienia o planowanych zakupach</li>
                    <li>Integracja z popularnymi giełdami crypto</li>
                    <li>Raporty i statystyki inwestycji</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-display text-estate-800 mb-2">Technologie:</h3>
                  <ul className="list-disc list-inside text-estate-600 space-y-2">
                    <li>React & TypeScript</li>
                    <li>Node.js & Express</li>
                    <li>MongoDB</li>
                    <li>WebSocket dla danych real-time</li>
                    <li>Integracje API giełd kryptowalutowych</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <a href="https://gentle-klepon-d28eaf.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#49be25] text-white hover:bg-[#3da51e]">
                      Zobacz demo
                    </Button>
                  </a>
                  <Button 
                    variant="outline" 
                    className="border-[#49be25] text-[#49be25] hover:bg-[#f0ffe8]"
                    onClick={() => setIsFormOpen(!isFormOpen)}
                  >
                    {isFormOpen ? "Ukryj formularz" : "Zapisz się na premierę"}
                  </Button>
                </div>
                
                {isFormOpen && (
                  <div className="mt-4 bg-[#f0ffe8] p-6 rounded-lg border border-[#49be25]/30 animate-fadeIn">
                    <h3 className="text-xl font-display text-estate-800 mb-3">Zapisz się na premierę</h3>
                    <p className="text-estate-600 mb-4">
                      Bądź pierwszym, który uzyska dostęp do pełnej wersji DCA Crypto Monitor.
                      Zapisz się na listę oczekujących i otrzymaj specjalne promocje na start!
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Twój adres email"
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
                            {isCheckingDB ? "Sprawdzanie..." : "Wysyłanie..."}
                          </span>
                        ) : "Zapisz mnie"}
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">
                        Twoje dane są bezpieczne. Nie będziemy wysyłać spamu. 
                        W każdej chwili możesz wypisać się z listy.
                      </p>
                    </form>
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
