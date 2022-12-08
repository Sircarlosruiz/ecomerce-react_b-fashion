import { createContext, useState } from "react";

const newCartProducts = (cartProducts, product, cant) => {
  return [...cartProducts, { ...product, cantidad: cant }];
};

const deleteItem = (cartProducts, product, cant) => {
	return null
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

  const addCartProduct = (product, cant = 1) => {
    setCartProducts(newCartProducts(cartProducts, product, cant));
  };

  const deleteCartProduct = (item, cant) =>{
	setCartProducts();
  };

  const resetCartProduct = () => {
	setCartProducts()
  }

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
