import { AxiosResponse } from 'axios';

import $api from './axios';
import { IGetAll } from '@models/CommentServiceQueries';
import { IComment } from '@models/index';

export default class CommentService {
    static async getAll(query?: IGetAll): Promise<AxiosResponse<IComment[]>> {
        let queryString: string = '?';

        for (let key in query) {
            queryString += key + '=' + query[key] + '&';
        }

        if (queryString === '?') {
            queryString = '';
        }

        return $api.get<IComment[]>('comments/all' + queryString);
    }
}
