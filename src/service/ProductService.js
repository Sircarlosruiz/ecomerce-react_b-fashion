import axios from "axios";

const API = 'http://localhost:8181/api/product';
export class ProductService {

    getProductsSmall() {
        return fetch('data/products-small.json').then(res => res.json()).then(d => d.data);
    }

    getProducts() {
        return fetch('data/products.json').then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
        return fetch('data/products-orders-small.json').then(res => res.json()).then(d => d.data);
    }

    getAll(){
        return axios.get(API + "/list").then(res => res.data);
    }
}