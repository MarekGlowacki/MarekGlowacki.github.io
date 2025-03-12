import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Function to wrap content in a beautiful template
const wrapContentInTemplate = (content: string, templateType?: string, correspondenceHistory?: string): string => {
  // Replace signature color to blue if it's not already styled
  const signatureRegex = /(Z poważaniem,\s*<br>Marek Głowacki)<\/p>/i;
  const blueSignature = content.replace(
    signatureRegex, 
    '<span style="color: #0ea5e9; font-family: \'Playfair Display\', serif;">$1</span></p>'
  );
  
  // Format correspondence history to preserve line breaks and spaces
  const formattedHistory = correspondenceHistory ? 
    correspondenceHistory
      .replace(/\n/g, '<br>')  // Convert line breaks to <br> tags
      .replace(/\s{2,}/g, match => '&nbsp;'.repeat(match.length)) // Convert multiple spaces to &nbsp;
    : '';
  
  // Add correspondence history if it exists
  const historySection = correspondenceHistory ? `
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea;">
      <div style="color: #666; font-size: 14px; margin-bottom: 10px;">Historia korespondencji:</div>
      <div style="color: #444; background-color: #f9f9f9; padding: 15px; border-left: 3px solid #ddd; font-size: 14px; white-space: pre-wrap;">
        ${formattedHistory}
      </div>
    </div>
  ` : '';

  // Choose template based on type
  switch (templateType) {
    case 'minimal':
      return `
        <div style="font-family: 'Playfair Display', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="padding: 15px; background-color: #ffffff; border-left: 3px solid #ddd;">
            ${blueSignature}
            ${historySection}
          </div>
        </div>
      `;
    case 'website':
      return `
        <div style="font-family: 'Playfair Display', sans-serif; max-width: 600px; margin: 0 auto; color: #171717;">
          <div style="background-color: #F7F7F7; padding: 24px;">
            <div style="background-color: #ffffff; border-radius: 8px; padding: 32px; border-left: 4px solid #404040;">
              <div style="margin-bottom: 20px;">
                ${blueSignature}
              </div>
              ${historySection}
            </div>
            <div style="text-align: center; margin-top: 24px; padding-top: 20px; border-top: 1px solid #D4D4D4; font-size: 12px; color: #737373;">
              <p style="font-family: 'Playfair Display', serif; font-size: 14px;">Marek Głowacki</p>
              <p>Wiadomość wysłana przez Kompozytor Email</p>
            </div>
          </div>
        </div>
      `;
    case 'professional':
      return `
        <div style="font-family: 'Playfair Display', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="background-color: #f8f9fa; padding: 20px;">
            <div style="background-color: #ffffff; border-radius: 4px; padding: 30px; border-top: 4px solid #4a6cf7;">
              ${blueSignature}
              ${historySection}
            </div>
            <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eaeaea; font-size: 12px; color: #666;">
              <p>Wiadomość wysłana przez Kompozytor Email Marka Głowackiego</p>
            </div>
          </div>
        </div>
      `;
    case 'green':
      return `
        <div style="font-family: 'Playfair Display', serif; max-width: 600px; margin: 0 auto; color: #171717;">
          <div style="background-color: #F2FCE2; padding: 24px;">
            <div style="background-color: #ffffff; border-radius: 8px; padding: 32px; border-left: 4px solid #4CAF50;">
              <div style="margin-bottom: 20px;">
                ${blueSignature}
              </div>
              ${historySection}
            </div>
            <div style="text-align: center; margin-top: 24px; padding-top: 20px; border-top: 1px solid #E5F5DC; font-size: 12px; color: #737373;">
              <p style="font-family: 'Playfair Display', serif; font-size: 14px; color: #0EA5E9;">Marek Głowacki</p>
              <p>Wiadomość wysłana przez Kompozytor Email</p>
            </div>
          </div>
        </div>
      `;
    default:
      return `
        <div style="font-family: 'Playfair Display', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="background-color: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            ${blueSignature}
            ${historySection}
          </div>
          <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #666;">
            <p>Ten email został wysłany za pomocą kompozytora email Marka Głowackiego.</p>
          </div>
        </div>
      `;
  }
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
    let templateType: string | undefined;
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
        templateType = formData.get("templateType") as string || undefined;
        
        console.log("Dane z formularza:", { 
          to, 
          subject, 
          replyTo, 
          hasCorrespondenceHistory: !!correspondenceHistory,
          templateType
        });
        
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
        const { 
          to: jsonTo, 
          subject: jsonSubject, 
          content: jsonContent, 
          replyTo: jsonReplyTo, 
          correspondenceHistory: jsonCorrespondenceHistory,
          templateType: jsonTemplateType
        } = await req.json();
        
        to = jsonTo;
        subject = jsonSubject;
        content = jsonContent;
        replyTo = jsonReplyTo;
        correspondenceHistory = jsonCorrespondenceHistory;
        templateType = jsonTemplateType;
        
        console.log("Dane z JSON:", { 
          to, 
          subject, 
          replyTo, 
          hasCorrespondenceHistory: !!correspondenceHistory,
          templateType
        });
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
    console.log(`Szablon: ${templateType || 'default'}`);
    console.log(`Załączniki: ${attachments.length}`);
    
    if (attachments.length > 0) {
      console.log(`Szczegóły załączników:`, attachments.map(a => ({ filename: a.filename, contentType: a.contentType, size: a.content.length })));
    }
    
    // Wrap content in a template with correspondence history
    const wrappedContent = wrapContentInTemplate(content, templateType, correspondenceHistory);
    
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
