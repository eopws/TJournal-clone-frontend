import axios from 'axios';

const API_URL = 'http://localhost:3001';

const $api = axios.create({
    baseURL: API_URL
});

$api.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;

    return config;
});

export default $api
