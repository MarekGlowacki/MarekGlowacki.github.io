import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { EmailEditor } from "@/components/email/EmailEditor";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { PasswordProtection } from "@/components/PasswordProtection";

const EmailComposer = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = "email musi byc komponowany";
  
  const handleSendEmail = async (data: { 
    to: string; 
    subject: string; 
    content: string;
    replyTo?: string;
    attachments?: File[];
  }) => {
    setIsSending(true);
    
    try {
      // Clean up the content to prevent extra linebreaks
      const cleanedContent = data.content
        .replace(/<p><br><\/p>/g, '<p></p>')
        .replace(/<br><br>/g, '<br>');
      
      // Przygotuj dane do wysłania
      const formData = new FormData();
      formData.append('to', data.to);
      formData.append('subject', data.subject);
      formData.append('content', cleanedContent);
      
      if (data.replyTo) {
        formData.append('replyTo', data.replyTo);
      }
      
      // Dodaj załączniki, jeśli istnieją
      if (data.attachments && data.attachments.length > 0) {
        data.attachments.forEach((file, index) => {
          // Dodanie nazwy pliku do załącznika jest kluczowe dla poprawnego przetwarzania
          formData.append(`attachment${index}`, file, file.name);
          console.log(`Dodano załącznik ${index}: ${file.name}, rozmiar: ${file.size} bajtów`);
        });
      }
      
      console.log("Wysyłanie żądania do edge function", {
        to: data.to,
        subject: data.subject,
        hasAttachments: data.attachments ? data.attachments.length > 0 : false,
        attachmentsCount: data.attachments ? data.attachments.length : 0
      });

      // Use a hardcoded Supabase URL since we can't access the protected properties
      // This is the same URL that was configured in the client.ts file
      const supabaseUrl = "https://nvtxqityoyksixawlmzz.supabase.co";
      // Use the anon key from the client
      const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52dHhxaXR5b3lrc2l4YXdsbXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMTc3MjAsImV4cCI6MjA1NTc5MzcyMH0.5pDexd_iTa5l_YLGTYq18QzQk4TR4wWhycfkx_eyP0U";
      
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
          
          {isAuthenticated ? (
            <EmailEditor onSendEmail={handleSendEmail} isSending={isSending} />
          ) : (
            <PasswordProtection 
              correctPassword={correctPassword} 
              onSuccess={() => setIsAuthenticated(true)} 
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmailComposer;
