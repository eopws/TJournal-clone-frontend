import axios from 'axios';

import { IAuthResponse } from '@models/index';

const API_URL = 'http://localhost:3001';

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

$api.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;

    return config;
});

$api.interceptors.response.use(
    (conifg) => {
        return conifg;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true;

            try {
                const response = await axios.post<IAuthResponse>(`${API_URL}/auth/refresh`, undefined, {withCredentials: true});

                localStorage.setItem('token', response.data.accessToken);

                return $api.request(originalRequest);
            } catch (e) {
                console.log('unauthorized');
            }
        }
    }
);

export default $api
