import { createContext, useState } from "react";

const newCartProducts = (cartProducts, product, qty) => {
    const cartItem = cartProducts.find((item) => item.id === product.id);

    if(cartItem){
        return cartProducts.map((item) => 
            item.id === product.id ? { ...item, quantity: qty } : item
        );
    }

    return [...cartProducts, { ...product, quantity: qty }];
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

	const addCartProduct = (product, qty = 1) =>
		setCartProducts(newCartProducts(cartProducts, product, qty));

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartProducts,
		addCartProduct,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};