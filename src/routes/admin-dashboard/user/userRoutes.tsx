import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { ADMIN_PATHS } from "../adminRoutes.enum";
import { LoaderComponent } from "@/components/loader/LoaderComponent";

const UsersList = lazy(() => import("@/pages/users/UsersList"));
const UsersEdit = lazy(() => import("@/pages/users/UsersEdit"));
const UsersCreate = lazy(() => import("@/pages/users/UsersCreate"));

export const USER_ROUTES = [
  <Route
    key={ADMIN_PATHS.USER_LIST}
    path={ADMIN_PATHS.USER_LIST}
    element={
      <Suspense fallback={<LoaderComponent />}>
        <UsersList />
      </Suspense>
    }
  />,
  <Route
    key={ADMIN_PATHS.USER_UPDATE + "/:id"}
    path={ADMIN_PATHS.USER_UPDATE + "/:id"}
    element={
      <Suspense fallback={<LoaderComponent />}>
        <UsersEdit />
      </Suspense>
    }
  />,
  <Route
    key={ADMIN_PATHS.USER_CREATE}
    path={ADMIN_PATHS.USER_CREATE}
    element={
      <Suspense fallback={<LoaderComponent />}>
        <UsersCreate />
      </Suspense>
    }
  />,
];
