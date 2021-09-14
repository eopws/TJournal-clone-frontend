import React, { FC } from 'react';
import {default as DisLikeIcon} from '@material-ui/icons/ExpandMoreOutlined';
import {default as LikeIcon} from '@material-ui/icons/ExpandLessOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { IComment } from '@models/index';
import scss from './PostComment.module.scss';

interface PostCommentProps {
    comment: IComment
}

const PostComment: FC<PostCommentProps> = ({ comment }) => {
    return (
        <div className={scss.comment}>
            <div className={scss.comment__content}>
                <div className={scss.comment__topBar}>
                    <div>
                        <img className={scss.comment__authorAvatar} src="https://leonardo.osnova.io/63b48b34-c9f4-9265-1711-455e451a6b82/-/scale_crop/108x108/-/format/webp/" />
                        <span className={scss.comment__authorNickname}>{comment.author.nickname}</span>
                        <span className={scss.comment__time}>{comment.createdAt}</span>
                    </div>
                    <div className={`${scss.comment__rating} ${scss.rating}`}>
                        <DisLikeIcon classes={{root: `${scss.rating__button} ${scss.rating__button_dislike}`}} />
                            <span className={`${scss.rating__value} ${scss.rating__value_positive}`}>{comment.likes}</span>
                        <LikeIcon classes={{root: `${scss.rating__button} ${scss.rating__button_like}`}} />
                    </div>
                </div>

                <div className={scss.comment__text}>
                    <p>
                        {comment.content}
                    </p>
                </div>

                <div className={`${scss.comment__footer} ${scss.commentFooter}`}>
                    <span className={`${scss.commentFooter__item} ${scss.commentFooter__item_clickable}`}>
                        Ответить
                    </span>
                    <span className={`${scss.commentFooter__item} ${scss.commentFooter__item_clickable}`}>
                        <MoreHorizIcon fontSize="small" />
                    </span>
                </div>
            </div>
            <div className={scss.comment__children}>

            </div>
        </div>
    )
}

export default PostComment
