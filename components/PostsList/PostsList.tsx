import React, { FC } from 'react';

import { Post } from '@components/index';
import { IPost } from '@models/index';

interface PostsListProps {
    posts: IPost[]
}

const PostsList: FC<PostsListProps> = ({ posts }) => {
    return (
        <>
            {posts.map((post) =>
                <Post
                    key={post._id}
                    className="posts-list__post"
                    post={post}
                />
            )}
        </>
    )
}

export default PostsList
