import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://eopwzgjtcxwbpausmfio.supabase.co";
const supabaseKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvcHd6Z2p0Y3h3YnBhdXNtZmlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyNDc4NzQsImV4cCI6MjAyNDgyMzg3NH0.9p9CEbebOAiRlIeUEFuN-cgTeAcdy0xHz1ePYv66jeU";

export const supabase = createClient(supabaseURL, supabaseKEY)
