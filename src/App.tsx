import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import UsersList from "./pages/users/UsersList";
import UsersEdit from "./pages/users/UsersEdit";
import { UsersCreate } from "./pages/users/UsersCreate";
import BlogsList from "./pages/blogs/BlogsList";
import LoginPage from "./pages/auth/login/LoginPage";
import { BlogsCreate } from "./pages/blogs/BlogsCreate";
import BlogsEdit from "./pages/blogs/BlogsEdit";
import { useEffect } from "react";
import { supabase } from "./supabase/supabaseClient";
import { useAuthContext } from "./context/hooks/useAuthContext";
import AuthLayout from "./layout/AuthLayout";
import IsAuthGuard from "./route-guards/isAuthGuard";
import AdminDashboardLayout from "./layout/adminLayout";
import IsUnAuthGuard from "./route-guards/IsUnAuthGuard";

function App() {
  const { handleSetUserId, setIsLoading } = useAuthContext();

  useEffect(() => {
    const fetchUser = async () =>
      supabase.auth.getSession().then(({ data: { session } }) => {
        handleSetUserId(session?.user);
        setIsLoading(false);
      });
    fetchUser();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      handleSetUserId(session?.user);
    });

    return () => subscription.unsubscribe();
  }, [handleSetUserId, setIsLoading]);

  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="auth/login" replace />} />
          <Route
            path="auth"
            element={
              <IsAuthGuard>
                <AuthLayout />
              </IsAuthGuard>
            }
          >
            <Route>
              <Route path="login" element={<LoginPage />}></Route>
            </Route>
          </Route>
          <Route
            path="admin"
            element={
              <IsUnAuthGuard>
                <AdminDashboardLayout />
              </IsUnAuthGuard>
            }
          >
            <Route path="user">
              <Route path="list" element={<UsersList />}></Route>
              <Route path="edit/:id" element={<UsersEdit />}></Route>
              <Route path="create" element={<UsersCreate />}></Route>
            </Route>
            <Route path="blogs">
              <Route path="list" element={<BlogsList />}></Route>
              <Route path="edit/:id" element={<BlogsEdit />}></Route>
              <Route path="create" element={<BlogsCreate />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
