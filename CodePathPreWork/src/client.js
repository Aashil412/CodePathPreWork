import { createClient } from '@supabase/supabase-js';
const URL = 'https://lzgaohgwmfogcldofosi.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6Z2FvaGd3bWZvZ2NsZG9mb3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwNTY1OTIsImV4cCI6MjAwNzYzMjU5Mn0.Gik8p9EXhbzyVlV2FJM1NjkXwNWd9jG1thZRB1dCUug';
export const supabase = createClient(URL, API_KEY);