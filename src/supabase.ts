import { createClient } from "@supabase/supabase-js";

const supabaseBaseUrl = import.meta.env.VITE_BASE_URL_SUPABASE || "";
const apiKey = import.meta.env.VITE_SUPABASE_API_KEY || "";

export const supabase = createClient(supabaseBaseUrl, apiKey);
