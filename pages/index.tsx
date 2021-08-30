import type { NextPage } from 'next'

import { MainLayout, Post } from '../components'

const Home: NextPage = () => {
    return (
        <MainLayout>
            {/* for test purposes */}
            <Post className="posts-list__post" />
        </MainLayout>
    )
}

export default Home
