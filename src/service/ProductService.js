import axios from "axios";

const API = 'http://localhost:8181/api/product';
export class ProductService {

    getAll(){
        return axios.get(API + "/list").then(res => res.data);
    }
}