import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { AUTH_PATHS } from "../authRoutes.enum";
import { LoaderComponent } from "@/components/loader/LoaderComponent";

const LoginPage = lazy(() => import("@/pages/auth/login/LoginPage"));

export const USER_ROUTES = [
  <Route
    key={AUTH_PATHS.LOGIN}
    path={AUTH_PATHS.LOGIN}
    element={
      <Suspense fallback={<LoaderComponent />}>
        <LoginPage />
      </Suspense>
    }
  />,
];
