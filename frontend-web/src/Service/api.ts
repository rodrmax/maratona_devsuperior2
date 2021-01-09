import axios from "axios";

const API_URL = 'https://entrega-rapida-devsuperior2.herokuapp.com';

export function fetchProducts(){
    return axios(`${API_URL}/products`);
}