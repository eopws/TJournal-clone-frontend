import axios, { AxiosResponse } from "axios";

import IPost from "@models/IPost";

export default class PostService {
    static async getAll(): Promise<AxiosResponse<IPost[]>> {
        return axios.get<IPost[]>('http://localhost:3001/posts');
    }

    static async getOne(slug: string) {
        return axios.get<IPost>('http://localhost:3001/posts/' + slug);
    }
}
