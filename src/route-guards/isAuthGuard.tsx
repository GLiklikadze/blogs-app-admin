import { useAuthContext } from "../context/hooks/useAuthContext";
import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";

const IsAuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { user, isLoading } = useAuthContext();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (user) {
    return <Navigate to="/admin" />;
  }

  return children || <Outlet />;
};

export default IsAuthGuard;
