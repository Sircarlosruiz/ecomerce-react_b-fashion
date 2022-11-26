import React from 'react'
import useGetProducts from '../../hooks/useGetProducts';

const API = "http://localhost:8181/api/product";

const ProductList = () => {
    const products = useGetProducts(API);
    
    return (
        <>hola</>
    );
}

export default ProductList;