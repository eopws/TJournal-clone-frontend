import React, { FC } from 'react';
import {default as DisLikeIcon} from '@material-ui/icons/ExpandMoreOutlined';
import {default as LikeIcon} from '@material-ui/icons/ExpandLessOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import scss from './PostComment.module.scss';

type Comment = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

interface PostCommentProps {
    comment: Comment
}

const PostComment: FC<PostCommentProps> = ({comment}) => {
    return (
        <div className={scss.comment}>
            <div className={scss.comment__content}>
                <div className={scss.comment__topBar}>
                    <div>
                        <img className={scss.comment__authorAvatar} src="https://leonardo.osnova.io/63b48b34-c9f4-9265-1711-455e451a6b82/-/scale_crop/108x108/-/format/webp/" />
                        <span className={scss.comment__authorNickname}>({comment.id}) {comment.name}</span>
                        <span className={scss.comment__time}>6 часов</span>
                    </div>
                    <div className={`${scss.comment__rating} ${scss.rating}`}>
                        <DisLikeIcon classes={{root: `${scss.rating__button} ${scss.rating__button_dislike}`}} />
                            <span className={`${scss.rating__value} ${scss.rating__value_positive}`}>140</span>
                        <LikeIcon classes={{root: `${scss.rating__button} ${scss.rating__button_like}`}} />
                    </div>
                </div>

                <div className={scss.comment__text}>
                    <p>
                        {comment.body}
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
