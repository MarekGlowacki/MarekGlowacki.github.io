
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    if (!name || !email || !subject || !message) {
      throw new Error("Missing required fields");
    }

    console.log("Received contact form submission:", { name, email, subject });

    // Używamy zweryfikowanej domeny jako nadawcy
    const from = "Marek Głowacki <kontakt@marekglowacki.pl>";

    // 1. Wysyłka emaila potwierdzającego do osoby kontaktującej się
    const clientEmailResponse = await resend.emails.send({
      from: from,
      to: [email],
      subject: "Dziękujemy za kontakt - Marek Głowacki",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h1 style="color: #49be25; margin-bottom: 20px;">Dziękujemy za wiadomość, ${name}!</h1>
          <p style="margin-bottom: 20px; line-height: 1.5;">
            Otrzymałem Twoją wiadomość i postaram się odpowiedzieć jak najszybciej. Zazwyczaj 
            odpowiadam w ciągu 24-48 godzin.
          </p>
          <p style="margin-bottom: 10px; line-height: 1.5;"><strong>Temat:</strong> ${subject}</p>
          <p style="margin-bottom: 20px; line-height: 1.5;"><strong>Twoja wiadomość:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p style="margin-bottom: 5px; line-height: 1.5;">Z poważaniem,</p>
          <p style="margin-top: 0; line-height: 1.5;">Marek Głowacki</p>
        </div>
      `,
    });

    // 2. Wysyłka powiadomienia do właściciela strony
    const ownerEmailResponse = await resend.emails.send({
      from: from,
      to: ["kontakt@marekglowacki.pl"],
      reply_to: email,
      subject: `Nowa wiadomość: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h1 style="color: #49be25; margin-bottom: 20px;">Nowa wiadomość ze strony</h1>
          <p style="margin-bottom: 20px; line-height: 1.5;">
            Otrzymałeś nową wiadomość od <strong>${name}</strong> (${email}).
          </p>
          <p style="margin-bottom: 10px; line-height: 1.5;"><strong>Temat:</strong> ${subject}</p>
          <p style="margin-bottom: 10px; line-height: 1.5;"><strong>Wiadomość:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p style="margin-bottom: 5px; line-height: 1.5;">Możesz odpowiedzieć bezpośrednio na ten email.</p>
        </div>
      `,
    });

    console.log("Client email sent:", clientEmailResponse);
    console.log("Owner email sent:", ownerEmailResponse);

    return new Response(JSON.stringify({ 
      success: true,
      client: clientEmailResponse,
      owner: ownerEmailResponse
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
