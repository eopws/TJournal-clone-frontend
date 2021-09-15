import { AxiosResponse } from 'axios';

import $api from './axios';
import IPost from '@models/IPost';
import { IGetAll } from '@models/PostServiceQueries';

export default class PostService {
    static async getAll(query?: IGetAll): Promise<AxiosResponse<IPost[]>> {
        let queryString: string = '?';

        for (let key in query) {
            queryString += key + '=' + query[key] + '&';
        }

        if (queryString === '?') {
            queryString = '';
        }

        return $api.get<IPost[]>('posts/all' + queryString);
    }

    static async getOne(slug: string): Promise<AxiosResponse<IPost>> {
        return $api.get<IPost>('posts/' + slug);
    }
}
