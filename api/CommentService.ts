import { AxiosResponse } from 'axios';

import $api from './axios';
import { CreateCommentDto, IGetAll } from '@models/CommentServiceQueries';
import { IComment, SortTypesEnum } from '@models/index';

export default class CommentService {
    static async create(createCommentDto: CreateCommentDto) {
        console.log(createCommentDto);
        return $api.post<IComment>('comments', createCommentDto);
    }

    static async getAll(query?: IGetAll, sort?: SortTypesEnum): Promise<AxiosResponse<IComment[]>> {
        let queryString: string = '?';

        for (let key in query) {
            queryString += key + '=' + query[key] + '&';
        }

        if (sort) {
            queryString += 'sort=' + sort;
        }

        if (queryString === '?') {
            queryString = '';
        }

        return $api.get<IComment[]>('comments/all' + queryString);
    }
}
