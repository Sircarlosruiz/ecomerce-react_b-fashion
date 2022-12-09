import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
  user: [],
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const value = { user };

  useEffect(() => {
    const getUserData = async () => {
      const URL = "http://localhost:8181/api/product";
      const response = await axios.get(`${URL}/list`);
      setUser(response.data);
    };

    getUserData();
  }, []);


  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
