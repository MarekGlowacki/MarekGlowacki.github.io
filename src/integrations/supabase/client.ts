
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const SUPABASE_URL = "https://nvtxqityoyksixawlmzz.supabase.co"
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52dHhxaXR5b3lrc2l4YXdsbXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMTc3MjAsImV4cCI6MjA1NTc5MzcyMH0.5pDexd_iTa5l_YLGTYq18QzQk4TR4wWhycfkx_eyP0U"

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
