
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  console.log("Otrzymano żądanie wysłania wiadomości email");

  try {
    // Sprawdź Content-Type i przetwórz odpowiednio
    const contentType = req.headers.get("content-type") || "";
    
    let to: string;
    let subject: string;
    let content: string;
    let replyTo: string | undefined;
    let attachments: any[] = [];
    
    if (contentType.includes("multipart/form-data")) {
      // Przetwarzanie FormData (z załącznikami)
      try {
        const formData = await req.formData();
        to = formData.get("to") as string;
        subject = formData.get("subject") as string;
        content = formData.get("content") as string;
        replyTo = formData.get("replyTo") as string || undefined;
        
        console.log("Dane z formularza:", { to, subject, replyTo });
        
        // Zbierz wszystkie załączniki
        for (const [key, value] of formData.entries()) {
          if (key.startsWith("attachment") && value instanceof File) {
            const file = value;
            const buffer = await file.arrayBuffer();
            
            console.log(`Przetwarzanie załącznika: ${key}, nazwa: ${file.name}, typ: ${file.type}, rozmiar: ${file.size} bajtów`);
            
            attachments.push({
              filename: file.name,
              content: new Uint8Array(buffer),
              contentType: file.type,
            });
            
            console.log(`Dodano załącznik: ${file.name}, rozmiar: ${file.size} bajtów`);
          }
        }
      } catch (formError) {
        console.error("Błąd przetwarzania formData:", formError);
        throw new Error(`Błąd przetwarzania danych formularza: ${formError.message}`);
      }
    } else {
      // Przetwarzanie JSON (bez załączników)
      try {
        const { to: jsonTo, subject: jsonSubject, content: jsonContent, replyTo: jsonReplyTo } = await req.json();
        to = jsonTo;
        subject = jsonSubject;
        content = jsonContent;
        replyTo = jsonReplyTo;
        
        console.log("Dane z JSON:", { to, subject, replyTo });
      } catch (jsonError) {
        console.error("Błąd parsowania JSON:", jsonError);
        throw new Error(`Błąd parsowania JSON: ${jsonError.message}`);
      }
    }

    if (!to || !subject || !content) {
      console.error("Brak wymaganych pól");
      throw new Error("Missing required fields: to, subject, or content");
    }

    console.log(`Wysyłanie email do: ${to}`);
    console.log(`Temat: ${subject}`);
    console.log(`ReplyTo: ${replyTo || 'Not specified'}`);
    console.log(`Załączniki: ${attachments.length}`);
    
    if (attachments.length > 0) {
      console.log(`Szczegóły załączników:`, attachments.map(a => ({ filename: a.filename, contentType: a.contentType, size: a.content.length })));
    }
    
    const emailOptions = {
      from: "Marek Głowacki <kontakt@marekglowacki.pl>",
      to: [to],
      subject: subject,
      html: content,
      reply_to: replyTo,
      attachments: attachments.length > 0 ? attachments : undefined,
    };
    
    console.log("Wysyłanie email przez Resend API");
    try {
      const emailResponse = await resend.emails.send(emailOptions);
      console.log("Email wysłany pomyślnie:", emailResponse);

      return new Response(JSON.stringify(emailResponse), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    } catch (resendError) {
      console.error("Błąd API Resend:", resendError);
      throw new Error(`Błąd wysyłania przez Resend API: ${resendError.message}`);
    }
  } catch (error: any) {
    console.error("Błąd w funkcji send-custom-email:", error);
    console.error("Szczegóły błędu:", error.message);
    
    return new Response(
      JSON.stringify({ error: error.message || "Unknown error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
