import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { login, logout } from "../../../supabase/auth/supabaseAuth";
import { useNavigate } from "react-router-dom";
import { ADMIN_PATHS } from "@/routes/admin-dashboard/adminRoutes.enum";
import { PostgrestError, Session, User } from "@supabase/supabase-js";
import { httpRegisterProps } from "@/supabase/auth/supabaseAuth.types";
import { LOGIN_MUTATION_KEYS } from "./authMutationKeys.enum";

type LoginResult = {
  user: User;
  session: Session;
};
export const useLogin = ({
  mutationOptions,
}: {
  mutationOptions?: UseMutationOptions<
    LoginResult,
    PostgrestError,
    httpRegisterProps
  >;
} = {}): UseMutationResult<LoginResult, PostgrestError, httpRegisterProps> => {
  const navigate = useNavigate();
  return useMutation<LoginResult, PostgrestError, httpRegisterProps>({
    mutationKey: [LOGIN_MUTATION_KEYS.LOGIN],
    mutationFn: login,
    onSuccess: () => navigate(`/${ADMIN_PATHS.ADMIN}`),
    ...mutationOptions,
  });
};

export const useLogOut = ({
  mutationOptions,
}: {
  mutationOptions?: UseMutationOptions<void, PostgrestError, void>;
} = {}): UseMutationResult<void, PostgrestError, void> => {
  const navigate = useNavigate();
  return useMutation<void, PostgrestError, void>({
    mutationKey: [LOGIN_MUTATION_KEYS.LOGOUT],
    mutationFn: logout,
    onSuccess: () => navigate("/"),
    ...mutationOptions,
  });
};
