import AuthLayout from "@/layout/AuthLayout";
import IsAuthGuard from "@/route-guards/isAuthGuard";
import { Navigate, Route, Routes } from "react-router-dom";
import { AUTH_ROUTES } from "./auth/authRoutes";
import { ADMIN_PATHS } from "./admin-dashboard/adminRoutes.enum";
import IsUnAuthGuard from "@/route-guards/IsUnAuthGuard";
import AdminDashboardLayout from "@/layout/adminLayout";
import { ADMIN_ROUTES } from "./admin-dashboard/adminRoutes";
import { AUTH_PATHS } from "./auth/authRoutes.enum";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <Navigate to={`${AUTH_PATHS.AUTH}/${AUTH_PATHS.LOGIN}`} replace />
          }
        />
        <Route
          path={AUTH_PATHS.AUTH}
          element={
            <IsAuthGuard>
              <AuthLayout />
            </IsAuthGuard>
          }
        >
          {AUTH_ROUTES}
        </Route>
        <Route
          path={ADMIN_PATHS.ADMIN}
          element={
            <IsUnAuthGuard>
              <AdminDashboardLayout />
            </IsUnAuthGuard>
          }
        >
          {ADMIN_ROUTES}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
