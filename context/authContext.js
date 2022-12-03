import { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

const initialAuth = null;

const getAuth = () => localStorage.getItem("auth");
const getToken = () => localStorage.getItem("token");
const saveLocalStorageUser = (auth) => {
  localStorage.setItem("auth", JSON.stringify(auth));
};
const saveLocalStorageToken = (token) => {
  localStorage.setItem("token", token);
};
const clearLocalStorage = () => {
  localStorage.removeItem("auth");
  localStorage.removeItem("token");
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);
  const logOut = () => {
    setAuth(null);
    clearLocalStorage();
  };
  console.log(token, initialAuth);

  const logIn = async ({ email, password }) => {
    setIsFetching(true);
    try {
      const res = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log(data);
      setAuth(data);
      saveLocalStorageUser(data.user);
      saveLocalStorageToken(data.token);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  };
  useEffect(() => {
    const token = getToken();
    if (token) {
      setIsFetching(true);
      fetch("http://localhost:5000/api/user/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsFetching(false);
          if (data) {
            if (data.msg) {
              setError(data.msg);
              setAuth(null);
              clearLocalStorage();
            } else {
              setAuth(data);
              saveLocalStorageUser(data);
              saveLocalStorageToken(token);
            }
          } else {
            setAuth(null);
            clearLocalStorage();
          }
        });
    }
  }, []);
  // const handleAuth = (e) => {
  //   if (auth) {
  //     setAuth(null);
  //   } else {
  //     setAuth({
  //       id: e
  //     });
  //   }
  // };

  const data = { auth, isFetching, logOut, logIn, error };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
