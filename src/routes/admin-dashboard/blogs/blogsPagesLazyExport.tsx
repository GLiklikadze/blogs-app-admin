import { lazy } from "react";

export const BlogsList = lazy(() => import("@/pages/blogs/BlogsList"));
export const BlogsEdit = lazy(() => import("@/pages/blogs/BlogsEdit"));
export const BlogsCreate = lazy(() => import("@/pages/blogs/BlogsCreate"));
