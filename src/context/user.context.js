import { createContext, useEffect, useState } from "react";
import axios from "axios";


const newUser = (User, user) => {

  return [...User, { ...user }];
};

const deleteItem = (User, user) => {
  return null;
};

export const UserContext = createContext({
  isUserOpen: false,
  User: [],
  setIsUserOpen: () => { },
  addUser: () => { },
  deleteUser: () => { },
  resetUser: () => { },
});

export const UserProvider = ({ children }) => {
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [User, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const URL = "http://localhost:8181/api/client";
      const response = await axios.get(`${URL}/list`);
      setUser(response.data);
    };

    getUser();
  }, [])

  const addUser = (user) => {
    setUser(newUser());
}

const deleteUser = (item) => {
  setUser(deleteItem());
};

const resetUser = (user) => {
  setUser(deleteItem(User, user));
};


const value = {
  isUserOpen,
  User,
  addUser,
  setIsUserOpen,
  deleteUser,
  resetUser,
};

return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
  };