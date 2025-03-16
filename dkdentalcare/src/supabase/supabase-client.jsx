import { createClient } from '@supabase/supabase-js';

// Získání hodnot z prostředí
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Kontrola, zda jsou hodnoty k dispozici
if (!supabaseUrl || !supabaseKey) {
  throw new Error('supabaseUrl or supabaseKey is missing. Please check your environment variables.');
}

// Vytvoření klienta
export const supabase = createClient(supabaseUrl, supabaseKey);
