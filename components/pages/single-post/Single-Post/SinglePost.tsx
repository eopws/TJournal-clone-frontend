import React from 'react';

import { PostFooter, PostTopBar } from '@components/index';
import scss from './SinglePost.module.scss';

const SinglePost = () => {
    return (
        <div className={scss.post}>
            <div className={scss.post__wrapper}>
                <PostTopBar />

                <h1 className={scss.post__header}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

                <div className={scss.post__content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, veritatis praesentium maxime ipsa, porro consequuntur magnam reiciendis perspiciatis necessitatibus asperiores corrupti voluptas alias beatae aspernatur quisquam hic quia nemo laborum?
                </div>

                <PostFooter />

                <div className={scss.post__author}>
                    <img src="https://leonardo.osnova.io/63b48b34-c9f4-9265-1711-455e451a6b82/-/scale_crop/108x108/-/format/webp/" alt="" />
                    <span>Автор</span>
                </div>
            </div>
        </div>
    )
}

export default SinglePost
