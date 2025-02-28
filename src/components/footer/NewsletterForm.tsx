
import { useState } from "react";
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

const NewsletterForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  
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
        .select('email, is_verified')
        .eq('email', sanitizedEmail)
        .maybeSingle();
      
      if (existingEmail) {
        if (existingEmail.is_verified) {
          toast({
            title: t("footer.newsletter.emailExists.title"),
            description: t("footer.newsletter.emailExists.desc"),
          });
        } else {
          // Email istnieje, ale nie został zweryfikowany - wyślij ponownie link weryfikacyjny
          const verificationToken = generateVerificationToken();
          
          const { error: updateError } = await supabase
            .from('newsletter_subscribers')
            .update({ verification_token: verificationToken })
            .eq('email', sanitizedEmail);
            
          if (updateError) throw updateError;
          
          // Wywołaj funkcję Edge do wysłania emaila weryfikacyjnego
          const { error: sendError } = await supabase.functions.invoke('send-verification-email', {
            body: { 
              email: sanitizedEmail, 
              token: verificationToken,
              type: 'newsletter'
            }
          });
          
          if (sendError) throw sendError;
          
          setIsVerificationSent(true);
          toast({
            title: t("footer.newsletter.verificationSent.title"),
            description: t("footer.newsletter.verificationSent.desc"),
          });
        }
        
        setIsSubmitting(false);
        return;
      }
      
      // Generuj token weryfikacyjny
      const verificationToken = generateVerificationToken();
      
      // Zapisz email do tabeli newsletter_subscribers z tokenem weryfikacyjnym
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ 
          email: sanitizedEmail,
          verification_token: verificationToken,
          is_verified: false
        }]);
      
      if (error) throw error;
      
      // Wywołaj funkcję Edge do wysłania emaila weryfikacyjnego
      const { error: sendError } = await supabase.functions.invoke('send-verification-email', {
        body: { 
          email: sanitizedEmail, 
          token: verificationToken,
          type: 'newsletter'
        }
      });
      
      if (sendError) throw sendError;
      
      setIsVerificationSent(true);
      toast({
        title: t("footer.newsletter.verificationSent.title"),
        description: t("footer.newsletter.verificationSent.desc"),
      });
      
      // Wyczyść formularz
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: t("footer.newsletter.invalidEmail.title"),
          description: t("footer.newsletter.invalidEmail.desc"),
        });
      } else {
        console.error('Error:', error);
        toast({
          variant: "destructive",
          title: t("footer.newsletter.error.title"),
          description: t("footer.newsletter.error.desc"),
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Pokaż komunikat potwierdzenia po wysłaniu linku weryfikacyjnego
  if (isVerificationSent) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-display mb-2">{t("footer.newsletter.verificationSent.title")}</h3>
          <p className="text-white/90">
            {t("footer.newsletter.verificationSent.longDesc")}
          </p>
        </div>
        <div className="bg-white/10 p-6 rounded-lg text-center">
          <p className="text-white mb-4">{t("footer.newsletter.verificationSent.checkEmail")}</p>
          <Button 
            onClick={() => setIsVerificationSent(false)} 
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white/20"
          >
            {t("footer.newsletter.verificationSent.backToForm")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-display mb-2">{t("footer.newsletter.title")}</h3>
        <p className="text-white/90">
          {t("footer.newsletter.desc")}
        </p>
      </div>
      <div>
        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("footer.newsletter.email")}
            className="px-4 py-3 rounded-md flex-1 text-black outline-none focus:ring-2 focus:ring-white"
            required
          />
          <Button 
            type="submit" 
            className="bg-white text-[#49be25] hover:bg-white/90 px-6 py-3 rounded-md font-medium transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("footer.newsletter.submitting") : t("footer.newsletter.submit")}
          </Button>
        </form>
        <p className="mt-3 text-sm text-white/80 text-center sm:text-left">
          {t("footer.newsletter.privacy")}
        </p>
      </div>
    </div>
  );
};

export default NewsletterForm;
