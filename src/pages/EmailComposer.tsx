
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
  }) => {
    setIsSending(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-custom-email', {
        body: data
      });
      
      if (error) throw error;
      
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
