import axios from 'axios';
import { API_URL } from '../config/constants';

export default class AuthService {
    constructor() {
    }

    login(loginData) {
        return axios.post(`${API_URL}/users/login`, loginData);
    }
}