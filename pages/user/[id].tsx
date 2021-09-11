import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { CircularProgress } from '@material-ui/core';

import { PostService, UserService } from '@api/index';
import { MainLayout } from '@components/index';
import { Header, UserPosts } from '@components/pages/user-profile';
import { IPost, IUser } from '@models/index';

const UserProfile = () => {
    const [user, setUser]   = useState<IUser>();
    const [posts, setPosts] = useState<IPost[]>([]);

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

    return (
        <MainLayout extended>
            {user ?
                <Header
                    user={user}
                />
                :
                <div className="container">
                    <div className="loader">
                        <CircularProgress size={100} />
                    </div>
                </div>
            }

            <div className="userProfile__vertical-spacer" />

            <UserPosts
                posts={posts}
            />
        </MainLayout>
    )
}

export default UserProfile
