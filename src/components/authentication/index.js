import { createContext, useState, useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

export const AuthContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  // const [cookies, setCookie] = useCookies();
  const [userData, setUserData] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(["token", "name"]);

  const login = (token) => {
    setToken(token);
    console.log("user", token);
  };

  const logout = () => {
    setToken(null);
    // removeCookie(["token"]);
  };

  useEffect(() => {
    axios
      .get(`http://restapi.adequateshop.com/api/users/${cookies.Id}`, {
        headers: { Authorization: `Bearer ${cookies.token}` },
      })
      .then((user) => setUserData(user.data));
  }, []);
  return (
    <AuthContext.Provider value={{ token, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
