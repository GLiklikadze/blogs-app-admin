import "./App.css";
import { useEffect } from "react";
import { supabase } from "./supabase/supabaseClient";
import { useAuthContext } from "./context/hooks/useAuthContext";
import AppRoutes from "./routes/appRoutes";

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
      <AppRoutes />
    </>
  );
}

export default App;
