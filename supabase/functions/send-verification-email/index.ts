
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
// Zmieńmy bezpośrednio na pełne URL z https://
const baseUrl = "https://marekglowacki.pl"; 

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface VerificationEmailRequest {
  email: string;
  token: string;
  type: 'newsletter' | 'waiting_list';
  application?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, token, type, application }: VerificationEmailRequest = await req.json();

    if (!email || !token || !type) {
      throw new Error("Email, token, and type are required");
    }

    // Upewnijmy się, że używamy poprawnej ścieżki URL
    const verificationUrl = `${baseUrl}/verify-email?token=${token}&type=${type}${application ? `&application=${application}` : ''}`;
    
    console.log(`Sending verification email to ${email} for ${type}`);
    console.log(`Generated verification URL: ${verificationUrl}`);
    
    // Przygotowanie treści emaila w zależności od typu
    let subject, heading, description;
    
    if (type === 'newsletter') {
      subject = "Potwierdź swój adres email - Newsletter Marek Głowacki";
      heading = "Potwierdź swój adres email";
      description = "Dziękujemy za zapisanie się do naszego newslettera. Kliknij poniższy link, aby potwierdzić swój adres email i otrzymywać od nas wiadomości.";
    } else {
      subject = "Potwierdź swój adres email - Lista oczekujących";
      heading = "Potwierdź swój adres email";
      description = `Dziękujemy za zapisanie się na listę oczekujących ${application ? 'na ' + application : ''}. Kliknij poniższy link, aby potwierdzić swój adres email i zostać powiadomionym o premierze.`;
    }

    // Używamy zweryfikowanej domeny jako nadawcy
    const from = "Marek Głowacki <kontakt@marekglowacki.pl>";

    // Wysłanie emaila z linkiem weryfikacyjnym
    const emailResponse = await resend.emails.send({
      from: from,
      to: [email],
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <h1 style="color: #49be25; margin-bottom: 20px;">${heading}</h1>
          <p style="margin-bottom: 20px; line-height: 1.5;">${description}</p>
          <p style="margin-bottom: 20px; line-height: 1.5;"><strong>Link weryfikacyjny:</strong> <br>
            <a href="${verificationUrl}" style="color: #49be25; word-break: break-all;">${verificationUrl}</a>
          </p>
          <a href="${verificationUrl}" style="display: inline-block; background-color: #49be25; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin-bottom: 20px;">Potwierdź adres email</a>
          <p style="margin-bottom: 20px; line-height: 1.5;"><strong>WAŻNE:</strong> Jeśli przycisk nie działa, skopiuj i wklej powyższy link bezpośrednio do przeglądarki.</p>
          <p style="margin-bottom: 20px; line-height: 1.5;">Jeśli nie rejestrowałeś się na naszej stronie, możesz zignorować tę wiadomość.</p>
          <p style="margin-bottom: 5px; line-height: 1.5;">Z poważaniem,</p>
          <p style="margin-top: 0; line-height: 1.5;">Marek Głowacki</p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-verification-email function:", error);
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
