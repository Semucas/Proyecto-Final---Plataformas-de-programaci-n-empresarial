import { createClient } from '@supabase/supabase-js'

export function getSupabase(env) {
    const url = env?.PUBLIC_SUPABASE_URL || import.meta.env.PUBLIC_SUPABASE_URL
    const key = env?.PUBLIC_SUPABASE_ANON_KEY || import.meta.env.PUBLIC_SUPABASE_ANON_KEY
    return createClient(url, key)
}