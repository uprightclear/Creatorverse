import { createClient } from '@supabase/supabase-js';
console.log("Now in the client")
const URL = 'https://uuglwdchgsbcezzzvyrk.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1Z2x3ZGNoZ3NiY2V6enp2eXJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc1ODYxNDAsImV4cCI6MjAwMzE2MjE0MH0.gH5Ig9xjIkcGSeMtDWOeXut4yI26fVV2t5-Fa_0kXZY';

export const supabase = createClient(URL, API_KEY);

