import { createContext, useState } from "react";

const newUser = (User, user) => {
  
  return [...User, { ...user}];
};

const deleteItem = (User, user) => {
  return null;
};

export const UserContext = createContext({
  isUserOpen: false,
  User: [],
  total: 0,
  setIsUserOpen: () => {},
  addUser: () => {},
  deleteUser: () => {},
  resetUser: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [User, setUser] = useState([]);

  const addUser = (user) => {
    setUser(newUser(User, user));
  };

  const deleteUser = (item) => {
    setUser(deleteItem());
  };

  const resetUser = (user) => {
    setUser(deleteItem(User, user));
  };

  const value = {
    isUserOpen,
    setIsUserOpen,
    User,
    addUser,
    deleteUser,
    resetUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
