import React, { useEffect, useState } from 'react';

import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import scss from './PostComments.module.scss';
import { AddCommentForm, PostComment } from '@components/pages/single-post/index';
import { Tab, Tabs } from '@material-ui/core';

type Comment = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

type CommentsState = Comment[] | null;

const PostComments = () => {
    const [comments, setComments] = useState<CommentsState>(null);
    const [activeTab, setActiveTab] = useState(0);
    const [sortMethod, setSortMethod] = useState('name');

    useEffect(() => {
        const sortQuery = sortMethod ? '&_sort=' + sortMethod : '';

        fetch('https://jsonplaceholder.typicode.com/comments?_limit=20' + sortQuery)
            .then(response => response.json())
            .then(json => setComments(json))
    }, [sortMethod])

    const tabsChangeHandler = (_: any, newValue: number) => {
        setActiveTab(newValue);

        switch (newValue) {
            case 0:
                setSortMethod('name');
                break;

            case 1:
                setSortMethod('postId');
                break;
        }
    }

    return (
        <div className={scss.comments}>
            <span className={`${scss.comments__count} container`}>228 комментариев</span>

            <div className={`${scss.comments__controls} container`}>
                <div className={scss.comments__controlsWrapper}>
                    <Tabs
                        value={activeTab}
                        indicatorColor="primary"
                        onChange={tabsChangeHandler}
                    >
                        <Tab label="Популярные" />
                        <Tab label="По порядку" />
                    </Tabs>
                    <div className={scss.comments__subscribeBtn}>
                        <NotificationsOutlinedIcon />
                    </div>
                </div>
            </div>

            <div className="container">
                <AddCommentForm />
            </div>

            <div className={`${scss.comments__list} container`}>
                {comments !== null && comments.map((comment: Comment) =>
                    <PostComment key={comment.id} comment={comment} />
                )}
            </div>
        </div>
    )
}

export default PostComments
