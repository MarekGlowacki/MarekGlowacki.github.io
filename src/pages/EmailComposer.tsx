
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { EmailEditor } from "@/components/email/EmailEditor";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

const EmailComposer = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);
  
  const handleSendEmail = async (data: { 
    to: string; 
    subject: string; 
    content: string;
    replyTo?: string;
    attachments?: File[];
  }) => {
    setIsSending(true);
    
    try {
      // Przygotuj dane do wysłania
      const formData = new FormData();
      formData.append('to', data.to);
      formData.append('subject', data.subject);
      formData.append('content', data.content);
      
      if (data.replyTo) {
        formData.append('replyTo', data.replyTo);
      }
      
      // Dodaj załączniki, jeśli istnieją
      if (data.attachments && data.attachments.length > 0) {
        data.attachments.forEach((file, index) => {
          formData.append(`attachment${index}`, file);
        });
      }
      
      // Bezpośrednie wywołanie funkcji Edge z FormData dla załączników
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-custom-email`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
          },
          body: formData
        }
      );
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Błąd wysyłania wiadomości');
      }
      
      toast({
        title: "Email wysłany pomyślnie",
        description: "Twoja wiadomość została wysłana.",
      });
      
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        variant: "destructive",
        title: "Błąd wysyłania",
        description: "Nie udało się wysłać wiadomości. Spróbuj ponownie później.",
      });
      return false;
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-5xl font-display text-estate-800 mb-8 text-center">Kompozytor Email</h1>
          <EmailEditor onSendEmail={handleSendEmail} isSending={isSending} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmailComposer;
