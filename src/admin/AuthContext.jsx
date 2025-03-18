import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase-client";
import React from "react";
import PropTypes from "prop-types"; // Import pro validaci props

// Typ pro uživatele
const userType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  // Přidejte další relevantní vlastnosti, které chcete mít u uživatele
});

const AuthContext = createContext({
  user: null,
  isAuth: false,
  login: async () => {},
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

// Funkce pro přihlášení
async function login(email, password) {
  const { error, user } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw new Error(error.message);
  return user;
}

// Funkce pro odhlášení
async function logout() {
  await supabase.auth.signOut();
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setIsAuth(true);
        setUser(session.user);
      }
      if (event === "SIGNED_OUT") {
        setIsAuth(false);
        setUser(null);
      }
    });

    // Clean up subscription when the component unmounts
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Přidání validace pro children
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // children musí být typu node (React element)
};

// Přidání validace pro uživatele v kontextu
AuthContext.Provider.propTypes = {
  value: PropTypes.shape({
    user: userType,
    isAuth: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  }),
};

export default AuthProvider;
