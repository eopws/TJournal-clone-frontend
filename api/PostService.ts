import { AxiosResponse } from 'axios';

import $api from './axios';
import IPost from '@models/IPost';
import { IGetAll } from '@models/PostServiceQueries';
import { SortTypesEnum } from '@models/index';

export default class PostService {
    static async getAll(query?: IGetAll, sort?: SortTypesEnum): Promise<AxiosResponse<IPost[]>> {
        let queryString = '?';

        for (let key in query) {
            queryString += key + '=' + query[key] + '&';
        }

        if (sort) {
            queryString += 'sort=' + sort;
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
