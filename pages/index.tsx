import type { NextPage } from 'next';

import { MainLayout, Post } from '@components/index';

const Home: NextPage = () => {
    return (
        <MainLayout className="main-layout-pt">
            {/* for test purposes */}
            <Post className="posts-list__post" />
        </MainLayout>
    )
}

export default Home
