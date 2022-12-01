import axios from "axios";

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
        return axios.get(URL + "/list").then(res => res.data);
    }
}