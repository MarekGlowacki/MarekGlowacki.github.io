
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

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
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Parse the request
    const { action, data } = await req.json();
    
    if (action === "save") {
      // Save email addresses to the database
      const emails = data.emails;
      console.log("Saving emails:", emails);
      
      // Process each email
      const results = [];
      for (const email of emails) {
        const { data: savedEmail, error } = await supabaseClient
          .from('email_contacts')
          .upsert({ email }, { 
            onConflict: 'email',
            ignoreDuplicates: false
          });
          
        if (error) {
          console.error("Error saving email:", email, error);
          results.push({ email, success: false, error: error.message });
        } else {
          console.log("Saved email:", email);
          results.push({ email, success: true });
        }
      }
      
      return new Response(JSON.stringify({ results }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    } 
    else if (action === "search") {
      // Search for emails that match the query
      const query = data.query || "";
      console.log("Searching for emails with query:", query);
      
      const { data: emails, error } = await supabaseClient
        .from('email_contacts')
        .select('email')
        .ilike('email', `%${query}%`)
        .order('last_used_at', { ascending: false })
        .limit(10);
        
      if (error) {
        console.error("Error searching emails:", error);
        throw error;
      }
      
      console.log("Found emails:", emails);
      return new Response(JSON.stringify({ emails }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }
    
    return new Response(JSON.stringify({ error: "Invalid action" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Error in manage-email-contacts function:", error);
    
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
