
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Function to wrap content in a beautiful template
const wrapContentInTemplate = (content: string, correspondenceHistory?: string): string => {
  // Add correspondence history if it exists
  const historySection = correspondenceHistory ? `
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea;">
      <div style="color: #666; font-size: 14px; margin-bottom: 10px;">Historia korespondencji:</div>
      <div style="color: #444; background-color: #f9f9f9; padding: 15px; border-left: 3px solid #ddd; font-size: 14px;">
        ${correspondenceHistory}
      </div>
    </div>
  ` : '';

  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background-color: #f8f9fa; padding: 20px;">
        <div style="background-color: #ffffff; border-radius: 4px; padding: 30px; border-top: 4px solid #4a6cf7;">
          ${content}
          ${historySection}
        </div>
        <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eaeaea; font-size: 12px; color: #666;">
          <p>Wiadomość wysłana przez Kompozytor Email Marka Głowackiego</p>
        </div>
      </div>
    </div>
  `;
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
    let correspondenceHistory: string | undefined;
    let attachments: any[] = [];
    
    if (contentType.includes("multipart/form-data")) {
      // Przetwarzanie FormData (z załącznikami)
      try {
        const formData = await req.formData();
        to = formData.get("to") as string;
        subject = formData.get("subject") as string;
        content = formData.get("content") as string;
        replyTo = formData.get("replyTo") as string || undefined;
        correspondenceHistory = formData.get("correspondenceHistory") as string || undefined;
        
        console.log("Dane z formularza:", { to, subject, replyTo, hasCorrespondenceHistory: !!correspondenceHistory });
        
        // Zbierz wszystkie załączniki
        for (const [key, value] of formData.entries()) {
          if (key.startsWith("attachment") && value instanceof File) {
            const file = value;
            const buffer = await file.arrayBuffer();
            const uint8Array = new Uint8Array(buffer);
            
            console.log(`Przetwarzanie załącznika: ${key}, nazwa: ${file.name}, typ: ${file.type}, rozmiar: ${file.size} bajtów`);
            console.log(`Typ zawartości załącznika: ${typeof uint8Array}, czy jest Array: ${Array.isArray(uint8Array)}, czy jest Uint8Array: ${uint8Array instanceof Uint8Array}`);
            
            attachments.push({
              filename: file.name,
              content: uint8Array,
              contentType: file.type,
            });
            
            console.log(`Dodano załącznik: ${file.name}, rozmiar: ${uint8Array.length} bajtów`);
          }
        }
      } catch (formError) {
        console.error("Błąd przetwarzania formData:", formError);
        throw new Error(`Błąd przetwarzania danych formularza: ${formError.message}`);
      }
    } else {
      // Przetwarzanie JSON (bez załączników)
      try {
        const { to: jsonTo, subject: jsonSubject, content: jsonContent, replyTo: jsonReplyTo, correspondenceHistory: jsonCorrespondenceHistory } = await req.json();
        to = jsonTo;
        subject = jsonSubject;
        content = jsonContent;
        replyTo = jsonReplyTo;
        correspondenceHistory = jsonCorrespondenceHistory;
        
        console.log("Dane z JSON:", { to, subject, replyTo, hasCorrespondenceHistory: !!correspondenceHistory });
      } catch (jsonError) {
        console.error("Błąd parsowania JSON:", jsonError);
        throw new Error(`Błąd parsowania JSON: ${jsonError.message}`);
      }
    }

    if (!to || !subject || !content) {
      console.error("Brak wymaganych pól");
      throw new Error("Missing required fields: to, subject, or content");
    }

    // Split recipients by semicolon and trim whitespace
    const recipients = to.split(';').map(email => email.trim()).filter(email => email);
    
    if (recipients.length === 0) {
      throw new Error("No valid recipient email addresses provided");
    }

    console.log(`Wysyłanie email do ${recipients.length} odbiorców:`, recipients);
    console.log(`Temat: ${subject}`);
    console.log(`ReplyTo: ${replyTo || 'Not specified'}`);
    console.log(`Historia korespondencji: ${correspondenceHistory ? 'Załączona' : 'Brak'}`);
    console.log(`Załączniki: ${attachments.length}`);
    
    if (attachments.length > 0) {
      console.log(`Szczegóły załączników:`, attachments.map(a => ({ filename: a.filename, contentType: a.contentType, size: a.content.length })));
    }
    
    // Wrap content in a template with correspondence history
    const wrappedContent = wrapContentInTemplate(content, correspondenceHistory);
    
    const emailOptions: any = {
      from: "Marek Głowacki <kontakt@marekglowacki.pl>",
      to: recipients,
      subject: subject,
      html: wrappedContent,
      reply_to: replyTo,
    };

    // Dodaj załączniki tylko jeśli istnieją
    if (attachments.length > 0) {
      emailOptions.attachments = attachments;
      console.log("Dodano załączniki do opcji emaila");
    }
    
    console.log("Wysyłanie email przez Resend API");
    console.log("Opcje emaila:", JSON.stringify({
      ...emailOptions,
      attachments: emailOptions.attachments ? `${emailOptions.attachments.length} załączników` : undefined
    }));
    
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
    } catch (resendError: any) {
      console.error("Błąd API Resend:", resendError);
      if (resendError.response) {
        console.error("Szczegóły odpowiedzi Resend:", resendError.response);
      }
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
