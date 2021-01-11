import axios from 'axios';

const API_URL = 'https://entrega-rapida-devsuperior2.herokuapp.com';

export function fetchOrder() {
    return axios(`${API_URL}/orders`);
}

export function confirmDelivery(orderId: number){
    return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}