import React, { FC } from 'react';
import Link from 'next/link';

import scss from './Post.module.scss';
import { PostFooter, PostTopBar } from '@components/index';
import { IPost } from '@models/index';

interface PostProps {
    className?: string
    post: IPost
}

const Post: FC<PostProps> = ({ post, className = "" }) => {
    const postTime = new Date(post.createdAt);

    return (
        <div className={`${scss.post} ${className}`}>
            <Link href={'/posts/' + post.slug}>
                <a>
                    <PostTopBar
                        author={post.author.nickname}
                        time={
                            String(
                                (postTime.getMonth() + 1) + '/' +
                                postTime.getDate() + '/' +
                                postTime.getFullYear()
                            )}
                    />

                    <div className={scss.contentWrapper}>
                        <span className={scss.postTitle}>{post.header}</span>
                        <div className={scss.content}>
                            <p>{
                                post.content.length > 180 ?
                                    post.content.substr(0, 180) + '…'
                                    :
                                    post.content
                            }</p>
                        </div>
                    </div>

                    <PostFooter />
                </a>
            </Link>
        </div>
    )
}

export default Post
