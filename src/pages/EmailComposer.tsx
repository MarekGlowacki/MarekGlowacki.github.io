
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
      
      console.log("Wysyłanie żądania do edge function", {
        to: data.to,
        subject: data.subject,
        hasAttachments: data.attachments ? data.attachments.length > 0 : false
      });

      // Get Supabase URL and key from the client instance, which is safer than direct env access
      const supabaseUrl = supabase.supabaseUrl;
      const supabaseKey = supabase.supabaseKey;
      
      if (!supabaseUrl) {
        throw new Error('Błąd: Adres URL Supabase jest niedostępny');
      }

      if (!supabaseKey) {
        throw new Error('Błąd: Klucz Supabase jest niedostępny');
      }

      // Ensure the URL is properly formatted
      const edgeFunctionUrl = `${supabaseUrl}/functions/v1/send-custom-email`;
      
      console.log("Using edge function URL:", edgeFunctionUrl);

      // Bezpośrednie wywołanie funkcji Edge z FormData dla załączników
      const response = await fetch(
        edgeFunctionUrl,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${supabaseKey}`
          },
          body: formData
        }
      );
      
      if (!response.ok) {
        let errorMessage = 'Błąd wysyłania wiadomości';
        try {
          const errorData = await response.json();
          console.error('Error response from server:', errorData);
          errorMessage = errorData.error || errorMessage;
        } catch (jsonError) {
          console.error('Failed to parse error response:', response.status, response.statusText);
          errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }

      let result;
      try {
        result = await response.json();
        console.log('Email sent successfully, server response:', result);
      } catch (jsonError) {
        console.error('Failed to parse success response:', jsonError);
        throw new Error('Invalid response from server');
      }
      
      toast({
        title: "Email wysłany pomyślnie",
        description: "Twoja wiadomość została wysłana.",
      });
      
      return true;
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        variant: "destructive",
        title: "Błąd wysyłania",
        description: error.message || "Nie udało się wysłać wiadomości. Spróbuj ponownie później.",
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
