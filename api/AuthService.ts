import { AxiosResponse } from 'axios';

import $api from './axios';
import { IAuthResponse } from '@models/index';

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('auth/login', {email, password});
    }

    static async registration(nickname: string, email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('auth/registration', {nickname, email, password});
    }

    static async logout(): Promise<void> {
        return $api.post('auth/logout');
    }
}
