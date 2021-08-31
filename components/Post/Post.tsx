import React, { FC } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import RepeatIcon from '@material-ui/icons/Repeat';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

import scss from './Post.module.scss';
import { Rating } from '@components/index';

interface PostProps {
    className?: string
}

const Post: FC<PostProps> = ({className = ""}) => {
    return (
        <div className={`${scss.post} ${className}`}>
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

            <div className={scss.contentWrapper}>
                <span className={scss.postTitle}>Заголовок</span>
                <div className={scss.content}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolor optio quae reiciendis praesentium molestiae itaque, impedit repudiandae accusantium explicabo ratione odit non maxime totam dolorem vero consequatur sunt hic.</p>
                </div>
            </div>

            <div className={scss.footer}>
                <div className={`${scss.footer__item} ${scss.footer__item_clickable}`}>
                    <ChatBubbleOutlineRoundedIcon classes={{root: scss.footer__icon}} />
                    <span className={scss.footer__itemText}>46</span>
                </div>
                <div className={`${scss.footer__item} ${scss.footer__item_clickable}`}>
                    <RepeatIcon classes={{root: scss.footer__icon}} />
                </div>
                <div className={`${scss.footer__item} ${scss.footer__item_clickable}`}>
                    <BookmarkBorderOutlinedIcon classes={{root: scss.footer__icon}} />
                </div>
                <div className={`${scss.footer__item} ${scss.footer__item_clickable}`}>
                    <ShareOutlinedIcon classes={{root: scss.footer__icon}} />
                </div>

                <div className={scss.footer__spacer}></div>

                <div className={scss.footer__item}>
                    <Rating ratingValue={5} />
                </div>
            </div>
        </div>
    )
}

export default Post
