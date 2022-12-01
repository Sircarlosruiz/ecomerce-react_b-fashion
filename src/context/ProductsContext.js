import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };

  useEffect(() => {
    const getProductsData = async () => {
      const URL = "http://localhost:8181/api/product";
      const response = await fetch(URL);
      const products = await response.json();
      setProducts(products);
    };

    getProductsData();
  }, []);

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
