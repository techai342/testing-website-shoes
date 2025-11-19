import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://jwlpkgdgybihfubjztyw.supabase.com",
  "YOUR_PUBLIC_ANON_KEY"
);
