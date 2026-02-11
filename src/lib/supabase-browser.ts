import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // During build time, return a mock client if env vars are not available
  if (!supabaseUrl || !supabaseKey) {
    console.warn('[Supabase] Environment variables not found, using fallback');
    // Return a minimal mock client for build time
    return {
      auth: {
        getUser: async () => ({ data: { user: null }, error: null }),
        getSession: async () => ({ data: { session: null }, error: null }),
        signOut: async () => ({ error: null }),
        signInWithPassword: async () => ({ data: null, error: null }),
      }
    } as any;
  }

  return createBrowserClient(supabaseUrl, supabaseKey);
}
