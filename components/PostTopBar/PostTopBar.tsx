import React, { FC } from 'react';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import scss from './PostTopBar.module.scss';

interface PostTopBarProps {
    author: string
    time: string
}

const PostTopBar: FC<PostTopBarProps> = ({ author, time }) => {
    return (
        <div className={scss.topBar}>
            <span className={`${scss.topBar__item} ${scss.topBar__item_spaced}`}>
                <a>{author}</a>
            </span>

            <span className={`${scss.topBar__item} ${scss.topBar__item_time} ${scss.topBar__item_spaced}`}>
                <a>{time}</a>
            </span>

            <span className={scss.topBar__spacer}></span>

            <span className={`${scss.topBar__item} ${scss.topBar__controls}`}>
                <MoreHorizIcon />
            </span>
        </div>
    )
}

export default PostTopBar
