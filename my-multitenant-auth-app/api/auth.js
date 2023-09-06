

import { supabase } from '../../lib/supabase'; // or import NextAuth.js functions

export const registerUser = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { user, error };
};

// Login endpoint
export const loginUser = async (email, password) => {
  const { user, error } = await supabase.auth.signIn({
    email,
    password,
  });
  return { user, error };
};

// Logout endpoint
export const logoutUser = async () => {
  await supabase.auth.signOut();
};

// Check if user is authenticated
export const checkAuthStatus = () => {
  return supabase.auth.user();
};
