import { createContext, useEffect, useState } from "react";
import axios from "axios";

const newCartProducts = (cartProducts, product, cant) => {
  return [...cartProducts, { ...product, cantidad: cant }];
};

const deleteItem = (cartProducts, product, cant) => {
  return null;
};

export const CartContext = createContext({
  isCartOpen: false,
  cartProducts: [],
  total: 0,
  setIsCartOpen: () => {},
  addCartProduct: () => {},
  deleteCartProduct: () => {},
  resetCartProduct: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const getCartProducts = async () => {
      const URL = "http://localhost:8181/api/cart";
      const response = await axios.get(`${URL}/list`);
      getCartProducts(response.data);
      
    };
    getCartProducts();
  }, [])

  useEffect(() => {
    const postCartProducts = async () => {
      const URL = "http://localhost:8181/api/cart";
      const sent = await axios.post(`${URL}/list`);
      setCartProducts(sent.data);
      
    };
    postCartProducts();
  }, [])

  const addCartProduct = (product, cant = 1) => {
    setCartProducts(newCartProducts(cartProducts, product, cant));
  };

  const deleteCartProduct = (item, cant) => {
    setCartProducts();
  };

  const resetCartProduct = (product, cant) => {
    setCartProducts(deleteItem(cartProducts, product, cant));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartProducts,
    addCartProduct,
    deleteCartProduct,
    resetCartProduct,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
