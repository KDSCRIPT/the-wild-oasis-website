"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  function resetAuthState() {
    setUser(null);
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") {
      setLoading(true);
    } else {
      setUser(session?.user || null);
      setLoading(false);
    }
  }, [session, status]);

  return (
    <AuthContext.Provider value={{ user, loading, resetAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { useAuth, AuthProvider };
