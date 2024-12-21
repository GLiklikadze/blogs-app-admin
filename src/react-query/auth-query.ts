import { useMutation } from "@tanstack/react-query";
import { login, logout } from "../supabase/auth/supabaseAuth";
import { useNavigate } from "react-router-dom";
import { ADMIN_PATHS } from "@/routes/admin-dashboard/adminRoutes.enum";

export const useLogin = () => {
  const navigate = useNavigate();
  const {
    mutate: mutateLogin,
    isError,
    error,
    isSuccess,
  } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => navigate(`/${ADMIN_PATHS.ADMIN}`),
  });
  return { mutateLogin, isError, error, isSuccess };
};
export const useLogOut = () => {
  const navigate = useNavigate();
  const { mutate: mutateLogOut } = useMutation({
    mutationKey: ["log-out"],
    mutationFn: logout,
    onSuccess: () => navigate("/"),
  });
  return { mutateLogOut };
};
