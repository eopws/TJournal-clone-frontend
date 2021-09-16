import React, { FC } from 'react';

import scss from './UserComments.module.scss';
import { Comment, SortBar } from '@components/pages/user-profile/index';
import { IComment, SortTypesEnum } from '@models/index';

interface UserCommentsProps {
    comments: IComment[]
    sortType: SortTypesEnum
    setSortType: (sort: SortTypesEnum) => void
}

const UserComments: FC<UserCommentsProps> = ({ comments, sortType, setSortType }) => {
    return (
        <div className={scss.userComments}>
            <SortBar
                value={sortType}
                setSortType={setSortType}
            />

            <div className={scss.userComments__list}>
                {comments.map((comment) =>
                    <Comment
                        className={scss.userComments__comment}
                        comment={comment}
                    />
                )}
            </div>
        </div>
    )
}

export default UserComments
