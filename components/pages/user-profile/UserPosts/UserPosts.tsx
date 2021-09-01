import React, { FC } from 'react';

import { Post } from '@components/index';
import scss from './UserPosts.module.scss';
import { SortBar } from '@components/pages/user-profile/index';

const UserPosts: FC = () => {
    return (
        <div className={scss.userPosts}>
            <SortBar />

            <div className={scss.userPosts__list}>
                {/* test post */}
                <Post />
            </div>
        </div>
    )
}

export default UserPosts
