import React, { FC } from 'react';

import { PostsList } from '@components/index';
import { SortBar } from '@components/pages/user-profile/index';
import { IPost, SortTypesEnum } from '@models/index';
import scss from './UserPosts.module.scss';

interface UserPostsProps {
    posts: IPost[]
    sortType: SortTypesEnum
    setSortType: (sort: SortTypesEnum) => void
}

const UserPosts: FC<UserPostsProps> = ({ posts, sortType, setSortType }) => {
    return (
        <div className={scss.userPosts}>
            <SortBar
                value={sortType}
                setSortType={setSortType}
            />

            <div className={scss.userPosts__list}>
                <PostsList
                    posts={posts}
                    arePostsFetching={false}
                />
            </div>
        </div>
    )
}

export default UserPosts
