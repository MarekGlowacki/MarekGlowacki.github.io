
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

// Schemat walidacji email
const emailSchema = z.object({
  email: z.string().email("Proszę podać poprawny adres email")
});

const NewsletterForm = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
  );
};

export default NewsletterForm;
