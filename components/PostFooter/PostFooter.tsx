import React, { FC } from 'react';

import scss from './PostFooter.module.scss';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import RepeatIcon from '@material-ui/icons/Repeat';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import { Rating } from '@components/index';
import { IPost } from '@models/index';

interface PostFooterProps {
    post: IPost
}

const PostFooter: FC<PostFooterProps> = ({ post }) => {
    return (
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
                <Rating ratingValue={post.likes} />
            </div>
        </div>
    )
}

export default PostFooter
