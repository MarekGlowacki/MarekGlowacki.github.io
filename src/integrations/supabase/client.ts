
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const supabaseUrl = "https://nvtxqityoyksixawlmzz.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52dHhxaXR5b3lrc2l4YXdsbXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMTc3MjAsImV4cCI6MjA1NTc5MzcyMH0.5pDexd_iTa5l_YLGTYq18QzQk4TR4wWhycfkx_eyP0U"

const options = {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
}

export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey,
  options
)
