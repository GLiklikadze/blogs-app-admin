import { PropsWithChildren, useCallback, useState } from "react";
import { AuthContext } from "./hooks/useAuthContext";
import { User } from "@supabase/supabase-js";

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const handleSetUserId = useCallback((newUser: User | undefined) => {
    setUser(newUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, handleSetUserId, setIsLoading, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
