import { createClient } from '@supabase/supabase-js'

// Use a custom domain as the supabase URL
export const supabase = createClient<string>(`${process.env.NEXT_PUBLIC_SUPABASE_URL}`, `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`)