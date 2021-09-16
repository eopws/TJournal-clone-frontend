import React, { FC } from 'react';

import { PostFooter, PostTopBar } from '@components/index';
import scss from './SinglePost.module.scss';
import { IPost } from '@models/index';

interface SinglePostProps {
    post: IPost
}

const SinglePost: FC<SinglePostProps> = ({ post }) => {
    return (
        <div className={scss.post}>
            <div className={scss.post__wrapper}>
                <PostTopBar
                    author={post.author.nickname}
                    time={post.createdAt}
                />

                <h1 className={scss.post__header}>{post.header}</h1>

                <div className={scss.post__content}>
                    <p>
                        {post.content}
                    </p>
                </div>

                <PostFooter
                    post={post}
                />

                <div className={scss.post__author}>
                    <img src="https://leonardo.osnova.io/63b48b34-c9f4-9265-1711-455e451a6b82/-/scale_crop/108x108/-/format/webp/" alt="" />
                    <span>{post.author.nickname}</span>
                </div>
            </div>
        </div>
    )
}

export default SinglePost
