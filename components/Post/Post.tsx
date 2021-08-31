import React, { FC } from 'react';
import Link from 'next/link';

import scss from './Post.module.scss';
import { PostFooter, PostTopBar } from '@components/index';

interface PostProps {
    className?: string
}

const Post: FC<PostProps> = ({className = ""}) => {
    return (
        <div className={`${scss.post} ${className}`}>
            <Link href="/posts/post-slug">
                <a>
                    <PostTopBar />

                    <div className={scss.contentWrapper}>
                        <span className={scss.postTitle}>Заголовок</span>
                        <div className={scss.content}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolor optio quae reiciendis praesentium molestiae itaque, impedit repudiandae accusantium explicabo ratione odit non maxime totam dolorem vero consequatur sunt hic.</p>
                        </div>
                    </div>

                    <PostFooter />
                </a>
            </Link>
        </div>
    )
}

export default Post
