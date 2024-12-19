import { User } from "@supabase/supabase-js";

export type UserCreateUpdateFormProps = {
  singleUserData?: User;
  handleSubmit:
    | ((values: { email: string; phone: string }) => void)
    | ((payload: { email: string; phone: string; password: string }) => void);
  error: Error | null;
  isError: boolean;
  isSuccess: boolean;
};
