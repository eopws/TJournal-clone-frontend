import React from 'react';

import { MainLayout } from '@components/index';
import { PostComments, SinglePost as PostComponent } from '@components/pages/single-post';

const SinglePost = () => {
    return (
        <MainLayout extended>
            <PostComponent />
            <br />
            <PostComments />
        </MainLayout>
    )
}

export default SinglePost
