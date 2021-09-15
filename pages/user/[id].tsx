import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { CircularProgress } from '@material-ui/core';

import { CommentService, PostService, UserService } from '@api/index';
import { MainLayout } from '@components/index';
import { Header, UserComments, UserPosts } from '@components/pages/user-profile';
import { IComment, IPost, IUser } from '@models/index';

const UserProfile = () => {
    const [user, setUser]   = useState<IUser>();
    const [posts, setPosts] = useState<IPost[]>([]);
    const [comments, setComments] = useState<IComment[]>([]);

    const [ activeTab, setActiveTab ] = useState<'Posts' | 'Comments'>('Posts');

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
            PostService.getAll({ author: id })
                .then((response) => {
                    setPosts(response.data);
                });
        }
    }, [id]);

    useEffect(() => {
        if (typeof id === 'string') {
            CommentService.getAll({ author: id })
                .then((response) => {
                    setComments(response.data);
                });
        }
    }, [id]);

    let PageContent;

    switch (activeTab) {
        case 'Posts':
            PageContent = <UserPosts posts={posts} />
            break;

        case 'Comments':
            PageContent = <UserComments comments={comments} />
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
