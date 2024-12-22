import { Session, User } from "@supabase/supabase-js";
import { supabase } from "../supabaseClient";
import { httpRegisterProps } from "./supabaseAuth.types";

type LoginResult = {
  user: User;
  session: Session;
};

export const login = async ({
  email,
  password,
}: httpRegisterProps): Promise<LoginResult> => {
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

export const logout = async (): Promise<void> => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(`Sign-in failed: ${error.message}`);
    }
  } catch (err) {
    console.error("Error during Sign Out:", err);
    throw err;
  }
};
