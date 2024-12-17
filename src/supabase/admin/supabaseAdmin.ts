import { supabase } from "../supabaseClient";
export type User = {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmation_sent_at: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: {
    provider: string;
    providers: string[];
  };
  user_metadata: object;
  identities: null;
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
};

export const getUsersForAdmin = async () => {
  try {
    const { data, error } = await supabase.auth.admin.listUsers();
    if (error) {
      throw new Error(error.message);
    }
    console.log(data.users);
    return data.users as unknown as User[];
  } catch (err) {
    console.error("Error during getting Users List", err);
    throw err;
  }
};
