import React, { FC, useState } from 'react';
import { CircularProgress, Tab, Tabs } from '@material-ui/core';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';

import { AddCommentForm, PostComment } from '@components/pages/single-post/index';
import { IComment, SortTypesEnum } from '@models/index';
import scss from './PostComments.module.scss';
import formatNumberedLabel from '@utils/formatNumberedLabel';

interface PostCommentsProps {
    comments: IComment[]
    areCommentsLoading: boolean
    setSortType: (sort: SortTypesEnum) => void
    addCommentFormSubmitHandler: (data: any) => void
}

const PostComments: FC<PostCommentsProps> = ({ comments, areCommentsLoading, setSortType, addCommentFormSubmitHandler }) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabsChangeHandler = (_: any, newValue: number) => {
        setActiveTab(newValue);

        switch (newValue) {
            case 0:
                setSortType(SortTypesEnum.popular);
                break;

            case 1:
                setSortType(SortTypesEnum.newest);
                break;
        }
    }

    let commentsLabel = '';

    if (comments.length === 0) {
        commentsLabel = 'Нет комментариев'
    } else {
        commentsLabel = formatNumberedLabel(comments.length, ['комментарий', 'комментария', 'комментариев'])
    }

    if (areCommentsLoading) {
        return (
            <div className={scss.comments}>
                <div className='container'>
                    <div className="loader">
                        <CircularProgress size={100} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={scss.comments}>
            <span className={`${scss.comments__count} container`}>{commentsLabel}</span>

            <div className={`${scss.comments__controls} container`}>
                <div className={scss.comments__controlsWrapper}>
                    {comments.length ?
                        <Tabs
                            value={activeTab}
                            indicatorColor="primary"
                            onChange={tabsChangeHandler}
                        >
                            <Tab label="Популярные" />
                            <Tab label="По порядку" />
                        </Tabs>
                        :
                        // empty symbol to move notifications to the right
                        <>&nbsp;</>
                    }
                    <div className={scss.comments__subscribeBtn}>
                        <NotificationsOutlinedIcon />
                    </div>
                </div>
            </div>

            <div className="container">
                <AddCommentForm
                    formSubmitHandler={addCommentFormSubmitHandler}
                />
            </div>

            <div className={`${scss.comments__list} container`}>
                {comments !== null && comments.map((comment) =>
                    <PostComment key={+comment.createdAt} comment={comment} />
                )}
            </div>
        </div>
    )
}

export default PostComments
