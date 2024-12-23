import { Session, User } from "@supabase/supabase-js";
export type LoginResult = {
  user: User;
  session: Session;
};
