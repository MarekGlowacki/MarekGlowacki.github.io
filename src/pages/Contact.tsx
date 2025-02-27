
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Shield } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

// Schemat walidacji formularza
const contactFormSchema = z.object({
  name: z.string().min(2, "Imię musi mieć co najmniej 2 znaki").max(100, "Imię nie może być dłuższe niż 100 znaków"),
  email: z.string().email("Proszę podać poprawny adres email"),
  subject: z.string().min(3, "Temat musi mieć co najmniej 3 znaki").max(150, "Temat nie może być dłuższy niż 150 znaków"),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków").max(2000, "Wiadomość nie może być dłuższa niż 2000 znaków")
});

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [honeypot, setHoneypot] = useState<string>("");
  const [lastSubmit, setLastSubmit] = useState<number>(0);

  // Sanityzacja tekstu
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const validateForm = (): boolean => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {};
        error.errors.forEach(err => {
          const path = err.path[0] as keyof FormErrors;
          newErrors[path] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Sprawdź honeypot (pułapka na boty)
    if (honeypot) {
      console.log("Bot detected, ignoring submission");
      // Udajemy sukces, aby boty nie wiedziały, że zostały wykryte
      toast({
        title: "Wiadomość wysłana!",
        description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
      });
      return;
    }

    // Zabezpieczenie przed wielokrotnym wysłaniem formularza (rate limiting)
    const now = Date.now();
    if (now - lastSubmit < 10000) { // 10 sekund limitu
      toast({
        variant: "destructive",
        title: "Zbyt wiele prób",
        description: "Proszę odczekać chwilę przed ponownym wysłaniem wiadomości.",
      });
      return;
    }

    // Walidacja formularza
    if (!validateForm()) {
      toast({
        variant: "destructive",
        title: "Błąd walidacji",
        description: "Proszę poprawić błędy w formularzu."
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Sanityzacja danych formularza
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message),
        created_at: new Date().toISOString()
      };

      // Zapisz wiadomość w Supabase
      const { error: dbError } = await supabase
        .from('contact_messages')
        .insert([sanitizedData]);

      if (dbError) throw dbError;

      // Wyślij email przez Edge Function
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: sanitizedData
      });

      if (error) throw error;

      // Aktualizuj czas ostatniego udanego wysłania
      setLastSubmit(Date.now());

      toast({
        title: "Wiadomość wysłana!",
        description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
      });

      // Wyczyść formularz
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        variant: "destructive",
        title: "Wystąpił błąd",
        description: "Nie udało się wysłać wiadomości. Spróbuj ponownie później.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-5xl font-display text-estate-800 mb-16 text-center">Kontakt</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-display text-estate-800 mb-6">Dane kontaktowe</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#49be25]" />
                  <span>kontakt@marekglowacki.pl</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#49be25]" />
                  <span>+48 514 383 545</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#49be25]" />
                  <span>Biała Podlaska 21-500, Lubelskie</span>
                </div>
                <div className="flex items-center gap-3 mt-8">
                  <Shield className="h-5 w-5 text-[#49be25]" />
                  <span className="text-sm text-gray-600">Twoje dane są bezpieczne i używane tylko w celu udzielenia odpowiedzi.</span>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Imię"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Temat"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                    aria-invalid={errors.subject ? "true" : "false"}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Wiadomość"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    aria-invalid={errors.message ? "true" : "false"}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                {/* Pułapka na boty (honeypot) - pole ukryte dla użytkowników, widoczne dla botów */}
                <div className="hidden">
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#49be25] text-white hover:bg-[#3da51e]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
