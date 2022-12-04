import axios from "axios";

const API = "http://localhost:8181/api/product";
export class ProductService {
  getAll() {
    return axios.get(API + "/list").then((res) => res.data);
  }

  save(product) {
    return axios.post(URL + "/saveJson", product).then((res) => res.data);
  }

  delete(id) {
    return axios.delete(URL + "/delete/" + id).then((res) => res.data);
  }

  getByCategory(idCategory) {
    return axios
      .get(URL + "/listProduct/" + idCategory)
      .then((res) => res.data);
  }

  getById(id) {
    return axios.get(`${API}/{${id}}`).then((res) => res.data);
  }
}
