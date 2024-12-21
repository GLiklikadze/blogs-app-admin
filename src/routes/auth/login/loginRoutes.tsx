import { Suspense } from "react";
import { Route } from "react-router-dom";
import { AUTH_PATHS } from "../authRoutes.enum";
import { LoaderComponent } from "@/components/loader/LoaderComponent";
import { LoginPage } from "./loginPagesLazyExports";

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
