
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
      const formData = await req.formData();
      to = formData.get("to") as string;
      subject = formData.get("subject") as string;
      content = formData.get("content") as string;
      replyTo = formData.get("replyTo") as string || undefined;
      
      // Zbierz wszystkie załączniki
      for (const [key, value] of formData.entries()) {
        if (key.startsWith("attachment") && value instanceof File) {
          const file = value;
          const buffer = await file.arrayBuffer();
          
          attachments.push({
            filename: file.name,
            content: new Uint8Array(buffer),
          });
        }
      }
    } else {
      // Przetwarzanie JSON (bez załączników)
      const { to: jsonTo, subject: jsonSubject, content: jsonContent, replyTo: jsonReplyTo } = await req.json();
      to = jsonTo;
      subject = jsonSubject;
      content = jsonContent;
      replyTo = jsonReplyTo;
    }

    if (!to || !subject || !content) {
      throw new Error("Missing required fields: to, subject, or content");
    }

    console.log(`Sending email to: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`ReplyTo: ${replyTo || 'Not specified'}`);
    console.log(`Attachments: ${attachments.length}`);
    
    const emailOptions = {
      from: "Marek Głowacki <kontakt@marekglowacki.pl>",
      to: [to],
      subject: subject,
      html: content,
      reply_to: replyTo,
      attachments: attachments.length > 0 ? attachments : undefined,
    };
    
    const emailResponse = await resend.emails.send(emailOptions);

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-custom-email function:", error);
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
