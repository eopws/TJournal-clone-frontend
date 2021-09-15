import React, { FC } from 'react';

import scss from './UserComments.module.scss';
import { Comment, SortBar } from '@components/pages/user-profile/index';
import { IComment } from '@models/index';

interface UserCommentsProps {
    comments: IComment[]
}

const UserComments: FC<UserCommentsProps> = ({ comments }) => {
    return (
        <div className={scss.userComments}>
            <SortBar />

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
