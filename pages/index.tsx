import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import { MainLayout, PostsList } from '@components/index';
import { IPost } from '@models/index';
import { PostService } from '@api/index';

const Home: NextPage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        PostService.getAll()
            .then((response) => {
                setPosts(response.data);
            });
    }, []);

    return (
        <MainLayout className="main-layout-pt">
            <PostsList
                posts={posts}
            />
        </MainLayout>
    )
}

export default Home
