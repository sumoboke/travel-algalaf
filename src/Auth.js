import { supabase } from "./client";
import { useEffect, useState, useContext, createContext } from "react";

export const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

function useProviderAuth() {
  const [users, setUser] = useState(null);
  const [userDetail, setUserDetail] = useState(null);

  const login = async () => {
    await supabase.auth.signIn({ provider: "google" });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUserDetail(null);
    setUser(null);
  };

  async function fetchUser(userId) {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .match({ id: userId })
        .maybeSingle();

      if (error) {
        console.log(error);
      }
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async function checkUser() {
    const user = supabase.auth.user();
    if (!user) return;
    setUser(user);
  }

  useEffect(() => {
    checkUser();
    window.addEventListener("hashchange", function () {
      checkUser();
    });
  }, []);

  useEffect(() => {
    if (!users) {
      setUserDetail(null);
    } else {
      const data = fetchUser(users.id);
      if (data) {
        setUserDetail(data);
      }
    }
  }, [users]);

  return {
    login,
    logout,
    fetchUser,
    checkUser,
    users,
    userDetail,
  };
}

export const AuthProvider = ({ children }) => {
  const auth = useProviderAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
