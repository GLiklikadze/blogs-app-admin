import { Suspense } from "react";
import { Route } from "react-router-dom";
import { ADMIN_PATHS } from "../adminRoutes.enum";
import { LoaderComponent } from "@/components/loader/LoaderComponent";
import { BlogsCreate, BlogsEdit, BlogsList } from "./blogsPagesLazyExport";

export const BLOGS_ROUTES = [
  <Route
    key={ADMIN_PATHS.BLOGS_LIST}
    path={ADMIN_PATHS.BLOGS_LIST}
    element={
      <Suspense fallback={<LoaderComponent />}>
        <BlogsList />
      </Suspense>
    }
  />,
  <Route
    key={ADMIN_PATHS.BLOGS_UPDATE}
    path={ADMIN_PATHS.BLOGS_UPDATE + "/:id"}
    element={
      <Suspense fallback={<LoaderComponent />}>
        <BlogsEdit />
      </Suspense>
    }
  />,
  <Route
    key={ADMIN_PATHS.BLOGS_CREATE}
    path={ADMIN_PATHS.BLOGS_CREATE}
    element={
      <Suspense fallback={<LoaderComponent />}>
        <BlogsCreate />
      </Suspense>
    }
  />,
];
