import React, { FC } from 'react';
import { CircularProgress } from '@material-ui/core';

import { Post } from '@components/index';
import { IPost } from '@models/index';

interface PostsListProps {
    posts: IPost[]
    arePostsFetching: boolean
}

const PostsList: FC<PostsListProps> = ({ posts, arePostsFetching }) => {
    return (
        <>
            {!arePostsFetching ?
                posts.map((post) =>
                    <Post
                        key={post._id}
                        className="posts-list__post"
                        post={post}
                    />
                )
                :
                <div className="container">
                    <div className="loader">
                        <CircularProgress size={100} />
                    </div>
                </div>
            }
        </>
    )
}

export default PostsList
