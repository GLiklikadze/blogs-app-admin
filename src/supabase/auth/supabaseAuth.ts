import { supabase } from "../supabaseClient";
import { httpRegisterProps } from "./supabaseAuth.types";

export const login = async ({ email, password }: httpRegisterProps) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(`Sign-in failed: ${error.message}`);
    }
    return data;
  } catch (err) {
    console.error("Error during Sign In:", err);
    throw err;
  }
};

export const logout = () => {
  return supabase.auth.signOut();
};
