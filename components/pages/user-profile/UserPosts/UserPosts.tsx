import React, { FC, useState, useEffect } from 'react';

import { PostService } from '@api/index';
import { PostsList } from '@components/index';
import { SortBar } from '@components/pages/user-profile/index';
import { IPost } from '@models/index';
import scss from './UserPosts.module.scss';

interface UserPostsProps {
    posts: IPost[]
}

const UserPosts: FC<UserPostsProps> = ({ posts }) => {
    return (
        <div className={scss.userPosts}>
            <SortBar />

            <div className={scss.userPosts__list}>
                <PostsList
                    posts={posts}
                />
            </div>
        </div>
    )
}

export default UserPosts
