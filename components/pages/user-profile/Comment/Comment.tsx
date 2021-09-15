import React, { FC } from 'react';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { IComment } from '@models/index';
import scss from './Comment.module.scss';

interface CommentProps {
    comment: IComment
    className: string
}

const Comment: FC<CommentProps> = ({ comment, className }) => {
    return (
        <div className={`${scss.comment} ${scss.userComments__comment} ${className}`}>
            <div className={scss.comment__topBar}>
                <div>
                    <img className={scss.comment__authorAvatar} src="https://leonardo.osnova.io/63b48b34-c9f4-9265-1711-455e451a6b82/-/scale_crop/108x108/-/format/webp/" />
                    <span className={scss.comment__authorNickname}>{comment.author.nickname}</span>
                    <span className={scss.comment__time}>{comment.createdAt}</span>
                </div>
                <div className={`${scss.comment__rating} ${scss.rating}`}>
                        <span className={`${scss.rating__value} ${scss.rating__value_neutral}`}>{comment.likes}</span>
                </div>
            </div>

            <div className={scss.comment__text}>
                <p>
                    {comment.content}
                </p>
            </div>

            <div className={`${scss.comment__footer} ${scss.commentFooter}`}>
                <span className={`${scss.commentFooter__item} ${scss.commentFooter__item_clickable}`}>
                    <BookmarkBorderOutlinedIcon fontSize="small" />
                </span>
                <span className={`${scss.commentFooter__item} ${scss.commentFooter__item_clickable}`}>
                    <MoreHorizIcon fontSize="small" />
                </span>
            </div>
        </div>
    )
}

export default Comment
