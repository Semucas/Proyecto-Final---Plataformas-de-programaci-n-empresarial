import { createClient } from '@supabase/supabase-js'

export function getSupabase() {
    let url, key

    try {
        const cf = globalThis.__env__ || globalThis.env || {}
        url = cf.PUBLIC_SUPABASE_URL || import.meta.env.PUBLIC_SUPABASE_URL
        key = cf.PUBLIC_SUPABASE_ANON_KEY || import.meta.env.PUBLIC_SUPABASE_ANON_KEY
    } catch {
        url = import.meta.env.PUBLIC_SUPABASE_URL
        key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY
    }

    return createClient(url, key)
}