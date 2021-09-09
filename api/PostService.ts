import { AxiosResponse } from 'axios';

import $api from './axios';
import IPost from '@models/IPost';

export default class PostService {
    static async getAll(): Promise<AxiosResponse<IPost[]>> {
        return $api.get<IPost[]>('posts/');
    }

    static async getOne(slug: string): Promise<AxiosResponse<IPost>> {
        return $api.get<IPost>('posts/' + slug);
    }
}
