import { BLOGS_ROUTES } from "./blogs/blogsRoutes";
import { USER_ROUTES } from "./user/userRoutes";

export const ADMIN_ROUTES = [...USER_ROUTES, ...BLOGS_ROUTES];
