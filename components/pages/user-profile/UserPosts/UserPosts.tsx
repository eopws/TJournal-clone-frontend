import React, { FC } from 'react';

import { Post } from '@components/index';
import scss from './UserPosts.module.scss';

const UserPosts: FC = () => {
    return (
        <div className={scss.userPosts}>
            <div className={`${scss.userPosts__sortBlock} ${scss.sortBlock}`}>
                <span className={scss.sortBlock__item}>Популярное</span>
                <span className={`${scss.sortBlock__item} ${scss.sortBlock__item_active}`}>Свежее</span>
            </div>

            <div className={scss.userPosts__list}>
                {/* test post */}
                <Post />
            </div>
        </div>
    )
}

export default UserPosts
