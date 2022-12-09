import { createContext, useEffect, useState } from "react";
import axios from "axios";

const newUser = (User, user) => {
  return [...User, { ...user }];
};

const deleteItem = (User, user) => {
  return null;
};

export const ClientContext = createContext({
  isClientOpen: false,
  Client: [],
  setIsClientOpen: () => {},
  addClient: () => {},
  deleteClient: () => {},
  resetUser: () => {},
});

export const ClientProvider = ({ children }) => {
  const [isClientOpen, setIsClientOpen] = useState(false);
  const [Client, setClient] = useState([]);

  useEffect(() => {
    const URL = "http://localhost:8181/api/client";
    const getUser = async () => {
      const response = await axios.get(`${URL}/list`);
      setClient(response.data);
    };
    
    getUser();
  }, []);
  
  useEffect(() => {
    const PostUser = async () => {
      const sent = await axios.post(`${URL}/save`);
      addUser(sent.data);
    };
    PostUser();
  }, [Client]);

  const addUser = (user) => {
    setClient(newUser());
  };

  const deleteUser = (item) => {
    setClient(deleteItem());
  };

  const resetUser = (user) => {
    setClient(deleteItem(Client, user));
  };

  const value = {
    isClientOpen,
    Client,
    setIsClientOpen,
    addUser,
    deleteUser,
    resetUser,
  };

  return (
    <ClientContext.Provider value={value}>{children}</ClientContext.Provider>
  );
};
