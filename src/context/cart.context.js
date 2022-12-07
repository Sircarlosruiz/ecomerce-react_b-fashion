import { createContext, useState } from "react";

const newCartProducts = (cartProducts, product, cant) => {
    return [...cartProducts, { ...product, cantidad: cant }];
};

export const CartContext = createContext({
    isCartOpen: false,
    cartProducts: [],
    setIsCartOpen: () => {},
    addCartProduct: () => {},
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartProducts, setCartProducts] = useState([]);

	const addCartProduct = (product, cant = 1) =>
		setCartProducts(newCartProducts(cartProducts, product, cant));

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartProducts,
		addCartProduct,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};