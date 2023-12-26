import { createClient } from '@supabase/supabase-js'
import { supabaseConfig } from './supabaseConfig'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://qdwaeswunotgnuatlcuv.supabase.co', supabaseConfig.apikey)
