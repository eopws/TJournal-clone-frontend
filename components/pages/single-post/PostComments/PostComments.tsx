import React from 'react';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import {default as DisLikeIcon} from '@material-ui/icons/ExpandMoreOutlined';
import {default as LikeIcon} from '@material-ui/icons/ExpandLessOutlined';
import scss from './PostComments.module.scss';
import { AddCommentForm } from '@components/pages/single-post/index';

const PostComments = () => {
    return (
        <div className={scss.comments}>
            <span className={`${scss.comments__count} container`}>228 комментариев</span>

            <div className={`${scss.comments__controls} container`}>
                <div className={scss.comments__controlsWrapper}>
                    <div className={scss.tabs}>
                        <span className={`${scss.tabs__item} ${scss.tabs__item_active}`}>Популярные</span>
                        <span className={scss.tabs__item}>По порядку</span>
                    </div>
                    <div className={scss.comments__subscribeBtn}>
                        <NotificationsOutlinedIcon />
                    </div>
                </div>
            </div>

            <div className="container">
                <AddCommentForm />
            </div>

            <div className={`${scss.comments__list} container`}>
                <div className={scss.comment}>
                    <div className={scss.comment__content}>
                        <div className={scss.comment__topBar}>
                            <div>
                                <img className={scss.comment__authorAvatar} src="https://leonardo.osnova.io/63b48b34-c9f4-9265-1711-455e451a6b82/-/scale_crop/108x108/-/format/webp/" />
                                <span className={scss.comment__authorNickname}>Автор</span>
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
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quo quisquam dignissimos qui, quidem facere laborum saepe facilis sit consequuntur. Earum facilis consequatur eligendi inventore. Velit quasi corporis animi modi?
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
            </div>
        </div>
    )
}

export default PostComments
