import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { CircularProgress } from '@material-ui/core';

import { CommentService, PostService, UserService } from '@api/index';
import { MainLayout } from '@components/index';
import { Header, UserComments, UserPosts } from '@components/pages/user-profile';
import { IComment, IPost, IUser, SortTypesEnum } from '@models/index';

const UserProfile = () => {
    const [user, setUser]   = useState<IUser>();
    const [posts, setPosts] = useState<IPost[]>([]);
    const [comments, setComments] = useState<IComment[]>([]);

    const [ activeTab, setActiveTab ] = useState<'Posts' | 'Comments'>('Posts');

    const [postsSort, setPostsSort] = useState<SortTypesEnum>(SortTypesEnum.newest);
    const [commentsSort, setCommentsSort] = useState<SortTypesEnum>(SortTypesEnum.newest);

    const router = useRouter();
    const id = router.query.id;

    useEffect(() => {
        if (typeof id === 'string') {
            UserService.getOne({ _id: id })
                .then((response) => {
                    setUser(response.data);
                });
        }
    }, [id]);

    useEffect(() => {
        if (typeof id === 'string') {
            PostService.getAll({ author: id }, postsSort)
                .then((response) => {
                    setPosts(response.data);
                });
        }
    }, [id, postsSort]);

    useEffect(() => {
        if (typeof id === 'string') {
            CommentService.getAll({ author: id }, commentsSort)
                .then((response) => {
                    setComments(response.data);
                });
        }
    }, [id, commentsSort]);

    let PageContent;

    switch (activeTab) {
        case 'Posts':
            PageContent = <UserPosts
                posts={posts}
                sortType={postsSort}
                setSortType={setPostsSort}
            />
            break;

        case 'Comments':
            PageContent = <UserComments
                comments={comments}
                sortType={commentsSort}
                setSortType={setCommentsSort}
            />
            break;
    }

    return (
        <MainLayout extended>
            {user ?
                <Header
                    user={user}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                :
                <div className="container">
                    <div className="loader">
                        <CircularProgress size={100} />
                    </div>
                </div>
            }

            <div className="userProfile__vertical-spacer" />

            {PageContent}
        </MainLayout>
    )
}

export default UserProfile
