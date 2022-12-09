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

const postClient = async () => {
  const sent = await axios.post(`${URL}/save`);
  postClient(sent.data);
};

export const ClientProvider = ({ children }) => {
  const [isClientOpen, setIsClientOpen] = useState(false);
  const [Client, setClient] = useState([]);
  
  useEffect(() => {
    var URL = "http://localhost:8181/api/client";
    const getClient = async () => {
      const response = await axios.get(`${URL}/list`);
      setClient(response.data);
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