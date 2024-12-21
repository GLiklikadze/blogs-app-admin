import { lazy } from "react";

export const UsersList = lazy(() => import("@/pages/users/UsersList"));
export const UsersEdit = lazy(() => import("@/pages/users/UsersEdit"));
export const UsersCreate = lazy(() => import("@/pages/users/UsersCreate"));
