import { User } from "@supabase/supabase-js";

export type UpdateUserPayload = {
  email: string;
  phone: string;
};
export type UserResponse = {
  user: User;
};
