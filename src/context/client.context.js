import { createContext, useEffect, useState } from "react";
import axios from "axios";

const newClient = (Client, client) => {

  return [...Client, { ...client }];
};

const deleteItem = (Client, client) => {
  return null;
};

export const ClientContext = createContext({
  isClientOpen: false,
  Client: [],
  setIsClientOpen: () => { },
  addClient: () => { },
  deleteClient: () => { },
  resetClient: () => { },
});

export const ClientProvider = ({ children }) => {
  const [isClientOpen, setIsClientOpen] = useState(false);
  const [Client, setClient] = useState([]);

  useEffect(() => {
    const getClient = async () => {
      const URL = "http://localhost:8181/api/client";
      const response = await axios.get(`${URL}/list`);
      console.log(response.data);
      setClient(response.data);
      //setClient(sent.data);
      
    };

    getClient();
  }, [])

  const addClient = (client) => {
    setClient(newClient());
}

const deleteClient = (client) => {
  setClient(deleteItem());
};

const resetClient = (client) => {
  setClient(deleteItem(Client, client));
};


const value = {
  isClientOpen,
  Client,
  addClient,
  setIsClientOpen,
  deleteClient,
  resetClient,
};

return <ClientContext.Provider value={value}>{children}</ClientContext.Provider>;
  };