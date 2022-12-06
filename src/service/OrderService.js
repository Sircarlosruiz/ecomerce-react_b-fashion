import axios from "axios";

const API = "http://localhost:8181/api/order";
export class OrderService {
  getAll() {
    return axios.get(API + "/list").then((res) => res.data);
  }

  save(product) {
    return axios.post(URL + "/saveJson", product).then((res) => res.data);
  }

  delete(id) {
    return axios.delete(URL + "/delete/" + id).then((res) => res.data);
  }

  getById(id) {
    return axios.get(`${API}/{${id}}`).then((res) => res.data);
  }

}
