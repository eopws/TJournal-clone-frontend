import React from 'react';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import scss from './PostTopBar.module.scss';

const PostTopBar = () => {
    return (
        <div className={scss.topBar}>
            <span className={`${scss.topBar__item} ${scss.topBar__item_spaced}`}>
                <a>Автор</a>
            </span>
            <span className={`${scss.topBar__item} ${scss.topBar__item_time} ${scss.topBar__item_spaced}`}>
                <a>48 мин</a>
            </span>
            <span className={scss.topBar__spacer}></span>
            <span className={`${scss.topBar__item} ${scss.topBar__controls}`}>
                <MoreHorizIcon />
            </span>
        </div>
    )
}

export default PostTopBar
