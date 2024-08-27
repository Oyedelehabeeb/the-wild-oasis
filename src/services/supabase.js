import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tggyzouwjfkrpdfzfrvs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnZ3l6b3V3amZrcnBkZnpmcnZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5NTI0ODUsImV4cCI6MjAzNjUyODQ4NX0.ond7eITqwHD1Is9gsA24_xVEnPoO9KxdKwInvsZ9-HE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
