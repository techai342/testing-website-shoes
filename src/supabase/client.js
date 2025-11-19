import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jwlpkgdgybihfubjztyw.supabase.co";
const supabaseAnonKey = "sb_publishable_TZMTF0cfo0gjdiZEGbU03Q_B4ETqern";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
