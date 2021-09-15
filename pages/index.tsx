import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import { MainLayout, PostsList } from '@components/index';
import { IPost } from '@models/index';
import { PostService } from '@api/index';

const Home: NextPage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [arePostsFetching, setArePostsFetching] = useState<boolean>(false);

    useEffect(() => {
        setArePostsFetching(true);

        PostService.getAll()
            .then((response) => {
                setPosts(response.data);
            })
            .finally(() => {
                setArePostsFetching(false);
            });
    }, []);

    return (
        <MainLayout className="main-layout-pt">
            <PostsList
                posts={posts}
                arePostsFetching={arePostsFetching}
            />
        </MainLayout>
    )
}

export default Home
