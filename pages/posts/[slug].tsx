import React from 'react';

import { MainLayout } from '@components/index';
import {default as PostComponent} from '@components/pages/single-post/Single-Post/SinglePost';

const SinglePost = () => {
    return (
        <MainLayout extended>
            <PostComponent />
        </MainLayout>
    )
}

export default SinglePost
