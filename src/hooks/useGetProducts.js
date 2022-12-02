import { useEffect, useState } from "react";
import axios from 'axios';
// import { ProductService } from "../service/ProductService";

const useGetProducts = (API) => {

    let emptyProduct ={
        id: null,
        name: "",
        description: "",
        display: false,
        price: 0,
        cant: 0,
        image: null
    };

    const [product, setProduct] = useState([emptyProduct]);
    // const [products, useProducts] = useState([]);

    // const productServices = new ProductService();

	useEffect(() => {
		async function fetchData(){
            const response = await axios.get(`${API}/list`);
		    setProduct(response.data);
        }
        // ProductService.getAll();
        fetchData();
	}, [API]);

    return product
};

export default useGetProducts;