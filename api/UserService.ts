import { AxiosResponse } from 'axios';

import $api from './axios';
import { IUser } from '@models/index';
import { IGetOne } from '@models/UserServiceQueries';

export default class UserService {
    static async getOne(query: IGetOne): Promise<AxiosResponse<IUser>> {
        let queryString: string = '?';

        for (let key in query) {
            queryString += key + '=' + query[key] + '&';
        }

        if (queryString === '?') {
            queryString = '';
        }

        return $api.get<IUser>('users/one' + queryString);
    }
}
