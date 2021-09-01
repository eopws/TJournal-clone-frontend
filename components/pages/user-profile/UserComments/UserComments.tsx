import React, { FC } from 'react';

import scss from './UserComments.module.scss';
import { SortBar } from '@components/pages/user-profile/index';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const UserComments: FC = () => {
    return (
        <div className={scss.userComments}>
            <SortBar />

            <div className={scss.userComments__list}>
                <div className={`${scss.comment} ${scss.userComments__comment}`}>
                    <div className={scss.comment__topBar}>
                        <div>
                            <img className={scss.comment__authorAvatar} src="https://leonardo.osnova.io/63b48b34-c9f4-9265-1711-455e451a6b82/-/scale_crop/108x108/-/format/webp/" />
                            <span className={scss.comment__authorNickname}>Автор</span>
                            <span className={scss.comment__time}>6 часов</span>
                        </div>
                        <div className={`${scss.comment__rating} ${scss.rating}`}>
                                <span className={`${scss.rating__value} ${scss.rating__value_neutral}`}>0</span>
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
                            <BookmarkBorderOutlinedIcon fontSize="small" />
                        </span>
                        <span className={`${scss.commentFooter__item} ${scss.commentFooter__item_clickable}`}>
                            <MoreHorizIcon fontSize="small" />
                        </span>
                    </div>
                </div>
                <div className={`${scss.comment} ${scss.userComments__comment}`}>
                    <div className={scss.comment__topBar}>
                        <div>
                            <img className={scss.comment__authorAvatar} src="https://leonardo.osnova.io/63b48b34-c9f4-9265-1711-455e451a6b82/-/scale_crop/108x108/-/format/webp/" />
                            <span className={scss.comment__authorNickname}>Автор</span>
                            <span className={scss.comment__time}>6 часов</span>
                        </div>
                        <div className={`${scss.comment__rating} ${scss.rating}`}>
                                <span className={`${scss.rating__value} ${scss.rating__value_positive}`}>140</span>
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
                            <BookmarkBorderOutlinedIcon fontSize="small" />
                        </span>
                        <span className={`${scss.commentFooter__item} ${scss.commentFooter__item_clickable}`}>
                            <MoreHorizIcon fontSize="small" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserComments
