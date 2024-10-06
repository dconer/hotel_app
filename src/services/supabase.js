import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lyhmmlzvvmssrgwubnxp.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5aG1tbHp2dm1zc3Jnd3VibnhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyMzY1MDUsImV4cCI6MjA0MzgxMjUwNX0.k_7GBQO38gV-N8tXV1CyLFQM54WdBcvMtiKrIJxzQ-M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
