import { createClient } from "@supabase/supabase-js";

// YAHAN APNA SUPABASE URL AUR KEY DALIYE
const supabaseUrl = "https://jwlpkgdgybihfubjztyw.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3bHBrZ2RneWJpaGZ1Ymp6dHl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2ODU2MjcsImV4cCI6MjA1MDI2MTYyN30.8lTkQdKkq1v4KJNvVW9Q7VqY6Y6QwQ6Q9Q6Q9Q6Q9Q";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
